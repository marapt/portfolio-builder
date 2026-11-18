# Hogarth Worldwide (WPP Group) - Client Account Launches & HTC "Change" Brand Platform Execution

## Executive Summary
This document establishes the verified evidence integration for Mara Martins' tenure at **Hogarth Worldwide (London, UK, 2010–2014)**, specifically documenting her leadership of multi-market enterprise client accounts and the global launch of HTC's multi-million dollar **"Change"** brand platform (fronted by Robert Downey Jr.) developed by WPP Group agency 171 Worldwide.

---

## 1. Professional Scope & Verification

### Role & Promotion Timeline
- **Company:** Hogarth Worldwide (London, United Kingdom) · Part of WPP Group (now operating under WPP Production)
- **Period:** January 2010 – March 2014
- **Titles:** Transcreation Account Manager (Jan 2010 – Jan 2011) → Senior Transcreation Account Manager / Senior Project Manager (Jan 2011 – Mar 2014)
- **Promotion:** Promoted within 12 months to Senior Manager based on client portfolio growth, pitch success (including EU institutions), and multi-market production excellence.
- **Team Scope:** Led in-house transcreation delivery teams of up to 10 specialists covering key European markets (FR, BE, ES, PT, NL) and global markets.

---

## 2. Campaign Evidence: HTC "Change" Global Brand Platform (WPP Group)

### Background & Agency Partnership
In August 2013, HTC announced its most ambitious global brand platform to date, titled **"Change"** (featuring the strapline *"Here's to change"*), fronted by Hollywood actor and director Robert Downey Jr. in a two-year creative partnership.
- **WPP Group Mandate:** The creative direction and execution were developed by HTC's dedicated global agency **171 Worldwide (part of WPP Group)**.
- **Hogarth's Production Execution:** As WPP's global creative production arm, Hogarth Worldwide was responsible for setting up and executing the multi-channel transcreation and production adaptation across digital, online, print, and broadcast media.
- **Mara Martins' Direct Responsibility:** Built and led a dedicated execution team to manage the international brand and product delivery across digital and print formats. Cross-collaborated internally across Hogarth departments including Print production, SEO, Video Studios, voiceover (VO) recording, and Music & TV Licensing. Owned client commercial governance, Master Services/Business Agreements (MBAs), Quarterly Business Reviews (QBRs), and end-to-end team process management to successfully launch products worldwide.

### Verifiable Source Documentation
- **Official HTC Press Release: "Change" Brand Platform:** [htc.com/us/newsroom/2013-08-12/](https://www.htc.com/us/newsroom/2013-08-12/)
- **Wayback Machine Permanent Archive:** [web.archive.org/web/20130815042654/http://www.htc.com/us/newsroom/2013-08-12/](https://web.archive.org/web/20130815042654/http://www.htc.com/us/newsroom/2013-08-12/)
- **Official HTC Press Release: HTC One (M7) Global Unveil (Feb 19, 2013):** [htc.com/us/newsroom/2013-02-19/](https://www.htc.com/us/newsroom/2013-02-19/)
- **Trusted Reviews: HTC One (M7) Announcement:** [trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634](https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634)
- **Official HTC Press Release: HTC One (M8) Global Launch (Mar 25, 2014):** [htc.com/us/newsroom/2014-03-25/](https://www.htc.com/us/newsroom/2014-03-25/)
- **ExtremeTech: HTC One (M8) Duo Camera Reveal:** [extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody](https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody)
- **Local Evidence Assets:**
  - `frontend/public/evidence/htc-wpp-brand-change-platform-1.jpg`: Announcement header and campaign overview.
  - `frontend/public/evidence/htc-wpp-brand-change-platform-2.jpg`: Agency callout highlighting 171 Worldwide (WPP Group) and the media mix across digital, online, and print.

---

## 3. Implementation Across the Portfolio

### A. Career Timeline (`/career` - `frontend/src/data/career/en.js`)
- Transitioned `hogarth-uk` from placeholder draft (`placeholder: false`) to an active, verified role card.
- Rule-of-3 Quantitative Metrics:
  - **Scale:** `30+ mkts` · *Global markets & enterprise accounts delivered*
  - **Velocity:** `10+ team` · *In-house specialists & cross-functional delivery team*
  - **Quality:** `Digital, Print, ATL` · *Multi-channel brand campaigns (incl. HTC Global Change)*
- Structured Evidence Section:
  - Added Section 1: `Global Client Account Launches · Enterprise Client Execution (HTC Account)`.
  - Added direct links to the official HTC press releases (Change platform, M7, M8), Trusted Reviews, ExtremeTech, and the Wayback Machine archive.
  - Added dual snapshot cards rendering high-resolution captures of the campaign announcement.

### B. Resume Data (`frontend/src/data/resume/en.js` & `resumeData.js`)
- Updated Role 8 (`Senior Transcreation Account Manager`):
  - Description: `Managed multiple enterprise client accounts and in-house delivery teams (up to 10 specialists) for global brand and flagship product launches across digital, online, and print.`
  - Achievements: Included explicit bullet points covering cross-departmental coordination (Print, SEO, Video Studios, VO, Music & TV Licensing), client MBAs, QBRs, and WPP Group / HTC brand & product launches.

---

## 4. Verification & Testing
- Automated test added in `frontend/src/data/career/career.test.js`:
  - Asserts `hogarth-uk` is non-placeholder.
  - Asserts all 3 metrics and evidence snapshots exist on disk and match.
- All 15 unit tests pass (`15 passed, 15 total`).
- Em-dash compliance: Zero prose em-dashes throughout.
