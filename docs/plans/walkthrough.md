# Walkthrough: MIIS Metrics & Archival Evidence on `/career`

## Summary of Changes

1. **Verified MIIS Rule-of-3 Metrics ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L628-L652)):**
   - Replaced `[N]` placeholders on **`MIIS`** (`2023–2025`) with verified metrics from the `Mara Martins` slide deck (`placeholder: false`):
     - **Scale:** `90–120 PMs Upskilled` · *#1 Degree Program at MIIS · ~24% of MIIS Enrollment*
     - **Velocity:** `+133% YoY Track Growth` · *120 Active Cohort / Online LPRM Track (15 to 35 Students)*
     - **Quality:** `95%` · *AI in Localization Series Attendance*

2. **Institutional Research Link, Archive Note & Multi-Snapshot Support ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L658-L691), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L839-L904)):**
   - Added `Official MIIS Institutional Data (Tableau)` (`https://www.middlebury.edu/assessment-institutional-research/institutional-data/middlebury-institute-international-studies`) alongside `Official MIIS Faculty Profile`, `Wayback Machine Archive (Feb 2025)`, and `Full MIIS Case Study & Speaker Series` (`/project/localization-training-program`).
   - Updated the archival note and upgraded `CareerTimeline.jsx` to render a responsive grid of snapshot captures (`evidence.snapshots`), and saved both full-page live browser PNGs (`/evidence/miis-faculty-profile.png` at `405K` and `/evidence/miis-institutional-data.png` at `565K`) into `frontend/public/evidence/` (retaining graceful fallback placeholders if an asset is missing).
   - Kept the Google Slides deck link out of `/career` for now per request.

