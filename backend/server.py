import os
import json
import logging
import uuid
import re
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from pathlib import Path
from typing import List, Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException, Depends, Header
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict
from starlette.middleware.cors import CORSMiddleware
import google.generativeai as genai

from data.seed_data import MOCK_FINDINGS
from local_db import LocalDB

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO if os.environ.get('ENVIRONMENT') == 'production' else logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configure Gemini
api_key = os.environ.get("GOOGLE_API_KEY")
if api_key and "your-gemini-api-key" not in api_key:
    genai.configure(api_key=api_key)

# --- Configuration Helpers ---

def get_jira_config():
    """
    Centralized Jira configuration retrieval.
    IMPORTANT: These variables must NOT have a 'REACT_APP_' prefix to prevent 
    accidental leakage to the frontend bundle by build systems.
    """
    instance_url = os.environ.get('JIRA_INSTANCE_URL') or os.environ.get('JIRA_BASE_URL')
    email = os.environ.get('JIRA_EMAIL')
    token = os.environ.get('JIRA_API_TOKEN')
    
    if not all([instance_url, email, token]):
        logger.error("Jira credentials missing from environment variables")
        return None
    
    return {
        "url": instance_url.strip().rstrip('/'),
        "email": email.strip(),
        "token": token.strip()
    }

def get_emailjs_config():
    """
    Centralized EmailJS configuration retrieval.
    All keys are stored on the backend to prevent exposure to the client browser.
    """
    service_id = os.environ.get('EMAILJS_SERVICE_ID')
    template_id = os.environ.get('EMAILJS_TEMPLATE_ID')
    public_key = os.environ.get('EMAILJS_PUBLIC_KEY')
    private_key = os.environ.get('EMAILJS_PRIVATE_KEY')

    if not all([service_id, template_id, public_key, private_key]):
        logger.error("EmailJS credentials missing from environment variables")
        return None

    return {
        "service_id": service_id,
        "template_id": template_id,
        "public_key": public_key,
        "private_key": private_key
    }

# --- Lifespan Management ---

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic
    logger.info("Starting up resources...")
    
    # 1. MongoDB Client
    mongo_url = os.environ.get('MONGO_URL') or os.environ.get('MONGODB_URI') or os.environ.get('MONO_URL')
    db_name = os.environ.get('DB_NAME') or 'portfolio'
    if mongo_url and db_name:
        try:
            client = AsyncIOMotorClient(mongo_url)
            app.state.db_client = client
            app.state.db = client[db_name]
            logger.info(f"Connected to MongoDB: {db_name}")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}. Falling back to Local JSON DB.")
            app.state.db = LocalDB()
    else:
        logger.warning("MONGO_URL/DB_NAME not set. Falling back to Local JSON DB.")
        app.state.db = LocalDB()

    # 2. HTTPX Client for external proxies
    app.state.http_client = httpx.AsyncClient(timeout=10.0)
    
    yield
    
    # Shutdown logic
    logger.info("Shutting down resources...")
    if hasattr(app.state, 'db_client'):
        app.state.db_client.close()
    await app.state.http_client.aclose()

# --- Dependencies ---

async def get_db():
    db = getattr(app.state, "db", None)
    if db is None:
        raise HTTPException(
            status_code=503, 
            detail="Database connection not available. Running in non-persistent dev mode."
        )
    return db

async def verify_api_key(x_api_key: str = Header(None)):
    """Validates the optional internal API key for proxied requests."""
    expected_key = os.environ.get('INTERNAL_API_KEY')
    if not expected_key:
        return # Skip if not configured
    
    if x_api_key != expected_key:
        logger.warning(f"Unauthorized API access attempt with key: {x_api_key}")
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return x_api_key

# --- Models ---

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=255)

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str
    category: Optional[str] = "General Inquiry"

class JiraIssueCreate(BaseModel):
    project_key: str = "PJM"
    summary: str
    description: str
    issue_type: str = "Task"

class ServiceStatus(BaseModel):
    status: str
    details: Optional[str] = None

class JiraSprint(BaseModel):
    id: int
    name: str
    state: str
    goal: Optional[str] = None
    startDate: Optional[datetime] = None
    endDate: Optional[datetime] = None
    completeDate: Optional[datetime] = None

