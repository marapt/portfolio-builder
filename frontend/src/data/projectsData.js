// Detailed project data for individual project pages

export const projectDetails = {
  'global-marketing-localization': {
    id: 'global-marketing-localization',
    title: 'Global Marketing Localization',
    description: 'Led end-to-end localization of marketing campaigns across 40+ languages for a Fortune 500 tech company, driving global brand consistency and market penetration.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['Marketing', 'Localization', 'Strategy', 'Global'],
    duration: '18 months',
    teamSize: '25+ members',
    scope: '40+ languages',
    liveUrl: null,
    overview: `This comprehensive marketing localization initiative transformed how a Fortune 500 technology company approached global market expansion. By implementing a centralized localization strategy, we achieved unprecedented consistency across all marketing touchpoints while significantly reducing time-to-market for campaign launches.

The project encompassed digital marketing assets, print collateral, video content, social media campaigns, and website localization across EMEA, APAC, and LATAM regions. Our approach balanced global brand guidelines with local market nuances, ensuring cultural relevance while maintaining brand integrity.`,
    challenges: [
      'Inconsistent brand messaging across 40+ regional markets leading to fragmented customer experience',
      'Lengthy approval processes causing delays in campaign launches by 6-8 weeks',
      'Multiple vendors with varying quality standards and no centralized terminology management',
      'Limited visibility into localization spend and ROI across marketing initiatives'
    ],
    solutions: [
      'Implemented centralized Translation Management System (TMS) with integrated terminology database',
      'Established regional review workflows with clear escalation paths and SLAs',
      'Created comprehensive style guides and glossaries for each target market',
      'Developed real-time dashboards for cost tracking and quality metrics'
    ],
    results: [
      { value: '60%', label: 'Faster Time-to-Market' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '98%', label: 'Quality Score' },
      { value: '40+', label: 'Languages Supported' }
    ],
    locales: {
      pt: {
        title: 'Localização de Marketing Global',
        description: 'Liderei a localização de ponta a ponta de campanhas de marketing em mais de 40 idiomas para uma empresa de tecnologia Fortune 500.',
        overview: `Esta iniciativa abrangente de localização de marketing transformou a forma como uma empresa de tecnologia Fortune 500 abordou a expansão do mercado global. Ao implementar uma estratégia de localização centralizada, alcançamos uma consistência sem precedentes em todos os pontos de contato de marketing.`,
        challenges: [
          'Mensagens de marca inconsistentes em mais de 40 mercados regionais',
          'Processos de aprovação longos causando atrasos de 6 a 8 semanas',
          'Múltiplos fornecedores com padrões de qualidade variados',
          'Visibilidade limitada dos gastos de localização e ROI'
        ],
        solutions: [
          'Implementação de Sistema de Gestão de Tradução (TMS) centralizado',
          'Estabelecimento de fluxos de revisão regional com SLAs claros',
          'Criação de guias de estilo abrangentes para cada mercado',
          'Desenvolvimento de painéis em tempo real para métricas de custo e qualidade'
        ],
        results: [
          { value: '60%', label: 'Time-to-Market mais rápido' },
          { value: '40%', label: 'Redução de Custos' },
          { value: '98%', label: 'Pontuação de Qualidade' },
          { value: '40+', label: 'Idiomas Suportados' }
        ]
      }
    },
    technologies: [
      'SDL Trados',
      'memoQ',
      'Smartling',
      'Adobe Experience Manager',
      'Marketo',
      'Salesforce',
      'Tableau',
      'Terminology Management'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop', caption: 'Campaign Dashboard' },
      { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop', caption: 'Team Collaboration' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', caption: 'Analytics Review' }
    ]
  },
  
  'ai-translation-engine': {
    id: 'ai-translation-engine',
    title: 'AI Translation Engine',
    description: 'Implemented and optimized neural machine translation workflows, reducing time-to-market by 60% while maintaining enterprise-grade quality standards.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['AI', 'NMT', 'Machine Learning', 'Optimization'],
    duration: '12 months',
    teamSize: '15 members',
    scope: 'Enterprise-wide',
    liveUrl: null,
    caseStudyUrl: '/case-studies/training-nmt',
    overview: `This transformative project introduced AI-powered neural machine translation (NMT) into an enterprise localization workflow, fundamentally changing how content was processed and delivered across global markets.

By combining custom-trained NMT engines with intelligent routing and human post-editing workflows, I achieved dramatic improvements in both speed and quality. The system learns continuously from corrections, improving accuracy over time while reducing the human effort required for each content type.`,
    challenges: [
      'High volume of repetitive content requiring translation with limited human resources',
      'Inconsistent quality from generic machine translation engines for specialized terminology',
      'Integration complexity with existing content management and workflow systems',
      'Resistance from linguists concerned about AI replacing human translators'
    ],
    solutions: [
      'Deployed custom-trained NMT engines using domain-specific training data and terminology',
      'Implemented adaptive machine translation with continuous learning from post-edits',
      'Created intelligent content routing based on content type, complexity, and quality requirements',
      'Designed human-in-the-loop workflows that augment rather than replace linguist expertise'
    ],
    results: [
      { value: '60%', label: 'Time Reduction' },
      { value: '40%', label: 'Cost Savings' },
      { value: '94%', label: 'MTPE Efficiency' },
      { value: '2M+', label: 'Words/Month' }
    ],
    locales: {
      pt: {
        title: 'Motor de Tradução por IA',
        description: 'Implementação e otimização de fluxos de tradução automática neural, reduzindo o time-to-market em 60%.',
        overview: `Este projeto transformador introduziu a tradução automática neural (NMT) alimentada por IA em um fluxo de trabalho de localização empresarial.`,
        challenges: [
          'Alto volume de conteúdo repetitivo',
          'Qualidade inconsistente de motores genéricos',
          'Complexidade de integração tecnológica',
          'Resistência de linguistas à adoção de IA'
        ],
        solutions: [
          'Implantação de motores NMT treinados sob medida',
          'Implementação de tradução automática adaptativa',
          'Roteamento inteligente de conteúdo',
          'Design de fluxos human-in-the-loop'
        ],
        results: [
          { value: '60%', label: 'Redução de Tempo' },
          { value: '40%', label: 'Economia de Custos' },
          { value: '94%', label: 'Eficiência de MTPE' },
          { value: '2M+', label: 'Palavras/Mês' }
        ]
      }
    },
    technologies: [
      'Neural Machine Translation',
      'TensorFlow',
      'Custom NMT Training',
      'API Integration',
      'Quality Estimation',
      'Adaptive MT',
      'Python',
      'Cloud Infrastructure'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop', caption: 'NMT Architecture' },
      { url: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop', caption: 'Quality Metrics' },
      { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop', caption: 'Performance Dashboard' }
    ]
  },
  
  'localization-training-program': {
    id: 'localization-training-program',
    title: 'MIIS Teaching & AI Speaker Series',
    description: 'Visiting Professor at Middlebury Institute of International Studies, teaching graduate-level courses on Translation and Localization Management while leading the AI in Localization Speaker Series.',
    heroImage: '/miis-ai-series.jpg',
    tags: ['Education', 'AI', 'Localization', 'MIIS', 'Speaker Series'],
    duration: 'Jul 2023 - Jul 2025',
    teamSize: '90+ Total Students',
    scope: 'Graduate Program',
    liveUrl: null,
    overview: `As a Visiting Professor at the Middlebury Institute of International Studies (MIIS), one of my main goals is to empower students to hear real life experiences beyond the classroom and my own perspectives or life experiences.

I designed and launched the institute's first AI Event Series "AI in Localization" by collaborating with industry leaders from GitLab, Block, Coupa, Smartling, and more. This initiative brings real-world insights directly to students while building bridges between academia and industry.

Through teaching graduate-level courses on Translation and Localization Management Program, I advocate for Responsible AI adoption in Localization, preparing the next generation of localization professionals for an AI-enhanced industry.`,
    challenges: [
      'Bridging the gap between academic theory and real-world industry practices',
      'Keeping curriculum current with rapidly evolving AI and localization technologies',
      'Connecting students with industry leaders for mentorship and career opportunities',
      'Preparing students for an AI-transformed localization industry'
    ],
    solutions: [
      'Launched the AI in Localization Speaker Series featuring industry experts from leading tech companies',
      'Designed courses that combine theoretical foundations with hands-on, practical projects',
      'Built partnerships with companies like GitLab, Block, Coupa, and Smartling for guest lectures',
      'Created curriculum focusing on Responsible AI adoption and ethical considerations in localization'
    ],
    results: [
      { value: '90+', label: 'Total Students' },
      { value: '3', label: 'Courses Taught' },
      { value: '10+', label: 'Industry Speakers' },
      { value: '2 yrs', label: 'Program Duration' }
    ],
    locales: {
      pt: {
        title: 'Ensino no MIIS e Série de Palestras de IA',
        description: 'Professora Visitante no Middlebury Institute, lecionando cursos de pós-graduação em Gestão de Tradução e Localização.',
        overview: `Como Professora Visitante no Middlebury Institute of International Studies (MIIS), um dos meus principais objetivos é capacitar os alunos a ouvirem experiências da vida real além da sala de aula.`,
        challenges: [
          'Preencher a lacuna entre teoria acadêmica e prática da indústria',
          'Manter o currículo atualizado com tecnologias de IA em rápida evolução',
          'Conectar alunos com líderes da indústria para mentoria',
          'Preparar alunos para uma indústria de localização transformada pela IA'
        ],
        solutions: [
          'Lançamento da Série de Palestras AI in Localization',
          'Design de cursos que combinam fundamentos teóricos com projetos práticos',
          'Parcerias com empresas como GitLab, Block, Coupa e Smartling',
          'Currículo focado em adoção responsável de IA'
        ],
        results: [
          { value: '90+', label: 'Total de Alunos' },
          { value: '3', label: 'Cursos Lecionados' },
          { value: '10+', label: 'Palestrantes da Indústria' },
          { value: '2 anos', label: 'Duração do Programa' }
        ]
      }
    },
    technologies: [
      'Zoom',
      'Canvas',
      'Responsible AI'
    ],
    // Original broad tech list (reusable for other pages):
    // 'AI/ML in Localization', 'Translation Management Systems', 'Go-to-Market Strategy',
    // 'Program Management', 'Smartling', 'LLM Applications', 'Responsible AI'
    technologiesTitle: 'Educational Tools & Infrastructure',
    technologiesBadge: 'Classroom toolkit',
    credentialBlock: {
      institution: 'Middlebury Institute of International Studies at Monterey',
      role: 'Visiting Professor',
      url: 'https://www.middlebury.edu/institute/people/mara-martins',
      archiveUrl: 'https://web.archive.org/web/20250211181739/https://www.middlebury.edu/institute/people/mara-martins',
      badgeText: "As Published By The Institute",
      headshot: '/miis-headshot.jpg',
      bio: [
        'Professor Martins has been in the localization industry for over fourteen years and has worked with leading companies like Sony, Apple, LinkedIn, and Square. Mara’s career journey offers a wide range of experience from diverse roles in both supplier and client side. Her career path includes roles such as Translator, Project and Program Manager and Localization Leader.',
        'Mara’s career spans a wide range of fields, including E-commerce, Retail, Marketing, and Customer Support, providing her with valuable insights. She has experience in managing teams and E2E localization processes. Mara also acted as an ambassador for geopolitical localization by educating stakeholders and business partners, emphasizing the critical role of localization within the organizations.',
        'As a Program Manager at Microsoft Mara led the MS Store E-commerce localization program for over 200 products and 195 languages and managed budgets exceeding $2M. As a Manager at Linkedin and Square, she led the Marketing & Project Managers team. She also strategized and partnered with company leadership on international growth strategy and language support expansion. At Monterey Institute, Professor Martins now focuses on her role as an educator, bringing her industry expertise to the academic setting and is dedicated to help the next generation of localizers build a successful career in Localization.',
        'Mara’s pedagogical approach is a combination of sharing her own experiences and industry learnings with simulating real-life situations with students to navigate career challenges and providing a toolkit that can lead students to find their own discovery path.'
      ],
    },
    gallery: [
      { url: '/miis-guest-speakers.jpg', caption: 'Guest Speakers: Jose Palomares & Ernesto Cabanes on GTM Strategy', link: 'https://www.linkedin.com/posts/maramartinspt_as-a-professor-at-miis-one-of-my-main-goals-ugcPost-7317937686097342464-_OIn' },
      { url: '/miis-ai-series.jpg', caption: 'AI Speaker Series: Adelina Cristovao & Rodrigo Cristina', link: 'https://www.linkedin.com/posts/maramartinspt_id-like-to-give-a-public-thanks-to-our-incredible-share-7325951062819983360-j3dn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAOLIVwBajugFT0p3mD4pY_GTdLq7wdc2p4' },
      { url: '/miis-smartling.jpg', caption: 'AI Speaker Series: Olga Beregovaya & Marina Sánchez Torrón from Smartling', link: 'https://www.linkedin.com/posts/maramartinspt_id-like-to-give-a-public-thanks-to-our-incredible-share-7327805130374815744-WLgE' }
    ],
    linkedInPosts: [
      {
        title: 'Guest Speakers on Go-to-Market (GTM)',
        description: 'I\'d like to give a public thanks to our incredible guest speakers Jose Palomares and Ernesto Cabanes for joining our Advanced Localization PM class to share real-world insights on Go-to-Market (GTM).',
        url: 'https://www.linkedin.com/posts/maramartinspt_as-a-professor-at-miis-one-of-my-main-goals-ugcPost-7317937686097342464-_OIn',
        image: '/miis-guest-speakers.jpg'
      },
      {
        title: 'Howard Steinberg - Behind the Scenes',
        description: 'I\'d like to say thank you to Howard Steinberg from Bridgehead Media for his "behind the scenes" presentation. Howard talked to students about his experience as a corporate listener and gave solid advice on being persistent in a world in constant change.',
        url: 'https://www.linkedin.com/posts/maramartinspt_miis-localization-share-7327808671315382272-Gpo3',
        image: '/miis-howard.jpg'
      },
      {
        title: 'AI Speaker Series - Smartling',
        description: 'I\'d like to give a public thanks to our incredible guest speakers Olga Beregovaya and her MT expert colleague Marina Sánchez Torrón for presenting at the AI Speaker Series last week at MIIS.',
        url: 'https://www.linkedin.com/posts/maramartinspt_id-like-to-give-a-public-thanks-to-our-incredible-share-7327805130374815744-WLgE',
        image: '/miis-smartling.jpg'
      }
    ]
  },
  
  'polyglotai-translator': {
    id: 'polyglotai-translator',
    title: 'AI Polyglots',
    description: 'Break every language barrier. Everywhere. An experimental platform that allows you to communicate across language barriers using text, voice, sign language, and more.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    tags: ['AI', 'Translation', 'Accessibility', 'Innovation', 'Open Source'],
    duration: 'Ongoing',
    teamSize: 'Solo Project',
    scope: 'Global',
    liveUrl: 'https://aipolyglots.com/',
    githubUrl: process.env.REACT_APP_POLYGLOT_GITHUB_URL || 'https://github.com/marapt/PolyglotAI-Web',
    overview: `AI Polyglots is an experimental platform that allows you to communicate across language barriers using text, voice, sign language, and more. Translate text, voice, sign language, and messages across 100+ languages. Integrate with WhatsApp, phone calls, websites, and any app through our API.

Built with cutting-edge AI technology, the application provides real-time translation across multiple modalities, making it invaluable for international travelers, deaf and hard-of-hearing communities, and global business communications.

This project is open source and available on GitHub as part of my commitment to advancing AI accessibility in localization.`,
    challenges: [
      'Creating a unified interface for multiple translation modalities',
      'Ensuring accessibility for users with different abilities',
      'Maintaining translation accuracy across diverse input types',
      'Building a responsive, intuitive user experience'
    ],
    solutions: [
      'Designed clean, modal-based interface with clear navigation between translation types',
      'Implemented WCAG-compliant accessibility features throughout the application',
      'Integrated advanced AI models for each translation modality',
      'Created responsive design optimized for both desktop and mobile use'
    ],
    results: [
      { value: '3', label: 'Translation Modes' },
      { value: '100+', label: 'Languages' },
      { value: 'Real-time', label: 'Processing' },
      { value: 'WCAG', label: 'Accessible' }
    ],
    locales: {
      pt: {
        title: 'AI Polyglots',
        description: 'Quebre todas as barreiras linguísticas. Em qualquer lugar. Uma plataforma experimental que permite a comunicação através de barreiras linguísticas usando texto, voz, linguagem gestual e muito mais.',
        overview: `O AI Polyglots é uma plataforma experimental que permite comunicar através de barreiras linguísticas utilizando texto, voz, linguagem gestual e muito mais. Traduza texto, voz, linguagem gestual e mensagens em mais de 100 idiomas. Integre com o WhatsApp, chamadas telefónicas, sites e qualquer aplicação através da nossa API.`,
        challenges: [
          'Criação de uma interface unificada para múltiplas modalidades',
          'Garantia de acessibilidade para usuários com diferentes habilidades',
          'Manutenção da precisão da tradução em tipos de entrada diversos',
          'Construção de uma experiência de usuário responsiva e intuitiva'
        ],
        solutions: [
          'Design de interface limpa baseada em modais',
          'Implementação de recursos de acessibilidade em conformidade com WCAG',
          'Integração de modelos avançados de IA para cada modalidade',
          'Criação de design responsivo otimizado para desktop e mobile'
        ],
        results: [
          { value: '3', label: 'Modos de Tradução' },
          { value: '100+', label: 'Idiomas' },
          { value: 'Tempo Real', label: 'Processamento' },
          { value: 'WCAG', label: 'Acessível' }
        ]
      }
    },
    technologies: [
      'React',
      'AI/ML APIs',
      'Speech Recognition',
      'Sign Language Recognition',
      'Tailwind CSS',
      'FastAPI',
      'Real-time Processing'
    ],
    gallery: [
      { url: '/polyglot-text.jpg', caption: 'Text Translation - Multilingual Support' },
      { url: '/polyglot-voice.jpg', caption: 'Voice Translation Interface' },
      { url: '/polyglot-sign.jpg', caption: 'Sign Language to Text Feature' }
    ]
  },

  'jira-scrum-board': {
    id: 'jira-scrum-board',
    title: 'Jira + AI Automation',
    description: 'How I automated my live Jira Cloud Scrum dashboard with real sprint metrics using Google Antigravity, Python Git sync hooks, and a hardened FastAPI proxy.',
    heroImage: '/assets/build-journey/jira-live-agile-board.jpg',
    tags: ['Jira Cloud', 'Antigravity AI', 'FastAPI Proxy', 'Live Telemetry', 'Scrum'],
    duration: 'Continuous Live Sync (Sprint 3)',
    teamSize: 'Solo (AI-Augmented)',
    scope: 'End-to-End Jira REST API & Live Telemetry',
    liveUrl: '/scrum-board',
    liveUrlLabel: 'Open Live Jira Dashboard',
    caseStudyUrl: '/scrum-board',
    caseStudyLabel: 'Open Live Jira Dashboard',
    caseStudyBannerTitle: 'Live Jira + Antigravity Scrum Dashboard',
    caseStudyBannerSubtitle: 'Inspect real-time Sprint 3 burndown metrics (61% completion across 18 PJM issues), the 5-phase strategic delivery roadmap, and interactive ticket drawers.',
    overview: `This project showcases how I architected an automated, self-healing Jira Cloud telemetry pipeline and live Scrum dashboard using Google Antigravity, Python Git hooks, and a hardened FastAPI backend proxy.

Rather than maintaining static status slides or manual spreadsheets, I connected my development environment directly to Atlassian Jira Cloud (Project Key: PJM). As features, security gates, and localization milestones are built in Antigravity and VS Code, automated sync workflows update issue states and surface real-time sprint completion, 5-phase delivery roadmaps, and interactive ticket drawers on the live dashboard.`,
    challenges: [
      'Eliminating manual status reporting by synchronizing live code execution in Google Antigravity and VS Code directly with Atlassian Jira Cloud (PJM board)',
      'Protecting Atlassian API tokens and preventing CORS exposure while serving real-time board, sprint, and roadmap endpoints to public visitors',
      'Guaranteeing 100% dashboard uptime and real metric visibility even when external cloud APIs or backend containers experience cold starts or downtime',
      'Translating raw Jira ticket JSON into an executive-ready view combining active sprint velocity, a 5-phase strategic roadmap, and bilingual (EN/PT) issue inspection'
    ],
    solutions: [
      'Built automated Python workspace-to-Jira sync scripts triggered via Git commit workflows in Antigravity to keep PJM epics and tasks aligned with real code delivery',
      'Engineered a FastAPI proxy layer (/api/jira/board, /sprints, /roadmap) hardened with internal x-api-key authentication to fetch live Jira Cloud data securely',
      'Designed an automatic zero-downtime failover architecture in jiraService.js (Promise.allSettled + projectStatusData.json snapshot) so the board never renders an empty state',
      'Created a responsive Scrum & Roadmap UI at /scrum-board featuring live completion progress bars, 5-stage delivery tracking (Discovery, Strategy, Infra, Production, Launch), and slide-out ticket drawers'
    ],
    results: [
      { value: '18', label: 'Tracked PJM Epics & Tasks' },
      { value: '61%', label: 'Sprint 3 Velocity (11/18 Done)' },
      { value: '5 Phases', label: 'Strategic Delivery Roadmap' },
      { value: '100%', label: 'Live API + Snapshot Uptime' }
    ],
    locales: {
      pt: {
        title: 'Jira + Automação com IA',
        description: 'Como automatizei o meu dashboard Jira Cloud Scrum ao vivo com métricas reais de sprint utilizando Google Antigravity, hooks Git em Python e um proxy FastAPI seguro.',
        overview: `Este projeto demonstra como concebi um pipeline automatizado de telemetria Jira Cloud e um dashboard Scrum ao vivo utilizando o Google Antigravity, hooks Git em Python e um proxy de backend FastAPI seguro.

Em vez de manter apresentações estáticas de estado ou folhas de cálculo manuais, interliguei o meu ambiente de desenvolvimento diretamente ao Atlassian Jira Cloud (Chave do Projeto: PJM). À medida que funcionalidades, controlos de segurança e marcos de localização são desenvolvidos no Antigravity e no VS Code, fluxos automatizados sincronizam o estado das tarefas e apresentam métricas reais de conclusão de sprint, roteiros de entrega em 5 fases e gavetas interativas de detalhes no dashboard ao vivo.`,
        liveUrlLabel: 'Abrir Dashboard Jira ao Vivo',
        caseStudyLabel: 'Abrir Dashboard Jira ao Vivo',
        caseStudyBannerTitle: 'Dashboard Scrum ao Vivo: Jira + Antigravity',
        caseStudyBannerSubtitle: 'Consulte em tempo real as métricas de execução da Sprint 3 (61% de conclusão em 18 tarefas PJM), o roteiro estratégico de 5 fases e os detalhes interativos de cada tarefa.',
        challenges: [
          'Eliminar relatórios de estado manuais sincronizando a execução de código no Google Antigravity e VS Code diretamente com o Atlassian Jira Cloud (quadro PJM)',
          'Proteger tokens de API da Atlassian e evitar exposição de CORS ao disponibilizar endpoints em tempo real de quadro, sprints e roteiro para visitantes públicos',
          'Garantir 100% de disponibilidade do dashboard e visibilidade de métricas reais mesmo quando APIs externas ou servidores sofrem latência ou indisponibilidade',
          'Transformar dados JSON brutos do Jira numa vista executiva combinando velocidade de sprint ativa, roteiro estratégico de 5 fases e inspeção bilingue (EN/PT)'
        ],
        solutions: [
          'Desenvolvimento de scripts Python de sincronização automática entre o workspace e o Jira acionados por commits Git no Antigravity para manter épicos e tarefas PJM alinhados com a entrega real',
          'Construção de uma camada proxy em FastAPI (/api/jira/board, /sprints, /roadmap) protegida por autenticação interna x-api-key para consultar dados do Jira Cloud com segurança',
          'Arquitetura de contingência automática sem tempo de inatividade em jiraService.js (Promise.allSettled + snapshot projectStatusData.json) garantindo que o quadro nunca falha',
          'Criação de uma interface Scrum e Roteiro responsiva em /scrum-board com barras de progresso em tempo real, acompanhamento em 5 fases (Descoberta, Estratégia, Infra, Produção, Lançamento) e gavetas de detalhes'
        ],
        results: [
          { value: '18', label: 'Tarefas e Épicos PJM' },
          { value: '61%', label: 'Velocidade Sprint 3 (11/18)' },
          { value: '5 Fases', label: 'Roteiro Estratégico' },
          { value: '100%', label: 'Disponibilidade API + Snapshot' }
        ]
      }
    },
    technologies: [
      'Atlassian Jira Cloud REST API',
      'Google Antigravity',
      'FastAPI Backend Proxy',
      'Python Git Sync Hooks',
      'React & Tailwind CSS',
      'Resilient Snapshot Failover',
      'Agile Scrum Telemetry',
      'i18next Bilingual UI'
    ],
    gallery: [
      { url: '/assets/build-journey/jira-live-agile-board.jpg', caption: 'Live Agile Scrum Dashboard (Sprint 3 & 5-Phase Strategic Roadmap)' },
      { url: '/assets/build-journey/antigravity-ide-preview.jpg', caption: 'Antigravity AI Agent & Live Telemetry Preview' },
      { url: '/assets/build-journey/vscode-editor-diff.jpg', caption: 'Automated Post-Commit Workspace-to-Jira Sync' },
      { url: '/assets/build-journey/github-repo-pipeline.jpg', caption: 'GitHub Pipeline & Resilient Snapshot Governance' }
    ]
  },

  'my-portfolio': {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: 'How I built my personal portfolio leveraging AI and modern engineering skills while learning to code with Antigravity, VS Code, GitHub, Crowdin, and Vercel.',
    heroImage: '/assets/build-journey/vercel-deployment-cloud.jpg',
    tags: ['AI-Leveraged', 'React', 'Localization', 'Vercel', 'Antigravity'],
    duration: 'Multi-Phase Delivery',
    teamSize: 'Solo (AI-Augmented)',
    scope: 'Full-Stack Portfolio & Bento Architecture',
    liveUrl: 'https://maramartins.com',
    caseStudyUrl: '/how-i-built-this',
    caseStudyLabel: 'How I Built This (AI Journey)',
    caseStudyBannerTitle: 'How I Built This Portfolio Leveraging AI',
    caseStudyBannerSubtitle: 'Visual walkthrough of my engineering journey: Google Antigravity, VS Code, GitHub, Crowdin CAT localization, and Vercel CI/CD.',
    overview: `This project showcases how I designed and engineered my executive portfolio from the ground up, leveraging AI pair-programming and modern web technologies while learning to code.

From orchestrating rapid AI iterations in Google Antigravity and VS Code to establishing professional Git branch workflows, Crowdin CAT localization pipelines, and automated Vercel CI/CD deployments, this portfolio demonstrates hands-on technical execution alongside executive operational program leadership.`,
    challenges: [
      'Translating deep executive leadership and operational governance into an engaging, interactive digital experience',
      'Learning modern React, Tailwind CSS, and full-stack workflows while maintaining enterprise coding standards',
      'Maintaining continuous bilingual parity (English and Portuguese) across 28 STAR cards and complex case studies',
      'Establishing automated CI/CD pipelines with zero downtime and resilient offline fallbacks'
    ],
    solutions: [
      'Leveraged Google Antigravity and VS Code as autonomous AI engineering partners to accelerate development and master code patterns',
      'Architected an 8-Pillar Bento Grid and interactive STAR framework modal system for granular leadership proof points',
      'Implemented Crowdin CAT localization workflow and i18next integration for native EN/PT switching',
      'Configured GitHub pull-request workflows with automated test validation and Vercel cloud deployments'
    ],
    results: [
      { value: '100%', label: 'AI-Leveraged Build' },
      { value: '8 Top Pillars', label: 'Strategic Architecture' },
      { value: '28', label: 'Interactive STAR Cards' },
      { value: '2', label: 'Locales (EN & PT)' }
    ],
    locales: {
      pt: {
        title: 'O Meu Portfólio',
        description: 'Como construí o meu portfólio pessoal alavancando IA e competências de engenharia enquanto aprendi a programar com Antigravity, VS Code, GitHub, Crowdin e Vercel.',
        overview: `Este projeto demonstra como concebi e construí o meu portfólio executivo de raiz, combinando programação assistida por IA e tecnologias web modernas enquanto aprendia a programar.

Desde a orquestração de iterações rápidas com o Google Antigravity e o VS Code até ao estabelecimento de fluxos Git profissionais, canais de localização CAT com o Crowdin e implementações contínuas no Vercel, este portfólio reflete a execução técnica aliada à liderança de programas operacionais executivos.`,
        caseStudyLabel: 'Como Construí Este Portfólio (Jornada IA)',
        caseStudyBannerTitle: 'Como Construí Este Portfólio Alavancando IA',
        caseStudyBannerSubtitle: 'Visita guiada visual pela minha jornada de engenharia: Google Antigravity, VS Code, GitHub, localização CAT no Crowdin e CI/CD na Vercel.',
        challenges: [
          'Traduzir liderança executiva e governação operacional numa experiência digital interativa e envolvente',
          'Aprender React, Tailwind CSS e fluxos de programação modernos mantendo padrões de qualidade de nível empresarial',
          'Garantir paridade bilingue contínua (Inglês e Português) em 28 cartões STAR e estudos de caso',
          'Configurar processos de CI/CD automatizados com zero tempo de inatividade e suporte offline resiliente'
        ],
        solutions: [
          'Utilização do Google Antigravity e VS Code como parceiros de IA para acelerar o desenvolvimento e compreender padrões de código',
          'Desenho de uma estrutura Bento de 8 Pilares e sistema modal de cartões STAR para evidências granulares de liderança',
          'Implementação de fluxo de localização CAT com Crowdin e i18next para transição nativa EN/PT',
          'Configuração de fluxos GitHub com testes automatizados e implementações na cloud através da Vercel'
        ],
        results: [
          { value: '100%', label: 'Desenvolvido com IA' },
          { value: '8 Pilares', label: 'Arquitetura Estratégica' },
          { value: '28', label: 'Cartões STAR Interativos' },
          { value: '2', label: 'Idiomas (EN e PT)' }
        ]
      }
    },
    technologies: [
      'Google Antigravity',
      'VS Code',
      'GitHub',
      'Crowdin CAT',
      'Vercel',
      'React',
      'Tailwind CSS',
      'i18next'
    ],
    gallery: [
      { url: '/assets/build-journey/vscode-editor-diff.jpg', caption: 'VS Code & Antigravity AI Pair Programming' },
      { url: '/assets/build-journey/antigravity-ide-preview.jpg', caption: 'Antigravity IDE & Live Preview Environment' },
      { url: '/assets/build-journey/github-repo-pipeline.jpg', caption: 'GitHub Version Control & CI/CD Pipelines' },
      { url: '/assets/build-journey/crowdin-cat-localization.png', caption: 'Crowdin CAT Tool & Bilingual Parity' },
      { url: '/assets/build-journey/vercel-deployment-cloud.jpg', caption: 'Vercel Production Deployment & Domain Hosting' }
    ]
  },

  'experiences-star-framework': {
    id: 'experiences-star-framework',
    title: 'My Experiences in STAR Framework',
    description: 'How I distilled 15+ years of real-world program leadership into 28 interactive STAR cards across 8 strategic pillars for interview preparation, recruiter discovery, and executive review, built with Google Antigravity.',
    heroImage: '/assets/build-journey/experiences-star-bento.jpg',
    tags: ['STAR Framework', 'Interview Prep', 'Antigravity AI', '8 Pillars', 'Recruiter Ready'],
    duration: '15+ Years Distilled (2006–2026)',
    teamSize: 'Solo (AI-Augmented via Antigravity)',
    scope: '8 Strategic Pillars & 28 STAR Cards',
    liveUrl: '/experiences',
    liveUrlLabel: 'Explore Experiences (STAR Cards)',
    caseStudyUrl: '/experiences',
    caseStudyLabel: 'Explore Experiences Page',
    secondaryUrl: '/career',
    secondaryUrlLabel: 'View Career Timeline (2006–2026)',
    caseStudyBannerTitle: 'Explore My 28 Interactive STAR Cards & Full Career Timeline',
    caseStudyBannerSubtitle: 'Visit the Experiences page to filter, flip, and expand all 28 STAR stories in detail, or open the interactive Career Timeline for concrete milestone-by-milestone visibility into my roles, metrics, and evidence artifacts.',
    overview: `I created the Experiences page for two core purposes: to prepare systematically for senior program management and operations interviews, and to give recruiters, hiring managers, and portfolio visitors a fast, transparent way to evaluate my real-world track record.

First, I authored the content from my own real-life experiences across Microsoft, Apple, LinkedIn, Block, Hogarth Worldwide, MIIS, and European Union institutions. Rather than listing generic resume responsibilities, I structured 28 concrete operational case studies using the Situation, Task, Action, Result, and Learning (STAR) framework, anchoring every story in first-person ownership ("I") and verified business metrics.

Next, I partnered with Google Antigravity in VS Code to turn that dense library of interview stories into a fast, digestible Bento Box experience (/experiences). Visitors can filter across 8 core Senior PgM pillars, read the headline Validated Impact pill at a glance, flip any card for a quick summary, expand into a wide full-text reading modal, or jump straight to my Career Timeline (/career) for deeper chronological context and evidence artifacts.`,
    challenges: [
      'Distilling 15+ years of complex global operations, vendor governance, and AI program leadership across multiple enterprise organizations into an interview-ready format that recruiters and hiring leaders can digest in seconds',
      'Moving beyond flat resume bullets to show true first-person ownership: the operational problem (Situation), my mandate (Task), the governance and systems I engineered (Action), and the measurable impact (Result & Learning)',
      'Balancing two different reader needs in one UI: rapid 10-second scanning for busy recruiters and deep architectural detail for hiring managers and interview loops',
      'Linking topical STAR examples directly to my chronological career milestones and maintaining 100% bilingual parity across English and European Portuguese'
    ],
    solutions: [
      'Synthesized 28 real-life operational stories in active first-person voice across 8 Strategic Pillars: Executive Health & Impact Reporting, Operational BI, Portfolio Governance, Supplier Performance, Operational Enablement, Cross-functional Alignment, Live Incidents Response, and Optimization & Innovation (MTPE + AI + HIL)',
      'Leveraged Google Antigravity as an AI engineering partner to design a compact, uniform 3D Bento Card system (/experiences) featuring headline Validated Impact badges, company logos, instant Flip summaries, and a wide modal reader',
      'Built instant pillar filtering and search controls so recruiters and interviewers can immediately isolate proof points in finance/OPEX, Power BI telemetry, vendor SOW governance, 24/7 crisis triage, or NMT/AI workflows',
      'Cross-linked the STAR cards directly to the interactive 20-milestone Career Timeline (/career) so visitors who want concrete chronological visibility can inspect role dates, executive deliverables, and primary evidence artifacts'
    ],
    results: [
      { value: '28', label: 'Real-Life STAR Cards' },
      { value: '8 Pillars', label: 'Core PgM Responsibilities' },
      { value: '2006–2026', label: 'Linked Career Timeline' },
      { value: '100%', label: 'EN/PT Bilingual Parity' }
    ],
    locales: {
      pt: {
        title: 'As Minhas Experiências no Modelo STAR',
        description: 'Como sintetizei mais de 15 anos de liderança real de programas em 28 cartões STAR interativos em 8 pilares estratégicos para preparação de entrevistas, partilha com recrutadores e consulta rápida com o Google Antigravity.',
        overview: `Criei a página de Experiências com dois objetivos principais: preparar-me de forma estruturada para entrevistas de liderança sénior em gestão de programas e operações, e oferecer a recrutadores, diretores de contratação e visitantes uma forma rápida e transparente de avaliar o meu percurso real.

Em primeiro lugar, redigi o conteúdo a partir das minhas próprias experiências reais na Microsoft, Apple, LinkedIn, Block, Hogarth Worldwide, MIIS e instituições da União Europeia. Em vez de listar responsabilidades genéricas de currículo, estruturei 28 casos reais segundo o modelo Situação, Tarefa, Ação, Resultado e Aprendizagem (STAR), apresentando cada história na primeira pessoa ("Eu") e fundamentada em métricas reais de negócio.

Em seguida, utilizei o Google Antigravity no VS Code para transformar essa biblioteca densa de histórias de entrevista numa experiência Bento Box rápida e intuitiva (/experiences). Os visitantes podem filtrar por 8 pilares estratégicos de gestão de programas, consultar o impacto validado num relance, virar qualquer cartão para um resumo rápido, expandir para uma leitura completa ou aceder diretamente à minha Linha de Carreira (/career) para visibilidade cronológica detalhada.`,
        liveUrlLabel: 'Explorar Experiências (Cartões STAR)',
        caseStudyLabel: 'Explorar Página de Experiências',
        secondaryUrlLabel: 'Ver Linha de Carreira (2006–2026)',
        caseStudyBannerTitle: 'Explore os Meus 28 Cartões STAR Interativos e a Minha Linha de Carreira',
        caseStudyBannerSubtitle: 'Visite a página de Experiências para filtrar, virar e expandir em detalhe as 28 histórias STAR, ou abra a Linha de Carreira interativa para visibilidade concreta sobre cada função, métricas e evidências.',
        challenges: [
          'Sintetizar mais de 15 anos de operações globais, governação de fornecedores e liderança de programas de IA num formato pronto para entrevistas que recrutadores e líderes possam analisar em segundos',
          'Ir além de tópicos estáticos de currículo para demonstrar responsabilidade direta na primeira pessoa: o desafio operacional (Situação), a minha missão (Tarefa), os sistemas que implementei (Ação) e o impacto mensurável (Resultado e Aprendizagem)',
          'Equilibrar duas necessidades de leitura numa única interface: leitura rápida em 10 segundos para recrutadores e detalhe arquitetural profundo para entrevistas técnicas',
          'Interligar exemplos temáticos STAR aos marcos cronológicos da minha carreira mantendo 100% de paridade bilingue entre inglês e português europeu'
        ],
        solutions: [
          'Autoria de 28 histórias operacionais reais na primeira pessoa em 8 Pilares Estratégicos: Monitorização Executiva, Business Intelligence Operacional, Governação de Portfólio, Desempenho de Fornecedores, Capacitação Operacional, Alinhamento Multifuncional, Resposta a Incidentes e Otimização e Inovação (MTPE + IA + HIL)',
          'Utilização do Google Antigravity como parceiro de engenharia com IA para criar um sistema uniforme de cartões Bento 3D (/experiences) com indicadores de impacto validado, logótipos de empresas, rotação rápida e leitura modal alargada',
          'Implementação de filtros instantâneos por pilar e pesquisa para que recrutadores e entrevistadores possam isolar rapidamente evidências em finanças/OPEX, telemetria Power BI, governação SOW, triagem 24/7 ou fluxos de NMT/IA',
          'Ligação direta dos cartões STAR à Linha de Carreira interativa de 20 marcos (/career) para que os visitantes que procuram visibilidade cronológica concreta possam consultar datas, entregas e artefactos de evidência'
        ],
        results: [
          { value: '28', label: 'Cartões STAR de Casos Reais' },
          { value: '8 Pilares', label: 'Responsabilidades PgM' },
          { value: '2006–2026', label: 'Linha de Carreira Ligada' },
          { value: '100%', label: 'Paridade Bilingue EN/PT' }
        ]
      }
    },
    technologies: [
      'STAR Interview Framework',
      'Google Antigravity',
      '8-Pillar Bento Architecture',
      'Interactive 3D Flip & Modal UI',
      'React & Tailwind CSS',
      'Career Timeline Cross-Linking',
      'Jest Guardrail Testing',
      'EN/PT Bilingual Parity'
    ],
    gallery: [
      { url: '/assets/build-journey/experiences-star-bento.jpg', caption: '8-Pillar Bento Grid & 28 Interactive STAR Cards (/experiences)' },
      { url: '/assets/build-journey/antigravity-ide-preview.jpg', caption: 'Distilling Real Career Stories into Digestible UI with Antigravity' },
      { url: '/assets/build-journey/vscode-editor-diff.jpg', caption: 'First-Person STAR Narrative & Bilingual EN/PT Schema' }
    ]
  }
};

// Export project list for Portfolio component
export const projects = [
  {
    id: 'polyglotai-translator',
    title: 'AI Polyglots',
    description: 'Break every language barrier. Everywhere. An experimental platform for cross-language communication with deep integrations for WhatsApp and Twilio.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    tags: ['AI', 'Translation', 'Accessibility'],
    link: 'https://aipolyglots.com/',
    featured: true,
    hasDetailPage: true
  },
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: 'How I built my own personal portfolio leveraging AI and modern engineering skills while learning to code with Antigravity, VS Code, GitHub, Crowdin, and Vercel.',
    image: '/assets/build-journey/vercel-deployment-cloud.jpg',
    tags: ['AI-Leveraged', 'React', 'Vercel', 'Crowdin'],
    link: '/how-i-built-this',
    featured: false,
    hasDetailPage: true
  },
  {
    id: 'localization-training-program',
    title: 'MIIS Teaching & AI Speaker Series',
    description: 'Visiting Professor at Middlebury Institute, teaching graduate courses on Translation and Localization Management while leading the AI in Localization Speaker Series.',
    image: '/miis-ai-series.jpg',
    tags: ['Education', 'AI', 'MIIS'],
    link: null,
    featured: false,
    hasDetailPage: true
  },
  {
    id: 'jira-scrum-board',
    title: 'Jira + AI Automation',
    description: 'How I automated my live Jira Cloud Scrum dashboard with real sprint metrics using Google Antigravity, Python Git sync hooks, and a hardened FastAPI proxy.',
    image: '/assets/build-journey/jira-live-agile-board.jpg',
    tags: ['Jira Cloud', 'Antigravity AI', 'FastAPI', 'Live Telemetry'],
    link: '/scrum-board',
    featured: false,
    hasDetailPage: true
  },
  {
    id: 'experiences-star-framework',
    title: 'My Experiences in STAR Framework',
    description: 'How I distilled 15+ years of real-world program leadership into 28 interactive STAR cards across 8 strategic pillars for interview preparation, recruiter discovery, and quick portfolio access using Google Antigravity.',
    image: '/assets/build-journey/experiences-star-bento.jpg',
    tags: ['STAR Framework', 'Interview Prep', 'Antigravity AI', '8 Pillars'],
    link: '/experiences',
    featured: false,
    hasDetailPage: true
  },
  {
    id: 'global-marketing-localization',
    title: 'Global Marketing Localization',
    description: 'Led end-to-end localization of marketing campaigns across 40+ languages for a Fortune 500 tech company.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Marketing', 'Localization', 'Strategy'],
    link: null,
    featured: false,
    hasDetailPage: true
  },
  {
    id: 'ai-translation-engine',
    title: 'AI Translation Engine',
    description: 'Implemented and optimized neural machine translation workflows, reducing time-to-market by 60%.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['AI', 'NMT', 'Optimization'],
    link: null,
    featured: false,
    hasDetailPage: true
  }
];

// Alias jira-ai-automation to jira-scrum-board so both URLs resolve cleanly
projectDetails['jira-ai-automation'] = projectDetails['jira-scrum-board'];