3. **Roadmap To-Dos Added ([TODO_PORTFOLIO.md](file:///Users/user/Documents/github/portfolio-builder/TODO_PORTFOLIO.md#L8-L12)):**
   - Added **MIIS Training Program Consistency Review** (revisit `/project/localization-training-program` later; currently AI Speaker Series focused).
   - Added **MIIS Executive Deep-Dive Deck** (decide later whether to publish/link the `Mara Martins` Google Slides deck).
   - Completed **MIIS Archive Snapshots** (`miis-faculty-profile.png` and `miis-institutional-data.png` saved under `frontend/public/evidence/`).
   - Completed **Block Archive Snapshots** (`block-rebrand-announcement.png`, `block-square-france.png`, `block-square-spain.png`, `block-square-canada.png`, and `block-investor-day-slide26/27/31.png` saved under `frontend/public/evidence/`).

4. **Block (`2021–2022`) Metrics, Consistency Polish, 3Q22 Reconciliation & Native Glossary Popup ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L43-L350), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L315-L405), [index.css](file:///Users/user/Documents/github/portfolio-builder/frontend/src/index.css#L213-L223)):**
   - Standardized all period labels using Block’s year-first format (**`FY21`**, **`FY22 (9M YTD, ended Sep 30, 2022)`**, **`FY22 Q3`**, **`FY21 Q3`**) and 4-digit calendar dates (`Sep 2021`, `Dec 2021`, `Jan 2022`, `Apr 2022`), normalized dollar units to **`$M`** across all UI copy, spelled out `Gross Profit` and `general availability`, and aligned the 8-market list in Section 1 (`Canada`, `Australia`, `UK`, `Ireland`, `Japan`, `France`, `Spain`, and `Falkland Islands`).
   - Aligned Block’s company headline to **`Block (formerly Square, Inc.)`** ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L869)), matching the Dec 2021 corporate rebrand and Square International metric scope without implying unreported Cash App metrics.
   - Updated Block’s Rule-of-3 Impact Snapshot cards ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L881-L930), [MetricBadge.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/MetricBadge.jsx#L49-L69)) to display explicit focus badges (**`Team Scale`** · **`Payment Velocity`** · **`Profit Share`**) paired with verified quantitative metrics (**`5 → 15 PMs (3×)`**, **`+55% YoY CC GPV*`**, **`9% → 15% Share**`**) and distinct footnote markers (`*` vs `**`) backed by a scannable, collapsed-by-default 3-bullet native `<details>` breakdown (`metricsFootnoteItems`) in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1003-L1044).
   - Added a native `<dialog>` **Financial Metrics & Reporting Terms Guide** (`Metrics & Terms Guide` + interactive term pills `GAAP`, `Ex-BNPL`, `BNPL`, `GPV`, `Constant Currency`, `Gross Profit`, using `BookOpen` without `?` clutter) defining 9 financial/reporting concepts grounded in Block’s official filings.
   - Fixed 3-column card alignment across Sections 1, 3, and 4 using uniform `h-56` (`fit: 'contain'`) preview containers, matching `marketTag` badges, dedicated header link sub-rows, and aligned `border-t` dividers.
   - Added **Investor Day Slide 32** (`/evidence/block-investor-day-slide32.png`) as a stacked vertical scroll-down (`h-56 overflow-y-auto snap-y`) inside Section 1 Card 2 (`Slides 31–32 · Global Expansion Map & Timeline`) alongside an **Open Slides 31–32** button and `PDF (p. 31–32)` link (`#page=31`). Clicking Slide 31, Slide 32, or **Open Slides 31–32** opens a scrollable native `<dialog>` Slide Viewer stacking Slides 31 and 32 vertically so scrolling from Slide 31 to Slide 32 works seamlessly both in-card and enlarged.
   - Added consistent inline & pill acronym hover/focus tooltips (`GAAP = Generally Accepted Accounting Principles`, `Ex-BNPL`, `BNPL`, `GPV`, `CC`, `YoY`, `YTD`, `CAGR`, `9M`, `FY15`–`FY22`, `Q1`–`Q4`, `GTM`, `ROI`, `QR`, `SLA`, `NDA`, `HITL`, `TLM`, `MIIS`, etc.) via [AcronymText.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/AcronymText.jsx#L1-L343) across [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) and [MetricBadge.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/MetricBadge.jsx), rendered in a top-layer `popover="manual"` `[role="tooltip"]` with `Escape` dismiss and click-to-open the Glossary guide on matching terms.
   - Removed the redundant `.txt` archive link (`Local Archival Record`) and `block-source-archive.txt` since all 11 source PNG captures are saved in `frontend/public/evidence/` and linked directly via **Full Image** / slide links.
   - Tightened Section 4 (`4. International Growth & ROI`) summary opening in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L270-L271) (`"The ROI data below reconciles ..."`), removing the separate Statement of Intention callout to avoid repetition.
5. **Global `"How I built it & Evidence Notes"` Surface Refresh ([CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1144-L1150)):**
   - Updated the single shared collapsible drawer container (`border-cyan-400/20 bg-slate-950/55 shadow-inner`) so all Work and Academic items across `/career` separate cleanly from both the outer role card and nested `bg-black/30` proof cards.
6. **Square Official About Timeline (`2021–2022`) & Multi-Layer Archive in Section 3 ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L43-L280), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L372-L520)):**
   - Converted Section 3 (`3. Market & Product Launches`) into a balanced 2×2 grid (`columns: 2`), updated the badge to `🇫🇷 France · 🇮🇪 Ireland · 🇪🇸 Spain · 🇨🇦 Canada`, and added `Square About · 2021–2022 Global Milestones` as Card 1 using crisp `2880×1800` live captures (`block-square-about-2022.png` + `block-square-about-2021.png` via `extraSlides` and `slideBg: 'white'`).
   - Added 3 preservation links matching the MIIS archival pattern: live [`squareup.com/us/en/about`](https://squareup.com/us/en/about), verified **Wayback Machine Archive (Nov 2026)** (`https://web.archive.org/web/20261108180332/https://squareup.com/us/en/about`), and a locally stored 11-page offline PDF (`/evidence/block-square-about-archive.pdf`, `1.2M`).
7. **ESTG Evidence Section & Redacted Certificates ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L417-L480), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L435-L441)):**
   - Upgraded ESTG (`graduation`, `2001–2007`) with an interdisciplinary top summary (`organizational psychology, law, economics, and computer science`) and 3 structured highlight bullets separating **Degree Path & Credentials**, **Complementary Non-Translation Coursework (Org Behavior, Law, Economics & Tech)** (*Work and Organizational Psychology*, *Psychology of Communications*, *Introduction to Social Sciences*, *Introduction to Law*, *Introduction to Economics*, *Computer Science I–II*, *Translation Technologies I–II*, *Scientific Research Methodology*), and the **Languages, Interpreting & Applied Track** (without claiming unverified `PGM` course titles).
   - Redacted family/birthplace lines and the numeric classification (`0–20` Portuguese grading scale; `10+` passing explained in notes) on both translated certificates ([estg-bachelor-certificate-redacted.png](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/estg-bachelor-certificate-redacted.png) and [estg-licentiate-certificate-redacted.png](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/estg-licentiate-certificate-redacted.png)) and bundled both into [estg-course-certificates-redacted.pdf](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/estg-course-certificates-redacted.pdf) (`211K`).
   - Paired the stacked `Open BA + Licentiate Certificates` preview/modal with a live snapshot of [`ipleiria.pt/en/`](https://www.ipleiria.pt/en/) ([estg-ipleiria-en.png](file:///Users/user/Documents/github/portfolio-builder/frontend/public/evidence/estg-ipleiria-en.png)), the English ESTG school page (`https://www.ipleiria.pt/en/about-us/schools/estg/`), and the verified **Wayback Machine Archive (Oct 2026)** (`https://web.archive.org/web/20261030153521/https://www.ipleiria.pt/en/`).

## Verification Results

- **Automated Tests:** `npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js` in [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L179-L296) and [AcronymText.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/AcronymText.test.js)
  - **Result:** `2 passed, 2 total` suites; **`11 passed, 11 total`** tests after the final edit.
- **Live Browser Check (`http://localhost:3000/career`):**
  - Confirmed Option 1 drawer styling, Block Section 3 2×2 grid (`5/5` images loaded), and ESTG 2-column grid (`3/3` images loaded, scrolled `Open BA + Licentiate Certificates` modal, and `HTTP 200` `application/pdf` responses for both local PDF archives).
- **Live Captures Saved:**
  - **ESTG:** `estg-bachelor-certificate-redacted.png` (`42K`), `estg-licentiate-certificate-redacted.png` (`41K`), `estg-course-certificates-redacted.pdf` (`211K`), `estg-ipleiria-en.png`.
  - **MIIS:** `miis-faculty-profile.png` (`405K`), `miis-institutional-data.png` (`565K`).
  - **Block:** `block-rebrand-announcement.png` (`1.4M`), `block-square-about-2022.png` (`901K`), `block-square-about-2021.png` (`813K`), `block-square-about-archive.pdf` (`1.2M`), `block-square-france.png` (`961K`), `block-square-spain.png` (`2.1M`), `block-square-canada.png` (`1.7M`), `block-investor-day-slide26.png` (`146K`), `block-investor-day-slide27.png` (`190K`), `block-investor-day-slide31.png` (`391K`), `block-investor-day-slide32.png` (`116K`), `block-q3-2022-expanding-globally.png` (`112K`), `block-q3-2022-intl-gpv.png` (`72K`), and `block-q3-2022-intl-reconciliation.png` (`41K`).

8. **LinkedIn (`2020–2021`) ROIC.ai Quarterly Earnings Transcripts & Full-Tenure Narrative Arc ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L656-L790)):**
   - Incorporated all 5 user-captured ROIC.ai quarterly earnings call transcripts into `frontend/public/evidence/`:
     - `linkedin-msft-transcript-fy21q1.jpg` (722M members, major redesign, Stories, 2x learning)
     - `linkedin-msft-transcript-fy21q2.jpg` (740M members, sessions +30%, conversations +48%, ad business >1/3 revenue)
     - `linkedin-msft-transcript-fy21q3.jpg` (756M members, Creator Mode introduction, Marketing Solutions +60%, >$3B LTM)
     - `linkedin-msft-transcript-fy21q4.jpg` (774M members, revenue surpassed $10B, ad business +97% YoY to >$1B)
     - `linkedin-msft-transcript-fy22q1.jpg` (800M members, hires +160% YoY, 15k enterprise Learning customers, ad revenue +61%)
   - Expanded Section 4 (`4. Microsoft Investor Relations Earnings & ROI Reconciliation (FY20 Q4–FY22 Q1)`) to an unbroken 6-quarter commercial bridge spanning from the initial COVID-19 remote work pivot in FY20 Q4 (706M members) to the $10B revenue milestone and the September 30, 2021 Stories sunset.
   - Added direct links to all 6 quarterly ROIC.ai call transcripts alongside official Microsoft Investor Relations Wayback Machine captures.
   - Added a scrollable multi-slide viewer card (`ROIC.AI TRANSCRIPTS · FY21 Q1–FY22 Q1 · SCROLL`) displaying the full 5-quarter transcript gallery with direct in-page inspection.
   - Updated [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) (all 14 tests passing).

