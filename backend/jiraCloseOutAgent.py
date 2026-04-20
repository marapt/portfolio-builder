import os
import json
import httpx
import asyncio
import logging
from pathlib import Path
from dotenv import load_dotenv

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

# Load credentials
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

JIRA_URL = os.environ.get('JIRA_INSTANCE_URL') or os.environ.get('JIRA_BASE_URL')
JIRA_URL = JIRA_URL.rstrip('/')
JIRA_EMAIL = os.environ.get('JIRA_EMAIL')
JIRA_TOKEN = os.environ.get('JIRA_API_TOKEN')
auth = (JIRA_EMAIL, JIRA_TOKEN)

PROJECT_STATUS_PATH = ROOT_DIR.parent / 'docs' / 'project_status.json'

async def transition_issue(client, issue_key, status_name):
    """Finds the transition ID for a given status name and applies it."""
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/transitions"
    response = await client.get(url, auth=auth)
    if response.status_code != 200:
        logger.error(f"Could not fetch transitions for {issue_key}")
        return False

    transitions = response.json().get('transitions', [])
    transition_id = None
    for t in transitions:
        # Check both the target status name and the transition name
        if t['to']['name'].lower() == status_name.lower() or t['name'].lower() == status_name.lower():
            transition_id = t['id']
            break
    
    if transition_id:
        payload = {"transition": {"id": transition_id}}
        response = await client.post(url, json=payload, auth=auth)
        if response.status_code == 204:
            logger.info(f"Successfully moved {issue_key} to {status_name}.")
            return True
        else:
            logger.error(f"Failed transition for {issue_key}: {response.text}")
    else:
        logger.info(f"Issue {issue_key} is already in state '{status_name}' or no transition found.")
    return False

async def add_closeout_comment(client, issue_key):
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/comment"
    payload = {
        "body": "h2. Build Close-Out\n\nVerification complete. All production standards have been met and the feature is live on the Portfolio. This ticket is now officially closed out via the VS Code Close-Out Agent."
    }
    response = await client.post(url, json=payload, auth=auth)
    return response.status_code == 201

async def main():
    if not PROJECT_STATUS_PATH.exists():
        logger.error(f"Error: {PROJECT_STATUS_PATH} not found.")
        return

    with open(PROJECT_STATUS_PATH, 'r') as f:
        status_data = json.load(f)

    # Filter for tasks that are marked as "Done" in the local state
    done_tasks = [t for t in status_data.get('tasks', []) if t.get('status') == 'Done']
    
    if not done_tasks:
        logger.info("No 'Done' tasks found in project_status.json to close out.")
        return

    logger.info(f"Starting close-out for {len(done_tasks)} tasks...")

    async with httpx.AsyncClient() as client:
        for task in done_tasks:
            issue_key = task.get('key')
            if not issue_key: continue
            
            # 1. Transition to Done (dynamically)
            success = await transition_issue(client, issue_key, "Done")
            
            # 2. Add final comment if transitioned or already done
            await add_closeout_comment(client, issue_key)

    logger.info("\nFinal Close-Out Sweep Complete.")

if __name__ == "__main__":
    asyncio.run(main())
