# Implementation Plan: Structured, Expandable Footnote & Distinct Claim Markers (`*` vs `**`)

## Goal Description
Replace the dense 6-line italic paragraph under Block’s 3 Impact Snapshot cards ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L910-L911)) with a **scannable, line-separated bullet breakdown** inside an accessible native `<details>` disclosure (collapsed by default behind a crisp 1-line filing summary), and separate Card 2 vs. Card 3 claims using distinct footnote markers (`*` vs. `**`).

---

## User Review Required

> [!IMPORTANT]
> **Three Design Decisions to Confirm Before Editing Code**
> 1. **Markers (`*` vs `**`  -  Recommended):** Use **`*`** exclusively on **Card 2 (`+55% YoY CC GPV*`)** and **`**`** exclusively on **Card 3 (`9% → 15% Share**`)** so a reader can immediately jump to the matching footnote bullet (`*` for GPV vs. `**` for Gross Profit Share). *(Alternative: keep a single `*` on both cards.)*
> 2. **Disclosure vs. Scroll Box:** Use a native HTML **`<details>` / `<summary>`** toggle (starts collapsed at 1 clean line, expands cleanly on click/Enter with crisp separate bullets) rather than a fixed-height scrollable box (`overflow-y-auto`), matching modern progressive disclosure guidelines (`content-first-noise-reduction`) and avoiding nested scrollbars on mobile/trackpads.
> 3. **Deduplication:** Trim each expanded bullet to 1 scannable line because the full 4-period GAAP vs. Ex-BNPL reconciliation strip already lives in **Section 4 (`4. International Growth & ROI`)**.

---

## Proposed Structure (Visual Mockup of What Will Render)

### Default State (Above the Fold  -  Clean & Uncluttered)
1. **Metric Cards Row:**
   - Card 1 (`Team Scale`): **`5 → 15 PMs (3×)`** *(no marker  -  directly from CV)*
   - Card 2 (`Payment Velocity`): **`+55% YoY CC GPV*`**
   - Card 3 (`Profit Share`): **`9% → 15% Share**`** *(sublabel ends `11% Core Ex-BNPL)**`)*
2. **Collapsed Footnote Line (`<summary>`):**
   > `▸ *, ** Verified across Block’s May 2022 Investor Day & Q3 2022 Shareholder Letter (Nov 3, 2022) · View metric & ownership breakdown`

### Expanded State (`<details open>`  -  Scannable Separate Bullets)
- **`* Payment Velocity (Q3 2022 Letter, p. 11):`** FY22 Q3 Square International GPV grew `+55% YoY` constant currency (`+40% YoY` reported), outpacing U.S. GPV growth (`+17% YoY`) by `>3×`.
- **`** Profit Share (Investor Day Slide 27 & Q3 2022 Letter, pp. 7, 29):`** Rose from `9%` (`FY21 Q3`: `$53.4M`; `FY21` baseline: `$220M`, `>60% FY15–FY21 CAGR`) to `15%` all-in (`$120.9M`) and `11%` core `Ex-BNPL` (`$75.1M`, `+40.7% YoY`) in `FY22 Q3`.
- **`FY22 9M YTD Context (Ended Sep 30, 2022, pre-Q4 close):`** Core `Ex-BNPL` International Gross Profit reached `$200.2M` (`+42.6% YoY`) and `GAAP` all-in reached `$323.7M` (`+130.5% YoY`)  -  see Section 4 below for the full 4-period bridge.
- **`Direct Ownership Scope (Nov 2021 – Nov 2022):`** Scaling the Localization PM org `3×` (`5 → 15 PMs`), delivering the `Dec 2021` `Square → Block` rebrand, and executing FY21–FY22 international launches (`France`/`Ireland` post-launch scaling, `Spain` GA `Jan 2022`, `Canada Loans` `Apr 2022`).

---

## Other Suggestions Included in This Plan
1. **Keep Card 1 (`5 → 15 PMs (3×)`) asterisk-free:** Visually reinforces that team scaling is a **100% direct CV/leadership figure**, while `*` and `**` mark **company-level Square International commercial figures** from SEC/investor filings.
2. **Place `<AcronymText />` inside every bullet + summary line:** Ensures `FY22`, `Q3`, `GPV`, `YoY`, `CC`, `BNPL`, `Ex-BNPL`, `GAAP`, `CAGR`, `9M`, `YTD`, `FY21`, and `PM` keep their instant hover/focus tooltips inside the expanded breakdown *(setting `insideInteractive` inside `<summary>` so no focusable/clickable button ambiguity occurs on toggle clicks)*.
3. **Optional `View Section 4 ROI Bridge ↓` jump-not-needed note:** Since `Metrics & Terms Guide` + `How I built it & Evidence Notes` sit immediately below, clicking out keeps the layout compact with zero extra pill noise.

---

## Proposed Changes

### Career Dataset (`frontend/src/data/career/en.js`)
#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L891-L912)
- Update `metrics[1].value` to `'+55% YoY CC GPV*'` (single `*`) and `metrics[2].value` / `label` to `'9% → 15% Share**'` (`**`).
- Shorten `metricsFootnote` to the 1-line summary teaser string and add structured `metricsFootnoteItems` array (`marker`, `title`, `text`) for the 4 clean bullets above.

---

### Timeline UI Component (`frontend/src/components/CareerTimeline.jsx`)
#### [MODIFY] [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1003-L1008)
- When `Array.isArray(selectedItem.metricsFootnoteItems) && selectedItem.metricsFootnoteItems.length > 0`, render a native styled `<details>` block:
  - `<summary>` displays `{selectedItem.metricsFootnote}` with `<AcronymText text={selectedItem.metricsFootnote} insideInteractive />` and a subtle `"Details ▾"` toggle indicator.
  - Inside `<details>`, render a `<ul className="mt-2.5 space-y-1.5 border-t border-white/10 pt-2.5">` list with bold markers/titles (`*`, `**`) and `<AcronymText text={item.text} />`.
- Retain plain `<p>` fallback whenever another timeline item sets only a short string `metricsFootnote` without `metricsFootnoteItems`.

---

### Automated Test Coverage (`frontend/src/data/career/career.test.js`)
#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L185-L200)
- Update expected Block metric value #3 to `'9% → 15% Share**'`.
- Verify `block.metricsFootnote` contains `'Investor Day'` and `'Q3 2022 Shareholder Letter'`, and `block.metricsFootnoteItems` has length `4` containing `'FY22 9M YTD'`, `'+55% YoY'`, and `'Direct Ownership Scope'`.

---

## Verification Plan

### Automated Tests
```sh
npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js
```

### Manual Verification (Chrome on `http://localhost:3000/career`)
1. Confirm Block’s Impact Snapshot displays Card 1 (no asterisk), Card 2 (`*`), Card 3 (`**`), followed cleanly by a **1-line** collapsed `<details>` summary row (`metricsFootnote`).
2. Click the `<summary>` row to toggle open all 4 clean bullets, verify visual hierarchy, keyboard (`Enter`/`Space`) toggling, and hover tooltips on acronyms (`FY22`, `Q3`, `GPV`, `Ex-BNPL`, `GAAP`) inside the expanded bullets.