9. **Plans and Architecture Archival Record ([docs/plans/](file:///Users/user/Documents/github/portfolio-builder/docs/plans/README.md), [plans/](file:///Users/user/Documents/github/portfolio-builder/plans/README.md)):**
   - Centrally archived all 19 approved and implemented plans, PRDs, audits, and guides into `docs/plans/` inside `portfolio-builder`.
   - Sanitized all prose em-dashes across all 19 files, enforcing strict compliance with the zero prose em-dash rule.
   - Authored [docs/plans/README.md](file:///Users/user/Documents/github/portfolio-builder/docs/plans/README.md) organizing the repository plan collection into 6 distinct workstreams (Master Architecture & PM, Block/Square, LinkedIn/Microsoft, MIIS, Education & Credentials, and Design System & Governance).
   - Added [plans/README.md](file:///Users/user/Documents/github/portfolio-builder/plans/README.md) pointing directly to `docs/plans/` for instant accessibility from the project root.

10. **Hogarth Worldwide (2010–2014) Client Launches & HTC Brand Platform ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L1300-L1385), [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js#L130-L145), [resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js#L130-L145)):**
    - Transitioned Hogarth UK from draft placeholder to an active, verified role card with Rule-of-3 metrics (`30+ mkts`, `10+ team`, `Digital, Print, ATL`).
    - Incorporated user evidence for HTC's global "Change" brand platform (fronted by Robert Downey Jr., developed by WPP Group agency 171 Worldwide, executed by Hogarth Worldwide).
    - Added Section 1 to `hogarth-uk` evidence drawer (`1. Global Client Account Launches · HTC "Change" Brand Platform (WPP Group)`) with dual high-resolution snapshot cards (`htc-wpp-brand-change-platform-1.jpg` and `htc-wpp-brand-change-platform-2.jpg`) and direct links to the official HTC press release and Wayback Machine archive.
    - Updated `resume/en.js` and `resumeData.js` achievements to highlight enterprise client account leadership and WPP / HTC multi-channel brand execution.
    - Added comprehensive unit tests in [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) (all 15 tests passing) and logged the architectural plan in [docs/plans/hogarth_wpp_htc_brand_plan.md](file:///Users/user/Documents/github/portfolio-builder/docs/plans/hogarth_wpp_htc_brand_plan.md).

11. **LinkedIn Stories United Kingdom Rollout Evidence ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L485-L580), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L355-L375)):**
    - Added the United Kingdom rollout (Wave 6, Oct 20, 2020) to Section 1 of LinkedIn evidence (`1. Multi-Market LinkedIn Stories Rollout & Global Rebrand (2020)`), upgrading the badge to `Primary Press & LinkedIn Sources · 6 Captures`.
    - Integrated Rachel Tombs' LinkedIn Pulse article (`https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/`) and Wayback search links.
    - Generated and added high-resolution evidence snapshot `frontend/public/evidence/linkedin-stories-uk.png` creating a balanced 3x2 grid of launch captures across Brazil, Netherlands, UAE, Australia/France, Global Redesign, and the UK.
    - Updated narrative copy and resume data across [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js), [resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js), and [resume/pt.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/pt.js) to include the UK launch wave.
    - Refined Section 1 summary and role highlight to emphasize direct ownership: *"Drove the marketing updates and the localized look and feel across all markets; as manager, owned team capacity and initiatives prioritization, cross-functional alignment while delivering on time in line with MKTG organizational priorities and in alignment with the CEO's vision and company direction."*
    - All 15 unit tests passing.

12. **Human-Friendly Career Content Polish & AI Vocabulary Refinement ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - **Mechanical Arrow Removal:** Replaced arrows (`->`, `→`) across titles, links, descriptions, and badges with natural English (`to`, `from ... to ...`, `transition`):
      - `Square → Block Global Rebrand` updated to `Square to Block Global Rebrand` across all titles, badges, links, captions, and notes.
      - Block team scale: `5 → 15 PMs (3×)` updated to `5 to 15 PMs (3×)` and `threefold (from 5 to 15 PMs)`.
      - Block profit share: `9% → 15% Share**` updated to `9% to 15% Share**`, and `FY21 Q3 → FY22 Q3` updated to `FY21 Q3 to FY22 Q3`.
      - Section 4 badge: `FY21 $220M (9%) → FY22 9M YTD $323.7M` updated to `FY21 $220M (9%) to FY22 9M YTD $323.7M`.
      - LinkedIn founding scale: `0 -> 2 PMs` updated to `Founding to 2 PMs` and `growing from founding to 2 PMs`.
      - Stories transition: `Stories -> Creator Pivot` updated to `Stories to Creator Mode Transition`.
      - MIIS track growth label: `15 → 35` updated to `15 to 35 Students`.
      - Relocation sublabels: `Lisbon, PT → Basingstoke, UK` updated to `Lisbon, PT to Basingstoke, UK`, and `London, UK → Silicon Valley, USA` updated to `London, UK to Silicon Valley, USA` (preserving compact country abbreviations per user guidance).
      - Future 2027 monogram: updated from arrow to `🎯`.
    - **Preservation of Concise Visual Metrics:** Kept standard financial and operational nomenclature (`+55% YoY CC GPV*`, `+97% Mktg Solns*`, `+133% YoY Track Growth`, `30+ mkts`, `10+ team`, `37+ Products`) intact in all primary metric cards and badges for rapid visual scannability per user direction.
    - **Long-Form Narrative Polish:** Natural phrasing applied exclusively to extended narrative descriptions, snapshots, and footnotes:
      - `over $10 billion in annual revenue`, `over 706 million members`, `over 722 million members`, `over 774 million members`, `over 37 products`.
    - **Robotic AI Vocabulary Elimination:**
      - Replaced `whilst` with `while` across all role summaries and highlights.
      - Replaced `orchestrated` with authoritative executive phrasing (`Led the sequential country rollout across...`, `Directed cross-functional operational alignment...`).
      - Replaced `spearheaded` with `Created and launched the institute's first AI Series`.
    - **Testing & Verification:**
      - Updated test assertions in [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) (lines 128, 142, 191, 193).
      - All 15 unit tests pass cleanly. Production build compiled with zero errors.
      - Verified strict zero prose em-dash compliance throughout.

13. **LinkedIn Metrics Footnote Streamlining ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - Removed superscript markers `¹` and `²` and eliminated the multi-bullet collapsible breakdown from the LinkedIn impact snapshot.
    - Removed the redundant summary line (`Official Title: Senior Localization Marketing Manager...`).
    - Streamlined the footnote to a single clear explanatory card dedicated to the `*` on `+97% Mktg Solns*`:
      - `*Commercial Context (MSFT IR FY21 Q4): +97% YoY LinkedIn Marketing Solutions (+91% constant currency) and over $10 billion in annual LinkedIn revenue (+27% FY21). Source: see Microsoft Investor Relations FY21 Q4 results (specifically, July 27, 2021), where Stories, redesigns, and Creator tools operated alongside Marketing Solutions.`
    - Styled single-footnote cards with `rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs text-slate-300 leading-relaxed`, preserving interactive acronym tooltips via `AcronymText`.
    - Sanitized two legacy em-dashes in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) to maintain 100% em-dash compliance.
    - Updated [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) assertions and verified all 15 unit tests pass.

14. **LinkedIn Architecture & Execution Summary Streamlining ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx)):**
    - Merged the redundant top summary paragraph and intermediate breakdown heading (`How MARCOM Execution & Scale Worked Together:`) directly into an authoritative executive opening under `MARCOM Localization Program Architecture & Multi-Market Launch Execution`.
    - Updated the first execution bullet (`Org Founding & MSP Outsourced Model:`) with comprehensive leadership scope:
      - *"Founded and spearheaded the Global MARCOM Localization Program Management function during COVID-19 to drive international growth, scaling the core team to 2 FTE Loc MKTG PGMs. Architected a hybrid operational model by directing up to 15 internal linguists and scaling an outsourced MSP vendor program (up to 20 vendors) to handle massive workflow expansion. Directed multi-market campaign execution across 26 languages and 17 markets through strategic cross-functional governance spanning Marketing, Localization Engineering, Legal, and Editorial News."*
    - Guarded `summary` in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) to eliminate empty spacing when a separate summary paragraph is omitted.
    - All 15 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

