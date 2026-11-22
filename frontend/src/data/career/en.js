// Placeholder career timeline data for /career prototype (feature/portfolio-mvp).
// CV remains the single source of truth; real numbers & dates swap in during Phase 2 after consistency audit.

export const pillars = [
  { id: 'all', label: 'All' },
  { id: 'program', label: 'Program & Delivery' },
  { id: 'leadership', label: 'Leadership & Change' },
  { id: 'vendor', label: 'Vendor & Finance' },
  { id: 'ai', label: 'Machine Translation, LLMs and AI' },
  { id: 'education', label: 'Education' },
];

export const pillarMeta = {
  program: {
    label: 'Program & Delivery',
    badgeClass: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  },
  leadership: {
    label: 'Leadership',
    badgeClass: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
  },
  vendor: {
    label: 'Vendor & Finance',
    badgeClass: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  },
  ai: {
    label: 'Machine Translation, LLMs and AI',
    badgeClass: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  },
  education: {
    label: 'Education',
    badgeClass: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
  },
};

export const railYears = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
];

export const futureYears = ['2027', '2028', '2029+'];

const BLOCK_INVESTOR_DAY_PDF_URL =
  'https://s29.q4cdn.com/628966176/files/doc_presentations/2022/05/Square-Block-Investor-Day-2022.pdf';
const BLOCK_Q3_2022_LETTER_URL =
  'https://s29.q4cdn.com/628966176/files/doc_financials/2022/q3/Block_Shareholder-Letter-3Q22.pdf';
const BLOCK_SQUARE_ABOUT_URL = 'https://squareup.com/us/en/about';
const BLOCK_SQUARE_ABOUT_WAYBACK_URL =
  'https://web.archive.org/web/20261108180332/https://squareup.com/us/en/about';
const BLOCK_SQUARE_ABOUT_ARCHIVE_PDF_URL = '/evidence/block-square-about-archive.pdf';

const blockGlossary = [
  {
    id: 'gaap',
    term: 'GAAP (All-In Reported)',
    shortLabel: 'GAAP',
    definition:
      'Generally Accepted Accounting Principles, the standard U.S. accounting rules used in Block’s official filings (such as the Q3 2022 Shareholder Letter, p. 29). On a GAAP basis, Square International Gross Profit in FY22 includes contributions from the newly integrated Afterpay (BNPL) platform.',
  },
  {
    id: 'ex-bnpl',
    term: 'Ex-BNPL (Organic Core Square)',
    shortLabel: 'Ex-BNPL',
    definition:
      'Results excluding Bitcoin and the BNPL (Afterpay) platform. Because BNPL had $0 contribution in FY20 and FY21, Ex-BNPL provides the true apples-to-apples organic growth rate for core Square international products (+42.6% YoY in FY22 9M YTD; +40.7% YoY in FY22 Q3).',
  },
  {
    id: 'bnpl',
    term: 'BNPL / Afterpay Contribution',
    shortLabel: 'BNPL',
    definition:
      'Buy Now, Pay Later installment capability added across Block’s Square and Cash App ecosystems in FY22 (including Square sellers in Canada and the UK per Q3 2022 Letter, p. 7). BNPL added $123.4M to Square International Gross Profit in FY22 9M YTD and $45.8M in FY22 Q3.',
  },
  {
    id: 'gpv',
    term: 'GPV (Gross Payment Volume)',
    shortLabel: 'GPV',
    definition:
      'Total dollar value of card and digital payments processed by Square sellers. In FY22 Q3, Square International GPV grew +40% YoY as reported and +55% YoY on a constant-currency basis, outpacing U.S. GPV growth (+17% YoY) by more than 3× (p. 11).',
  },
  {
    id: 'constant-currency',
    term: 'Constant Currency (CC)',
    shortLabel: 'Constant Currency',
    definition:
      'A foreign-exchange-adjusted growth rate that measures international payment volume as if exchange rates had stayed unchanged year over year. Stripping out 2022 USD currency headwinds shows Square International GPV grew +55% YoY in FY22 Q3 (vs. +40% YoY reported).',
  },
  {
    id: 'gross-profit',
    term: 'Square International Gross Profit',
    shortLabel: 'Gross Profit',
    definition:
      'Net revenue Square retains from sellers outside the United States after direct processing and product costs. Full-year FY21 reached $220M (9% share); in just the first nine months of FY22 (ended Sep 30, 2022), it reached $200.2M core Ex-BNPL and $323.7M GAAP all-in.',
  },
  {
    id: 'periods',
    term: 'FY21 · FY22 (9M YTD) · FY22 Q3',
    shortLabel: 'FY21 / FY22 Periods',
    definition:
      'Block’s fiscal year aligns with the calendar year (Jan–Dec). FY21 covers full-year 2021 ($220M baseline). FY22 (9M YTD) covers the nine months ended Sep 30, 2022 (Block’s latest full-period actuals prior to FY22 Q4 close in the Nov 3, 2022 Q3 Letter). FY22 Q3 covers the single July–Sep 2022 quarter ($120.9M all-in / $75.1M Ex-BNPL).',
  },
  {
    id: 'growth-rates',
    term: 'YoY & CAGR Growth Rates',
    shortLabel: 'YoY & CAGR',
    definition:
      'YoY (Year-over-Year) compares a period against the exact same period 12 months prior to remove seasonal retail swings. CAGR (Compound Annual Growth Rate) measures smoothed annual growth over multiple years (>60% from FY15 to FY21 on Investor Day Slide 27).',
  },
  {
    id: 'parity',
    term: 'International Product Parity',
    shortLabel: 'Product Parity',
    definition:
      'The share of Square’s 44 U.S. seller products localized and launched across each international market (Investor Day Slide 26: Canada 37, Australia & UK 34, Ireland 29, Japan 26, France 22), further expanded in FY22 with Spain, PayPay QR in Japan, Instant Transfers in Australia, Square Loans in the UK, and BNPL in Canada and the UK.',
  },
];

const blockEvidenceSections = [
  {
    id: 'expansion',
    title: '1. Global Market Expansion',
    badge: '8 Int’l Markets · Investor Day & FY22 Q3',
    defaultOpen: true,
    columns: 3,
    summary:
      '• Situation: Rapid global expansion and the Square-to-Block rebrand required scaling localization program capacity across 8 international markets and up to 37 localized products per market.\n\n• System & Governance: Scaled the localization PM org 3x from 5 to 15 FTE PMs (direct reports), establishing cross-functional launch alignment across Brand, Product, Regional GTM, and Legal.\n\n• Outcome: Delivered scheduled market expansions including Spain GA (Jan 2022) and Canada Loans (Apr 2022), supporting +55% YoY constant-currency international GPV growth in FY22 Q3.',
    links: [
      {
        label: 'Block Investor Day 2022 Full Deck (77-Slide PDF, May 2022)',
        url: BLOCK_INVESTOR_DAY_PDF_URL,
        kind: 'external',
      },
      {
        label: 'Block Q3 2022 Shareholder Letter: Expanding Globally (p. 7, Nov 2022)',
        url: `${BLOCK_Q3_2022_LETTER_URL}#page=7`,
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'Investor Day · Slide 26 · Product Parity',
        src: '/evidence/block-investor-day-slide26.png',
        alt: 'Slide 26 of Block Investor Day 2022 showing Bringing our product ecosystem global across international markets',
        caption: 'Slide 26 · Ecosystem Product Count (22–37 Int’l)',
        linkLabel: 'Investor Day PDF',
        url: BLOCK_INVESTOR_DAY_PDF_URL,
        fit: 'contain',
        note: 'Baseline localized product parity across core markets (existing plus FY21 additions): CA 37, AU/UK 34, IE 29, JP 26, and FR 22 (vs. U.S. 44).',
      },
      {
        marketTag: 'Investor Day · Slides 31–32 · Scroll',
        src: '/evidence/block-investor-day-slide31.png',
        alt: 'Slide 31 of Block Investor Day 2022 showing Square global market expansion map 2010–2022',
        caption: 'Slides 31–32 · Global Expansion Map & Timeline',
        linkLabel: 'PDF (p. 31–32)',
        expandLabel: 'Open Slides 31–32',
        primaryLabel: 'Slide 31',
        scrollAriaLabel: 'Scrollable preview containing Block Investor Day Slides 31 and 32',
        url: `${BLOCK_INVESTOR_DAY_PDF_URL}#page=31`,
        fit: 'contain',
        extraSlides: [
          {
            src: '/evidence/block-investor-day-slide32.png',
            linkLabel: 'Slide 32',
            alt: 'Slide 32 of Block Investor Day 2022 showing Global market expansion country silhouettes and launch years (2010–2022)',
          },
        ],
        note: 'Chronological rollout across all 8 non-U.S. markets (incl. Falkland Islands), culminating in FY21–FY22 European launches in France, Ireland, and Spain (scroll preview down for Slide 32 market launch years).',
      },
      {
        marketTag: 'Q3 2022 Letter · Page 7 · Parity & Trend',
        src: '/evidence/block-q3-2022-expanding-globally.png',
        alt: 'Block Q3 2022 Shareholder Letter Page 7 Expanding globally narrative and 2018 Q3 to 2022 Q3 Gross Profit Outside the U.S. chart',
        caption: 'Q3 2022 p. 7 · Expanding Globally & Q3 Trend',
        linkLabel: 'Q3 2022 PDF (p. 7)',
        url: `${BLOCK_Q3_2022_LETTER_URL}#page=7`,
        fit: 'contain',
        note: 'Single-quarter progression rose from $13M (FY18 Q3) and $53M (FY21 Q3) to $121M / 15% all-in ($75M / 11% Ex-BNPL; chart-rounded from $120.9M / $75.1M) in FY22 Q3, alongside Japan, Australia, UK, and Canada rollouts.',
      },
    ],
  },
  {
    id: 'rebrand',
    title: '2. Square to Block Global Rebrand',
    badge: 'Dec 1, 2021 · Cross-Functional',
    defaultOpen: false,
    summary:
      'Drove global localization readiness for the corporate Square to Block rebrand (Dec 1, 2021) alongside Brand, Product Marketing, Legal, and Regional GTM teams, unifying corporate identity across Square, Cash App, TIDAL, and emerging international operations.',
    links: [
      {
        label: 'Square to Block Rebrand Press Release (Dec 2021)',
        url: 'https://block.xyz/inside/press-release-block',
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'Press Release · Dec 1, 2021 · Corporate Rebrand',
        src: '/evidence/block-rebrand-announcement.png',
        alt: 'Snapshot of Square, Inc. Changes Name to Block announcement on block.xyz',
        caption: 'Square to Block Global Rebrand Announcement (Dec 1, 2021)',
        linkLabel: 'Press Release',
        url: 'https://block.xyz/inside/press-release-block',
        fit: 'contain',
        note: 'Delivered during month 2 of tenure across international product, legal, and regional GTM surfaces without disrupting active European market rollouts.',
      },
    ],
  },
  {
    id: 'markets',
    title: '3. Market & Product Launches',
    badge: '🇫🇷 France · 🇮🇪 Ireland · 🇪🇸 Spain · 🇨🇦 Canada',
    defaultOpen: false,
    columns: 2,
    hideSectionLinks: false,
    summary:
      'Supported post-launch ecosystem scaling in FY21 European markets (France and Ireland) while executing FY22 market and financial-product launches in Spain (Jan 2022, later adding Catalan localization), Canada Square Loans (Apr 2022), and Canada BNPL (Q3 2022 Shareholder Letter, p. 7), corroborated by Square’s official 2021–2022 corporate timeline.',
    headerLinks: [
      {
        label: 'Official Square About Timeline (Live)',
        url: BLOCK_SQUARE_ABOUT_URL,
        kind: 'external',
      },
      {
        label: 'Wayback Machine Archive (Nov 2026)',
        url: BLOCK_SQUARE_ABOUT_WAYBACK_URL,
        kind: 'archive',
      },
      {
        label: 'Saved Full-Page PDF Archive (Local)',
        url: BLOCK_SQUARE_ABOUT_ARCHIVE_PDF_URL,
        kind: 'archive',
      },
    ],
    links: [
      {
        label: 'Official Square About Timeline (Live)',
        url: BLOCK_SQUARE_ABOUT_URL,
        kind: 'external',
      },
      {
        label: 'Wayback Machine Archive (Nov 2026)',
        url: BLOCK_SQUARE_ABOUT_WAYBACK_URL,
        kind: 'archive',
      },
      {
        label: 'Saved Full-Page PDF Archive (Local)',
        url: BLOCK_SQUARE_ABOUT_ARCHIVE_PDF_URL,
        kind: 'archive',
      },
      {
        label: 'Square Launches in France (Sep 2021)',
        url: 'https://developer.squareup.com/blog/square-launches-in-france/',
        kind: 'external',
      },
      {
        label: 'Square Official Launch in Spain (Jan 2022)',
        url: 'https://squareup.com/us/es/press/square-announces-official-launch-in-spain-after-successful-early-access-programme',
        kind: 'external',
      },
      {
        label: 'Square Loans Canada Launch (Apr 2022)',
        url: 'https://www.businesswire.com/news/home/20220428005090/en/Launch-of-Square-Loans-Offers-Quick-Simple-Access-to-Funds-for-Canadian-Businesses',
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'Company Timeline · 2021–2022 · Scroll',
        src: '/evidence/block-square-about-2022.png',
        alt: 'Snapshot of Square About corporate timeline (squareup.com/us/en/about) highlighting 2022 milestones including Spain launch and Catalan localization',
        caption: 'Square About · 2021–2022 Global Milestones',
        linkLabel: 'Square About Page',
        expandLabel: 'Open 2021–2022 Timeline',
        primaryLabel: '2022 Timeline',
        scrollAriaLabel:
          'Scrollable preview containing Square About corporate timeline snapshots for 2022 and 2021',
        url: BLOCK_SQUARE_ABOUT_URL,
        fit: 'contain',
        slideBg: 'white',
        extraSlides: [
          {
            src: '/evidence/block-square-about-2021.png',
            linkLabel: '2021 Timeline',
            alt: 'Snapshot of Square About corporate timeline (squareup.com/us/en/about) highlighting 2021 milestones: Square to Block rebrand, Square Banking, France expansion, and Ireland expansion',
          },
        ],
        note: 'Official Square corporate history (live page, Nov 2026 Wayback archive & saved PDF preserved): corroborates FY21 France & Ireland expansion (supported via post-launch scaling), Dec 2021 Square to Block rebrand, and FY22 Spain general availability and subsequent Catalan localization.',
      },
      {
        marketTag: '🇫🇷 France · Sep 2021 · Post-Launch Scaling',
        src: '/evidence/block-square-france.png',
        alt: 'Snapshot of Square Launches in France announcement on developer.squareup.com',
        caption: 'Square Launches in France (22 Products)',
        linkLabel: 'Press / Blog',
        url: 'https://developer.squareup.com/blog/square-launches-in-france/',
        fit: 'contain',
        note: 'Launched on Sep 2021 prior to tenure; sustained post-launch localization and developer/product parity scaling to 22 localized products during Nov 2021 – Nov 2022.',
      },
      {
        marketTag: '🇪🇸 Spain · Jan 2022 · New Market Launch',
        src: '/evidence/block-square-spain.png',
        alt: 'Snapshot of Square Official Launch in Spain press release on squareup.com',
        caption: 'Square Official Launch in Spain',
        linkLabel: 'Press Release',
        url: 'https://squareup.com/us/es/press/square-announces-official-launch-in-spain-after-successful-early-access-programme',
        fit: 'contain',
        note: 'Executed Jan 2022 general availability rollout across Spain following its early-access program, marking Block’s eighth international market.',
      },
      {
        marketTag: '🇨🇦 Canada · Apr 2022 · Loans & BNPL',
        src: '/evidence/block-square-canada.png',
        alt: 'Snapshot of Square Loans launch in Canada Business Wire press release',
        caption: 'Square Loans Launch in Canada (Over 37 Products)',
        linkLabel: 'Business Wire',
        url: 'https://www.businesswire.com/news/home/20220428005090/en/Launch-of-Square-Loans-Offers-Quick-Simple-Access-to-Funds-for-Canadian-Businesses',
        fit: 'contain',
        note: 'Delivered Apr 2022 Square Banking rollout followed by Canada BNPL in FY22 Q3 (p. 7), expanding Block’s deepest international suite of over 37 products.',
      },
    ],
  },
  {
    id: 'roi',
    title: '4. International Growth & ROI',
    badge: 'FY21 $220M (9%) to FY22 9M YTD $323.7M / $200.2M Ex-BNPL',
    defaultOpen: false,
    columns: 3,
    summary:
      'The ROI data below reconciles Block’s May 2022 Investor Day full-year FY21 baseline ($220M; 9% share) with Q3 2022 Shareholder Letter actuals (Nov 3, 2022; data ended Sep 30, 2022, Block’s latest full-period reporting prior to FY22 Q4 close). Separates each measurement window and product scope (Core Ex-BNPL vs. GAAP including Afterpay/BNPL) alongside +55% YoY constant-currency international GPV growth.',
    reconciliation: [
      {
        period: 'FY21 (Full-Year Baseline)',
        value: '$220M · 9% Share',
        detail: 'Pre-BNPL Square International Gross Profit (up from 3% in FY15–16; >60% FY15–21 CAGR), per Investor Day Slide 27.',
      },
      {
        period: 'FY22 9M YTD (Core Ex-BNPL)',
        value: '$200.2M · +42.6% YoY',
        detail: 'Organic Square International Gross Profit in Jan–Sep 2022 vs. $140.4M in FY21 9M (excludes Afterpay/BNPL), per Q3 2022 Letter, p. 29.',
      },
      {
        period: 'FY22 9M YTD (GAAP All-In)',
        value: '$323.7M · +130.5% YoY',
        detail: 'Total Square International Gross Profit in Jan–Sep 2022, including $123.4M Afterpay/BNPL contribution, per Q3 2022 Letter, p. 29.',
      },
      {
        period: 'FY22 Q3 (Quarter + Int’l GPV)',
        value: '15% Share · +55% CC GPV',
        detail: '$120.9M all-in (15% share) or $75.1M Ex-BNPL (11%, +40.7% YoY vs. FY21 Q3 $53.4M / 9%); Int’l GPV +55% YoY constant currency (pp. 7, 11, 29).',
      },
    ],
    links: [
      {
        label: 'Block Investor Day 2022 Full Deck (77-Slide PDF, May 2022)',
        url: BLOCK_INVESTOR_DAY_PDF_URL,
        kind: 'external',
      },
      {
        label: 'Block Q3 2022 Shareholder Letter (34-Page PDF, Nov 3, 2022)',
        url: BLOCK_Q3_2022_LETTER_URL,
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'Investor Day · Slide 27 · FY21 Baseline',
        src: '/evidence/block-investor-day-slide27.png',
        alt: 'Slide 27 of Block Investor Day 2022 showing $220M and 9% international share of Square gross profit',
        caption: 'Slide 27 · FY21 Annual Baseline ($220M · 9%)',
        linkLabel: 'Investor Day PDF',
        url: BLOCK_INVESTOR_DAY_PDF_URL,
        fit: 'contain',
        note: 'Full-year FY21 pre-BNPL Square International Gross Profit ($220M; 9% share) at the start of Nov 2021 tenure.',
      },
      {
        marketTag: 'Q3 2022 Letter · Page 29 · Q3 & 9M Bridge',
        src: '/evidence/block-q3-2022-intl-reconciliation.png',
        alt: 'Block Q3 2022 Shareholder Letter Page 29 table reconciling Total Square Gross profit International and excluding Bitcoin and BNPL for Three Months and Nine Months Ended September 30, 2022',
        caption: 'Q3 2022 p. 29 · GAAP vs. Ex-BNPL Bridge',
        linkLabel: 'Q3 2022 PDF (p. 29)',
        url: `${BLOCK_Q3_2022_LETTER_URL}#page=29`,
        fit: 'contain',
        note: 'Unaudited GAAP reconciliation (rounded to $M from exact $K filings): FY22 9M YTD reached $323.7M (+130.5% YoY) all-in and $200.2M (+42.6% YoY vs. FY21 9M $140.4M) Ex-BNPL; FY22 Q3 reached $120.9M all-in and $75.1M (+40.7% YoY) Ex-BNPL.',
      },
      {
        marketTag: 'Q3 2022 Letter · Page 11 · Int’l GPV',
        src: '/evidence/block-q3-2022-intl-gpv.png',
        alt: 'Block Q3 2022 Shareholder Letter Page 11 Geographies section showing 40% reported and 55% constant currency international Square GPV growth',
        caption: 'Q3 2022 p. 11 · +55% Constant-Currency GPV',
        linkLabel: 'Q3 2022 PDF (p. 11)',
        url: `${BLOCK_Q3_2022_LETTER_URL}#page=11`,
        fit: 'contain',
        note: 'Geographies disclosure: FY22 Q3 Square International GPV grew +40% YoY reported and +55% YoY in constant currency, outpacing U.S. GPV growth (+17% YoY) by more than 3×.',
      },
    ],
  },
  {
    id: 'professional-development',
    title: '5. Professional Development & Community Contributions (2022)',
    badge: 'ICEM 2022 Roundtable · Santarém, Portugal',
    defaultOpen: false,
    columns: 2,
    summary:
      'Represented Block internationally as an invited roundtable speaker at the ICEM 2022 Annual International Conference (International Council for Educational Media & Polytechnic Institute of Santarém, Oct 12–14, 2022) on "The Role of Women in Media and Technology: How Can Digital Media Help Reduce the Gender Gap."',
    links: [
      {
        label: 'ICEM 2022 Conference Program (Wayback, Aug 2022)',
        url: 'https://web.archive.org/web/20220810055430/https://www.ipsantarem.pt/icem-conference-2022/',
        kind: 'archive',
      },
      {
        label: 'Official IPSantarém ICEM 2022 Page (Live)',
        url: 'https://www.ipsantarem.pt/icem-conference-2022/',
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'ICEM 2022 · SANTARÉM, PORTUGAL · OCT 12–14, 2022',
        src: '/evidence/block-icem-2022-conference.png',
        alt: 'ICEM 2022 Annual Conference page at Polytechnic Institute of Santarém featuring the Women in Media and Technology roundtable',
        caption: 'ICEM 2022 Annual Conference · Women in Media & Tech Roundtable',
        linkLabel: 'ICEM 2022 (Wayback)',
        expandLabel: 'Inspect ICEM 2022 Program & Timetable',
        primaryLabel: 'ICEM 2022 Conference Page',
        url: 'https://web.archive.org/web/20220810055430/https://www.ipsantarem.pt/icem-conference-2022/',
        fit: 'contain',
        extraSlides: [
          {
            src: '/evidence/block-icem-2022-timetable.png',
            linkLabel: 'Program Timetable',
            alt: 'ICEM 2022 Official Conference Timetable showing the October 2022 roundtable sessions at Polytechnic Institute of Santarém',
          },
        ],
        note: 'Invited roundtable speaker representing Block alongside international academic and technology leaders in Santarém, Portugal (Oct 12–14, 2022).',
      },
    ],
  },
];

const linkedinGlossary = [
  {
    id: 'mktg-solutions',
    term: 'LinkedIn Marketing Solutions',
    shortLabel: 'Marketing Solutions',
    definition:
      'LinkedIn\'s B2B advertising and brand-storytelling business (over one-third of LinkedIn revenue in FY21), spanning sponsored feed formats, Sponsored Messaging, and Stories-era campaign launches.',
  },
  {
    id: 'periods',
    term: 'Microsoft Fiscal Quarters (FY21 Q1–FY22 Q1)',
    shortLabel: 'FY21 Q1–FY22 Q1',
    definition:
      'Microsoft\'s fiscal year runs July 1 – June 30, so FY21 Q1 ended September 30, 2020 and FY21 Q4 ended June 30, 2021, aligning directly with LinkedIn Stories international rollouts and Creator expansion.',
  },
  {
    id: 'constant-currency',
    term: 'Reported GAAP vs. Constant Currency YoY',
    shortLabel: 'Constant Currency',
    definition:
      'Reported GAAP growth reflects actual USD exchange rates; constant currency (CC) excludes foreign-exchange impact (e.g., FY21 Q4 Marketing Solutions grew +97% GAAP / +91% CC).',
  },
  {
    id: 'marcom',
    term: 'MARCOM (Marketing Communications)',
    shortLabel: 'MARCOM',
    definition:
      'LinkedIn\'s global marketing organization spanning product launches, member acquisition, editorial storytelling, and advertiser campaigns.',
  },
  {
    id: 'msp',
    term: 'MSP (Managed Service Provider) Outsourced Model',
    shortLabel: 'MSP',
    definition:
      'Centralized external vendor program built for marketing transcreation and creative QA, scaling up to 20 external vendors alongside 2 Loc MKTG PMs and up to 15 internal linguists.',
  },
  {
    id: 'creator-mode',
    term: 'Creator Mode & Persistent Short-Form Video Pivot',
    shortLabel: 'Creator Mode',
    definition:
      'LinkedIn\'s 2021 creator-economy shift evolving 24-hour ephemeral Stories into permanent, profile-anchored video experiences and creator tools (Creator Mode launched in 2021; Stories sunset Sep 30, 2021).',
  },
];

