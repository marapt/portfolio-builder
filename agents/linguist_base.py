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
        """Ensures all keys match and checks for English leakage."""
        current_data = self._get_flatten_data(current_json)
        compare_data = self._get_flatten_data(compare_json)
        
        current_keys = set(current_data.keys())
        compare_keys = set(compare_data.keys())
        
        # 1. Missing keys
        missing = compare_keys - current_keys
        if missing:
            self.findings.append({
                "agent": f"Tiago | pt-PT Linguist",
                "status": "FAIL",
                "message": f"Critical Leak: Missing locale keys for {self.locale_code}",
                "explanation": f"The following keys exist in English but not in Portuguese: {list(missing)[:5]}... This will lead to broken UI or fallback text."
            })

        # 2. English Leakage (Identical text detection)
        # Avoid checking keys that are expected to be same (IDs, names, urls, etc)
        ignore_patterns = ["url", "link", "id", "name", "email", "phone", "flag", "date", "year", "cert", "skills.technology"]
        
        for key, pt_val in current_data.items():
            en_val = compare_data.get(key)
            if not en_val: continue

            # Skip short things like "Mara" or technical IDs correctly
            if len(str(pt_val)) < 5: continue
            if any(p in key.lower() for p in ignore_patterns): continue

            # Heuristic 1: Exact Match (Copy-Paste Leak)
            if pt_val == en_val:
                self.findings.append({
                    "agent": f"Tiago | pt-PT Linguist",
                    "status": "FAIL",
                    "category": "Localization QA",
                    "message": f"English Leak detected in '{key}'",
                    "explanation": f"Text is identical to English source: \"{pt_val[:30]}...\". This indicates a missed translation step."
                })
            
            # Heuristic 2: English Keywords in PT string (AI Hallucination/Hybrid leak)
            en_keywords = [' the ', ' with ', ' and ', ' to ', ' for ', ' from ', ' bridging ', ' expanding ']
            if any(kw in str(pt_val).lower() for kw in en_keywords) and self.locale_code == "pt-PT":
                 self.findings.append({
                    "agent": f"Tiago | pt-PT Linguist",
                    "status": "FAIL",
                    "category": "Localization QA",
                    "message": f"Mixed-Language content in '{key}'",
                    "explanation": f"English words detected within a Portuguese string. Heuristic hit: {pt_val}"
                })

    def _get_flatten_data(self, d, parent_key=''):
        items = {}
        for k, v in d.items():
            new_key = f"{parent_key}.{k}" if parent_key else k
            if isinstance(v, dict):
                items.update(self._get_flatten_data(v, new_key))
            else:
                items[new_key] = v
        return items

    def get_report(self):
        return self.findings

if __name__ == "__main__":
    # Example execution for pt-PT
    agent = LinguistAgent("pt-PT")
    agent.audit_terminology("frontend/src/locales/pt-PT.json")
    print(json.dumps(agent.get_report(), indent=2))
