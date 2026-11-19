# Implementation Plan (Revised): Block `/career`  -  Investor Day 2022, Market Launches & Global Rebrand

## Goal Description
Update the **Block** (`Nov 2021 – Nov 2022`) timeline entry in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L566-L652) using your exact review feedback, pairing verified **Block Investor Day 2022** data (`May 2022`, **Slides 26, 27, 31–32**) and the official **Square → Block Rebranding Announcement** (`Dec 1, 2021`: *"Square, Inc. Changes Name to Block"*) with your direct PM leadership scope (`5 → 15 PMs`, cross-functional execution, and **2021–2022** international scaling).

---

## Responses to Your Plan Comments

### 1. Defending the 2015–2021 Growth Stat & Aligning Directly to Your Tenure (`Nov 2021 – Nov 2022`)
- **Best Approach:** Lead **Card 1 & Card 2** strictly with **2021–2022** execution metrics (`5 → 15 PMs`, `22–37 products`, `Square → Block rebrand + post-launch FR/IE scaling + 2022 ES/CA launches`), keep **`$220M · 9% Share*`** (which peaked in **2021**, right as you led international expansion) + **`>60% multi-year growth*`** clearly attributed in **Card 3**, and render an explicit **`*` disclaimer footnote** directly beneath the 3 Rule-of-3 cards (`metricsFootnote` in `CareerTimeline.jsx`).
- **How to defend it in an interview (exact framing):**
  > *"Block’s May 2022 Investor Day shows Square’s international segment had scaled at >60% annually since 2015 to reach $220M (9% of gross profit in 2021). When I joined in Nov 2021, my role was scaling our PM org 3x (5 → 15 PMs) to stabilize newly opened 2021 European markets (France, Ireland), drive the global Square → Block rebrand across markets, and execute the 2022 Spain and Square Loans Canada launches."*

### 2. Clarifying France Launch Timing (`Sep 2021`) vs. Your Role (`Nov 2021 – Nov 2022`)
- Rephrase so there is zero timeline ambiguity:
  - *"Supported post-launch ecosystem scaling and product expansion in newly opened 2021 European markets (France, Ireland) while executing 2022 launches including Spain (Jan 2022), Square Loans in Canada (Apr 2022), and the global Square → Block rebrand (Dec 2021)."*

### 3. Including Both Option A & Option B Data Without Breaking Rule-of-3 (`career.test.js` enforces 3 metric cards)
- **3 Metric Cards (`metrics`):**
  1. **Scale / Scope:** **`5 → 15 PMs (3×)`**  -  *Program Org Scaled Across 8 Int’l Markets (Up to 37 Products/Market)*
  2. **Velocity / Impact:** **`3 Launches + Rebrand`**  -  *Block Rebrand (Dec ’21), Post-Launch FR/IE, Spain (Jan ’22) & CA Loans (Apr ’22)*
  3. **Quality / Governance:** **`$220M · 9% Share*`**  -  *2021 Square Int’l Gross Profit (Up from 3%; >60% Annual Growth*)*
- **Visible `*` Footnote directly under the Metric Grid (`metricsFootnote`):**
  - `*Block Investor Day 2022 (May 2022, Slides 26–31) reports FY 2021 Square international gross profit ($220M / 9% share) and 2015–2021 international CAGR (>60%); my Nov 2021–Nov 2022 team focused on PM scaling, global rebrand delivery, and 2021–2022 international market/product rollouts.`
- **All Remaining Country Product Counts in Highlights:**
  - Full Slide 26 market breakdown included right in `highlights`: **Canada (37 products), UK & Australia (34), Ireland (29), Japan (26), France (22), plus Spain (Jan 2022)** (`U.S. 44` baseline), alongside cross-functional alignment (`Brand, Product Marketing, Legal, and Regional GTM`).
  - Both `[Placeholder: ...]` Jira/vendor bullets are removed cleanly as requested.

