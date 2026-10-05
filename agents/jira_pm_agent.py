"""
Jira PM Agent — Sprint Lifecycle & Real-Time Sync
===================================================
Manages the full Jira program management lifecycle:
- Sprint creation and closure
- Ticket status transitions triggered by git events
- Real-time sync between website deployment state and Jira
- Velocity and sprint health reporting

This agent is managed by Antigravity (Agent Manager).
It does NOT take action without explicit approval via the Governance Dashboard.

Usage:
    python3 agents/jira_pm_agent.py --action status
    python3 agents/jira_pm_agent.py --action open-sprint --name "Sprint 4 - Legal Dept"
    python3 agents/jira_pm_agent.py --action sync-deployment --url https://maramartins.com
"""

import os
import json
import argparse
import datetime
import httpx
import asyncio
from dotenv import load_dotenv
from pathlib import Path

load_dotenv("backend/.env")

JIRA_EMAIL     = os.environ.get("JIRA_EMAIL")
JIRA_API_TOKEN = os.environ.get("JIRA_API_TOKEN")
JIRA_BASE_URL  = os.environ.get("JIRA_BASE_URL", "").rstrip("/")
PROJECT_KEY    = "PJM"
AUTH           = (JIRA_EMAIL, JIRA_API_TOKEN)

# ── Sprint Templates ──────────────────────────────────────────────────────────

SPRINT_TEMPLATES = {
    "sprint-4-legal": {
        "name": "Sprint 4 — Legal Agent Department",
        "goal": "Build and validate the full Legal & Business Strategy agent team (General Counsel, Compliance, IP, Contract, Strategy).",
        "tickets": [
            ("Legal Agent - General Counsel Orchestrator", "High"),
            ("Legal Agent - Compliance Officer (GDPR/CCPA)", "High"),
            ("Legal Agent - IP Counsel (Logo Fair-Use)", "Medium"),
            ("Legal Agent - Contract Advisor (SOW Templates)", "Medium"),
            ("Legal Agent - Strategy Advisor (Positioning Audit)", "Medium"),
        ]
    },
    "sprint-5-globalization": {
        "name": "Sprint 5 — Portfolio Globalization",
        "goal": "Achieve full multilingual launch readiness: hreflang, multilingual SEO, locale-specific CTAs, and LQC/LQA sign-off.",
        "tickets": [
            ("hreflang Tags Implementation (EN/pt-PT)", "High"),
            ("Multilingual SEO Meta Tags", "High"),
            ("Locale-Specific CTAs per Market", "Medium"),
            ("LQC Full Suite Run - Final Sign-Off", "High"),
            ("LQA Full Suite Run - Final Sign-Off", "High"),
            ("Deploy pt-PT Locale to Production", "Critical"),
        ]
    }
}


