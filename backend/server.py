from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import httpx
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging first, before any use of logger
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
try:
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME')
    if not mongo_url or not db_name:
        raise ValueError("MONGO_URL and DB_NAME environment variables are required")
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    logger.info("Connected to MongoDB successfully")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {e}")
    raise

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=255)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Simple in-memory cache to avoid rate limiting and speed up response times
jira_cache = {}
CACHE_EXPIRATION_SECONDS = 300  # 5 minutes

@api_router.get("/jira/board/{board_id}")
async def get_jira_board(board_id: str):
    """
    Proxy request to Jira Cloud API to fetch board issues.
    Requires JIRA_INSTANCE_URL, JIRA_EMAIL, and JIRA_API_TOKEN in .env
    """
    # Input Validation: Ensure board_id is alphanumeric (Jira IDs are typically integers or short strings)
    if not re.match(r"^[a-zA-Z0-9_-]+$", board_id):
        logger.warning(f"Malicious board_id attempt blocked: {board_id}")
        raise HTTPException(status_code=400, detail="Invalid board ID format")

    # Support both your new naming and the previous naming
    instance_url = os.environ.get('JIRA_BASE_URL') or os.environ.get('JIRA_INSTANCE_URL')
    email = os.environ.get('JIRA_EMAIL') or os.environ.get('REACT_APP_JIRA_EMAIL')
    token = os.environ.get('JIRA_API_TOKEN') or os.environ.get('REACT_APP_JIRA_API_TOKEN')
    
    # Check cache first
    now = datetime.now(timezone.utc).timestamp()
    if board_id in jira_cache:
        cached_data, timestamp = jira_cache[board_id]
        if now - timestamp < CACHE_EXPIRATION_SECONDS:
            logger.info(f"Jira cache hit for board {board_id}")
            return cached_data

    if not all([instance_url, email, token]):
        logger.error("Jira credentials missing from environment variables")
        raise HTTPException(status_code=500, detail="Jira credentials not configured")
        
    # API endpoint for board issues
    url = f"{instance_url.rstrip('/')}/rest/agile/1.0/board/{board_id}/issue"
    
    async with httpx.AsyncClient() as http_client:
        try:
            # Jira uses Basic Auth with Email and API Token
            response = await http_client.get(url, auth=(email, token))
            response.raise_for_status()
            data = response.json()
            
            # Transform data for the frontend Scrum board
            transformed_issues = []
            for issue in data.get('issues', []):
                transformed_issues.append({
                    'key': issue.get('key'),
                    'summary': issue.get('fields', {}).get('summary'),
                    'status': issue.get('fields', {}).get('status', {}).get('name'),
                    'priority': issue.get('fields', {}).get('priority', {}).get('name'),
                    'updated': issue.get('fields', {}).get('updated')
                })
            
            result = {"issues": transformed_issues, "last_synced": datetime.now(timezone.utc).isoformat()}
            # Update cache
            jira_cache[board_id] = (result, now)
            return result
        except httpx.HTTPStatusError as exc:
            logger.error(f"Jira API error: {exc.response.status_code} - {exc.response.text}")
            raise HTTPException(status_code=exc.response.status_code, detail="Error fetching data from Jira")
        except Exception as exc:
            logger.error(f"Unexpected error during Jira proxy: {str(exc)}")
            raise HTTPException(status_code=500, detail="Internal server error connecting to Jira")

# Include the router in the main app
app.include_router(api_router)

class JiraIssueCreate(BaseModel):
    project_key: str = "PMJ" # Default to your project key
    summary: str
    description: str
    issue_type: str = "Task"

@api_router.post("/jira/issue")
async def create_jira_issue(issue: JiraIssueCreate):
    """
    Create a new issue in Jira via the proxy.
    Used to sync local recommendations/tasks to the Jira board.
    """
    instance_url = os.environ.get('JIRA_BASE_URL') or os.environ.get('JIRA_INSTANCE_URL')
    email = os.environ.get('JIRA_EMAIL') or os.environ.get('REACT_APP_JIRA_EMAIL')
    token = os.environ.get('JIRA_API_TOKEN') or os.environ.get('REACT_APP_JIRA_API_TOKEN')

    if not all([instance_url, email, token]):
        logger.error("Jira credentials missing from environment variables")
        raise HTTPException(status_code=500, detail="Jira credentials not configured")

    url = f"{instance_url.rstrip('/')}/rest/api/2/issue"
    
    payload = {
        "fields": {
            "project": {"key": issue.project_key},
            "summary": issue.summary,
            "description": issue.description,
            "issuetype": {"name": issue.issue_type}
        }
    }

    async with httpx.AsyncClient() as http_client:
        try:
            response = await http_client.post(
                url, 
                auth=(email, token), 
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            response.raise_for_status()
            data = response.json()
            
            logger.info(f"Successfully created Jira issue: {data.get('key')}")
            return {
                "status": "success",
                "jira_key": data.get("key"),
                "jira_url": f"{instance_url.rstrip('/')}/browse/{data.get('key')}"
            }
        except httpx.HTTPStatusError as exc:
            logger.error(f"Jira API POST error: {exc.response.status_code} - {exc.response.text}")
            raise HTTPException(
                status_code=exc.response.status_code, 
                detail=f"Jira API Error: {exc.response.text}"
            )
        except Exception as exc:
            logger.error(f"Unexpected error creating Jira issue: {str(exc)}")
            raise HTTPException(status_code=500, detail="Internal server error")

# Secure CORS Configuration
# Defaulting to a safe empty list if not provided to avoid open-access '*' in production
env_origins = os.environ.get('CORS_ORIGINS', 'http://localhost:3000')
allowed_origins = [o.strip() for o in env_origins.split(',')]

if os.environ.get('ENVIRONMENT') == 'production':
    if "*" in allowed_origins:
        logger.error("CRITICAL: CORS '*' is strictly forbidden in production. Defaulting to empty list.")
        allowed_origins = []

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization", "x-api-key"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()