### 4. Company Name, Square → Block Rebrand Evidence & Full Deck Access
- **Company Display Name:** Updated to **`Block (Square + Cash App)`**, and role `placeholder` flag set to **`false`**.
- **New Rebrand Proof Added:** Verified `https://block.xyz/inside/press-release-block` (*"Square, Inc. Changes Name to Block"*, **`Dec 1, 2021`**) captured as `/evidence/block-rebrand-announcement.png` and added to `evidence.links`.
- **Full Investor Day Deck Access:** Added direct link to the complete 77-page PDF (`Block Investor Day 2022 Full Deck (77-Slide PDF, May 2022)`) in `evidence.links`, paired with **Slides 26, 27, and 31** (plus **Slide 1 cover** or keep strictly the 3 data slides + rebrand + 3 press releases = `7` crisp visuals  -  default below includes Slides 26, 27, 31 + Rebrand + France/Spain/Canada = **7 evidence snapshots**, plus the clickable full 77-page PDF link right above them).

---

## Proposed Changes

### UI Component (`frontend/src/components/CareerTimeline.jsx`)
#### [MODIFY] [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L656-L678)
- Render an optional subtle footnote (`selectedItem.metricsFootnote`) directly below the 3-column `MetricBadge` grid whenever defined, so the `*` macro attribution is always visible without cluttering cards that don’t use it:
```jsx
{selectedItem.metricsFootnote && (
  <p className="text-xs text-slate-400 italic leading-relaxed">
    {selectedItem.metricsFootnote}
  </p>
)}
```

---

### Career Data (`frontend/src/data/career/en.js`)
#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L566-L652)
- Update `company` to `'Block (Square + Cash App)'` and set `placeholder: false`.
- Update `summary` to highlight PM org scaling (`5 → 15`), the **Dec 2021 Square → Block global rebrand**, post-launch European market stabilization (`France`, `Ireland`), and **2022 launches** (`Spain`, `Square Loans Canada`).
- Replace the 3 `[X]`/`[N]` metrics with the combined verified metrics above (`placeholder: false`) + `metricsFootnote`.
- Replace `[Placeholder: ...]` highlight bullets with 3 verified bullets (Rebrand, Market/Product Ecosystem Breakdown from Slides 26–31, Cross-Functional GTM & Governance  -  no Jira bullet).
- Expand `evidence.links` (`5` links: Block Rebrand Dec '21, France Sep '21, Spain Jan '22, Canada Apr '22, Full 77-Slide Investor Day PDF May '22) and `evidence.snapshots` (`7` captures: Rebrand, France, Spain, Canada, Slide 26, Slide 27, Slide 31).

---

### Saved Evidence Assets (`frontend/public/evidence/`)
#### [NEW] Verified PNG Captures from Chrome (Permissions `0644`)
- `block-rebrand-announcement.png` *(captured from `block.xyz/inside/press-release-block`, Dec 1, 2021)*
- `block-investor-day-slide26.png` *(Slide 26: Bringing our product ecosystem global)*
- `block-investor-day-slide27.png` *(Slide 27: Strong gross profit growth in global market)*
- `block-investor-day-slide31.png` *(Slide 31: Global market expansion map 2010–2022)*
*(Alongside existing `block-square-france.png`, `block-square-spain.png`, and `block-square-canada.png`.)*

---

### Automated Tests & Roadmap
#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L179-L198)
- Verify `block.company` (`'Block (Square + Cash App)'`), verified metric values, `placeholder === false`, `metricsFootnote`, all `5` `evidence.links` (including `press-release-block` & `Square-Block-Investor-Day-2022.pdf`), and `fs.existsSync` on all `7` saved Block PNGs in `frontend/public/evidence/`.

#### [MODIFY] [TODO_PORTFOLIO.md](file:///Users/user/Documents/github/portfolio-builder/TODO_PORTFOLIO.md#L12)
- Update **Block Archive Snapshots** line to record all 7 saved Block PNGs (rebrand + 3 market launches + Investor Day Slides 26, 27, 31).

---

## Verification Plan

### Automated Tests
```bash
npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js
```
Assert all test cases pass (`0` failures) including `fs.existsSync` for all 7 Block proof PNGs and no `[Placeholder]` metrics remaining on `block`.

### Manual Verification
1. Open `http://localhost:3000/career`, hard-refresh (`Cmd + Shift + R`), and select **Block** (`2021–2022`).
2. Confirm:
   - Header displays **`Block (Square + Cash App)`** · **`Program Management Lead`**.
   - All 3 Rule-of-3 metric cards render without dashed `Draft` borders, with the `*` attribution footnote directly below.
   - **How I built it & Evidence Notes** shows the 3 verified bullets (no Jira), all 5 external proof links (Rebrand, France, Spain, Canada, Full 77-Slide PDF), and all 7 crisp webpage/slide screenshots.