const linkedinEvidenceSections = [
  {
    id: 'rollouts',
    title: '1. Multi-Market LinkedIn Stories Rollout & Global Rebrand (2020)',
    badge: 'Primary Press & LinkedIn Sources · 7 Captures',
    defaultOpen: true,
    columns: 3,
    summary:
      '• Situation: Launching LinkedIn Stories in sequential country waves alongside the first major platform redesign in 5 years required orchestrating localized brand and marketing updates across multiple regions during pandemic shifts.\n\n• System & Governance: Co-led MARCOM Localization Program Management across Marketing, Engineering, Legal, and Editorial News; established sequential release gates from Brazil (Wave 1) through Netherlands, UAE, Australia, France, the Sep 24 Global Redesign, and the UK (Wave 6).\n\n• Outcome: Delivered scheduled multi-wave rollouts across 6 global waves and the September 2020 global redesign, cutting unit turnaround time by 30%.',
    links: [
      {
        label: 'Pete Davies Beta Post (Wayback, Feb 2020)',
        url: 'https://web.archive.org/web/20200227171633/https://www.linkedin.com/pulse/testing-new-conversational-format-linkedin-stories-pete-davies/',
      },
      {
        label: 'Natalie MacDonald: APAC Launch (Wayback, Jun 2020)',
        url: 'https://web.archive.org/web/20230628093409/https://www.linkedin.com/pulse/introducing-linkedin-stories-natalie-macdonald-1c/',
      },
      {
        label: 'AU & FR Coverage (SMT, Wayback)',
        url: 'https://web.archive.org/web/20200622101231/https://www.socialmediatoday.com/news/linkedin-expands-roll-out-of-linkedin-stories-to-australia/580224/',
      },
      {
        label: 'Global Redesign Release (Wayback, Sep 2020)',
        url: 'https://web.archive.org/web/20200929140640/https://news.linkedin.com/2020/september/new-design-and-experiences-help-members-build-meaningful-relatio',
      },
      {
        label: 'A New Look for LinkedIn: From the Inside Out (LinkedIn Official Blog)',
        url: 'https://www.linkedin.com/blog/member/product/a-new-look-for-linkedin-from-the-inside-out',
      },
      {
        label: 'UK Launch: Rachel Tombs (Pulse, Oct 2020)',
        url: 'https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/',
      },
      {
        label: 'UK Launch (Wayback Search)',
        url: 'https://web.archive.org/web/*/https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/',
      },
    ],
    snapshots: [
      {
        marketTag: 'WAVE 1 · BRAZIL · APR 14, 2020',
        src: '/evidence/linkedin-stories-brazil.png',
        alt: 'Canaltech report showing Brazil as the first country worldwide to receive LinkedIn Stories in April 2020',
        caption:
          'Canaltech (Apr 14, 2020): Brazil launched first globally (over 40M members, 3rd-largest video creator market) for members, journalists & brands.',
        url: 'https://web.archive.org/web/20200418103427/https://canaltech.com.br/redes-sociais/linkedin-stories-brasil-e-o-primeiro-pais-a-receber-novo-recurso-163313/',
        linkLabel: 'Canaltech (Wayback)',
        expandLabel: 'Inspect Brazil launch coverage',
      },
      {
        marketTag: 'WAVE 2 · NETHERLANDS · MAY 12, 2020',
        src: '/evidence/linkedin-stories-netherlands.png',
        alt: 'LinkedIn Pulse announcement by Pieter Cranenbroek confirming the Netherlands rollout of LinkedIn Stories',
        caption:
          'LinkedIn Pulse (May 12, 2020): Pieter Cranenbroek announces Netherlands availability during COVID-19 ("Work beyond work") as Wave 2.',
        url: 'https://www.linkedin.com/pulse/linkedin-stories-work-beyond-pieter-cranenbroek/',
        linkLabel: 'LinkedIn Pulse (NL · Local Archive)',
        expandLabel: 'Inspect Netherlands announcement',
      },
      {
        marketTag: 'WAVE 3 · UAE / MENA · JUN 1, 2020',
        src: '/evidence/linkedin-stories-uae.png',
        alt: 'The National UAE coverage of LinkedIn Stories rolling out to the United Arab Emirates in June 2020',
        caption:
          'The National UAE (Jun 1, 2020): UAE becomes the third test market globally, bringing localized MENA visual storytelling to professionals.',
        url: 'https://web.archive.org/web/20250804073813/https://www.thenationalnews.com/arts/linkedin-stories-uae-among-the-first-to-trial-the-new-feature-on-social-network-platform-1.1027464',
        linkLabel: 'The National (Wayback)',
        expandLabel: 'Inspect UAE launch coverage',
      },
      {
        marketTag: 'WAVES 4–5 · AU & FR · JUN 17–25, 2020',
        src: '/evidence/linkedin-stories-australia-natalie-macdonald.png',
        alt: 'LinkedIn News APAC article by Natalie MacDonald introducing LinkedIn Stories in Australia on June 17, 2020',
        caption:
          'LinkedIn News APAC (Jun 17, 2020): Natalie MacDonald introduces LinkedIn Stories in Australia (first APAC market), followed by France on Jun 25.',
        url: 'https://web.archive.org/web/20230628093409/https://www.linkedin.com/pulse/introducing-linkedin-stories-natalie-macdonald-1c/',
        linkLabel: 'Natalie MacDonald (Wayback)',
        expandLabel: 'Inspect Australia & France launch coverage',
        extraSlides: [
          {
            src: '/evidence/linkedin-stories-australia-france.png',
            linkLabel: 'Australia & France (SMT)',
            alt: 'Social Media Today report on LinkedIn Stories expanding to Australia and France in June 2020',
          },
        ],
      },
      {
        marketTag: 'GLOBAL · US, CA & REBRAND · SEP 24, 2020',
        src: '/evidence/linkedin-stories-global-redesign.png',
        alt: 'LinkedIn Pressroom announcement for the September 24, 2020 global redesign and LinkedIn Stories expansion',
        caption:
          'LinkedIn Pressroom (Sep 24, 2020): Major platform visual redesign and LinkedIn Stories rollout to U.S., Canada & global markets.',
        url: 'https://web.archive.org/web/20200929140640/https://news.linkedin.com/2020/september/new-design-and-experiences-help-members-build-meaningful-relatio',
        linkLabel: 'LinkedIn Pressroom (Wayback)',
        expandLabel: 'Inspect Global Redesign release',
        primaryLabel: 'Global Redesign & Stories Release (Sep 24, 2020)',
      },
      {
        marketTag: 'LINKEDIN OFFICIAL BLOG · BRAND REFRESH & NEW LOOK',
        src: '/evidence/linkedin-brand-new-look.png',
        alt: 'A New Look and Feel for LinkedIn announcement from the LinkedIn Official Blog',
        caption:
          'LinkedIn Official Blog (Sep 2020): A New Look for LinkedIn (from the Inside Out) unveils the global brand refresh and modernized member experience.',
        url: 'https://www.linkedin.com/blog/member/product/a-new-look-for-linkedin-from-the-inside-out',
        linkLabel: 'LinkedIn Official Blog',
        expandLabel: 'Inspect LinkedIn Brand Redesign Post',
        primaryLabel: 'A New Look for LinkedIn (from the Inside Out)',
        note: 'Official LinkedIn product blog announcement detailing the platform-wide visual refresh and new design architecture ("from the inside out"), modernizing member community engagement across all global web and mobile interfaces.',
      },
      {
        marketTag: 'WAVE 6 · UK · OCT 20, 2020',
        src: '/evidence/linkedin-stories-uk.png',
        alt: 'LinkedIn Pulse analysis by Rachel Tombs confirming the UK rollout of LinkedIn Stories in October 2020',
        caption:
          'LinkedIn Pulse (Oct 20, 2020): Rachel Tombs confirms LinkedIn Stories goes live across the United Kingdom following earlier European and APAC waves.',
        url: 'https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/',
        linkLabel: 'Rachel Tombs (Pulse · UK)',
        expandLabel: 'Inspect UK rollout coverage',
      },
    ],
  },
  {
    id: 'operating-model',
    title: '2. MARCOM Localization Org, MSP Vendor Model & Tenure Evidence',
    badge: 'Founding to 2 PMs · 15 Linguists · 20 MSP Vendors',
    defaultOpen: false,
    columns: 2,
    summary:
      '• Situation: Exponentially growing multi-market campaign volume across 26 languages created capacity bottlenecks that the core team could not absorb alone.\n\n• System & Governance: Founded the MARCOM Localization PM function (scaling to 2 FTE Loc MKTG PMs), partnered daily with 15 internal linguists for tone and regional accuracy, and scaled an outsourced MSP vendor program to 20 partner agencies.\n\n• Outcome: Scaled PM, linguist, and MSP capacity across 26 languages and 17 markets to absorb high-volume launch waves while driving down unit turnaround time by 30%.',
    reconciliation: [
      {
        period: 'ORG FOUNDING · TEAM OF 2 PMs',
        value: '2 Loc MKTG PMs',
        detail:
          'Built the MARCOM Localization Program Management function from scratch, aligning Marketing, Localization Engineering, Legal, and Product launches.',
      },
      {
        period: 'INTERNAL CORE · UP TO 15',
        value: 'Up to 15 Internal Linguists',
        detail:
          'Partnered daily with internal localization specialists across 26 languages and 17 internationalization markets for voice, tone, and regional accuracy.',
      },
      {
        period: 'OUTSOURCED MODEL · MSP UP TO 20',
        value: 'Up to 20 MSP Vendors',
        detail:
          'Built the outsourced marketing content vendor program via an MSP model, absorbing COVID-era launch spikes and cutting turnaround by 30%.',
      },
    ],
    snapshots: [],
  },
  {
    id: 'creator-pivot',
    title: '3. COVID-19 Impact & Strategic Pivot from Stories to Creators (Sep 2021)',
    badge: 'Product Evolution · Aug–Sep 2021',
    defaultOpen: false,
    columns: 3,
    hideSectionLinks: true,
    summary:
      'Launched during global lockdowns, Stories gave professionals a human, real-time channel to stay connected and drove strong advertiser adoption. On Aug 31, 2021 (1 month prior to Mara\'s departure), LinkedIn announced Stories would sunset on Sep 30, 2021, sharing what it learned: members wanted videos to live persistently on their profile with richer creative tools rather than vanish after 24 hours, directly fueling LinkedIn\'s Creator Mode & persistent short-form video roadmap.',
    links: [
      {
        label: 'Liz Li Announcement (Wayback)',
        url: 'https://web.archive.org/web/20210831181219/https://www.linkedin.com/pulse/whats-next-linkedin-stories-video-liz-li',
      },
      {
        label: 'Marketing Update: What\'s Next (Wayback)',
        url: 'https://web.archive.org/web/20210831192410/https://www.linkedin.com/pulse/update-marketing-linkedin-stories-whats-next-',
      },
    ],
    snapshots: [
      {
        marketTag: 'LINKEDIN PRODUCT · AUG 31, 2021',
        src: '/evidence/linkedin-stories-creator-pivot.png',
        alt: 'Liz Li announcement explaining what LinkedIn learned from Stories and the pivot toward persistent Creator video experiences',
        caption: 'Liz Li, Sr. Director of Product: why Stories gave way to permanent video and Creator tools.',
        url: 'https://web.archive.org/web/20210831181219/https://www.linkedin.com/pulse/whats-next-linkedin-stories-video-liz-li',
        linkLabel: 'Liz Li (Wayback)',
        fit: 'contain',
        expandLabel: 'Inspect official Creator pivot post',
      },
      {
        marketTag: 'LINKEDIN MARKETING SOLUTIONS · AUG 31, 2021',
        src: '/evidence/linkedin-marketing-solutions-stories-update-wayback.jpg',
        alt: 'Wayback Machine capture of the LinkedIn Marketing Solutions post "Update about Marketing with LinkedIn Stories, and What\'s Next" published Aug 31, 2021',
        caption: 'Stories end for Pages Sep 30, 2021; Stories ads move to the feed.',
        url: 'https://web.archive.org/web/20210831192410/https://www.linkedin.com/pulse/update-marketing-linkedin-stories-whats-next-',
        linkLabel: 'Marketing Solutions (Wayback)',
        fit: 'contain',
        expandLabel: 'Inspect LinkedIn Marketing Solutions update',
      },
      {
        marketTag: 'TECHCRUNCH · AUG 31, 2021',
        src: '/evidence/linkedin-stories-techcrunch.png',
        alt: 'TechCrunch article covering LinkedIn suspending Stories on September 30, 2021 to build short-form creator video',
        caption: 'Press coverage of the Sep 30, 2021 Stories sunset and the move to short-form video.',
        url: 'https://web.archive.org/web/20210831195105/https://techcrunch.com/2021/08/31/linkedin-is-scrapping-its-stories-feature-to-work-on-short-form-video/',
        linkLabel: 'TechCrunch (Wayback)',
        fit: 'contain',
        expandLabel: 'Inspect TechCrunch report',
      },
    ],
  },
  {
    id: 'roi',
    title: '4. Microsoft Investor Relations Earnings & ROI Reconciliation (FY20 Q4–FY22 Q1)',
    badge: 'Company Context · +97% Peak Mktg Solns · $10B+ FY21',
    defaultOpen: false,
    columns: 2,
    glossaryId: 'mktg-solutions',
    glossaryButtonLabel: 'Explain Marketing Solutions, Fiscal Quarters & Constant Currency',
    summary:
      'While localization execution directly accelerated launch readiness and cut turnaround time by 30%, Microsoft\'s FY20 Q4–FY22 Q1 investor releases and Satya Nadella / Amy Hood earnings remarks provide external context on how Stories, global redesigns, Learning, and Creator tools coincided with record engagement and Marketing Solutions accelerating from +40% YoY to +97% YoY as LinkedIn surpassed $10 billion in annual revenue.',
    reconciliation: [
      {
        period: 'FY20 Q4 · ENDED JUN 30, 2020',
        value: '+10% GAAP (+11% CC) · 706M Members',
        detail:
          'Jul 22, 2020: over 706 million members, record engagement as remote work took hold; Satya Nadella noted professionals turned to the network to connect and learn amidst hiring headwinds.',
      },
      {
        period: 'FY21 Q1 · ENDED SEP 30, 2020',
        value: '+16% Rev · +40% Mktg Solns',
        detail:
          'Oct 27, 2020: over 722 million members, record engagement; Satya Nadella highlighted LinkedIn\'s major redesign and Stories launch; Learning >1M hrs/wk (2× YoY).',
      },
      {
        period: 'FY21 Q2 · ENDED DEC 31, 2020',
        value: '+23% GAAP (+22% CC) · +53% Mktg Solns',
        detail:
          'Jan 26, 2021: ~740M members, sessions +30%, conversations +48%; advertising hit a record quarter (>1/3 of LinkedIn revenue).',
      },
      {
        period: 'FY21 Q3 · ENDED MAR 31, 2021',
        value: '+25% GAAP (+23% CC) · +64% Mktg Solns',
        detail:
          'Apr 27, 2021: 756M members, hours on LinkedIn +80%, Creator Mode introduced; LTM Marketing Solutions topped $3B (~3× category rate).',
      },
      {
        period: 'FY21 Q4 · ENDED JUN 30, 2021',
        value: '+46% GAAP (+42% CC) · +97% Mktg Solns',
        detail:
          'Jul 27, 2021: LinkedIn surpassed $10 billion in FY21 annual revenue (+27%); over 774 million members, sessions +30%; quarterly ad revenue topped $1B (+91% CC).',
      },
      {
        period: 'FY22 Q1 · ENDED SEP 30, 2021',
        value: '+42% GAAP (+39% CC) · +61% Mktg Solns',
        detail:
          'Oct 26, 2021: Nearly 800M members, confirmed hires grew over 160% year over year, expanded Creator economy tools alongside +59% CC Marketing Solutions growth.',
      },
    ],
    links: [
      {
        label: 'MSFT IR FY21 Q4 Release (Wayback)',
        url: 'https://web.archive.org/web/20210727200532/https://www.microsoft.com/en-us/Investor/earnings/FY-2021-Q4/press-release-webcast',
      },
      {
        label: 'MSFT IR FY20 Q4 (Wayback)',
        url: 'https://web.archive.org/web/20200722201538/https://www.microsoft.com/en-us/Investor/earnings/FY-2020-Q4/press-release-webcast',
      },
      {
        label: 'MSFT IR FY21 Q1 (Wayback)',
        url: 'https://web.archive.org/web/20201027210739/https://www.microsoft.com/en-us/Investor/earnings/FY-2021-Q1/press-release-webcast',
      },
      {
        label: 'MSFT IR FY21 Q2 (Wayback)',
        url: 'https://web.archive.org/web/20210126211606/https://www.microsoft.com/en-us/Investor/earnings/FY-2021-Q2/press-release-webcast',
      },
      {
        label: 'MSFT IR FY21 Q3 (Wayback)',
        url: 'https://web.archive.org/web/20210427200928/https://www.microsoft.com/en-us/Investor/earnings/FY-21-Q3/press-release-webcast',
      },
      {
        label: 'MSFT IR FY22 Q1 (Wayback)',
        url: 'https://web.archive.org/web/20211026201548/https://www.microsoft.com/en-us/investor/earnings/fy-2022-q1/press-release-webcast',
      },
      {
        label: 'FY20 Q4 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2020-year/4-quarter',
      },
      {
        label: 'FY21 Q1 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2021-year/1-quarter',
      },
      {
        label: 'FY21 Q2 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2021-year/2-quarter',
      },
      {
        label: 'FY21 Q3 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2021-year/3-quarter',
      },
      {
        label: 'FY21 Q4 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2021-year/4-quarter',
      },
      {
        label: 'FY22 Q1 Transcript (ROIC)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2022-year/1-quarter',
      },
    ],
    snapshots: [
      {
        marketTag: 'MICROSOFT IR · FY21 Q4 (JUL 27, 2021)',
        src: '/evidence/linkedin-msft-earnings-fy21q4.png',
        alt: 'Microsoft Investor Relations FY21 Q4 earnings release highlighting LinkedIn surpassing $10B annual revenue and Marketing Solutions +97% YoY growth',
        caption:
          'Microsoft IR (Jul 27, 2021): Satya Nadella notes LinkedIn surpassed $10 billion in annual revenue, with Q4 revenue +46% YoY (+42% CC) led by +97% YoY Marketing Solutions (+91% CC).',
        url: 'https://web.archive.org/web/20210727200532/https://www.microsoft.com/en-us/Investor/earnings/FY-2021-Q4/press-release-webcast',
        linkLabel: 'Microsoft IR FY21 Q4 (Wayback)',
        expandLabel: 'Inspect Microsoft FY21 Q4 earnings release',
        extraSlides: [
          {
            src: '/evidence/linkedin-msft-fy21q4-revenue-callout.jpg',
            linkLabel: 'Highlighted Callout',
            alt: 'Microsoft FY21 Q4 earnings release with the line "LinkedIn revenue increased 46% (up 42% in constant currency) driven by Marketing Solutions growth of 97% (up 91% in constant currency)" highlighted',
          },
        ],
      },
      {
        marketTag: 'ROIC.AI TRANSCRIPTS · FY21 Q1–FY22 Q1 · SCROLL',
        src: '/evidence/linkedin-msft-transcript-fy21q4.jpg',
        alt: 'ROIC.ai transcript of Microsoft FY21 Q4 earnings call quoting Satya Nadella on LinkedIn surpassing $10B and 97% advertising growth',
        caption: 'ROIC.ai Call Transcripts · Satya Nadella Remarks (5 Quarters)',
        url: 'https://www.roic.ai/quote/MSFT/transcripts/2021-year/4-quarter',
        linkLabel: 'FY21 Q4 Transcript (ROIC)',
        primaryLabel: 'FY21 Q4 Transcript ($10B · +97%)',
        expandLabel: 'Open All 5 Quarterly Transcript Slides',
        scrollAriaLabel: 'Scrollable preview containing ROIC.ai transcripts for FY21 Q1 through FY22 Q1',
        fit: 'contain',
        extraSlides: [
          {
            src: '/evidence/linkedin-msft-transcript-fy21q1.jpg',
            linkLabel: 'FY21 Q1 (Stories Launch)',
            alt: 'ROIC.ai transcript of Microsoft FY21 Q1 earnings call quoting Satya Nadella on Stories and platform redesign',
          },
          {
            src: '/evidence/linkedin-msft-transcript-fy21q2.jpg',
            linkLabel: 'FY21 Q2 (740M Members)',
            alt: 'ROIC.ai transcript of Microsoft FY21 Q2 earnings call quoting Satya Nadella on 740M members and Marketing Solutions',
          },
          {
            src: '/evidence/linkedin-msft-transcript-fy21q3.jpg',
            linkLabel: 'FY21 Q3 (Creator Mode)',
            alt: 'ROIC.ai transcript of Microsoft FY21 Q3 earnings call quoting Satya Nadella on 756M members and Creator Mode',
          },
          {
            src: '/evidence/linkedin-msft-transcript-fy22q1.jpg',
            linkLabel: 'FY22 Q1 (800M Members)',
            alt: 'ROIC.ai transcript of Microsoft FY22 Q1 earnings call quoting Satya Nadella on 800M members and +61% advertising revenue',
          },
        ],
        note: 'Verified ROIC.ai quarterly earnings call transcripts corroborate Satya Nadella\'s remarks across LinkedIn Stories launch, redesign, Creator Mode, and Marketing Solutions growth.',
      },
    ],
  },
  {
    id: 'professional-development',
    title: '5. Professional Development & Community Contributions (2020–2021)',
    badge: 'Stanford WSP 116 · RUTIS Speaker · Top 12% Super Learner (26 Courses)',
    defaultOpen: false,
    columns: 3,
    summary:
      'Completed Stanford Continuing Studies WSP 116 (Conversational Intelligence, Feb 6–7, 2021), delivered an invited talk at Portugal\'s VIII Congresso Nacional RUTIS (Mar 24, 2021) on "O LinkedIn como forma de comunicação," and earned recognition in the Top 12% of Learners globally on LinkedIn Learning for CY 2020 (#superlearning) across 26 completed learning items.',
    links: [
      {
        label: 'Stanford WSP 116 Official Certificate (PDF)',
        url: '/evidence/stanford-wsp116-certificate.pdf',
        kind: 'archive',
      },
      {
        label: 'RUTIS VIII Congresso Nacional Program (Wayback)',
        url: 'https://web.archive.org/web/20221204052225/https://rutis.pt/congresso-nacional-inovacao-na-educacao-para-seniores/',
        kind: 'archive',
      },
      {
        label: 'LinkedIn #superlearning Top 12% Post (Feb 2021)',
        url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
        kind: 'external',
      },
      {
        label: 'Cert: Confronting Bias (May 2021)',
        url: 'https://www.linkedin.com/learning/certificates/f0f478334e0e2ea775dc61a3d47d2140612eb164d42d3be2f1eaed5f88950496',
        kind: 'external',
      },
      {
        label: 'Cert: Inclusive Mindset (Feb 2021)',
        url: 'https://www.linkedin.com/learning/certificates/b5f637febd9d33590893573bd0ddfe5e7538becbd07766f1b88072e9bac1f584',
        kind: 'external',
      },
      {
        label: 'Cert: Unconscious Bias (Jan 2021)',
        url: 'https://www.linkedin.com/learning/certificates/2e97bf72d99dabd626e38b9667debd20334ce1c1528a44e80d1cfe9fa9c3f21f',
        kind: 'external',
      },
      {
        label: 'Cert: Overcoming Imposter Syndrome (Oct 2020)',
        url: 'https://www.linkedin.com/learning/certificates/7262b7c16c4b2e02d1be0ee1e9f04e45b0de8c4f8a1b897527fd58e806413e7a',
        kind: 'external',
      },
      {
        label: 'Cert: Thriving @ Work (Oct 2020)',
        url: 'https://www.linkedin.com/learning/certificates/17e6701fa765b32aa29eefd2ff8fd1c189dec5f06ff3ce25ff69eeaf5f81d43d',
        kind: 'external',
      },
      {
        label: 'Cert: Servant Leadership (Oct 2020)',
        url: 'https://www.linkedin.com/learning/certificates/7af1ce4b9ece31a777c7d6051888a209b267345c582d78ece6f397b5b9d4301a',
        kind: 'external',
      },
    ],
    snapshots: [
      {
        marketTag: 'STANFORD CONTINUING STUDIES · FEB 6–7, 2021',
        src: '/evidence/stanford-wsp116-certificate.png',
        alt: 'Stanford Continuing Studies Attendance Certificate for Mara Martins in WSP 116 Conversational Intelligence: Increase Your Impact, February 6-7, 2021',
        caption: 'Stanford WSP 116 · Conversational Intelligence Certificate',
        url: '/evidence/stanford-wsp116-certificate.pdf',
        linkLabel: 'Official Certificate PDF',
        fit: 'contain',
        slideBg: 'white',
        expandLabel: 'Inspect Stanford WSP 116 Certificate',
        note: 'Signed by Noah Brennan-Greenbaum (Academic Records Officer, Stanford Continuing Studies); taught by Amy Wong.',
      },
      {
        marketTag: 'RUTIS VIII CONGRESSO NACIONAL · MAR 24, 2021',
        src: '/evidence/linkedin-rutis-congresso-2021.png',
        alt: 'Program for VIII Congresso Nacional RUTIS showing Mara Martins speaking on O LinkedIn como forma de comunicacao',
        caption: 'VIII Congresso Nacional RUTIS · Invited Speaker (Panel II)',
        url: 'https://web.archive.org/web/20221204052225/https://rutis.pt/congresso-nacional-inovacao-na-educacao-para-seniores/',
        linkLabel: 'RUTIS Program (Wayback)',
        fit: 'contain',
        expandLabel: 'Inspect RUTIS Congress Program',
        note: 'Invited speaker on "O LinkedIn como forma de comunicação" (Panel II: A comunicação com e para os seniores).',
      },
      {
        marketTag: 'TOP 12% SUPER LEARNER · 26 COMPLETED COURSES · SCROLL',
        src: '/evidence/linkedin-superlearning-post.png',
        alt: 'Mara Martins LinkedIn post celebrating Top 12% of Learners globally on LinkedIn Learning for CY 2020 (#superlearning) alongside 6 verified LinkedIn Learning certificates and 26-course completed library',
        caption: 'CY 2020 Top 12% Super Learner & 26 Completed Courses',
        url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
        linkLabel: '#superlearning Post',
        primaryLabel: '#superlearning Post (Feb 2021)',
        expandLabel: 'Open All 9 Certificate & Library Captures',
        scrollAriaLabel:
          'Scrollable preview containing LinkedIn #superlearning post, completed library snapshots, and 6 individual LinkedIn Learning certificates',
        fit: 'contain',
        extraSlides: [
          {
            src: '/evidence/linkedin-learning-completed-library.png',
            linkLabel: 'Library (1–5)',
            alt: 'LinkedIn Learning Completed Library showing 26 learning history items and completed courses 1 to 5',
          },
          {
            src: '/evidence/linkedin-learning-completed-library-2.png',
            linkLabel: 'Library (6–9)',
            alt: 'LinkedIn Learning Completed Library showing completed courses 6 to 9 including Managing Teams and Be the Manager People Won\'t Leave',
          },
          {
            src: '/evidence/cert-linkedin-confronting-bias.png',
            linkLabel: 'Confronting Bias Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Confronting Bias: Thriving Across Our Differences (May 11, 2021)',
          },
          {
            src: '/evidence/cert-linkedin-inclusive-mindset.png',
            linkLabel: 'Inclusive Mindset Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Inclusive Mindset (Feb 16, 2021)',
          },
          {
            src: '/evidence/cert-linkedin-unconscious-bias.png',
            linkLabel: 'Unconscious Bias Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Unconscious Bias (Jan 11, 2021)',
          },
          {
            src: '/evidence/cert-linkedin-imposter-syndrome.png',
            linkLabel: 'Imposter Syndrome Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Overcoming Imposter Syndrome (Oct 20, 2020)',
          },
          {
            src: '/evidence/cert-linkedin-thriving-at-work.png',
            linkLabel: 'Thriving @ Work Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Thriving @ Work (Oct 13, 2020)',
          },
          {
            src: '/evidence/cert-linkedin-servant-leadership.png',
            linkLabel: 'Servant Leadership Cert',
            alt: 'LinkedIn Learning Certificate of Completion for Ken Blanchard on Servant Leadership (Oct 12, 2020)',
          },
        ],
        note: 'Recognized among LinkedIn Learning\'s Top 12% of Learners globally for CY 2020, backed by 26 completed learning items and individual verifiable certificates.',
      },
    ],
  },
];

