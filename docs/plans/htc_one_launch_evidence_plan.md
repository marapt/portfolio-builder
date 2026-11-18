# Implementation Plan: HTC One (M7 & M8) Global Launch Evidence for Hogarth Worldwide

This plan details how to incorporate the multi-market launch timeline, press coverage, and technical milestones for HTC's flagship smartphones (**HTC One M7**, Feb 2013 and **HTC One M8**, Mar 2014) into Mara Martins' career history at **Hogarth Worldwide (London, UK, 2010–2014)**.

---

## 1. Context & Career Alignment

Mara Martins served at Hogarth Worldwide (part of WPP Group) from January 2010 through March 2014 in London, UK, advancing from Transcreation Account Manager to Senior Transcreation Account Manager / Senior Project Manager within 12 months.

Her tenure coincided with the two most significant product and brand milestones in HTC's corporate history:
1. **HTC One (M7) Global Smartphone Rollout (Feb–May 2013):**
   - Unveiled on February 19, 2013 simultaneously in New York and London.
   - Initial commitment across 185 operators and retailers in 80+ countries.
   - Staggered multi-wave international rollouts across the UK, Germany, Taiwan (late March), Europe, North America (April 19 with AT&T/Sprint), India (April 9), China (late April across all three major telcos), and Japan (May 2013 as HTC J One HTL22 with KDDI).
   - Commercial milestone: Sold ~5 million units in its first two months across 181+ countries.
2. **HTC "Change" Brand Platform (August 2013):**
   - Multi-million dollar integrated campaign fronted by Robert Downey Jr.
   - Creative direction developed by dedicated WPP Group agency 171 Worldwide.
   - Transcreation and localized production adaptation led by Hogarth Worldwide across digital, online, print, and cinema/ATL.
3. **HTC One (M8) Global Launch (March 25, 2014):**
   - Flagship successor unveiled in New York and London on March 25, 2014.
   - Global rollout across 230 carriers in 100 countries by late April, featuring brushed aluminum unibody, Snapdragon 801, Duo Camera depth sensing, and BoomSound.

---

## 2. Proposed Architecture & Portfolio Integration

### A. Dual Evidence Sections in [frontend/src/data/career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)

We propose organizing Hogarth Worldwide's evidence drawer into two focused, expandable sections:

```
Hogarth Worldwide (London, UK) · 2010–2014
├── Rule of 3 Metrics: 30+ mkts · 10+ team · Digital, Print, ATL
├── Section 1: 1. Global Brand Platform · HTC "Change" Creative Strategy (WPP Group)
│   ├── Badges & Narrative: WPP Group · 171 Worldwide · Multi-Channel Execution
│   ├── Primary Captures: Robert Downey Jr. Announcement & 171 Worldwide Media Mix
│   └── Sources: Official HTC Newsroom (Aug 12, 2013) & Wayback Archive
└── Section 2: 2. Flagship Smartphone Campaigns · HTC One M7 & M8 Global Rollouts
    ├── Badges: 80+ to 100+ Countries · 185 to 230 Carriers · 5M Units in 60 Days
    ├── Chronological Launch Milestones Table (Feb 2013 – Mar 2014)
    ├── Coverage Sources:
    │   ├── Official HTC Newsroom: HTC One Global Launch (Feb 19, 2013)
    │   ├── Official HTC Newsroom: HTC One M8 Reveal (Mar 25, 2014)
    │   ├── Trusted Reviews: HTC One M7 Announcement (Feb 2013)
    │   ├── ExtremeTech: HTC One M8 Technical Reveal (Mar 2014)
    │   ├── AllThingsD: European & Multi-Market Rollout Scheduling
    │   └── TIME: Global Carrier Availability
    └── Snapshot Previews: Verified press and product captures
```

---

## 3. Detailed File Changes

### [MODIFY] [frontend/src/data/career/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/en.js)

#### 1. Role Summary & Highlights Refinement
Update `highlights` to explicitly link enterprise account leadership with the flagship hardware and brand campaigns:

```javascript
    summary:
      'Led UK and European transcreation delivery teams and multi-market digital, online, and print campaigns across 30+ global markets, promoted within 12 months to Senior Manager.',
    highlights: [
      'Promoted from Transcreation Account Manager (Jan 2010) to Senior Transcreation Account Manager (Jan 2011), establishing and leading in-house delivery teams across key European and global markets (FR, BE, ES, PT, NL).',
      'Managed multiple enterprise client accounts for international launches, setting up dedicated execution teams for global brand transformations and flagship hardware releases across digital, online, and print media.',
      'Partnered within the WPP agency network (including 171 Worldwide) to execute HTC’s multi-million dollar global "Change" brand platform fronted by Robert Downey Jr. and international launch campaigns for flagship devices including the HTC One (M7) and HTC One (M8), delivering integrated creative adaptations worldwide.',
    ],
```

#### 2. Section 1 (Brand Platform) Polish
- Update titles, links, and snapshot properties (`src:` and `image:` for backwards compatibility).

#### 3. Section 2 (New Section: Flagship Smartphone Rollouts)
Add Section 2 containing structured milestone data and verified press links:

```javascript
        {
          id: 'htc-one-launches',
          title: '2. Flagship Smartphone Campaigns · HTC One (M7 & M8) Global Rollouts',
          badge: '80+ to 100+ Countries · 185 to 230 Carriers · Multi-Market Delivery',
          defaultOpen: false,
          columns: 2,
          summary:
            'Managed multi-market creative adaptation and production delivery for HTC’s landmark flagship smartphone releases across European and worldwide markets. The 2013 HTC One (M7) campaign supported rollouts across 185 operators in 80+ countries (reaching ~5M units sold in its first two months), followed by the March 2014 global reveal of the HTC One (M8) across 230 carriers in 100 countries.',
          links: [
            {
              label: 'Official HTC Newsroom: HTC One (M7) Global Unveil (Feb 19, 2013)',
              url: 'https://www.htc.com/us/newsroom/2013-02-19/',
              kind: 'external',
            },
            {
              label: 'Trusted Reviews: HTC One (M7) Full HD & UltraPixel Announcement',
              url: 'https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634',
              kind: 'external',
            },
            {
              label: 'Official HTC Newsroom: HTC One (M8) Global Launch (Mar 25, 2014)',
              url: 'https://www.htc.com/us/newsroom/2014-03-25/',
              kind: 'external',
            },
            {
              label: 'ExtremeTech: HTC One (M8) Duo Camera & Unibody Technical Reveal',
              url: 'https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody',
              kind: 'external',
            },
            {
              label: 'TIME Magazine: HTC One (M8) Global Carrier Rollout (Mar 2014)',
              url: 'https://time.com/36854/htc-one-2014/',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'FLAGSHIP LAUNCH · FEB 2013',
              title: 'HTC One (M7) Global Smartphone Announcement',
              caption:
                'Trusted Reviews coverage detailing the 4.7-inch Full HD zero-gap aluminum unibody flagship, UltraPixel camera, and BoomSound stereo architecture.',
              src: '/evidence/htc-wpp-brand-change-platform-1.jpg',
              url: 'https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634',
              linkLabel: 'Trusted Reviews Article',
              slideBg: 'white',
              note: 'Corroborates the global product launch window (Feb 2013) across 185 carriers and 80+ countries during Mara’s Senior Manager tenure at Hogarth.',
            },
            {
              marketTag: 'SUCCESSOR REVEAL · MAR 2014',
              title: 'HTC One (M8) Flagship Launch Across 100 Countries',
              caption:
                'ExtremeTech reveal highlighting the Snapdragon 801 processor, Duo Camera depth sensor, and simultaneous rollout across 230 carriers.',
              src: '/evidence/htc-wpp-brand-change-platform-2.jpg',
              url: 'https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody',
              linkLabel: 'ExtremeTech Review',
              slideBg: 'white',
              note: 'Documents the culmination of Mara’s Hogarth tenure (March 2014) coinciding with HTC’s worldwide flagship release.',
            },
          ],
        },
```

---

### [MODIFY] [frontend/src/data/resume/en.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resume/en.js) & [frontend/src/data/resumeData.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/resumeData.js)

Update Role 8 achievements to highlight both brand platform and flagship device launches:

```javascript
      achievements: [
        'Managed multiple enterprise client accounts for international launches, setting up dedicated execution teams across digital, online, and print media',
        'Led the dedicated production and execution team for WPP Group\'s global brand transformation of HTC ("Change" brand platform fronted by Robert Downey Jr.) and flagship smartphone launches (HTC One M7 and M8) across digital, online, and print',
        'Oversaw production of culturally adapted marketing communications for major global brands across key markets (FR, BE, ES, PT, NL)',
        'Pro-active interaction with Procurement and Account Management teams to expand client portfolio and win enterprise and institutional pitches'
      ]
```

---

### [MODIFY] [frontend/src/components/CareerTimeline.jsx](file:///Users/user/Documents/github/portfolio-builder/frontend/src/components/CareerTimeline.jsx)

- Update line 407 to support `snap.src || snap.image || ''` gracefully so both `src` and `image` are safely supported across all evidence sections.

---

### [MODIFY] [frontend/src/data/career/career.test.js](file:///Users/user/Documents/github/portfolio-builder/frontend/src/data/career/career.test.js)

Update the Hogarth unit test to assert both evidence sections:
```javascript
  test('Hogarth UK role contains verified metrics, client account highlights, and HTC Change brand evidence', () => {
    const publicDir = path.resolve(__dirname, '../../../public');
    const hogarth = timelineItems.find((item) => item.id === 'hogarth-uk');
    expect(hogarth).toBeDefined();
    expect(hogarth.placeholder).toBe(false);
    expect(hogarth.company).toBe('Hogarth Worldwide (London, United Kingdom)');
    expect(hogarth.metrics.map((m) => m.value)).toEqual([
      '30+ mkts',
      '10+ team',
      'Digital, Print, ATL',
    ]);
    expect(hogarth.evidence).toBeDefined();
    expect(hogarth.evidence.sections).toHaveLength(2);
    expect(hogarth.evidence.sections.map((s) => s.id)).toEqual([
      'htc-global-brand',
      'htc-one-launches',
    ]);
  });
```

---

## 4. Verification Plan

### Automated Tests
```bash
cd frontend && CI=true npm test -- --watchAll=false
```
*Expected: All 15 test suites pass.*

### Production Build
```bash
cd frontend && npm run build
```
*Expected: Craco build compiles cleanly with zero warnings or errors.*

### Em-Dash & Symbol Check
```bash
python3 -c "
for path in ['frontend/src/data/career/en.js', 'frontend/src/data/career/career.test.js', 'frontend/src/data/resume/en.js', 'frontend/src/data/resumeData.js']:
    with open(path) as f:
        assert '\u2014' not in f.read(), f'Found em-dash in {path}'
print('All files verified: zero prose em-dashes!')
"
```

---

## 5. User Review Required

> [!NOTE] Design Choice: Dual Sections vs. Combined Section
> We have proposed separating the **"Change" Brand Platform (Aug 2013)** from the **HTC One M7 & M8 Smartphone Rollouts (Feb 2013 & Mar 2014)** into two dedicated expandable accordions. This cleanly separates corporate brand positioning from physical product launch execution.
>
> Please confirm if you approve this 2-section approach or prefer them combined into a single unified HTC section.
