// Data for the Multimodal Bento Box: Experiences Page (EN)
// Sourced directly from validated STAR models and Google L6 Operational Governance Frameworks

export const bentoHero = {
  eyebrow: 'OPERATIONAL SYSTEMS & STAR CARDS',
  title: 'My Experiences',
  subheading: 'STAR Frameworks',
  subtitle:
    'Showcasing my experience in enterprise governance models, extended workforce vendor management and field-tested processes through structured STAR cards.',
  quickStats: [
    { label: 'Strategic Pillars', value: '4 Top Pillars' },
    { label: 'Operational Domains', value: '6 Categories' },
    { label: 'Interactive Cards', value: '27 STAR Cards' },
  ],
};

export const topPillars = [
  {
    id: 'portfolio-governance',
    number: '01',
    title: 'Portfolio Governance and Framework Design',
    subtitle:
      'Design, standardize and scale operating models and review cadences across all pillars.\nEstablish structured intake, resource allocation and program prioritization processes.',
    icon: 'Layers',
    color: 'violet',
    subCards: [
      {
        id: 'pg-1',
        title: 'Global Release Train & Multi-Market Governance',
        subtitle: 'Enterprise release train coordination across 45+ international storefront markets.',
        tag: 'Portfolio Governance',
        metrics: '45+ Mkts · Zero Launch Slips',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'At Microsoft, global releases across 45+ international markets suffered from fragmented intake and uncoordinated regional marketing handoffs, putting critical launch windows at risk.',
          task:
            'Establish an end-to-end Release Train governance model aligning Product, Engineering, Geopolitical Content, and regional operations under unified milestone gates.',
          action:
            'Designed a synchronized 6-week cadence with strict T-minus operational readiness checkpoints; integrated automated pre-flight compliance checks; instituted cross-functional Launch Retrospectives.',
          result:
            'Achieved 100% on-time launch delivery across 45+ markets with zero critical geopolitical blockers, establishing the benchmark Rhythm of the Business (ROB) scorecard.',
        },
        l6Principle: 'Minimum Viable Governance (MVG) accelerates engineering velocity by eliminating ad-hoc friction.',
      },
      {
        id: 'pg-2',
        title: 'Minimum Viable Governance (MVG) Architecture',
        subtitle: 'Balancing developer velocity with regulatory compliance and cross-system parity.',
        tag: 'Framework Design',
        metrics: 'Dual-System Parity · 100% Audit Pass',
        proofAnchor: 'block',
        star: {
          situation:
            'Engineering teams paused feature rollout due to fears that compliance checkpoints would slow sprint velocity, while operations faced audit exposure across international payment flows.',
          task:
            'Reconcile engineering autonomy with regulatory compliance by designing lightweight, automated governance guardrails.',
          action:
            'Mapped existing CI/CD pipelines to embed asynchronous compliance validation via Jira/GitHub API webhooks; decoupled non-blocking administrative audits from release-blocking security gates.',
          result:
            'Preserved continuous engineering release cycles while maintaining 100% audit compliance across multi-jurisdictional fintech requirements.',
        },
        l6Principle: 'Governance must be built directly into developer workflows rather than imposed as an external hurdle.',
      },
      {
        id: 'pg-3',
        title: 'Multi-Stream Timeline Slip & Dependency Triage',
        subtitle: 'Proactive critical-path recovery across decoupled hardware and software dependencies.',
        tag: 'Dependency Triage',
        metrics: '2-Week Slip Recovered · Critical Path Protected',
        proofAnchor: 'apple-2014',
        star: {
          situation:
            'A core upstream localization API slipped by two weeks, threatening a synchronized worldwide software and support documentation milestone.',
          task:
            'Recover schedule slippage without compromising QA depth or overloading cross-functional teams.',
          action:
            'Conducted critical-path dependency analysis; isolated non-blocking string freezes; staged rolling handoffs across 24/7 Follow-the-Sun vendor shifts; prioritized Tier-1 core user flows.',
          result:
            'Absorbed the entire 2-week schedule slip with zero customer-facing launch delay and zero regression defects in localized production builds.',
        },
        l6Principle: 'Schedule management requires decoupled staging and proactive float allocation rather than reactive crunch.',
      },
    ],
  },
  {
    id: 'supplier-performance',
    number: '02',
    title: 'Supplier Performance and Vendor Governance',
    subtitle:
      'Drive Supplier Strategy, Performance Reviews (MBRs/QBRs), and KPI/SLA accountability across global vendors (e.g. Lionbridge, Moravia, Accenture, PwC, etc.).\nPartner with Microsoft/Block Procurement, Legal, and Finance on RFPs (Requests for Proposals), procurement cycles, Master Agreements, SOWs governance, and payment workflows.',
    icon: 'Users',
    color: 'cyan',
    subCards: [
      {
        id: 'sp-1',
        title: 'Global Tier-1 Vendor Ecosystem Consolidation',
        subtitle: 'Restructuring decentralized regional suppliers into a high-performance partner pool.',
        tag: 'xWS Architecture',
        metrics: '30% Cost Cut · 15+ Mkts Unified',
        proofAnchor: 'block',
        star: {
          situation:
            'At Block across 15+ international markets, 8 regional teams independently contracted local agencies on ad-hoc Time-and-Materials SOWs, creating redundant management overhead and 14-day turnaround delays.',
          task:
            'Consolidate supplier ecosystem, automate PO/invoice reconciliation, and establish predictable quality SLAs across multi-million-dollar annual spend.',
          action:
            'Partnered with Global Procurement to run an RFP consolidating fragmented agencies into a concentrated Tier-1 vendor pool; implemented 24/7 Follow-the-Sun workflows; restructured contracts to outcome-based deliverables.',
          result:
            'Delivered a verified 30% reduction in turnaround time and operational spend, enforced 100% feature parity at launch, and created a repeatable vendor capacity model.',
        },
        l6Principle: 'Consolidating vendor leverage unlocks economies of scale and enforces accountable contractual SLAs.',
      },
      {
        id: 'sp-2',
        title: 'Outcome-Based MSA & SOW Architecture',
        subtitle: 'Building annual productivity gains and quality thresholds into supplier contracts.',
        tag: 'Commercial Strategy',
        metrics: '5-10% YoY Compounding Savings · 95% SLA',
        proofAnchor: 'linkedin',
        star: {
          situation:
            'Legacy vendor master service agreements (MSAs) lacked efficiency incentives, resulting in steadily escalating annual translation and operations costs as product surface expanded.',
          task:
            'Restructure supplier commercial models to align vendor profitability with technical innovation and workflow automation.',
          action:
            'Authored performance-based SOWs incorporating compounding 5–10% YoY productivity/AI savings; embedded strict 95% quality and turnaround SLAs tied to contractual credits; instituted quarterly business reviews (QBRs).',
          result:
            'Captured sustained double-digit cost efficiency while elevating vendor partner NPS and establishing strategic co-innovation partnerships.',
        },
        l6Principle: 'Contracts should reward vendors for implementing AI and tooling efficiencies rather than billing hourly friction.',
      },
      {
        id: 'sp-3',
        title: 'Vendor Breach & 30-Day Corrective Action (CAP)',
        subtitle: 'Systemic remediation framework for chronic delivery slippage and quality dips.',
        tag: 'Vendor Escalation',
        metrics: '14-Day Recovery · Zero Launch Disruption',
        proofAnchor: 'block',
        star: {
          situation:
            'A strategic external vendor partner fell below contractual quality thresholds for three consecutive sprint cycles during a major multi-market expansion phase.',
          task:
            'Remediate vendor performance immediately without breaking continuous release delivery or destabilizing partner relationship.',
          action:
            'Issued formal notice backed by objective scorecard telemetry; initiated a mandatory 30-day Corrective Action Plan (CAP) with daily operational standups; parallelized volume allocation to backup Tier-1 vendors.',
          result:
            'Vendor successfully restored quality SLA to 98% within 14 days, avoiding costly contract termination and preventing any downstream launch impact.',
        },
        l6Principle: 'Address vendor failures with transparent objective telemetry and structured remediation before contractual severance.',
      },
    ],
    extendedSubsections: [
      {
        id: 'supplier-partner',
        number: '07',
        title: 'Supplier and Partner Governance',
        shortName: 'Supplier Governance',
        icon: 'ShieldCheck',
        description:
          'Standardizing vendor management frameworks, Statements of Work (SOWs), contract rate cards, intake flows, and SLA/SLO adherence.',
        subCards: [
          {
            id: 'spg-rfp-governance',
            title: 'Global Vendor RFP, MSA/SOW Governance & SLA Accountability',
            subtitle:
              'Leading first competitive RFP in 5+ years, establishing unified MSAs/SOWs, and enforcing MBR/QBR scorecards.',
            tag: 'Supplier Governance',
            proofAnchor: 'microsoft',
            metrics: '10% YoY Savings · 15% Efficiency · 95% Quality Threshold',
            star: {
              situation:
                'At Microsoft (within MSCOM across 40+ international markets), the organization had not run a new globalization vendor RFP in over five years, leaving vendor sourcing, SLA accountability, procurement cycles, and payment/SOW governance stagnant as scale and market needs evolved; similarly, across multi-market programs at Block (15+ markets), fragmented vendor agreements and manual billing/reconciliation steps created cost friction and inconsistent accountability.',
              task:
                'Lead a competitive RFP and overhaul supplier governance alongside Procurement, Legal, and Finance: expanding vetted supplier options, validating incumbent performance, standardizing MSAs/SOWs and KPI/SLA scorecards (tracked through MBRs/QBRs), and tightening procurement and payment workflows without disrupting global delivery.',
              action:
                'Proposed and led a structured RFP with Procurement and cross-functional stakeholders to evaluate market readiness, innovation, and continuity; guided committee vetting and approval to expand the pool of approved suppliers while validating incumbent partners; and partnered with Procurement, Legal, and Finance to standardize MSA/SOW tiers, KPI/SLA scorecards, recurring MBRs/QBRs, and cleaner PO/payment workflows.',
              result:
                'Expanded the approved supplier pool in Procurement while validating incumbent vendor capability, strengthened ongoing KPI/SLA accountability through MBRs/QBRs and standardized MSAs/SOWs, and improved operational speed and cost predictability by negotiating new clauses including 10% YoY cost savings, 15% operations optimization through innovation, and increasing quality thresholds to 95% across T1-T2 markets and 90% for Rest of World.',
            },
            l6Principle:
              'Periodic competitive RFPs, clear MSAs/SOWs, and disciplined MBR/QBR accountability protect business continuity while driving continuous innovation and commercial leverage.',
          },
        ],
      },
    ],
  },
  {
    id: 'operations-change',
    number: '03',
    title: 'Operational Enablement and Process Optimization',
    subtitle:
      'Identify bottlenecks across cross-functional partners / organizations and workflows. Introduce tooling and workflow automations (process automation and integrations).\nAnd lead operational policy integrations and/or deployments (program governance, resource compliance and program data compliance).',
    icon: 'RefreshCw',
    color: 'emerald',
    subCards: [
      {
        id: 'oc-1',
        title: 'Turning Skeptical Regional Leaders into Advocates',
        subtitle: 'Overcoming operational resistance through baseline telemetry and shared ownership.',
        tag: 'Change Leadership',
        metrics: '8 Regions Aligned · 100% Buy-In',
        proofAnchor: 'block',
        star: {
          situation:
            'Regional market leads resisted transitioning from bespoke local agencies to a unified global operating model, fearing loss of nuanced cultural quality and autonomy.',
          task:
            'Build cross-functional consensus and leadership buy-in across 8 distributed regional organizations.',
          action:
            'Ran transparent baseline quality audits comparing local vs centralized output; launched a 30-day pilot giving regional leads direct co-ownership of scorecard criteria; shared weekly telemetry dashboards.',
          result:
            'Converted skeptical regional stakeholders into active program champions, securing unanimous approval for the global operating model.',
        },
        l6Principle: 'Influence without authority is won by sharing data transparently and giving stakeholders co-authorship of change.',
      },
      {
        id: 'oc-2',
        title: 'Emergent Leadership in High-Urgency Environments',
        subtitle: 'Stepping into operational voids to establish triage clarity and multi-org alignment.',
        tag: 'Influence Without Authority',
        metrics: 'Intake SLAs Halved · 100% Cross-Org Clarity',
        proofAnchor: 'apple-2026',
        star: {
          situation:
            'During a fast-paced production contract, multiple engineering and design tracks were submitting competing unvetted requests without clear priority criteria, creating friction and missed handoffs.',
          task:
            'Step into the operational vacuum without formal managerial authority to establish structured triage and calm operating rhythm.',
          action:
            'Mapped end-to-end request lifecycle; established a centralized intake dashboard with explicit P0–P3 SLAs; coached cross-functional leads on asynchronous pre-reads and structured triage.',
          result:
            'Reduced request turnaround time by 50%, eliminated cross-team escalations, and established a durable intake system adopted across the broader group.',
        },
        l6Principle: 'Leadership is defined by solving unowned ambiguity and establishing calm clarity for the whole team.',
      },
      {
        id: 'oc-3',
        title: 'Agile Course Correction & Blameless 5-Whys Culture',
        subtitle: 'Transforming technical discoveries and operational errors into durable system resilience.',
        tag: 'Operational Resilience',
        metrics: 'Root Cause Fixed · 0 Recurrence',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'A third-party tooling migration unexpectedly broke character encoding in legacy downstream database tables, corrupting non-Latin localized test strings.',
          task:
            'Contain production risk, resolve technical debt, and establish systemic safeguards without finger-pointing.',
          action:
            'Halted affected deployment pipelines within 30 minutes; conducted a blameless 5-Whys retrospective with engineering and vendor leads; implemented automated regex linting checks in pre-commit hooks.',
          result:
            'Fully restored string pipelines with zero customer impact, permanently eliminating the root cause and fostering high psychological safety across teams.',
        },
        l6Principle: 'Blameless retrospectives convert operational failures into permanent system resilience.',
      },
    ],
    extendedSubsections: [
      {
        id: 'operational-controls',
        number: '08',
        title: 'Operational Controls and Compliance',
        shortName: 'Controls & Compliance',
        icon: 'Lock',
        description:
          'Managing access governance (Team Policies and Transitions from legacy to new workforce platforms), workforce onboarding/offboarding and operational risk mitigation.',
        subCards: [
          {
            id: 'occ-workforce-portal',
            title: 'Microsoft Careers Revamp: Contingent Workforce Portal & Labour Compliance',
            subtitle:
              'Revamping Microsoft\'s Careers Website and Workforce Portal to satisfy contingent labour laws and streamline operational handoffs.',
            tag: 'Controls & Compliance',
            proofAnchor: 'microsoft',
            metrics: 'Microsoft · Global Labour Compliance · Cross-Team Workflows',
            star: {
              situation:
                'In order to be legally compliant with Temporary Contingent Workforce and Labour Laws, the Procurement team wanted to revamp its Careers Website and Workforce Portal, which required aligning cross-functional stakeholders, content and operational workflows, and candidate or staffing visibility without fragmented handoffs, unclear status tracking, or manual bottlenecks across teams.',
              task:
                'Helped develop and operationalize the globalization of the Careers Website and Workforce Portal experience so stakeholders and workforce program teams had clear workflows, structured intake and visibility, and reliable operational execution at global scale.',
              action:
                'Partnered across product, engineering, and operational stakeholders to map end-to-end portal and workforce workflows, align on clear requirements and tracking views, and establish structured operational handoffs and visibility across the Careers Website and Workforce Portal.',
              result:
                'Delivered a cohesive Careers Website and Workforce Portal capability that streamlined cross-team coordination and operational visibility across workforce and hiring enablement workflows.',
            },
            l6Principle:
              'Strong portals and workforce systems succeed when workflow design, clear ownership, and operational visibility are built in from the start.',
          },
          {
            id: 'occ-block-temp-workers',
            title: 'Block Temporary Workers Program Proposal',
            subtitle:
              'Auditing FTE capacity, extending internal portal governance, and securing funding across five expansion markets.',
            tag: 'Workforce Governance',
            proofAnchor: 'block',
            metrics: 'Block · 5 Markets Expanded · 5 Contingent FTEs · 4-Wk Hiring',
            star: {
              situation:
                'At Block, rapid growth objectives across five additional markets and concurrent org-wide initiatives created tension with day-to-day business continuity. Existing FTE capacity and team structures could not absorb the surge without risking operational bottlenecks or compliance gaps.',
              task:
                'Partnered with cross-functional leads to audit current FTE staff and temporary staffing needs with senior management and HR, define required skill sets, propose a formal Temporary Work Program for Globalization, and secure executive funding and sign-off.',
              action:
                'Mapped workload pressures, skill gaps, and business-continuity risks across the five expansion markets; led a structured staffing audit with senior management and HR to formalize contingent needs; and presented a comprehensive program proposal outlining role profiles, governance guardrails, and budget. Concurrently orchestrated five operational integrations: 1) extended an existing partner org\'s Temp Worker Portal to globalization operations; 2) expanded the specialized agency pool to four domain-expert vendors; 3) partnered with IT on secure identity, onboarding, and offboarding admin; 4) established a standardized Master Agreement and SOW with HR and agencies; and 5) aligned with Legal on international labor laws and contractor compliance.',
              result:
                'Established a dedicated Temporary Work Program for Globalization with approved funding and predictable capacity planning across five expansion markets while safeguarding business continuity: expanded vendor pool to 4 agencies, secured funding approval for 5 extra temporary workers, accelerated hiring cycles from 4-8 weeks down to 4 weeks, and successfully launched all five target markets on time and on budget.',
            },
            l6Principle:
              'Proactive workforce governance and cross-functional portal extensions expand capacity elastically while safeguarding compliance and team health.',
          },
        ],
      },
    ],
  },
  {
    id: 'executive-health',
    number: '04',
    title: 'Executive Health and Impact Reporting',
    subtitle:
      'Maintain an Executive Health Index for Program Operations and Governance, surfacing spend, SLA compliance, resource capacity allocation and success metrics for Leadership.\nBridge operational metrics with Organization Vision, Mission, Goals, and OKRs.',
    icon: 'Activity',
    color: 'amber',
    subCards: [
      {
        id: 'eh-1',
        title: 'Leading vs. Lagging Telemetry Dashboards',
        subtitle: 'Predicting launch bottlenecks before they become executive escalations.',
        tag: 'Telemetry Architecture',
        metrics: '99% Predictive Accuracy · Zero Surprise Slips',
        proofAnchor: 'block',
        star: {
          situation:
            'Executive leadership previously relied on lagging post-launch milestone retrospectives, discovering budget overruns and quality slips only after releases had occurred.',
          task:
            'Design an executive operational telemetry model providing real-time visibility into pipeline health and leading bottleneck indicators.',
          action:
            'Built a dual-tier dashboard tracking leading metrics (intake velocity, PR review lag, vendor capacity %) alongside lagging KPIs (on-time delivery, defect density, spend variance); established weekly flash digests.',
          result:
            'Enabled leadership to spot and mitigate capacity constraints 3 weeks before release freeze, cutting surprise launch delays to zero.',
        },
        l6Principle: 'Leading indicators provide decision leverage; lagging indicators only provide an autopsy.',
      },
      {
        id: 'eh-2',
        title: 'Annual Performance Reviews + MBRs/QBRs',
        subtitle:
          'Aligning internal teams and vendors around OKRs, acting on risk decisions, and celebrating wins.',
        tag: 'Executive Governance',
        metrics: '50 to 10-20 Attendees · 3x Wkly to MBR/QBR · Fast Sign-Offs',
        proofAnchor: 'block-microsoft',
        proofAnchors: ['block', 'microsoft'],
        star: {
          situation:
            'Cross-functional operational reviews were frequently bogged down in tactical granularities, exhausting VP, senior leads, and broader teams\' time without securing decisions on critical blockers. Teams also lacked consistent structure and clear alignment with broader organizational and company vision, mission, and OKRs.',
          task:
            'Partnered with Senior Leads and executive operations/admin stakeholders to design a high-leverage review framework across key functions, orgs, and vendors anchored to consistent OKRs, KPIs, and business objectives.',
          action:
            'Established a multi-cadence review operating model spanning Annual offsites, 45-minute Quarterly Business Reviews (QBRs), and 30-minute Monthly Business Reviews (MBRs) for both internal teams and external vendors. Introduced structured agendas with a traffic-light status system to keep reviews focused and drive rapid follow-through (e.g. structuring QBRs around lead updates on goals/changes, concise team OKR alignment and wins, strategic opportunities, critical unowned risks requiring executive decisions, and next steps with clear RACI ownership). In addition, owned pre-meeting data synthesis, risk reporting, and clear sign-off asks with team owners, distributing pre-read decks in advance to ensure "no surprises" and alignment on needed decisions, followed by distributing post-meeting action items and tracking follow-through across workstreams and priorities.',
          result:
            'Streamlined executive communications and sign-offs, reduced meeting participation from over 50 people down to 10 to 20, and shifted cadence from 3x weekly reviews to structured monthly, quarterly, and annual governance with leads; improved alignment around OKRs, risks, and decision ownership, earning direct praise for executive clarity and structured operational leadership.',
        },
        l6Principle:
          'Structured governance with clear data streamlines communication, drives concrete action and sign-offs, reduces friction, and gives teams space to feel seen and heard.',
      },
      {
        id: 'eh-3',
        title: 'AI-Enabled Unit Economics & Scale Optimization',
        subtitle: 'Compressing evaluation costs while protecting edge-case and low-resource quality.',
        tag: 'Unit Economics',
        metrics: '$5 to $1.67/Unit · $10M Flat Budget Protected',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Global evaluation volume tripled from 2M to 6M tasks under a flat $10M budget envelope, while legacy 100% manual dual-rater review cost $5/task and choked onboarding.',
          task:
            'Scale evaluation throughput 3x within existing budget while protecting quality in high-hallucination language markets.',
          action:
            'Designed a risk-tiered evaluation model reserving 100% human review for complex/high-risk edge cases while deploying model-assisted pre-checks on high-confidence slices; standardized vendor onboarding templates.',
          result:
            'Compressed blended cost per evaluation task from $5 to $1.67, stayed strictly within the $10M budget, and compressed onboarding lead time from 8 weeks to 2 weeks.',
        },
        l6Principle: 'Scale is achieved not by cutting quality, but by risk-tiering human expertise where it provides the highest return.',
      },
    ],
    extendedSubsections: [
      {
        id: 'finance-opex',
        number: '09',
        title: 'Finance and OPEX Management',
        shortName: 'Finance & OPEX',
        icon: 'DollarSign',
        description: 'Unit economics modeling, PO/invoice reconciliation, and compounding efficiency gains.',
        subCards: [
          {
            id: 'fom-block',
            title: "Block - PM's Budget Ownership and Reporting",
            subtitle:
              'Transitioning from a single-resource manual bottleneck to distributed PM budget ownership and interactive fiscal dashboards.',
            tag: 'Finance & OPEX',
            proofAnchor: 'block',
            metrics: 'Block · 30 to 5-Day Invoicing Lag · 5-10% SOW Variance Control',
            star: {
              situation:
                'When joining Block, localization financial management relied on a single resource handling vendor management through heavily manual processes and invoicing cross-checks. This operating model could not scale with the planned market expansion or growing transaction volume.',
              task:
                'I took it upon my team to replace the single-point manual bottleneck with a scalable financial operating model. Thus, I partnered with HR to expand PM levels and responsibilities into end-to-end budget management (estimating, reconciling, monitoring, and reporting) and equipping teams with visual, interactive fiscal reporting.',
              action:
                'After partnering with HR to formally expand the PM role to own functional budget estimating, reconciliation, monitoring, and reporting, I co-led the creation of visual, interactive fiscal dashboards with direct-report PMs, Engineering, Finance, Senior Leads, and Vendors so PMs could self-monitor and report spend transparently rather than relying on manual cross-checks. I also arranged training and shared with PMs my own experience managing vendor budgets and cross-functional programs.',
              result:
                'Replaced a single-resource manual bottleneck with distributed PM budget accountability and interactive cross-functional fiscal visibility across PMs, Engineering, Finance, leadership, and vendors. By establishing a scalable spend-governance foundation ready for market expansion, it enabled the whole org to become budget compliant with a 5-10% quarterly budget variance factored into negotiated SOWs.',
            },
            l6Principle:
              'Scaling financial governance requires pairing role clarity and cross-functional dashboards with decentralized ownership, not adding manual bottlenecks to a single person.',
          },
          {
            id: 'fom-microsoft',
            title: 'Microsoft Procurement, SOWs & Master Agreement Governance',
            subtitle:
              'Standardizing SOW templates, volume discounting, and MSA commercial terms across 40+ international markets.',
            tag: 'Finance & OPEX',
            proofAnchor: 'microsoft',
            metrics: '$500K Cost Avoidance · 35% Cycle Time Cut · 40+ Markets',
            star: {
              situation:
                'At Microsoft (Jun. 2016 - Apr. 2020), supporting global marketing and localization operations across 40+ international markets meant working with multiple external language/vendor partners across regional teams where decentralized SOWs, inconsistent rate cards, ad-hoc SLAs, and manual tracking/invoicing cross-checks created cost friction and slow approvals.',
              task:
                'Partnered with Procurement and cross-functional stakeholders to audit supplier coverage, standardize SOWs and performance-based SLA tiers, and negotiate Master Services Agreement (MSA) commercial terms to protect budget and improve cycle times across a multi-million annual program allocation.',
              action:
                'Partnered with global Procurement to audit active localization suppliers, align cross-functional localization leads on unified SOW templates and performance-based contractual tiers, and review/negotiate MSA terms including enterprise bulk-of-work volume discounts; paired commercial terms with standardized SLAs, scorecards, and monthly/quarterly operational burn and capacity reviews with Finance and Engineering.',
              result:
                'Reduced vendor cycle times by 35% (15 to 9 days) across 40+ international markets (including cutting campaign/product localization launches from 15 days to 9 days), unlocked $500,000 in cost avoidance on the multi-million annual Microsoft Store allocation for reinvestment into high-growth markets, and sustained >90% CSAT/NPS alongside auditable 30-day invoice payment compliance.',
            },
            l6Principle:
              'Pairing standardized SOWs, bulk commercial leverage, and transparent burn telemetry turns vendor spend into predictable capacity and budget efficiency.',
          },
        ],
      },
      {
        id: 'bi-telemetry',
        number: '10',
        title: 'Operational Business Intelligence',
        shortName: 'BI & Telemetry',
        icon: 'BarChart3',
        description: 'Real-time pipeline analytics, predictive bottleneck modeling, and stakeholder dashboards.',
        subCards: [
          {
            id: 'bit-bf',
            title: 'Microsoft Campaigns - Black Friday: Real-Time Global Campaign Telemetry',
            subtitle:
              'Unified real-time Power BI performance dashboards across global and local markets.',
            tag: 'BI & Telemetry',
            proofAnchor: 'microsoft',
            metrics: '40+ Mkts · 24-48h Turnaround',
            star: {
              situation:
                'During high-velocity global events like Black Friday, internal stakeholders lacked unified, real-time visibility into campaign delivery and performance across global and local markets, risking delayed course-corrections when regional pacing or conversion trends shifted mid-event.',
              task:
                'Partner with internal teams to build Power BI reporting dashboards that delivered real-time global and per-market campaign performance visibility, supported by clear visual mockups before development.',
              action:
                'Partnered cross-functionally with internal teams to standardize KPI definitions and global-to-local market rollups; designed visual graphic mockups upfront to align stakeholders on hierarchy and data presentation before building; and built Power BI dashboards tracking live global and market-specific performance across 40+ markets with near-real-time refresh cycles (e.g. every 60 minutes).',
              result:
                'Replaced fragmented manual status checks with a single source of truth across global and local market teams during peak Black Friday windows, cutting reporting turnaround time from 3-5 days into 24-48 hours and enabling faster mid-campaign adjustments across regional stakeholders for underperforming campaigns.',
            },
            l6Principle:
              'Prototyping visual clarity first and pairing live telemetry with local market context turns raw campaign velocity into faster, coordinated execution.',
          },
          {
            id: 'bit-vendor-governance',
            title: "Microsoft Power BI's: Vendor Capacity, SLA and Operational Cost Governance",
            subtitle:
              'Unified Power BI dashboards connecting vendor throughput, on-time delivery SLAs, and operational budget guardrails.',
            tag: 'Vendor Operations',
            proofAnchor: 'microsoft',
            metrics: '5 Vendor Workstreams · 30-Day SLA & 3-Mo Forecast Visibility',
            star: {
              situation:
                'Managing vendor capacity, output, SLA adherence (including on-time delivery), and operational costs across active initiatives lacked a consolidated operational view, making it harder for teams to balance supplier workloads against budget guardrails.',
              task:
                'Design Power BI dashboards that unified vendor capacity, output, SLA performance (on-time delivery), and operational cost metrics to guide proactive capacity planning and budget governance.',
              action:
                'Collaborated with internal stakeholders to align on capacity utilization, throughput, on-time delivery SLA thresholds, and cost drivers; created visual views linking supplier output and SLA compliance directly to budget burn and capacity headroom across 5 suppliers and vendor workstreams.',
              result:
                'Gave program and budget owners real-time visibility into capacity bottlenecks, SLA adherence, and spend trajectory, improving on-time delivery visibility across all tracked deliverables and supporting tighter budget variance control, enabling up to 30 days compliance visibility and 3 months forecasting visibility without over-allocating supplier capacity.',
            },
            l6Principle:
              'When operational throughput, SLA health, and cost live in one view, governance shifts from reactive firefighting to disciplined resource and budget stewardship.',
          },
          {
            id: 'bit-1',
            title: 'Microsoft Power BI - Vendor Ops/SLAs and Business Continuity',
            subtitle:
              'Unified stage-by-stage telemetry connecting Vendor TMS and Jira into proactive SLA alerting.',
            tag: 'BI & Telemetry',
            proofAnchor: 'microsoft',
            metrics: '20+ Stakeholders · >50% Query Reduction · Automated Alerts',
            star: {
              situation:
                'Cross-functional stakeholders across product, engineering, localization, and regional teams lacked end-to-end visibility into where individual requests stood across intake, triage, translation, and deployment, which caused bottlenecks to go unnoticed until deadlines tightened and triggered frequent ad-hoc status inquiries.',
              task:
                'Coordinated vendor APIs integration, designed and architected the visual graph framework for a centralized business intelligence telemetry portal that tracked live stage-by-stage throughput and SLA adherence across the full request lifecycle, empowering stakeholders with self-service visibility and proactive bottleneck alerts.',
              action:
                'Partnered with engineering, operations, and vendor leads to standardize stage definitions and SLA targets across intake, triage, localization/translation, and deployment; aggregated real-time event and status data from Vendor CAT tools like Translation Management Systems (TMS) to internal Microsoft tools like Jira into a unified telemetry portal; and configured automated alerts for aging requests and SLA threshold breaches so owners could intervene early.',
              result:
                'Gave over 20 cross-functional stakeholders real-time self-service visibility across every pipeline stage, reducing churn by cutting queries on status by more than half, speeding up bottleneck triage before release cutoffs, and turning subjective status chasing into objective SLA governance.',
            },
            l6Principle:
              'Operational telemetry transforms subjective frustration into objective, actionable data.',
          },
          {
            id: 'bit-workforce-capacity',
            title: 'FTE & Temporary Workforce Capacity Balancing',
            subtitle:
              'Low-friction 0-to-1 capacity tracking and contingent workforce balancing across rapid team scaling.',
            tag: 'Workforce Operations',
            proofAnchor: 'block',
            metrics: 'LinkedIn & Block · 1 to 5 Contingent Scale · 5 to 10 PGMs',
            star: {
              situation:
                'At LinkedIn (managing 2 FTE direct reports and 15 linguists) and Block (scaling from 5 PMs to 10 PGMs amid market expansion), overwhelmed teams faced constant firefighting between reactive bug triage and new deliverables, while zero baseline telemetry existed to measure true workload or compare internal FTE capacity against temporary workers.',
              task:
                'Build a low-friction 0-to-1 capacity and work-allocation tracking model to relieve team overload, balance work across internal FTEs and temporary workers, and create an objective business case for expanding contingent capacity to support market expansion.',
              action:
                'Leveraged existing Jira workflows as an interim tracking layer, separating time spent on bug triage versus new project deliverables and logging off-Jira tasks inside Jira without adding administrative drag. Used those workload signals to rebalance work between FTEs and temporary workers, and at Block launched a dedicated contingent worker program scaling contractors from 1 to 5 to supplement FTE capacity for market expansion.',
              result:
                'Established immediate visibility into true workload and FTE versus temporary workforce allocation across both LinkedIn and Block, relieving team overload, scaling Block\'s temporary contractor pool from 1 to 5 alongside 5 PMs to 10 PGMs to support market expansion, and creating a repeatable data-backed capacity model.',
            },
            l6Principle:
              'Turning existing operational signals into clear capacity visibility protects overwhelmed teams and backs resource requests with objective evidence.',
          },
        ],
      },
    ],
  },
];

