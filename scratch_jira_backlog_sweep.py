import os
import asyncio
import httpx
from dotenv import load_dotenv

load_dotenv("backend/.env")
AUTH = (os.environ.get("JIRA_EMAIL"), os.environ.get("JIRA_API_TOKEN"))
JIRA_BASE_URL = os.environ.get("JIRA_BASE_URL", "").rstrip("/")
PROJECT_KEY = "PJM"

async def move_to_epic(client, epic_key, issues):
    if not issues: return
    print(f"Moving {issues} to Epic {epic_key}")
    resp = await client.post(
        f"{JIRA_BASE_URL}/rest/agile/1.0/epic/{epic_key}/issue",
        json={"issues": issues},
        auth=AUTH
    )
    print(resp.status_code)

async def move_to_sprint(client, sprint_id, issues):
    if not issues: return
    print(f"Moving {issues} to Sprint {sprint_id}")
    resp = await client.post(
        f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint_id}/issue",
        json={"issues": issues},
        auth=AUTH
    )
    print(resp.status_code)

async def transition_to_done(client, issues):
    if not issues: return
    for issue in issues:
        r = await client.get(f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions", auth=AUTH)
        transitions = r.json().get("transitions", [])
        done_id = next((t["id"] for t in transitions if "done" in t["to"]["name"].lower() or "close" in t["to"]["name"].lower()), None)
        if done_id:
            await client.post(
                f"{JIRA_BASE_URL}/rest/api/2/issue/{issue}/transitions",
                json={"transition": {"id": done_id}},
                auth=AUTH
            )
            print(f"Transitioned {issue} to Done")

async def create_epic(client, summary, name):
    print(f"Creating Epic: {name}")
    resp = await client.post(
        f"{JIRA_BASE_URL}/rest/api/2/issue",
        json={"fields": {"project": {"key": PROJECT_KEY}, "summary": name, "description": summary, "issuetype": {"name": "Epic"}}},
        auth=AUTH
    )
    return resp.json().get("key")

async def main():
    async with httpx.AsyncClient(timeout=30) as client:
        # Define arrays
        completed_infrastructure_tasks = ["PJM-5", "PJM-55", "PJM-56", "PJM-57", "PJM-58", "PJM-59", "PJM-60", "PJM-63"]
        sprint4_legal_tasks = ["PJM-62", "PJM-64", "PJM-65"]
        phase5_global_tasks = ["PJM-66", "PJM-67", "PJM-68", "PJM-70", "PJM-71"]
        phase6_gtm_tasks = ["PJM-72", "PJM-73", "PJM-74", "PJM-75", "PJM-76"]

        # Create missing Epics for Phase 5 and 6
        epic_global_key = await create_epic(client, "Phase 5", "Portfolio Globalization")
        epic_gtm_key = await create_epic(client, "Phase 6", "GTM Expansion Roadmap")
        
        # Move Phase 5 & 6 tasks to their Epics (leave in backlog for sprints later)
        await move_to_epic(client, epic_global_key, phase5_global_tasks)
        await move_to_epic(client, epic_gtm_key, phase6_gtm_tasks)

        # Move Sprint 4 legal tasks to Sprint 4 (id: 134) & Epic PJM-80
        await move_to_epic(client, "PJM-80", sprint4_legal_tasks)
        await move_to_sprint(client, 134, sprint4_legal_tasks)

        # For old completed infra tasks, link to PJM-79 (Architecture) and mark Done. We can add them to Sprint 100/135 (Closed) or just leave them Done.
        # It's better to add them to Sprint 3 (id: 135) to clean the backlog.
        await move_to_epic(client, "PJM-79", completed_infrastructure_tasks)
        await move_to_sprint(client, 135, completed_infrastructure_tasks)
        await transition_to_done(client, completed_infrastructure_tasks)
        
        print("Scrub complete!")

asyncio.run(main())
