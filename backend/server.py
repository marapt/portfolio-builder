import os
import logging
import uuid
import re
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from pathlib import Path
from typing import List, Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO if os.environ.get('ENVIRONMENT') == 'production' else logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

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
        "url": instance_url.rstrip('/'),
        "email": email,
        "token": token
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
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME')
    if mongo_url and db_name:
        try:
            client = AsyncIOMotorClient(mongo_url)
            app.state.db_client = client
            app.state.db = client[db_name]
            logger.info(f"Connected to MongoDB: {db_name}")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            app.state.db = None
    else:
        logger.warning("MONGO_URL/DB_NAME not set. Running without persistent storage.")
        app.state.db = None

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

class JiraIssueCreate(BaseModel):
    project_key: str = "PMJ"
    summary: str
    description: str
    issue_type: str = "Task"

class ServiceStatus(BaseModel):
    status: str
    details: Optional[str] = None

class SystemHealth(BaseModel):
    mongodb: ServiceStatus
    jira: ServiceStatus
    emailjs: ServiceStatus
    gemini_ai: ServiceStatus
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# --- App & Router Setup ---

app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")

# Simple in-memory cache for Jira
jira_cache = {}
CACHE_EXPIRATION_SECONDS = 300

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
async def send_contact_email(request: ContactRequest):
    """Proxy contact form submissions to EmailJS."""
    config = get_emailjs_config()
    if not config:
        raise HTTPException(status_code=500, detail="Email service not configured")

    payload = {
        "service_id": config["service_id"],
        "template_id": config["template_id"],
        "user_id": config["public_key"],
        "accessToken": config["private_key"],
        "template_params": {
            "from_name": request.name,
            "reply_to": request.email,
            "message": request.message,
            "user_email": request.email
        }
    }

    try:
        response = await app.state.http_client.post(
            "https://api.emailjs.com/api/v1.0/email/send", 
            json=payload
        )
        if response.status_code != 200:
            logger.error(f"EmailJS error: {response.status_code} - {response.text}")
            raise HTTPException(status_code=500, detail="Failed to send email")
            
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        logger.error(f"Unexpected error sending email: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/jira/board/{board_id}")
async def get_jira_board(board_id: str):
    if not re.match(r"^[a-zA-Z0-9_-]+$", board_id):
        raise HTTPException(status_code=400, detail="Invalid board ID format")

    now = datetime.now(timezone.utc).timestamp()
    if board_id in jira_cache:
        cached_data, timestamp = jira_cache[board_id]
        if now - timestamp < CACHE_EXPIRATION_SECONDS:
            return cached_data

    config = get_jira_config()
    if not config:
        raise HTTPException(status_code=500, detail="Jira credentials not configured")
        
    url = f"{config['url']}/rest/agile/1.0/board/{board_id}/issue?fields=summary,status,priority,updated,description"
    
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

@api_router.post("/jira/issue")
async def create_jira_issue(issue: JiraIssueCreate):
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

# Include Router
app.include_router(api_router)

# CORS Configuration
env_origins = os.environ.get('CORS_ORIGINS', 'http://localhost:3000')
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