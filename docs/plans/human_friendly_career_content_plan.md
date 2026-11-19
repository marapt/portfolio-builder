# Implementation Plan: Human-Friendly & Human-Proof `/career` Content

This plan audits and refines the entire `/career` experience in [frontend/src/data/career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js). It replaces mechanical symbols (`->`, `→`, `+`, long dashes) and robotic AI-flavored phrasing with natural, authoritative executive language suitable for L6/Staff Program Management and executive leadership.

---

## 1. Executive Content Audit Findings

### A. Arrow Symbols (`->` and `→`)
Mechanical arrow notation looks like engineering changelogs or presentation slides rather than authentic executive communication.

| Current Text in `en.js` | Proposed Human Executive Replacement | Location |
| :--- | :--- | :--- |
| `Square → Block Global Rebrand` | `Square to Block Global Rebrand` | Section 2 Title & links |
| `corporate Square → Block rebrand` | `corporate rebrand from Square to Block` | Section 2 summary |
| `5 → 15 PMs (3×)` | `5 to 15 Program Managers` (badge: `5 to 15 PMs`) | Block Metric 1 value |
| `Expanded the global localization PM team from 5 to 15 PMs` | `Expanded the global localization team from 5 to 15 Program Managers` | Block highlights & summaries |
| `9% → 15% Share**` | `9% to 15% Profit Share` | Block Metric 3 value |
| `FY21 Q3 → FY22 Q3` | `FY21 Q3 to FY22 Q3` | Block Metric 3 label |
| `FY21 $220M (9%) → FY22 9M YTD $323.7M` | `FY21 $220M (9%) to FY22 9M YTD $323.7M` | Section 4 badge |
| `0 -> 2 PMs` | `Founding to 2 PMs` | LinkedIn Metric 2 footnote & badges |
| `Stories -> Creator Pivot` | `Transition from Stories to Creator Tools` | LinkedIn Section 3 header |
| `15 → 35` | `15 to 35 Students` | MIIS Track growth label |
| `Lisbon, PT → Basingstoke, UK` | `Lisbon, PT to Basingstoke, UK` (keeps compact, clean abbreviations) | Relocation subLabel |
| `London, UK → Silicon Valley, USA` | `London, UK to Silicon Valley, USA` (keeps compact, clean abbreviations) | Relocation subLabel |

---

### B. Financial & Metric Notation (Preserved As-Is per User Direction)
> [!NOTE] User Direction: Preserved
> Standard financial and operational metric notation (including `+` prefixes, `YoY`, `CC`, `$10B+`, `30+ mkts`, and `+55% YoY CC GPV*`) is preserved exactly as-is. In professional executive contexts and investor relation reporting, concise metric nomenclature is standard, scannable, and preferred over verbose prose expansions.

The following existing notations remain unchanged:
- Growth and payment volumes: `+55% YoY CC GPV*`, `+42.6% YoY`, `+130.5% YoY`, `+97% Mktg Solns*`, `+133% YoY Track Growth`
- Scale badges: `30+ mkts`, `10+ team`, `10+ markets`, `37+ Products`
- Macro financial and platform milestones: `$10B+ annual revenue`, `706M+ members`, `722M+ members`, `774M+ members`

---

### C. Robotic "AI" Vocabulary and Syntax
Certain words have become hallmarks of machine-generated text. While grammatically correct, they often feel generic, repetitive, or artificially elevated rather than pragmatic and conversational.

| Detected Word | Current Usage in `en.js` | Proposed Human Executive Replacement |
| :--- | :--- | :--- |
| `whilst` | `...cross-functional alignment whilst delivering on time...` (L494, L1764) | `while` (*whilst* reads overly archaic in modern US/tech executive contexts) |
| `orchestrated` | `Orchestrated sequential country launches...` (L1712) | `Led the sequential rollout across...` |
| `orchestrated` | `Orchestrated cross-functional operational alignment...` (L1927) | `Directed cross-functional operations across executive leadership...` |
| `spearheaded` | `Spearheaded the first AI Series...` (L1917) | `Created and launched the institute's first AI Series...` |
| `underpinned` | (If used in future drafts) | `backed by`, `supported by`, `grounded in` |
| `seamlessly` | (If used in future drafts) | `efficiently`, `without friction`, `smoothly` |
| `pivotal` | (If used in future drafts) | `key`, `critical`, `central` |
| `testament` | (If used in future drafts) | `evidence of`, `demonstrated by` |

---

## 2. Framework: What Makes a Portfolio "Human-Friendly & Human-Proof"?

To ensure this portfolio impresses senior hiring executives, VPs, and executive recruiters, the content must adhere to four human-readiness principles:

### Principle 1: Authentic Executive Voice over Jargon
- **The Problem:** AI generation defaults to hyperbole (*"pioneered groundbreaking paradigms"*, *"seamlessly orchestrated"*, *"fostered cross-functional synergies"*).
- **The Human Standard:** Real L6/Staff Program Managers speak in terms of operational decisions, resource trade-offs, and governance:
  - *"I built the team from 5 to 15 managers across four regional hubs."*
  - *"We prioritized product parity in Spain and France before rolling out secondary markets."*
  - *"When Stories sunset, we redirected advertiser budgets into feed video to protect revenue."*

### Principle 2: Relatable Context over Equation Strings
- **The Problem:** Writing `FY21 Q3 $53.4M / 9% -> FY22 Q3 $120.9M / 15% (+40.7% YoY Core)` feels like an internal database export or spreadsheet paste.
- **The Human Standard:** Frame metrics with narrative meaning:
  - *"International gross profit increased from $53.4M (9% of Square total) to $120.9M (15% share), representing a 40.7% organic increase in our core markets."*

