import os
import asyncio
import httpx
from dotenv import load_dotenv

load_dotenv("backend/.env")
AUTH = (os.environ.get("JIRA_EMAIL"), os.environ.get("JIRA_API_TOKEN"))
JIRA_BASE_URL = os.environ.get("JIRA_BASE_URL", "").rstrip("/")

async def link_to_epic(client, epic_key, issues):
    for issue in issues:
        resp = await client.put(
            f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}",
            json={"fields": {"parent": {"key": epic_key}}},
            auth=AUTH
        )
        print(f"Linked {issue} to {epic_key}: {resp.status_code}")

async def main():
    async with httpx.AsyncClient(timeout=30) as client:
        await link_to_epic(client, "PJM-80", ["PJM-62", "PJM-64", "PJM-65"])
        await link_to_epic(client, "PJM-81", ["PJM-66", "PJM-67", "PJM-68", "PJM-70", "PJM-71"])
        await link_to_epic(client, "PJM-82", ["PJM-72", "PJM-73", "PJM-74", "PJM-75", "PJM-76"])
        await link_to_epic(client, "PJM-79", ["PJM-55", "PJM-56", "PJM-57", "PJM-58", "PJM-59", "PJM-60", "PJM-63"])

asyncio.run(main())
