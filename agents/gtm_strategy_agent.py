"""
GTM Strategy Agent — Portfolio Worldwide Phased Rollout
========================================================
Generates a phased Go-To-Market strategy for maramartins.com,
targeting career opportunities, consulting clients, and strategic
partners across global markets.

ALL output is advisory only. No action is taken without
explicit approval via the Governance Dashboard.

Usage:
    python3 agents/gtm_strategy_agent.py               # Full phased report
    python3 agents/gtm_strategy_agent.py --phase 1     # Single phase readiness
    python3 agents/gtm_strategy_agent.py --check        # Readiness audit only
"""

import json
import datetime
import argparse
from pathlib import Path

# ── Market Phase Definitions ──────────────────────────────────────────────────
# Each phase has: target markets, audiences, success signals, locale deps, and blockers.

GTM_PHASES = [
    {
        "phase": 1,
        "name": "Home Base — en-US Launch",
        "status": "ACTIVE",
        "timeline": "Now → Sprint 3 Close",
        "markets": ["US (Silicon Valley focus)", "Canada"],
        "locale": "en-US",
        "primary_audience": [
            "Senior Tech Recruiters (Google, Apple, LinkedIn, Meta)",
            "Heads of Localization at US tech companies",
            "Program Management Directors",
        ],
        "channels": [
            "LinkedIn profile → maramartins.com direct link",
            "Indeed / Glassdoor apply links resolved to portfolio",
            "Google search: 'Mara Martins Localization Program Manager'",
        ],
        "success_metrics": [
            "≥ 3 inbound recruiter contacts / month from US-based companies",
            "CV download rate ≥ 5% of unique visitors",
            "Time on site ≥ 2 min average",
            "Lighthouse performance score ≥ 90",
        ],
        "readiness_checks": [
            {"check": "en-US.json locale complete", "file": "frontend/src/locales/en-US.json"},
            {"check": "Privacy Policy live", "url": "/privacy"},
            {"check": "Contact form functional", "component": "Contact.jsx"},
            {"check": "Resume page accessible", "url": "/resume"},
        ],
        "blockers": [],
        "approvals_required": ["Mara Martins (visual sign-off)", "Antigravity (QA sign-off)"],
    },
    {
        "phase": 2,
        "name": "EU/Portugal Expansion — pt-PT Launch",
        "status": "QUEUED",
        "timeline": "Sprint 4 → Sprint 5",
        "markets": ["Portugal", "EU (DACH, Nordics, Benelux tech hubs)"],
        "locale": "pt-PT",
        "primary_audience": [
            "Portuguese and EU-based localization companies",
            "EU tech startups expanding globally (Revolut, Farfetch, OutSystems)",
            "AI research institutions with localization needs",
        ],
        "channels": [
            "LinkedIn pt-PT content strategy (posts in formal Portuguese)",
            "EUATC (European Union of Associations of Translation) network",
            "Portuguese tech community (Startup Lisboa, Beta-i)",
        ],
        "success_metrics": [
            "≥ 2 inbound EU/PT contacts / month",
            "pt-PT language toggle usage ≥ 15% of sessions",
            "Site indexed on google.pt within 4 weeks of launch",
            "LQC/LQA all-green report for pt-PT",
        ],
        "readiness_checks": [
            {"check": "pt-PT.json LQA approved", "file": "frontend/src/locales/pt-PT.json"},
            {"check": "Legal Imprint live (EU requirement)", "url": "/imprint"},
            {"check": "GDPR compliance sign-off", "agent": "compliance_officer"},
            {"check": "hreflang tags implemented", "component": "index.html"},
        ],
        "blockers": [
            "LQA 'legal' term warning unresolved",
            "hreflang tags not yet implemented",
            "GDPR compliance audit pending (PJM-64)",
        ],
        "approvals_required": ["Mara Martins (content review)", "Localization Lead (LQA sign-off)", "General Counsel (GDPR)"],
    },
    {
        "phase": 3,
        "name": "LATAM Expansion — es-419 + pt-BR Consideration",
        "status": "FUTURE",
        "timeline": "Sprint 6+ (Strategy Phase Required First)",
        "markets": ["Mexico", "Brazil", "Argentina", "Colombia"],
        "locale": "es-419 or pt-BR (TBD — requires strategy decision)",
        "primary_audience": [
            "LATAM tech companies expanding to US/EU markets",
            "Regional localization vendors seeking leadership",
            "Multinational companies with LatAm operations",
        ],
        "channels": [
            "LinkedIn Spanish/Portuguese LATAM content",
            "GALA (Globalization and Localization Association) conference presence",
            "Regional tech events (NEARSHORE Americas, etc.)",
        ],
        "success_metrics": [
            "New locale fully LQC/LQA certified",
            "≥ 1 inbound LATAM contact / month",
            "Regional SEO: indexed on google.com.mx / google.com.br",
        ],
        "readiness_checks": [
            {"check": "Strategy decision: es-419 vs pt-BR", "decision": "Required"},
            {"check": "New linguist agent for chosen locale", "agent": "TBD"},
            {"check": "Legal compliance for MX/BR markets", "agent": "compliance_officer"},
        ],
        "blockers": [
            "Business strategy direction not yet defined",
            "Locale selection (es-419 vs pt-BR) requires Mara decision",
            "No LATAM-specific content yet",
        ],
        "approvals_required": ["Mara Martins (strategy approval)", "Full Governance Dashboard sign-off"],
    },
    {
        "phase": 4,
        "name": "APAC Entry — zh-TW / ja-JP Consideration",
        "status": "FUTURE",
        "timeline": "Post-Strategy Phase (Future Vision)",
        "markets": ["Taiwan", "Japan", "Singapore", "Hong Kong"],
        "locale": "zh-TW and/or ja-JP (requires specialized linguist agents)",
        "primary_audience": [
            "APAC tech companies with US/EU localization needs",
            "Semiconductor and hardware companies (Taiwan/Japan focus)",
            "Global consultancies with APAC practices",
        ],
        "channels": [
            "LinkedIn APAC professional network",
            "JAPAN GALA and Asian localization conferences",
            "Direct outreach via platform-specific channels (Line, WeChat for BD only)",
        ],
        "success_metrics": [
            "Specialized APAC linguist agents operational",
            "CJK character rendering tested and verified",
            "RTL/bidirectional text support if Arabic added later",
        ],
        "readiness_checks": [
            {"check": "CJK font support in Stellar UI", "decision": "Requires dev work"},
            {"check": "APAC legal compliance (Japan APPI, etc.)", "agent": "compliance_officer"},
        ],
        "blockers": [
            "Dependent on business vision definition",
            "CJK rendering requires frontend engineering",
            "Specialized linguist agents not built",
        ],
        "approvals_required": ["Mara Martins (vision alignment)", "Full board (if company structure exists)"],
    },
]