class SystemHealth(BaseModel):
    mongodb: ServiceStatus
    jira: ServiceStatus
    emailjs: ServiceStatus
    gemini_ai: ServiceStatus
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class AgentMessage(BaseModel):
    role: str
    name: str
    time: str
    text: str

class InteractionReq(BaseModel):
    finding_id: str
    text: str

class DecisionReq(BaseModel):
    finding_id: str
    decision: str # "approved" or "blocked"

class SocialDraftReq(BaseModel):
    title: str
    content: str

# --- App & Router Setup ---

app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")

# Simple in-memory cache for Jira
jira_cache = {}
CACHE_EXPIRATION_SECONDS = 30

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Portfolio Builder API is running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate, db=Depends(get_db)):
    status_obj = StatusCheck(client_name=input.client_name)
    doc = status_obj.model_dump()
    
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(db=Depends(get_db)):
    cursor = db.status_checks.find({}, {"_id": 0})
    checks = await cursor.to_list(1000)
    return checks

@api_router.get("/health", response_model=SystemHealth)
async def get_system_health():
    """Diagnostic endpoint to check the status of external services and config."""
    # 1. MongoDB Check
    db = getattr(app.state, "db", None)
    mongodb_status = ServiceStatus(status="Connected") if db is not None else ServiceStatus(status="Disconnected", details="MONGO_URL or DB_NAME not configured correctly.")

    # 2. Jira Check
    jira_config = get_jira_config()
    jira_status = ServiceStatus(status="Configured") if jira_config else ServiceStatus(status="Missing", details="Jira credentials missing from environment.")

    # 3. EmailJS Check
    emailjs_config = get_emailjs_config()
    emailjs_status = ServiceStatus(status="Configured") if emailjs_config else ServiceStatus(status="Missing", details="EmailJS credentials missing from environment.")

    # 4. Gemini AI Check
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key or "your-gemini-api-key" in api_key:
        gemini_status = ServiceStatus(status="Missing", details="GOOGLE_API_KEY is missing or set to a placeholder.")
    else:
        gemini_status = ServiceStatus(status="Configured")

    return SystemHealth(
        mongodb=mongodb_status,
        jira=jira_status,
        emailjs=emailjs_status,
        gemini_ai=gemini_status
    )

