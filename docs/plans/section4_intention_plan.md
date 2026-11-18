# Implementation Plan: L6 Statement of Intention for Block Section 4 (`4. International Growth & ROI`)

## Goal Description
Add a concise, L6-calibrated **Statement of Intention** at the top of **Section 4 (`4. International Growth & ROI`)** inside the **Block (`2021–2022`)** role on `/career`. The statement makes the analytical purpose of the section explicit upfront: connecting Mara’s direct program leadership across **three operational pillars** - (1) existing-market sustainability & product parity, (2) new-market expansion & scaling, and (3) new product & corporate brand launches - to **Square’s international growth** reported in Block’s May 2022 Investor Day and Q3 2022 Shareholder Letter.

---

## User Review Required

> [!IMPORTANT]
> **Pick Your Preferred Statement of Intention Wording Before Implementation**
> The copy & CV-alignment audit identified three factual/positioning refinements needed to elevate the draft to **L6 Program Management** standards without overclaiming. Please choose **Option 1 (Recommended)**, **Option 2**, or **Option 3** below (or share any tweaks) to approve implementation.

### L6 Fact, Attribution & CV Alignment Audit (vs. Draft)
Based on [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L39-L53) and [career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L114-L339):

| Audit Dimension | User Draft | L6 Correction & Evidence Basis |
| :--- | :--- | :--- |
| **Financial Scope** | *"overall groth and sucess of Block"* | Section 4 filings (`$220M` FY21, `$200.2M Ex-BNPL` / `$323.7M GAAP` FY22 9M YTD, `+55% CC GPV`) measure **Square International** (the non-U.S. Square Seller ecosystem), **not** Block consolidated (Cash App, TIDAL, Bitcoin, U.S. Square). Scope the claim to **Square’s international growth / international ecosystem**. |
| **L6 Attribution** | *"I lead and/or either supported ... directly contributed"* | [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L46-L51) and [career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L908) ground direct ownership in **scaling the Localization PM org (5 → 15 PMs)**, **cross-functional workflows**, and **go-to-market readiness** (*"supporting the global expansion of Square's ecosystem of products"*). Framing impact as **enabled go-to-market readiness** avoids overclaiming solo P&L ownership or Afterpay M&A (`+130.5% GAAP` vs. `+42.6% Ex-BNPL`). |
| **Entity & Tenure Naming** | *"at Square (later Block)"* | Square, Inc. renamed to Block, Inc. on **Dec 1, 2021** - month 2 of the **Nov 2021 – Nov 2022** tenure - while **Square** remained the Seller ecosystem brand. Use **Block (Square ecosystem)** or **Block (Nov 2021 – Nov 2022)**. |
| **3-Pillar Mapping** | *"Market sustainabilit, New markets expansion + new Product offerings"* | Maps 1:1 to Sections 1–3: **(1) market sustainability & product parity**, **(2) new-market expansion & post-launch scaling**, and **(3) new product & brand launches**. |

---

### Curated L6 Wording Options (Choose One)

#### Option 1  -  Concise Executive Framing *(Recommended)*
> **Statement of Intention:** Connect scaled localization execution to Square’s international business trajectory. During my Nov 2021 – Nov 2022 tenure at Block (Square ecosystem), the initiatives my expanded 5 → 15 PM org led and cross-functionally supported across three pillars  -  **market sustainability & product parity**, **new-market expansion & scaling**, and **new product & brand launches** (including the Dec 2021 Square → Block rebrand and Canada Square Loans)  -  directly enabled the go-to-market readiness behind Square’s international growth.

*Why recommended:* Tight 2-sentence executive thesis; matches [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L46-L51) verbatim in scope (`Square's ecosystem of products`, `5 → 15`, `go-to-market readiness`), clearly ties Sections 1–3 into Section 4, and introduces zero overclaiming risk in executive interviews.

