# UI Design Plan: "How I built it & Evidence Notes" Surface Color

## Design Thoughts  -  Should It Have a Slightly Different Color?

**Yes  -  a subtle shift helps**, primarily for visual depth rather than adding more color noise.

### What Is Happening Right Now
In [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1130-L1155), the outer panel and its nearby elements stack like this:

1. **Role Detail Card (`detailBox`):**
   - Work roles ([lines 70–84](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L70-L84)): `border-cyan-400/35 bg-gradient-to-br from-slate-900/90 to-slate-800/80`
   - Academic roles ([lines 54–68](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L54-L68)): `border-violet-400/45 bg-violet-500/15`
2. **Sibling Blocks Above:**
   - `<details>` footnote strip: `border-white/10 bg-white/[0.02]`
   - `Metrics & Terms Guide` pills: `border-white/15 bg-white/[0.04]`
   - `Foundations Sub-Roles` drawer ([line 1085](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1085)): `border-white/10 bg-white/[0.03]`
3. **Target Container (`How I built it & Evidence Notes`, [line 1133](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1133)):**
   - Currently: `rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5`
4. **Nested Items Inside the Drawer:**
   - Evidence section accordions: `border-white/10 bg-white/[0.03]`
   - Nested proof/snapshot cards: `border-white/10 bg-black/30`

### Why Current Styling Feels Slightly Flat
- **Almost no separation from nested cards:** `bg-black/25` (outer drawer) and `bg-black/30` (inner snapshot cards) have the same neutral-black hue and `border-white/10` edge, only 5% opacity apart. When expanded, inner cards lose crisp framing.
- **Tucked-away feel when collapsed:** Compared to the lighter frosted strips above it (`bg-white/[0.02]` / `bg-white/[0.03]` / `bg-white/[0.04]`), `bg-black/25` makes the drawer look slightly sunken rather than clearly signaling an interactive "Proof & Builds" drawer.
- **Guardrail  -  keep it understated:** The top `Impact Snapshot` KPI cards should still carry the brightest visual weight for the first 3 seconds of scanning. The drawer only needs a **1–2 step shift in tint and border clarity**, not a bright background fill.

---

## Color & Surface Options

### Option 1 (Recommended)  -  Deep Navy-Slate + Subtle Cyan Hairline
```diff
- <div className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
+ <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/55 shadow-inner p-4 sm:p-5">
```
- **Look & Feel:** Gives the container a clean, architectural deep-navy slate base (`bg-slate-950/55`) and ties the 1px border softly (`border-cyan-400/20`) to the `text-cyan-200` heading and `Links & Archive` pill (`border-cyan-400/35 bg-cyan-400/10`) without competing with the main Work card border (`border-cyan-400/35`).
- **Depth Hierarchy:** Separates clearly from both `from-slate-900/90 to-slate-800/80` above and `bg-black/30` nested proof cards inside, while remaining calm under Academic (`bg-violet-500/15`), Break, and Future cards.

---

### Option 2  -  Soft Cyan-Tinted Evidence Band
```diff
- <div className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
+ <div className="rounded-2xl border border-cyan-300/25 bg-cyan-950/20 p-4 sm:p-5">
```
- **Look & Feel:** Immediately distinguishes `How I built it & Evidence Notes` as a dedicated "Evidence & Proof" zone with a cool cyan-teal tint that matches the heading and badge.
- **Trade-off:** Stronger contrast against neutral slate on Work roles, though slightly cooler when placed inside violet Academic cards (`bg-violet-500/15`).

---

### Option 3  -  Elevated Cool Frost (Neutral Across All Role Colors)
```diff
- <div className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
+ <div className="rounded-2xl border border-white/15 bg-white/[0.045] p-4 sm:p-5">
```
- **Look & Feel:** Gently lifts the drawer (`white/[0.045]`) slightly brighter than `<details>` (`white/[0.02]`) and `Foundations` (`white/[0.03]`), letting the nested `bg-black/30` proof cards sit deeper *inside* a lifted surface. Completely neutral across Work (cyan), Academic (violet), Break (amber), and Future (emerald) tabs.
- **Trade-off:** Does not use color hue to call out the Evidence section distinctly from standard accordion surfaces.

---

### Option 0  -  Keep Current (`border-white/10 bg-black/25`)
No code changes if you prefer keeping the drawer maximally quiet until expanded.

---

## Proposed Implementation (Once an Option Is Chosen)

### Component Update
#### [MODIFY] [CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx#L1133)
- Update the single outer `<div>` `className` on line `1133` wrapping `How I built it & Evidence Notes` to the approved option above.

## Verification Plan
### Automated Check
- Run the Career & component Jest suite to ensure no syntax or test regressions:
  `npm --prefix /Users/user/Documents/github/portfolio-builder/frontend test -- --watchAll=false src/data/career/career.test.js src/components/AcronymText.test.js`

### Visual Verification
- Inspect `http://localhost:3000/career` in Chrome across both a **Work** role (e.g., Block  -  collapsed and expanded `How I built it & Evidence Notes` with snapshot cards visible) and an **Academic** role (e.g., MIIS  -  violet theme) to verify border crispness, nested card contrast, and balanced visual hierarchy.
