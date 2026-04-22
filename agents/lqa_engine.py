"""
LQA Engine — Linguistic Quality Assurance
==========================================
Layer 2 of the LQC/LQA framework. Handles semantic and qualitative checks
that go beyond structure: brand voice, cultural appropriateness, fluency heuristics,
and style guide compliance.

Rules are driven by the global_regulations.json and locale-specific style guides.

Usage:
    python3 agents/lqa_engine.py
"""

import json
import re
from pathlib import Path


# ── Style Guide Rules ─────────────────────────────────────────────────────────
# These encode the "soul" of each locale's brand voice.

STYLE_GUIDES = {
    "en": {
        "tone": "Professional, innovative, confident. No passive voice where active is possible.",
        "brand_terms": {
            "required": ["AI", "Localization", "Program Management"],
            "avoid": ["cheap", "basic", "simple", "fast and easy"],
        },
        "checks": [
            {
                "id": "lqa-en-01",
                "name": "Title Case Headlines (EN)",
                "description": "English hero titles should use Title Case.",
                "pattern": r"^[a-z]",   # Flags strings starting with lowercase
                "applies_to": ["hero.title", "hero.tagline"],
                "severity": "WARNING",
            },
            {
                "id": "lqa-en-02",
                "name": "No Exclamation Mark Overuse",
                "description": "Avoid using more than one exclamation mark per string.",
                "pattern": r"!{2,}",
                "severity": "WARNING",
            },
        ],
    },
    "pt-PT": {
        "tone": "Formal, precise, European. No Brazilian idiomatic expressions.",
        "brand_terms": {
            "required": ["IA", "Localização", "Gestão de Programas"],
            "avoid": ["legal", "top", "hype"],   # Borrowed English slang
        },
        "checks": [
            {
                "id": "lqa-pt-01",
                "name": "No Brazilian Slang (pt-PT)",
                "description": "Detect common pt-BR informal terms that feel unnatural in pt-PT.",
                "flagged_terms": ["legal!", "cara", "tá bom", "fazer uma call", "deletar"],
                "severity": "FAIL",
            },
            {
                "id": "lqa-pt-02",
                "name": "Formal Pronoun Register (pt-PT)",
                "description": "pt-PT prefers 'você/o/a' formal register. Flag 'tu' or overly informal constructions for senior professional communications.",
                "flagged_terms": [" tu ", " tua ", " teu "],
                "severity": "WARNING",
            },
        ],
    },
}


class LQAEngine:
    """
    Linguistic Quality Assurance (LQA) — semantic, brand, and cultural.
    Runs after LQC passes. Handles what automated structural checks cannot catch.
    """

    LOCALE_DIR = Path("frontend/src/locales")

    def __init__(self, config_path: str = "agents/config/global_regulations.json"):
        with open(config_path, "r") as f:
            self.regulations = json.load(f)
        self.findings = []

    def run(self) -> list:
        """Execute full LQA suite."""
        print("🎯 LQA Engine: Starting Linguistic Quality Assurance...")

        for locale, guide in STYLE_GUIDES.items():
            locale_file = self._get_locale_file(locale)
            if not locale_file:
                continue

            with open(locale_file, "r", encoding="utf-8") as f:
                data = json.load(f)

            flat = self._flatten(data)
            print(f"  🌐 Auditing {locale} ({len(flat)} strings)...")

            self._check_brand_terms(flat, locale, guide)
            self._run_style_checks(flat, locale, guide)

        # Summary
        fails  = sum(1 for f in self.findings if f["status"] == "FAIL")
        warns  = sum(1 for f in self.findings if f["status"] == "WARNING")
        if not self.findings:
            self.findings.append({
                "agent": "LQA", "status": "PASS",
                "message": "All LQA checks passed. Brand voice and cultural quality verified.",
                "category": "LQA Summary"
            })
        print(f"  LQA Complete → {warns} warnings · {fails} failures")
        return self.findings

    def _check_brand_terms(self, flat: dict, locale: str, guide: dict) -> None:
        """Verify required brand terms are present in at least one string."""
        all_text = " ".join(flat.values()).lower()
        for term in guide.get("brand_terms", {}).get("avoid", []):
            if term.lower() in all_text:
                self.findings.append({
                    "agent": f"LQA/{locale}", "status": "WARNING",
                    "message": f"Off-brand term '{term}' detected. Review for brand voice alignment.",
                    "category": "Brand Voice"
                })
        for term in guide.get("brand_terms", {}).get("required", []):
            if term.lower() not in all_text:
                self.findings.append({
                    "agent": f"LQA/{locale}", "status": "WARNING",
                    "message": f"Required brand term '{term}' not found in any string.",
                    "category": "Brand Voice"
                })

    def _run_style_checks(self, flat: dict, locale: str, guide: dict) -> None:
        """Run locale-specific style guide checks."""
        for check in guide.get("checks", []):
            for key, val in flat.items():
                if not isinstance(val, str):
                    continue

                # Pattern-based check
                if "pattern" in check:
                    applies = check.get("applies_to")
                    if applies and key not in applies:
                        continue
                    if re.search(check["pattern"], val):
                        self.findings.append({
                            "agent": f"LQA/{locale}", "status": check["severity"],
                            "message": f"[{check['id']}] {check['name']}: '{key}' → '{val[:60]}...'",
                            "category": "Style Guide"
                        })

                # Term-list-based check
                if "flagged_terms" in check:
                    for term in check["flagged_terms"]:
                        if term.lower() in val.lower():
                            self.findings.append({
                                "agent": f"LQA/{locale}", "status": check["severity"],
                                "message": f"[{check['id']}] {check['name']}: Found '{term}' in key '{key}'",
                                "category": "Style Guide"
                            })

    def _get_locale_file(self, locale: str) -> Path | None:
        """Find locale file, supporting both 'en.json' and 'pt-PT.json' naming."""
        for suffix in [f"{locale}.json", f"{locale.lower()}.json"]:
            p = self.LOCALE_DIR / suffix
            if p.exists():
                return p
        self.findings.append({
            "agent": f"LQA/{locale}", "status": "WARNING",
            "message": f"Locale file not found for '{locale}'. Skipping LQA.",
            "category": "File Check"
        })
        return None

    def _flatten(self, data: dict, parent: str = "") -> dict:
        """Flatten nested JSON into dot-notation keys."""
        result = {}
        for k, v in data.items():
            key = f"{parent}.{k}" if parent else k
            if isinstance(v, dict):
                result.update(self._flatten(v, key))
            else:
                result[key] = v
        return result

    def get_report(self) -> list:
        return self.findings


if __name__ == "__main__":
    engine = LQAEngine()
    results = engine.run()
    print(json.dumps(results, indent=2, ensure_ascii=False))