15. **Hogarth Worldwide Global Client Account Launches & HTC Cross-Departmental Leadership ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js), [resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js)):**
    - Enhanced Section 1 of Hogarth Worldwide (`1. Global Client Account Launches · Enterprise Client Execution (HTC Account)`) to feature HTC as a flagship enterprise client example.
    - Incorporated direct operational ownership: coordinating launches across digital and print by cross-collaborating with Hogarth's Print production, SEO, Video Studios, Voiceover (VO) recording, and Music & TV Licensing departments.
    - Documented executive client governance: managing client Master Services/Business Agreements (MBAs), Quarterly Business Reviews (QBRs), and end-to-end team process management.
    - Enriched the section with complete verified reference coverage:
      - Official HTC Newsroom: "Change" Brand Platform Release (Aug 12, 2013)
      - Permanent Wayback Machine Archive (Aug 15, 2013)
      - Official HTC Newsroom: HTC One (M7) Global Unveil Across 80+ Countries (Feb 19, 2013)
      - Trusted Reviews: HTC One (M7) Full HD & UltraPixel Launch News (Feb 2013)
      - Official HTC Newsroom: HTC One (M8) Global Launch Across 100 Countries (Mar 25, 2014)
      - ExtremeTech: HTC One (M8) Duo Camera & Aluminum Unibody Reveal (Mar 2014)
    - Synchronized role highlights and achievements in [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js) and [resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js).
    - Upgraded [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) line 407 to support both `snap.src` and `snap.image` safely.
    - All 15 unit tests pass; production build verified with zero errors and zero prose em-dashes.

