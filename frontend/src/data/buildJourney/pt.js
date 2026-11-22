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

export const buildJourneyOwnership = {
  eyebrow: 'LIMITES DE PROPRIEDADE',
  title: 'O Que Assumi Diretamente vs. O Que a Automação Executou',
  subtitle:
    'Fronteiras inequívocas entre o julgamento executivo humano e a aceleração proporcionada pela IA.',
  humanOwned: {
    title: 'O Que Assumi Diretamente',
    subtitle: 'Julgamento, Arquitetura e Governação',
    items: [
      'Defini a estrutura do produto, os fluxos de navegação e os modelos de governação operacional em Experiências, Linha do Tempo e sistemas GTM.',
      'Estabeleci critérios de aceitação, auditei diferenças de código linha a linha, validei a paridade bilingue entre en.js e pt.js e decidi quando o código estava pronto para integração.',
      'Exigi a execução de testes automatizados e o isolamento de branches como portões de qualidade inegociáveis para garantir a estabilidade do sistema.',
      'Concebi mecanismos de contingência resilientes no cliente para APIs externas e formulários de contacto, assegurando continuidade sem falhas.',
    ],
  },
  aiExecuted: {
    title: 'O Que o Agente e as Ferramentas Executaram',
    subtitle: 'Velocidade, Exploração e Verificação',
    items: [
      'Instruí o Google Antigravity e os modelos Gemini para preparar alterações em múltiplos ficheiros, executar comandos de terminal e propor soluções em ciclos de pré-visualização contínua.',
      'Utilizei o Visual Studio Code, a linha de comandos do GitHub e o Crowdin CAT para manter branches isoladas, gerir catálogos de termos e validar interfaces responsivas.',
      'Recorri a suites de testes Jest (35 testes) e pipelines de CI/CD na Vercel para validar compilações e executar implementações atómicas na nuvem.',
    ],
  },
};

