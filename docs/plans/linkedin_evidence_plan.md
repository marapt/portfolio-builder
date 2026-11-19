# Implementation Plan: LinkedIn Timeline Role & Evidence Architecture (`Mar 2020 – Oct 2021`)

> **Mode:** Planning Only (`/plan`)  -  No application files have been modified, and nothing will be pushed or deployed live.  
> **Target Files (on approval):**
> - `/Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js` (`linkedin` entry, `linkedinGlossary`, `linkedinEvidenceSections`)
> - `/Users/user/Documents/github/portfolio-builder/frontend/src/components/AcronymText.jsx` (optional MARCOM / localization acronyms)
> - `/Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js` (regression checks)
> - `/Users/user/Documents/github/portfolio-builder/frontend/public/evidence/linkedin-*.png` (archived visual proof captures)

---

## 1. Strategic Positioning & Narrative Arc

Your tenure at **LinkedIn (`Mar 2020 – Oct 2021`)** spans three high-visibility waves during the height of COVID-19 remote acceleration:

1. **Scaled Localization Program Management & Outsourced Vendor Model (`MARCOM`):** Co-led global readiness with **Marketing, Localization, Editorial/News, Product, and Engineering**, scaling an **outsourced MARCOM Localization Vendor ecosystem** and automated vendor routing across **26 languages** and **17 priority internationalization markets**  -  cutting turnaround times by **30%** while maintaining launch parity across multiple time zones.
2. **Global Rollout of LinkedIn Stories (`Feb – Sep 2020`) & COVID-Era Community Connection (`LinkedIn Learning` & `LinkedIn News`):** Supported rapid multi-wave international market rollouts  -  **Brazil (`Apr 14`) -> Netherlands (`May 12/13`, 1st in Europe) -> UAE (`Jun 1`, 1st in MENA) -> Australia (`Jun 21`) & France (`Jun 25`) -> U.S., Canada & Global Redesign (`Sep 24, 2020`)**  -  turning LinkedIn Stories into a real-time professional communication bridge during pandemic lockdowns alongside **LinkedIn Learning** (>1M weekly hours watched, >2x YoY).
3. **Product Learnings, Sunsetting & Pivot to the Creator Ecosystem (`Aug – Sep 2021`) + Macro Business ROI:** One month before your October 2021 departure, LinkedIn sunsetted Stories (`Sep 30, 2021`) specifically to apply its learnings toward **Creator Mode**, persistent short-form native video, and creator monetization tools. Meanwhile, during your in-tenure fiscal quarters (`FY21 Q1 – FY22 Q1`), **LinkedIn surpassed $10B in annual revenue** for the first time (`+27% YoY` in FY21) and **LinkedIn Marketing Solutions surged +97% YoY** in Q4 FY21 (`$1B+` single-quarter ad revenue milestone).

---

## 2. Verified Role Facts Reconciled Across Drive Records & User Notes

| Field | Source Verified | Exact Evidence / Value |
| :--- | :--- | :--- |
| **Company & Period** | Repo `en.js`, `resume/en.js`, Drive CVs (`2023–2026`) | `LinkedIn`, `Mar 2020 – Oct 2021`, `Sunnyvale, CA, USA` (`/company-logos/linkedin.svg`) |
| **Title Variants Found** | `resume/en.js` vs. Drive CVs vs. Prompt | • Website `resume/en.js`: `Senior Marketing Manager - Localization`<br>• Drive CVs (`cv_02052026.md`, `latest_resume.md`, `cv_103025.md`): `Senior Localization Manager - LinkedIn Marketing`<br>• Prompt: *Lead for Localization Program Management Team within MARCOM* |
| **Language & Market Scope** | `cv_02052026.md`, `l6_handover.md`, `star_examples.md`, `resume/en.js` | **26 languages** (`20+` in Feb 2026 CV) for Marketing & Product UI; **17 internationalization markets** for COVID-era initiatives (*Stories* & *LinkedIn Learning*) |
| **Vendor & Operating Model** | Prompt, `star_examples.md`, `cv_103025.md`, `latest_resume.md` | Expanded external **MARCOM Localization Vendors** (piloted outsourced vs. in-house scaling model); introduced vendor quality benchmarking, performance scorecards, and contract optimization |
| **Velocity Improvement** | `cv_103025.md` | Streamlined workflows & vendor routing, **reducing turnaround times by 30%** |
| **Engineering & Cross-Functional** | Prompt, `cv_02052026.md`, `resume_alt.md`, `qa_prep.md` | Partnered with **Marketing, Localization, Engineering, and LinkedIn Editorial Newsrooms** on i18n best practices, pseudo-localization, CI/CD workflow integration, TM/terminology governance, and Executive OKR/KPI dashboards |

