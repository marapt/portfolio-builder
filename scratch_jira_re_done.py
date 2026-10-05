import os
import asyncio
import httpx
from dotenv import load_dotenv

load_dotenv("backend/.env")
AUTH = (os.environ.get("JIRA_EMAIL"), os.environ.get("JIRA_API_TOKEN"))
JIRA_BASE_URL = os.environ.get("JIRA_BASE_URL", "").rstrip("/")

async def transition_to_done(client, issues):
    if not issues: return
    for issue in issues:
        r = await client.get(f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions", auth=AUTH)
        if r.status_code != 200: continue
        transitions = r.json().get("transitions", [])
        done_id = next((t["id"] for t in transitions if "done" in t["to"]["name"].lower() or "close" in t["to"]["name"].lower()), None)
        if done_id:
            await client.post(
                f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions",
                json={"transition": {"id": done_id}},
                auth=AUTH
            )
            print(f"Transitioned {issue} to Done")

async def main():
    async with httpx.AsyncClient(timeout=30) as client:
        await transition_to_done(client, ["PJM-5", "PJM-55", "PJM-56", "PJM-57", "PJM-58", "PJM-59", "PJM-60", "PJM-63"])

asyncio.run(main())