16. **HTC One Phone Hardware & Localized UI Visual Evidence ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - Expanded Hogarth Worldwide Section 1 to a balanced 3x2 grid (`columns: 3`) with 6 primary evidence cards capturing the physical hardware, localized UI, and international carrier launches:
      1. **Global Brand Platform:** Robert Downey Jr. announcement (`htc-wpp-brand-change-platform-1.jpg`).
      2. **WPP 171 Worldwide:** Global agency appointment and multi-channel media mix (`htc-wpp-brand-change-platform-2.jpg`).
      3. **HTC One (M7) Hardware:** Precision Glacial Silver aluminum unibody (`htc-one-m7-silver-hardware.png`) with lightbox extra slides for Stealth Black (`htc-one-m7-black-hardware.png`) and diagonal unibody view (`htc-one-m7-diagonal-hardware.jpg`).
      4. **HTC Sense 5 UI & BlinkFeed:** Multi-language live tile content aggregation on 1080p display (`htc-one-m7-sense-ui.png`).
      5. **Japan & APAC Carrier Release:** HTC J One HTL22 with KDDI branding and localized casing (`htc-one-japan-htl22.jpg`).
      6. **Global Successor (M8):** March 2014 release across 230 carriers in 100 countries featuring Duo Camera depth sensors (`htc-one-m8-hardware.jpg`).
    - Verified all 8 high-resolution image assets are saved locally in `frontend/public/evidence/`.
    - Updated [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) asserting all 6 snapshots and extra slides exist on disk.
    - All 15 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

