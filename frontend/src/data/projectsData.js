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
    overview: `This transformative project introduced AI-powered neural machine translation (NMT) into an enterprise localization workflow, fundamentally changing how content was processed and delivered across global markets.

By combining custom-trained NMT engines with intelligent routing and human post-editing workflows, we achieved dramatic improvements in both speed and quality. The system learns continuously from corrections, improving accuracy over time while reducing the human effort required for each content type.`,
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
      { value: '45%', label: 'Cost Savings' },
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
          { value: '45%', label: 'Economia de Custos' },
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
    teamSize: '90+ Students Mentored',
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
      { value: '90+', label: 'Students Mentored' },
      { value: '3', label: 'Cohorts Taught' },
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
          { value: '90+', label: 'Alunos Mentorados' },
          { value: '3', label: 'Coortes Ensinadas' },
          { value: '10+', label: 'Palestrantes da Indústria' },
          { value: '2 anos', label: 'Duração do Programa' }
        ]
      }
    },
    technologies: [
      'AI/ML in Localization',
      'Translation Management Systems',
      'Go-to-Market Strategy',
      'Program Management',
      'Smartling',
      'LLM Applications',
      'Responsible AI'
    ],
    gallery: [
      { url: '/miis-guest-speakers.jpg', caption: 'Guest Speakers: Jose Palomares & Ernesto Cabanes on GTM Strategy' },
      { url: '/miis-ai-series.jpg', caption: 'AI Speaker Series: Adelina Cristovao & Rodrigo Cristina' },
      { url: '/miis-smartling.jpg', caption: 'AI Speaker Series: Olga Beregovaya & Marina Sánchez Torrón from Smartling' }
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
    title: 'PolyglotAI Translator',
    description: 'A universal translation app supporting text, voice, and sign language - powered by AI for seamless global communication.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    tags: ['AI', 'Translation', 'Accessibility', 'Innovation', 'Open Source'],
    duration: 'Ongoing',
    teamSize: 'Solo Project',
    scope: 'Global',
    liveUrl: process.env.REACT_APP_POLYGLOT_LIVE_URL || 'https://where-my-code.emergent.host/',
    githubUrl: process.env.REACT_APP_POLYGLOT_GITHUB_URL || 'https://github.com/marapt/PolyglotAI-Web',
    overview: `PolyglotAI Translator is a groundbreaking universal translation application that breaks down communication barriers through multi-modal translation capabilities. Supporting text, voice, and sign language, this tool represents the future of accessible global communication.

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
        title: 'Tradutor PolyglotAI',
        description: 'Um aplicativo de tradução universal com suporte a texto, voz e linguagem de sinais.',
        overview: `O PolyglotAI Translator é um aplicativo de tradução universal inovador que rompe barreiras de comunicação através de capacidades de tradução multimodais.`,
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
    title: 'Agile Scrum Board',
    description: 'A live dashboard fetching real-time data from my Jira Scrum board to demonstrate sprint planning and task tracking.',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
    tags: ['Agile', 'Scrum', 'Jira', 'Program Management'],
    duration: 'Ongoing',
    teamSize: 'Cross-functional',
    scope: 'Global Operations',
    liveUrl: '/scrum-board',
    overview: `This page integrates my live Jira Scrum board, providing a transparent view of current workflows, sprint progress, and task prioritization. As a Program Manager, I utilize Jira to maintain organizational clarity and ensure on-time delivery of complex localization projects.`,
    challenges: [
      'Managing high-volume task dependencies across multiple time zones',
      'Ensuring real-time visibility for stakeholders during rapid development cycles',
      'Maintaining a clean backlog while balancing urgent localization requests'
    ],
    solutions: [
      'Implemented customized Scrum workflows with automated status triggers',
      'Established bi-weekly grooming sessions to maintain backlog health',
      'Integrated live reporting dashboards for instantaneous progress tracking'
    ],
    results: [
      { value: '100%', label: 'Sprint Completion' },
      { value: '25%', label: 'Efficiency Increase' },
      { value: 'Live', label: 'Tracking' },
      { value: 'Agile', label: 'Methodology' }
    ],
    locales: {
      pt: {
        title: 'Quadro Scrum Ágil',
        description: 'Um painel ao vivo que busca dados em tempo real do meu quadro Jira Scrum.',
        overview: `Esta página integra meu quadro Jira Scrum ao vivo, fornecendo uma visão transparente dos fluxos de trabalho atuais.`,
        challenges: [
          'Gestão de dependências de tarefas de alto volume em fusos horários',
          'Garantia de visibilidade em tempo real para stakeholders',
          'Manutenção de um backlog limpo durante ciclos rápidos'
        ],
        solutions: [
          'Implementação de fluxos de trabalho Scrum customizados',
          'Sessões quinzenais de refinamento do backlog',
          'Integração de painéis de relatórios ao vivo'
        ],
        results: [
          { value: '100%', label: 'Conclusão de Sprints' },
          { value: '25%', label: 'Aumento de Eficiência' },
          { value: 'Ao Vivo', label: 'Rastreamento' },
          { value: 'Ágil', label: 'Metodologia' }
        ]
      }
    },
    technologies: [
      'Jira Software',
      'Atlassian Confluence',
      'Agile Framework',
      'Sprint Planning',
      'Kanban',
      'Automation'
    ],
    gallery: []
  }
};

// Export project list for Portfolio component
export const projects = [
  {
    id: 'polyglotai-translator',
    title: 'Polyglot AI',
    description: 'An all-in-one universal translation platform supporting text, voice, and sign language with deep integrations for WhatsApp and Twilio.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    tags: ['AI', 'Translation', 'Accessibility'],
    link: process.env.REACT_APP_POLYGLOT_LIVE_URL || 'https://where-my-code.emergent.host/',
    featured: true,
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
    title: 'Agile Scrum Board',
    description: 'Live Jira Scrum board demonstrating my program management methodologies and task tracking.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
    tags: ['Agile', 'Jira', 'Management'],
    link: '/scrum-board',
    featured: false,
    hasDetailPage: true
  }
];
