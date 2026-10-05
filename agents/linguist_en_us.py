"""
Linguist Agent — en-US (American English)
==========================================
Specialized for en-US locale: Silicon Valley professional tone,
Oxford comma, US date formats, and brand voice alignment
for the Mountain View, CA audience.
"""
from linguist_base import LinguistAgent
import json

LOCALE_CODE = "en-US"
LOCALE_FILE = "frontend/src/locales/en-US.json"
COMPARE_FILE = "frontend/src/locales/pt-PT.json"


def run_en_us_audit():
    agent = LinguistAgent(LOCALE_CODE)
    agent.audit_terminology(LOCALE_FILE)

    with open(LOCALE_FILE, 'r') as f1, open(COMPARE_FILE, 'r') as f2:
        en_json = json.load(f1)
        pt_json = json.load(f2)
        # Check that all EN keys exist in pt-PT
        agent.check_sync(en_json, pt_json)

    return agent.get_report()


if __name__ == "__main__":
    report = run_en_us_audit()
    print(json.dumps(report, indent=2))
