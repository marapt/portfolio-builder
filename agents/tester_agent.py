"""
Tester Agent — Live Site End-to-End Verification
================================================
Runs smoke tests and functional checks against a target URL (live or staging).
Results are written to the QA report system and surfaced in the Governance Dashboard.

Usage:
    python3 agents/tester_agent.py [--url https://maramartins.com]
    python3 agents/tester_agent.py [--url staging_url]
"""

import json
import datetime
import argparse
import os
from pathlib import Path

# ── Test Suite Definition ──────────────────────────────────────────────────────

SMOKE_TESTS = [
    {
        "id": "smoke-01",
        "name": "Site Reachability",
        "description": "Navigate to the target URL and confirm the page loads without error.",
        "category": "Smoke",
        "selector": None,
        "expected": "Page loads with HTTP 200",
    },
    {
        "id": "smoke-02",
        "name": "Hero Headline Presence",
        "description": "Verify 'Architecting Global Excellence' appears in the Hero section.",
        "category": "Smoke",
        "selector": "h1",
        "expected": "Text contains 'Architecting'",
    },
    {
        "id": "smoke-03",
        "name": "Navigation Bar Visible",
        "description": "Confirm SERVICES | EXPERIENCE | INSIGHTS nav items are present.",
        "category": "Smoke",
        "selector": "nav",
        "expected": "Nav contains 'SERVICES', 'EXPERIENCE', 'INSIGHTS'",
    },
    {
        "id": "smoke-04",
        "name": "Footer Legal Links Present",
        "description": "Verify Privacy Policy and Legal Imprint links are visible in the footer.",
        "category": "Smoke",
        "selector": "footer",
        "expected": "Footer contains 'Privacy Policy' and 'Legal Imprint'",
    },
]

FUNCTIONAL_TESTS = [
    {
        "id": "func-01",
        "name": "Language Switcher — EN → PT",
        "description": "Click the language toggle and verify UI switches to Portuguese.",
        "category": "Functional",
        "action": "click_language_toggle",
        "expected": "Hero headline changes language",
    },
    {
        "id": "func-02",
        "name": "Privacy Policy Page Accessible",
        "description": "Navigate to /privacy and confirm the page loads with correct title.",
        "category": "Functional",
        "action": "navigate_to /privacy",
        "expected": "Page title contains 'Privacy Policy'",
    },
    {
        "id": "func-03",
        "name": "Legal Imprint Page Accessible",
        "description": "Navigate to /imprint and confirm the page loads with correct title.",
        "category": "Functional",
        "action": "navigate_to /imprint",
        "expected": "Page title contains 'Imprint'",
    },
    {
        "id": "func-04",
        "name": "Contact Form Renders",
        "description": "Scroll to Contact section and verify form fields are present.",
        "category": "Functional",
        "action": "scroll_to #contact",
        "expected": "Form with name, email, and message fields is visible",
    },
    {
        "id": "func-05",
        "name": "Hero CTA — View Portfolio Scroll",
        "description": "Click 'View Portfolio' CTA and verify page scrolls to portfolio section.",
        "category": "Functional",
        "action": "click_cta primary",
        "expected": "Page scrolls down and portfolio section is visible",
    },
    {
        "id": "func-06",
        "name": "Value Pulse Cards — Hover Balloon",
        "description": "Hover over the 'AI Strategy' quadrant card and verify the balloon tooltip appears.",
        "category": "Functional",
        "action": "hover .insight-balloon",
        "expected": "Tooltip appears with value proposition text",
    },
    {
        "id": "func-07",
        "name": "Mobile Responsiveness — 375px Viewport",
        "description": "Resize to 375px width and verify no horizontal scroll occurs in the Hero.",
        "category": "Functional",
        "action": "resize_viewport 375x812",
        "expected": "No horizontal overflow, hero content stacks vertically",
    },
    {
        "id": "func-08",
        "name": "AI Chatbot Widget Present",
        "description": "Verify the AI Chatbot button is visible and interactive.",
        "category": "Functional",
        "action": "check_element .chatbot-trigger",
        "expected": "Chatbot widget renders in bottom-right corner",
    },
]