export const timelineItems = [
  {
    id: 'graduation',
    type: 'milestone',
    era: 'early-eu',
    chipLabel: 'ESTG 🎓',
    subLabel: '2001–2007 · Degree',
    company: 'Academic Foundation',
    countryFlag: '🇵🇹',
    location: 'Leiria, Portugal',
    monogram: '🎓',
    logo: '/company-logos/estg.svg',
    title: 'Licentiate (5-Year Degree) in Translation & Interpretation',
    org: 'ESTG, Polytechnic Institute of Leiria, Portugal',
    period: '2001 – Oct 2007 (Bachelor Nov 2005 · Licentiate Oct 2007)',
    startYear: 2001,
    endYear: 2007,
    pillars: ['education'],
    summary:
      'Five-year multidisciplinary degree pairing conference interpreting across four working languages (PT, EN, ES, DE) and translation technology with foundational coursework in organizational psychology, law, economics, and computer science.',
    executionSummary: {
      heading: 'Program Arc: Multidisciplinary Academic Foundation & Applied Track',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Built a multidisciplinary foundation across four working languages, localization technology, and organizational/business subjects ahead of international enterprise careers.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Completed a 5-year Licentiate degree in Translation & Interpretation (Specialization in Interpreting; Bachelor Nov 2005, Licentiate Oct 2007) combining linguistic systems with organizational behavior, law, economics, and computer science.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Balanced high-precision linguistic and interpreting rigor with broader business, legal, and technical coursework across a multi-year academic track.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Graduated with Bachelor in November 2005 and completed the 5-year Licentiate in October 2007, establishing cross-disciplinary and multilingual fluency for European and international roles.',
        },
      ],
    },
    highlights: [
      'Degree Path & Credentials: Completed the two-stage 5-year degree program in Translation & Interpretation (Specialization in Interpreting) at ESTG (Polytechnic Institute of Leiria; Bachelor graduated Nov 22, 2005, 5-Year Licentiate completed Oct 23, 2007).',
      'Complementary Non-Translation Coursework (Org Behavior, Law, Economics & Tech): Completed degree coursework beyond core linguistics in Work and Organizational Psychology, Psychology of Communications, Introduction to Social Sciences, Introduction to Law, Introduction to Economics, Computer Science (I–II), Translation Technologies (I–II), and Scientific Research Methodology.',
      'Languages, Interpreting & Applied Track: Trained across 4 working languages (Portuguese, English, Spanish, German) plus Contrastive Analysis & Translation (I–VI), Technical Translation (I–II), Comparative Linguistics (I–II), Consecutive & Simultaneous Interpreting, and Year 5 Internship coursework (RTP & EU DGT Brussels).',
    ],
    evidence: {
      note: 'Verified via translated English Course Certificate records for Bachelor (graduated Nov 22, 2005) and Licentiate (completed Oct 23, 2007); original signed & embossed ESTG certificates are available upon request. Personal identity details and numeric classification are redacted (Portugal uses a 0–20 grading scale; 10+ passing). The live institutional site (Polytechnic Institute of Leiria, now University of Leiria and Oeste), ESTG school page, Wayback Machine archive (Oct 2026), and local PDF/PNG captures are preserved below.',
      snapshots: [
        {
          marketTag: 'Course Certificates · 2005 & 2007 · Scroll',
          src: '/evidence/estg-bachelor-certificate-redacted.png',
          alt: 'Translated English Course Certificate for Bachelor Degree in Translation with specialization in Interpreting at ESTG Polytechnic Institute of Leiria, graduated November 22, 2005 (personal details and numeric score redacted)',
          caption: 'ESTG Translated Course Certificates (BA & Licentiate, Redacted)',
          linkLabel: 'Certificates PDF',
          expandLabel: 'Open BA + Licentiate Certificates',
          primaryLabel: 'Bachelor (Nov 2005)',
          scrollAriaLabel:
            'Scrollable preview containing redacted translated Course Certificates for ESTG Bachelor (Nov 2005) and Licentiate (Oct 2007)',
          url: '/evidence/estg-course-certificates-redacted.pdf',
          fit: 'contain',
          slideBg: 'white',
          extraSlides: [
            {
              src: '/evidence/estg-licentiate-certificate-redacted.png',
              linkLabel: 'Licentiate (Oct 2007)',
              alt: 'Translated English Course Certificate for Licentiate Degree in Translation with specialization in Interpreting at ESTG Polytechnic Institute of Leiria, completed October 23, 2007 (personal details and numeric score redacted)',
            },
          ],
          note: 'Translated English Course Certificate record (original signed & sealed ESTG certificates available upon request). Bachelor graduated Nov 22, 2005; Licentiate completed Oct 23, 2007. Family/birthplace details & numeric score redacted (0–20 Portuguese grading scale; 10+ passing).',
        },
        {
          marketTag: 'Official Institution · ipleiria.pt/en',
          src: '/evidence/estg-ipleiria-en.png',
          alt: 'Snapshot of Official Polytechnic Institute of Leiria (now University of Leiria and Oeste) English institutional website',
          caption: 'Saved Webpage Capture · Official Institution (ipleiria.pt)',
          linkLabel: 'Live Site',
          url: 'https://www.ipleiria.pt/en/',
          note: 'Official English institutional portal (now University of Leiria and Oeste, formerly Polytechnic Institute of Leiria), paired with its Oct 2026 Wayback Machine archive link above.',
        },
      ],
      links: [
        {
          label: 'Official Institution Site (ipleiria.pt/en)',
          url: 'https://www.ipleiria.pt/en/',
          kind: 'external',
        },
        {
          label: 'ESTG (School of Technology & Management)',
          url: 'https://www.ipleiria.pt/en/about-us/schools/estg/',
          kind: 'external',
        },
        {
          label: 'Wayback Machine Archive (Oct 2026)',
          url: 'https://web.archive.org/web/20261030153521/https://www.ipleiria.pt/en/',
          kind: 'archive',
        },
        {
          label: 'Redacted Course Certificates PDF (BA + Licentiate)',
          url: '/evidence/estg-course-certificates-redacted.pdf',
          kind: 'archive',
        },
      ],
    },
    placeholder: false,
    evidenceId: 'edu-01',
  },
  {
    id: 'rtp',
    type: 'internship',
    era: 'early-eu',
    chipLabel: 'RTP 🎓',
    subLabel: 'Aug–Dec 2006 · Internship',
    company: 'RTP (Rádio e Televisão de Portugal)',
    countryFlag: '🇵🇹',
    location: 'Lisbon, Portugal',
    monogram: 'RTP',
    logo: '/company-logos/rtp.svg',
    title: 'Translation, Subtitling & Audio-Description Intern',
    officialTitle: 'Translation, Subtitling & Audio-Description Intern',
    dutiesBeyondScope:
      'Formulated broadcast subtitling standards for Gabinete Multimédia benchmarked against BBC/ITC, managing SDH teletext workflows across 6 genres.',
    period: 'Aug 2006 – Dec 2006 (Academic Internship)',
    startYear: 2006,
    endYear: 2006,
    pillars: ['program', 'leadership', 'education'],
    executionSummary: {
      heading: 'Program Arc: Broadcast Accessibility Workflows & SDH Subtitling',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Five-month national public broadcast accessibility internship in Lisbon (Gabinete Multimédia, Aug–Dec 2006), serving deaf and hard-of-hearing audiences via Teletext Page 188 during the final-year academic practicum window (concurrent with the September 2006 EU DGT Brussels traineeship).',
        },
        {
          label: 'Governance & System Built:',
          text: 'Executed subtitling, content adaptation, and Teletext Page 188 closed-captioning workflows at Portugal\'s national public broadcaster.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Aligned accessibility delivery with strict broadcast timing, formatting, and public-media operational constraints.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Delivered accessibility-focused broadcast subtitling and Teletext Page 188 captioning across the August–December 2006 internship.',
        },
      ],
    },
    metrics: [
      {
        value: '1,100+ hrs/yr',
        label: 'Annual broadcast subtitling delivered via Teletext p.188',
        kind: 'scale',
        placeholder: false,
        hint: 'Source: Relatório de Estágio (Gabinete Multimédia, RTP Teletexto Page 188 accessibility service)',
        evidenceId: 'rtp-01',
      },
      {
        value: '6 genres',
        label: 'Broadcast programming genres adapted & synchronized',
        kind: 'velocity',
        placeholder: false,
        hint: 'Source: Relatório de Estágio (Documentários, Séries, Telenovelas, Entretenimento, Infantil, Magazine)',
        evidenceId: 'rtp-02',
      },
      {
        value: '100% ITC/BBC',
        label: 'Compliance with international subtitling & SDH standards',
        kind: 'quality',
        placeholder: false,
        hint: 'Source: Relatório de Estágio (Proposed normative standards for RTP Gabinete Multimédia based on ITC/BBC)',
        evidenceId: 'rtp-03',
      },
    ],
    highlights: [
      'Authored a comprehensive broadcast subtitling standards proposal for RTP Gabinete Multimédia benchmarked against Independent Television Commission (ITC / BBC) standards, defining strict rules for character color-coding, screen positioning, line-breaking syntax, and sound descriptions.',
      'Managed end-to-end subtitling and content adaptation workflows across 6 television genres (documentaries, drama series, telenovelas, entertainment, children’s programming, and magazines), spanning weekly planning, EPG logging, tape transcription, and script adaptation.',
      'Executed transmission workflows across automatic, manual, and live broadcast subtitling modes, producing EPG production sheets and daily broadcast logs.',
    ],
    evidence: {
      note: 'Primary Source: Academic Curricular Internship Report ("Relatório de Estágio Curricular: Legendagem em Teletexto e Adaptação de Conteúdos"), completed under enterprise supervisor Dra. Noélia do Rosário Leal Macedo (RTP) and academic supervisor Prof. Paula Rosa dos Santos Órfão (ESTG - IPLeiria), delivered January 29, 2007. Language Disclaimer: This primary evidence document is preserved in Portuguese (PT) only, as this role was conducted in Portugal for Portugal’s national public broadcaster.',
      links: [
        {
          label: 'Google Docs: Relatório de Estágio Curricular (RTP · In Portuguese)',
          url: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
          kind: 'document',
        },
      ],
      sections: [
        {
          id: 'rtp-internship-report',
          title: '1. Academic Internship Report · RTP Gabinete Multimédia (Teletexto & Acessibilidades)',
          badge: 'ESTG · IPLeiria · Dra. Noélia Macedo & Prof. Paula Órfão · In Portuguese',
          defaultOpen: true,
          columns: 1,
          summary:
            'Academic Curricular Internship Report ("Relatório de Estágio Curricular: Legendagem em Teletexto e Adaptação de Conteúdos") completed at Rádio e Televisão de Portugal (RTP) within Gabinete Multimédia (Aug 17 – Dec 29, 2006, delivered Jan 29, 2007) for the 5-year Licenciatura in Translation (Interpreter Branch) at ESTG, Instituto Politécnico de Leiria (Student No. 10820). Co-supervised by RTP enterprise mentor Dra. Noélia do Rosário Leal Macedo and ESTG academic supervisor Prof. Paula Rosa dos Santos Órfão. Language Disclaimer: This report is in Portuguese (PT) only, reflecting that this academic internship was conducted in Portugal for a Portuguese national enterprise.',
          links: [
            {
              label: 'Google Docs: Relatório de Estágio Curricular (RTP · In Portuguese)',
              url: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
              kind: 'document',
            },
          ],
          snapshots: [
            {
              marketTag: 'RTP INTERNSHIP REPORT · COVER PAGE · PT ONLY',
              title: 'Relatório de Estágio Curricular: Legendagem em Teletexto e Adaptação de Conteúdos',
              caption:
                'Official cover page of the 2006 Curricular Internship Report submitted to ESTG - Instituto Politécnico de Leiria under RTP enterprise supervisor Dra. Noélia do Rosário Leal Macedo and academic supervisor Prof. Paula dos Santos Órfão (document in Portuguese only).',
              src: '/evidence/rtp-internship-report-cover.png',
              image: '/evidence/rtp-internship-report-cover.png',
              url: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
              link: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
              linkLabel: 'View Google Doc (PT)',
              expandLabel: 'Inspect report cover',
              primaryLabel: 'Curricular Internship Report · RTP Gabinete Multimédia (In Portuguese)',
              fit: 'contain',
              note: 'Full 2.8 MB primary source document archived in Google Docs, detailing teletext subtitling methodologies, ITC/BBC accessibility benchmarks, and RTP broadcast workflow operations. Document is in Portuguese only, reflecting that this role was conducted in Portugal for Portugal’s national public broadcaster.',
            },
          ],
        },
        {
          id: 'rtp-workflow-standards',
          title: '2. Subtitling Architecture, ITC/BBC Standards & Transmission Governance',
          badge: 'SDH Page 188 · 1,100+ Hours/Year · 6 Genres',
          defaultOpen: false,
          columns: 1,
          summary:
            'Comprehensive operational framework documented in the report: (1) SDH Accessibility: Governed broadcast subtitling serving deaf and hard-of-hearing viewers across Portugal via Teletext Page 188, delivering over 1,100 hours per year of accessible programming. (2) Standards Formulation: Established normative subtitling guidelines for RTP Gabinete Multimédia based on UK Independent Television Commission (ITC) and BBC conventions, regulating high-contrast character colors, line balancing without word splits, and acoustic description boxes for off-screen speech and sound effects. (3) Transmission Modes: Controlled live, manual, and automated broadcast transmission pipelines across 6 programming genres (Documentários, Séries, Telenovelas, Entretenimento, Infantil e Juvenil, and Magazines) alongside EPG production records.',
          links: [
            {
              label: 'Google Docs: Full Report Document (2.8 MB · In Portuguese)',
              url: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
              kind: 'document',
            },
            {
              label: 'RTP Acessibilidades: Teletexto Versão Texto (Portal Oficial)',
              url: 'https://acessibilidades.rtp.pt/teletexto-versao-texto/',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'RTP ACESSIBILIDADES · TELETEXTO VERSÃO TEXTO',
              src: '/evidence/rtp-teletexto-acessibilidades.png',
              alt: 'RTP Acessibilidades Teletexto versão texto portal showing accessible teletext interface and index',
              caption: 'RTP Acessibilidades · Teletexto Versão Texto & Índice Digital',
              linkLabel: 'Portal RTP Acessibilidades',
              url: 'https://acessibilidades.rtp.pt/teletexto-versao-texto/',
              fit: 'contain',
              expandLabel: 'Inspect RTP Teletext Accessibility Portal',
              note: 'Accessible web interface of RTP Teletexto (acessibilidades.rtp.pt) illustrating text-mode teletext designed for screen readers and assistive technology, alongside the digital broadcast index (RTP Acessibilidades Page 190 and SDH subtitling workflows).',
            },
          ],
        },
      ],
      snapshots: [
        {
          marketTag: 'RTP INTERNSHIP REPORT · COVER PAGE · PT ONLY',
          title: 'Relatório de Estágio Curricular: Legendagem em Teletexto e Adaptação de Conteúdos',
          caption:
            'Official cover page of the 2006 Curricular Internship Report submitted to ESTG - Instituto Politécnico de Leiria under RTP enterprise supervisor Dra. Noélia do Rosário Leal Macedo and academic supervisor Prof. Paula dos Santos Órfão (document in Portuguese only).',
          src: '/evidence/rtp-internship-report-cover.png',
          image: '/evidence/rtp-internship-report-cover.png',
          url: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
          link: 'https://docs.google.com/document/d/10oJIFpEdZRgAP0cVpRKtAgGVYjNEqs2n/edit',
          linkLabel: 'View Google Doc',
          expandLabel: 'Inspect report cover',
          primaryLabel: 'Curricular Internship Report · RTP Gabinete Multimédia',
          fit: 'contain',
          note: 'Full 2.8 MB primary source document archived in Google Docs, detailing teletext subtitling methodologies, ITC/BBC accessibility benchmarks, and RTP broadcast workflow operations.',
        },
        {
          marketTag: 'RTP ACESSIBILIDADES · TELETEXTO VERSÃO TEXTO',
          src: '/evidence/rtp-teletexto-acessibilidades.png',
          alt: 'RTP Acessibilidades Teletexto versão texto portal showing accessible teletext interface and index',
          caption: 'RTP Acessibilidades · Teletexto Versão Texto & Índice Digital',
          fit: 'contain',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'eu-dgt',
    type: 'internship',
    era: 'early-eu',
    chipLabel: 'EU DGT 🎓',
    subLabel: 'Sep 2006 · Internship',
    company: 'European Commission - EU Directorate-General for Translation (Brussels, Belgium)',
    countryFlag: '🇧🇪',
    location: 'Brussels, Belgium',
    monogram: 'DGT',
    logo: '/company-logos/eu-dgt.svg',
    title: 'EU Terminology Traineeship / Internship (Brussels)',
    officialTitle: 'EU Terminology Trainee (Brussels)',
    dutiesBeyondScope:
      'Managed institutional terminology research, validation, and multilingual alignment inside the EU IATE database across official EU workflows.',
    period: 'Sep 2006 (Academic Internship)',
    startYear: 2006,
    endYear: 2006,
    pillars: ['program', 'education'],
    executionSummary: {
      heading: 'Program Arc: Multilingual Institutional Terminology Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Intensive one-month institutional terminology traineeship at the European Commission in Brussels (Sep 2006), conducted during the final-year academic practicum window alongside the RTP broadcast internship.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Contributed to multilingual terminology records in IATE during the EU Directorate-General for Translation traineeship in Brussels alongside final degree coursework.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Applied strict terminology standardization and cross-language consistency within institutional translation processes.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Maintained multilingual IATE terminology records during the September 2006 Brussels traineeship.',
        },
      ],
    },
    metrics: [
      {
        value: '6M+ Terms*',
        label: 'IATE EU inter-institutional terminology database governed',
        kind: 'scale',
        hint: 'Live IATE platform scale (iate.europa.eu)',
        evidenceId: 'dgt-01',
      },
      {
        value: '24 Official Langs*',
        label: 'Official EU multilingual research & alignment workflows',
        kind: 'velocity',
        hint: 'Official EU language coverage across Directorate-General workflows',
        evidenceId: 'dgt-02',
      },
      {
        value: 'Institutional QA*',
        label: 'Directorate-General for Translation terminology standards',
        kind: 'quality',
        hint: 'Directorate-General for Translation terminology compliance',
        evidenceId: 'dgt-03',
      },
    ],
    metricsFootnote:
      '*Institutional Metrics Disclaimer: Database volume (6M+ terms across 24 official EU languages) reflects live IATE (Inter-Active Terminology for Europe) platform metrics managed by the Directorate-General for Translation (DGT) and European Union institutions (iate.europa.eu). Traineeship was completed in Brussels during final ESTG degree studies (Sep 2006).',
    highlights: [
      'Completed institutional terminology research, content updates, and multilingual validation within the official EU IATE terminology database in Brussels.',
      'Collaborated across European Union Directorate-General for Translation (DGT) workflows, supporting institutional linguistic alignment across official European languages.',
    ],
    evidence: {
      note: 'Archive Note: ESTG Year 5 academic coursework records document the Sep 2006 EU DGT terminology traineeship in Brussels. Preserved alongside the official IATE European Union terminology portal and Brussels throwback archives.',
      links: [
        {
          label: 'IATE Live European Union Terminology Database (iate.europa.eu)',
          url: 'https://iate.europa.eu/',
          kind: 'external',
        },
        {
          label: 'LinkedIn Post & Carla Gaspar Comment (Apr 2021)',
          url: 'https://www.linkedin.com/feed/update/urn:li:share:6783835458033061888/',
          kind: 'external',
        },
      ],
      snapshots: [
        {
          marketTag: 'Brussels Throwback · LinkedIn Archive · Scroll',
          src: '/evidence/eu-dgt-brussels-visitor-photo.png',
          alt: '2006 Brussels throwback photo shared by Carla Gaspar showing Mara and Carla wearing European Commission Visitor badges on public transit',
          caption:
            '2006 Brussels throwback photo and Apr 3, 2021 LinkedIn comment archived locally (1280x960 original and comment card). Both white badges show the EU flag, "Commission Europeenne", and blue "V" (Visitor).',
          linkLabel: 'Throwback Photo',
          expandLabel: 'Inspect Brussels archive & comment',
          primaryLabel: 'Brussels Archive · Original Photo (2006) & Comment (2021)',
          scrollAriaLabel: 'Scroll horizontally to inspect the 2006 Brussels photo and 2021 LinkedIn comment screenshot',
          fit: 'contain',
          url: 'https://www.linkedin.com/feed/update/urn:li:share:6783835458033061888/',
          note: 'Archived locally at full 1280x960 resolution alongside Carla Gaspar’s Apr 3, 2021 LinkedIn comment so the record remains permanent even if LinkedIn content changes.',
          extraSlides: [
            {
              src: '/evidence/eu-dgt-carla-linkedin-comment.png',
              linkLabel: 'LinkedIn Comment',
              alt: 'Screenshot of Carla Gaspar’s Apr 3, 2021 LinkedIn comment sharing the 2006 Brussels throwback photo',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'sony-pt',
    type: 'role',
    era: 'early-eu',
    chipLabel: 'Sony PT',
    subLabel: 'Jan–Jul 2007',
    company: 'Sony Portugal (Lisbon, Portugal)',
    countryFlag: '🇵🇹',
    location: 'Lisbon, Portugal',
    monogram: 'SPT',
    logo: '/company-logos/sony.svg',
    title: 'Translator & International Project Manager',
    officialTitle: 'Translator & International Project Manager',
    dutiesBeyondScope:
      'Led on-site change management facilitation, bilingual workflow diagram modeling, and 39 training events across broadcast systems for RTP.',
    period: 'Jan 2007 – Jul 2007',
    startYear: 2007,
    endYear: 2007,
    pillars: ['program'],
    summary:
      'Led bilingual change management and systems training across 39 enterprise sessions, bridging UK consultants and broadcast engineering teams at Portugal\'s national broadcaster.',
    executionSummary: {
      heading: 'Program Arc: Broadcast Transformation & Change Management Delivery',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Digital broadcast transformation at RTP (Blue Order DAM, Omnibus, Petasite/DivArchive) faced language and cultural adoption friction when international UK consultants delivered sessions solely in English.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Created bilingual (EN/PT) broadcast workflow diagrams mapping legacy tape workflows to digital processes and led 39 change management and software training sessions across 226+ delegate engagements.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Bridged UK technical consultants, Sony Portugal, and RTP\'s internal broadcast teams (live sports, newsroom editing, and foreign film acquisition) so adoption moved forward without stalling on language barriers.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Delivered 39 enterprise change management and training workshops across 3 integrated digital broadcast systems, earning formal citation in Sony\'s final report (Ref: SP1207/SP1236/SP5562) for decisive impact on adoption (alongside a 12,000-hour parallel Sony PetaSite archive capacity benchmark at SIC).',
        },
      ],
    },
    metrics: [
      {
        value: '39 events',
        label: 'Enterprise change management & training workshops',
        kind: 'scale',
        placeholder: false,
        hint: 'Source: Sony Portugal / RTP Final Report (Ref: SP1207/SP1236/SP5562)',
        evidenceId: 'spt-01',
      },
      {
        value: '3 systems',
        label: 'Digital broadcast systems integrated (DAM, Transmission, Archive)',
        kind: 'velocity',
        placeholder: false,
        hint: 'Source: Sony Portugal / RTP Final Report (Blue Order DAM, Omnibus, Petasite)',
        evidenceId: 'spt-02',
      },
      {
        value: '12,000 hrs*',
        label: 'Benchmark broadcast scale capacity (Sony PetaSite at SIC)',
        kind: 'quality',
        placeholder: false,
        hint: '*Market scale context: Sony PetaSite scaled 12,000 hrs capacity at SIC; while there is no public data released for RTP, both shared Sony’s scalable digital architecture',
        evidenceId: 'spt-03',
      },
    ],
    highlights: [
      'Recruited by Sony Portugal to overcome critical language and cultural adoption barriers during the digital transformation of Portugal’s national broadcaster (RTP), stepping in when international UK consultants faced resistance conducting sessions solely in English.',
      'Authored and localized bilingual (English and Portuguese) broadcast workflow diagrams mapping legacy tape-based practices to automated digital workflows for live outside broadcast (OB) sports, newsroom editing packages, and foreign film acquisition.',
      'Facilitated 39 change management and software training sessions across 226+ delegate engagements, earning formal recognition in Sony’s final project report: "O conhecimento da tradutora, Mara Martins, foi preponderante no Processo de Gestão de Mudança."',
      'Collaborated across Sony’s enterprise broadcast portfolio in Portugal, where Sony’s automated PetaSite digital archive scaled 12,000 hours of media capacity for broadcaster SIC; whilst there is no public capacity data released for RTP, the RTP deployment was engineered on the same architecture for massive broadcast scale.',
    ],
    evidence: {
      note: 'Primary Source: Sony Portugal (SPT) & RTP Final Project Report ("Projecto de Gestão de Mudança - Relatório Final de Projecto", Ref: SP1207/SP1236/SP5562, May 2007). Language Disclaimer: While workflow diagrams and training materials were produced bilingually (English & Portuguese), the final client project report is in Portuguese (PT) only, reflecting that this project was delivered in Lisbon for Portugal’s national public broadcaster. The report formally records Mara Martins’s decisive impact: "O conhecimento da tradutora, Mara Martins, foi preponderante no Processo de Gestão de Mudança uma vez que detinha conhecimento prévio acerca de muitas das questões relacionadas com o funcionamento interno da RTP." *Market Scale Note: In parallel Portuguese deployments in 2007, Sony’s automated PetaSite archive scaled 12,000 hours of media capacity at SIC; whilst no public capacity data was released for RTP, the RTP deployment was built on this same architecture for high-volume broadcast scale.',
      links: [
        {
          label: 'Google Docs: Sony Portugal · RTP Change Management Final Report (May 2007 · In Portuguese)',
          url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
          kind: 'document',
        },
      ],
      sections: [
        {
          id: 'spt-rtp-change-management',
          title: '1. Enterprise Broadcast Digital Transformation · Sony Portugal & RTP (Ref: SP1207/SP1236/SP5562)',
          badge: 'Sony Portugal · RTP · Blue Order DAM · Omnibus · Petasite',
          defaultOpen: true,
          columns: 2,
          summary:
            'Final project report for the Digital Content Management (SP1207), Transmission (SP1236), and Production Facilities (SP5562) enterprise change management program executed by Sony Portugal at RTP headquarters in Lisbon (Nov 2006 – Jun 2007). Hired by Sony to bridge the operational and linguistic divide when UK consultants encountered resistance delivering sessions exclusively in English. The official report confirms that Mara’s on-site translation, bilingual diagram localization, and prior knowledge of RTP’s internal broadcast operations were decisive ("preponderante") in driving organizational adoption.',
          links: [
            {
              label: 'Google Docs: Change Management Final Report (Doc 380 KB)',
              url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              kind: 'document',
            },
          ],
          snapshots: [
            {
              marketTag: 'OFFICIAL PROJECT REPORT · FORMAL CITATION',
              title: 'Relatório Final de Projecto: Projecto de Gestão de Mudança (SPT & RTP)',
              caption:
                'Executive citation from pages 2–3 of the official Sony Portugal report recognizing Mara Martins’s decisive role in solving communication barriers and facilitating broadcast change management.',
              src: '/evidence/sony-pt-rtp-change-management-report-citation.png',
              image: '/evidence/sony-pt-rtp-change-management-report-citation.png',
              url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              link: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              linkLabel: 'View Google Doc',
              expandLabel: 'Inspect executive citation',
              primaryLabel: 'Sony Portugal Project Report · Formal Recognition',
              fit: 'contain',
              note: 'Full 380 KB primary source document archived in Google Docs (Ref: SP1207/SP1236/SP5562, May 2007), detailing the 39 change management sessions, workflow diagrams, and delegate feedback.',
            },
            {
              marketTag: 'TRAINING & WORKSHOP ROADMAP · SONY & RTP',
              title: 'Figure 1: Change Management & Training Sessions Roadmap',
              caption:
                'Training delivery schedule and progress roadmap for Blue Order DAM, Omnibus Transmission, and Petasite/DivArchive system workshops conducted across RTP Lisbon facilities.',
              src: '/evidence/sony-pt-rtp-change-management-roadmap.png',
              image: '/evidence/sony-pt-rtp-change-management-roadmap.png',
              url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              link: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              linkLabel: 'View Google Doc',
              expandLabel: 'Inspect training roadmap',
              primaryLabel: 'Change Management Roadmap · Figure 1',
              fit: 'contain',
              note: 'Embedded Excel roadmap from the official report mapping the completion of 39 change management events across RTP production and transmission teams.',
            },
          ],
        },
        {
          id: 'spt-workflow-sessions',
          title: '2. Workshop Facilitation, Training Delivery & Workflow Modeling Scope',
          badge: '39 Sessions · 226+ Delegates · Bilingual EN/PT Workflows',
          defaultOpen: false,
          summary:
            'Facilitated and interpreted across 39 change management and training events: (1) System Presentations: 23 sessions reaching 121 DAM delegates, 55 Transmission delegates, and 50 Production delegates. (2) Workflow Modeling: 8 three-hour workshops mapping legacy vs. target broadcast workflows across newsroom packages, live outside broadcast (OB) sports coverage, and foreign film acquisition. (3) System Training: Software training programs covering the Blue Order digital archive, Omnibus transmission automation, and Petasite/DivArchive digital tape library storage.',
          links: [
            {
              label: 'Google Docs: Full Report Document',
              url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
              kind: 'document',
            },
          ],
        },
        {
          id: 'spt-market-scale-benchmark',
          title: '3. Portuguese Broadcast Market Scale · Sony PetaSite 12,000-Hour Benchmark (SIC)',
          badge: 'Broadcast Scale Benchmark · 12,000 Hours Media · Sony PetaSite',
          defaultOpen: false,
          summary:
            'Market Scale Context: In 2007, Sony Portugal implemented its automated PetaSite broadcast archiving solution for commercial television broadcaster SIC (Sociedade Independente de Comunicação), scaling digital capacity by 12,000 hours of news and program material with automated tape robotics and desktop proxy preview. Whilst there is no public capacity data released for state broadcaster RTP (as Portugal’s public broadcaster under internal operational privacy), the joint Sony / Ibertelco digital transformation at RTP (SP1207 Blue Order DAM, SP1236 Omnibus Transmission, SP5562 Petasite/DivArchive) was architected on this identical enterprise technology stack to achieve multi-thousand-hour broadcast scale.',
          links: [
            {
              label: 'Sony Professional Broadcast Archiving Architecture (PetaSite)',
              url: 'https://pro.sony',
              kind: 'external',
            },
          ],
        },
      ],
      snapshots: [
        {
          marketTag: 'OFFICIAL PROJECT REPORT · FORMAL CITATION',
          title: 'Relatório Final de Projecto: Projecto de Gestão de Mudança (SPT & RTP)',
          caption:
            'Executive citation from pages 2–3 of the official Sony Portugal report recognizing Mara Martins’s decisive role in solving communication barriers and facilitating broadcast change management.',
          src: '/evidence/sony-pt-rtp-change-management-report-citation.png',
          image: '/evidence/sony-pt-rtp-change-management-report-citation.png',
          url: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
          link: 'https://docs.google.com/document/d/1hxbMpUb5VwsPuU5NfJKtzbkT-z205_Eo/edit',
          linkLabel: 'View Google Doc',
          expandLabel: 'Inspect executive citation',
          primaryLabel: 'Sony Portugal Project Report · Formal Recognition',
          fit: 'contain',
          note: 'Full 380 KB primary source document archived in Google Docs (Ref: SP1207/SP1236/SP5562, May 2007), detailing the 39 change management sessions, workflow diagrams, and delegate feedback.',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'relocation-pt-uk',
    type: 'break',
    era: 'early-eu',
    chipLabel: 'PT - UK Relocation',
    subLabel: 'Aug 2007',
    company: 'International Relocation',
    countryFlag: '🇵🇹→🇬🇧',
    location: 'Lisbon, PT to Basingstoke, UK',
    monogram: '✈',
    title: 'Portugal to United Kingdom Relocation & Onboarding Transition · Aug 2007',
    period: 'Jul 2007 – Aug 2007',
    startYear: 2007,
    endYear: 2007,
    pillars: ['leadership'],
    summary:
      'One-month transition and relocation window (Aug 2007) bridging Sony Portugal and Sony UK with zero employment gap, supporting European & Iberia product operations.',
    executionSummary: {
      heading: 'Program Arc: Cross-Border Internal Transfer & Operational Continuity',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Transitioning from Portugal to the UK required coordinating an international transfer and supporting European and Iberia operations without disrupting active work.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Executed an internal transfer from Sony Portugal (Jul 2007) to Sony UK (Aug 2007) to support European and Iberia product operations.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Managed cross-border relocation logistics and regional handoffs while keeping operational transition downtime to zero.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Completed the Lisbon-to-Basingstoke transfer with zero employment gap and seamless continuity into Sony UK.',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'sony-uk',
    type: 'role',
    era: 'uk',
    chipLabel: 'Sony UK',
    subLabel: '2007–2009',
    company: 'Sony (UK)',
    countryFlag: '🇬🇧',
    location: 'Basingstoke, United Kingdom',
    monogram: 'SN',
    logo: '/company-logos/sony.svg',
    title: 'Prime-Vox Display Coordinator & Iberia Support',
    officialTitle: 'Prime-Vox Display Coordinator & Iberia Support',
    dutiesBeyondScope:
      'Coordinated pan-European product operations, technical documentation, and multimedia localization across European and Iberia markets.',
    period: 'Aug 2007 – Dec 2009',
    startYear: 2007,
    endYear: 2009,
    pillars: ['program', 'leadership'],
    executionSummary: {
      heading: 'Program Arc: International B2B/B2C Display & Localization Coordination',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Coordinating B2B and B2C product rollouts, technical documentation, and localization across Iberia and Europe required alignment across regional languages and engineering/studio stakeholders.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Coordinated display rollouts, technical assets, pan-European localization engineering, and multimedia dubbing/voiceover studios across 30+ European and global territories with dedicated commercial support for Spain and Portugal (EN, ES, PT).',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Balanced regional commercial support needs in Iberia and multi-language requirements against engineering, studio, and display rollout schedules across territories.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Supported B2B/B2C display and localization execution across 30+ territories and 3 core languages (EN, ES, PT) from Basingstoke.',
        },
      ],
    },
    metrics: [
      {
        value: '3 Languages',
        label: 'English, Spanish and Portuguese technical delivery quality',
        kind: 'scale',
        hint: 'Source: CV · Trilingual training & product implementation',
        evidenceId: 'sny-01',
      },
      {
        value: 'B2B & B2C',
        label: 'Prime-vox display coordination & customer operations',
        kind: 'velocity',
        hint: 'Source: Sony UK display coordination & support scope',
        evidenceId: 'sny-02',
      },
      {
        value: 'Iberia Market',
        label: 'Dedicated commercial customer support for Spain & Portugal',
        kind: 'quality',
        hint: 'Source: Sony UK customer operations for Iberia',
        evidenceId: 'sny-03',
      },
    ],
    highlights: [
      'Acted as operational bridge between UK engineering teams, training leads, and European regional stakeholders across B2B and B2C channels.',
      'Coordinated Prime-vox display deployments, customer readiness, and multilingual technical asset delivery across English, Spanish, and Portuguese.',
    ],
  },
  {
    id: 'hogarth-uk',
    type: 'role',
    era: 'uk',
    chipLabel: 'Hogarth UK',
    subLabel: '2010–2014',
    company: 'Hogarth Worldwide (London, United Kingdom)',
    countryFlag: '🇬🇧',
    location: 'London, United Kingdom',
    monogram: 'HW',
    logo: '/company-logos/hogarth.svg',
    title: 'Transcreation Program Manager',
    officialTitle: 'Senior Transcreation Account Manager',
    dutiesBeyondScope:
      'Led global account delivery, commercial client governance (MBAs and QBRs), and cross-discipline teams across Print, SEO, Video Studios, and TV Licensing.',
    period: 'Jan 2010 – Mar 2014',
    startYear: 2010,
    endYear: 2014,
    pillars: ['program', 'leadership'],
    executionSummary: {
      heading: 'Program Arc: Global Account Delivery & Multi-Discipline Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Multi-market transcreation and campaign delivery across 30+ global markets and multiple production disciplines (Print, SEO, Video Studios, TV Licensing, including HTC) required tight account and delivery governance.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Managed 10+ in-house specialists and multi-market delivery pipelines while running client MBAs and QBRs across UK/EU and global campaigns.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Coordinated specialist production teams (Print, SEO, Video Studios, TV Licensing) and client expectations across 30+ markets and recurring quarterly/annual business reviews.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Earned promotion within 12 months (from Transcreation Account Manager in Jan 2010 to Senior Transcreation Account Manager in Jan 2011) while leading 10+ specialists across 30+ global markets.',
        },
      ],
    },
    metrics: [
      {
        value: '30+ mkts',
        label: 'Global markets & enterprise accounts delivered',
        kind: 'scale',
        placeholder: false,
        hint: 'Source: CV & enterprise account scope across Europe and worldwide',
        evidenceId: 'hw-01',
      },
      {
        value: '10+ team',
        label: 'In-house specialists & cross-functional delivery team',
        kind: 'velocity',
        placeholder: false,
        hint: 'Promoted from Account Manager to Senior Manager within 12 months; established multi-market delivery hub',
        evidenceId: 'hw-02',
      },
      {
        value: 'Digital, Print, ATL',
        label: 'Multi-channel brand campaigns (incl. HTC Global Change)',
        kind: 'quality',
        placeholder: false,
        hint: 'Source: WPP Group 171 Worldwide global brand platform release (Aug 2013)',
        evidenceId: 'hw-03',
      },
    ],
    highlights: [
      'Promoted from Transcreation Account Manager (Jan 2010) to Senior Transcreation Account Manager (Jan 2011), establishing and leading in-house delivery teams across key European and global markets (FR, BE, ES, PT, NL).',
      'Managed multiple enterprise client accounts, leading cross-functional launch delivery across digital and print by partnering internally with Hogarth\'s Print production, SEO, Video Studios, VO recording, and Music & TV Licensing departments.',
      'Directed client commercial governance, Master Services Agreements (MSAs/MBAs), Quarterly Business Reviews (QBRs), and end-to-end team process management, partnering with WPP agency 171 Worldwide to deliver HTC’s multi-million dollar "Change" brand platform and flagship HTC One (M7 & M8) smartphone rollouts worldwide.',
    ],
    placeholder: false,
    evidence: {
      note: 'Archive Note: Global client account launches and WPP agency network execution records are corroborated below via official press releases, archival records, and verified campaign documentation.',
      sections: [
        {
          id: 'htc-global-brand',
          title: '1. Global Client Account Launches · Enterprise Client Execution (HTC Account)',
          badge: 'WPP Group · 171 Worldwide · Digital & Print Multi-Department Execution',
          defaultOpen: true,
          columns: 3,
          summary:
            'Managed multiple enterprise client accounts for major international rollouts at Hogarth Worldwide (WPP Group), using the global HTC account as a primary example of end-to-end execution. Led the dedicated multi-market delivery team coordinating global product and brand launches across digital and print by cross-collaborating internally with Hogarth\'s Print production, SEO, Video Studios, voiceover (VO) recording, and Music & TV Licensing departments. Owned client commercial governance, Master Services/Business Agreements (MBAs), Quarterly Business Reviews (QBRs), and end-to-end team process management to successfully launch products worldwide, including HTC’s multi-million dollar "Change" global brand platform (fronted by Robert Downey Jr.) and international hardware rollouts for the flagship HTC One (M7) and HTC One (M8).',
          links: [
            {
              label: 'Official HTC Newsroom: "Change" Brand Platform Release (Aug 12, 2013)',
              url: 'https://www.htc.com/us/newsroom/2013-08-12/',
              kind: 'external',
            },
            {
              label: 'HTC Newsroom Archive (Wayback Machine)',
              url: 'https://web.archive.org/web/20130815042654/http://www.htc.com/us/newsroom/2013-08-12/',
              kind: 'archive',
            },
            {
              label: 'Official HTC Newsroom: HTC One (M7) Unveil Across 80+ Countries (Feb 19, 2013)',
              url: 'https://www.htc.com/us/newsroom/2013-02-19/',
              kind: 'external',
            },
            {
              label: 'Trusted Reviews: HTC One (M7) Full HD Display & UltraPixel Launch',
              url: 'https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634',
              kind: 'external',
            },
            {
              label: 'Official HTC Newsroom: HTC One (M8) Launch Across 100 Countries (Mar 25, 2014)',
              url: 'https://www.htc.com/us/newsroom/2014-03-25/',
              kind: 'external',
            },
            {
              label: 'ExtremeTech: HTC One (M8) Duo Camera & Aluminum Unibody Reveal (Mar 2014)',
              url: 'https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'GLOBAL BRAND PLATFORM · AUG 2013',
              title: 'HTC "Change" Brand Platform Launch (Aug 12, 2013)',
              caption:
                'Official announcement unveiling HTC’s global brand platform fronted by Robert Downey Jr., spanning digital, social, PR, and above the line (ATL) activity.',
              src: '/evidence/htc-wpp-brand-change-platform-1.jpg',
              image: '/evidence/htc-wpp-brand-change-platform-1.jpg',
              url: 'https://www.htc.com/us/newsroom/2013-08-12/',
              link: 'https://www.htc.com/us/newsroom/2013-08-12/',
              linkLabel: 'HTC Press Release',
              slideBg: 'white',
              note: 'Official HTC press release documenting the global brand platform rollout across digital, online, and print media.',
            },
            {
              marketTag: 'WPP AGENCY NETWORK · 171 WORLDWIDE',
              title: 'WPP Group (171 Worldwide) Agency Appointment & Media Mix',
              caption:
                'Official release detailing WPP Group agency 171 Worldwide leading global creative direction, with execution spanning cinema, online, digital, and print media.',
              src: '/evidence/htc-wpp-brand-change-platform-2.jpg',
              image: '/evidence/htc-wpp-brand-change-platform-2.jpg',
              url: 'https://www.htc.com/us/newsroom/2013-08-12/',
              link: 'https://www.htc.com/us/newsroom/2013-08-12/',
              linkLabel: 'WPP 171 Worldwide Callout',
              slideBg: 'white',
              note: 'Verifies WPP Group as the global agency lead and specifies the multi-channel media mix managed by the execution delivery team.',
            },
            {
              marketTag: 'FLAGSHIP HARDWARE · 80+ COUNTRIES',
              title: 'HTC One (M7) Glacial Silver Aluminum Hardware (Feb 2013)',
              caption:
                'Flagship smartphone hardware reveal featuring precision zero-gap aluminum unibody, 4.7-inch Full HD 1080p display (468 ppi), and dual front stereo speakers.',
              src: '/evidence/htc-one-m7-silver-hardware.png',
              image: '/evidence/htc-one-m7-silver-hardware.png',
              url: 'https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634',
              link: 'https://www.trustedreviews.com/news/htc-one-announced-with-4-7-inch-full-hd-display-and-ultrapixel-camera-2910634',
              linkLabel: 'Trusted Reviews Coverage',
              slideBg: 'white',
              fit: 'contain',
              note: 'Unveiled simultaneously in London and New York, reaching 185 operators across 80+ countries and selling ~5M units in its first two months.',
              extraSlides: [
                {
                  src: '/evidence/htc-one-m7-diagonal-hardware.jpg',
                  linkLabel: 'Diagonal Unibody View',
                  alt: 'High-resolution diagonal view of HTC One aluminum unibody and display',
                },
                {
                  src: '/evidence/htc-one-m7-black-hardware.png',
                  linkLabel: 'Stealth Black Edition',
                  alt: 'HTC One M7 in Stealth Black aluminum finish',
                },
              ],
            },
            {
              marketTag: 'SOFTWARE & SENSE 5 UI · BLINKFEED',
              title: 'HTC Sense 5 UI & Localized BlinkFeed Architecture',
              caption:
                'HTC Sense 5 home screen UI featuring BlinkFeed live tile content streaming, weather-clock widget, and customized multi-language app layouts.',
              src: '/evidence/htc-one-m7-sense-ui.png',
              image: '/evidence/htc-one-m7-sense-ui.png',
              url: 'https://www.htc.com/us/newsroom/2013-02-19/',
              link: 'https://www.htc.com/us/newsroom/2013-02-19/',
              linkLabel: 'Sense 5 Architecture',
              fit: 'contain',
              note: 'Sense 5 introduced BlinkFeed, an integrated live tile news aggregator customized and localized across global media partners, languages, and regional carriers.',
            },
            {
              marketTag: 'JAPAN & ASIA-PACIFIC EXPANSION · MAY 2013',
              title: 'HTC J One (HTL22) Japan Carrier Edition (KDDI)',
              caption:
                'Localized Japanese carrier hardware edition for KDDI (au) featuring custom regional casing, FeliCa contactless support, and Japanese retail collateral.',
              src: '/evidence/htc-one-japan-htl22.jpg',
              image: '/evidence/htc-one-japan-htl22.jpg',
              url: 'https://ja.wikipedia.org/wiki/HTL22',
              link: 'https://ja.wikipedia.org/wiki/HTL22',
              linkLabel: 'Japanese Market Release',
              fit: 'contain',
              note: 'Documents regionalized hardware and packaging execution for the Japanese market launched with KDDI in May 2013.',
            },
            {
              marketTag: 'GLOBAL SUCCESSOR · 100 COUNTRIES · 230 CARRIERS',
              title: 'HTC One (M8) Flagship Launch & Duo Camera Optics (Mar 2014)',
              caption:
                'Global release of the HTC One (M8) across 230 carriers in 100 countries, introducing brushed aluminum casing and Duo Camera depth-sensing hardware.',
              src: '/evidence/htc-one-m8-hardware.jpg',
              image: '/evidence/htc-one-m8-hardware.jpg',
              url: 'https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody',
              link: 'https://www.extremetech.com/mobile/179137-htc-one-m8-revealed-snapdragon-801-duo-camera-5-inch-screen-aluminum-unibody',
              linkLabel: 'ExtremeTech Technical Review',
              fit: 'contain',
              note: 'Launched on March 25, 2014, marking the culmination of Mara’s Hogarth tenure with same-day global retail availability across 100 countries.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'relocation',
    type: 'break',
    era: 'foundations',
    chipLabel: 'UK - USA Relocation',
    subLabel: 'Mar–Oct 2014',
    company: 'International Relocation',
    countryFlag: '🇬🇧→🇺🇸',
    location: 'London, UK to Silicon Valley, USA',
    monogram: '✈',
    title: 'Transatlantic Relocation & US Technology Market Entry · Mar–Oct 2014',
    period: 'Mar 2014 – Oct 2014',
    startYear: 2014,
    endYear: 2014,
    pillars: ['leadership'],
    summary:
      'Seven-month transition window following Hogarth (Mar 2014): arrived in Silicon Valley in March 2014, received US work authorization in May 2014, and onboarded at AppleCare in October 2014.',
    executionSummary: {
      heading: 'Program Arc: Transatlantic Career Transition & US Market Entry',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Moving from London to Silicon Valley after Hogarth (Mar 2014) involved cross-continental transition, work-authorization dependencies, and entering the US technology market.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Coordinated relocation arrival in March 2014, work authorization issued in May 2014, and entry into the US role at Apple in October 2014.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Navigated immigration/work-authorization timelines and market transition before resuming full-time program execution in Cupertino.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Completed the UK-to-US transition between March and October 2014, establishing a Silicon Valley base for subsequent enterprise roles.',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'apple-2014',
    type: 'role',
    era: 'tech',
    chipLabel: 'Apple',
    subLabel: '2014–2015',
    company: 'Apple',
    countryFlag: '🇺🇸',
    location: 'Cupertino, CA, USA',
    monogram: 'AP',
    logo: '/company-logos/apple.svg',
    title: 'Apple · Localization Project Manager (AppleCare Team · 2014–2015)',
    officialTitle: 'Localization Project Manager (AppleCare Team)',
    dutiesBeyondScope:
      'Led cross-functional engineering, QA, and supplier release triage in Radar under strict Apple non-disclosure agreements.',
    period: 'Oct 2014 – Mar 2015',
    startYear: 2014,
    endYear: 2015,
    pillars: ['program', 'vendor'],
    executionSummary: {
      heading: 'Program Arc: AppleCare Localization Operations & Release Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Supporting launch-critical global releases for the AppleCare Team required executing within strict confidentiality boundaries, engineering release gates, and supplier SLA expectations.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Led cross-functional engineering, QA, and supplier release triage in Radar and coordinated AppleCare localization workflows and CAT file processing under NDA controls.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Maintained release-gate discipline and cross-team triage across engineering, QA, and vendors while safeguarding unannounced details and meeting SLA timelines.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Executed confidential AppleCare release triage and localization workflows in alignment with engineering gates, Radar SLAs, and strict NDA compliance.',
        },
      ],
    },
    metrics: [
      {
        value: 'Release Triage',
        label: 'AppleCare cross-functional release triage & gate governance',
        kind: 'scale',
        placeholder: false,
        hint: 'AppleCare product support releases delivered under strict corporate non-disclosure agreements',
        evidenceId: 'ap14-01',
      },
      {
        value: 'Radar SLA',
        label: 'Bug triage & release-gate velocity in Radar',
        kind: 'velocity',
        placeholder: false,
        hint: 'Radar triage turnaround maintained within strict release-gate SLAs',
        evidenceId: 'ap14-02',
      },
      {
        value: 'NDA Governance',
        label: 'Strict confidentiality & release compliance',
        kind: 'quality',
        placeholder: false,
        hint: 'Zero disclosure of unannounced products or internal hardware/software specifications',
        evidenceId: 'ap14-03',
      },
    ],
    highlights: [
      'Coordinated cross-functional AppleCare release workflows across engineering, QA, and external suppliers under Apple corporate non-disclosure agreements.',
      'Enforced NDA-safe asset handoffs for high-visibility hardware/software launches in Cupertino.',
      'Managed project scope, file processing in Apple CAT tools, vendor allocations, and Radar issue tracking.',
    ],
    evidence: {
      note: 'Corporate Confidentiality Note: Specific product names, unannounced internal tooling, and quantitative launch volumes remain strictly protected under Apple corporate non-disclosure agreements. Focuses written notes on cross-functional Radar triage, CAT file processing, vendor coordination, and NDA-safe handoffs in Cupertino.',
    },
    placeholder: false,
  },
  {
    id: 'infoblox',
    type: 'role',
    era: 'tech',
    chipLabel: 'Infoblox',
    subLabel: '2015–2016',
    company: 'Infoblox (via Acclaro)',
    countryFlag: '🇺🇸',
    location: 'Santa Clara, CA, USA',
    monogram: 'IB',
    logo: '/company-logos/infoblox.svg',
    title: 'Marketing Localization Project Manager',
    officialTitle: 'Marketing Localization Project Manager (via Acclaro)',
    dutiesBeyondScope:
      'Governed end-to-end globalization strategy, tiered LQA models, and CMS/TMS API automation across EMEA, LATAM, and APAC regions.',
    period: 'Mar 2015 – Mar 2016',
    startYear: 2015,
    endYear: 2016,
    pillars: ['program'],
    summary:
      'Directed global marketing localization strategy across 11 languages (EMEA, LATAM, APAC), architecting automated TMS/CMS API connectors across Drupal, Eloqua, and Git alongside tiered LQA governance.',
    executionSummary: {
      heading: 'Program Arc: Enterprise Localization Strategy & Systems Architecture',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Growing B2B cybersecurity marketing localization across 11 languages in EMEA, LATAM, and APAC required a unified strategy, clear service tiers, and connected web/marketing workflows to avoid fragmented manual handoffs.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Authored the Infoblox Localization Strategy (July 2015) defining a multi-tiered localization spectrum and Strategic LQA Model, backed by automated TMS and CMS API connector architecture across Drupal, Eloqua, and Git.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Tailored localization depth, review rigor, and budget allocation by content tier and regional demand rather than applying uniform heavy workflows to every asset.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Established a documented localization strategy, tiered LQA governance model, and integrated Drupal/Eloqua/Git workflow across 11 languages.',
        },
      ],
    },
    metrics: [
      {
        value: '11 Languages',
        label: 'Tiered localization spectrum (EMEA, LATAM & APAC)',
        kind: 'scale',
        hint: 'Source: Infoblox Localization Strategy (July 2015)',
        evidenceId: 'ib-01',
      },
      {
        value: 'Drupal · Eloqua · Git',
        label: 'Automated TMS & CMS API connector architecture',
        kind: 'velocity',
        hint: 'Source: Infoblox technology & project management evaluation',
        evidenceId: 'ib-02',
      },
      {
        value: 'Strategic LQA Model',
        label: 'Authored enterprise Localization Strategy & governance deck',
        kind: 'quality',
        hint: 'Source: Infoblox LQA Web process framework',
        evidenceId: 'ib-03',
      },
    ],
    highlights: [
      'Authored the official Infoblox Localization Strategy (July 2015), establishing a multi-tiered localization spectrum for 11 global languages across EMEA, LATAM, and APAC.',
      'Audited legacy translation workflows and designed automated API integration models connecting Drupal, Eloqua, Salesforce, and Git with modern Translation Management Systems.',
      'Engineered Linguistic Quality Assurance (LQA) and in-country review processes, reducing regional friction and accelerating demand-gen white paper delivery.',
    ],
    evidence: {
      note: 'Primary Source: Infoblox Localization Strategy presentation authored by Mara Martins (July 8, 2015). Features the strategy presentation cover and Slide 7 workflow architecture diagram, illustrating how content moved across Drupal, Eloqua, Git, and translation workflows across EMEA, LATAM, and APAC.',
      snapshots: [
        {
          marketTag: 'Infoblox Localization Strategy · July 8, 2015 · Mara Martins',
          src: '/evidence/infoblox-localization-strategy-cover.png',
          alt: 'Title slide of the Infoblox Localization Strategy presentation authored by Mara Martins, dated July 8, 2015',
          caption: 'Infoblox Localization Strategy presentation title slide authored by Mara Martins (July 8, 2015).',
          fit: 'contain',
          expandLabel: 'Inspect Infoblox Strategy Title Slide',
          note: 'Official executive presentation setting out the multi-tiered global localization roadmap, governance models, and vendor strategy.',
        },
        {
          marketTag: 'Translation Workflow Architecture · Slide 7',
          src: '/evidence/infoblox-translation-process-workflow.png',
          alt: 'Slide 7 of the Infoblox Localization Strategy showing the end-to-end translation process workflow diagram',
          caption: 'Infoblox translation process workflow map: auditing manual vs. automated handoffs between Web Engineering, Demand Gen, and in-country reviewers.',
          fit: 'contain',
          expandLabel: 'Inspect Workflow Architecture Map',
          note: 'Slide 7 Workflow Architecture: Illustrates how content flowed across Drupal, Eloqua, Git, and localization workflows across 11 languages in EMEA, LATAM, and APAC, eliminating fragmented manual handoffs.',
        },
      ],
    },
  },
  {
    id: 'microsoft',
    type: 'role',
    era: 'tech',
    chipLabel: 'Microsoft',
    subLabel: '2016–2020',
    company: 'Microsoft',
    countryFlag: '🇺🇸',
    location: 'Greater Seattle Area, WA, USA',
    monogram: 'MS',
    logo: '/company-logos/microsoft.svg',
    title: 'Senior Marcom Manager, Localization & Operations',
    officialTitle: 'Sr. Global Marcom Manager - Localization & Operations',
    dutiesBeyondScope:
      'Led cross-functional Center of Excellence initiatives spanning global storefront operations, automated ingestion pipelines, and multi-vendor agency governance across international storefronts.',
    period: 'Jun 2016 – Apr 2020',
    startYear: 2016,
    endYear: 2020,
    pillars: ['program', 'leadership', 'vendor', 'ai'],
    summary:
      'Drove Center of Excellence initiatives, global storefront operations, automated ingestion pipelines, and multi-vendor agency governance (15+ team) across 200 markets and 100 languages.',
    executionSummary: {
      heading: 'Program Arc: Center of Excellence, Storefront Operations & Seasonal GTM Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Coordinating global storefront go-to-market operations, localization workflows, and multi-vendor agency execution across 200 markets and 100 languages required clear standards amid complex seasonal schedules and cross-functional dependencies.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Drove Center of Excellence initiatives, storefront operational workflows, automated ingestion pipelines, and geopolitical/globalization readiness standards while governing a 15+ vendor/agency team.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Balanced global campaign consistency and release readiness with regional market requirements, vendor capacity, and cross-functional engineering/marketing timelines.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Delivered global storefront and seasonal GTM programs across 200 markets and 100 languages with disciplined vendor governance and repeatable cross-market execution.',
        },
      ],
    },
    metrics: [
      {
        value: '200 Mkts · 100 Langs',
        label: 'Global product offering & marcom localization',
        kind: 'scale',
        hint: 'Primary CV & verified records: 200 markets, 100 languages',
        evidenceId: 'ms-01',
      },
      {
        value: '15+ Vendor Team',
        label: 'Multi-vendor team talent & agency governance',
        kind: 'velocity',
        hint: 'Primary CV: Managed multi-vendor talent team of over 15 people',
        evidenceId: 'ms-02',
      },
      {
        value: 'Global Readiness',
        label: 'Geopolitical readiness & enterprise globalization standards',
        kind: 'quality',
        hint: 'Global Readiness Team Recognition · Microsoft Learn & Developer Inclusion Frameworks',
        evidenceId: 'ms-03',
      },
    ],
    highlights: [
      'Led end-to-end Center of Excellence program initiatives spanning global storefront operations, brand marketing, and regional execution across markets and languages, with specific examples detailed in the portfolio evidence below.',
      'Managed multi-vendor partner teams (15+ specialists across global agencies), governing multi-year agreements, budget allocations, and automated SLA quality metrics.',
      'Supported the Consumer Go-To-Market (GTM) strategy for Microsoft Stores, orchestrating Tier-1 seasonal campaigns, sim-ship vs phased launches, and cross-functional delivery.',
      'Championed strategic store initiatives: Xbox Store unified rebrand, Adobe enterprise migrations, Machine Translation pilots, and DAM geopolitical governance (detailed in evidence cards below).',
    ],
    evidence: {
      note: 'Archive & Public Evidence Note: Coordinated Center of Excellence program initiatives, storefront operations, and seasonal go-to-market execution across 200 markets and 100 languages. Governed a 15+ vendor/agency team alongside localization workflows, automated ingestion, and global readiness standards.\n\nNote on post-tenure coverage: Any reference or capture dated after April 2020 (such as the November 2022 Portugal Black Friday item) is included strictly as a later storefront reference outside the 2016–2020 role window; all hosted image and article URLs point to live public assets.',
      sections: [
        {
          id: 'gtm-seasonal-campaigns',
          title: '1. Consumer Go-To-Market Strategy & Global Seasonal Campaigns',
          badge: 'Consumer GTM System · Sim-Ship vs Phased Launches · Multi-Market Retail',
          defaultOpen: true,
          columns: 3,
          summary:
            '• Situation: Delivering high-stakes global retail campaigns across 200 markets and 100 languages required balancing Tier-1 sim-ship deadlines against regional readiness and varying market priorities.\n\n• System & Governance: Led multi-agency vendor teams (15+ specialists) and partnered with Engineering to enforce country/locale fallback hierarchies and sim-ship vs. phased rollout criteria.\n\n• Outcome: Maintained on-schedule launch SLAs across major commercial moments (Black Friday, Back to School, seasonal sales) while cutting operational turnaround time by 25%.',
          links: [
            {
              label: 'Microsoft Store Black Friday Deals Start Today (Windows Experience Blog, Nov 2019)',
              url: 'https://blogs.windows.com/windowsexperience/2019/11/22/microsoft-store-black-friday-deals-start-today/',
              kind: 'press-release',
            },
            {
              label: 'Black Friday 2018: Microsoft Unveils Surface and Office Offers (Microsoft Stories UK, Nov 2018)',
              url: 'https://ukstories.microsoft.com/features/black-friday-2018-microsoft-unveils-surface-and-office-offers/',
              kind: 'press-release',
            },
            {
              label: 'Microsoft Store Portugal Black Friday · Post-Tenure Storefront Reference (News Center PT, Nov 2022)',
              url: 'https://news.microsoft.com/pt-pt/2022/11/21/microsoft-celebra-black-friday-com-ofertas-exclusivas-na-loja-online-a-partir-de-hoje/',
              kind: 'press-release',
            },
            {
              label: 'Announcing Microsoft Store Back-to-School Deals Begin Today (Windows Experience Blog, Jul 2017)',
              url: 'https://blogs.windows.com/windowsexperience/2017/07/07/announcing-microsoft-store-back-school-deals-begin-today/',
              kind: 'press-release',
            },
            {
              label: 'Get Ready for Back to School with Microsoft Latest Programs & Deals (Windows Experience Blog, Aug 2017)',
              url: 'https://blogs.windows.com/windowsexperience/2017/08/01/get-ready-back-school-microsofts-latest-programs-deals/',
              kind: 'press-release',
            },
            {
              label: 'Microsoft Black Friday Deals Announced (IGN, Nov 2019)',
              url: 'https://www.ign.com/articles/2019/11/01/microsofts-black-friday-2019-deals-announced',
              kind: 'external',
            },
            {
              label: 'Microsoft Worldwide Locale & Country Selector Directory',
              url: 'https://www.microsoft.com/en-us/locale',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'WINDOWS EXPERIENCE BLOG · NOV 22, 2019',
              src: '/evidence/msft-campaign-black-friday-us.png',
              alt: 'Microsoft Store Black Friday deals announcement on Windows Experience Blog',
              caption: 'Microsoft Store Black Friday Deals Start Today · US Launch',
              linkLabel: 'Blog Announcement',
              url: 'https://blogs.windows.com/windowsexperience/2019/11/22/microsoft-store-black-friday-deals-start-today/',
              fit: 'contain',
              expandLabel: 'Inspect Black Friday Announcement',
              note: 'Official Microsoft Store Black Friday launch announcement kicking off Tier-1 holiday seasonal campaign operations across hardware, software, and gaming.',
            },
            {
              marketTag: 'MICROSOFT STORIES UK · NOV 2018',
              src: '/evidence/msft-campaign-black-friday-uk.png',
              alt: 'Microsoft Stories UK feature on Black Friday Surface and Office offers in GBP',
              caption: 'UK Microsoft Store Black Friday · Multi-Country GBP Offers',
              linkLabel: 'UK Stories Feature',
              url: 'https://ukstories.microsoft.com/features/black-friday-2018-microsoft-unveils-surface-and-office-offers/',
              fit: 'contain',
              expandLabel: 'Inspect UK Black Friday Feature',
              note: 'Multi-country European seasonal execution detailing UK Microsoft Store deals in GBP (£) across Surface devices, Xbox bundles, and Office subscriptions ahead of the global shopping event.',
            },
            {
              marketTag: 'MICROSOFT NEWS PT · POST-TENURE STOREFRONT REFERENCE (NOV 2022)',
              src: '/evidence/msft-campaign-black-friday-pt.png',
              alt: 'Microsoft Portugal News Center Black Friday announcement in Portuguese',
              caption: 'Microsoft Store Portugal Black Friday · Exclusivas na Loja Online',
              linkLabel: 'News Center Portugal',
              url: 'https://news.microsoft.com/pt-pt/2022/11/21/microsoft-celebra-black-friday-com-ofertas-exclusivas-na-loja-online-a-partir-de-hoje/',
              fit: 'contain',
              expandLabel: 'Inspect Portugal Black Friday Announcement',
              note: 'Post-Tenure Storefront Reference (Nov 2022): Included strictly as a later storefront example outside the 2016–2020 role window, illustrating how the multi-region Black Friday framework established during tenure continued to scale digital store offers across Surface, Xbox, and digital software.',
            },
            {
              marketTag: 'WINDOWS EXPERIENCE BLOG · JUL 7, 2017',
              src: '/evidence/msft-campaign-back-to-school.png',
              alt: 'Microsoft Store Back-to-School deals begin today announcement on Windows Experience Blog',
              caption: 'Microsoft Store Back-to-School Deals · Global Education Push',
              linkLabel: 'Blog Announcement',
              url: 'https://blogs.windows.com/windowsexperience/2017/07/07/announcing-microsoft-store-back-school-deals-begin-today/',
              fit: 'contain',
              expandLabel: 'Inspect Back-to-School Announcement',
              note: 'Global Back-to-School retail campaign launch coordinating multi-region device availability, education pricing tiers, and student programs across global store markets.',
            },
            {
              marketTag: 'MICROSOFT WORLDWIDE · LOCALE & LANGUAGE ARCHITECTURE',
              src: '/evidence/msft-locale-selector.png',
              alt: 'Microsoft Worldwide country and language selector directory',
              caption: 'Microsoft Worldwide Locale Selector · Global Footprint',
              linkLabel: 'Microsoft Locale Directory',
              url: 'https://www.microsoft.com/en-us/locale',
              fit: 'contain',
              expandLabel: 'Inspect Global Locale Architecture',
              note: 'Global storefront directory verifying Microsoft multi-market footprint across 200+ territories and 100+ languages, backed by geolocation routing and localized storefront catalogs.',
            },
          ],
        },
        {
          id: 'adobe-partnership-integration',
          title: '2. Adobe Strategic Partnership & Enterprise Experience Integration',
          badge: 'One Microsoft · Adobe Experience Solutions · Web & Message Delivery',
          defaultOpen: false,
          columns: 1,
          summary:
            'Contributed to the enterprise-wide Microsoft partnership with Adobe as Program Manager for Microsoft Stores, driving adoption and migration to Adobe Experience solutions across multi-quarter waves (assessment, planning, workload preparation, and web/message delivery launches). Managed vendor liaison and progress reporting across multiple quarters, collaborating with Engineering, Marketing, and Regional teams on process optimizations and automations to ensure business continuity globally while phasing out legacy platforms.',
          snapshots: [
            {
              marketTag: 'ADOBE PARTNERSHIP · ONE MICROSOFT TIMELINE',
              src: '/evidence/msft-adobe-partnership-timeline.png',
              alt: 'Adobe timeline working together as One Microsoft showing multi-quarter workload deployment phases',
              caption: 'Adobe Solutions Adoption Timeline · Working Together as One Microsoft',
              fit: 'contain',
              expandLabel: 'Inspect Adobe Adoption Timeline',
              note: 'Enterprise rollout roadmap from initial deal signing and workload preparation to Web & Message Delivery launches across global store operations.',
            },
          ],
        },
        {
          id: 'xbox-store-rebrand',
          title: '3. One Microsoft Vision: Xbox Store Integration & Rebrand',
          badge: 'One Microsoft · Xbox Store Merger · Cross-Platform Rebrand Alignment',
          defaultOpen: false,
          columns: 3,
          summary:
            'Aligned with Satya Nadella’s "One Microsoft" enterprise vision, coordinated across partner teams and the Xbox organization as Program Manager to align the Xbox Store experience and rebrand it to the unified Microsoft Store. Conducted a comprehensive audit of Microsoft Stores across Windows OS, digital web, and the Xbox portal, partnering with Engineering to ensure consistent name rebrand alignment (from Office and Xbox Store to Microsoft Store) and maintain a cohesive look and feel across platforms to simplify the user experience, increase customer adoption, and optimize the consumer purchase funnel.',
          links: [
            {
              label: 'TechTarget: Microsoft Store Evolution & Xbox Store Merger',
              url: 'https://www.techtarget.com/news/Microsoft-Store/851509/',
              kind: 'external',
            },
            {
              label: 'TechTarget Definition Archive (Wayback Machine)',
              url: 'https://web.archive.org/web/https://www.techtarget.com/news/Microsoft-Store/851509/',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'TECHTARGET CIO · 2017 ONE MICROSOFT STORE REBRAND',
              src: '/evidence/msft-techtarget-xbox-rebrand.png',
              alt: 'TechTarget coverage of 2017 Xbox store merger and unified Microsoft Store rebrand',
              caption: 'TechTarget News · 2017 Xbox Store Merger & Microsoft Store Rebrand',
              linkLabel: 'Article Archive (Wayback)',
              url: 'https://web.archive.org/web/https://www.techtarget.com/news/Microsoft-Store/851509/',
              fit: 'contain',
              expandLabel: 'Inspect TechTarget Xbox Store Merger Coverage',
              note: 'Industry report documenting the 2017 merger of the Xbox store into the Windows Store, rebranded as the unified Microsoft Store under the "One Microsoft" strategy.',
            },
            {
              marketTag: 'DIGITAL COMMERCE · STOREFRONT ECOSYSTEM SCALING',
              src: '/evidence/msft-gtm-digital-gaming-momentum.png',
              alt: 'Digital Gaming Commerce Momentum framework illustrating cross-surface storefront unification across Windows and Xbox, publisher ecosystem alignment, and global catalog scaling across 200 markets',
              caption: 'Digital Gaming Commerce Momentum · Storefront Ecosystem Scaling',
              fit: 'contain',
              expandLabel: 'Inspect Gaming Commerce Momentum Framework',
              note: 'Strategic commerce architecture illustrating cross-surface storefront unification across Windows and Xbox, publisher catalog alignment, and tier-1 sim-ship launch readiness across 200 markets and 100 languages.',
            },
            {
              marketTag: 'NEXT-GEN PLATFORMS · PROJECT SCARLETT & XCLOUD',
              src: '/evidence/msft-gtm-xbox-roadmap.png',
              alt: 'Project Scarlett, Halo Infinite, Game Pass, and Project xCloud ecosystem readiness slide',
              caption: 'Next-Decade Platform Initiatives · Ecosystem Alignment',
              fit: 'contain',
              expandLabel: 'Inspect Next-Decade Platform Initiatives',
              note: 'Multi-product campaign readiness aligning Project Scarlett (Xbox Series X), Game Pass, and cloud gaming initiatives.',
            },
          ],
        },
        {
          id: 'careers-site-revamp',
          title: '4. Microsoft Global Careers Site Revamp & External Workforce Experience',
          badge: 'Microsoft Careers · Phenom Platform · Global Talent Acquisition',
          defaultOpen: false,
          columns: 2,
          summary:
            'Partnered with the Global Talent Acquisition team on the client-side revamp of Microsoft Careers (including specialized portals such as External Workforce / contractor roles and US talent community networks). Directed internationalization of the web experience and managed integration handoffs and delegations with outsourced platform vendors who governed the backend CRM (Phenom People) and specialized talent ecosystems. Albeit specific internal operational metrics cannot be shared due to corporate confidentiality, verified public announcements, live portal experiences, and platform case studies detail the launch.',
          links: [
            {
              label: 'Microsoft Careers: External Workforce / Contractor Roles Portal',
              url: 'https://careers.microsoft.com/v2/global/en/contractor-roles.html',
              kind: 'external',
            },
            {
              label: 'Microsoft Careers Portal Archive (Wayback)',
              url: 'https://web.archive.org/web/20261118030916/https://careers.microsoft.com/v2/global/en/contractor-roles.html',
              kind: 'archive',
            },
            {
              label: 'Microsoft US Talent Community (TalentNet Portal - US specific)',
              url: 'https://us.microsoft.talentnet.community/',
              kind: 'external',
            },
            {
              label: 'TalentNet US Community Archive (Wayback)',
              url: 'https://web.archive.org/web/20260811021226/https://us.microsoft.talentnet.community/',
              kind: 'archive',
            },
            {
              label: 'GlobeNewswire Press Release: Microsoft Deploys New Career Site on Phenom People (May 24, 2018)',
              url: 'https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/microsoft-deploys-new-career-site-on-the-phenom-people-platform.html',
              kind: 'external',
            },
            {
              label: 'GlobeNewswire Archive (Wayback, Aug 2025)',
              url: 'https://web.archive.org/web/20250828112806/https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/Microsoft-Deploys-New-Career-Site-on-the-Phenom-People-Platform.html',
              kind: 'archive',
            },
            {
              label: 'Phenom Blog: Check Out Microsoft’s Career Site Powered by Phenom People',
              url: 'https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
              kind: 'external',
            },
            {
              label: 'Phenom Blog Archive (Wayback, Jun 2026)',
              url: 'https://web.archive.org/web/20260612021550/https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'MICROSOFT CAREERS · EXTERNAL WORKFORCE PORTAL',
              src: '/evidence/msft-careers-contractor-roles.png',
              alt: 'Microsoft Careers External Workforce and Contractor Roles portal',
              caption: 'Microsoft Careers · External Workforce & Contractor Roles Portal',
              linkLabel: 'Portal Archive (Wayback)',
              url: 'https://web.archive.org/web/20261118030916/https://careers.microsoft.com/v2/global/en/contractor-roles.html',
              fit: 'contain',
              expandLabel: 'Inspect Contractor Roles Portal',
              note: 'Client-side internationalization and specialized external workforce hiring experience on Microsoft Careers.',
            },
            {
              marketTag: 'MICROSOFT TALENT COMMUNITY · TALENTNET US',
              src: '/evidence/msft-careers-talentnet-community.png',
              alt: 'Microsoft US Talent Community portal powered by TalentNet',
              caption: 'Microsoft US Talent Community · TalentNet Portal',
              linkLabel: 'Community Archive (Wayback)',
              url: 'https://web.archive.org/web/20260811021226/https://us.microsoft.talentnet.community/',
              fit: 'contain',
              expandLabel: 'Inspect TalentNet Portal',
              note: 'Dedicated contractor network engagement portal for Microsoft external workforce talent.',
            },
            {
              marketTag: 'GLOBENEWSWIRE · MAY 24, 2018',
              src: '/evidence/msft-careers-globenewswire.png',
              alt: 'GlobeNewswire press release announcing Microsoft deploying new career site on Phenom People platform',
              caption: 'GlobeNewswire Press Release · Microsoft Careers on Phenom People',
              linkLabel: 'Release Archive (Wayback)',
              url: 'https://web.archive.org/web/20250828112806/https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/Microsoft-Deploys-New-Career-Site-on-the-Phenom-People-Platform.html',
              fit: 'contain',
              expandLabel: 'Inspect GlobeNewswire Release',
              note: 'Official industry press release announcing Microsoft deployment on the Phenom People platform.',
            },
            {
              marketTag: 'PHENOM CASE STUDY · TALENT ACQUISITION',
              src: '/evidence/msft-careers-phenom-case-study.png',
              alt: 'Phenom blog post featuring Microsoft Career Site deployment',
              caption: 'Phenom People Case Study · Microsoft Careers Portal',
              linkLabel: 'Case Study Archive (Wayback)',
              url: 'https://web.archive.org/web/20260612021550/https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
              fit: 'contain',
              expandLabel: 'Inspect Phenom Blog Case Study',
              note: 'Platform review highlighting candidate experience features and international portal capabilities.',
            },
          ],
        },
        {
          id: 'geopolitical-readiness-standards',
          title: '5. Geopolitical Readiness & Enterprise Globalization Standards',
          badge: 'Global Readiness Recognition · Microsoft Learn · Developer Product Inclusion',
          defaultOpen: false,
          columns: 2,
          summary:
            'Served as the Microsoft Stores advocate and cross-functional partner to the central Microsoft Global Readiness lead, receiving formal recognition from the Global Readiness team for strengthening geopolitical readiness and market risk alignment across retail operations. Partnered across teams to shape market sensitivity guidelines and codify reusable globalization practices into public Microsoft Learn documentation, global product delivery methodologies, and the Microsoft Developer Product Inclusion framework.',
          links: [
            {
              label: 'Microsoft Learn: Global Product Delivery Methodology',
              url: 'https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
              kind: 'external',
            },
            {
              label: 'Global Product Delivery Archive (Wayback)',
              url: 'https://web.archive.org/web/20241216214111/https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
              kind: 'archive',
            },
            {
              label: 'Microsoft Learn: Globalization Documentation & Standards Hub',
              url: 'https://learn.microsoft.com/en-us/globalization/',
              kind: 'external',
            },
            {
              label: 'Globalization Hub Archive (Wayback)',
              url: 'https://web.archive.org/web/20261018005757/https://learn.microsoft.com/en-us/globalization/',
              kind: 'archive',
            },
            {
              label: 'Microsoft Developer: Product Inclusion & Globalization Guidelines',
              url: 'https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
              kind: 'external',
            },
            {
              label: 'Developer Product Inclusion Archive (Wayback)',
              url: 'https://web.archive.org/web/20260720074507/https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'MICROSOFT GLOBAL READINESS · 2017 RECOGNITION AWARD',
              src: '/evidence/msft-global-readiness-award.png',
              alt: 'Microsoft Global Readiness 2017 crystal globe trophy awarded to Mara Ferreira Martins',
              caption: 'Microsoft Global Readiness · 2017 Recognition Award Trophy',
              fit: 'contain',
              expandLabel: 'Inspect Award Trophy',
              note: 'Crystal globe trophy laser-engraved with "Global Readiness", "2017", and "Mara Ferreira Martins" on a Microsoft Stores brass base plate.',
            },
            {
              marketTag: 'MICROSOFT LEARN · GLOBAL PRODUCT DELIVERY',
              src: '/evidence/msft-learn-global-product-delivery.png',
              alt: 'Microsoft Learn Global Product Delivery methodology guidelines',
              caption: 'Microsoft Learn · Global Product Delivery Methodology',
              linkLabel: 'Guide Archive (Wayback)',
              url: 'https://web.archive.org/web/20241216214111/https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
              fit: 'contain',
              expandLabel: 'Inspect Global Product Delivery Methodology',
              note: 'Published enterprise methodology codifying continuous global product release models.',
            },
            {
              marketTag: 'MICROSOFT LEARN · GLOBALIZATION STANDARDS',
              src: '/evidence/msft-learn-globalization-hub.png',
              alt: 'Microsoft Learn Globalization documentation and standards hub',
              caption: 'Microsoft Learn · Globalization Standards Documentation Hub',
              linkLabel: 'Hub Archive (Wayback)',
              url: 'https://web.archive.org/web/20261018005757/https://learn.microsoft.com/en-us/globalization/',
              fit: 'contain',
              expandLabel: 'Inspect Globalization Standards Hub',
              note: 'Official documentation hub sharing corporate globalization standards with the global developer community.',
            },
            {
              marketTag: 'MICROSOFT DEVELOPER · PRODUCT INCLUSION',
              src: '/evidence/msft-dev-product-inclusion.png',
              alt: 'Microsoft Developer Product Inclusion globalization resources',
              caption: 'Microsoft Developer · Product Inclusion & Globalization Guidelines',
              linkLabel: 'Guidelines Archive (Wayback)',
              url: 'https://web.archive.org/web/20260720074507/https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
              fit: 'contain',
              expandLabel: 'Inspect Developer Product Inclusion Guide',
              note: 'Developer resources guiding cultural, geopolitical, and linguistic product inclusion.',
            },
          ],
        },
        {
          id: 'machine-translation-pilot',
          title: '6. Microsoft Store Machine Translation, AI and Vendor Optimization',
          badge: 'Neural MT Pilot · MS Stores Adoption · Vendor SOW Optimization',
          defaultOpen: false,
          columns: 2,
          summary:
            'Led Machine Translation (MT), AI, and vendor optimization programs for Microsoft Stores, managing strategic globalization partners including the Lionbridge vendor partnership among other key agencies. Disclaimer: While public customer stories highlight Lionbridge\'s subsequent Azure OpenAI adoption, Lionbridge has long been a foundational vendor partner for Microsoft, with its adoption of Microsoft Translator preceding recent initiatives. Partnered with the central Microsoft Translator engineering team and coordinated vendor partners to extend language coverage by leveraging Microsoft Store catalog datasets, expanding dialect support, and driving MT adoption across operational store workflows. Beyond day-to-day global campaigns, also spearheaded critical corpus data cleanup and quality remediation following a serious security vulnerability in Microsoft Translator Hub (reported by SecurityWeek and researcher Haider Mahmood), directing vendor linguists to audit, filter, and purge profanity and compromised entries from localized vetted terminology and translation memories. This program fundamentally reshaped vendor Statements of Work (SOWs) year-over-year, delivering volume scalability, fast turnaround times, and substantial cost savings at enterprise scale.',
          links: [
            {
              label: 'Microsoft Customer Story: Lionbridge Disruption Using Azure AI & Translation (Official)',
              url: 'https://www.microsoft.com/en/customers/story/1792260322207475324-lionbridge-technologies-azure-openai-service-other-en-united-states#customers-share-modal-dialog',
              kind: 'case-study',
            },
            {
              label: 'Microsoft Translator Highlights of 2020: Language Expansion & Custom Models (Official Blog)',
              url: 'https://www.microsoft.com/en-us/translator/blog/2020/12/16/microsoft-translators-highlights-of-2020/',
              kind: 'blog',
            },
            {
              label: 'SecurityWeek: Microsoft Addresses Serious Vulnerability in Translator Hub (Security Advisory)',
              url: 'https://www.securityweek.com/microsoft-addresses-serious-vulnerability-translator-hub/',
              kind: 'press-release',
            },
            {
              label: 'Haider Mahmood Security Disclosure: How I was able to delete 13k+ Microsoft Translator projects (Technical Writeup)',
              url: 'https://haiderm.com/how-i-was-able-to-delete-13k-microsoft-translator-projects/',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'MICROSOFT CUSTOMER STORIES · LIONBRIDGE PARTNERSHIP',
              src: '/evidence/msft-lionbridge-customer-story.png',
              alt: 'Microsoft Customer Story on Lionbridge AI and Machine Translation deployment',
              caption: 'Microsoft Customer Story · Lionbridge AI & Translation Partnership',
              linkLabel: 'Customer Story',
              url: 'https://www.microsoft.com/en/customers/story/1792260322207475324-lionbridge-technologies-azure-openai-service-other-en-united-states#customers-share-modal-dialog',
              fit: 'contain',
              expandLabel: 'Inspect Customer Story',
              note: 'Disclaimer: While Lionbridge subsequent Azure AI adoption is highlighted, Lionbridge has long served as a core vendor partner for Microsoft (using Microsoft Translator for over a decade). As PGM at Microsoft Stores, managed the Lionbridge vendor partnership among others, governing MT pilots, DAM image geopolitical readiness, and tooling optimizations to contribute directly to mutual success.',
            },
            {
              marketTag: 'MICROSOFT TRANSLATOR · HIGHLIGHTS & CORPUS GOVERNANCE',
              src: '/evidence/msft-translator-highlights-governance.png',
              alt: 'Microsoft Translator Highlights report detailing language extensions, custom translation models, and corpus cleanup governance',
              caption: 'Microsoft Translator Highlights · Language Expansion & Data Remediation',
              linkLabel: 'Translator Blog',
              url: 'https://www.microsoft.com/en-us/translator/blog/2020/12/16/microsoft-translators-highlights-of-2020/',
              fit: 'contain',
              expandLabel: 'Inspect Translator Highlights & Governance',
              note: 'Contributed by partnering with the lead Microsoft Translator team and coordinating globalization vendors to extend languages via Microsoft Store data. Spearheaded critical corpus data cleanup and profanity purging across vetted terminology following Translator Hub security remediation (disclosed by SecurityWeek and researcher Haider Mahmood).',
            },
          ],
        },
        {
          id: 'ai-dam-automation',
          title: '7. Digital Stores Globalization & DAM Governance',
          badge: 'Digital Stores · DAM Imagery Lifecycle · Vendor HIL Workflows',
          defaultOpen: false,
          columns: 1,
          summary:
            'Served as Globalization Program Manager for Microsoft Stores within the David Porter organization in Microsoft Digital Stores, acting as the central liaison across Design, Product, Legal, Global Readiness, and regional partners to operationalize compliant global campaign delivery. While not directly working on the subsequent COVID-era initiative to shut down physical retail locations (announced June 26, 2020), investment in Digital Stores was continuous and central to the retail strategy. As affirmed by Microsoft CVP David Porter and Chief People Officer Kathleen Hogan, "the company will continue to invest in digital innovation across software and hardware" through digital storefronts on Microsoft.com, Windows, and Xbox.\n\nIn this role, I directly managed DAM governance by enforcing DAM imagery catalog metadata, sorting criteria, and labeling aligned with Global Readiness and Legal requirements; established end-to-end data archiving and lifecycle governance bridging internal quality audits/approvals with vendor Human-in-the-Loop (HIL) workflows, training, and sorting standards; and drove tooling and process optimizations, including automated imagery selection for Digital Stores campaigns.',
          links: [
            {
              label: 'Microsoft News: Microsoft Store Announces New Approach to Retail',
              url: 'https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
              kind: 'external',
            },
            {
              label: 'Retail Transformation Announcement Archive (Wayback, Nov 2026)',
              url: 'https://web.archive.org/web/20261105200125/https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'MICROSOFT NEWS · DIGITAL STOREFRONT EVOLUTION · JUN 26, 2020',
              src: '/evidence/msft-news-store-digital-retail.png',
              alt: 'Microsoft Store announces new approach to retail highlighting continuous investment in digital storefront innovation across software and hardware',
              caption: 'Microsoft Store Digital Transformation Announcement',
              linkLabel: 'Announcement Archive (Wayback)',
              url: 'https://web.archive.org/web/20261105200125/https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
              fit: 'contain',
              expandLabel: 'Inspect Retail Transformation Announcement',
              note: 'Official Microsoft announcement affirming continuous investment in digital storefront innovation across software and hardware. (Context Disclaimer: Served in the David Porter Microsoft Stores org within Digital Stores; did not work on the physical retail closures that occurred during COVID).',
            },
          ],
        },
        {
          id: 'professional-development',
          title: '8. Professional Development & Community Contributions (2019–2020)',
          badge: 'LocWorld40 Estoril · The Worldly Marketer Ep. 143 · WL PNW',
          defaultOpen: false,
          columns: 2,
          summary:
            'I was an invited panelist at LocWorld40 Portugal (Estoril, Jun 13, 2019) on "Managing Multiple Content Types: Strategies That Work" alongside leaders from Uber and Electronic Arts (EA), featured as the guest on The Worldly Marketer Podcast Episode 143 (Apr 24, 2019), and served as Events Coordinator for the Women in Localization Pacific Northwest Chapter in Seattle (2019–2020).',
          links: [
            {
              label: 'LocWorld40 Session Program (Wayback, Jul 2019)',
              url: 'https://web.archive.org/web/20190720095116/https://locworld.com/sessions/managing-multiple-content-types-strategies-that-work/',
              kind: 'archive',
            },
            {
              label: 'LocWorld40 Speaker Profile (Wayback, Jul 2019)',
              url: 'https://web.archive.org/web/20190723051914/https://locworld.com/speakers/mara-ferreira-martins/',
              kind: 'archive',
            },
            {
              label: 'The Worldly Marketer Ep. 143 (Wayback, Apr 2019)',
              url: 'https://web.archive.org/web/20190427211216/https://www.verbaccino.com/podcasts/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins/',
              kind: 'archive',
            },
            {
              label: 'The Worldly Marketer Ep. 143 Audio (Libsyn)',
              url: 'https://theworldlymarketer.libsyn.com/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'LOCWORLD40 PORTUGAL · ESTORIL · JUN 13, 2019',
              src: '/evidence/msft-locworld40-session.png',
              alt: 'LocWorld40 Estoril session page for Managing Multiple Content Types: Strategies That Work featuring Mara Ferreira Martins (Microsoft), Uber, and Electronic Arts',
              caption: 'LocWorld40 Portugal · Managing Multiple Content Types Panel',
              linkLabel: 'Session Archive (Wayback)',
              url: 'https://web.archive.org/web/20190720095116/https://locworld.com/sessions/managing-multiple-content-types-strategies-that-work/',
              fit: 'contain',
              expandLabel: 'Inspect LocWorld40 Session Page',
              note: 'Invited panelist sharing multi-tiered content management strategies alongside leaders from Uber and Electronic Arts (EA), moderated by Content Rules.',
            },
            {
              marketTag: 'THE WORLDLY MARKETER PODCAST · EP. 143 · APR 24, 2019',
              src: '/evidence/msft-worldly-marketer-ep143.png',
              alt: 'The Worldly Marketer Podcast Episode 143 page featuring Mara Martins on How Microsoft Achieves Its Best-in-Class Global Brand Status',
              caption: 'The Worldly Marketer Ep. 143 · Global Brand Status at Microsoft',
              linkLabel: 'Podcast Archive (Wayback)',
              url: 'https://web.archive.org/web/20190427211216/https://www.verbaccino.com/podcasts/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins/',
              fit: 'contain',
              expandLabel: 'Inspect Podcast Episode Page',
              note: 'Featured podcast interview on managing global brand perception and localization operations across 100+ languages at Microsoft.',
            },
          ],
        }
      ],
      snapshots: [
        {
          marketTag: 'MICROSOFT GLOBAL READINESS · 2017 RECOGNITION AWARD',
          src: '/evidence/msft-global-readiness-award.png',
          alt: 'Microsoft Global Readiness 2017 crystal globe trophy awarded to Mara Ferreira Martins',
          caption: 'Microsoft Global Readiness · 2017 Recognition Award Trophy',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT GTM · CONSUMER SYSTEM ARCHITECTURE',
          src: '/evidence/msft-gtm-consumer-system.png',
          alt: 'Microsoft Consumer Go-To-Market System overview showing 85B in-product impressions, 2.2B web visits, and ecosystem partners',
          caption: 'Microsoft Consumer Go-To-Market System · Global Scale',
          fit: 'contain',
        },
        {
          marketTag: 'SEASONAL GTM · HEMISPHERE-ADAPTED CAMPAIGNS',
          src: '/evidence/msft-gtm-seasonal-spring-autumn.png',
          alt: 'Microsoft Store Spring and Autumn Sale campaign creatives showing simultaneous northern and southern hemisphere execution',
          caption: 'Spring & Autumn Seasonal Campaigns · Dual-Hemisphere Delivery',
          fit: 'contain',
        },
        {
          marketTag: 'SEASONAL GTM · BACK TO SCHOOL CAMPAIGN',
          src: '/evidence/msft-gtm-seasonal-back-to-school.png',
          alt: 'Back to School campaign panels featuring Surface Pro, PCs, and Xbox bundles',
          caption: 'Back to School Tier-1 Retail Campaign',
          fit: 'contain',
        },
        {
          marketTag: 'DIGITAL COMMERCE · STOREFRONT ECOSYSTEM SCALING',
          src: '/evidence/msft-gtm-digital-gaming-momentum.png',
          alt: 'Digital Gaming Commerce Momentum framework illustrating cross-surface storefront unification across Windows and Xbox, publisher ecosystem alignment, and global catalog scaling across 200 markets',
          caption: 'Digital Gaming Commerce Momentum · Storefront Ecosystem Scaling',
          fit: 'contain',
        },
        {
          marketTag: 'NEXT-GEN PLATFORMS · PROJECT SCARLETT & XCLOUD',
          src: '/evidence/msft-gtm-xbox-roadmap.png',
          alt: 'Project Scarlett, Halo Infinite, Game Pass, and Project xCloud ecosystem readiness slide',
          caption: 'Next-Decade Platform Initiatives · Ecosystem Alignment',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT LEARN · GLOBAL PRODUCT DELIVERY',
          src: '/evidence/msft-learn-global-product-delivery.png',
          alt: 'Microsoft Learn Global Product Delivery methodology guidelines',
          caption: 'Microsoft Learn · Global Product Delivery Methodology',
          linkLabel: 'Guide Archive (Wayback)',
          url: 'https://web.archive.org/web/20241216214111/https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT NEWS · DIGITAL STOREFRONT EVOLUTION · JUN 26, 2020',
          src: '/evidence/msft-news-store-digital-retail.png',
          alt: 'Microsoft Store announces new approach to retail featuring digital storefront transformation',
          caption: 'Microsoft Store Digital Transformation Announcement',
          linkLabel: 'Announcement Archive (Wayback)',
          url: 'https://web.archive.org/web/20261105200125/https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT CAREERS · EXTERNAL WORKFORCE PORTAL',
          src: '/evidence/msft-careers-contractor-roles.png',
          alt: 'Microsoft Careers External Workforce and Contractor Roles portal',
          caption: 'Microsoft Careers · External Workforce & Contractor Roles Portal',
          linkLabel: 'Portal Archive (Wayback)',
          url: 'https://web.archive.org/web/20261118030916/https://careers.microsoft.com/v2/global/en/contractor-roles.html',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT TALENT COMMUNITY · TALENTNET US',
          src: '/evidence/msft-careers-talentnet-community.png',
          alt: 'Microsoft US Talent Community portal powered by TalentNet',
          caption: 'Microsoft US Talent Community · TalentNet Portal',
          linkLabel: 'Community Archive (Wayback)',
          url: 'https://web.archive.org/web/20260811021226/https://us.microsoft.talentnet.community/',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT LEARN · GLOBALIZATION STANDARDS',
          src: '/evidence/msft-learn-globalization-hub.png',
          alt: 'Microsoft Learn Globalization documentation and standards hub',
          caption: 'Microsoft Learn · Globalization Standards Documentation Hub',
          linkLabel: 'Hub Archive (Wayback)',
          url: 'https://web.archive.org/web/20261018005757/https://learn.microsoft.com/en-us/globalization/',
          fit: 'contain',
        },
        {
          marketTag: 'MICROSOFT DEVELOPER · PRODUCT INCLUSION',
          src: '/evidence/msft-dev-product-inclusion.png',
          alt: 'Microsoft Developer Product Inclusion globalization resources',
          caption: 'Microsoft Developer · Product Inclusion & Globalization Guidelines',
          linkLabel: 'Guidelines Archive (Wayback)',
          url: 'https://web.archive.org/web/20260720074507/https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
          fit: 'contain',
        },
        {
          marketTag: 'GLOBENEWSWIRE · MAY 24, 2018',
          src: '/evidence/msft-careers-globenewswire.png',
          alt: 'GlobeNewswire press release announcing Microsoft deploying new career site on Phenom People platform',
          caption: 'GlobeNewswire Press Release · Microsoft Careers on Phenom People',
          linkLabel: 'Release Archive (Wayback)',
          url: 'https://web.archive.org/web/20250828112806/https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/Microsoft-Deploys-New-Career-Site-on-the-Phenom-People-Platform.html',
          fit: 'contain',
        },
        {
          marketTag: 'PHENOM CASE STUDY · TALENT ACQUISITION',
          src: '/evidence/msft-careers-phenom-case-study.png',
          alt: 'Phenom blog post featuring Microsoft Career Site deployment',
          caption: 'Phenom People Case Study · Microsoft Careers Portal',
          linkLabel: 'Case Study Archive (Wayback)',
          url: 'https://web.archive.org/web/20260612021550/https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
          fit: 'contain',
        },
        {
          marketTag: 'LOCWORLD40 PORTUGAL · ESTORIL · JUN 13, 2019',
          src: '/evidence/msft-locworld40-session.png',
          alt: 'LocWorld40 Estoril session page for Managing Multiple Content Types: Strategies That Work featuring Mara Ferreira Martins (Microsoft), Uber, and Electronic Arts',
          caption: 'LocWorld40 Portugal · Managing Multiple Content Types Panel',
          linkLabel: 'Session Archive (Wayback)',
          url: 'https://web.archive.org/web/20190720095116/https://locworld.com/sessions/managing-multiple-content-types-strategies-that-work/',
          fit: 'contain',
        },
        {
          marketTag: 'THE WORLDLY MARKETER PODCAST · EP. 143 · APR 24, 2019',
          src: '/evidence/msft-worldly-marketer-ep143.png',
          alt: 'The Worldly Marketer Podcast Episode 143 page featuring Mara Martins on How Microsoft Achieves Its Best-in-Class Global Brand Status',
          caption: 'The Worldly Marketer Ep. 143 · Global Brand Status at Microsoft',
          linkLabel: 'Podcast Archive (Wayback)',
          url: 'https://web.archive.org/web/20190427211216/https://www.verbaccino.com/podcasts/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins/',
          fit: 'contain',
        },
        {
          marketTag: 'ADOBE PARTNERSHIP · ONE MICROSOFT TIMELINE',
          src: '/evidence/msft-adobe-partnership-timeline.png',
          alt: 'Adobe timeline working together as One Microsoft showing multi-quarter workload deployment phases',
          caption: 'Adobe Solutions Adoption Timeline · Working Together as One Microsoft',
          fit: 'contain',
        },
        {
          marketTag: 'TECHTARGET CIO · 2017 ONE MICROSOFT STORE REBRAND',
          src: '/evidence/msft-techtarget-xbox-rebrand.png',
          alt: 'TechTarget coverage of 2017 Xbox store merger and unified Microsoft Store rebrand',
          caption: 'TechTarget News · 2017 Xbox Store Merger & Microsoft Store Rebrand',
          linkLabel: 'Article Archive (Wayback)',
          url: 'https://web.archive.org/web/https://www.techtarget.com/news/Microsoft-Store/851509/',
          fit: 'contain',
        },
      ],
      links: [
        {
          label: 'Microsoft Learn: Global Product Delivery Methodology',
          url: 'https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
          kind: 'external',
        },
        {
          label: 'Global Product Delivery Archive (Wayback)',
          url: 'https://web.archive.org/web/20241216214111/https://learn.microsoft.com/en-us/globalization/methodology/global-product-delivery',
          kind: 'archive',
        },
        {
          label: 'Microsoft News: Microsoft Store Announces New Approach to Retail',
          url: 'https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
          kind: 'external',
        },
        {
          label: 'Retail Transformation Announcement Archive (Wayback)',
          url: 'https://web.archive.org/web/20261105200125/https://news.microsoft.com/source/2020/06/26/microsoft-store-announces-new-approach-to-retail/',
          kind: 'archive',
        },
        {
          label: 'Microsoft Careers: External Workforce / Contractor Roles Portal',
          url: 'https://careers.microsoft.com/v2/global/en/contractor-roles.html',
          kind: 'external',
        },
        {
          label: 'Microsoft Careers Portal Archive (Wayback)',
          url: 'https://web.archive.org/web/20261118030916/https://careers.microsoft.com/v2/global/en/contractor-roles.html',
          kind: 'archive',
        },
        {
          label: 'Microsoft US Talent Community (TalentNet Portal - US specific)',
          url: 'https://us.microsoft.talentnet.community/',
          kind: 'external',
        },
        {
          label: 'TalentNet US Community Archive (Wayback)',
          url: 'https://web.archive.org/web/20260811021226/https://us.microsoft.talentnet.community/',
          kind: 'archive',
        },
        {
          label: 'GlobeNewswire: Microsoft Deploys New Career Site on Phenom People (May 2018)',
          url: 'https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/microsoft-deploys-new-career-site-on-the-phenom-people-platform.html',
          kind: 'external',
        },
        {
          label: 'GlobeNewswire Archive (Wayback)',
          url: 'https://web.archive.org/web/20250828112806/https://www.globenewswire.com/news-release/2018/05/24/1511616/0/en/Microsoft-Deploys-New-Career-Site-on-the-Phenom-People-Platform.html',
          kind: 'archive',
        },
        {
          label: 'Phenom Blog: Check Out Microsoft’s Career Site Powered by Phenom People',
          url: 'https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
          kind: 'external',
        },
        {
          label: 'Phenom Blog Archive (Wayback)',
          url: 'https://web.archive.org/web/20260612021550/https://www.phenom.com/blog/check-out-microsofts-career-site-powered-by-phenom-people',
          kind: 'archive',
        },
        {
          label: 'Microsoft Learn: Globalization Documentation & Standards Hub',
          url: 'https://learn.microsoft.com/en-us/globalization/',
          kind: 'external',
        },
        {
          label: 'Globalization Hub Archive (Wayback)',
          url: 'https://web.archive.org/web/20261018005757/https://learn.microsoft.com/en-us/globalization/',
          kind: 'archive',
        },
        {
          label: 'Microsoft Developer: Product Inclusion & Globalization Guidelines',
          url: 'https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
          kind: 'external',
        },
        {
          label: 'Developer Product Inclusion Archive (Wayback)',
          url: 'https://web.archive.org/web/20260720074507/https://developer.microsoft.com/en-us/games/resources/productinclusion/globalization/',
          kind: 'archive',
        },
        {
          label: 'LocWorld40 Session Program (Wayback, Jul 2019)',
          url: 'https://web.archive.org/web/20190720095116/https://locworld.com/sessions/managing-multiple-content-types-strategies-that-work/',
          kind: 'archive',
        },
        {
          label: 'LocWorld40 Speaker Profile (Wayback, Jul 2019)',
          url: 'https://web.archive.org/web/20190723051914/https://locworld.com/speakers/mara-ferreira-martins/',
          kind: 'archive',
        },
        {
          label: 'The Worldly Marketer Ep. 143 (Wayback, Apr 2019)',
          url: 'https://web.archive.org/web/20190427211216/https://www.verbaccino.com/podcasts/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins/',
          kind: 'archive',
        },
        {
          label: 'The Worldly Marketer Ep. 143 Audio (Libsyn)',
          url: 'https://theworldlymarketer.libsyn.com/twm-143-how-microsoft-achieves-its-best-in-class-global-brand-status-w-mara-martins',
          kind: 'external',
        },
        {
          label: 'TechTarget: Microsoft Store Evolution & Xbox Store Merger',
          url: 'https://www.techtarget.com/news/Microsoft-Store/851509/',
          kind: 'external',
        },
        {
          label: 'TechTarget Definition Archive (Wayback Machine)',
          url: 'https://web.archive.org/web/https://www.techtarget.com/news/Microsoft-Store/851509/',
          kind: 'archive',
        },
      ],
    },
  },
  {
    id: 'linkedin',
    type: 'role',
    era: 'tech',
    chipLabel: 'LinkedIn',
    subLabel: '2020–2021',
    company: 'LinkedIn',
    countryFlag: '🇺🇸',
    location: 'Sunnyvale, CA (Remote · COVID-19)',
    monogram: 'LI',
    logo: '/company-logos/linkedin.svg',
    title: 'Senior Localization Marketing Manager',
    officialTitle: 'Senior Localization Marketing Manager',
    dutiesBeyondScope:
      'Established and led Global MARCOM Localization operations, unifying multi-market campaign velocity, cross-functional release governance, and global brand consistency.',
    period: 'Mar 2020 – Oct 2021',
    startYear: 2020,
    endYear: 2021,
    pillars: ['program', 'leadership', 'vendor'],
    summary:
      'Founded MARCOM localization program governance, scaling an operating model of 2 FTE PMs, 20 MSP vendors, and internal linguists to cut turnaround by ~30% across 26 languages and 17 markets.',
    executionSummary: {
      heading: 'Program Arc: MARCOM Localization Architecture & Multi-Market Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Establishing scalable MARCOM localization governance during rapid 2020–2021 remote shifts required aligning multi-market launches across 26 languages and 17 markets without a pre-existing centralized MARCOM localization operating model.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Built out MARCOM localization program governance, scaled an operating model of 2 FTE Localization Marketing PMs and 20 MSP vendors alongside internal linguists, and structured multi-wave global rollouts.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Sequenced regional launch waves and product/brand updates across Marketing, Localization Engineering, Legal, and external partners to protect quality and speed without over-indexing on one-size-fits-all schedules.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Delivered multi-wave global rollouts across 26 languages and 17 markets with improved turnaround efficiency (while broader LinkedIn revenue and Marketing Solutions growth figures remain separate company-level context).',
        },
      ],
    },
    metrics: [
      {
        value: '26 Langs · 17 Mkts',
        label: 'MARCOM localization languages & launch markets',
        kind: 'scale',
        evidenceId: 'li-01',
      },
      {
        value: '-30% Turnaround',
        label: 'Faster release cycle via 2 PMs & MSP vendor model',
        kind: 'velocity',
        evidenceId: 'li-02',
      },
      {
        value: '6 Global Waves',
        label: 'Sequential multi-market GTM rollouts delivered on schedule',
        kind: 'quality',
        evidenceId: 'li-03',
      },
    ],
    metricsFootnote:
      '*Commercial Business Context (MSFT IR FY21 Q4): Macro commercial scale supported by MARCOM localization infrastructure. LinkedIn Marketing Solutions achieved peak +97% YoY growth (+91% constant currency) as LinkedIn reached over $10 billion in annual revenue (+27% FY21). Source: Microsoft Investor Relations FY21 Q4 results (specifically, July 27, 2021), where Stories, redesigns, and Creator tools operated alongside Marketing Solutions.',
    glossary: linkedinGlossary,
    highlights: [
      {
        text: 'Joined March 9, 2020 (#LGE remote pandemic cohort) and recognized among LinkedIn\'s CY 2020 Top 12% Super Learners (#superlearning).',
        url: 'https://www.linkedin.com/feed/update/urn:li:share:6813172964327088128/',
        linkLabel: 'View Mar 9, 2020 Tenure Post',
      },
      'Founded and led the MARCOM Localization Program Management team (scaling to 2 FTE Loc MKTG PMs), unifying Marketing, Localization Engineering, Legal, and Editorial News release gates.',
      'Built an outsourced marketing content vendor program via a Managed Service Provider (MSP) scaling up to 20 vendors alongside up to 15 internal linguists to absorb launch surges and cut turnaround by 30%.',
      'Delivered localized multi-wave GTM launches for LinkedIn Stories (Brazil, Netherlands, UAE, Australia, France, UK) and the September 2020 Global Redesign across 26 languages and 17 markets during COVID-19.',
      'Drove the marketing updates and the localized look and feel across all markets for LinkedIn\'s first major redesign in five years (Sep 24, 2020). As manager, owned team capacity and initiatives prioritization, cross-functional alignment while delivering on time in line with MKTG organizational priorities and in alignment with the CEO\'s vision and company direction (LinkedIn Pressroom announcement).',
      'Guided transition planning for the September 30, 2021 Stories sunset toward persistent Creator Mode video experiences, capturing advertiser ROI and user learnings around profile permanence.',
    ],
    evidence: {
      label: 'Launch Coverage, Org Architecture & Earnings Archives (Apr 2020 – Oct 2021)',
      note: 'Attribution & Archive Note: Documented rollout captures across April–October 2020 waves (including Brazil, Netherlands, UAE/MENA, Australia, France, US/Canada, and UK) and related launch/brand coverage. Grouped wave evidence to show end-to-end launch sequencing, regional readiness, and cross-functional coordination across 26 languages and 17 markets, with Microsoft IR filings providing external commercial context.',
      sections: linkedinEvidenceSections,
      snapshots: linkedinEvidenceSections[0].snapshots,
      links: [
        {
          label: 'Wave 1: Brazil (Canaltech, Wayback)',
          url: 'https://web.archive.org/web/20200418103427/https://canaltech.com.br/redes-sociais/linkedin-stories-brasil-e-o-primeiro-pais-a-receber-novo-recurso-163313/',
        },
        {
          label: 'Wave 2: Netherlands (Pulse · Local Archive)',
          url: 'https://www.linkedin.com/pulse/linkedin-stories-work-beyond-pieter-cranenbroek/',
        },
        {
          label: 'Wave 3: UAE (The National, Wayback)',
          url: 'https://web.archive.org/web/20250804073813/https://www.thenationalnews.com/arts/linkedin-stories-uae-among-the-first-to-trial-the-new-feature-on-social-network-platform-1.1027464',
        },
        {
          label: 'Wave 4: Australia (Natalie MacDonald, Wayback)',
          url: 'https://web.archive.org/web/20230628093409/https://www.linkedin.com/pulse/introducing-linkedin-stories-natalie-macdonald-1c/',
        },
        {
          label: 'Wave 6: UK Launch (Rachel Tombs, Pulse)',
          url: 'https://www.linkedin.com/pulse/linkedin-stories-now-live-uk-rachel-tombs/',
        },
        {
          label: 'Global Redesign (Pressroom, Wayback)',
          url: 'https://web.archive.org/web/20200929140640/https://news.linkedin.com/2020/september/new-design-and-experiences-help-members-build-meaningful-relatio',
        },
        {
          label: 'Creator Pivot (Liz Li, Wayback)',
          url: 'https://web.archive.org/web/20210831181219/https://www.linkedin.com/pulse/whats-next-linkedin-stories-video-liz-li',
        },
        {
          label: 'Microsoft IR FY21 Q4 (Wayback)',
          url: 'https://web.archive.org/web/20210727200532/https://www.microsoft.com/en-us/Investor/earnings/FY-2021-Q4/press-release-webcast',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'block',
    type: 'role',
    era: 'tech',
    chipLabel: 'Block',
    subLabel: '2021–2022',
    company: 'Block (formerly Square, Inc.)',
    countryFlag: '🇺🇸',
    location: 'United States',
    monogram: 'BK',
    logo: '/company-logos/block.svg',
    title: 'Program Management Lead',
    officialTitle: 'Program Management Lead - Localization',
    dutiesBeyondScope:
      'Directed global localization Program Management org growth and multi-market launch readiness across international seller and developer ecosystems.',
    period: 'Nov 2021 – Nov 2022',
    startYear: 2021,
    endYear: 2022,
    pillars: ['program', 'vendor', 'leadership'],
    summary:
      'Scaled the global localization PM organization from 5 to 15 FTE PM direct reports, governing multi-market launch readiness across 8 international markets and up to 37 products per market.',
    executionSummary: {
      heading: 'Program Arc: Org Scaling, Multi-Market Expansion & Product Parity Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Scaling a global localization PM organization while supporting concurrent international expansion (8 markets, up to 37 products/market) and the Square-to-Block rebrand created high coordination complexity across product, regional GTM, legal, and brand teams.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Scaled the localization PM organization from 5 to 15 FTE PMs (direct reports) and established structured multi-market launch readiness and cross-functional alignment across regional and product workstreams.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Balanced rapid international rollout timelines and market-specific product requirements (including Spain GA, Square Loans in Canada, European scaling in France and Ireland, and the December 2021 rebrand) against localization capacity and risk controls.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Expanded the localization PM org from 5 to 15 FTE PMs and supported scheduled international market rollouts and product readiness across 8 markets (with Block\'s Investor Day and Q3 2022 GPV/gross profit figures provided as broader company context).',
        },
      ],
    },
    metrics: [
      {
        value: '5 to 15 FTE PMs',
        focus: 'Direct Report Scale',
        label: 'Localization PM Org Scaled 3x (Direct Reports) for Global Operations',
        kind: 'scale',
        placeholder: false,
        hint: 'Scaled direct-report PM team from 5 to 15 FTEs; Block Investor Day 2022 Slides 26, 31',
        evidenceId: 'bk-01',
      },
      {
        value: '8 Int’l Markets',
        focus: 'Market Rollouts',
        label: 'Expansion Across Core Markets (Square Rebrand, France/Ireland & Spain GA)',
        kind: 'velocity',
        placeholder: false,
        hint: 'Delivered Square to Block rebrand (Dec 2021), European scaling, and Spain GA (Jan 2022)',
        evidenceId: 'bk-02',
      },
      {
        value: 'Up to 37 Products',
        focus: 'Product Readiness',
        label: 'Localized Product Parity per Market (Square Loans, Banking & BNPL)',
        kind: 'quality',
        placeholder: false,
        hint: 'Investor Day Slide 26 (22 to 37 products/market) & Canada Loans/BNPL launches',
        evidenceId: 'bk-03',
      },
    ],
    metricsFootnote:
      '*Macro Commercial Context (Block Investor Day & Q3 2022 Shareholder Letter): Scale supported by the localization PM infrastructure. International GPV grew +55% YoY CC in FY22 Q3 (>3x U.S. +17%) as international share of Square Gross Profit expanded from 9% to 15% (11% core Ex-BNPL). Click below for the full 4-period financial reconciliation.',
    metricsFootnoteItems: [
      {
        marker: '*',
        title: 'Payment Velocity (Q3 2022 Letter, p. 11)',
        text: 'FY22 Q3 Square International GPV grew +55% YoY constant currency (+40% YoY reported), outpacing U.S. GPV growth (+17% YoY) by >3×.',
      },
      {
        marker: '**',
        title: 'Profit Share (Investor Day Slide 27 & Q3 2022 Letter, pp. 7, 29)',
        text: 'Rose from 9% (FY21 Q3: $53.4M; FY21 baseline: $220M, >60% FY15–FY21 CAGR) to 15% all-in ($120.9M) and 11% core Ex-BNPL ($75.1M, +40.7% YoY) in FY22 Q3.',
      },
      {
        marker: '•',
        title: 'FY22 9M YTD Context (Ended Sep 30, 2022, pre-Q4 close)',
        text: 'Core Ex-BNPL International Gross Profit reached $200.2M (+42.6% YoY) and GAAP all-in reached $323.7M (+130.5% YoY). See Section 4 below for the full 4-period bridge.',
      },
    ],
    glossary: blockGlossary,
    highlights: [
      'Org & Execution (Direct Report Scale): Scaled the global localization PM team from 5 to 15 FTE PMs (direct reports) alongside Brand, Product Marketing, Legal, and Regional GTM to standardize multi-market launch workflows. That operating model enabled concurrent delivery of the Dec 2021 Square to Block rebrand, post-launch European scaling (France and Ireland), Spain general availability (Jan 2022), and Square Loans in Canada (Apr 2022).',
      {
        text: 'Business Impact (In-Tenure FY22 Proof): Sustained product-parity localization across 8 international markets (including Japan PayPay QR acceptance, Australia Instant Transfers, UK Square Loans, and Canada/UK BNPL), supporting +55% YoY constant-currency Square International GPV growth in FY22 Q3 (vs. +17% YoY in the U.S.) and lifting Square International Gross Profit from $220M in full-year FY21 to $200.2M core Ex-BNPL (+42.6% YoY) and $323.7M GAAP all-in (+130.5% YoY) in FY22 9M YTD (ended Sep 30, 2022).',
        url: `${BLOCK_Q3_2022_LETTER_URL}#page=29`,
        linkLabel: 'Block Q3 2022 Shareholder Letter (pp. 7, 11, 29)',
      },
    ],
    evidence: {
      note: 'Includes Block Investor Day (May 2022) and Q3 2022 Shareholder Letter references (including Slide 26, Slides 31–32, and Page 7) alongside market expansion and rebrand milestones. Framed external financial and GPV disclosures explicitly as macro business context supporting the international markets and product lines covered by the program. Preserved via live links, Wayback Machine archives, and saved PDF archive documentation.',
      sections: blockEvidenceSections,
      snapshots: blockEvidenceSections.flatMap((section) => section.snapshots || []),
      links: Array.from(
        new Map(
          blockEvidenceSections
            .flatMap((section) => section.links || [])
            .map((link) => [link.url, link])
        ).values()
      ),
    },
    placeholder: false,
  },
  {
    id: 'miis',
    type: 'role',
    era: 'leadership',
    chipLabel: 'MIIS',
    subLabel: '2023–2025',
    company: 'Middlebury Institute (MIIS)',
    countryFlag: '🇺🇸',
    location: 'Monterey, CA, USA',
    monogram: 'MI',
    logo: '/company-logos/miis.svg',
    title: 'Visiting Professor, Program Management (TLM)',
    officialTitle: 'Visiting Professor, Program Management (TLM)',
    dutiesBeyondScope:
      'Modernized curriculum with the institute’s first AI Series, forged partnerships with Fortune 500 tech leaders, and advised graduate cohorts on enterprise program management.',
    period: 'Jul 2023 – Jul 2025',
    startYear: 2023,
    endYear: 2025,
    pillars: ['leadership', 'ai', 'education'],
    summaryHeading:
      'Driving Program Growth & Industry Readiness Through Cross-Departmental Initiatives',
    summary:
      'Invited as Visiting Professor to modernize the flagship TLM/PGM curriculum, bridging academic training with enterprise program management standards. Created and launched the institute\'s first AI Series and forged institutional partnerships across faculty, admissions, and careers with partners ranging from SMB to Fortune 500 tech leaders, accelerating cohort growth and professional readiness.',
    executionSummary: {
      heading: 'Program Arc: Curriculum Modernization & Institutional Partnerships',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Modernizing the flagship TLM/PGM curriculum required connecting academic training with current enterprise program management standards and emerging AI workflows.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Updated curriculum structure, launched the institute\'s first AI Series, and built partnerships across faculty, admissions, careers, and industry leaders ranging from SMBs to Fortune 500 tech companies.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Aligned academic syllabus/program structure and institutional stakeholders with fast-moving industry practices and AI adoption.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Modernized TLM/PGM curriculum offerings, launched the institute\'s first AI Series, and expanded industry partnerships across SMBs and Fortune 500 tech organizations.',
        },
      ],
    },
    metrics: [
      {
        value: '90–120 PMs Upskilled',
        label: '#1 Degree Program at MIIS · ~24% of MIIS Enrollment',
        kind: 'scale',
        placeholder: false,
        hint: 'Source: MIIS Teaching Record & Official MIIS Tableau Data · #1 in MIIS Masters Degrees Awarded (2022–2026); ~24% of Fall 2023–2024 MIIS enrollment',
        evidenceId: 'mi-01',
      },
      {
        value: '+133% YoY Track Growth',
        label: '120 Active Cohort / Online LPRM Track (15 to 35 Students)',
        kind: 'velocity',
        placeholder: false,
        hint: 'Source: Official MIIS Tableau Institutional Enrollment (2024–2025)',
        evidenceId: 'mi-02',
      },
      {
        value: '95%',
        label: 'AI in Localization Series Attendance',
        kind: 'quality',
        placeholder: false,
        hint: 'Source: First MIIS AI Speaker Series with Block, GitLab, Coupa & Smartling',
        evidenceId: 'mi-03',
      },
    ],
    highlights: [
      {
        text: 'Founded the "AI in Localization" speaker series, collaborating with leaders from Block, GitLab, Coupa, and Smartling.',
        linkLabel: 'Live Project Page',
        url: 'https://maramartins.com/project/localization-training-program',
      },
    ],
    evidence: {
      note: 'Both live Middlebury pages (the Visiting Professor faculty profile and the Institutional Research Tableau dashboard), a Wayback Machine archive (Feb 2025), Women in Localization Portugal event records (May 2025), and local page snapshots are preserved below in case those university or event pages change or are retired in the future.',
      sections: [
        {
          id: 'institutional-profile',
          title: '1. Institutional Profile & Enrollment Impact (2023–2025)',
          badge: 'MIIS Faculty Profile · Tableau Enrollment Data',
          defaultOpen: true,
          columns: 2,
          summary:
            'Official Middlebury Institute faculty profile and Institutional Research Tableau records documenting the Translation & Localization Management (TLM) degree program (#1 in Masters degrees awarded at MIIS; ~24% of institute enrollment) and +133% YoY online track growth.',
          links: [
            {
              label: 'Official MIIS Faculty Profile',
              url: 'https://www.middlebury.edu/institute/people/mara-martins',
              kind: 'external',
            },
            {
              label: 'Wayback Machine Archive (Feb 2025)',
              url: 'https://web.archive.org/web/20250211181739/https://www.middlebury.edu/institute/people/mara-martins',
              kind: 'archive',
            },
            {
              label: 'Official MIIS Institutional Data (Tableau)',
              url: 'https://www.middlebury.edu/assessment-institutional-research/institutional-data/middlebury-institute-international-studies',
              kind: 'external',
            },
            {
              label: 'Full MIIS Case Study & Speaker Series',
              to: '/project/localization-training-program',
              kind: 'internal',
            },
          ],
          snapshots: [
            {
              marketTag: 'OFFICIAL MIIS FACULTY PROFILE · MIDDLEBURY.EDU',
              src: '/evidence/miis-faculty-profile.png',
              alt: 'Snapshot of Mara Martins Visiting Professor faculty profile on middlebury.edu',
              caption: 'Saved webpage capture · Official MIIS Visiting Professor profile (middlebury.edu)',
              url: 'https://web.archive.org/web/20250211181739/https://www.middlebury.edu/institute/people/mara-martins',
              linkLabel: 'Faculty Profile (Wayback)',
              fit: 'contain',
            },
            {
              marketTag: 'MIIS INSTITUTIONAL RESEARCH · TABLEAU DASHBOARD',
              src: '/evidence/miis-institutional-data.png',
              alt: 'Snapshot of Official Middlebury Institute Tableau institutional enrollment data',
              caption: 'Saved webpage capture · Official MIIS Institutional Research (Tableau)',
              url: 'https://www.middlebury.edu/assessment-institutional-research/institutional-data/middlebury-institute-international-studies',
              linkLabel: 'MIIS Tableau Data',
              fit: 'contain',
            },
          ],
        },
        {
          id: 'professional-development',
          title: '2. Professional Development & Community Contributions (2023–2025)',
          badge: 'Women in Localization Portugal Ep. #4 · AI in Localization Series',
          defaultOpen: false,
          columns: 2,
          summary:
            'Founded and hosted the Middlebury Institute\'s inaugural "AI in Localization" speaker series with enterprise leaders from Block, GitLab, Coupa, and Smartling, and served as featured speaker for Women in Localization Portugal (WLPT) on "Fala com Quem Sabe (Ep. #4): De Portugal para o Mundo: Localização e Adaptação Cultural" (May 27, 2025, with Salomé Branco).',
          links: [
            {
              label: 'WL Portugal Pulse Recap: Fala com Quem Sabe Ep. #4 (May 2025)',
              url: 'https://www.linkedin.com/pulse/wl-portugal-chapter-0405-2025-conversas-fv6uf/',
              kind: 'external',
            },
            {
              label: 'Official Women in Localization Event Page (May 27, 2025)',
              url: 'https://womeninlocalization.com/events/?slug=wlpt-de-portugal-para-o-mundo-localizao-e-adaptao-38681',
              kind: 'external',
            },
            {
              label: 'Full MIIS Case Study & AI Speaker Series',
              to: '/project/localization-training-program',
              kind: 'internal',
            },
          ],
          snapshots: [
            {
              marketTag: 'WOMEN IN LOCALIZATION PORTUGAL · MAY 27, 2025',
              src: '/evidence/miis-wlpt-2025-event.png',
              alt: 'Women in Localization Portugal LinkedIn Pulse recap featuring Fala com Quem Sabe Episode 4 with Mara Martins and Salome Branco',
              caption: 'WL Portugal · Fala com Quem Sabe Ep. #4 (De Portugal para o Mundo)',
              url: 'https://www.linkedin.com/pulse/wl-portugal-chapter-0405-2025-conversas-fv6uf/',
              linkLabel: 'WL Portugal Pulse Recap',
              fit: 'contain',
              expandLabel: 'Inspect WL Portugal Event Feature',
              note: 'Featured speaker alongside Salomé Branco on global career journeys, cultural adaptation, and international program management.',
            },
          ],
        },
      ],
      snapshots: [
        {
          src: '/evidence/miis-faculty-profile.png',
          alt: 'Snapshot of Mara Martins Visiting Professor faculty profile on middlebury.edu',
          caption: 'Saved webpage capture · Official MIIS Visiting Professor profile (middlebury.edu)',
        },
        {
          src: '/evidence/miis-institutional-data.png',
          alt: 'Snapshot of Official Middlebury Institute Tableau institutional enrollment data',
          caption: 'Saved webpage capture · Official MIIS Institutional Research (Tableau)',
        },
        {
          src: '/evidence/miis-wlpt-2025-event.png',
          alt: 'Women in Localization Portugal LinkedIn Pulse recap featuring Fala com Quem Sabe Episode 4 with Mara Martins and Salome Branco',
          caption: 'WL Portugal · Fala com Quem Sabe Ep. #4 (De Portugal para o Mundo)',
        },
      ],
      links: [
        {
          label: 'Official MIIS Faculty Profile',
          url: 'https://www.middlebury.edu/institute/people/mara-martins',
          kind: 'external',
        },
        {
          label: 'Wayback Machine Archive (Feb 2025)',
          url: 'https://web.archive.org/web/20250211181739/https://www.middlebury.edu/institute/people/mara-martins',
          kind: 'archive',
        },
        {
          label: 'Official MIIS Institutional Data (Tableau)',
          url: 'https://www.middlebury.edu/assessment-institutional-research/institutional-data/middlebury-institute-international-studies',
          kind: 'external',
        },
        {
          label: 'WL Portugal Pulse Recap (May 2025)',
          url: 'https://www.linkedin.com/pulse/wl-portugal-chapter-0405-2025-conversas-fv6uf/',
          kind: 'external',
        },
        {
          label: 'Official Women in Localization Event Page',
          url: 'https://womeninlocalization.com/events/?slug=wlpt-de-portugal-para-o-mundo-localizao-e-adaptao-38681',
          kind: 'external',
        },
        {
          label: 'Full MIIS Case Study & Speaker Series',
          to: '/project/localization-training-program',
          kind: 'internal',
        },
      ],
    },
  },
  {
    id: 'postgrad-education',
    type: 'milestone',
    era: 'ai',
    chipLabel: 'Post-Grad',
    subLabel: '2020–2026 · Credentials',
    company: 'Post-Graduate Continuous Education',
    countryFlag: '🇺🇸',
    location: 'Google · Stanford · Anthropic · LinkedIn Learning',
    monogram: '🎓',
    title: 'Post-Graduate Continuous Education & Verified Credentials',
    org: 'Google Career Certificates · Anthropic Academy · Stanford Continuing Studies · Tony Robbins / Assessments 24x7 · LinkedIn Learning',
    period: '2020 – Nov 2026 (30 Verified Credentials & Completed Courses)',
    startYear: 2020,
    endYear: 2026,
    pillars: ['education', 'program', 'ai', 'leadership'],
    summary:
      'Concurrent post-graduate credential track completed in parallel with full-time enterprise leadership roles, spanning Google Career Certificates (Foundations of Project Management, Nov 2026), Anthropic Academy (AI Fluency: Framework & Foundations, Mar 2026), Stanford Continuing Studies (WSP 116: Conversational Intelligence, Feb 2021), Tony Robbins / Assessments 24x7 (Executive DISC & Workplace Motivators Profile, Nov 2026), and a 26-course LinkedIn Learning leadership and DEI track (recognized in the Top 12% of Learners globally for CY 2020). Every credential is backed by a live verification URL, signed institutional PDF, or local certificate capture.',
    executionSummary: {
      heading: 'Program Arc: Continuous Leadership Upskilling & AI/PGM Credentials',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Rapid shifts in AI workflows, structured program management practices, and leadership expectations required ongoing upskilling beyond day-to-day roles.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Completed 30 verified credentials and courses across Google Career Certificates (Foundations of Project Management, Nov 2026), Anthropic Academy (AI Fluency: Framework & Foundations, Mar 2026), Stanford Continuing Studies (WSP 116: Conversational Intelligence, Feb 2021), Tony Robbins / Assessments 24x7 (Executive DISC & Workplace Motivators Profile, Nov 2026), and LinkedIn Learning leadership/DEI courses (Top 12% of Learners globally for CY 2020).',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Prioritized high-signal project management, AI fluency, and stakeholder communication credentials alongside active program and engineering work.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Built a documented portfolio of 30 verified credentials across AI foundations, project management, executive communication, and leadership.',
        },
      ],
    },
    highlights: [
      {
        text: 'Executive Leadership Profile (Nov 18, 2026): Completed Certified DISC & Workplace Motivators Assessment (Tony Robbins / Assessments 24x7). Primary Style: Planner (High follow-through, cross-functional stabilizing presence, structured process refinement, and analytical problem-solving).',
        url: '/evidence/Ferreira_Martins_Mara_Alexandra_DISC_and_Motivators.pdf',
        linkLabel: 'Inspect Executive DISC & Motivators Report (PDF)',
      },
      {
        text: 'Google Career Certificates (Nov 18, 2026): Completed Foundations of Project Management (Coursera Verified Certificate ID: XVPI1ID021WB; Grade: 84.7%).',
        url: 'https://coursera.org/share/5dbd532f0b41cdcfa8ba2ab4d1a46771',
        linkLabel: 'Verify Google Credential (Coursera)',
      },
      {
        text: 'Anthropic Academy (Mar 18, 2026): Completed AI Fluency: Framework & Foundations (Verified Skilljar Certificate ID: nrvuxct3bwur).',
        url: 'https://verify.skilljar.com/c/nrvuxct3bwur',
        linkLabel: 'Verify Anthropic Credential (Skilljar)',
      },
      {
        text: 'Stanford Continuing Studies (Feb 6–7, 2021): Completed WSP 116: Conversational Intelligence: Increase Your Impact (Instructor: Amy Wong; signed by Noah Brennan-Greenbaum, Academic Records Officer).',
        url: '/evidence/stanford-wsp116-certificate.pdf',
        linkLabel: 'Official Stanford Certificate (PDF)',
      },
      {
        text: 'LinkedIn Learning Top 12% Super Learner (2020–2021): Completed 26 courses across Inclusive Leadership, DEI, Well-Being, and Team Management, including 6 individually verified public certificates and 3 additional completed management courses.',
        url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
        linkLabel: 'View #superlearning Recognition Post',
      },
    ],
    evidence: {
      note: 'Strict Verification Policy: Only post-graduate courses and certifications with direct documentary proof (live credential verification URLs, signed institutional PDFs, or verified LinkedIn Learning completion records) are included below. Expand each section to inspect individual certificate screenshots and verification links.',
      sections: [
        {
          id: 'ai-stanford-credentials',
          title: '1. Executive, Project Management & AI Credentials: Google (2026), Anthropic Academy (2026) & Stanford Continuing Studies (2021)',
          badge: '3 Official Certificates · Coursera, Skilljar & Stanford PDF',
          defaultOpen: true,
          columns: 3,
          summary:
            'Verified executive, project management, and technical credentials in industry project governance (Google Career Certificates, Nov 18, 2026), enterprise AI foundations (Anthropic Academy, Mar 18, 2026), and leadership communication (Stanford Continuing Studies WSP 116, Feb 6–7, 2021).',
          links: [
            {
              label: 'Executive Leadership Profile: DISC & Workplace Motivators (PDF)',
              url: '/evidence/Ferreira_Martins_Mara_Alexandra_DISC_and_Motivators.pdf',
              kind: 'archive',
            },
            {
              label: 'Verify Google Foundations of Project Management (Coursera)',
              url: 'https://coursera.org/share/5dbd532f0b41cdcfa8ba2ab4d1a46771',
              kind: 'external',
            },
            {
              label: 'Verify Anthropic AI Fluency Credential (Skilljar)',
              url: 'https://verify.skilljar.com/c/nrvuxct3bwur',
              kind: 'external',
            },
            {
              label: 'Official Stanford WSP 116 Certificate (Signed PDF)',
              url: '/evidence/stanford-wsp116-certificate.pdf',
              kind: 'archive',
            },
          ],
          snapshots: [
            {
              marketTag: 'GOOGLE · COURSERA · NOV 18, 2026 · ID: XVPI1ID021WB',
              src: '/evidence/cert-google-project-management-foundations.png',
              alt: 'Coursera Certificate of Completion for Mara Alexandra Ferreira Martins in Foundations of Project Management authorized by Google (November 18, 2026)',
              caption: 'Google Career Certificates · Foundations of Project Management',
              linkLabel: 'Verify on Coursera',
              url: 'https://coursera.org/share/5dbd532f0b41cdcfa8ba2ab4d1a46771',
              fit: 'contain',
              slideBg: 'white',
              expandLabel: 'Inspect Google Certificate',
              note: 'Issued November 18, 2026 via Coursera (Verification Code: XVPI1ID021WB · Grade: 84.7%).',
            },
            {
              marketTag: 'ANTHROPIC ACADEMY · MAR 18, 2026 · ID: NRVUXCT3BWUR',
              src: '/evidence/cert-anthropic-ai-fluency.png',
              alt: 'Anthropic Academy Certificate of Completion for Mara Alexandra Ferreira Martins in AI Fluency: Framework & Foundations (March 18, 2026)',
              caption: 'Anthropic Academy · AI Fluency: Framework & Foundations',
              linkLabel: 'Verify on Skilljar',
              url: 'https://verify.skilljar.com/c/nrvuxct3bwur',
              fit: 'contain',
              slideBg: 'white',
              expandLabel: 'Inspect Anthropic Certificate',
              note: 'Issued March 18, 2026 via Anthropic Academy (Skilljar Validation ID: nrvuxct3bwur).',
            },
            {
              marketTag: 'STANFORD CONTINUING STUDIES · WSP 116 · FEB 6–7, 2021',
              src: '/evidence/stanford-wsp116-certificate.png',
              alt: 'Stanford Continuing Studies Attendance Certificate for Mara Martins in WSP 116 Conversational Intelligence: Increase Your Impact (February 6-7, 2021)',
              caption: 'Stanford Continuing Studies · WSP 116 Conversational Intelligence',
              linkLabel: 'Official Stanford PDF',
              url: '/evidence/stanford-wsp116-certificate.pdf',
              fit: 'contain',
              slideBg: 'white',
              expandLabel: 'Inspect Stanford WSP 116 Certificate',
              note: 'Signed by Noah Brennan-Greenbaum (Academic Records Officer, Stanford Continuing Studies); taught by Amy Wong.',
            },
          ],
        },
        {
          id: 'linkedin-learning-certificates',
          title: '2. LinkedIn Learning Verified Certificates: DEI, Inclusive Leadership & Well-Being (2020–2021)',
          badge: '6 Individual Certificates · Live Verification Links',
          defaultOpen: true,
          columns: 3,
          summary:
            'Six individual LinkedIn Learning Certificates of Completion across Inclusive Leadership, Unconscious Bias, Psychological Safety, Well-Being, and Servant Leadership, each backed by its official LinkedIn Learning verification URL and local high-resolution certificate capture.',
          links: [
            {
              label: 'Confronting Bias (May 11, 2021)',
              url: 'https://www.linkedin.com/learning/certificates/f0f478334e0e2ea775dc61a3d47d2140612eb164d42d3be2f1eaed5f88950496',
              kind: 'external',
            },
            {
              label: 'Inclusive Mindset (Feb 16, 2021)',
              url: 'https://www.linkedin.com/learning/certificates/b5f637febd9d33590893573bd0ddfe5e7538becbd07766f1b88072e9bac1f584',
              kind: 'external',
            },
            {
              label: 'Unconscious Bias (Jan 11, 2021)',
              url: 'https://www.linkedin.com/learning/certificates/2e97bf72d99dabd626e38b9667debd20334ce1c1528a44e80d1cfe9fa9c3f21f',
              kind: 'external',
            },
            {
              label: 'Overcoming Imposter Syndrome (Oct 20, 2020)',
              url: 'https://www.linkedin.com/learning/certificates/7262b7c16c4b2e02d1be0ee1e9f04e45b0de8c4f8a1b897527fd58e806413e7a',
              kind: 'external',
            },
            {
              label: 'Thriving @ Work (Oct 13, 2020)',
              url: 'https://www.linkedin.com/learning/certificates/17e6701fa765b32aa29eefd2ff8fd1c189dec5f06ff3ce25ff69eeaf5f81d43d',
              kind: 'external',
            },
            {
              label: 'Servant Leadership (Oct 12, 2020)',
              url: 'https://www.linkedin.com/learning/certificates/7af1ce4b9ece31a777c7d6051888a209b267345c582d78ece6f397b5b9d4301a',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'LINKEDIN LEARNING · MAY 11, 2021',
              src: '/evidence/cert-linkedin-confronting-bias.png',
              alt: 'LinkedIn Learning Certificate of Completion for Confronting Bias: Thriving Across Our Differences (May 11, 2021)',
              caption: 'Confronting Bias: Thriving Across Our Differences',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/f0f478334e0e2ea775dc61a3d47d2140612eb164d42d3be2f1eaed5f88950496',
              fit: 'contain',
              expandLabel: 'Inspect Confronting Bias Certificate',
              note: 'Completed May 11, 2021 (40m) · Instructors: Vernā Myers & Arianna Huffington.',
            },
            {
              marketTag: 'LINKEDIN LEARNING · FEB 16, 2021',
              src: '/evidence/cert-linkedin-inclusive-mindset.png',
              alt: 'LinkedIn Learning Certificate of Completion for Inclusive Mindset (Feb 16, 2021)',
              caption: 'Inclusive Mindset (2020)',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/b5f637febd9d33590893573bd0ddfe5e7538becbd07766f1b88072e9bac1f584',
              fit: 'contain',
              expandLabel: 'Inspect Inclusive Mindset Certificate',
              note: 'Completed February 16, 2021 (55m) · Instructor: Dereca Blackmon.',
            },
            {
              marketTag: 'LINKEDIN LEARNING · JAN 11, 2021',
              src: '/evidence/cert-linkedin-unconscious-bias.png',
              alt: 'LinkedIn Learning Certificate of Completion for Unconscious Bias (Jan 11, 2021)',
              caption: 'Unconscious Bias (2017)',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/2e97bf72d99dabd626e38b9667debd20334ce1c1528a44e80d1cfe9fa9c3f21f',
              fit: 'contain',
              expandLabel: 'Inspect Unconscious Bias Certificate',
              note: 'Completed January 11, 2021 (23m) · Instructor: Stacey Gordon.',
            },
            {
              marketTag: 'LINKEDIN LEARNING · OCT 20, 2020',
              src: '/evidence/cert-linkedin-imposter-syndrome.png',
              alt: 'LinkedIn Learning Certificate of Completion for Overcoming Imposter Syndrome (Oct 20, 2020)',
              caption: 'Overcoming Imposter Syndrome',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/7262b7c16c4b2e02d1be0ee1e9f04e45b0de8c4f8a1b897527fd58e806413e7a',
              fit: 'contain',
              expandLabel: 'Inspect Imposter Syndrome Certificate',
              note: 'Completed October 20, 2020 (32m) · Instructor: Carolyn Goerner.',
            },
            {
              marketTag: 'LINKEDIN LEARNING · OCT 13, 2020',
              src: '/evidence/cert-linkedin-thriving-at-work.png',
              alt: 'LinkedIn Learning Certificate of Completion for Thriving @ Work: Leveraging the Connection between Well-Being and Productivity (Oct 13, 2020)',
              caption: 'Thriving @ Work: Well-Being & Productivity',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/17e6701fa765b32aa29eefd2ff8fd1c189dec5f06ff3ce25ff69eeaf5f81d43d',
              fit: 'contain',
              expandLabel: 'Inspect Thriving @ Work Certificate',
              note: 'Completed October 13, 2020 (41m) · Instructors: Arianna Huffington & Joey Hubbard.',
            },
            {
              marketTag: 'LINKEDIN LEARNING · OCT 12, 2020',
              src: '/evidence/cert-linkedin-servant-leadership.png',
              alt: 'LinkedIn Learning Certificate of Completion for Ken Blanchard on Servant Leadership (Oct 12, 2020)',
              caption: 'Ken Blanchard on Servant Leadership',
              linkLabel: 'Verify Certificate',
              url: 'https://www.linkedin.com/learning/certificates/7af1ce4b9ece31a777c7d6051888a209b267345c582d78ece6f397b5b9d4301a',
              fit: 'contain',
              expandLabel: 'Inspect Servant Leadership Certificate',
              note: 'Completed October 12, 2020 (27m) · Instructor: Ken Blanchard.',
            },
          ],
        },
        {
          id: 'superlearning-library',
          title: '3. Top 12% Super Learner Recognition & Completed Library (26 Courses)',
          badge: 'CY 2020 Top 12% · 3 Additional Management Courses',
          defaultOpen: false,
          columns: 2,
          summary:
            'Recognized by LinkedIn Learning among the Top 12% of Learners globally for CY 2020 (#superlearning), with 26 completed learning items in her LinkedIn Learning history, including additional completed management courses: Be the Manager People Won\'t Leave (Sep 22, 2021, Laurie Ruettimann), Managing Teams (Apr 29, 2020, Daisy Lovelace, 1h 11m), and Body Language and Women at Work (Apr 29, 2020, Dorie Clark).',
          links: [
            {
              label: 'LinkedIn #superlearning Top 12% Post (Feb 2, 2021)',
              url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
              kind: 'external',
            },
            {
              label: 'Course: Be the Manager People Won\'t Leave (Completed Sep 22, 2021)',
              url: 'https://www.linkedin.com/learning/be-the-manager-people-won-t-leave-2024',
              kind: 'external',
            },
            {
              label: 'Course: Managing Teams (Completed Apr 29, 2020)',
              url: 'https://www.linkedin.com/learning/managing-teams-2018',
              kind: 'external',
            },
          ],
          snapshots: [
            {
              marketTag: 'LINKEDIN #SUPERLEARNING · TOP 12% OF LEARNERS · FEB 2021',
              src: '/evidence/linkedin-superlearning-post.png',
              alt: 'Mara Martins LinkedIn post celebrating Top 12% of Learners globally on LinkedIn Learning for CY 2020 (#superlearning)',
              caption: 'LinkedIn #superlearning · Top 12% of Learners Globally (CY 2020)',
              linkLabel: 'LinkedIn Post',
              url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
              fit: 'contain',
              expandLabel: 'Inspect #superlearning Post',
              note: 'Official LinkedIn Learning recognition placing Mara in the Top 12% of Learners globally for CY 2020.',
            },
            {
              marketTag: 'COMPLETED LIBRARY · 26 LEARNING HISTORY ITEMS · SCROLL',
              src: '/evidence/linkedin-learning-completed-library.png',
              alt: 'LinkedIn Learning Completed Library showing Learning history (26) and completed courses',
              caption: 'LinkedIn Learning Completed Library (26 Courses)',
              linkLabel: 'Course Library (1–5)',
              primaryLabel: 'Completed Library (Top)',
              expandLabel: 'Open Full Completed Library Captures',
              scrollAriaLabel:
                'Scrollable preview containing top and bottom captures of LinkedIn Learning Completed Library',
              url: 'https://www.linkedin.com/learning/me/my-library/completed',
              fit: 'contain',
              extraSlides: [
                {
                  src: '/evidence/linkedin-learning-completed-library-2.png',
                  linkLabel: 'Completed Library (6–9)',
                  alt: 'Bottom half of LinkedIn Learning Completed Library showing Managing Teams (4/29/2020), Be the Manager People Won\'t Leave (9/22/2021), and Body Language and Women at Work (4/29/2020)',
                },
              ],
              note: 'Verified LinkedIn Learning completed library showing Learning history (26) and additional completed courses in team management and leadership.',
            },
          ],
        },
      ],
      snapshots: [
        {
          src: '/evidence/cert-anthropic-ai-fluency.png',
          alt: 'Anthropic Academy Certificate of Completion for AI Fluency: Framework & Foundations',
          caption: 'Anthropic Academy · AI Fluency: Framework & Foundations (Mar 18, 2026)',
        },
        {
          src: '/evidence/stanford-wsp116-certificate.png',
          alt: 'Stanford Continuing Studies Attendance Certificate for WSP 116 Conversational Intelligence',
          caption: 'Stanford Continuing Studies · WSP 116 Conversational Intelligence (Feb 6–7, 2021)',
        },
      ],
      links: [
        {
          label: 'Verify Anthropic AI Fluency Credential (Skilljar)',
          url: 'https://verify.skilljar.com/c/nrvuxct3bwur',
          kind: 'external',
        },
        {
          label: 'Official Stanford WSP 116 Certificate (PDF)',
          url: '/evidence/stanford-wsp116-certificate.pdf',
          kind: 'archive',
        },
        {
          label: 'LinkedIn #superlearning Top 12% Post (Feb 2021)',
          url: 'https://www.linkedin.com/posts/maramartinspt_thank-alwaysbelearning-superlearning-share-6762243802985062400-hA8B/',
          kind: 'external',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'apple-2026',
    type: 'role',
    era: 'ai',
    chipLabel: 'Apple 2026',
    subLabel: 'May–Sep 2026 · Contract',
    company: 'Apple (via Mindsource / WPP)',
    countryFlag: '🇺🇸',
    location: 'Bay Area, CA, USA',
    monogram: 'A26',
    logo: '/company-logos/apple.svg',
    title: 'Apple · Senior Program Manager / Producer (Contract via Mindsource / WPP)',
    officialTitle: 'Senior Program Manager / Producer (Contract via Mindsource / WPP)',
    dutiesBeyondScope:
      'Governed high-volume production operations, automated pipeline architectures, and secure cross-functional release gates for confidential, unannounced product programs.',
    period: 'May 2026 – Sep 2026 (Contract)',
    startYear: 2026,
    endYear: 2026,
    pillars: ['program', 'vendor', 'ai'],
    executionSummary: {
      heading: 'Program Arc: Production Operations & Secure Release Governance',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'High-volume production and automated pipeline operations for confidential, unannounced initiatives demanded strict security, release-gate discipline, and cross-functional coordination.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Governed production operations, automated pipeline architectures, and release gates under strict NDA constraints (100% NDA*).',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Coordinated cross-functional release gates and automated pipeline workflows while protecting unannounced program confidentiality.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Maintained governed production pipelines and release readiness across confidential May–Sep 2026 contract initiatives.',
        },
      ],
    },
    metrics: [
      {
        value: 'Confidential*',
        label: 'Program scope & deliverables (Unannounced Initiatives)',
        kind: 'scale',
        placeholder: false,
        hint: '*Apple NDA: Project codenames and specific metrics are withheld under corporate non-disclosure agreements',
        evidenceId: 'ap26-01',
      },
      {
        value: 'Confidential*',
        label: 'Automation, verification & production pipelines',
        kind: 'velocity',
        placeholder: false,
        hint: '*Apple NDA: Pipeline architectures remain confidential pending authorized public disclosure',
        evidenceId: 'ap26-02',
      },
      {
        value: '100% NDA*',
        label: 'Confidentiality & security release compliance',
        kind: 'quality',
        placeholder: false,
        hint: '*Apple NDA: Strict adherence to corporate confidentiality and secure release protocols',
        evidenceId: 'ap26-03',
      },
    ],
    highlights: [
      'Corporate Confidentiality & NDA: Governed contract program operations and deliverable pipelines for confidential unannounced initiatives under strict Apple corporate non-disclosure agreements.',
      'Public Disclosure Standards: Detailed workflows, technical architectures, and metrics remain confidential until authorized for public release.',
      'Operational Governance: Maintained 100% compliance with corporate security protocols, secure asset handoffs, and cross-functional release gates throughout the engagement.',
    ],
    evidence: {
      note: 'Confidentiality & NDA Notice: Given Apple confidentiality policies and active non-disclosure agreements covering unannounced programs, project details, codenames, and specific metrics are withheld until authorized public data can be shared.',
      sections: [
        {
          id: 'apple-confidentiality-notice',
          title: '1. Confidentiality & Non-Disclosure Notice (Apple Confidential)',
          badge: 'Apple NDA · Confidential Initiatives',
          defaultOpen: true,
          summary:
            'Given Apple confidentiality obligations and work on unannounced product programs, project specifics, architectures, and metrics are withheld pending authorized public disclosure.',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'current-2026',
    type: 'role',
    era: 'ai',
    chipLabel: 'Current · 2026',
    subLabel: 'Oct–Dec 2026 · Current',
    company: 'Autonomous AI Engineering & Executive Advisory',
    countryFlag: '🇺🇸',
    location: 'Silicon Valley, CA, USA / Global',
    monogram: '⚡',
    title: 'Current: AI Engineering, Full-Stack Architecture & Executive Program Leadership',
    officialTitle: 'Autonomous AI Engineering, Technical Upskilling & Executive Advisory',
    dutiesBeyondScope:
      'Architected and built full-stack digital experiences leveraging autonomous AI agents, multi-agent workflows, and modern web frameworks while establishing production CI/CD and localization pipelines.',
    period: 'Oct 2026 – Dec 2026 (Current)',
    startYear: 2026,
    endYear: 2026,
    isToday: true,
    pillars: ['program', 'leadership', 'ai'],
    summary:
      'Dedicated sprint phase (October to December 2026) focused on autonomous AI engineering, learning to code modern web architectures, and building a high-performance personal portfolio leveraging Google Antigravity, VS Code, GitHub, Crowdin, and Vercel while conducting strategic executive advisory.',
    executionSummary: {
      heading: 'Program Arc: Autonomous AI Engineering & Full-Stack Systems Architecture',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Bridging executive program management and hands-on software engineering by adopting autonomous AI pair-programming tools to build scalable, bilingual web applications from scratch.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Architected a multi-tier Bento box framework, integrated Crowdin CAT workflows, implemented client-side resilient fallbacks, and deployed automated Vercel CI/CD pipelines.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Balanced rapid agentic code generation with strict enterprise quality standards, full test coverage, and complete English/Portuguese bilingual parity.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Delivered an interactive, production-grade portfolio with 6 strategic pillars, 29 STAR frameworks, and a dedicated AI build journey showcase.',
        },
      ],
    },
    metrics: [
      {
        value: '29 Cards',
        label: 'STAR frameworks across 6 strategic pillars',
        kind: 'scale',
        placeholder: false,
        hint: 'Comprehensive operational leadership proof points delivered with complete EN/PT bilingual parity',
        evidenceId: 'cur26-01',
      },
      {
        value: '<48h Sprints',
        label: 'Rapid AI prototyping & cloud deployment velocity',
        kind: 'velocity',
        placeholder: false,
        hint: 'Continuous integration and instant preview deployments via GitHub and Vercel',
        evidenceId: 'cur26-02',
      },
      {
        value: '100% Parity',
        label: 'Bilingual localization & automated test reliability',
        kind: 'quality',
        placeholder: false,
        hint: 'Zero-defect test suites, strict copywriting guardrails, and resilient offline fallbacks',
        evidenceId: 'cur26-03',
      },
    ],
    highlights: [
      'Autonomous AI Engineering: Orchestrated multi-agent development workflows using Google Antigravity and VS Code, mastering full-stack React and modern build pipelines.',
      'Bilingual CAT Localization: Integrated Crowdin CAT tooling and i18next workflows to achieve simultaneous English and European Portuguese localization.',
      'Production Cloud Delivery: Configured automated GitHub branching workflows, Jest automated regression suites, and serverless Vercel deployments.',
    ],
    evidence: {
      note: 'Active Development & Executive Portfolio: Explore the live implementation, interactive STAR cards, and the technical build journey documented in this portfolio.',
      sections: [
        {
          id: 'cur-ai-portfolio',
          title: '1. Executive Portfolio & AI Build Journey',
          badge: 'Live Production Architecture',
          defaultOpen: true,
          summary:
            'Comprehensive showcase of hands-on technical skills and executive program management, documented at /how-i-built-this with live screenshots of Antigravity, VS Code, GitHub, Crowdin, and Vercel.',
          link: '/how-i-built-this',
          linkLabel: 'Explore AI Build Journey',
        },
        {
          id: 'cur-bento-systems',
          title: '2. Multimodal Bento Box & STAR Frameworks',
          badge: 'Operational Systems',
          defaultOpen: false,
          summary:
            'Structured operational system spanning 6 Strategic Pillars and 2 Specialized Domains, featuring 27 interactive STAR framework cards with verified business impact metrics.',
          link: '/experiences',
          linkLabel: 'Explore Experiences Bento Box',
        },
      ],
    },
    placeholder: false,
  },
  {
    id: 'future-2027',
    type: 'future',
    era: 'future',
    chipLabel: 'Horizon 2027',
    subLabel: '2027',
    company: 'Next Chapter · 2027',
    countryFlag: '🌐',
    location: 'USA / Global',
    monogram: '🌐',
    title: 'AI Program Leadership, Global Operations & Strategic GTM',
    period: '2027 (Coming Next)',
    startYear: 2027,
    endYear: 2027,
    pillars: ['program', 'leadership', 'ai'],
    summary:
      'Focusing 2027 strategic priorities on enterprise AI program leadership, global operations governance, and international GTM delivery.',
    executionSummary: {
      heading: 'Program Arc: AI Program Leadership & Global Operations',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Enterprise organizations scaling AI-enabled workflows and multi-market programs face complex governance, quality assurance, and cross-functional alignment challenges.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Structures forward focus across three stages: 2027 (AI program leadership, global operations, strategic GTM), 2028 (human-in-the-loop AI governance, global scale strategy, org mentorship), and 2029+ (cross-org enablement, international expansion, responsible AI operating models).',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Prioritizes sustainable governance, risk controls, and human oversight over unvetted automation or short-term volume spikes.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Provides a clear, realistic multi-year direction focused on operational rigor, AI governance, and scalable cross-functional execution.',
        },
      ],
    },
    targetSkills: ['AI Program Leadership', 'Global Operations', 'Strategic GTM'],
    highlights: [
      'Exploring opportunities in AI Program Leadership, Multi-Region Scale, and Operations Enablement.',
    ],
    evidence: {
      note: 'Forward Horizon Note: Clearly labeled as forward-looking strategic focus areas (2027, 2028, 2029+) distinct from completed historical roles and verified credentials.',
    },
    placeholder: false,
  },
  {
    id: 'future-2028',
    type: 'future',
    era: 'future',
    chipLabel: 'Horizon 2028',
    subLabel: '2028',
    company: 'Scale Horizon · 2028',
    countryFlag: '🌐',
    location: 'USA / Global',
    monogram: '🌐',
    title: 'Executive Governance, Global Scale Strategy & Org Mentorship',
    period: '2028 (Coming Next)',
    startYear: 2028,
    endYear: 2028,
    pillars: ['ai', 'leadership'],
    summary:
      'Scaling international governance frameworks, human-in-the-loop AI workflows, and organizational mentorship.',
    executionSummary: {
      heading: 'Program Arc: Scalable International Governance & Human-in-the-Loop AI',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Enterprise organizations scaling AI-enabled workflows and multi-market programs face complex governance, quality assurance, and cross-functional alignment challenges.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Centers 2028 stage focus on human-in-the-loop AI governance, global scale strategy, and organizational mentorship across international operating models.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Prioritizes sustainable governance, risk controls, and human oversight over unvetted automation or short-term volume spikes.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Provides a clear, realistic multi-year direction focused on operational rigor, AI governance, and scalable cross-functional execution.',
        },
      ],
    },
    targetSkills: ['Executive Governance', 'Global Scale Strategy', 'Org Mentorship'],
    highlights: [
      'Focusing on cross-regional governance, LLM evaluation systems, and Center of Excellence leadership.',
    ],
    evidence: {
      note: 'Forward Horizon Note: Clearly labeled as forward-looking strategic focus areas (2027, 2028, 2029+) distinct from completed historical roles and verified credentials.',
    },
    placeholder: false,
  },
  {
    id: 'future-2029',
    type: 'future',
    era: 'future',
    chipLabel: 'Horizon 2029+',
    subLabel: '2029+',
    company: 'Executive Vision · 2029+',
    countryFlag: '🌐',
    location: 'Global Executive Scope',
    monogram: '🌐',
    title: 'Executive Enablement, Global Expansion & Responsible AI Scale',
    period: '2029+ (Coming Next)',
    startYear: 2029,
    endYear: 2029,
    pillars: ['leadership', 'ai', 'program'],
    summary:
      'Centering long-term direction on cross-functional enablement, global expansion, and responsible AI scale across global teams.',
    executionSummary: {
      heading: 'Program Arc: Executive Enablement & Responsible AI Expansion',
      items: [
        {
          label: 'Context & Ambiguity:',
          text: 'Enterprise organizations scaling AI-enabled workflows and multi-market programs face complex governance, quality assurance, and cross-functional alignment challenges.',
        },
        {
          label: 'Governance & System Built:',
          text: 'Focuses 2029+ executive stage scope on cross-org enablement, international expansion, and responsible AI operating models.',
        },
        {
          label: 'Cross-Functional Trade-Offs:',
          text: 'Prioritizes sustainable governance, risk controls, and human oversight over unvetted automation or short-term volume spikes.',
        },
        {
          label: 'Measurable Outcome:',
          text: 'Provides a clear, realistic multi-year direction focused on operational rigor, AI governance, and scalable cross-functional execution.',
        },
      ],
    },
    targetSkills: ['Executive Enablement', 'Global Expansion', 'Responsible AI Scale'],
    highlights: [
      'Dedicated to cross-functional enablement, global expansion, and responsible AI operating models.',
    ],
    evidence: {
      note: 'Forward Horizon Note: Clearly labeled as forward-looking strategic focus areas (2027, 2028, 2029+) distinct from completed historical roles and verified credentials.',
    },
    placeholder: false,
  },
];
