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
      'Using Google Antigravity as an interactive coding intelligence agent, executing complex multi-file refactors, automated test runs, and live browser rendering simultaneously.',
    skillsLearned: [
      'Prompt Engineering for Systems Architecture: Structuring character-exact specifications rather than vague requests.',
      'Agentic Delegation & Subagents: Coordinating focused autonomous workflows across codebase audits, terminal commands, and verification.',
      'Real-Time Test-Driven Feedback Loops: Writing and executing Jest tests automatically before landing features.',
    ],
    executionDetails:
      'Rather than relying on generic copy-paste snippets, I used Antigravity as a proactive software partner. We operated in a dual-pane layout: on the left, the agent executed terminal tasks, updated datasets, and verified code health; on the right, the application updated in real time via live SPA compilation. This established a tight feedback loop where ideas turned into robust, production-ready code in minutes.',
    executiveTakeaway:
      'As an enterprise Senior PGM, working directly with AI agents to build production software bridges the communication gap with software engineering teams, giving me direct fluency in codebases, technical debt, and system boundaries.',
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
      'Hands-on codebase craftsmanship inside Visual Studio Code: reviewing split diffs, understanding React state hierarchies, and maintaining clean git commit histories.',
    skillsLearned: [
      'Codebase Navigation & File Architecture: Understanding modular component separation, utility libraries, and responsive Tailwind styling.',
      'Split-Diff Code Review: Auditing exact character changes between English and Portuguese datasets before committing.',
      'Interactive Debugging: Inspecting build outputs, terminal sandboxes, and npm dependency graphs.',
    ],
    executionDetails:
      'VS Code was my hands-on cockpit. With Git Graph and split diff views, I audited every single file change line by line, ensuring that data updates in en.js were strictly matched in pt.js and checking for stylistic integrity. This hands-on practice demystified modern front-end frameworks like React 19, Tailwind CSS, and Craco.',
    executiveTakeaway:
      'Experiencing the developer experience firsthand allows me to anticipate development friction, evaluate velocity blockers, and establish realistic engineering milestones on large-scale software programs.',
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
      'Applying enterprise release governance to my personal codebase: multi-branch workflows, feature staging, automated testing gates, and transparent commit logs.',
    skillsLearned: [
      'Git Branching & Release Management: Developing on feature branches (feature/experiences-bento-mvp) before merging to main.',
      'Automated Quality Gates: Enforcing Jest automated test suites (34 tests) and production build compilation before every push.',
      'Commit Hygiene & Traceability: Writing descriptive semantic commit messages tied to specific architectural enhancements.',
    ],
    executionDetails:
      'With over 290 commits, the repository reflects real enterprise governance. Every feature, from the Multimodal Bento Box to the Scrum board fallback, followed an isolated branch lifecycle with strict pre-commit verification. This prevented regressions, ensured backward compatibility, and guaranteed that main remained deployable at all times.',
    executiveTakeaway:
      'The same release train principles I enforced at Microsoft and LinkedIn apply directly to software codebases: release predictability begins with branch hygiene and automated test gates.',
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
      'Bringing my core domain expertise into code: connecting continuous translation management systems, managing bilingual string keys, and ensuring 100% cultural parity.',
    skillsLearned: [
      'TMS/CAT Tool Integration: Structuring source string catalogs and managing translation memory leverage across locales.',
      'Context-Aware Localization: Preventing text truncation, handling text expansion in Portuguese, and testing responsive mobile breakpoints.',
      'LQA & Semantic Accuracy: Ensuring that technical acronyms (SLA, MBR, QBR, GTM) are handled accurately in both languages.',
    ],
    executionDetails:
      'Localization is not an afterthought; it is baked into the foundation. Using Crowdin as the centralized Computer-Assisted Translation (CAT) tool alongside i18next, every UI component renders dynamically based on the active locale, supporting Portuguese (pt-PT) and English (en-US) with full architectural symmetry.',
    executiveTakeaway:
      'True global readiness requires deep technical localization fluency: treating strings as dynamic data streams rather than static hardcoded elements.',
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
      'Automating global continuous deployment: edge CDN distribution, custom domain DNS routing at maramartins.com, SSL certification, and zero-downtime rollouts.',
    skillsLearned: [
      'Continuous Deployment Automation: Pushes to main trigger instant preview builds and atomic production promotions.',
      'Performance & Edge Observability: Monitoring real user metrics (Core Web Vitals), edge cache hit ratios, and server responses.',
      'Security & Domain Governance: Configuring DNS A/CNAME records, custom domains, HSTS security headers, and instant rollback capabilities.',
    ],
    executionDetails:
      'Hosting the portfolio on Vercel delivers sub-second page loads globally. The deployment pipeline runs continuous checks, verifies build artifacts, and provisions edge CDN caching across international points of presence (PoPs), giving recruiters and hiring managers worldwide an instantaneous browsing experience.',
    executiveTakeaway:
      'Understanding cloud infrastructure, edge caching, and DNS propagation equips an executive leader to partner credibly with DevOps, SRE, and cloud infrastructure leaders.',
  },
];

export const buildJourneyMindset = {
  eyebrow: 'EXECUTIVE SYNTHESIS',
  title: 'Why Learning to Code with AI Matters for Senior Leadership',
  quote:
    'The goal was never just to build a website; it was to master the new paradigm of software creation. When a leader pairs two decades of operational governance with hands-on AI engineering, strategic roadmaps become reality faster, and cross-functional empathy becomes second nature.',
  pillars: [
    {
      title: 'Empathy Through Direct Craft',
      description:
        'Understanding git branches, package conflicts, test suites, and edge deployments eliminates the barrier between business planning and engineering execution.',
    },
    {
      title: 'AI as a Capability Multiplier',
      description:
        'AI agents do not replace domain expertise; they amplify it. Strategic domain knowledge guides the vision, while AI handles repetitive boilerplate.',
    },
    {
      title: 'Enterprise Rigor on Personal Scale',
      description:
        'Applying the same RACI frameworks, branch controls, and localization standards to this portfolio proves that operational discipline works at any scale.',
    },
  ],
};