---

## 3. Verified External Evidence Inventory

### A. Market Launch Chronology & Press Coverage (`Feb – Sep 2020`)

| Wave / Market | Date | Source / Outlet | Exact Verified URL & Live HTTP Status | Wayback Machine Archive Status | Key Verified Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pre-Launch Test Announcement** | `Feb 26, 2020` | **LinkedIn Pulse** (Pete Davies) | `https://www.linkedin.com/pulse/testing-new-conversational-format-linkedin-stories-pete-davies/` (`200`) | Archived `2020-02-27`: `https://web.archive.org/web/20200227171633/https://www.linkedin.com/pulse/testing-new-conversational-format-linkedin-stories-pete-davies/` | Confirms internal Stories test amid `25% YoY` increase in feed engagement |
| **Brazil (1st Market Globally)** | `Apr 14, 2020` | **Canaltech** (Rafael Arbulu) | `https://canaltech.com.br/redes-sociais/linkedin-stories-brasil-e-o-primeiro-pais-a-receber-novo-recurso-163313/` (`200`) | Capture locally via headless browser | Quotes LinkedIn LATAM editor-in-chief **Rafael Kato**: Brazil chosen as 1st launch market (`>40M` users, `#3` video producer on LinkedIn) |
| **Multi-Market Expansion Roundup** | `May 1, 2020` *(upd. `5/8` & `6/1`)* | **Social Media Today** (Andrew Hutchinson) | `https://www.socialmediatoday.com/news/linkedin-stories-is-now-available-to-users-in-brazil-the-netherlands-and-t/577225/` (`200`) | Capture locally + link Help archive | Covers Brazil, Netherlands (`5/8` sighting), and UAE (`6/1`), mobile-only 20s video / 24h specs, and viewer privacy settings |
| **Netherlands (1st European Market)** | `May 12/13, 2020` | **LinkedIn Pulse** (Pieter Cranenbroek, Sr. Editor LinkedIn News) | `https://www.linkedin.com/pulse/linkedin-stories-work-beyond-pieter-cranenbroek/` (`200`) | None in CDX (local PDF/PNG capture critical) | Official announcement: *"Netherlands will be the first country in Europe to test LinkedIn Stories"*; notes 65+ global editors (`NOS`, `Daily Rundown`) |
| **Netherlands Press Corroboration** | `May 13, 2020` & `Jun 29, 2020` | **Frankwatching** (Sanne Bekkema) & **Emerce** (Kim Platenkamp) | `https://www.frankwatching.com/archive/2020/05/13/linkedin-stories-nederland/` (`200`)<br>`https://www.emerce.nl/achtergrond/de-nieuwste-features-van-linkedin-hoe-gebruik-je-ze` (`200`) | Capture locally | Confirms `May 13` Dutch rollout & quotes Cranenbroek; Emerce cites `4.7M` Dutch profiles (`0.7M` daily active, `+26%` vs 2019) |
| **UAE (1st MENA Market)** | `Jun 1, 2020` & `Jun 7, 2020` | **The National News** (Ashleigh Stewart) & **Khaleej Times** | `https://www.thenationalnews.com/arts/linkedin-stories-uae-among-the-first-to-trial-the-new-feature-on-social-network-platform-1.1027464` (`200`)<br>`https://www.khaleejtimes.com/business/tech/linkedin-launches-new-offering-for-uae-members` (`304` clean load) | Capture locally | Confirms **official UAE launch date is June 1, 2020** (clarifying SMT `577225`'s original May 1 timestamp); quotes **Lynn Chouman** (LinkedIn News, `4M` UAE community, `55%` more conversations, `40%` reading news more often) |
| **Australia & France Rollouts** | `Jun 21` & `Jun 25, 2020` | **Social Media Today** (Andrew Hutchinson) | `https://www.socialmediatoday.com/news/linkedin-expands-roll-out-of-linkedin-stories-to-australia/580224/` (`200`) | Capture locally | Australia launch with localized `"G'day"` stickers + `UPDATE (6/25)` confirming **France** rollout |
| **Global Rollout & Platform Redesign** | `Sep 24, 2020` | **LinkedIn Pressroom**, **Ryan Roslansky (CEO)** & **SMT** | • `https://news.linkedin.com/2020/september/new-design-and-experiences-help-members-build-meaningful-relatio` (`200`)<br>• `https://www.linkedin.com/blog/member/product/a-new-look-for-linkedin-from-the-inside-out` (`200`)<br>• `https://www.socialmediatoday.com/news/linkedin-launches-updated-look-makes-linkedin-stories-available-to-all-use/585722/` (`200`) | • Pressroom archived `2020-09-29` (`https://web.archive.org/web/20200929140640/https://news.linkedin.com/2020/september/new-design-and-experiences-help-members-build-meaningful-relatio`)<br>• CEO post archived `2020-09-24`<br>• Legacy `share-your-professional-story` archived `2020-09-28` (`20200928024729`)<br>• Help `answer/119760` (`404` live) archived `2021-01-20` | Global US/Canada + worldwide Stories launch alongside LinkedIn's 5-year visual redesign (`>700M` professionals, `>1M hrs/wk` LinkedIn Learning, `25%` YoY messages growth) |
| **United Kingdom (Wave 6)** | `Oct 20, 2020` | **LinkedIn Pulse** (Rachel Tombs) | `https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/` | Local snapshot (`linkedin-stories-uk.png`) + Wayback query | Corroborates the official United Kingdom rollout of LinkedIn Stories following earlier European and APAC waves |

### B. Product Learnings & Creator Pivot (`Aug 31 – Sep 30, 2021`)

| Source | Date | Exact Verified URL | Wayback Machine Status | Verified Learning & Pivot Reasoning |
| :--- | :--- | :--- | :--- | :--- |
| **Liz Li** (Sr. Director of Product, LinkedIn) | `Aug 31, 2021` | `https://www.linkedin.com/pulse/whats-next-linkedin-stories-video-liz-li/` (`200`) | Archived `2021-08-31`: `https://web.archive.org/web/20210831181219/https://www.linkedin.com/pulse/whats-next-linkedin-stories-video-liz-li` | **Core Product Learning:** LinkedIn originally assumed 24-hour ephemerality would lower barriers to posting informal videos. Member feedback showed the opposite: **(1)** users wanted **lasting videos attached to their permanent profiles** to showcase expertise & personality, and **(2)** creators wanted **richer mixed-media creative tools** beyond Stickers/Question prompts  -  driving the Sept 30, 2021 sunset to evolve Stories into a **"reimagined video experience"** & Creator ecosystem |
| **LinkedIn for Marketing** | `Aug 31, 2021` | `https://www.linkedin.com/pulse/update-marketing-linkedin-stories-whats-next-/` (`200`) | Archived `2021-08-31`: `https://web.archive.org/web/20210831192410/https://www.linkedin.com/pulse/update-marketing-linkedin-stories-whats-next-` | Confirms **September 30, 2021** sunset date for Pages & Stories Ads, transitioning advertiser budgets directly into Feed image/video formats while developing an interactive short-form Creator video format |
| **TechCrunch** (Amanda Silberling) | `Aug 31, 2021` | `https://techcrunch.com/2021/08/31/linkedin-is-scrapping-its-stories-feature-to-work-on-short-form-video/` (`200`) | Capture locally | External press corroboration of Sept 30 retirement & Creator video pivot |
| **HyperClapper** (Retrospective) | `Nov 2026` | `https://www.hyperclapper.com/blog-posts/linkedin-stories-what-happened-and-what-replaced-them` (`200`) | Capture locally | Documents what replaced Stories: **Native Short-Form Video**, **LinkedIn Live**, **Creator Mode** (Follow CTA, newsletters, topic hashtags, Featured section), **Collaborative Articles**, and **Event Posts** |

### C. Microsoft Investor Relations & Earnings Call ROI Across Tenure (`FY21 Q1 – FY22 Q1`)

All 5 official Microsoft IR press releases fall squarely inside your `Mar 2020 – Oct 2021` tenure and have verified **Wayback Machine archives**:

| Microsoft Quarter (Period Ended) | Release Date | Verified Microsoft IR Headline Metrics (`LinkedIn`) | Verified CEO / CFO Earnings Call Highlights (`Satya Nadella` / `Amy Hood`) |
| :--- | :--- | :--- | :--- |
| **FY21 Q1** *(Sep 30, 2020  -  Stories Global Launch)* | `Oct 27, 2020` | **LinkedIn revenue `+16%` YoY** (`+16%` CC)<br>*(IR URL + Wayback `2020-10-27`)* | **Satya Nadella** directly cited **Stories**: *"We launched our most significant redesign with a streamlined search and messaging experience as well as new ways for connecting and sharing with Stories"* (`722M+` members, Marketing Solutions `+40%` YoY, Learning `>1M hrs/wk`, `>2x` YoY) |
| **FY21 Q2** *(Dec 31, 2020)* | `Jan 26, 2021` | **LinkedIn revenue `+23%` YoY** (`+22%` CC)<br>*(IR URL + Wayback `2021-01-26`)* | **Sessions `+30%` YoY**, **Conversations `+48%`**, **Marketing Solutions `+53%` YoY** (Amy Hood) / `>1/3` of total LinkedIn revenue (`~740M` members, Learning hours `2x` YoY) |
| **FY21 Q3** *(Mar 31, 2021  -  Creator Mode Launch)* | `Apr 27, 2021` | **LinkedIn revenue `+25%` YoY** (`+23%` CC)<br>*(IR URL + Wayback `2021-04-27`)* | **Hours on LinkedIn `+80%` YoY**, Conversations `+43%`, Content share `+29%`; **Marketing Solutions `+64%` YoY** (`>$3B` LTM revenue, `~3x` B2B ad category); Nadella spotlights **Creator Mode** & Learning instructor monetization |
| **FY21 Q4** *(Jun 30, 2021  -  Annual Milestone)* | `Jul 27, 2021` | **LinkedIn revenue `+46%` YoY** (`+42%` CC; `+$928M`) · **Marketing Solutions `+97%` YoY** (`+91%` CC)<br>*(IR URL + Wayback `2021-07-27`)* | **LinkedIn surpassed `$10B` annual revenue for the first time (`+27%` FY21)**; Marketing Solutions surpassed **$1B quarterly ad revenue** for the first time (`+97%` YoY, `3x` category); Sessions `+30%` YoY (`774M+` members) |
| **FY22 Q1** *(Sep 30, 2021  -  Stories Sunset / Departure Month)* | `Oct 26, 2021` | **LinkedIn revenue `+42%` YoY** (`+39%` CC) · **Marketing Solutions `+61%` YoY** (`+59%` CC)<br>*(IR URL + Wayback `2021-10-26`)* | Nearly **800M members**, confirmed hires `+160%+` YoY, `>15,000` enterprise LinkedIn Learning customers, expanding **Creator Economy** live/audience tools (`+61%` YoY advertising revenue) |

### D. LinkedIn Profile & Tenure Activity Audit (`Mar 2020 – Oct 2021`)

From live audit of `https://www.linkedin.com/in/maramartinspt` (`Posts` filter back to Nov 2020, Notifications/Mentions, Content Search, and Recommendations):
- **Exact Start Date & `#LGE` / `#LGEteam` Proof (`Jun 22, 2021`  -  170 reactions, 13 comments):**
  - `https://www.linkedin.com/feed/update/urn:li:share:6813172964327088128/`  -  Confirms exact start date (**March 9, 2020**) and pandemic remote tenure: *"I joined LinkedIn on March 9th 2020 so I never made it to the office... #Thankyou #LGE and #LinkedIn..."*
- **Colleague & Localization Network Shout-Out (`Apr 2, 2021`  -  38 reactions, 11 comments):**
  - `https://www.linkedin.com/feed/update/urn:li:share:6783835458033061888/`  -  International Women's Day post tagging `#LGEteam` and 39 women across localization/tech.
- **LinkedIn `#superlearning` Recognition Badge (`Feb 2, 2021`  -  23 reactions, 2 comments):**
  - `https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/`  -  *"TOP 12% OF LEARNERS at LinkedIn | My company LinkedIn recognizes me as a Super Learner (CY 2020)"* + shout-out to L&D leader Kevin Delaney.
- **Additional In-Tenure Activity:**
  - Sharing 10 LinkedIn Premium licences for laid-off women (`Jan 23, 2021`: `https://www.linkedin.com/posts/maramartinspt_women-share-6758871802858102784-rSRK/`).
  - `#Microsoft` & `#Linkedin #Give` 50% donation match post (`Feb 16, 2021`: `https://www.linkedin.com/feed/update/urn:li:share:6767514702907080704/`).
  - **LinkedIn Learning & Stanford Training During Tenure:** Completed `Stanford Continuing Studies` (*Conversational Intelligence* Feb 2021; *Leadership Skills for Women in the Workplace* Sep 2021) + LinkedIn Learning (*Be the Manager People Won't Leave*, *Inclusive Mindset*, *Unconscious Bias*, *Overcoming Imposter Syndrome*).
- **Kudos, Mentions & Recommendations Status:**
  - **Kudos / `Stories` Public Posts:** No `#Kudos` cards or 2020–2021 public feed posts explicitly naming `LinkedIn Stories` or `MARCOM` appear in LinkedIn's feed/search index (`recent-activity` back to Nov 2020; content search covers ~2 years).
  - **Pending Recommendations (Unfulfilled Requests Sent Sep 13–14, 2021):** Requests remain open on LinkedIn from 5 colleagues you worked with during your tenure (**Jeff Solanas** [direct manager], **Philip van Veen** [direct report], **Elena Voellmer**, **Walter Dias**, and **Stephanie Hurst** [internal client])  -  none were published, while `Vasco Brito` (`Aug 2020`) was from an earlier non-LinkedIn connection. *(Great opportunity to re-nudge 1–2 of them if you want live colleague endorsements on LinkedIn!)*

---

## 4. Proposed UI & Data Updates (`frontend/src/data/career/en.js`)

Following the exact architecture established in **MIIS** (`executionSummary` + live/archive links) and **Block** (`metricsFootnoteItems` + 4 collapsible `evidence.sections` + attribution honesty + local `/evidence/` PNG snapshots):

1. **Header, Summary & `executionSummary` (`Strategy & Architecture`, `Outsourced Vendor Scaling`, `Stories -> Creator Evolution & ROI`):**
   - Highlight co-leading Localization Program Management within **MARCOM** across **Marketing, Localization, Editorial News, Product, and Engineering**.
   - Emphasize building/expanding the **MARCOM Localization Vendor outsourced model**, i18n/CI-CD release readiness, **26 languages**, and **17 internationalization markets** during COVID-19.
   - Include a dedicated point explaining **why Stories was sunset (`Sep 30, 2021`) 1 month prior to departure**: not as an endpoint, but as the product validation bridge proving professionals wanted persistent video + richer creator tooling (`Creator Mode` & Creator Economy), while serving as a vital COVID community channel that coincided with record Marketing Solutions growth.
2. **Rule-of-3 Impact Snapshot Cards (`scale`, `velocity`, `quality`) + Expandable `metricsFootnoteItems`:**
   - **Card 1 (`scale`  -  Global MARCOM Scope):** e.g., `26 Languages · 17 Mkts` *(or include exact PGM team & vendor counts once confirmed in Open Questions below)*.
   - **Card 2 (`velocity`  -  Outsourced Model Velocity):** `-30% Turnaround Time` *(verified from Drive CV `cv_103025.md`: streamlined workflows & vendor routing, supporting the 5-wave Stories & LinkedIn Learning launches)*.
   - **Card 3 (`quality`  -  Business ROI & Growth*):** `+97% Marketing Solutions*` *(Peak Q4 FY21 YoY Growth · `$10B+` Annual LinkedIn Revenue Milestone)* **OR** `QA / SLA Quality %` if you prefer an internal quality metric on Card 3 with earnings ROI in the footnote & Section 4.
   - Expandable `metricsFootnoteItems`: transparently distinguish **Direct Localization Execution Metrics** (`26 languages`, `17 markets`, `-30% turnaround`, outsourced MARCOM vendor model) from **Company/Segment Microsoft IR Results** (`FY21 Q1–FY22 Q1`).
3. **4 Expandable Proof Sections (`evidence.sections`) + Local Snapshots (`frontend/public/evidence/linkedin-*.png`):**
   - **Section 1  -  Global Rollout Waves (`Feb–Sep 2020`)**: Timeline & curated snapshots of **Brazil (Canaltech)**, **Netherlands (Pieter Cranenbroek / Frankwatching / Emerce)**, **UAE (The National News / Khaleej Times)**, **Australia/France (`SMT 580224`)**, **Global Redesign (`news.linkedin.com` / Roslansky / `SMT 585722`)**, plus Wayback archive for retired Help `answer/119760`.
   - **Section 2  -  COVID-19 Community & Learning Strategy**: *LinkedIn Stories*, *LinkedIn News*, and *LinkedIn Learning* (`>1M weekly hours`, `17 markets`) keeping global members connected during lockdowns.
   - **Section 3  -  Creator Pivot & Product Learnings (`Aug–Sep 2021`)**: Liz Li (`What's Next for LinkedIn Stories and Video`), LinkedIn for Marketing sunset guide, TechCrunch, & HyperClapper explaining **what LinkedIn learned** (permanence over ephemerality; richer creative tools) and **what replaced Stories** (`Creator Mode`, native video, LinkedIn Live).
   - **Section 4  -  Microsoft Earnings Call & IR ROI (`FY21 Q1 – FY22 Q1`)**: 5-quarter `reconciliation` grid (`Q1 FY21` -> `Q2` -> `Q3` -> `Q4 ($10B+ annual)` -> `Q1 FY22`) with direct links & Wayback archives for all 5 official Microsoft IR releases + Satya Nadella earnings call transcript citations.
4. **Glossary / Acronyms (`AcronymText.jsx` & `linkedinGlossary`):**
   - Add `MARCOM`, `OKR` / `OKRs`, `i18n`, `LSP`, `TMS`, `CMS`, `MT` to `ACRONYM_DEFINITIONS` in `AcronymText.jsx` alongside `linkedinGlossary` (`Marketing Solutions`, `Constant Currency`, `Creator Mode`, `LinkedIn Fiscal Quarters FY21–FY22`).
5. **Verification Plan (after implementation):**
   - Capture/optimize clean PNG snapshots of the key press, Pulse, and Microsoft IR pages into `/Users/user/Documents/github/portfolio-builder/frontend/public/evidence/linkedin-*.png`.
   - Update `career.test.js` with full assertions for `linkedin` metrics, sections, asset files, and Wayback/live links.
   - Run `CI=true npm test` (`career.test.js` & `AcronymText.test.js`) and `npm run build` (`craco build`), then visually inspect `/career` on `localhost:3000` (desktop + mobile) via browser subagent  -  **keep everything committed locally only, no live deployment**.

---

## 5. Open Questions Needed Before Editing Code

Please confirm your preferences on these 4 items before I begin building:

1. **Official Card Title:** Across your records we have:
   - `Senior Localization Program Manager  -  MARCOM` (or `Lead, Localization Program Management (MARCOM)`) matching your prompt context
   - `Senior Localization Manager - LinkedIn Marketing` (your `2025–2026` Drive CVs)
   - `Senior Marketing Manager - Localization` (currently in website `resume/en.js`)
   Which title should display on the LinkedIn timeline card (and should we keep `resume/en.js` synced too)?
2. **Exact Team & Outsourced Vendor Numbers (do you have exact headcount/vendor counts you'd like shown?):**
   - How many direct reports / Localization PMs did you manage/grow at LinkedIn MARCOM (e.g., `N → M PMs` across time zones)?
   - How many external MARCOM Localization Vendors did you onboard / expand under the Outsourced Model (e.g., `X → Y vendors`)?
   - Do you have an internal quality SLA benchmark percentage (e.g., `95%+ QA accuracy`) or would you prefer **Card 3 (`quality`)** to showcase the verified **Microsoft Earnings Peak (`+97% YoY Marketing Solutions · $10B+ FY21`)** while keeping Localization Quality/Governance in the highlights & Section 4?
3. **Rule-of-3 Card 1 (`scale`) Focus:** Should Card 1 read **`26 Languages · 17 Markets`** (or include the PM team / expanded vendor counts once confirmed)?
4. **LinkedIn Recommendations (`linkedin_recs.md`):** We saw a Drive doc called *LinkedIn recommendations* (`Mariana B.`, `John R.`, `Samantha L.`, `Tom W.`, `Sarah M.`, `David H.`)  -  do you know if those are generic templates or real peer quotes? (I am excluding them unless you confirm they are real!)