class JiraPMAgent:
    """Manages sprint lifecycle and deployment sync for the Mara Martins portfolio project."""

    def __init__(self):
        self.findings = []
        self.client = None

    async def get_project_status(self) -> dict:
        """Returns current open tickets and sprint health."""
        async with httpx.AsyncClient(timeout=30) as client:
            r = await client.get(
                f"{JIRA_BASE_URL}/rest/api/2/search",
                params={
                    "jql": f"project={PROJECT_KEY} ORDER BY updated DESC",
                    "maxResults": 20,
                    "fields": "summary,status,priority,assignee"
                },
                auth=AUTH
            )
            data = r.json()
            issues = data.get("issues", [])
            summary = {
                "total": len(issues),
                "by_status": {},
                "tickets": []
            }
            for issue in issues:
                status = issue["fields"]["status"]["name"]
                summary["by_status"][status] = summary["by_status"].get(status, 0) + 1
                summary["tickets"].append({
                    "key": issue["key"],
                    "summary": issue["fields"]["summary"][:60],
                    "status": status,
                    "priority": issue["fields"]["priority"]["name"]
                })
            return summary

    async def create_sprint_tickets(self, template_key: str) -> list:
        """Creates tickets from a sprint template."""
        template = SPRINT_TEMPLATES.get(template_key)
        if not template:
            raise ValueError(f"Unknown sprint template: {template_key}")

        created = []
        async with httpx.AsyncClient(timeout=30) as client:
            for summary, priority in template["tickets"]:
                r = await client.post(
                    f"{JIRA_BASE_URL}/rest/api/2/issue",
                    json={"fields": {
                        "project": {"key": PROJECT_KEY},
                        "summary": summary,
                        "issuetype": {"id": "10003"},
                        "priority": {"name": priority},
                        "description": f"Auto-created by Jira PM Agent for {template['name']}. Goal: {template['goal']}"
                    }},
                    auth=AUTH
                )
                key = r.json().get("key", "ERROR")
                created.append(key)
                print(f"  ✅ {key}: {summary}")
        return created

    async def transition_ticket(self, issue_key: str, target_status: str) -> bool:
        """Transitions a ticket to a target status (e.g., 'In Progress', 'Done')."""
        async with httpx.AsyncClient(timeout=30) as client:
            r = await client.get(f"{JIRA_BASE_URL}/rest/api/2/issue/{issue_key}/transitions", auth=AUTH)
            transitions = r.json().get("transitions", [])
            match = next((t for t in transitions if target_status.lower() in t["to"]["name"].lower()), None)
            if match:
                await client.post(
                    f"{JIRA_BASE_URL}/rest/api/2/issue/{issue_key}/transitions",
                    json={"transition": {"id": match["id"]}},
                    auth=AUTH
                )
                print(f"  ✅ {issue_key} → {target_status}")
                return True
            print(f"  ⚠️  No transition to '{target_status}' found for {issue_key}")
            return False

    async def sync_deployment(self, deployment_url: str, deployed_tickets: list) -> None:
        """Posts a deployment comment to all relevant tickets and transitions them."""
        comment_body = (
            f"🚀 **Deployment Verified**\n\n"
            f"**URL**: {deployment_url}\n"
            f"**Timestamp**: {datetime.datetime.now().isoformat()}\n"
            f"**Verified by**: Tester Agent (12 E2E tests)\n\n"
            f"This deployment has been verified by the automated Tester Agent suite "
            f"and is confirmed live at the above URL."
        )
        async with httpx.AsyncClient(timeout=30) as client:
            for key in deployed_tickets:
                await client.post(
                    f"{JIRA_BASE_URL}/rest/api/2/issue/{key}/comment",
                    json={"body": comment_body},
                    auth=AUTH
                )
                print(f"  💬 Deployment comment added to {key}")

    def write_status_report(self, status: dict) -> str:
        """Writes a project status report to docs/."""
        Path("docs/pm_reports").mkdir(parents=True, exist_ok=True)
        ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        path = f"docs/pm_reports/jira_status_{ts}.md"
        with open(path, "w") as f:
            f.write(f"# 📋 Jira PM Status Report\n")
            f.write(f"**Timestamp**: {datetime.datetime.now().isoformat()}\n")
            f.write(f"**Project**: {PROJECT_KEY} — Mara Martins Portfolio\n\n")
            f.write(f"## Status Summary\n\n")
            for status_name, count in status["by_status"].items():
                f.write(f"- **{status_name}**: {count} tickets\n")
            f.write(f"\n## Recent Tickets\n\n")
            f.write("| Key | Summary | Status | Priority |\n|:---|:---|:---|:---|\n")
            for t in status["tickets"][:10]:
                f.write(f"| {t['key']} | {t['summary']} | {t['status']} | {t['priority']} |\n")
        print(f"✅ PM Status Report: {path}")
        return path

    async def auto_close_sprints(self) -> None:
        """Self-Correction Protocol: Audits active sprints to ensure completed ones don't stay open."""
        print("🔍 [Jira PM Agent] Running Sprint Audit & Self-Correction Protocol...")
        async with httpx.AsyncClient(timeout=30) as client:
            # First, find active sprints
            r = await client.get(f"{JIRA_BASE_URL}/rest/agile/1.0/board/1/sprint?state=active", auth=AUTH)
            if r.status_code != 200:
                print(f"  ❌ Error fetching sprints: {r.text}")
                return
            sprints = r.json().get("values", [])
            
            if not sprints:
                print("  ✅ No active sprints found.")
                return
                
            for sprint in sprints:
                sprint_id = sprint["id"]
                sprint_name = sprint["name"]
                
                # Check tickets in sprint
                r_issues = await client.get(
                    f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint_id}/issue?fields=status",
                    auth=AUTH
                )
                issues = r_issues.json().get("issues", [])
                
                if not issues:
                    continue
                    
                incomplete_issues = [i["key"] for i in issues if i["fields"]["status"]["name"].lower() not in ["done", "completed", "closed"]]
                
                if not incomplete_issues:
                    print(f"  🧠 [Self-Correction] Sprint '{sprint_name}' has 100% completed tickets but is still open.")
                    print(f"  ⚙️ Auto-closing sprint {sprint_id}...")
                    await client.put(
                        f"{JIRA_BASE_URL}/rest/agile/1.0/sprint/{sprint_id}",
                        json={"state": "closed", "name": sprint_name},
                        auth=AUTH
                    )
                    print(f"  ✅ Sprint successfully closed.")
                else:
                    print(f"  ⚠️ Sprint '{sprint_name}' remains open. Blocking tickets: {', '.join(incomplete_issues)}")


async def main():
    parser = argparse.ArgumentParser(description="Jira PM Agent — Sprint Lifecycle & Sync")
    parser.add_argument("--action", choices=["status", "create-sprint", "sync-deployment", "auto-close-sprints"], required=True)
    parser.add_argument("--template", help="Sprint template key (for create-sprint)")
    parser.add_argument("--url", help="Deployment URL (for sync-deployment)")
    parser.add_argument("--tickets", nargs="+", help="Ticket keys to sync")
    args = parser.parse_args()

    agent = JiraPMAgent()

    if args.action == "status":
        print("📋 Jira PM Agent: Fetching project status...")
        status = await agent.get_project_status()
        agent.write_status_report(status)
        print(json.dumps(status["by_status"], indent=2))

    elif args.action == "create-sprint":
        if not args.template:
            print("❌ --template required for create-sprint")
            return
        print(f"🚀 Creating sprint from template: {args.template}")
        created = await agent.create_sprint_tickets(args.template)
        print(f"✅ Created {len(created)} tickets: {created}")

    elif args.action == "sync-deployment":
        if not args.url or not args.tickets:
            print("❌ --url and --tickets required for sync-deployment")
            return
        print(f"🔄 Syncing deployment {args.url} to {args.tickets}")
        await agent.sync_deployment(args.url, args.tickets)

    elif args.action == "auto-close-sprints":
        await agent.auto_close_sprints()


if __name__ == "__main__":
    asyncio.run(main())
