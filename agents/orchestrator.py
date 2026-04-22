import json
import datetime
from loc_lead_expert import LocLeadExpert
from linguist_en_us import run_en_us_audit
from linguist_pt_pt import run_pt_pt_audit
from visual_auditor import VisualAuditor
from tester_agent import get_test_specs, write_report

def run_full_stellar_audit():
    print("🚀 Starting Global Stellar Audit...")
    report_data = {
        "timestamp": datetime.datetime.now().isoformat(),
        "findings": []
    }

    # 1. Start with Localization Lead (Compliance)
    lead = LocLeadExpert()
    lead.audit_compliance(".")
    report_data["findings"].extend(lead.get_report())

    # 2. Run Linguists
    report_data["findings"].extend(run_en_us_audit())
    report_data["findings"].extend(run_pt_pt_audit())

    # 3. Visual Audit Spec
    auditor = VisualAuditor()
    report_data["findings"].extend(auditor.get_report())

    # 4. Tester Agent — print live test spec for browser execution
    test_specs = get_test_specs()
    report_data["findings"].append({
        "agent": "TesterAgent",
        "status": "INFO",
        "message": f"{len(test_specs)} E2E tests defined. Run tester_agent.py --url https://maramartins.com to execute live tests."
    })

    generate_markdown_report(report_data)

def generate_markdown_report(data):
    report_path = f"docs/qa_reports/stellar_audit_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.md"
    os.makedirs("docs/qa_reports", exist_ok=True)
    
    with open(report_path, "w") as f:
        f.write(f"# 🛡️ Stellar QA Audit Report\n")
        f.write(f"**Timestamp**: {data['timestamp']}\n\n")
        f.write("## 📊 Summary\n")
        
        for finding in data["findings"]:
            status_emoji = "✅" if finding["status"] == "PASS" else "⚠️" if finding["status"] == "WARNING" else "❌"
            f.write(f"- {status_emoji} **{finding['agent']}**: {finding['message']}\n")
            
        f.write("\n## 🚀 Next Steps\n")
        f.write("- [ ] Review WARNING/FAIL items.\n")
        f.write("- [ ] Perform Visual Audit manually or via browser agent.\n")
        
    print(f"✅ Audit Complete! Report generated at: {report_path}")

if __name__ == "__main__":
    import os
    run_full_stellar_audit()
