// Data for the How I Built This Portfolio Page (EN)
// Sourced directly from actual tools, screenshots, and engineering workflows

export const buildJourneyHero = {
  eyebrow: 'AI-ACCELERATED ENGINEERING & META-PORTFOLIO',
  title: 'How I Built This Portfolio Leveraging AI',
  subheading: 'Bridging Executive Leadership, AI Orchestration, and Modern Code Craft',
  subtitle:
    'A transparency showcase of how I leveraged Google Antigravity, modern developer tools, continuous localization, and enterprise cloud architecture to design, engineer, and deploy this portfolio while mastering full-stack coding.',
  quickStats: [
    { label: 'AI Co-Pilot', value: 'Google Antigravity' },
    { label: 'Development & SCM', value: 'VS Code + GitHub' },
    { label: 'Ops & Delivery', value: 'Crowdin + Vercel' },
  ],
};

export const buildJourneyOwnership = {
  eyebrow: 'OWNERSHIP BOUNDARIES',
  title: 'What I Owned Directly vs. What Automation Executed',
  subtitle:
    'Unmistakable ownership boundaries between human executive judgment and automated AI acceleration.',
  humanOwned: {
    title: 'What I Owned Directly',
    subtitle: 'Judgment, Architecture & Governance',
    items: [
      'I defined the product structure, user journeys, and operational governance framing across Experiences, Career Timeline, and GTM systems.',
      'I set the acceptance criteria, audited split diffs line by line, verified bilingual parity across en.js and pt.js, and decided when code was safe to merge.',
      'I enforced automated test suites and isolated branch lifecycles as non-negotiable release gates so velocity never compromised stability.',
      'I engineered resilient fallback architectures for external APIs and contact workflows to ensure seamless user continuity.',
    ],
  },
  aiExecuted: {
    title: 'What the Agent & Tooling Executed',
    subtitle: 'Speed, Exploration & Verification',
    items: [
      'I directed Google Antigravity and Gemini models to draft multi-file refactors, execute terminal commands, and surface candidate implementations inside a live preview loop.',
      'I utilized Visual Studio Code, GitHub CLI, and Crowdin CAT to maintain branch isolation, manage string catalogs, and test responsive layouts.',
      'I leveraged automated Jest test suites (35 tests) and Vercel cloud CI/CD pipelines to validate builds and execute atomic edge deployments.',
    ],
  },
};

export const buildJourneyGuardrails = {
  eyebrow: 'SYSTEM INTEGRITY & RISK CONTROL',
  title: 'Failure Modes, Guardrails & Reversible Rollouts',
  subtitle:
    'How I anticipated failure modes and established engineering guardrails to contain regressions during high-speed AI development.',
  items: [
    {
      title: 'Bilingual Data & State Desynchronization',
      risk: 'High-speed AI code edits risked dropping Portuguese keys, causing text truncation, or desynchronizing STAR card counts between locales.',
      guardrail:
        'I instituted automated Jest schema assertions that verify exact 1:1 ID parity across en.js and pt.js, paired with strict character-level split diff reviews before committing.',
      outcome: 'Zero locale drift across 28 STAR cards, 7 Strategic Pillars, and 1 Specialized Domain.',
    },
    {
      title: 'Third-Party API Outages & Network Failures',
      risk: 'External service downtime (such as deactivated Jira Cloud instances or contact backends) risked rendering portfolio features blank or broken.',
      guardrail:
        'I architected resilient client-side JSON snapshots for Jira sprint tracking and built automatic mailto fallbacks for contact forms, bypassing backend failure points.',
      outcome: '100% operational availability for recruiters and visitors even when third-party cloud services are unreachable.',
    },
    {
      title: 'AI Code Hallucinations & Regression Risk',
      risk: 'Autonomous agents can introduce subtle styling breaks, unused imports, or unexpected prop mutations across complex component trees.',
      guardrail:
        'I enforced branch isolation (feature/experiences-bento-mvp), required passing all 35 Jest unit tests, and ran full production build compilation prior to every push.',
      outcome: 'A completely clean commit log across 290+ commits with instant Vercel atomic rollback capability.',
    },
  ],
};