export const buildJourneyGuardrails = {
  eyebrow: 'INTEGRIDADE DO SISTEMA & CONTROLO DE RISCOS',
  title: 'Modos de Falha, Salvaguardas e Reversibilidade',
  subtitle:
    'Como antecipei modos de falha e estabeleci controlos de engenharia para evitar regressões durante o desenvolvimento acelerado por IA.',
  items: [
    {
      title: 'Dessincronização de Dados e Estados Bilingues',
      risk: 'Alterações rápidas de IA arriscavam omitir chaves em português, causar quebras de formatação ou dessincronizar a contagem de cartões STAR entre idiomas.',
      guardrail:
        'Implementei validações automatizadas em Jest que verificam a paridade estrita 1:1 entre en.js e pt.js, complementadas por revisões linha a linha em split-diff antes de cada commit.',
      outcome: 'Zero desfasamento linguístico em 28 cartões STAR, 7 Pilares Estratégicos e 1 Domínio Especializado.',
    },
    {
      title: 'Interrupções de APIs e Serviços Externos',
      risk: 'Falhas em serviços externos (como indisponibilidade temporária de instâncias Jira Cloud ou APIs de backend) poderiam quebrar funcionalidades do portfólio.',
      guardrail:
        'Concebi mecanismos com dados locais em JSON para o Scrum board e redirecionamento automático por mailto para formulários de contacto, contornando pontos de falha externos.',
      outcome: 'Disponibilidade de 100% para recrutadores e visitantes, mesmo perante falhas de conectividade de terceiros.',
    },
    {
      title: 'Alucinações de Código de IA e Risco de Regressão',
      risk: 'Agentes autónomos podem introduzir pequenas quebras de layout, imports não utilizados ou mutações inesperadas de propriedades.',
      guardrail:
        'Exigi o isolamento em branches de trabalho (feature/experiences-bento-mvp), aprovação total de 35 testes automatizados em Jest e compilação de produção antes de cada push.',
      outcome: 'Histórico de versões transparente ao longo de 290+ commits, com capacidade de rollback atómico instantâneo na Vercel.',
    },
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
      'Utilizei o Google Antigravity como acelerador de execução e não como decisor autónomo. Escrevi especificações detalhadas, orientei o agente em refatorações de múltiplos ficheiros e auditei pessoalmente as diferenças e decisões de arquitetura antes de integrar alterações.',
    skillsLearned: [
      'Engenharia de Prompts para Arquitetura de Sistemas: Estruturação de especificações exatas em vez de pedidos genéricos.',
      'Delegação Agêntica e Subagentes: Coordenação de fluxos de trabalho autónomos focados em auditorias de código, comandos de terminal e verificação.',
      'Ciclos de Feedback Guiados por Testes (TDD): Criação e execução automática de testes Jest antes de integrar funcionalidades.',
    ],
    executionDetails:
      'Em vez de depender de snippets genéricos de copiar e colar, dirigi o Antigravity num ambiente de trabalho duplo. Instruí o agente a executar tarefas de terminal, atualizar dados e verificar a estabilidade do código enquanto avaliava a compilação SPA em tempo real. Isto garantiu controlo direto sobre a estrutura do código e permitiu iterações rápidas com total domínio sobre os limites do sistema.',
    executiveTakeaway:
      'Quando orquestro agentes de IA com especificações claras e portões de verificação, vivencio diretamente como estes fluxos comprimem prazos sem dispensar a liderança humana sobre limites do sistema, casos limite e modos de falha.',
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
      'Trabalho prático no código com o Visual Studio Code: inspecionei diferenças linha a linha, dominei hierarquias de estado em React e mantive históricos de commits limpos ao longo de 290+ commits.',
    skillsLearned: [
      'Navegação de Código e Arquitetura Modular: Separação de componentes modulares, bibliotecas utilitárias e estilos responsivos com Tailwind CSS.',
      'Revisão de Código Split-Diff: Auditoria de alterações exatas entre datasets em Inglês e Português antes de cada commit.',
      'Depuração Interativa: Inspeção de saídas de compilação, sandboxes de terminal e grafos de dependências npm.',
    ],
    executionDetails:
      'O VS Code foi o meu centro de operações prático. Com o Git Graph e vistas de diferenças divididas, auditei cada alteração linha a linha, garantindo que as atualizações em en.js correspondiam rigorosamente a pt.js e verificando a integridade do design. Esta prática desmistificou frameworks modernas de front-end como React 19, Tailwind CSS e Craco.',
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
      'Aplicação de governação de lançamentos ao código pessoal: estabeleci fluxos isolados de branches, portões de testes automatizados (35 testes Jest) e registos de commits transparentes.',
    skillsLearned: [
      'Gestão de Branches e Lançamentos: Desenvolvimento em branches de funcionalidades (feature/experiences-bento-mvp) antes de integrar na branch main.',
      'Portões de Qualidade Automatizados: Execução obrigatória de 35 testes automatizados em Jest e compilação de produção antes de cada push.',
      'Higiene de Commits e Rastreabilidade: Redação de mensagens semânticas descritivas associadas a cada melhoria arquitetural.',
    ],
    executionDetails:
      'Com mais de 290 commits, o repositório reflete uma verdadeira governação de produção. Mantive todo o desenvolvimento ativo em branches de funcionalidades isoladas com validação estrita pré-commit. Isto preveniu regressões, assegurou compatibilidade e garantiu que a branch main permanecesse sempre limpa e apta para reversão instantânea.',
    executiveTakeaway:
      'Aplico à minha base de código a mesma disciplina de comboios de lançamentos que utilizei em programas empresariais: limites claros de branches, verificação pré-integração e reversibilidade de lançamentos.',
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
      'Transposição da minha especialização profissional para o código: estruturei catálogos de strings no Crowdin e i18next, geri chaves bilingues e verifiquei pessoalmente a paridade semântica e cultural.',
    skillsLearned: [
      'Integração de Ferramentas TMS/CAT: Estruturação de catálogos de strings de origem e aproveitamento de memórias de tradução entre idiomas.',
      'Localização Sensível ao Contexto: Prevenção de quebras de texto, gestão de expansão textual em Português e testes de quebras de layout mobile.',
      'LQA e Rigor Semântico: Garantia de que acrónimos técnicos (SLA, MBR, QBR, GTM) são traduzidos com precisão nos dois idiomas.',
    ],
    executionDetails:
      'A localização não é um pensamento tardio; integrei-a na arquitetura desde o primeiro dia. Utilizando o Crowdin como ferramenta CAT aliada ao i18next, configurei cada componente para renderizar dinamicamente conforme o idioma ativo, verificando no Português (pt-PT) e Inglês (en-US) a expansão de texto, o ajuste de layout e a precisão de termos técnicos (SLA, MBR, QBR, GTM).',
    executiveTakeaway:
      'Tratar textos e recursos de idiomas como dados estruturados e verificáveis previne defeitos antes de chegarem aos utilizadores, provando que a prontidão global exige fluência técnica profunda em localização.',
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
      'Automação de implementações contínuas globais: configurei distribuição por Edge CDN, encaminhamento de DNS em maramartins.com, certificados SSL e implementações atómicas sem indisponibilidade.',
    skillsLearned: [
      'Automação de Entrega Contínua (CD): Pushes para a branch main ativam de imediato compilações de pré-visualização e promoções atómicas para produção.',
      'Observabilidade e Desempenho Edge: Monitorização de métricas reais de utilizadores (Core Web Vitals), taxas de cache edge e respostas de servidor.',
      'Segurança e Governação de Domínio: Configuração de registos DNS A/CNAME, cabeçalhos de segurança HSTS e capacidade de rollback instantâneo.',
    ],
    executionDetails:
      'Configurei os pipelines de entrega na Vercel para que cada envio gerasse um URL de pré-visualização isolado para validação antes da promoção a produção. Monitorizei Core Web Vitals, verifiquei cabeçalhos de cache edge e estabeleci gatilhos de rollback instantâneo para garantir estabilidade contínua a visitantes globais.',
    executiveTakeaway:
      'Compreender infraestruturas cloud, validação em pré-visualização e mecanismos de reversão capacita uma líder executiva para dialogar com credibilidade com equipas de Engenharia, DevOps e SRE sobre entregas seguras à escala.',
  },
];

export const buildJourneyMindset = {
  eyebrow: 'SÍNTESE EXECUTIVA',
  title: 'Porque a Fluência Técnica Direta é Essencial para a Liderança Sénior',
  quote:
    'Construí este portfólio para unir a minha experiência em governação de programas à fluência prática na engenharia auxiliada por IA. Defino as salvaguardas, tomo as decisões de arquitetura e verifico os resultados, enquanto os agentes de IA e pipelines automatizados tratam da prototipagem rápida e verificações repetitivas.',
  pillars: [
    {
      title: 'Empatia Através da Prática Direta',
      description:
        'Compreender branches de git, conflitos de dependências, suites de testes e implementações edge elimina o fosso entre o planeamento estratégico e a execução técnica.',
    },
    {
      title: 'Propriedade Humana Responsável',
      description:
        'Os agentes de IA não substituem o discernimento estratégico; ampliam-no. A liderança de domínio dita as salvaguardas e critérios de aceitação, enquanto a IA assume o código repetitivo.',
    },
    {
      title: 'Rigor Empresarial em Qualquer Escala',
      description:
        'Aplicar as mesmas estruturas RACI, controlos de branches e padrões de localização a esta base de código demonstra que a disciplina operacional funciona com precisão em qualquer dimensão.',
    },
  ],
};
