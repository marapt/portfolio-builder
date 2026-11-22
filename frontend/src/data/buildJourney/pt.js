// Data for the How I Built This Portfolio Page (PT)
// Baseado diretamente nas ferramentas reais, capturas de ecrã e fluxos de engenharia

export const buildJourneyHero = {
  eyebrow: 'ENGENHARIA ACELERADA POR IA & META-PORTFÓLIO',
  title: 'Como Construí Este Portfólio com o Apoio da IA',
  subheading: 'Articulando Liderança Executiva, Orquestração de IA e Código Moderno',
  subtitle:
    'Uma demonstração transparente de como utilizei o Google Antigravity, ferramentas modernas de desenvolvimento, localização contínua e arquitetura em nuvem para desenhar, programar e implementar este portfólio enquanto consolidava competências de programação.',
  quickStats: [
    { label: 'Co-Piloto de IA', value: 'Google Antigravity' },
    { label: 'Desenvolvimento e SCM', value: 'VS Code + GitHub' },
    { label: 'Operações e Entrega', value: 'Crowdin + Vercel' },
  ],
};

export const buildJourneyPillars = [
  {
    id: 'antigravity-ai',
    number: '01',
    category: 'Orquestração de Agentes de IA',
    title: 'Google Antigravity: O Parceiro Autónomo de Desenvolvimento com IA',
    tool: 'Google Antigravity e Modelos Gemini',
    badge: 'Orquestração de IA',
    color: 'violet',
    image: '/assets/build-journey/antigravity-ide-preview.jpg',
    imageAlt: 'Ambiente IDE dual-pane do Google Antigravity com chat e pré-visualização em direto',
    summary:
      'Utilização do Google Antigravity como inteligência de programação interativa, executando refatorações complexas em múltiplos ficheiros, testes automatizados e compilação em tempo real.',
    skillsLearned: [
      'Engenharia de Prompts para Arquitetura de Sistemas: Estruturação de especificações exatas em vez de pedidos genéricos.',
      'Delegação Agêntica e Subagentes: Coordenação de fluxos de trabalho autónomos focados em auditorias de código, comandos de terminal e verificação.',
      'Ciclos de Feedback Guiados por Testes (TDD): Criação e execução automática de testes Jest antes de integrar funcionalidades.',
    ],
    executionDetails:
      'Em vez de depender de snippets genéricos de copiar e colar, utilizei o Antigravity como parceiro de desenvolvimento proativo. Operámos num layout de dois painéis: à esquerda, o agente executava tarefas de terminal, atualizava datasets e verificava a saúde do código; à direita, a aplicação atualizava em tempo real através da compilação SPA. Isto criou um ciclo de feedback veloz onde ideias se transformaram em código robusto e pronto para produção em minutos.',
    executiveTakeaway:
      'Como Senior PGM empresarial, trabalhar diretamente com agentes de IA para criar software de produção elimina barreiras de comunicação com equipas de engenharia, proporcionando fluência direta sobre código, dívida técnica e limites de arquitetura.',
  },
  {
    id: 'visual-studio-code',
    number: '02',
    category: 'Ambiente de Desenvolvimento e Controlo de Versões',
    title: 'Visual Studio Code: Domínio de Fluxos de IDE Modernos e Estado',
    tool: 'VS Code, Git Graph e React 19',
    badge: 'IDE e Engenharia de Código',
    color: 'blue',
    image: '/assets/build-journey/vscode-editor-diff.jpg',
    imageAlt: 'Editor de comparação lado a lado e histórico Git Graph no Visual Studio Code',
    summary:
      'Trabalho prático no código com o Visual Studio Code: revisão de diferenças lado a lado, compreensão de hierarquias de estado em React e manutenção de históricos de commits limpos.',
    skillsLearned: [
      'Navegação de Código e Arquitetura Modular: Separação de componentes modulares, bibliotecas utilitárias e estilos responsivos com Tailwind CSS.',
      'Revisão de Código Split-Diff: Auditoria de alterações exatas entre datasets em Inglês e Português antes de cada commit.',
      'Depuração Interativa: Inspeção de saídas de compilação, sandboxes de terminal e grafos de dependências npm.',
    ],
    executionDetails:
      'O VS Code foi o meu centro de controlo prático. Com o Git Graph e vistas de diferenças divididas, auditei cada alteração linha a linha, garantindo que as atualizações em en.js correspondiam rigorosamente a pt.js e verificando a integridade do design. Esta prática desmistificou frameworks modernas de front-end como React 19, Tailwind CSS e Craco.',
    executiveTakeaway:
      'Vivenciar em primeira mão a experiência do programador permite-me antecipar atritos no desenvolvimento, avaliar bloqueadores de velocidade e definir marcos de engenharia realistas em grandes programas de software.',
  },
  {
    id: 'github-cicd',
    number: '03',
    category: 'Controlo de Versões e Governação de Lançamentos',
    title: 'GitHub: Estratégia de Branches, Commits Atómicos e Rigor de CI/CD',
    tool: 'GitHub e Linha de Comandos Git',
    badge: 'Controlo de Versões',
    color: 'emerald',
    image: '/assets/build-journey/github-repo-pipeline.jpg',
    imageAlt: 'Painel do repositório GitHub apresentando branches, commits e implementações',
    summary:
      'Aplicação de princípios de governação de lançamentos empresariais ao código pessoal: fluxos de trabalho com múltiplos branches, testes automatizados e registos de commits transparentes.',
    skillsLearned: [
      'Gestão de Branches e Lançamentos: Desenvolvimento em branches de funcionalidades (feature/experiences-bento-mvp) antes de integrar na branch main.',
      'Portões de Qualidade Automatizados: Execução obrigatória de 34 testes automatizados em Jest e compilação de produção antes de cada push.',
      'Higiene de Commits e Rastreabilidade: Redação de mensagens semânticas descritivas associadas a cada melhoria arquitetural.',
    ],
    executionDetails:
      'Com mais de 290 commits, o repositório reflete uma verdadeira governação empresarial. Cada funcionalidade, desde a Bento Box Multimodal até ao mecanismo de contingência do Scrum Board, seguiu um ciclo isolado de branch com verificação pré-commit rigorosa. Isto preveniu regressões e garantiu que a branch main permanecesse sempre apta para produção.',
    executiveTakeaway:
      'Os mesmos princípios de comboios de lançamentos (release trains) que liderei na Microsoft e no LinkedIn aplicam-se diretamente a bases de código: a previsibilidade de lançamentos começa com a higiene de branches e testes automatizados.',
  },
  {
    id: 'crowdin-localization',
    number: '04',
    category: 'Localização Contínua e Sistemas CAT',
    title: 'Crowdin: Ferramentas CAT Empresariais e i18n Contínuo',
    tool: 'Crowdin e Framework i18next',
    badge: 'Localização e CAT',
    color: 'cyan',
    image: '/assets/build-journey/crowdin-cat-localization.png',
    imageAlt: 'Painel de localização contínua no Crowdin fazendo a gestão de chaves em Inglês, Português e Espanhol',
    summary:
      'Transposição da minha especialização profissional para o código: ligação de sistemas de gestão de tradução contínua, gestão de chaves bilingues e garantia de paridade cultural.',
    skillsLearned: [
      'Integração de Ferramentas TMS/CAT: Estruturação de catálogos de strings de origem e aproveitamento de memórias de tradução entre idiomas.',
      'Localização Sensível ao Contexto: Prevenção de quebras de texto, gestão de expansão textual em Português e testes de quebras de layout mobile.',
      'LQA e Rigor Semântico: Garantia de que acrónimos técnicos (SLA, MBR, QBR, GTM) são traduzidos com precisão nos dois idiomas.',
    ],
    executionDetails:
      'A localização não é um pensamento tardio; faz parte das fundações da arquitetura. Utilizando o Crowdin como ferramenta de tradução assistida por computador (CAT) aliada ao i18next, cada componente de interface renderiza dinamicamente segundo o idioma ativo, suportando Português (pt-PT) e Inglês (en-US) com total simetria.',
    executiveTakeaway:
      'A verdadeira prontidão global exige fluência técnica em localização: tratar cadeias de texto como fluxos de dados dinâmicos e nunca como elementos estáticos fixos no código.',
  },
  {
    id: 'vercel-cloud',
    number: '05',
    category: 'Infraestrutura Edge e Alojamento Cloud',
    title: 'Vercel: Implementação Cloud em Produção e Desempenho Edge',
    tool: 'Plataforma Vercel Cloud',
    badge: 'Cloud e Infraestrutura',
    color: 'amber',
    image: '/assets/build-journey/vercel-deployment-cloud.jpg',
    imageAlt: 'Consola de implementação da Vercel indicando estado de produção em maramartins.com com métricas e segurança',
    summary:
      'Automação de implementações contínuas à escala global: distribuição por Edge CDN, encaminhamento de domínio próprio em maramartins.com, certificados SSL e implementações sem indisponibilidade.',
    skillsLearned: [
      'Automação de Entrega Contínua (CD): Pushes para a branch main ativam de imediato compilações de pré-visualização e promoções atómicas para produção.',
      'Observabilidade e Desempenho Edge: Monitorização de métricas reais de utilizadores (Core Web Vitals), taxas de cache edge e respostas de servidor.',
      'Segurança e Governação de Domínio: Configuração de registos DNS A/CNAME, cabeçalhos de segurança HSTS e capacidade de rollback instantâneo.',
    ],
    executionDetails:
      'O alojamento do portfólio na Vercel oferece tempos de carregamento inferiores a um segundo globalmente. O pipeline de entrega executa validações contínuas, inspeciona artefactos de compilação e distribui o cache por pontos de presença (PoPs) internacionais, proporcionando uma experiência de navegação imediata a recrutadores e líderes globais.',
    executiveTakeaway:
      'Compreender infraestruturas cloud, cache edge e propagação de DNS capacita uma líder executiva para dialogar com total credibilidade técnica com equipas de DevOps, SRE e arquitetura cloud.',
  },
];

export const buildJourneyMindset = {
  eyebrow: 'SÍNTESE EXECUTIVA',
  title: 'Porque Aprender a Programar com IA é Essencial para a Liderança Sénior',
  quote:
    'O objetivo nunca foi apenas construir um website; foi dominar o novo paradigma de criação de software. Quando uma líder combina duas décadas de governação operacional com engenharia prática auxiliada por IA, os planos estratégicos tornam-se realidade com maior rapidez e a empatia multifuncional torna-se natural.',
  pillars: [
    {
      title: 'Empatia Através da Prática Direta',
      description:
        'Compreender branches de git, conflitos de dependências, suites de testes e implementações edge elimina o fosso entre o planeamento estratégico e a execução técnica.',
    },
    {
      title: 'A IA como Multiplicador de Capacidades',
      description:
        'Os agentes de IA não substituem a especialização técnica ou de negócio; ampliam-na. O conhecimento estratégico dita a visão, enquanto a IA assume a repetição de código base.',
    },
    {
      title: 'Rigor Empresarial à Escala Pessoal',
      description:
        'Aplicar as mesmas estruturas RACI, controlos de branches e padrões de localização a este portfólio demonstra que a disciplina operacional funciona com eficácia em qualquer escala.',
    },
  ],
};