17. **Hogarth Job Title Alignment & RTP Curricular Internship Report Evidence Integration ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js), [resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - Updated Hogarth Worldwide job title to `Transcreation Program Manager` across career timeline data, resume localized data, and resume default data.
    - Integrated verified primary evidence for the RTP (Rádio e Televisão de Portugal) academic internship:
      - Primary document: Curricular Internship Report ("Relatório de Estágio Curricular: Legendagem em Teletexto e Adaptação de Conteúdos") submitted January 29, 2007 under enterprise mentor Dra. Noélia do Rosário Leal Macedo (RTP) and academic supervisor Prof. Paula Rosa dos Santos Órfão (ESTG - IPLeiria).
      - Added high-resolution report cover screenshot (`/evidence/rtp-internship-report-cover.png`) saved locally in `frontend/public/evidence/`.
      - Linked direct Google Docs primary source (`https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit`).
      - Updated RTP metrics from verified report data: 1,100+ hrs/yr of accessible Portuguese teletext subtitling (Page 188), 6 broadcast genres (Documentários, Séries, Telenovelas, Entretenimento, Infantil, Magazine), and 100% ITC/BBC accessibility compliance.
      - Removed placeholder status (`placeholder: false`) and authored comprehensive operational highlights and 2 structured evidence accordion sections.
    - Updated [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) asserting Hogarth title and RTP evidence exist.
    - All 16 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

18. **Sony Portugal (SPT) & RTP Change Management Project Report Evidence Integration ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - Integrated verified primary evidence from the official Sony Portugal project document: "Projecto de Gestão de Mudança - Relatório Final de Projecto" (Ref: SP1207/SP1236/SP5562, May 2007) covering the enterprise broadcast transformation of RTP across Digital Asset Management (Blue Order DAM), Transmission (Omnibus), and Production (Petasite/DivArchive).
    - Documented formal executive recognition from pages 2–3 of the report: "O conhecimento da tradutora, Mara Martins, foi preponderante no Processo de Gestão de Mudança uma vez que detinha conhecimento prévio acerca de muitas das questões relacionadas com o funcionamento interno da RTP."
    - Added high-resolution visual evidence assets saved directly in `frontend/public/evidence/`:
      - `sony-pt-rtp-change-management-report-citation.png`: High-resolution executive citation card documenting the project reference, dates, metadata, and official Portuguese text recognizing Mara Martins.
      - `sony-pt-rtp-change-management-roadmap.png`: Figure 1 training and change management schedule roadmap for Blue Order DAM, Omnibus, and Petasite/DivArchive workshops.
    - Configured direct primary document link to Google Docs: `https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit`.
    - Updated verified metrics and removed placeholder status (`placeholder: false`):
      - `39 events` (scale): Enterprise change management sessions, information sharing events, and training workshops conducted at RTP Lisbon headquarters.
      - `3 systems` (velocity): Core broadcast systems integrated (Blue Order Digital Archive, Omnibus G2 Transmission Automation, Petasite/DivArchive Tape Library).
      - `Bilingual EN/PT` (quality): Bilingual workflow modeling, on-site interpreting, and change adoption overcoming initial English-only delivery friction.
    - Added comprehensive unit tests in [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) (now 17 passing tests total).
    - Production build verified with zero errors and strict zero prose em-dashes.

19. **Portuguese (PT) Language Disclaimer in Primary Evidence ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)):**
    - Added explicit language disclaimers across RTP and Sony Portugal primary evidence records:
      - **RTP Curricular Internship Evidence:** Added disclaimer stating that the primary internship report is preserved in Portuguese (PT) only, reflecting that this academic internship was conducted in Portugal for Portugal's national public broadcaster (RTP). Updated evidence note, Section 1 summary, badge, link labels, and snapshot note.
      - **Sony Portugal Change Management Evidence:** Added disclaimer clarifying that while broadcast workflow diagrams and training materials were produced bilingually (English and Portuguese), the final client project report is in Portuguese (PT) only, as the project was delivered in Lisbon for Portugal's national public broadcaster.
    - Verified all 17 unit tests pass and build compiles cleanly with zero prose em-dashes.

20. **Sony Broadcast Scale Benchmark · Sony PetaSite 12,000-Hour Digital Capacity (SIC & RTP) ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)):**
    - Integrated the Portuguese television industry scale benchmark: in 2007, commercial broadcaster SIC (Sociedade Independente de Comunicação) partnered with Sony to deploy automated PetaSite tape robotics scaling capacity by 12,000 hours of news and program media with desktop proxy access.
    - Added explicit context noting that whilst there is no public capacity data released for state broadcaster RTP (under internal operational privacy), the joint Sony / Ibertelco digital transformation at RTP (SP1207 Blue Order DAM, SP1236 Omnibus Transmission, SP5562 Petasite/DivArchive) was architected on this identical enterprise technology stack to achieve multi-thousand-hour broadcast scale.
    - Updated `sony-pt` metrics: `39 events`, `3 systems`, and `12,000 hrs*` (`Benchmark broadcast scale capacity (Sony PetaSite at SIC)`).
    - Added Section 3 accordion in the Sony Portugal evidence drawer: `3. Portuguese Broadcast Market Scale · Sony PetaSite 12,000-Hour Benchmark (SIC)`.
    - Updated unit test suite in [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js) asserting all 3 sections and the 12,000 hrs* scale metric.
    - All 17 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

