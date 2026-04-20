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
PROJECT_KEY = "PJM"

auth = (JIRA_EMAIL, JIRA_TOKEN)

PROJECT_STATUS_PATH = ROOT_DIR.parent / 'docs' / 'project_status.json'

async def get_issue(client, issue_key):
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}"
    response = await client.get(url, auth=auth)
    if response.status_code == 200:
        return response.json()
    return None

async def create_issue(client, fields):
    url = f"{JIRA_URL}/rest/api/2/issue"
    # Ensure mandatory fields
    payload = {
        "fields": {
            "project": {"key": PROJECT_KEY},
            "summary": fields.get("summary"),
            "description": fields.get("description", "Created from VS Code Sync Agent"),
            "issuetype": {"name": "Task"},
            "labels": fields.get("labels", []) + ["vscode-extra-log"]
        }
    }
    response = await client.post(url, json=payload, auth=auth)
    if response.status_code == 201:
        data = response.json()
        logger.info(f"Successfully created issue {data['key']}.")
        return data['key']
    else:
        logger.error(f"Error creating issue: {response.status_code} - {response.text}")
        return None

async def update_issue(client, issue_key, fields):
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}"
    payload = {"fields": {}}
    
    if "summary" in fields: payload["fields"]["summary"] = fields["summary"]
    if "description" in fields: payload["fields"]["description"] = fields["description"]
    if "labels" in fields: payload["fields"]["labels"] = fields["labels"]
    
    response = await client.put(url, json=payload, auth=auth)
    if response.status_code == 204:
        logger.info(f"Successfully updated {issue_key}.")
    else:
        logger.error(f"Error updating {issue_key}: {response.status_code} - {response.text}")

async def transition_issue(client, issue_key, status_name):
    # First, find the right transition ID for the status name
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/transitions"
    response = await client.get(url, auth=auth)
    if response.status_code != 200:
        logger.error(f"Could not fetch transitions for {issue_key}")
        return

    transitions = response.json().get('transitions', [])
    transition_id = None
    for t in transitions:
        if t['to']['name'].lower() == status_name.lower() or t['name'].lower() == status_name.lower():
            transition_id = t['id']
            break
    
    if transition_id:
        payload = {"transition": {"id": transition_id}}
        response = await client.post(url, json=payload, auth=auth)
        if response.status_code == 204:
            logger.info(f"Transitioned {issue_key} to {status_name}.")
        else:
            logger.error(f"Failed transition for {issue_key}: {response.text}")
    else:
        logger.debug(f"No transition found to '{status_name}' for {issue_key} or already there.")

async def log_work_comment(client, issue_key, summary, code_snippets=None):
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/comment"
    
    comment_body = f"h2. VS Code Work Log\n\n{summary}\n"
    if code_snippets:
        for filename, code in code_snippets.items():
            comment_body += f"\n*File: {filename}*\n{{code:javascript}}\n{code}\n{{code}}\n"
    
    payload = {"body": comment_body}
    response = await client.post(url, json=payload, auth=auth)
    if response.status_code == 201:
        logger.info(f"Logged work comment to {issue_key}.")
    else:
        logger.error(f"Error logging work to {issue_key}: {response.text}")

async def main():
    if not PROJECT_STATUS_PATH.exists():
        logger.error(f"Error: {PROJECT_STATUS_PATH} not found.")
        return

    with open(PROJECT_STATUS_PATH, 'r') as f:
        status_data = json.load(f)

    async with httpx.AsyncClient() as client:
        for task in status_data.get('tasks', []):
            issue_key = task.get('key')
            
            # 1. Existence Check / Creation
            existing_issue = None
            if issue_key:
                existing_issue = await get_issue(client, issue_key)
            
            if not existing_issue:
                issue_key = await create_issue(client, task)
                if not issue_key: continue
            else:
                # Update existing
                await update_issue(client, issue_key, task)
            
            # 2. Status Transition
            if 'status' in task:
                await transition_issue(client, issue_key, task['status'])

        logger.info("\nVS Code -> Jira Sync Complete.")

if __name__ == "__main__":
    asyncio.run(main())