### Principle 3: Practical Ownership vs. Superhuman Claims
- **The Problem:** Résumés that claim sole credit for entire company-wide financial metrics trigger immediate skepticism during background checks and executive interviews.
- **The Human Standard:** Transparent, clear attribution:
  - Distinguish between **direct program execution** (e.g. *team building, vendor SLAs, localization turnarounds, market launch gates*) and **concurrent corporate context** (e.g. *Block shareholder earnings, Microsoft IR investor disclosures*).
  - Explicitly acknowledge cross-functional partners (Brand, Product Marketing, Legal, Regional Teams).

### Principle 4: Natural Sentence Rhythm & Cadence
- **The Problem:** Uniform sentence lengths and relentless bullet lists starting with identical participle constructions (*"Delivered...", "Managed...", "Oversaw..."*).
- **The Human Standard:** Varied sentence structures that combine concise milestone statements with explanatory details on *why* a particular decision mattered.

---

## 3. Proposed Changes File by File

### [MODIFY] [frontend/src/data/career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)

#### 1. Arrow Symbol Removal (`->` and `→`):
- **Block Rebrand Titles & Links:**
  - Change `Square → Block Global Rebrand` to `Square to Block Global Rebrand` (title, badge, links, captions, notes).
  - Change `corporate Square → Block rebrand` to `corporate rebrand from Square to Block`.
- **Block Metric 1 & Metric 3:**
  - Change `5 → 15 PMs (3×)` to `5 to 15 PMs (3×)`.
  - Change `9% → 15% Share**` to `9% to 15% Share**` (and `FY21 Q3 → FY22 Q3` to `FY21 Q3 to FY22 Q3`).
  - Section 4 badge: Change `FY21 $220M (9%) → FY22 9M YTD $323.7M` to `FY21 $220M (9%) to FY22 9M YTD $323.7M`.
- **LinkedIn Sections & Metrics:**
  - Change `0 -> 2 PMs` to `Founding to 2 PMs` (badge and table rows).
  - Change `Stories -> Creator Pivot & Commercial Impact:` to `Stories to Creator Mode Transition & Commercial Impact:`.
- **MIIS Track Growth:**
  - Change `15 → 35` to `15 to 35 Students` in track label.
- **Relocation Sublabels:**
  - Change `Lisbon, PT → Basingstoke, UK` to `Lisbon, PT to Basingstoke, UK` (preserving compact country abbreviations).
  - Change `London, UK → Silicon Valley, USA` to `London, UK to Silicon Valley, USA` (preserving compact country abbreviations).

#### 2. AI Vocabulary Refinement:
- **LinkedIn:**
  - Replace `whilst` with `while` in Section 1 summary and role highlights.
  - Replace `Orchestrated sequential country launches` with `Led the sequential country rollout across Brazil, the Netherlands, UAE, Australia, France, the United Kingdom, and the September 2020 Global Redesign`.
- **Middlebury Institute (MIIS):**
  - Replace `Spearheaded the first AI Series` with `Created and launched the institute's first AI in Localization Series`.
  - Replace `Orchestrated cross-functional operational alignment` with `Directed cross-functional operational alignment across executive leadership, admissions, and enterprise partners`.

#### 3. Preserved As-Is:
- All financial metrics (`+55% YoY CC GPV*`, `+97% Mktg Solns*`, `+42.6% YoY`, `+130.5% YoY`, `+133% YoY Track Growth`, `$10B+`, `30+ mkts`, `10+ team`, `706M+`, etc.) and unit tests in `career.test.js` remain completely intact.

---

## 4. Verification Plan

### Automated Tests
1. **Unit Test Suite:**
   ```bash
   cd frontend && CI=true npm test -- --watchAll=false
   ```
   *Expected: All 15 test suites pass.*

2. **Production Build:**
   ```bash
   cd frontend && npm run build
   ```
   *Expected: Craco build compiles cleanly.*

3. **Symbol & Glyph Verification Script:**
   ```bash
   python3 -c "
   with open('frontend/src/data/career/en.js') as f:
       text = f.read()
   assert '->' not in text, 'Found ascii arrow'
   assert '→' not in text, 'Found unicode arrow'
   assert 'whilst' not in text, 'Found whilst'
   assert 'spearhead' not in text.lower(), 'Found spearhead'
   print('Verification Passed: Clean human executive prose!')
   "
   ```
   ```bash
   cd frontend && npm run build
   ```
   *Expected: Craco build compiles cleanly.*

3. **Symbol & Glyph Verification Script:**
   ```bash
   python3 -c "
   with open('frontend/src/data/career/en.js') as f:
       text = f.read()
   assert '->' not in text, 'Found ascii arrow'
   assert '→' not in text, 'Found unicode arrow'
   assert 'whilst' not in text, 'Found whilst'
   assert 'spearhead' not in text.lower(), 'Found spearhead'
   print('Verification Passed: Clean human executive prose!')
   "
   ```

---

## 5. User Review Required
Please review the proposed plan:
- **Tone & Style:** Does the shift from mechanical shorthand (`->`, `+`, `whilst`) to clean, authoritative English align with your vision for the executive portfolio?
- **Metric Badges:** Are you happy with `5 to 15 PMs` and `9% to 15% Profit Share` on the key impact cards?

Upon your approval, I will execute these updates and verify the entire build.