@api_router.post("/contact")
async def send_contact_email(request: ContactRequest, _ = Depends(verify_api_key)):
    """Proxy contact form submissions to EmailJS with categorized subject lines."""
    config = get_emailjs_config()
    if not config:
        raise HTTPException(status_code=500, detail="Email service not configured")

    # Smart Subject Line Logic
    subject_tag = f"[{request.category}]" if request.category else "[General]"
    
    payload = {
        "service_id": config["service_id"],
        "template_id": config["template_id"],
        "user_id": config["public_key"],
        "accessToken": config["private_key"],
        "template_params": {
            "from_name": request.name,
            "reply_to": request.email,
            "message": request.message,
            "user_email": request.email,
            "category": request.category,
            "subject_suffix": f"New Lead: {subject_tag}"
        }
    }

    # EmailJS requires browser-like headers when "non-browser environments" is disabled
    emailjs_headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "Origin": "https://maramartins.com",
        "Referer": "https://maramartins.com/"
    }

    try:
        response = await app.state.http_client.post(
            "https://api.emailjs.com/api/v1.0/email/send", 
            json=payload,
            headers=emailjs_headers
        )
        if response.status_code != 200:
            logger.error(f"EmailJS error: {response.status_code} - {response.text}")
            raise HTTPException(status_code=500, detail="Failed to send email")
            
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        logger.error(f"Unexpected error sending email: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/jira/board/{board_id}")
async def get_jira_board(board_id: str, _ = Depends(verify_api_key)):
    if not re.match(r"^[a-zA-Z0-9_-]+$", board_id):
        raise HTTPException(status_code=400, detail="Invalid board ID format")

    now = datetime.now(timezone.utc).timestamp()
    
    # Clean up expired cache entries to prevent memory leaks over time
    expired_keys = [k for k, v in jira_cache.items() if now - v[1] >= CACHE_EXPIRATION_SECONDS]
    for k in expired_keys:
        del jira_cache[k]
        
    if board_id in jira_cache:
        cached_data, timestamp = jira_cache[board_id]
        if now - timestamp < CACHE_EXPIRATION_SECONDS:
            return cached_data

    config = get_jira_config()
    if not config:
        raise HTTPException(status_code=500, detail="Jira credentials not configured")
        
    url = f"{config['url']}/rest/agile/1.0/board/{board_id}/issue?fields=summary,status,priority,updated,description,duedate,labels"
    
    try:
        response = await app.state.http_client.get(
            url, 
            auth=(config['email'], config['token'])
        )
        response.raise_for_status()
        data = response.json()
        
        transformed_issues = []
        for issue in data.get('issues', []):
            transformed_issues.append({
                'key': issue.get('key'),
                'summary': issue.get('fields', {}).get('summary'),
                'status': issue.get('fields', {}).get('status', {}).get('name'),
                'priority': issue.get('fields', {}).get('priority', {}).get('name'),
                'updated': issue.get('fields', {}).get('updated'),
                'description': issue.get('fields', {}).get('description'),
                'duedate': issue.get('fields', {}).get('duedate'),
                'labels': issue.get('fields', {}).get('labels', []),
                'url': f"{config['url']}/browse/{issue.get('key')}"
            })
        
        result = {"issues": transformed_issues, "last_synced": datetime.now(timezone.utc).isoformat()}
        jira_cache[board_id] = (result, now)
        return result
    except httpx.HTTPStatusError as exc:
        logger.error(f"Jira API error: {exc.response.status_code}")
        raise HTTPException(status_code=exc.response.status_code, detail="Error fetching from Jira")
    except Exception as exc:
        logger.error(f"Unexpected Jira error: {str(exc)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/jira/board/{board_id}/sprints", response_model=List[JiraSprint])
async def get_jira_sprints(board_id: str, _ = Depends(verify_api_key)):
    """Proxy to fetch sprints for a specific board."""
    config = get_jira_config()
    if not config:
        raise HTTPException(status_code=500, detail="Jira credentials not configured")
        
    url = f"{config['url']}/rest/agile/1.0/board/{board_id}/sprint"
    
    try:
        response = await app.state.http_client.get(
            url, 
            auth=(config['email'], config['token'])
        )
        response.raise_for_status()
        data = response.json()
        
        sprints = []
        for s in data.get('values', []):
            sprints.append(JiraSprint(**s))
            
        return sprints
    except Exception as exc:
        logger.error(f"Error fetching sprints: {str(exc)}")
        raise HTTPException(status_code=500, detail="Error fetching sprints from Jira")

@api_router.get("/project/roadmap")
async def get_project_roadmap(_ = Depends(verify_api_key)):
    """Fetch the project roadmap from local project_status.json."""
    roadmap_path = ROOT_DIR.parent / 'docs' / 'project_status.json'
    if not roadmap_path.exists():
        raise HTTPException(status_code=404, detail="Roadmap file not found")
    
    try:
        with open(roadmap_path, 'r') as f:
            data = json.load(f)
        return data
    except Exception as e:
        logger.error(f"Error reading roadmap: {e}")
        raise HTTPException(status_code=500, detail="Error reading roadmap data")

