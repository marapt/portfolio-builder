import os
import re
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
BOARD_ID = os.environ.get('JIRA_BOARD_ID', '1')

auth = (JIRA_EMAIL, JIRA_TOKEN)

async def update_issue(issue_key, summary, description):
    print(f"Cleaning up {issue_key}: {summary}...")
    url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}"
    payload = {
        "fields": {
            "summary": summary,
            "description": description
        }
    }
    async with httpx.AsyncClient() as client:
        response = await client.put(url, json=payload, auth=auth)
        if response.status_code != 204:
            print(f"Error updating {issue_key}: {response.status_code} - {response.text}")

async def create_issue(summary, description, issue_type="Task", project_key="PJM"):
    print(f"Creating task: {summary}...")
    url = f"{JIRA_URL}/rest/api/2/issue"
    payload = {
        "fields": {
            "project": {"key": project_key},
            "summary": summary,
            "description": description,
            "issuetype": {"name": issue_type}
        }
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload, auth=auth)
        if response.status_code == 201:
            return response.json().get('key')
        else:
            print(f"Error creating task: {response.status_code} - {response.text}")
            return None

async def main():
    # 1. Cleanup messy debug tasks
    # PJM-44 was the main one shown in the screenshot with technical notes
    await update_issue(
        "PJM-44", 
        "UX: Interactive Scrum Board & Side Drawer", 
        "Objective: Implement a high-fidelity interactive experience for the Scrum board.\n\nKey Deliverables:\n- Integrated Side-Drawer (Sheet) architecture for ticket details.\n- Live field synchronization for descriptions and priority.\n- Executive Call-to-Action integration (Calendly)."
    )

    # 2. Add new Meta-Build tasks to showcase the portfolio's own production
    meta_tasks = [
        {
            "summary": "Infrastructure: Secure Backend Proxy Migration",
            "description": "Architected and implemented a secure FastAPI proxy layer to handle sensitive API interactions (Jira, EmailJS), ensuring zero-leakage of production credentials to the client browser."
        },
        {
            "summary": "Branding: Production Content Alignment",
            "description": "Executed a global content clear-out to remove legacy branding and align all project narratives under a unified production standard."
        },
        {
            "summary": "Management: Executive Dashboard & Sprint Tracking",
            "description": "Designed a high-level managerial overview section including Sprint velocity tracking and a multi-phase project roadmap for stakeholder transparency."
        }
    ]

    for task in meta_tasks:
        await create_issue(task['summary'], task['description'])

    print("\nSync Complete. Jira board is now professionally populated.")

if __name__ == "__main__":
    asyncio.run(main())