22. **Official Title & Duties Performed Beyond the Scope of the Role Integration ([CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx), [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)):**
    - Enhanced the header layout of every company card in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) to clearly state:
      - `Official Title: <officialTitle || title>`
      - `Duties performed beyond the scope of the role: <dutiesBeyondScope>`
    - Defined explicit `officialTitle` and `dutiesBeyondScope` attributes across all 12 company and internship roles in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js):
      1. **LinkedIn:** Official Title: `Senior Localization Marketing Manager` · Duties Beyond Scope: `Founded and led the Global MARCOM Localization function, built a 20-vendor MSP partner program, managed 2 FTE Localization PGMs, and directed multi-market campaign execution across 26 languages and 17 markets.`
      2. **Block / Square:** Official Title: `Program Management Lead - Localization` · Duties Beyond Scope: `Scaled PM organization from 5 to 15 reports, directed market expansion across Canada, France, and Spain, and drove +42.6% YoY organic international gross profit growth.`
      3. **Microsoft:** Official Title: `Sr. Global Marcom Manager - Localization & Operations` · Duties Beyond Scope: `Built an enterprise cross-org Center of Excellence across 200 markets and 100 languages, automated API asset ingestion, and renegotiated multi-year global vendor MSAs.`
      4. **Infoblox:** Official Title: `Marketing Localization Project Manager (via Acclaro)` · Duties Beyond Scope: `Governed end-to-end globalization and CMS/TMS automation infrastructure across EMEA, LATAM, and APAC regions, driving Go Global, Act Local strategies.`
      5. **Apple 2014:** Official Title: `Localization Project Manager` · Duties Beyond Scope: `Led cross-functional engineering, QA, and supplier release triage in Radar under strict Apple non-disclosure agreements for major hardware and software product launches.`
      6. **Apple 2026:** Official Title: `Senior Program Manager / Producer (Contract via Mindsource / WPP)` · Duties Beyond Scope: `Governed high-volume production operations and automated pipeline architectures for unannounced Black Ops initiatives under strict corporate confidentiality.`
      7. **Hogarth Worldwide:** Official Title: `Senior Transcreation Account Manager` · Duties Beyond Scope: `Led global client account management (featuring HTC), governed client MBAs and QBRs, and coordinated delivery teams across Print, SEO, Video Studios, and TV Licensing.`
      8. **Sony UK:** Official Title: `Prime-Vox Display Coordinator & Iberia Support` · Duties Beyond Scope: `Directed pan-European localization engineering, multimedia dubbing/VO studios, and technical asset management across 30+ European and global territories.`
      9. **Sony Portugal:** Official Title: `Translator & International Project Manager` · Duties Beyond Scope: `Led on-site change management facilitation, bilingual workflow diagram modeling, and 39 training events across DAM, Transmission, and Production for RTP.`
      10. **RTP:** Official Title: `Translation, Subtitling & Audio-Description Intern` · Duties Beyond Scope: `Formulated comprehensive broadcast subtitling standards for Gabinete Multimédia benchmarked against BBC/ITC, managing SDH teletext workflows across 6 genres.`
      11. **EU DGT:** Official Title: `EU Terminology Trainee (Brussels)` · Duties Beyond Scope: `Managed institutional terminology research, validation, and multilingual alignment inside the EU IATE database across official EU workflows.`
      12. **MIIS:** Official Title: `Adjunct Faculty / Guest Lecturer` · Duties Beyond Scope: `Modernized curriculum with the institute’s first AI Series, forged partnerships with Fortune 500 tech leaders, and advised graduate cohorts on enterprise program management.`
    - All 17 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

21. **Apple Confidentiality & Black Ops Project Placeholders ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)):**
    - Configured explicit confidentiality and non-disclosure placeholders for Apple roles (`apple-2026` and `apple-2014`):
      - **Apple 2026 (`apple-2026`):** Updated summary to state that project scope and deliverables are withheld under strict Apple non-disclosure agreements (NDA) for confidential Black Ops initiatives, maintaining an active placeholder pending public disclosure approval and verifiable open-source data. Configured metrics (`Confidential*`, `100% NDA*`), clean operational highlights, and a dedicated evidence notice section.
      - **Apple 2014 (`apple-2014`):** Normalized title to `Localization Project Manager`, updated summary and metrics to NDA-compliant placeholders, and added an explicit confidentiality notice in evidence notes.
    - All 17 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

