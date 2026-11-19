# Implementation Plan: Audit & Surface Interdisciplinary ESTG Coursework

## Goal Description
Verify all subjects listed on your official **ESTG  -  Polytechnic Institute of Leiria** 5-year academic transcript (`Mara Martins ESTG Degree certificates.docx`, ID `1UVqB7epqcwLu_4TjSobLelVLWLj0LcTt`), determine accurately whether **Program Management (PGM)**, **Marketing**, **Product**, **Engineering**, **Law**, or **Leadership** courses appear, and update ESTG's `highlights` in [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L417-L423) so broader leadership, legal, economic, and technical foundations appear alongside translation and interpreting.

---

## Transcript Audit Findings (59 Entries Across Years 1–5)

> [!IMPORTANT]
> **No `PGM` / `Marketing` / `Product` / `Engineering` course exists in the ESTG transcript:** After auditing all **59** transcript rows across **Years 1–5** of `Mara Martins ESTG Degree certificates.docx` (Bachelor **Nov 22, 2005** + Licentiate **Oct 23, 2007**), there is **no** subject titled *Program Management (PGM)*, *Project Management*, *Marketing*, *Product Management*, or *Engineering*. To stay 100% evidence-aligned, **PGM** should **not** be added to ESTG (`PGM` appears accurately on `/career` under **MIIS `2023–2025`** where you taught Program Management).
> *(Note: `Bacharelato_certificate.doc` ID `1L8UDnO8T5V5r4Qwr69crZnbi_kFAH1Cu` in Drive is an unrelated Electronics/Telecommunications Engineering certificate for another individual and was excluded.)*

### Verified Broad / Non-Translation Subjects Present on Your ESTG Transcript
Your transcript **does** include strong interdisciplinary foundations across business, law, organizational behavior, research, and computing that are currently understated or missing from ESTG's highlights:

| Domain | Exact Subject(s) on Official ESTG Transcript | Year |
|---|---|---|
| **Organizational Behavior & Communication** | *Work and Organizational Psychology* · *Psychology of Communications* · *Introduction to Social Sciences* | Year 4 · Year 2 · Year 2 |
| **Law & Business / Economics** | *Introduction to Law* · *Introduction to Economics* | Year 1 |
| **Computing & Localization Tech** | *Computer Science I & II* · *Translation Technologies I & II* | Year 1 · Year 4 |
| **Research & Analytical Foundations** | *Scientific Research Methodology* · *Speech Analysis* · *Text Analysis and Production* · *Pragmatics* (`Pragmátic`) · *Comparative Linguistics I & II* | Years 1–4 |
| **Applied Practice** | *Internship* (Year 5 institutional/industry track) | Year 5 |

*(Notice **Work and Organizational Psychology** and **Translation Technologies I & II** are on your Year 4 transcript directly supporting later localization tooling & organizational leadership roles.)*

---

## Open Questions

1. **Top Card `summary` ([en.js:417-418](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L417-L418)):** Should we keep the top 2-line `summary` concise as-is, or add a brief phrase such as `", combining four working languages with organizational psychology, law, economics, and computer science"`?
2. **Scope Preference:** Would you like to keep numeric subject marks hidden inside the bullets (consistent with your score redaction decision on the certificates) and highlight only verified subject names? *(Proposed diff below keeps all numeric marks hidden.)*

---

## Proposed Changes

### Career Dataset (`frontend/src/data/career/en.js`)

#### [MODIFY] [en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js#L419-L423)
Rebalance `highlights` inside the `graduation` (`ESTG 🎓`) entry into 3 scannable bullets (Credentials · Interdisciplinary Core · 4-Language & Internship Track) so non-translation leadership, law, economics, and CS coursework gets equal visibility without overclaiming `PGM`:

```diff
     highlights: [
       'Degree Path & Credentials: Completed the 5-year Portuguese bietápico degree in Translation & Interpretation (Specialization in Interpreting) at ESTG  -  Polytechnic Institute of Leiria (Bachelor graduated Nov 22, 2005; 5-Year Licentiate completed Oct 23, 2007).',
-      'Curriculum & Practical Track: Studied across 4 working languages (Portuguese, English, Spanish, German), Contrastive Analysis & Translation (I–VI), Technical Translation (I–II), Translation Technologies (I–II), Consecutive & Simultaneous Interpreting, and Year 5 Internship coursework (RTP & EU DGT Brussels).',
+      'Interdisciplinary Foundation (Leadership, Law, Economics & Tech): Completed coursework in Work and Organizational Psychology, Psychology of Communications, Introduction to Social Sciences, Introduction to Law, Introduction to Economics, Computer Science (I–II), Translation Technologies (I–II), and Scientific Research Methodology.',
+      'Languages, Interpreting & Applied Track: Trained across 4 working languages (Portuguese, English, Spanish, German) plus Contrastive Analysis & Translation (I–VI), Technical Translation (I–II), Comparative Linguistics (I–II), Consecutive & Simultaneous Interpreting, and Year 5 Internship coursework (RTP & EU DGT Brussels).',
     ],
```

---

### Automated Tests (`frontend/src/data/career/career.test.js`)

#### [MODIFY] [career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js#L266-L296)
Extend the `ESTG milestone` Jest test to verify that `estg.highlights` includes the confirmed interdisciplinary subjects (`Work and Organizational Psychology`, `Introduction to Law`, `Introduction to Economics`, `Computer Science`) while keeping all private ID/score assertions intact.

---

## Verification Plan

### Automated Tests
```bash
npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js
```

### Browser Check
- Refresh `http://localhost:3000/career`, open **ESTG (`1 / 18`) → How I built it & Evidence Notes**, and verify all 3 highlight bullets render cleanly above `evidence.note` and the 4 archive pills with zero clipping or overflow.
