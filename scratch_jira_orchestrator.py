import os
import json
import asyncio
import httpx
from dotenv import load_dotenv

load_dotenv("backend/.env")
AUTH = (os.environ.get("JIRA_EMAIL"), os.environ.get("JIRA_API_TOKEN"))
JIRA_BASE_URL = os.environ.get("JIRA_BASE_URL", "").rstrip("/")

async def main():
    async with httpx.AsyncClient(timeout=30) as client:
        # Create Sprint 3
        print("Creating Sprint 3...")
        resp = await client.post(
            f"{JIRA_BASE_URL}/rest/agile/1.0/sprint",
            json={"name": "Sprint 3: Gov & QA", "originBoardId": 1, "goal": "Agent interactions and live DB sync"},
            auth=AUTH
        )
        sprint3_id = resp.json().get("id")
        print(f"Sprint 3 ID: {sprint3_id}")
        
        # Load cache
        try:
            with open(".jira_cache.json") as f:
                data = json.load(f)
        except Exception:
            data = {}
        data["sprint3"] = sprint3_id
        
        # We need to map tickets to Epics.
        # Epic 1: PJM-79, Epic 2: PJM-80
        # Let's map PJM-78, PJM-69, PJM-77 to Sprint 4 and Epic 2
        sprint4_id = data.get("sprint4")
        epic2_key = data.get("epic2")
        
        for t in ["PJM-78", "PJM-69", "PJM-77"]:
            print(f"Mapping {t} to epic {epic2_key}")
            # set epic link (customfield_10014 or epicLink in older, but we can agil-api epic)
            # Use agile API to move issues to epic
            await client.post(
                f"{JIRA_BASE_URL}/rest/agile/1.0/epic/{epic2_key}/issue",
                json={"issues": [t]},
                auth=AUTH
            )
            print(f"Moving {t} to Sprint {sprint4_id}")
            await client.post(
                f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint4_id}/issue",
                json={"issues": [t]},
                auth=AUTH
            )
        
        # Close Sprint 3 since it was historically completed
        print("Closing Sprint 3...")
        # First we must start it then close it.
        await client.put(f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint3_id}", json={"state": "active", "name": "Sprint 3: Gov & QA"}, auth=AUTH)
        await client.put(f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint3_id}", json={"state": "closed", "name": "Sprint 3: Gov & QA"}, auth=AUTH)

asyncio.run(main())
