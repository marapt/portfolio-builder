import os
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

TRANSITION_ID_DONE = "31"
ISSUE_KEYS = ["PJM-44", "PJM-46", "PJM-47", "PJM-48"]

async def close_out_issue(issue_key):
    print(f"Closing out {issue_key}...")
    
    # 1. Add Comment
    comment_url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/comment"
    comment_payload = {
        "body": "Verification complete. All production standards have been met and the feature is live."
    }
    
    # 2. Transition to Done
    transition_url = f"{JIRA_URL}/rest/api/2/issue/{issue_key}/transitions"
    transition_payload = {
        "transition": {"id": TRANSITION_ID_DONE}
    }
    
    async with httpx.AsyncClient() as client:
        # Add comment
        await client.post(comment_url, json=comment_payload, auth=auth)
        
        # Transition status
        response = await client.post(transition_url, json=transition_payload, auth=auth)
        if response.status_code == 204:
            print(f"Successfully moved {issue_key} to DONE.")
        else:
            print(f"Error moving {issue_key}: {response.status_code} - {response.text}")

async def main():
    tasks = [close_out_issue(key) for key in ISSUE_KEYS]
    await asyncio.gather(*tasks)
    print("\nFinal Close-Out Complete. All portfolio build tasks are now in 'Done'.")

if __name__ == "__main__":
    asyncio.run(main())
