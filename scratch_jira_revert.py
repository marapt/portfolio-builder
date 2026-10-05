import os
import asyncio
import httpx
from dotenv import load_dotenv

load_dotenv("backend/.env")
AUTH = (os.environ.get("JIRA_EMAIL"), os.environ.get("JIRA_API_TOKEN"))
JIRA_BASE_URL = os.environ.get("JIRA_BASE_URL", "").rstrip("/")

async def revert_to_todo(client, issues):
    for issue in issues:
        r = await client.get(f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions", auth=AUTH)
        transitions = r.json().get("transitions", [])
        # Find transition ID for 'To Do' or similar
        todo_id = next((t["id"] for t in transitions if "to do" in t["to"]["name"].lower() or "open" in t["to"]["name"].lower()), None)
        if todo_id:
            await client.post(
                f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions",
                json={"transition": {"id": todo_id}},
                auth=AUTH
            )
            print(f"Reverted {issue} to To Do")
        else:
            print(f"Failed to find To Do transition for {issue}")

async def main():
    async with httpx.AsyncClient(timeout=30) as client:
        await revert_to_todo(client, ["PJM-5", "PJM-55", "PJM-56", "PJM-57", "PJM-58", "PJM-59", "PJM-60", "PJM-63"])

asyncio.run(main())
