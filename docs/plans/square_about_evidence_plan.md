# Implementation Plan: Add Square About Timeline (2021–2022) & Page Archive to Block Evidence

## Goal Description
Add first-party company timeline evidence from [Square About (`squareup.com/us/en/about`)](https://squareup.com/us/en/about)  -  "Our business over time" (**2021–2022** milestones)  -  to the Block role in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), and preserve an offline local record plus Wayback Machine archive link mirroring the archival structure already used for [MIIS (`en.js:1022-1057`)](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L1022-L1057).

### What the Official Square Timeline Adds
The uploaded capture ([uploaded screenshot](file:///Users/user/.gemini/antigravity/brain/a8ecca47-ef7c-44f0-a7c3-c24545ec0324/.user_uploaded/media_1794614749156_55ea4961.jpg)) from `https://squareup.com/us/en/about` visually corroborates Block's 2021–2022 corporate & international milestones in one official brand artifact:
- **2022:** *"Square arrives to Spain and, later, also available in Catalan."* (directly reinforces Spain Jan 2022 GA + regional Catalan localization), alongside Tap to Pay on iPhone and Square Stand redesign.
- **2021:** *"Square, Inc. changes to Block, Inc."*, *"Square Banking launches"*, *"Square expands to France"*, *"Square expands to Ireland"* (adds visual confirmation for **Ireland**, which previously lacked a dedicated snapshot card), and *"Square acquires Afterpay"*.

---

## User Review Required

> [!IMPORTANT]
> **Only one image was attached (`2022` + `2021` wide strip).** You mentioned *"See the screenshot here and here"*, and the attachment shows both **2022** (left) and **2021** (right) on `squareup.com/us/en/about`. If you also had a separate zoomed-in second screenshot (for example, scrolled further into 2022/2021 or higher-up copy on the About page), let me know  -  otherwise, during execution I can capture crisp, high-resolution **2022** and **2021** timeline views directly from `https://squareup.com/us/en/about` in Chrome so all text is readable without compression.

> [!NOTE]
> **Timeline accuracy guard:** Keeping strict chronological consistency with your **Nov 2021 – Nov 2022** Block tenure, the new card note will distinguish FY21 market openings supported via post-launch localization scaling (**France**, **Ireland**) from direct in-tenure FY21–FY22 deliveries (**Square → Block rebrand Dec 2021**, **Spain Jan 2022 launch + Catalan localization**, **Canada Square Loans Apr 2022**).

---

## Open Questions

1. **Placement inside Block's Evidence Sections:**
   - **Option A (Recommended)  -  Add as Card 1 in `3. Market & Product Launches` ([en.js:206-263](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L206-L263)) in a balanced `columns: 2` (2×2) grid:**
     - Places *Square About Timeline (2021–2022)* alongside **France**, **Spain**, and **Canada**, updates the section badge from `🇫🇷 France · 🇪🇸 Spain · 🇨🇦 Canada` to `🇫🇷 France · 🇮🇪 Ireland · 🇪🇸 Spain · 🇨🇦 Canada`, and enables section-level links (`hideSectionLinks: false`) for the live About page + Wayback Machine archive. Avoids creating an orphan 4th card under a `columns: 3` grid.
   - **Option B  -  Add inside `2. Square → Block Global Rebrand` ([en.js:179-204](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L179-L204)):**
     - Pairs cleanly into a 2-column row next to the Dec 1, 2021 press release card, though international launch framing is stronger in Section 3.
2. **Future-Proof Page Record Format (matching MIIS):**
   - Like MIIS, we will save:
     1. High-res local PNG snapshot(s) in `frontend/public/evidence/` (stacked scrollable card `2022` + `2021` using the same `extraSlides` stacked modal viewer pattern as `Slides 31–32`, plus preserving your uploaded capture or fresh live capture).
     2. A **Wayback Machine Archive** link (`kind: 'archive'`) verified from `web.archive.org` for `https://squareup.com/us/en/about`.
   - Would you also like a **full-page PDF archive** (e.g., `/evidence/block-square-about-archive.pdf`) saved locally in `frontend/public/evidence/` alongside the PNGs so the full page text and footer remain archived offline?

---

## Proposed Changes

### Preserved Page Captures (`frontend/public/evidence/`)

#### [NEW] [block-square-about-2022.png](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/block-square-about-2022.png) & [block-square-about-2021.png](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/block-square-about-2021.png) *(exact split vs. combined format based on Chrome capture readability)*
- Capture crisp viewport snapshots of the **"Our business over time"** horizontal timeline on `https://squareup.com/us/en/about` covering **2022** (Spain & Catalan, Tap to Pay, Square Stand) and **2021** (Square → Block, Square Banking, France, Ireland, Afterpay), using the existing stacked `extraSlides` scroll preview + full-size `<dialog>` viewer in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L466-L505) so every card is sharp and legible on desktop and mobile.
- *(Optional if requested)* Save a printable full-page archive capture (`/evidence/block-square-about-archive.pdf`) linked locally for permanent offline reference.

---

### Career Dataset & Evidence Links (`frontend/src/data/career/en.js`)

#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L206-L263) & [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L938-L949)
- Define a constant (matching `BLOCK_INVESTOR_DAY_PDF_URL` / `BLOCK_Q3_2022_LETTER_URL`):
  - `BLOCK_SQUARE_ABOUT_URL = 'https://squareup.com/us/en/about'`
  - Verified Wayback Machine snapshot URL (`https://web.archive.org/web/<timestamp>/https://squareup.com/us/en/about`, or Wayback timeline index if no static timestamp is available  -  verified live before committing).
- Under `blockEvidenceSections` Section 3 (`id: 'markets'`, Option A):
  - Set `badge: '🇫🇷 France · 🇮🇪 Ireland · 🇪🇸 Spain · 🇨🇦 Canada'` and `columns: 2` (2×2 grid).
  - Add top section links (or keep only the Square About live + Wayback links there by rendering Section 3 links cleanly) with `kind: 'external'` for `Square Official About Timeline` and `kind: 'archive'` for `Wayback Machine Archive (squareup.com/us/en/about)`.
  - Prepend a new snapshot card (`About Timeline · 2021–2022 · Scroll` using `extraSlides`) showcasing both the **2022** (`Spain + Catalan`) and **2021** (`Square → Block`, `France`, `Ireland`) company milestones alongside the existing France, Spain, and Canada press cards.
- Update Block's `evidence.note` ([en.js:939](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L939)) to mirror MIIS's archival disclosure: note that live links, a Wayback Machine archive, and local captures of `squareup.com/us/en/about` (alongside Investor Day and Q3 2022 filings) are preserved in case public pages change or are retired.

---

### Automated Regression Tests (`frontend/src/data/career/career.test.js`)

#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L179-L256)
- Update the `'Block role preserves verified Investor Day, 3Q22 Shareholder Letter, rebrand metrics, proof links, and archive files'` test expectations to assert:
  - The new `/evidence/block-square-about-*.png` archive files exist on disk in `frontend/public/evidence/`.
  - `block.evidence.links` contains `https://squareup.com/us/en/about` and the `Wayback Machine` archive link (`kind: 'archive'`), and `block.evidence.note` references preserved Wayback / local archives.

---

## Verification Plan

### Automated Tests
- Run Jest career & acronym component suites after edits:
  ```bash
  npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js
  ```

### Browser & Visual Verification
- Verify `http://localhost:3000/career` in Chrome on the **Block (`Block (formerly Square, Inc.)`)** card:
  1. Expand **How I built it & Evidence Notes** → **3. Market & Product Launches**.
  2. Confirm the 2×2 grid layout renders cleanly with no orphan cards, both the `2022` and `2021` About timeline captures load sharply, scrolling/opening the stacked modal viewer displays legible milestone cards (`Spain & Catalan`, `Square → Block`, `France`, `Ireland`), and both the live `squareup.com/us/en/about` link and Wayback Machine archive pill resolve properly.