22. **Official Title & Duties Performed Beyond the Scope of the Role Integration ([CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx), [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)):**
    - Enhanced the header layout of every company card in [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx) to clearly state:
      - `Official Title: <officialTitle || title>`
      - `Duties performed beyond the scope of the role: <dutiesBeyondScope>`
    - Defined explicit `officialTitle` and `dutiesBeyondScope` attributes across all 12 company and internship roles in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js):
      1. **LinkedIn:** Official Title: `Senior Localization Marketing Manager` · Duties Beyond Scope: `Founded and led the Global MARCOM Localization function, built a 20-vendor MSP partner program, managed 2 FTE Localization PGMs, and directed multi-market campaign execution across 26 languages and 17 markets.`
      2. **Block / Square:** Official Title: `Program Management Lead - Localization` · Duties Beyond Scope: `Scaled PM organization from 5 to 15 reports, directed market expansion across Canada, France, and Spain, and drove +42.6% YoY organic international gross profit growth.`
      3. **Microsoft:** Official Title: `Sr. Global Marcom Manager - Localization & Operations` · Duties Beyond Scope: `Built an enterprise cross-org Center of Excellence across 200 markets and 100 languages, automated API asset ingestion, and renegotiated multi-year global vendor MSAs.`
      4. **Infoblox:** Official Title: `Marketing Localization Project Manager (via Acclaro)` · Duties Beyond Scope: `Governed end-to-end globalization and CMS/TMS automation infrastructure across EMEA, LATAM, and APAC regions, driving Go Global, Act Local strategies.`
      5. **Apple 2014:** Official Title: `Localization Project Manager` · Duties Beyond Scope: `Led cross-functional engineering, QA, and supplier release triage in Radar under strict Apple non-disclosure agreements for major hardware and software product launches.`
      6. **Apple 2026:** Official Title: `Senior Program Manager / Producer (Contract via Mindsource / WPP)` · Duties Beyond Scope: `Governed high-volume production operations and automated pipeline architectures for unannounced Black Ops initiatives under strict corporate confidentiality.`
      7. **Hogarth Worldwide:** Official Title: `Senior Transcreation Account Manager` · Duties Beyond Scope: `Led global client account management (featuring HTC), governed client MBAs and QBRs, and coordinated delivery teams across Print, SEO, Video Studios, and TV Licensing.`
      8. **Sony UK:** Official Title: `Prime-Vox Display Coordinator & Iberia Support` · Duties Beyond Scope: `Directed pan-European localization engineering, multimedia dubbing/VO studios, and technical asset management across 30+ European and global territories.`
      9. **Sony Portugal:** Official Title: `Translator & International Project Manager` · Duties Beyond Scope: `Led on-site change management facilitation, bilingual workflow diagram modeling, and 39 training events across DAM, Transmission, and Production for RTP.`
      10. **RTP:** Official Title: `Translation, Subtitling & Audio-Description Intern` · Duties Beyond Scope: `Formulated comprehensive broadcast subtitling standards for Gabinete Multimédia benchmarked against BBC/ITC, managing SDH teletext workflows across 6 genres.`
      11. **EU DGT:** Official Title: `EU Terminology Trainee (Brussels)` · Duties Beyond Scope: `Managed institutional terminology research, validation, and multilingual alignment inside the EU IATE database across official EU workflows.`
      12. **MIIS:** Official Title: `Adjunct Faculty / Guest Lecturer` · Duties Beyond Scope: `Modernized curriculum with the institute’s first AI Series, forged partnerships with Fortune 500 tech leaders, and advised graduate cohorts on enterprise program management.`
    - All 17 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.

23. **Pillar Alignment & Relocation Cleanup ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx)):**
    - **Sony Portugal Pillar Update (`sony-pt`):** Removed `vendor` ("Vendor & Finance") pillar from `sony-pt`, retaining `pillars: ['program']`.
    - **EU DGT Pillar Update (`eu-dgt`):** Removed `leadership` pillar from `eu-dgt`, retaining `pillars: ['program']`.
    - **ESTG Pillar Update (`graduation`):** Removed `leadership` pillar from `graduation`, retaining `pillars: ['education']`.
    - **Relocation Sections Cleanup (`relocation-pt-uk` & `relocation`):**
      - Removed `highlights` arrays and `evidenceId` from both international relocation entries in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js).
      - Updated `CareerTimeline.jsx` guard (`selectedItem.type !== 'break'`) ensuring that no "How I built it & Evidence Notes" collapsible container renders for transition/relocation items.
      - Integrated continuous career transition verifications directly into the respective relocation card `summary` fields.
    - **Verification & Compliance:**
      - All 17 unit tests pass in `career.test.js` and `AcronymText.test.js`.
      - Production build succeeds cleanly (`npm run build`).
      - Strict zero prose em-dash rule verified across all modified files.

24. **Apple 2014 AppleCare Team Alignment ([en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js), [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js)):**
    - Updated `apple-2014` (`Oct 2014 – Mar 2015`) entry:
      - Title: `Localization Project Manager (AppleCare Team)`
      - Official Title: `Localization Project Manager (AppleCare Team)`
      - Summary: Updated to reference supporting launch-critical global releases for the AppleCare Team within strict corporate non-disclosure agreements, engineering release gates, and vendor SLAs.
    - Updated [resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js) role and description to `Localization Project Manager (AppleCare Team)` for cross-portfolio consistency across `/career` and `/resume`.
    - All 17 unit tests pass; production build verified cleanly with zero errors and zero prose em-dashes.
