# Implementation Plan: Verified Numeric Quick-Impact Metric for Block Card 2 (`bk-02`)

## Goal Description
Replace `'Rebrand + ’22 Launches'` on **Block Metric 2 (`velocity`, `bk-02`)** in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L890-L897) with an unmistakable **numeric quick-impact metric** that is 100% grounded in Block’s official filings and [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L39-L53) - eliminating any ambiguity from `'22 Launches` looking like "22 launches".

---

## Background: What Was There Before?
1. **Original committed placeholder (`HEAD` in git):**
   - `value: '[X]d → [Y]d'`
   - `label: 'Release cycle compression'` (`placeholder: true`, `hint: 'STAR story: release workflow transformation'`)
   - *Reason replaced:* Neither [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L40-L52) nor Block’s filings contain verified release-cycle day counts (`[X]d → [Y]d`).
2. **First Investor Day replacement:** `'3 Launches + Rebrand'`
   - *Reason changed:* **France** opened Sep 2021 (just prior to your Nov 2021 start), so counting 3 launches risked overclaiming pre-tenure timing.
3. **Current value (`en.js` line 891):** `'Rebrand + ’22 Launches'`
   - *Problem:* Lacks a crisp quantitative impact number and `'22` visually reads like "22 launches".

---

## User Review Required

> [!IMPORTANT]
> **Choose Which Verified Numeric Metric Belongs on Card 2 (`Velocity / Impact`)**
> Below are the **three strictly factual, filing/CV-backed numeric options** alongside Card 1 (**`5 → 15 PMs (3×)`**) and Card 3 (**`9% → 15% Share*`**). Please pick **Option 1 (Recommended)**, **Option 2**, or **Option 3** (or share any preference) before any code is modified.

### Verified Numeric Options for Metric 2 (`bk-02`)

#### Option 1  -  Payment-Volume Velocity (`+55% CC GPV*`) *(Recommended)*
- **`value`:** `'+55% YoY CC GPV*'` *(or `'+55% Int’l GPV*'`)*
- **`label`:** `'FY22 Q3 Square Int’l GPV Growth (>3× U.S. +17%); Supported by Rebrand (Dec 2021), France/Ireland, Spain & Canada Rollouts'`
- **`hint`:** `'Source: Block Q3 2022 Shareholder Letter (p. 11 Geographies) & Rebrand/Launch Releases (2021–2022)'`
- **How all 3 cards read together:**
  1. **Scale:** `5 → 15 PMs (3×)` *(Localization PM Org Scaled Across 8 Int’l Markets)*
  2. **Velocity:** `+55% YoY CC GPV*` *(FY22 Q3 Square Int’l GPV Growth >3× U.S. +17%; Supported by Rebrand & 2022 Launches)*
  3. **Quality:** `9% → 15% Share*` *(Square Int’l Share of Gross Profit FY21 Q3 → FY22 Q3; 11% Core Ex-BNPL)*
- *Pros:* Every card leads with a crisp quantitative metric with **zero overlap** (Team Scale · Payment Velocity · Profit Share); all acronyms (`FY22`, `Q3`, `GPV`, `YoY`, `CC`) get instant hover tooltips; `*` footnote already explicitly scopes direct ownership vs. macro Square results.

#### Option 2  -  Organic Core Profit Growth (`+42.6% Core GP*`)
- **`value`:** `'+42.6% Core GP*'`
- **`label`:** `'FY22 9M YTD Organic Ex-BNPL Square Int’l Gross Profit Growth ($140.4M → $200.2M) Across Rebrand & Market Launches'`
- **`hint`:** `'Source: Block Q3 2022 Shareholder Letter (p. 29 GAAP vs. Ex-BNPL Reconciliation)'`
- *Pros:* Highlights pure organic Square growth stripping out Afterpay M&A (`+130.5% GAAP`).
- *Trade-off:* Cards 2 and 3 would both measure **Gross Profit**, leaving out `+55% CC GPV` from the top summary cards.

#### Option 3  -  Direct Delivery Breadth (`22–37 Products/Mkt` across `10+ Markets`  -  Pure Non-Financial Execution)
If you prefer Cards 1–2 to carry **zero company financial metrics** (keeping financials strictly on Card 3 + Section 4):
- **Metric 1 (`Scale`):** `'5 → 15 PMs (3×)'`  -  `'Global Localization PM Org Scaled Across Brand, Product Marketing, Legal & Regional GTM'`
- **Metric 2 (`Velocity`):** `'22–37 Products*'` *(or `'10+ Campaign Mkts'`)*  -  `'Localized Parity Across 8 Int’l Markets, Dec 2021 Block Rebrand, Spain (Jan 2022) & Canada Loans (Apr 2022)'`
- **Metric 3 (`Quality`):** `'9% → 15% Share*'`  -  `'Square Int’l Gross Profit Share (FY21 Q3 → FY22 Q3; 11% Ex-BNPL; +55% YoY CC GPV)'`
- *Pros:* 100% direct localization/program delivery numbers (`5 → 15 PMs` and `22–37 Products` / `10+ markets` per [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L48-L49) + Slide 26) in Cards 1–2 with zero attribution ambiguity.
- *Trade-off:* Slightly longer `value` wording (`22–37 Products*`) and mixes GPV into Card 3's label.

---

## Proposed Changes

### Career Data (`frontend/src/data/career/en.js`)
#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L881-L906)
Update `metrics[1]` (`evidenceId: 'bk-02'`) - and `metrics[0]` / `metrics[2]` sublabels only if Option 3 is selected - to the approved numeric metric and verify consistent `AcronymText` coverage (`FY22`, `Q3`, `GPV`, `CC`, `YoY`, `Ex-BNPL`).

---

### Automated Test Coverage (`frontend/src/data/career/career.test.js`)
#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L184-L190)
Update the expected `block.metrics.map((m) => m.value)` array to match the approved numeric string (`'5 → 15 PMs (3×)'`, selected Card 2 `value`, `'9% → 15% Share*'`).

---

### Documentation (`walkthrough.md`)
#### [MODIFY] [walkthrough.md](file:///Users/user/.gemini/antigravity/brain/a8ecca47-ef7c-44f0-a7c3-c24545ec0324/walkthrough.md#L22-L28)
Record the finalized Card 2 numeric metric and re-run results.

---

## Verification Plan

### Automated Tests
```sh
npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js
```

### Manual Verification
1. Inspect the **Rule of 3 (`Impact Snapshot`)** cards on `http://localhost:3000/career` under **Block** to verify visual balance across all 3 card values (`5 → 15 PMs (3×)`, Card 2 numeric metric, `9% → 15% Share*`) and hover tooltips.
