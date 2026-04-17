import os
import json
import httpx
import asyncio
from pathlib import Path
from dotenv import load_dotenv

# Load credentials
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

JIRA_URL = os.environ.get('JIRA_BASE_URL').rstrip('/')
JIRA_EMAIL = os.environ.get('JIRA_EMAIL')
JIRA_TOKEN = os.environ.get('JIRA_API_TOKEN')
auth = (JIRA_EMAIL, JIRA_TOKEN)

PROJECT_STATUS_PATH = ROOT_DIR.parent / 'docs' / 'project_status.json'

async def update_issue(issue_key, fields):
    print(f"Syncing {issue_key}...")
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}"
    payload = {
        "fields": fields
    }
    async with httpx.AsyncClient() as client:
        response = await client.put(url, json=payload, auth=auth)
        if response.status_code == 204:
            print(f"Successfully synced {issue_key}.")
        else:
            print(f"Error syncing {issue_key}: {response.status_code} - {response.text}")

async def update_sprint(sprint_id, goal):
    print(f"Updating Sprint {sprint_id} goal...")
    url = f"{JIRA_URL}/rest/agile/1.0/sprint/{sprint_id}"
    payload = {
        "goal": goal
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload, auth=auth)
        if response.status_code == 200:
            print(f"Successfully updated sprint goal.")
        else:
            print(f"Error updating sprint: {response.status_code} - {response.text}")

async def main():
    if not PROJECT_STATUS_PATH.exists():
        print(f"Error: {PROJECT_STATUS_PATH} not found.")
        return

    with open(PROJECT_STATUS_PATH, 'r') as f:
        status_data = json.load(f)

    # 1. Update Tasks
    tasks = []
    for task in status_data.get('tasks', []):
        fields = {
            "summary": task['summary'],
            "description": task['description'],
            "duedate": task.get('duedate'),
            "labels": task.get('labels', [])
        }
        tasks.append(update_issue(task['key'], fields))
    
    # 2. Update Sprint (Assuming Sprint ID 1 for now, or fetch active)
    # Note: Modern Jira Agile requires the 'goal' to be set via dedicated endpoint or update_sprint
    sprint_goal = status_data.get('sprint', {}).get('goal')
    if sprint_goal:
        # We try to update Sprint 1, in a real scenario we'd query the active sprint ID first
        tasks.append(update_sprint(1, sprint_goal))

    await asyncio.gather(*tasks)
    print("\nVS Code -> Jira Sync Complete.")

if __name__ == "__main__":
    asyncio.run(main())