ALL_TESTS = SMOKE_TESTS + FUNCTIONAL_TESTS


def build_browser_agent_prompt(target_url: str) -> str:
    """Generates the task prompt for the browser subagent to execute all tests."""
    test_list = "\n".join(
        f"{i+1}. [{t['category']}] {t['name']}: {t['description']} Expected: {t['expected']}"
        for i, t in enumerate(ALL_TESTS)
    )
    return f"""
You are the Tester Agent for maramartins.com. Execute the following test suite against: {target_url}

For each test, record: PASS, FAIL, or SKIP with a brief reason.
Take a screenshot of any FAIL finding for evidence.

TEST SUITE:
{test_list}

Return a structured JSON result like:
{{
  "target_url": "{target_url}",
  "results": [
    {{"id": "smoke-01", "name": "...", "status": "PASS", "notes": "..."}}
  ]
}}
"""


def write_report(results: list, target_url: str, output_dir: str = "docs/qa_reports") -> str:
    """Writes a structured markdown test report."""
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    report_path = f"{output_dir}/tester_agent_{timestamp}.md"

    pass_count  = sum(1 for r in results if r.get("status") == "PASS")
    fail_count  = sum(1 for r in results if r.get("status") == "FAIL")
    skip_count  = sum(1 for r in results if r.get("status") == "SKIP")
    total       = len(results)

    with open(report_path, "w") as f:
        f.write(f"# 🧪 Tester Agent Report\n")
        f.write(f"**Target**: {target_url}\n")
        f.write(f"**Timestamp**: {datetime.datetime.now().isoformat()}\n\n")
        f.write(f"## 📊 Summary: {pass_count}/{total} Passing\n\n")
        f.write(f"| Status | Count |\n|:---|:---|\n")
        f.write(f"| ✅ Pass | {pass_count} |\n")
        f.write(f"| ❌ Fail | {fail_count} |\n")
        f.write(f"| ⏭️ Skip | {skip_count} |\n\n")
        f.write("## 🔍 Test Results\n\n")
        for r in results:
            emoji = "✅" if r.get("status") == "PASS" else "❌" if r.get("status") == "FAIL" else "⏭️"
            f.write(f"### {emoji} {r.get('name', r.get('id'))}\n")
            f.write(f"- **Status**: {r.get('status')}\n")
            if r.get("notes"):
                f.write(f"- **Notes**: {r.get('notes')}\n")
            f.write("\n")
        if fail_count > 0:
            f.write("## 🚨 Action Required\n")
            f.write("Failed tests must be resolved before merging to main.\n")
            f.write("Review findings in the Governance Dashboard at `/dashboard`.\n")
        else:
            f.write("## ✅ All Clear\n")
            f.write("All tests passed. Safe to proceed with deployment.\n")

    print(f"✅ Report written: {report_path}")
    return report_path


def get_test_specs() -> list:
    """Returns the full test specification for use by the browser subagent or CI."""
    return ALL_TESTS


def get_browser_prompt(target_url: str) -> str:
    """Public accessor for the browser agent task prompt."""
    return build_browser_agent_prompt(target_url)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Tester Agent — Live Site E2E Verification")
    parser.add_argument("--url", default="https://maramartins.com", help="Target URL to test")
    parser.add_argument("--list-tests", action="store_true", help="Print all test specs and exit")
    args = parser.parse_args()

    if args.list_tests:
        print(json.dumps(ALL_TESTS, indent=2))
    else:
        print(f"🧪 Tester Agent — Target: {args.url}")
        print(f"📋 {len(ALL_TESTS)} tests defined ({len(SMOKE_TESTS)} smoke, {len(FUNCTIONAL_TESTS)} functional)")
        print()
        print("📋 Browser Agent Prompt:")
        print("─" * 60)
        print(build_browser_agent_prompt(args.url))
        print("─" * 60)
        print()
        print("ℹ️  To execute live tests, run the browser subagent with the prompt above.")
        print("    Results can be written to qa_reports/ using write_report().")
