import json
import os

class LinguistAgent:
    def __init__(self, locale_code, config_path="agents/config/global_regulations.json"):
        self.locale_code = locale_code
        with open(config_path, 'r') as f:
            self.config = json.load(f).get("locales", {}).get(locale_code, {})
        self.findings = []

    def audit_terminology(self, locale_file_path):
        """Checks for forbidden terms and preferred terminology."""
        print(f"✍️ Linguist [{self.locale_code}]: Auditing terminology in {locale_file_path}...")
        
        with open(locale_file_path, 'r') as f:
            content = f.read()
            
        prohibited = self.config.get("prohibited_terms", [])
        for term in prohibited:
            if term.lower() in content.lower():
                self.findings.append({
                    "agent": f"Linguist_{self.locale_code}",
                    "status": "FAIL",
                    "message": f"Forbidden term '{term}' detected. Please replace with pt-PT equivalent."
                })

    def check_sync(self, current_json, compare_json):
        """Ensures all keys match between locales."""
        current_keys = set(self._get_all_keys(current_json))
        compare_keys = set(self._get_all_keys(compare_json))
        
        missing = compare_keys - current_keys
        if missing:
            self.findings.append({
                "agent": f"Linguist_{self.locale_code}",
                "status": "WARNING",
                "message": f"Missing keys in {self.locale_code}: {list(missing)}"
            })

    def _get_all_keys(self, d, parent_key=''):
        keys = []
        for k, v in d.items():
            new_key = f"{parent_key}.{k}" if parent_key else k
            if isinstance(v, dict):
                keys.extend(self._get_all_keys(v, new_key))
            else:
                keys.append(new_key)
        return keys

    def get_report(self):
        return self.findings

if __name__ == "__main__":
    # Example execution for pt-PT
    agent = LinguistAgent("pt-PT")
    agent.audit_terminology("frontend/src/locales/pt-PT.json")
    print(json.dumps(agent.get_report(), indent=2))
