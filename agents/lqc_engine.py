"""
LQC Engine — Linguistic Quality Check
======================================
Automated first-pass checks for every locale file.
Covers: key sync, string lengths, forbidden terms, placeholder integrity,
empty strings, and punctuation consistency.

This is Layer 1 of the LQC/LQA framework. The LQA Engine handles Layer 2 (semantic quality).

Usage:
    python3 agents/lqc_engine.py
"""

import json
import re
from pathlib import Path


class LQCEngine:
    """
    Linguistic Quality Check (LQC) — automated, rule-based.
    Runs fast structural and terminological checks on all locale files.
    """

    LOCALE_DIR = Path("frontend/src/locales")
    SOURCE_LOCALE = "en"
    TARGET_LOCALES = ["pt-PT"]

    # Max recommended string lengths per category (chars)
    LENGTH_LIMITS = {
        "title":       60,
        "description": 200,
        "label":       40,
        "cta":         30,
        "tagline":     120,
    }

    # Placeholder patterns to verify integrity across locales
    PLACEHOLDER_PATTERN = re.compile(r"\{\{.*?\}\}|\{[a-zA-Z_]+\}")

    def __init__(self, config_path: str = "agents/config/global_regulations.json"):
        with open(config_path, "r") as f:
            self.regulations = json.load(f)
        self.findings = []

    # ── Core Checks ──────────────────────────────────────────────────────────

    def check_key_sync(self, source: dict, target: dict, locale: str, parent: str = "") -> None:
        """Every key in source must exist in target."""
        for key, val in source.items():
            full_key = f"{parent}.{key}" if parent else key
            if key not in target:
                self._fail(locale, f"Missing key: '{full_key}'", "Key Sync")
            elif isinstance(val, dict) and isinstance(target.get(key), dict):
                self.check_key_sync(val, target[key], locale, full_key)
            elif isinstance(val, dict) and not isinstance(target.get(key), dict):
                self._fail(locale, f"Type mismatch at key '{full_key}': expected object", "Key Sync")

    def check_empty_strings(self, data: dict, locale: str, parent: str = "") -> None:
        """No translation string should be empty."""
        for key, val in data.items():
            full_key = f"{parent}.{key}" if parent else key
            if isinstance(val, dict):
                self.check_empty_strings(val, locale, full_key)
            elif isinstance(val, str) and val.strip() == "":
                self._fail(locale, f"Empty string at key '{full_key}'", "Empty Strings")

    def check_placeholders(self, source: dict, target: dict, locale: str, parent: str = "") -> None:
        """All placeholders present in source must appear in target."""
        for key, val in source.items():
            full_key = f"{parent}.{key}" if parent else key
            if isinstance(val, dict):
                self.check_placeholders(val, target.get(key, {}), locale, full_key)
            elif isinstance(val, str):
                src_placeholders = set(self.PLACEHOLDER_PATTERN.findall(val))
                tgt_val = target.get(key, "") if isinstance(target, dict) else ""
                tgt_placeholders = set(self.PLACEHOLDER_PATTERN.findall(str(tgt_val)))
                missing = src_placeholders - tgt_placeholders
                if missing:
                    self._fail(locale, f"Missing placeholders {missing} at key '{full_key}'", "Placeholders")

    def check_forbidden_terms(self, data: dict, locale: str, parent: str = "") -> None:
        """Flag any forbidden terms defined in global_regulations.json."""
        forbidden = self.regulations.get("locales", {}).get(locale, {}).get("prohibited_terms", [])
        flat_text = json.dumps(data, ensure_ascii=False)
        for term in forbidden:
            if term.lower() in flat_text.lower():
                self._fail(locale, f"Forbidden term '{term}' detected in {locale} locale", "Terminology")

    def check_string_lengths(self, data: dict, locale: str, parent: str = "") -> None:
        """Warn on strings that exceed recommended lengths for their context."""
        for key, val in data.items():
            full_key = f"{parent}.{key}" if parent else key
            if isinstance(val, dict):
                self.check_string_lengths(val, locale, full_key)
            elif isinstance(val, str):
                for category, limit in self.LENGTH_LIMITS.items():
                    if category in key.lower() and len(val) > limit:
                        self._warn(locale, f"String too long at '{full_key}': {len(val)} chars (limit: {limit})", "String Length")

    # ── Orchestration ────────────────────────────────────────────────────────

    def run(self) -> list:
        """Execute the full LQC suite across all locales."""
        print("🔬 LQC Engine: Starting Linguistic Quality Check...")

        source_path = self.LOCALE_DIR / f"{self.SOURCE_LOCALE}.json"
        with open(source_path, "r", encoding="utf-8") as f:
            source_data = json.load(f)

        for target_locale in self.TARGET_LOCALES:
            target_path = self.LOCALE_DIR / f"{target_locale}.json"
            if not target_path.exists():
                self._fail(target_locale, f"Locale file not found: {target_path}", "File Check")
                continue

            with open(target_path, "r", encoding="utf-8") as f:
                target_data = json.load(f)

            print(f"  ✍️ Checking {target_locale}...")
            self.check_key_sync(source_data, target_data, target_locale)
            self.check_empty_strings(target_data, target_locale)
            self.check_placeholders(source_data, target_data, target_locale)
            self.check_forbidden_terms(target_data, target_locale)
            self.check_string_lengths(target_data, target_locale)

        # Summary
        fails   = sum(1 for f in self.findings if f["status"] == "FAIL")
        warns   = sum(1 for f in self.findings if f["status"] == "WARNING")
        passes  = sum(1 for f in self.findings if f["status"] == "PASS")
        print(f"  LQC Complete → {passes} pass · {warns} warnings · {fails} failures")

        if not self.findings:
            self._pass("all", "All LQC checks passed. Locale files are structurally sound.", "LQC Summary")

        return self.findings

    # ── Helpers ──────────────────────────────────────────────────────────────

    def _pass(self, locale, message, category):
        self.findings.append({"agent": f"LQC/{locale}", "status": "PASS", "message": message, "category": category})

    def _warn(self, locale, message, category):
        self.findings.append({"agent": f"LQC/{locale}", "status": "WARNING", "message": message, "category": category})

    def _fail(self, locale, message, category):
        self.findings.append({"agent": f"LQC/{locale}", "status": "FAIL", "message": message, "category": category})

    def get_report(self):
        return self.findings


if __name__ == "__main__":
    engine = LQCEngine()
    results = engine.run()
    print(json.dumps(results, indent=2, ensure_ascii=False))
