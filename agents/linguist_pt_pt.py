from linguist_base import LinguistAgent
import json

def run_pt_pt_audit():
    agent = LinguistAgent("pt-PT")
    agent.audit_terminology("frontend/src/locales/pt-PT.json")
    
    # Compare with EN to find missing keys
    with open("frontend/src/locales/en.json", 'r') as f1, open("frontend/src/locales/pt-PT.json", 'r') as f2:
        en_json = json.load(f1)
        pt_json = json.load(f2)
        agent.check_sync(pt_json, en_json)
        
    return agent.get_report()

if __name__ == "__main__":
    report = run_pt_pt_audit()
    print(json.dumps(report, indent=2))
