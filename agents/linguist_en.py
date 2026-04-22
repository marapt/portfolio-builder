from linguist_base import LinguistAgent
import json

def run_en_audit():
    agent = LinguistAgent("en")
    agent.audit_terminology("frontend/src/locales/en.json")
    
    # Compare with PT-PT to find missing keys
    with open("frontend/src/locales/en.json", 'r') as f1, open("frontend/src/locales/pt-PT.json", 'r') as f2:
        en_json = json.load(f1)
        pt_json = json.load(f2)
        agent.check_sync(en_json, pt_json)
        
    return agent.get_report()

if __name__ == "__main__":
    report = run_en_audit()
    print(json.dumps(report, indent=2))