class GTMStrategyAgent:
    """
    Go-To-Market Strategy Agent for maramartins.com.
    Generates phased rollout readiness reports and strategic recommendations.
    All output is advisory — requires Governance Dashboard approval before action.
    """

    def __init__(self):
        self.findings = []
        self.timestamp = datetime.datetime.now().isoformat()

    def run_readiness_audit(self) -> dict:
        """Checks current readiness status for all phases."""
        print("🌍 GTM Strategy Agent: Running worldwide readiness audit...")
        report = {}
        for phase in GTM_PHASES:
            blockers = phase.get("blockers", [])
            status = phase["status"]
            ready = status == "ACTIVE" and len(blockers) == 0
            report[f"Phase {phase['phase']}"] = {
                "name": phase["name"],
                "status": status,
                "market_ready": ready,
                "blockers": blockers,
                "approvals_needed": phase["approvals_required"],
            }
            emoji = "✅" if ready else ("🔵" if status == "QUEUED" else "⏳")
            print(f"  {emoji} Phase {phase['phase']}: {phase['name']} [{status}]")
            for b in blockers:
                print(f"       ⚠️  Blocker: {b}")
        return report

    def generate_phase_brief(self, phase_num: int) -> dict:
        """Returns the full strategy brief for a specific phase."""
        phase = next((p for p in GTM_PHASES if p["phase"] == phase_num), None)
        if not phase:
            return {"error": f"Phase {phase_num} not found"}
        return phase

    def write_gtm_report(self, output_dir: str = "docs/gtm") -> str:
        """Writes the full GTM strategy report as a markdown document."""
        Path(output_dir).mkdir(parents=True, exist_ok=True)
        ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        path = f"{output_dir}/gtm_worldwide_rollout_{ts}.md"

        with open(path, "w", encoding="utf-8") as f:
            f.write("# 🌍 GTM Strategy — Worldwide Phased Rollout\n")
            f.write(f"**Portfolio**: maramartins.com\n")
            f.write(f"**Generated**: {self.timestamp}\n")
            f.write(f"**Agent Manager**: Antigravity\n")
            f.write(f"**Owner**: Mara Martins\n\n")
            f.write("> ⚠️ **Advisory Only** — All recommendations require Governance Dashboard approval before action.\n\n")
            f.write("---\n\n")

            # Phase overview table
            f.write("## 📊 Phase Overview\n\n")
            f.write("| Phase | Name | Markets | Locale | Status | Blockers |\n")
            f.write("|:---|:---|:---|:---|:---|:---|\n")
            for p in GTM_PHASES:
                b_count = len(p.get("blockers", []))
                b_str = f"{b_count} blockers" if b_count else "✅ Clear"
                f.write(f"| {p['phase']} | {p['name']} | {', '.join(p['markets'])} | `{p['locale']}` | {p['status']} | {b_str} |\n")

            f.write("\n---\n\n")

            for p in GTM_PHASES:
                f.write(f"## Phase {p['phase']}: {p['name']}\n\n")
                f.write(f"**Timeline**: {p['timeline']}\n\n")
                f.write(f"### 🎯 Primary Audience\n")
                for a in p["primary_audience"]:
                    f.write(f"- {a}\n")
                f.write(f"\n### 📡 Channels\n")
                for c in p["channels"]:
                    f.write(f"- {c}\n")
                f.write(f"\n### 📈 Success Metrics\n")
                for m in p["success_metrics"]:
                    f.write(f"- {m}\n")
                if p.get("blockers"):
                    f.write(f"\n### 🚧 Current Blockers\n")
                    for b in p["blockers"]:
                        f.write(f"- ⚠️ {b}\n")
                f.write(f"\n### ✅ Approvals Required\n")
                for a in p["approvals_required"]:
                    f.write(f"- {a}\n")
                f.write("\n---\n\n")

            f.write("## 🔑 Governing Principles\n\n")
            f.write("1. **One market at a time** — perfect en-US before opening pt-PT\n")
            f.write("2. **LQC/LQA sign-off required** before any new locale goes live\n")
            f.write("3. **Legal clearance** (GDPR/local law) before each market entry\n")
            f.write("4. **Evidence-based expansion** — Phase 2 only opens when Phase 1 metrics are met\n")
            f.write("5. **Human approval always** — Governance Dashboard gates every phase transition\n")

        print(f"✅ GTM Report: {path}")
        return path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="GTM Strategy Agent — Worldwide Phased Rollout")
    parser.add_argument("--phase", type=int, help="Show brief for a specific phase")
    parser.add_argument("--check", action="store_true", help="Run readiness audit only")
    args = parser.parse_args()

    agent = GTMStrategyAgent()

    if args.check:
        audit = agent.run_readiness_audit()
        print(json.dumps(audit, indent=2, ensure_ascii=False))
    elif args.phase:
        brief = agent.generate_phase_brief(args.phase)
        print(json.dumps(brief, indent=2, ensure_ascii=False))
    else:
        agent.run_readiness_audit()
        report_path = agent.write_gtm_report()
        print(f"\n📄 Full report: {report_path}")