export const buildJourneyPillars = [
  {
    id: 'antigravity-ai',
    number: '01',
    category: 'AI Agent Orchestration',
    title: 'Google Antigravity: The Autonomous AI Development Partner',
    tool: 'Google Antigravity & Gemini Models',
    badge: 'AI Orchestration',
    color: 'violet',
    image: '/assets/build-journey/antigravity-ide-preview.jpg',
    imageAlt: 'Google Antigravity dual-pane IDE with chat orchestration and live preview',
    summary:
      'I used Google Antigravity as an execution accelerator rather than an autonomous decision-maker. I wrote tight, scoped specifications, directed the agent across multi-file refactors, and audited the resulting diffs and architectural trade-offs myself before accepting changes.',
    skillsLearned: [
      'Prompt Engineering for Systems Architecture: Structuring character-exact specifications rather than vague requests.',
      'Agentic Delegation & Subagents: Coordinating focused autonomous workflows across codebase audits, terminal commands, and verification.',
      'Real-Time Test-Driven Feedback Loops: Writing and executing Jest tests automatically before landing features.',
    ],
    executionDetails:
      'Rather than relying on generic copy-paste snippets, I directed Antigravity inside a dual-pane engineering cockpit. I instructed the agent to run terminal tasks, audit datasets, and verify build health while I evaluated live SPA compilation in real time. This gave me direct control over code structure and allowed me to iterate rapidly while maintaining full ownership over system boundaries.',
    executiveTakeaway:
      'When I direct AI agents with clear specifications and verification gates, I experience firsthand how agentic workflows compress cycle times while still demanding human ownership over system boundaries, edge cases, and failure modes.',
  },
  {
    id: 'visual-studio-code',
    number: '02',
    category: 'Developer Environment & Source Control',
    title: 'Visual Studio Code: Mastering Modern IDE Workflows & State',
    tool: 'VS Code, Git Graph & React 19',
    badge: 'IDE & Code Craft',
    color: 'blue',
    image: '/assets/build-journey/vscode-editor-diff.jpg',
    imageAlt: 'Visual Studio Code side-by-side diff editor and Git Graph history',
    summary:
      'Hands-on codebase craftsmanship inside Visual Studio Code: I inspected split diffs line by line, mastered React state hierarchies, and maintained clean commit histories across 290+ commits.',
    skillsLearned: [
      'Codebase Navigation & File Architecture: Understanding modular component separation, utility libraries, and responsive Tailwind styling.',
      'Split-Diff Code Review: Auditing exact character changes between English and Portuguese datasets before committing.',
      'Interactive Debugging: Inspecting build outputs, terminal sandboxes, and npm dependency graphs.',
    ],
    executionDetails:
      'VS Code was my hands-on cockpit. With Git Graph and split-diff views, I audited every single file change character by character, ensuring that data updates in en.js were strictly matched in pt.js and checking for responsive visual fit. This direct practice demystified modern front-end frameworks like React 19, Tailwind CSS, and Craco.',
    executiveTakeaway:
      'Experiencing the developer workflow firsthand enables me to anticipate technical friction, evaluate velocity blockers, and establish realistic engineering milestones on complex multi-org programs.',
  },
  {
    id: 'github-cicd',
    number: '03',
    category: 'Version Control & Release Governance',
    title: 'GitHub: Branch Strategy, Atomic Commits & CI/CD Hygiene',
    tool: 'GitHub & Git CLI',
    badge: 'Version Control',
    color: 'emerald',
    image: '/assets/build-journey/github-repo-pipeline.jpg',
    imageAlt: 'GitHub repository dashboard showing branches, commits, and deployments',
    summary:
      'Applying enterprise release governance to my personal codebase: I established isolated feature branch lifecycles, automated testing gates (35 Jest tests), and transparent commit logs.',
    skillsLearned: [
      'Git Branching & Release Management: Developing on feature branches (feature/experiences-bento-mvp) before merging to main.',
      'Automated Quality Gates: Enforcing Jest automated test suites (35 tests) and production build compilation before every push.',
      'Commit Hygiene & Traceability: Writing descriptive semantic commit messages tied to specific architectural enhancements.',
    ],
    executionDetails:
      'With over 290 commits, the repository reflects production release governance. I kept all active development on isolated feature branches (such as feature/experiences-bento-mvp) with strict pre-commit test validation. This prevented regressions, ensured backward compatibility, and guaranteed that main remained clean and rollback-ready at all times.',
    executiveTakeaway:
      'I apply the same release train discipline I used on enterprise programs to my own codebase: clear branch boundaries, pre-merge verification gates, and reversible rollouts.',
  },
  {
    id: 'crowdin-localization',
    number: '04',
    category: 'Continuous Localization & CAT Systems',
    title: 'Crowdin: Enterprise CAT Tooling & Continuous i18n',
    tool: 'Crowdin & i18next Framework',
    badge: 'Localization & CAT',
    color: 'cyan',
    image: '/assets/build-journey/crowdin-cat-localization.png',
    imageAlt: 'Crowdin continuous localization dashboard managing English, Portuguese, and Spanish translation keys',
    summary:
      'Bringing my core domain expertise into code: I structured source string catalogs for Crowdin and i18next, managed bilingual key hierarchies, and personally verified semantic and cultural parity.',
    skillsLearned: [
      'TMS/CAT Tool Integration: Structuring source string catalogs and managing translation memory leverage across locales.',
      'Context-Aware Localization: Preventing text truncation, handling text expansion in Portuguese, and testing responsive mobile breakpoints.',
      'LQA & Semantic Accuracy: Ensuring that technical acronyms (SLA, MBR, QBR, GTM) are handled accurately in both languages.',
    ],
    executionDetails:
      'Localization is not an afterthought; I baked it into the application architecture from day one. Using Crowdin as the Computer-Assisted Translation (CAT) tool alongside i18next, I configured every component to render dynamically based on the active locale, cross-checking Portuguese (pt-PT) and English (en-US) for text expansion, layout fit, and technical acronym accuracy (SLA, MBR, QBR, GTM).',
    executiveTakeaway:
      'Treating copy and locale assets as structured, verifiable system data prevents downstream defects before they reach users, demonstrating that global readiness requires deep technical localization fluency.',
  },
  {
    id: 'vercel-cloud',
    number: '05',
    category: 'Edge Infrastructure & Hosting',
    title: 'Vercel: Production Cloud Deployment & Edge Performance',
    tool: 'Vercel Cloud Platform',
    badge: 'Cloud & Infrastructure',
    color: 'amber',
    image: '/assets/build-journey/vercel-deployment-cloud.jpg',
    imageAlt: 'Vercel deployment console showing production status at maramartins.com with analytics and security monitoring',
    summary:
      'Automating global continuous deployment: I configured edge CDN distribution, custom domain DNS routing at maramartins.com, SSL certification, and zero-downtime atomic rollouts.',
    skillsLearned: [
      'Continuous Deployment Automation: Pushes to main trigger instant preview builds and atomic production promotions.',
      'Performance & Edge Observability: Monitoring real user metrics (Core Web Vitals), edge cache hit ratios, and server responses.',
      'Security & Domain Governance: Configuring DNS A/CNAME records, custom domains, HSTS security headers, and instant rollback capabilities.',
    ],
    executionDetails:
      'I configured Vercel deployment pipelines so every push to my feature branch generated an isolated preview URL for end-to-end verification before promoting to main. I monitored Core Web Vitals, verified edge cache headers, and established instant rollback triggers to ensure zero-downtime reliability for global visitors.',
    executiveTakeaway:
      'Understanding cloud infrastructure, preview validation, and rollback mechanics equips an executive leader to partner credibly with Engineering, DevOps, and SRE leaders on safe delivery at scale.',
  },
];

export const buildJourneyMindset = {
  eyebrow: 'EXECUTIVE SYNTHESIS',
  title: 'Why Direct Technical Fluency Matters for Senior Leadership',
  quote:
    'I built this portfolio to pair my program governance background with direct, hands-on fluency in AI-assisted engineering. I set the guardrails, make the architectural calls, and verify the output, while letting AI agents and automated pipelines handle high-speed drafting and repetitive checks.',
  pillars: [
    {
      title: 'Empathy Through Direct Craft',
      description:
        'Understanding git branches, package conflicts, test suites, and edge deployments eliminates the barrier between business planning and engineering execution.',
    },
    {
      title: 'Accountable Human Ownership',
      description:
        'AI agents do not replace domain judgment; they amplify it. Strategic domain leadership dictates the guardrails and acceptance criteria, while AI handles repetitive boilerplate.',
    },
    {
      title: 'Enterprise Rigor on Any Scale',
      description:
        'Applying the same RACI frameworks, branch controls, and localization standards to this codebase proves that operational discipline works with precision at any scale.',
    },
  ],
};
