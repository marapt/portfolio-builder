# 🎨 Portfolio: Professional Showcase Roadmap

## 🌐 Branding & Identity
- [ ] **SEO Hardening:** Remove `noindex, nofollow` from the public portfolio once the rebrand is complete.
- [ ] **Branding Sync:** Ensure all project descriptions match the new "Agentic" nomenclature.
- [ ] **Canonical Tags:** Verify that the primary domain is the only one indexed by Google.

## 📁 Project Case Studies
- [ ] **MIIS Training Program Consistency Review:** Revisit `/project/localization-training-program` (`localization-training-program` in `frontend/src/data/projectsData.js`) so the story and metrics align with `/career` (note: current project page focuses on the AI Speaker Series reference and needs review later).
- [ ] **MIIS Executive Deep-Dive Deck:** Review the `Mara Martins` Google Slides deck (`1qmiDN6Fvu-KuIWHfyv86-J6smzbcjCZvYjf1c4tKLUk`) later and decide whether/how to expose a clean read-only deeper-dive hyperlink on MIIS.
- [x] **MIIS Archive Snapshots:** Save full-page PNG/PDF captures of the MIIS Visiting Professor profile and Middlebury Institutional Research Tableau page into `frontend/public/evidence/` (`miis-faculty-profile.png`, `miis-institutional-data.png`) so proof persists if university URLs are retired.
- [x] **Block Archive Snapshots:** Saved full-page/cropped PNG captures (`block-rebrand-announcement.png`, `block-square-france.png`, `block-square-spain.png`, `block-square-canada.png`, `block-investor-day-slide26.png`, `block-investor-day-slide27.png`, `block-investor-day-slide31.png`, `block-investor-day-slide32.png`, `block-q3-2022-expanding-globally.png`, `block-q3-2022-intl-gpv.png`, `block-q3-2022-intl-reconciliation.png`) into `frontend/public/evidence/`.
- [ ] **Agentic Lab Feature:** Create a high-quality video/GIF showcase of the Localization Swarm in action.
- [ ] **Technical Deep-Dive:** Write a 500-word case study on the "Universal Parser" architecture.
- [ ] **Testimonial Placeholder:** Add slots for early enterprise beta feedback.

## 📋 Career Records & Proof Readiness
- [ ] **[P2] Post-Launch Career Development Plan:** Create a formal Career Development Plan detailing target competencies, industry impact goals, and executive milestones to enrich the Future Horizon (2027–2029+) section on `/career`.
- [ ] **[P2] Review & Act on Employment Verification Guide:** Review `docs/employment_verification_guide.md` and submit/download VOEs, staffing-agency EOR letters (2014–2015 Apple vendor, Acclaro, MindSource/WPP), The Work Number / EmpInfo reports, and Portugal (`Segurança Social Direta`), UK (`HMRC` paper employment history >5 yrs), and US (`SSA Form SSA-7050-F4` / IRS / CA EDD) fallback records across all 12 organizations.
- [x] **Official LinkedIn Stories Sources (closed, current sources accepted):** Mara approved keeping the current LinkedIn Pulse, Pressroom and press sources. Live + Wayback pairs were reduced to Wayback only. Optional later: look for extra official `blog.linkedin.com` / `news.linkedin.com` posts.
- [ ] **[P4] (Optional) Evidence Card Lightbox:** Add an in-page lightbox for single-image evidence cards (for example Section 3 LinkedIn Stories captures) so visitors can read screenshots without opening a new tab.
- [ ] **EU DGT (`eu-dgt`) Photo Consent & Executive Endorsement:** Confirm public portfolio consent with Carla Gaspar (CEO, SMARTIDIOM Group) for the preserved 2006 Brussels throwback photo and Apr 3, 2021 LinkedIn comment (`eu-dgt-brussels-visitor-photo.png`, `eu-dgt-carla-linkedin-comment.png`), and consider requesting a formal LinkedIn Recommendation alongside EU DGT certificate / ESTG Year 5 internship records.
- [ ] **[P3] Pending Course Certificates (Excluded Until Verified Proof Is Added):** Locate and add completion certificates before displaying these three courses on `/resume` or `/career`: (1) *Stanford Continuing Studies: Women's Leadership Workshop (Sep 2021)* (check Stanford email/portal for PDF certificate), (2) *Dale Carnegie Training: High Impact Presentations (2015)* (locate physical/scanned certificate), and (3) *Coursera / DeepLearning.AI: AI Python for Beginners (2025)* (complete and download Coursera verification URL/PDF).

## 🛠️ Infrastructure
- [ ] **[P3/P4] Failed External Requests Audit:** Before launch, open `/career` and other pages in the browser and list every failed network request (a `net::ERR_NAME_NOT_RESOLVED` error appeared once, source unknown; candidates: Chatbase, PostHog, Google Tag Manager, fonts, Unsplash images, `maramartins.com` logos, videvo.net video). Fix or remove anything that silently fails.
- [ ] **Vercel Cleanup:** Remove deprecated deployments and unused subdomains.
- [ ] **Analytics:** Integrate [Google Analytics] or [Vercel Analytics] to track recruiter visits.