#### Option 2  -  Operating-Model Bridge *(Workflow & Organic Growth Focus)*
> **Statement of Intention:** Show how localization program management operated as an international growth enabler rather than a downstream translation function. Scaling the PM org 3× (5 → 15 PMs) at Block (Nov 2021 – Nov 2022) standardized launch governance across **market sustainability** (parity across 8 markets), **new-market expansion** (France/Ireland scaling and Spain’s Jan 2022 launch), and **new product & brand launches** (Square → Block rebrand, Canada Square Loans, BNPL, and QR payments)  -  accelerating go-to-market readiness alongside Square International’s +42.6% YoY core Ex-BNPL Gross Profit growth and +55% YoY constant-currency GPV growth.

*When to choose:* Best if you want the opening sentence itself to highlight the operating model + organic (`Ex-BNPL` / `CC GPV`) proof numbers.

#### Option 3  -  Metric-Anchored Thesis *(Fast-Scan)*
> **Statement of Intention:** Provide the business context for scaling Block’s localization PM org 3× (5 → 15 PMs) across Square’s international portfolio (Nov 2021 – Nov 2022). Delivering across three operational pillars  -  **market sustainability** (parity across 8 markets), **new-market expansion** (Spain launch; France/Ireland scaling), and **new product & brand launches** (Square → Block rebrand; Canada Loans; Banking/BNPL/QR)  -  supported Square International’s expansion from $220M (FY21) to $200.2M core Ex-BNPL ($323.7M GAAP) Gross Profit in FY22 9M YTD.

*When to choose:* Best if you want headline FY21 → FY22 dollars restated inside the intention box itself (note: also covered in `section.summary` and the 4 reconciliation cards right below).

---

## Proposed Changes

### Career Data (`frontend/src/data/career/en.js`)
#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L265-L272)
Add `intentionLabel` and `intention` to `blockEvidenceSections[3]` (`id: 'roi'`):

```js
  {
    id: 'roi',
    title: '4. International Growth & ROI',
    badge: 'FY21 $220M (9%) → FY22 9M YTD $323.7M / $200.2M Ex-BNPL',
    defaultOpen: false,
    columns: 3,
    intentionLabel: 'Statement of Intention',
    intention: '<selected option copy>',
    summary:
      'Reconciles Block’s May 2022 Investor Day full-year FY21 baseline ...',
```

---

### Timeline UI (`frontend/src/components/CareerTimeline.jsx`)
#### [MODIFY] [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1215-L1225)
Render `{section.intention && ...}` immediately **above** `section.summary` inside Section 4 (`{isOpen && (...)}`), creating a clear **Why (`intention`) → Methodology (`summary`) → Bridge Cards (`reconciliation`) → Primary Proof (`snapshots`)** flow:

```jsx
{section.intention && (
  <p className="rounded-lg border-l-2 border-cyan-400/60 bg-cyan-500/[0.06] px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
    <span className="font-semibold text-cyan-200">
      {section.intentionLabel || 'Statement of Intention'}:{' '}
    </span>
    <AcronymText text={section.intention} />
  </p>
)}
```

- Uses full-width lightweight left-accented styling (no height imbalance on the 4-card reconciliation strip or 3-column snapshot grid).
- Wraps body text with `<AcronymText />` so acronyms (`PM`, `BNPL`, `Ex-BNPL`, `GAAP`, `GPV`, `QR`, `YoY`, `FY21`, `FY22`, `9M`, `YTD`) automatically get the site-wide hover/focus tooltips.

---

### Automated Test Coverage (`frontend/src/data/career/career.test.js`)
#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L230-L240)
Verify `roiSection.intention` is defined and non-empty on the Block timeline entry.

---

## Verification Plan

### Automated Tests
```sh
npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js
```
Confirm webpack dev server (`task-308`) compiles cleanly with zero errors.

### Manual Verification (Live Chrome on `http://localhost:3000/career`)
1. Open the **Block (`2021–2022`)** tab, expand `How I built it & Evidence Notes` → `4. International Growth & ROI`.
2. Verify the **Statement of Intention** callout renders cleanly above `section.summary`, maintains visual hierarchy above the 4 reconciliation cards and 3 snapshot cards, and displays inline `<abbr>` hover tooltips cleanly.