export const operationalDomains = [
  {
    id: 'content-operations',
    number: '01',
    title: 'Content Operations',
    shortName: 'Content Ops',
    icon: 'FileText',
    description: 'High-velocity digital asset supply chains, CMS/TMS integration, and multi-market editorial release trains.',
    subCards: [
      {
        id: 'co-1',
        title: 'Digital Asset Supply Chain Automation',
        subtitle: 'Linking engineering repositories with global Marcom content systems.',
        metrics: '67% Cycle Cut · Automated API Handoffs',
        star: {
          situation: 'Manual handoffs between code repositories and content CMS created severe release lag.',
          task: 'Automate content extraction, validation, and delivery pipeline.',
          action: 'Architected automated GitHub webhook pipeline feeding content into localization engines.',
          result: 'Cut turnaround time from 15 to 5 business days with zero manual file copying errors.',
        },
        l6Principle: 'Automating content plumbing lets creative teams focus purely on messaging quality.',
      },
      {
        id: 'co-2',
        title: 'Geopolitical Readiness & Brand Compliance',
        subtitle: 'Cross-market content validation preventing cultural and geopolitical missteps.',
        metrics: '200+ Mkts Protected · 0 Brand Violations',
        star: {
          situation: 'Multi-market storefront assets risked geopolitical and regulatory brand exposure.',
          task: 'Establish pre-flight editorial clearance gates without slowing publishing velocity.',
          action: 'Implemented standardized geopolitical clearance scorecards integrated with Legal and PR.',
          result: 'Cleared 200+ global storefront markets with 100% compliance across international guidelines.',
        },
        l6Principle: 'Geopolitical compliance must be preventative and automated rather than reactive.',
      },
    ],
  },
  {
    id: 'eval-feedback',
    number: '02',
    title: 'Evaluation and Feedback at Scale',
    shortName: 'Eval & Feedback',
    icon: 'CheckSquare',
    description: 'Human-in-the-loop validation, rater calibration, and high-throughput feedback loops.',
    subCards: [
      {
        id: 'ef-1',
        title: 'Risk-Tiered Sampling & Rater Calibration',
        subtitle: 'Focusing human expertise on ambiguous edge cases and high-hallucination slices.',
        metrics: '3x Volume Scaled · 98% Inter-Rater Reliability',
        star: {
          situation: 'Blanket manual dual-rater evaluation was unsustainable under surging model outputs.',
          task: 'Design an adaptive evaluation architecture that scales with volume without budget spikes.',
          action: 'Instituted stratified sampling based on uncertainty scores, directing human raters to low-confidence bands.',
          result: 'Maintained 98% inter-rater calibration while reducing total manual evaluation burden by 60%.',
        },
        l6Principle: 'Human evaluation should be reserved for high-leverage ambiguity and strategic edge cases.',
      },
    ],
  },
  {
    id: 'ai-data-training',
    number: '03',
    title: 'AI Data and Training',
    shortName: 'AI Data & Training',
    icon: 'Cpu',
    description: 'LLM fine-tuning datasets, prompt engineering, MTPE optimization, and model safety.',
    subCards: [
      {
        id: 'ai-1',
        title: 'MTPE Turnaround Acceleration (15 to 5 Days)',
        subtitle: 'Enterprise machine translation post-editing optimization and domain tuning.',
        metrics: '67% Cycle Time Cut · 99.2% Quality SLA',
        star: {
          situation: 'Legacy translation memory workflows took 15 business days for major software releases.',
          task: 'Accelerate localization delivery by integrating trained neural MT engines with human-in-the-loop review.',
          action: 'Fine-tuned custom domain MT engines on historical approved bilingual corpora; established post-editing guidelines.',
          result: 'Compressed delivery cycles to 5 days while meeting or exceeding human translation quality scores.',
        },
        l6Principle: 'AI workflow acceleration requires rigorous domain fine-tuning and standardized human review rubrics.',
      },
    ],
  },
  {
    id: 'testing-response',
    number: '04',
    title: 'Testing + Real-Time Response',
    shortName: 'Testing & Real-Time',
    icon: 'Zap',
    description: 'SLA incident triage, 24/7 Follow-the-Sun response, and automated regression testing.',
    subCards: [
      {
        id: 'tr-1',
        title: '24/7 Follow-the-Sun Incident Triage',
        subtitle: 'Decoupled multi-regional shift handoffs ensuring continuous operational coverage.',
        metrics: '<30 Min P0 Triage · 24/7 Active Handoffs',
        star: {
          situation: 'Critical release blockers identified in European evening hours stalled until US morning.',
          task: 'Architect a 24/7 Follow-the-Sun operational handoff model across global vendor hubs.',
          action: 'Standardized daily asynchronous shift handoff briefs and automated P0 escalation webhooks.',
          result: 'Eliminated overnight idle delays and achieved sub-30-minute response SLAs for critical blockers.',
        },
        l6Principle: 'Follow-the-Sun operations require standardized asynchronous handoff artifacts to prevent context loss.',
      },
    ],
  },
  {
    id: 'global-language',
    number: '05',
    title: 'Global Language Services',
    shortName: 'Language Services',
    icon: 'Languages',
    description: 'Global Language Coverage and Localization Solutions.',
    subCards: [
      {
        id: 'gl-1',
        title: 'Enterprise Terminology Center of Excellence (CoE)',
        subtitle: 'Unifying global corporate voice across distributed product ecosystems.',
        metrics: '100% Global Parity · 26+ Languages',
        star: {
          situation: 'Inconsistent terminology across product, marketing, and support eroded brand trust internationally.',
          task: 'Centralize enterprise terminology governance into an accessible self-service platform.',
          action: 'Built a cloud-based terminology portal with automated linting extensions for engineering and marketing.',
          result: 'Achieved 100% brand terminology parity across 26 languages and cut linguistic bug filings by 45%.',
        },
        l6Principle: 'Terminology consistency is a core product quality attribute, not an afterthought.',
      },
    ],
  },
  {
    id: 'strategy-enablement',
    number: '06',
    title: 'Strategy Enablement and Vendor Management',
    shortName: 'Strategy Enablement',
    icon: 'TrendingUp',
    description: 'Supplier strategy, governance, compliance, budget controls and cross-operational tooling.',
    subCards: [
      {
        id: 'se-1',
        title: 'MSP Partner Program & Strategic Sourcing',
        subtitle: 'Scaling specialized agency bandwidth while maintaining strict enterprise governance.',
        metrics: '20-Vendor Partner Ecosystem · 100% Capacity Scale',
        star: {
          situation: 'Core internal team capacity was constrained during massive COVID-19 remote work expansion.',
          task: 'Build a scalable Managed Service Provider (MSP) ecosystem without growing internal FTE headcount.',
          action: 'Architected a hybrid operational model onboarding vetted MSP partners with standardized SLAs and security controls.',
          result: 'Successfully scaled throughput by 300% to support global campaign rollouts across 17 international markets.',
        },
        l6Principle: 'Strategic vendor ecosystems act as elastic multipliers for core engineering and product teams.',
      },
    ],
  },
];