@api_router.post("/jira/issue")
async def create_jira_issue(issue: JiraIssueCreate, _ = Depends(verify_api_key)):
    config = get_jira_config()
    if not config:
        raise HTTPException(status_code=500, detail="Jira credentials not configured")

    url = f"{config['url']}/rest/api/2/issue"
    payload = {
        "fields": {
            "project": {"key": issue.project_key},
            "summary": issue.summary,
            "description": issue.description,
            "issuetype": {"name": issue.issue_type}
        }
    }

    try:
        response = await app.state.http_client.post(
            url, 
            auth=(config['email'], config['token']), 
            json=payload
        )
        response.raise_for_status()
        data = response.json()
        
        return {
            "status": "success",
            "jira_key": data.get("key"),
            "jira_url": f"{config['url']}/browse/{data.get('key')}"
        }
    except httpx.HTTPStatusError as exc:
        logger.error(f"Jira POST error: {exc.response.status_code}")
        raise HTTPException(status_code=exc.response.status_code, detail=f"Jira API Error: {exc.response.text}")
    except Exception as exc:
        logger.error(f"Unexpected error: {str(exc)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# --- Interactive Live Dashboards API ---

@api_router.get("/governance/findings")
async def get_governance_findings(db=Depends(get_db)):
    """Fetch live agent findings from MongoDB. Seed if empty."""
    count = await db.findings.count_documents({})
    if count == 0:
        logger.info("Seeding MongoDB with initial MOCK_FINDINGS...")
        await db.findings.insert_many(MOCK_FINDINGS)
    
    cursor = db.findings.find({}, {"_id": 0})
    findings = await cursor.to_list(100)
    return findings

@api_router.post("/governance/auth")
async def verify_governance_access(payload: dict):
    """Verify the access key against the internal secret."""
    key = payload.get("key")
    if key == os.environ.get("INTERNAL_API_KEY"):
        return {"status": "success", "token": "session_active"}
    raise HTTPException(status_code=401, detail="Chave de Acesso Inválida")

@api_router.post("/governance/findings/batch")
async def batch_upsert_findings(findings: List[dict], db=Depends(get_db), _ = Depends(verify_api_key)):
    """Allow automated agents to push a full suite of findings in one go."""
    # To keep the dashboard clean and reflecting only the LATEST audit,
    # we clear previous automated findings and insert the new batch.
    # We preserve manual LQA reports (ids starting with 'lqa-').
    
    await db.findings.delete_many({"id": {"$not": re.compile(r"^lqa-")}})
    
    # Ensure every finding has a timestamp and a unique ID if missing
    for f in findings:
        if "id" not in f:
            f["id"] = f"qa-{uuid.uuid4().hex[:6]}"
        if "timestamp" not in f:
            f["timestamp"] = datetime.now(timezone.utc).isoformat()
            
    if findings:
        await db.findings.insert_many(findings)
        
    return {"status": "success", "count": len(findings)}

@api_router.post("/governance/report")
async def create_governance_report(report: dict, db=Depends(get_db), _ = Depends(verify_api_key)):
    """Handle visual LQA reports: Create Jira issue and update MongoDB findings."""
    config = get_jira_config()
    
    # 1. Create Jira Issue
    agent_name = report.get('agent', 'Tiago')
    is_legal = "Elena" in agent_name or "Marcus" in agent_name
    project_key = "LEGAL" if is_legal else "PJM"
    
    summary = f"[{'LEGAL' if is_legal else 'LQA'}] {agent_name} - {report.get('originalText')[:30]}..."
    description = (
        f"{'LEGAL' if is_legal else 'LQA'} Bug Report from Mara Martins Live Audit\n\n"
        f"Element: {report.get('selector')}\n"
        f"Original Text (EN): {report.get('originalText')}\n"
        f"Suggested Fix ({report.get('locale', 'pt-PT')}): {report.get('suggestedFix')}\n"
        f"Page: {report.get('url')}\n\n"
        f"Assigned Agent Specialty: {agent_name}"
    )
    
    jira_url = f"{config['url']}/rest/api/2/issue"
    payload = {
        "fields": {
            "project": {"key": project_key},
            "summary": summary,
            "description": description,
            "issuetype": {"name": "Task"}
        }
    }
    
    jira_resp = await app.state.http_client.post(jira_url, auth=(config['email'], config['token']), json=payload)
    jira_data = jira_resp.json()
    
    # 2. Add to MongoDB Findings as FAIL
    finding = {
        "id": f"lqa-{uuid.uuid4().hex[:6]}",
        "agent": report.get('agent', 'Tiago | pt-PT Linguist'),
        "status": "FAIL",
        "category": "Localization QA" if report.get('agent') == "Tiago" else "Legal Compliance",
        "message": f"Leak detected: {report.get('originalText')[:50]}",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "explanation": f"LQA error reported during manual audit: {report.get('suggestedFix')}",
        "interactionLog": [
            {"role": "user", "name": "Mara Martins", "time": datetime.now().strftime("%H:%M"), "text": f"Found a leak on {report.get('url')}: {report.get('originalText')}"},
            {"role": "agent", "name": report.get('agent'), "time": datetime.now().strftime("%H:%M"), "text": f"Acknowledged. Jira issue {jira_data.get('key')} created. I am applying the fix now."}
        ]
    }
    await db.findings.insert_one(finding)
    
    return {"status": "success", "jira_key": jira_data.get('key')}

@api_router.post("/governance/interaction")
async def create_governance_interaction(req: InteractionReq, db=Depends(get_db)):
    # Allow virtual finding for live audits
    if req.finding_id == 'lqa_live_audit':
        finding = {"agent": "Tiago | pt-PT Linguist", "interactionLog": []}
    else:
        finding = await db.findings.find_one({"id": req.finding_id})
        if not finding:
            raise HTTPException(status_code=404, detail="Finding not found")

    user_msg = {
        "role": "user",
        "name": "Mara Martins",
        "time": datetime.now(timezone.utc).strftime("%H:%M"),
        "text": req.text
    }
    
    # 1. Save user msg immediately
    await db.findings.update_one(
        {"id": req.finding_id},
        {"$push": {"interactionLog": user_msg}}
    )

    # 2. Generate AI Reply
    agent_name = finding.get("agent", "Agent")
    system_prompt = f"You are {agent_name}, an expert strategist. Respond to Mara Martins. KEEP IT BRIEF (MAX 2 SENTENCES). Ignore technical HTML noise. Focus only on the linguistic or operational fix requested. Be fast."
    
    try:
        model = genai.GenerativeModel('gemini-2.0-flash', system_instruction=system_prompt)
        prompt = f"CONTEXT: {req.text}\nUSER QUERY: {req.text}"
        resp = model.generate_content(prompt, generation_config={"max_output_tokens": 150})
        ai_text = resp.text
    except Exception as e:
        logger.error(f"Gemini API Error: {e}")
        ai_text = f"Input received. (My AI connectivity is currently degraded: {str(e)}). I will parse this query offline."

    agent_reply = {
        "role": "agent",
        "name": agent_name,
        "time": datetime.now(timezone.utc).strftime("%H:%M"),
        "text": ai_text
    }

    # 3. Save AI reply
    await db.findings.update_one(
        {"id": req.finding_id},
        {"$push": {"interactionLog": agent_reply}}
    )

    return agent_reply

@api_router.post("/governance/decision")
async def register_governance_decision(req: DecisionReq, db=Depends(get_db), _ = Depends(verify_api_key)):
    finding = await db.findings.find_one({"id": req.finding_id})
    if not finding:
        raise HTTPException(status_code=404, detail="Finding not found")
        
    resolution_text = "Approved by Mara Martins — Tracked in registry." if req.decision == "approved" else "Blocked by Mara Martins."
    
    await db.findings.update_one(
        {"id": req.finding_id},
        {"$set": {"decision": req.decision, "resolution": resolution_text}}
    )
    return {"status": "success", "decision": req.decision, "resolution": resolution_text}

@api_router.post("/governance/social-draft")
async def draft_social_post(req: SocialDraftReq, _ = Depends(verify_api_key)):
    """Avery | Comms Manager Agent - Generates LinkedIn posts from blog content."""
    system_prompt = (
        "You are Avery, the Comms Manager Agent for Mara Martins. Your persona is highly professional, "
        "strategic, and slightly technical. You specialize in translating program management milestones into "
        "engaging LinkedIn posts. Write a single, highly polished LinkedIn post based on the provided blog content. "
        "Include exactly 3 highly relevant hashtags. Omit placeholders. Keep it actionable and authoritative."
    )
    try:
        model = genai.GenerativeModel('gemini-2.5-flash-8b', system_instruction=system_prompt)
        prompt = f"Blog Title: {req.title}\n\nBlog Content snippet:\n{req.content}\n\nPlease draft the LinkedIn post."
        resp = model.generate_content(prompt)
        return {"agent": "Avery", "draft": resp.text.strip()}
    except Exception as e:
        logger.error(f"Generate Content Error (Avery): {e}")
        raise HTTPException(status_code=503, detail="Avery is currently unavailable. Please check AI core link.")

@api_router.post("/governance/report")
async def report_governance_issue(req: dict, db=Depends(get_db), x_api_key: str = Header(None)):
    config = get_jira_config()
    if not config:
        raise HTTPException(status_code=500, detail="Jira not configured")

    # 1. Security Check: Validate Key
    if x_api_key != os.environ.get('INTERNAL_API_KEY'):
        raise HTTPException(status_code=403, detail="Unauthorized governance report")

    # 2. Hardening: Payload Capping
    original_text = req.get('originalText', '')[:1000]
    suggested_fix = req.get('suggestedFix', '')[:1000]
    
    if len(original_text) < 2:
        raise HTTPException(status_code=400, detail="Insignificant payload")

    summary = f"LQA Error Found: {req.get('originalText')[:30]}..."
    description = (
        f"*LQA Error Report*\n\n"
        f"*Detected Text:* {original_text}\n"
        f"*Suggested Fix:* {suggested_fix}\n"
        f"*Agent:* {req.get('agent')}\n"
        f"*Selector:* {req.get('selector')}\n"
        f"*URL:* {req.get('url')}\n"
        f"*Locale:* {req.get('locale')}\n"
    )
    
    url = f"{config['url']}/rest/api/2/issue"
    payload = {
        "fields": {
            "project": {"key": "PJM"},
            "summary": summary,
            "description": description,
            "issuetype": {"name": "Bug"},
            "labels": ["LQA", "Human_Reported", req.get("locale")]
        }
    }

    try:
        response = await app.state.http_client.post(
            url, 
            auth=(config['email'], config['token']), 
            json=payload
        )
        response.raise_for_status()
        data = response.json()
        
        return {
            "status": "success",
            "jira_key": data.get("key"),
            "jira_url": f"{config['url']}/browse/{data.get('key')}"
        }
    except Exception as exc:
        logger.error(f"LQA Report Error: {str(exc)}")
        raise HTTPException(status_code=500, detail="Failed to create Jira ticket")

@api_router.get("/legal/compliance")
async def get_legal_compliance():
    """Elena's automated legal compliance check and attribution."""
    current_year = datetime.now(timezone.utc).year
    return {
        "status": "compliant",
        "agent": "Elena | Legal Lead",
        "copyright": f"© {current_year} Mara Martins. All Rights Reserved.",
        "disclosures": [
            {"type": "GDPR", "status": "Active", "last_audit": "2024-04-23"},
            {"type": "CCPA", "status": "Active", "last_audit": "2024-04-23"},
            {"type": "Privacy Policy", "url": "/privacy"}
        ],
        "compliance_score": 100,
        "message": "Legal foundations are solid. No IP risks detected."
    }

@api_router.get("/gtm/phases")
async def get_gtm_phases():
    """Returns the GTM phases, dynamically resolving Jira blockers in real-time."""
    # Start with the static baseline
    phases = [
      {
        "id": 1, "name": "Home Base", "subtitle": "en-US Launch", "region": "North America",
        "flag": "🇺🇸", "locale": "en-US", "status": "ACTIVE", "color": "emerald",
        "coords": {"top": "28%", "left": "18%"},
        "markets": ["Silicon Valley", "Seattle", "New York", "Toronto"],
        "audience": ["Senior Tech Recruiters", "Heads of Localization", "Program Directors"],
        "metrics": ["≥3 inbound recruiter contacts/month", "CV download rate ≥5%", "Time on site ≥2 min"],
        "blockers": [],
        "approved": True,
      },
      {
        "id": 2, "name": "EU Expansion", "subtitle": "pt-PT Launch", "region": "Europe",
        "flag": "🇵🇹", "locale": "pt-PT", "status": "ACTIVE", "color": "emerald",
        "coords": {"top": "28%", "left": "46%"},
        "markets": ["Lisbon", "Porto", "London", "Amsterdam", "Berlin"],
        "audience": ["EU Tech Startups", "Portuguese Companies", "EUATC Network"],
        "metrics": ["≥2 EU contacts/month", "pt-PT toggle ≥15% sessions", "Indexed on google.pt"],
        "blockers": [],
        "approved": True,
      },
      {
        "id": 3, "name": "LATAM Entry", "subtitle": "es-419 / pt-BR TBD", "region": "Latin America",
        "flag": "🌎", "locale": "TBD", "status": "FUTURE", "color": "blue",
        "coords": {"top": "58%", "left": "26%"},
        "markets": ["Mexico City", "São Paulo", "Buenos Aires", "Bogotá"],
        "audience": ["LATAM Tech Scale-ups", "Multinational Expansion Teams"],
        "metrics": ["Locale selection decided", "≥1 LATAM contact/month", "Regional SEO indexed"],
        "blockers": ["Locale decision required: es-419 vs pt-BR (PJM-72)", "No LATAM-specific content yet", "Legal compliance research needed (PJM-74)"],
        "approved": False,
      },
      {
        "id": 4, "name": "APAC Vision", "subtitle": "zh-TW / ja-JP TBD", "region": "Asia Pacific",
        "flag": "🌏", "locale": "TBD", "status": "FUTURE", "color": "violet",
        "coords": {"top": "38%", "left": "76%"},
        "markets": ["Taipei", "Tokyo", "Singapore", "Hong Kong"],
        "audience": ["Semiconductor Companies", "APAC Tech Leaders", "Global Consultancies"],
        "metrics": ["CJK rendering feasibility complete", "Specialist linguist agents built"],
        "blockers": ["Business vision definition required (PJM-75)", "CJK rendering engineering needed (PJM-76)", "Specialist agents not yet built"],
        "approved": False,
      }
    ]

    config = get_jira_config()
    if not config:
        return phases # Return raw without live Jira sync if degraded

    # Live Jira Parsing Loop
    try:
        # Fetch board issues (assuming active issues are returned)
        board_id = "1" # Hardcoded default for this portfolio
        # Fetch all PJM issues to ensure we see 'Done' tickets correctly
        response = await app.state.http_client.get(
            f"{config['url']}/rest/api/2/search?jql=project=PJM&fields=status&maxResults=100",
            auth=(config['email'], config['token'])
        )
        if response.status_code == 200:
            issues = response.json().get('issues', [])
            # Map issues by key to their status names
            issue_statuses = { i['key']: i.get('fields', {}).get('status', {}).get('name', '').lower() for i in issues }
            
            for phase in phases:
                active_blockers = []
                for blocker in phase["blockers"]:
                    # Match PJM-XX from blocker strictly
                    match = re.search(r'(PJM-\d+)', blocker)
                    if match:
                        key = match.group(1)
                        status = issue_statuses.get(key, "").lower()
                        # If the ticket exists and is Done, we REMOVE the blocker!
                        if status == "done" or status == "closed":
                            continue 
                    # If it doesn't match a Done Jira issue, keep it as a blocker
                    active_blockers.append(blocker)
                
                phase["blockers"] = active_blockers
                
                # Auto-upgrade logic: If Phase 2 drops to 0 blockers, signal it.
                if len(phase["blockers"]) == 0 and not phase["approved"] and phase["id"] == 2:
                    phase["status"] = "ACTIVE"
                    
    except Exception as e:
        logger.error(f"Live Jira sync degraded: {e}")
        
    return phases


# Include Router
app.include_router(api_router)

# CORS Configuration
env_origins = os.environ.get('CORS_ORIGINS', 'http://localhost:3000,https://maramartins.com,https://www.maramartins.com')
allowed_origins = [o.strip() for o in env_origins.split(',')]

if os.environ.get('ENVIRONMENT') == 'production' and "*" in allowed_origins:
    logger.error("CRITICAL: CORS '*' forbidden in production. Clearing origins.")
    allowed_origins = []

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization", "x-api-key"],
)

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("API_PORT", 8000))
    host = os.environ.get("API_HOST", "0.0.0.0")
    debug = os.environ.get("DEBUG", "false").lower() == "true"
    
    uvicorn.run("server:app", host=host, port=port, reload=debug, log_level="info")