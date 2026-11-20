// Data for the Multimodal Bento Box: Experiences Page in Portuguese (PT)
// Baseado diretamente em modelos STAR validados e Estruturas de Governação Operacional Google L6

export const bentoHero = {
  eyebrow: 'SISTEMAS OPERACIONAIS E CARTÕES STAR',
  title: 'As Minhas Experiências',
  subheading: 'Modelos STAR',
  subtitle:
    'Um sistema operacional interativo que apresenta estruturas comprovadas de governação empresarial, arquiteturas de workforce alargado e cartões STAR testados no terreno.',
  quickStats: [
    { label: 'Pilares Estratégicos', value: '4 Pilares de Topo' },
    { label: 'Domínios Operacionais', value: '10 Categorias' },
    { label: 'Cartões Interativos', value: '25+ Cartões STAR' },
  ],
};

export const topPillars = [
  {
    id: 'portfolio-governance',
    number: '01',
    title: 'Governação de Portfólio e Desenho de Estruturas',
    subtitle: 'Arquitetura de sistemas operacionais escaláveis, fluxos de lançamento e alinhamento multifuncional.',
    icon: 'Layers',
    color: 'violet',
    subCards: [
      {
        id: 'pg-1',
        title: 'Release Train Global e Governação Multi-Mercado',
        subtitle: 'Coordenação de lançamentos empresariais em mais de 45 mercados internacionais.',
        tag: 'Governação de Portfólio',
        metrics: '45+ Mercados · Zero Atrasos de Lançamento',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Na Microsoft, os lançamentos globais em mais de 45 mercados internacionais sofriam com admissão fragmentada e transições desarticuladas, colocando em risco janelas críticas de lançamento.',
          task:
            'Estabelecer um modelo de governação de Release Train de ponta a ponta alinhando Produto, Engenharia, Conteúdo Geopolítico e operações regionais sob pontos de controlo unificados.',
          action:
            'Concebi uma cadência sincronizada de 6 semanas com pontos de verificação operacionais rigorosos; integrei verificações automatizadas de conformidade e institui retrospetivas multifuncionais de lançamento.',
          result:
            'Alcancei 100% de entregas no prazo em mais de 45 mercados com zero bloqueios geopolíticos críticos, estabelecendo o painel de avaliação de referência da organização.',
        },
        l6Principle: 'A Governação Mínima Viável (MVG) acelera a velocidade da engenharia eliminando atritos pontuais.',
      },
      {
        id: 'pg-2',
        title: 'Arquitetura de Governação Mínima Viável (MVG)',
        subtitle: 'Equilibrar a velocidade dos programadores com a conformidade regulamentar.',
        tag: 'Desenho de Estruturas',
        metrics: 'Paridade de Sistemas · 100% Conformidade em Auditoria',
        proofAnchor: 'block',
        star: {
          situation:
            'As equipas de engenharia pausaram lançamentos por receio de que as verificações de conformidade abrandassem a velocidade dos sprints, enquanto as operações enfrentavam riscos de auditoria em pagamentos internacionais.',
          task:
            'Harmonizar a autonomia da engenharia com a conformidade regulamentar, desenhando barreiras de governação leves e automatizadas.',
          action:
            'Mapeei os pipelines de CI/CD para incorporar validação assíncrona de conformidade através de webhooks da API Jira/GitHub; separei auditorias não bloqueantes de barreiras críticas de segurança.',
          result:
            'Preservei os ciclos contínuos de lançamento da engenharia, mantendo 100% de conformidade com as exigências regulamentares de fintech.',
        },
        l6Principle: 'A governação deve ser integrada diretamente nos fluxos de trabalho dos programadores e não imposta como obstáculo.',
      },
      {
        id: 'pg-3',
        title: 'Triagem de Dependências e Recuperação de Cronogramas',
        subtitle: 'Recuperação proativa do caminho crítico entre dependências de hardware e software.',
        tag: 'Triagem de Dependências',
        metrics: 'Desvio de 2 Semanas Recuperado · Caminho Crítico Protegido',
        proofAnchor: 'apple-2014',
        star: {
          situation:
            'Uma API de localização atrasou-se duas semanas, ameaçando um marco mundial sincronizado de software e documentação de suporte.',
          task:
            'Recuperar o atraso no cronograma sem comprometer o rigor dos testes de qualidade ou sobrecarregar as equipas.',
          action:
            'Conduzi uma análise do caminho crítico; isolei congelamentos de texto não bloqueantes; estruturei transições em turnos 24/7 Follow-the-Sun; priorizei fluxos centrais de utilizador.',
          result:
            'Recuperei todo o desvio de duas semanas sem impacto para os clientes e com zero defeitos de regressão.',
        },
        l6Principle: 'A gestão de prazos exige escalonamento modular e gestão preventiva de margens de segurança.',
      },
    ],
  },
  {
    id: 'supplier-performance',
    number: '02',
    title: 'Desempenho de Fornecedores e Governação de Parceiros',
    subtitle: 'Consolidação de força de trabalho externa (xWS), SOWs orientados a resultados e SLAs contínuos.',
    icon: 'Users',
    color: 'cyan',
    subCards: [
      {
        id: 'sp-1',
        title: 'Consolidação Global do Ecossistema de Fornecedores Tier-1',
        subtitle: 'Reestruturação de fornecedores regionais descentralizados num ecossistema de alto desempenho.',
        tag: 'Arquitetura xWS',
        metrics: 'Redução de 30% em Custos · 15+ Mercados Unificados',
        proofAnchor: 'block',
        star: {
          situation:
            'No Block em mais de 15 mercados internacionais, 8 equipas regionais contratavam agências locais de forma independente em modelos de tempo e materiais, gerando sobrecustos e atrasos de 14 dias.',
          task:
            'Consolidar a rede de fornecedores, automatizar a reconciliação financeira e estabelecer SLAs previsíveis.',
          action:
            'Em parceria com Compras Globais, liderei um RFP para consolidar agências dispersas num grupo concentrado Tier-1; implementei fluxos 24/7 Follow-the-Sun; converti contratos em modelos baseados em resultados.',
          result:
            'Conquistei uma redução verificada de 30% no tempo de entrega e despesas operacionais, assegurando 100% de paridade no lançamento.',
        },
        l6Principle: 'Consolidar o poder de compra desbloqueia economias de escala e impõe SLAs contratuais claros.',
      },
      {
        id: 'sp-2',
        title: 'Arquitetura de Contratos MSA e SOW Baseados em Resultados',
        subtitle: 'Integrar ganhos anuais de produtividade e métricas de qualidade nos contratos de parceiros.',
        tag: 'Estratégia Comercial',
        metrics: 'Ganhos de 5-10% ao Ano · 95% SLA',
        proofAnchor: 'linkedin',
        star: {
          situation:
            'Os acordos-quadro tradicionais não tinham incentivos de eficiência, resultando em custos crescentes à medida que o portfólio de produtos expandia.',
          task:
            'Reestruturar os modelos comerciais dos fornecedores para alinhar a sua rentabilidade com a inovação técnica e automação.',
          action:
            'Criei SOWs com metas anuais de produtividade de 5 a 10%; defini SLAs rigorosos de 95% de qualidade associados a créditos financeiros; implementei revisões trimestrais de negócio (QBRs).',
          result:
            'Garanti eficiências de dois dígitos sustentadas, elevando a satisfação dos parceiros e estabelecendo colaborações estratégicas.',
        },
        l6Principle: 'Os contratos devem recompensar os parceiros pela automação e IA, em vez de faturar ineficiência por hora.',
      },
      {
        id: 'sp-3',
        title: 'Incumprimento Contratual e Plano de Ação de 30 Dias (CAP)',
        subtitle: 'Processo sistemático de recuperação para quebras crónicas de entrega e qualidade.',
        tag: 'Escalamento de Fornecedores',
        metrics: 'Recuperação em 14 Dias · Zero Impacto no Lançamento',
        proofAnchor: 'block',
        star: {
          situation:
            'Um parceiro externo estratégico caiu abaixo dos limites de qualidade contratuais durante três ciclos consecutivos num período crítico de expansão.',
          task:
            'Recuperar o desempenho do fornecedor imediatamente sem interromper os lançamentos ou quebrar a relação de parceria.',
          action:
            'Notifiquei formalmente o parceiro com base em dados do scorecard; iniciei um Plano de Ação Corretiva (CAP) de 30 dias com reuniões diárias; redirecionei volume para fornecedores de reserva Tier-1.',
          result:
            'O fornecedor restaurou o SLA para 98% em 14 dias, evitando a rescisão contratual e salvaguardando o lançamento.',
        },
        l6Principle: 'Resolva problemas de fornecedores com dados objetivos e planos de recuperação antes de rescindir contratos.',
      },
    ],
  },
  {
    id: 'operations-change',
    number: '03',
    title: 'Operações e Gestão da Mudança',
    subtitle: 'Liderança sem autoridade formal, superação de ceticismo e empatia cultural.',
    icon: 'RefreshCw',
    color: 'emerald',
    subCards: [
      {
        id: 'oc-1',
        title: 'Transformar Líderes Céticos em Promotores da Mudança',
        subtitle: 'Superar resistências operacionais através de dados comparativos e liderança partilhada.',
        tag: 'Liderança da Mudança',
        metrics: '8 Regiões Alinhadas · 100% Adesão',
        proofAnchor: 'block',
        star: {
          situation:
            'Os responsáveis de mercado regionais resistiam à transição de agências locais para um modelo global unificado, temendo a perda de autonomia e qualidade cultural.',
          task:
            'Construir consenso e obter a aprovação de líderes em 8 organizações regionais dispersas.',
          action:
            'Realizei auditorias transparentes comparando qualidade local e centralizada; lancei um piloto de 30 dias dando aos líderes copropriedade dos critérios do scorecard; partilhei painéis semanais.',
          result:
            'Converti líderes céticos em defensores convictos do programa, garantindo adesão unânime ao modelo global.',
        },
        l6Principle: 'A influência sem autoridade conquista-se através da transparência de dados e da partilha da autoria da mudança.',
      },
      {
        id: 'oc-2',
        title: 'Liderança Emergente em Ambientes de Alta Pressão',
        subtitle: 'Assumir a liderança no vazio operacional para estabelecer clareza e alinhamento.',
        tag: 'Influência Sem Autoridade',
        metrics: 'Prazos Reduzidos a Metade · Clareza Total',
        proofAnchor: 'apple-2026',
        star: {
          situation:
            'Num ambiente de produção acelerado, várias equipas de engenharia e design submetiam pedidos concorrentes sem critérios claros de priorização, gerando atrasos.',
          task:
            'Preencher o vazio operacional sem autoridade hierárquica formal para estabelecer processos claros de triagem.',
          action:
            'Mapeei o ciclo de vida dos pedidos; implementei um painel centralizado de triagem com SLAs claros de P0 a P3; orientei os responsáveis em boas práticas de alinhamento assíncrono.',
          result:
            'Reduzi o tempo de resposta em 50%, eliminei conflitos entre equipas e criei um sistema adotado por toda a organização.',
        },
        l6Principle: 'A verdadeira liderança demonstra-se resolvendo ambiguidades que ninguém assumiu.',
      },
      {
        id: 'oc-3',
        title: 'Adaptação Ágil e Cultura Construtiva dos 5-Porquês',
        subtitle: 'Transformar imprevistos técnicos e erros operacionais em robustez sistémica permanente.',
        tag: 'Resiliência Operacional',
        metrics: 'Causa-Raiz Resolvida · Zero Recorrência',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Uma migração de ferramentas causou inesperadamente erros de codificação em bases de dados antigas, corrompendo textos de teste em idiomas não latinos.',
          task:
            'Conter o risco de produção, resolver a dívida técnica e implementar salvaguardas sem apontar culpados.',
          action:
            'Pausei os pipelines afetados em 30 minutos; conduzi uma análise construtiva de 5-Porquês com engenharia e fornecedores; integrei validações automáticas no pré-commit.',
          result:
            'Restaurei integralmente os pipelines sem impacto para clientes, eliminando a causa-raiz de forma definitiva.',
        },
        l6Principle: 'Análises construtivas convertem falhas pontuais em resiliência sistémica duradoura.',
      },
    ],
  },
  {
    id: 'executive-health',
    number: '04',
    title: 'Monitorização Executiva e Relatórios de Impacto',
    subtitle: 'Métricas preditivas vs. tardias, reuniões executivas e otimização de custos unitários.',
    icon: 'Activity',
    color: 'amber',
    subCards: [
      {
        id: 'eh-1',
        title: 'Painéis com Indicadores Preditivos vs. Tardios',
        subtitle: 'Antecipar estrangulamentos antes que se transformem em crises executivas.',
        tag: 'Arquitetura de Métricas',
        metrics: '99% Precisão Preditiva · Zero Atrasos Surpresa',
        proofAnchor: 'block',
        star: {
          situation:
            'A liderança executiva dependia de retrospetivas tardias pós-lançamento, descobrindo derrapagens orçamentais apenas após a entrega dos projetos.',
          task:
            'Desenhar um modelo de telemetria operacional com visibilidade em tempo real sobre a saúde dos fluxos de trabalho.',
          action:
            'Construí um painel duplo com indicadores preditivos (volume de entrada, atrasos de revisão, capacidade dos parceiros) e métricas consolidadas de prazo e orçamento.',
          result:
            'Permitiu à liderança identificar restrições de capacidade com 3 semanas de antecedência, reduzindo atrasos surpresa a zero.',
        },
        l6Principle: 'Métricas preditivas proporcionam capacidade de decisão; métricas tardias apenas explicam o passado.',
      },
      {
        id: 'eh-2',
        title: 'Modelo de Reunião Executiva de 30 Minutos com VPs',
        subtitle: 'Estruturação de sessões de alto impacto focadas em decisões estratégicas para a administração.',
        tag: 'Presença Executiva',
        metrics: 'Sessões de 30 Minutos · Decisões Rápidas',
        proofAnchor: 'miis',
        star: {
          situation:
            'Reuniões operacionais perdiam-se frequentemente em detalhes táticos, consumindo tempo dos VPs sem garantir decisões sobre bloqueios críticos.',
          task:
            'Desenvolver um modelo de reunião executiva direto, ágil e focado na tomada de decisões estratégicas.',
          action:
            'Criei uma agenda de 4 pontos: 5 min para alinhamento de OKRs; 10 min para oportunidades; 10 min para riscos críticos a decidir; 5 min para próximos passos e responsabilidades.',
          result:
            'Acelerei aprovações executivas, reduzi o tempo de reuniões em 40% e recebi elogios diretos pela clareza na liderança.',
        },
        l6Principle: 'A comunicação com executivos deve focar-se nas decisões a tomar e não em detalhes técnicos secundários.',
      },
      {
        id: 'eh-3',
        title: 'Otimização de Custos Unitários e Eficiência à Escala',
        subtitle: 'Reduzir custos por tarefa de avaliação sem comprometer a qualidade em idiomas complexos.',
        tag: 'Economia Unitária',
        metrics: '$5 para $1.67 por Unidade · Orçamento de $10M Cumprido',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'O volume de avaliação triplicou de 2M para 6M tarefas mantendo o orçamento fixo de $10M, enquanto o método manual custava $5/tarefa e demorava 8 semanas na integração de avaliadores.',
          task:
            'Aumentar o volume em 3 vezes mantendo o orçamento e garantindo rigor em idiomas mais suscetíveis a alucinações de IA.',
          action:
            'Desenhei um modelo de avaliação baseado em risco, reservando a revisão humana para casos ambíguos e aplicando IA em verificações automatizadas; padronizei contratos com fornecedores.',
          result:
            'Reduzi o custo por tarefa de $5 para $1.67, cumpri o orçamento de $10M e reduzi a integração de parceiros de 8 para 2 semanas.',
        },
        l6Principle: 'A escala atinge-se direcionando o talento humano para onde ele gera o maior valor estratégico.',
      },
    ],
  },
];

export const operationalDomains = [
  {
    id: 'content-operations',
    number: '01',
    title: 'Operações de Conteúdo',
    shortName: 'Operações de Conteúdo',
    icon: 'FileText',
    description: 'Cadeias de fornecimento de conteúdos digitais, integração de CMS/TMS e gestão de publicações multi-mercado.',
    subCards: [
      {
        id: 'co-1',
        title: 'Automação da Cadeia de Conteúdos Digitais',
        subtitle: 'Ligação entre repositórios de engenharia e sistemas globais de marketing.',
        metrics: 'Ciclos Reduzidos em 67% · APIs Automatizadas',
        star: {
          situation: 'A passagem manual de ficheiros entre repositórios de código e o CMS causava atrasos consideráveis.',
          task: 'Automatizar o fluxo de extração, validação e entrega de conteúdos.',
          action: 'Concebi uma solução com webhooks do GitHub integrada com os motores de tradução.',
          result: 'Reduzi o tempo de entrega de 15 para 5 dias úteis sem erros manuais.',
        },
        l6Principle: 'Automatizar os processos técnicos liberta as equipas criativas para se focarem na mensagem.',
      },
      {
        id: 'co-2',
        title: 'Conformidade Geopolítica e da Marca',
        subtitle: 'Validação preventiva de conteúdos para evitar desalinhamentos culturais ou regulamentares.',
        metrics: '200+ Mercados Protegidos · 0 Infrações',
        star: {
          situation: 'Materiais em dezenas de lojas internacionais arriscavam inconformidades regulamentares ou culturais.',
          task: 'Criar pontos de validação prévia sem comprometer os prazos de lançamento.',
          action: 'Implementei critérios padronizados de validação geopolítica articulados com o Jurídico.',
          result: 'Mais de 200 mercados protegidos com total conformidade pelas diretrizes globais.',
        },
        l6Principle: 'A conformidade geopolítica deve ser antecipada e integrada desde o início nos fluxos de trabalho.',
      },
    ],
  },
  {
    id: 'eval-feedback',
    number: '02',
    title: 'Avaliação e Feedback em Escala',
    shortName: 'Avaliação & Feedback',
    icon: 'CheckSquare',
    description: 'Validação humana integrada, calibração de avaliadores e fluxos contínuos de resposta.',
    subCards: [
      {
        id: 'ef-1',
        title: 'Amostragem Baseada em Risco e Calibração de Avaliadores',
        subtitle: 'Concentrar o conhecimento humano nos casos complexos e na verificação de alucinações de modelos.',
        metrics: 'Volume Multiplicado por 3 · 98% Consistência',
        star: {
          situation: 'A avaliação manual constante tornou-se insustentável com o aumento acelerado do volume de dados.',
          task: 'Conceber um sistema adaptável que responda ao crescimento sem disparar os custos operacionais.',
          action: 'Implementei uma amostragem que direciona avaliadores humanos apenas para conteúdos com menor índice de confiança algorítmica.',
          result: 'Mantive 98% de consistência entre avaliadores e reduzi o esforço manual total em 60%.',
        },
        l6Principle: 'A avaliação humana deve ser reservada para decisões complexas e de elevado impacto.',
      },
    ],
  },
  {
    id: 'ai-data-training',
    number: '03',
    title: 'Dados e Treino de IA',
    shortName: 'Dados & Treino de IA',
    icon: 'Cpu',
    description: 'Conjuntos de dados para treino de LLMs, engenharia de prompts, pós-edição de tradução automática e segurança.',
    subCards: [
      {
        id: 'ai-1',
        title: 'Aceleração de Pós-Edição de Tradução Automática (15 para 5 Dias)',
        subtitle: 'Ajuste de modelos neuronais especializados e alinhamento com equipas de linguistas.',
        metrics: 'Ciclo Reduzido em 67% · 99.2% Cumprimento de SLA',
        star: {
          situation: 'Processos tradicionais de tradução demoravam 15 dias úteis para lançamentos de software.',
          task: 'Acelerar os lançamentos integrando tradução automática neuronal com revisão humana qualificada.',
          action: 'Ajustei motores de tradução automática com históricos corporativos e criei guias claros de pós-edição.',
          result: 'Prazos reduzidos para 5 dias, mantendo ou superando as métricas históricas de qualidade humana.',
        },
        l6Principle: 'Acelerar processos com IA exige modelos bem treinados e critérios de avaliação claros.',
      },
    ],
  },
  {
    id: 'testing-response',
    number: '04',
    title: 'Testes e Resposta em Tempo Real',
    shortName: 'Testes & Tempo Real',
    icon: 'Zap',
    description: 'Triagem de incidentes com base em SLAs, cobertura 24/7 Follow-the-Sun e testes automáticos de regressão.',
    subCards: [
      {
        id: 'tr-1',
        title: 'Triagem de Incidentes 24/7 Follow-the-Sun',
        subtitle: 'Transições entre equipas em fusos horários diferentes para assegurar continuidade operacional.',
        metrics: 'Resposta P0 <30 Min · Cobertura 24/7 Ativa',
        star: {
          situation: 'Bloqueios críticos identificados ao final do dia na Europa ficavam parados até à manhã nos EUA.',
          task: 'Implementar um modelo operacional de transição contínua entre fornecedores em vários fusos horários.',
          action: 'Padronizei relatórios diários assíncronos de passagem de turno e alertas automatizados para incidentes P0.',
          result: 'Eliminei tempos de espera noturnos e alcancei respostas em menos de 30 minutos para falhas críticas.',
        },
        l6Principle: 'Operações globais contínuas dependem de comunicações assíncronas claras para não perder informação.',
      },
    ],
  },
  {
    id: 'global-language',
    number: '05',
    title: 'Serviços Globais de Idiomas',
    shortName: 'Serviços de Idiomas',
    icon: 'Languages',
    description: 'Gestão da qualidade linguística, Centros de Excelência de terminologia e adaptação cultural.',
    subCards: [
      {
        id: 'gl-1',
        title: 'Centro de Excelência (CoE) em Terminologia Corporativa',
        subtitle: 'Unificação da voz da marca em todo o ecossistema digital de produtos.',
        metrics: '100% Paridade Global · 26+ Idiomas',
        star: {
          situation: 'Terminologia inconsistente entre produto e marketing prejudicava a confiança internacional na marca.',
          task: 'Centralizar a gestão terminológica numa plataforma corporativa acessível e colaborativa.',
          action: 'Criei um portal de terminologia na cloud com ferramentas de validação integradas nos fluxos técnicos.',
          result: 'Consegui 100% de consistência da marca em 26 idiomas e reduzi em 45% os erros linguísticos comunicados.',
        },
        l6Principle: 'A coerência terminológica é uma componente essencial da qualidade do produto.',
      },
    ],
  },
  {
    id: 'strategy-enablement',
    number: '06',
    title: 'Habilitação Estratégica e Gestão de Fornecedores',
    shortName: 'Habilitação Estratégica',
    icon: 'TrendingUp',
    description: 'Estratégia comercial com parceiros, planos de capacidades e programas conjuntos de inovação.',
    subCards: [
      {
        id: 'se-1',
        title: 'Programa de Parceiros Especializados e Capacidade Elástica',
        subtitle: 'Aumentar a capacidade através de agências parceiras mantendo controlos rigorosos.',
        metrics: '20 Parceiros Homologados · Capacidade 3x Superior',
        star: {
          situation: 'A capacidade interna ficou sobrecarregada durante a rápida expansão digital motivada pelo teletrabalho.',
          task: 'Criar um modelo elástico de parceiros externos sem necessidade de novas contratações internas permanentes.',
          action: 'Estruturei um ecossistema operacional híbrido integrando parceiros qualificados com SLAs padronizados.',
          result: 'Tripliquei a capacidade de entrega e apoiei campanhas globais em 17 mercados em simultâneo.',
        },
        l6Principle: 'Fornecedores estratégicos devem funcionar como uma extensão flexível das equipas internas.',
      },
    ],
  },
  {
    id: 'supplier-partner',
    number: '07',
    title: 'Governação de Fornecedores e Parceiros',
    shortName: 'Governação de Parceiros',
    icon: 'ShieldCheck',
    description: 'Segurança da força de trabalho externa (xWS), controlo de acessos por função e auditorias de conformidade.',
    subCards: [
      {
        id: 'spg-1',
        title: 'Gestão Segura de Acessos e Desativação de Fornecedores',
        subtitle: 'Protocolos de segurança e automação da desativação de permissões de parceiros externos.',
        metrics: '100% Conformidade em Segurança · 0 Falhas de Acesso',
        star: {
          situation: 'Prestadores de serviços dispersos criavam vulnerabilidades no cancelamento de acessos após os projetos.',
          task: 'Implementar gestão rigorosa de acessos por função e desativação imediata no término dos contratos.',
          action: 'Trabalhei com a Segurança da Informação para ligar o término dos contratos à revogação automática de acessos.',
          result: 'Garantida a desativação de 100% das permissões em menos de 1 hora após a conclusão dos contratos.',
        },
        l6Principle: 'A governação de fornecedores deve tratar a segurança de acessos como uma regra de sistema automática.',
      },
    ],
  },
  {
    id: 'operational-controls',
    number: '08',
    title: 'Controlos Operacionais e Conformidade',
    shortName: 'Controlos & Conformidade',
    icon: 'Lock',
    description: 'Conformidade regulamentar, gestão dinâmica de riscos e auditorias contínuas.',
    subCards: [
      {
        id: 'occ-1',
        title: 'Registo Dinâmico de Riscos e Monitorização de Alertas',
        subtitle: 'Acompanhamento contínuo de probabilidade e impacto com planos preventivos de contingência.',
        metrics: '100% Riscos Triados · Zero Falhas Críticas',
        star: {
          situation: 'Projetos deparavam-se frequentemente com imprevistos técnicos e operacionais que desviavam os prazos.',
          task: 'Implementar um registo vivo de riscos gerido ativamente ao longo de todas as fases dos programas.',
          action: 'Defini avaliações mensais de risco com indicadores que despoletam automaticamente planos de contingência.',
          result: 'Antecipei e resolvi 12 riscos críticos sem qualquer atraso nos cronogramas previstos.',
        },
        l6Principle: 'A gestão de riscos é uma disciplina operacional contínua e não um documento estático.',
      },
    ],
  },
  {
    id: 'finance-opex',
    number: '09',
    title: 'Gestão Financeira e Otimização de Custos (OPEX)',
    shortName: 'Finanças & OPEX',
    icon: 'DollarSign',
    description: 'Economia unitária, estimativas orçamentais, conciliação de encomendas e eficiência contínua.',
    subCards: [
      {
        id: 'fom-1',
        title: 'Reconciliação Automática de Faturas e Previsão de Despesas',
        subtitle: 'Eliminar erros manuais de faturação e desvios orçamentais em projetos de milhões de euros.',
        metrics: '0% Desvio Orçamental · Faturação Ágil',
        star: {
          situation: 'A gestão manual de faturas provocava atrasos nos pagamentos a parceiros e desvios nas previsões trimestrais.',
          task: 'Automatizar a validação de encomendas e relacionar a receção real de entregas com a contabilidade.',
          action: 'Liguei a confirmação de entregas na plataforma de operações aos sistemas de gestão financeira.',
          result: 'Reduzi o tempo de processamento de 30 dias para 48 horas e alcancei precisão orçamental quase perfeita.',
        },
        l6Principle: 'O rigor financeiro gera confiança com a Direção Financeira e garante investimento contínuo nos programas.',
      },
    ],
  },
  {
    id: 'bi-telemetry',
    number: '10',
    title: 'Business Intelligence e Telemetria Operacional',
    shortName: 'BI & Telemetria',
    icon: 'BarChart3',
    description: 'Análise de fluxos em tempo real, deteção preventiva de estrangulamentos e painéis para liderança.',
    subCards: [
      {
        id: 'bit-1',
        title: 'Telemetria Integrada e Acompanhamento de SLAs em Tempo Real',
        subtitle: 'Visibilidade completa sobre todas as fases: admissão, triagem, execução e entrega.',
        metrics: '100% Visibilidade dos Fluxos · Alertas Imediatos',
        star: {
          situation: 'As equipas não tinham forma de acompanhar o estado exato dos seus pedidos nos fluxos internacionais.',
          task: 'Construir um painel centralizado de telemetria com acompanhamento em tempo real e análises de desempenho.',
          action: 'Reuni dados de várias ferramentas (Jira, GitHub e sistemas de tradução) num portal único e acessível.',
          result: 'Disponibilizei informação a mais de 100 colaboradores, reduzindo em 80% as mensagens sobre o estado dos trabalhos.',
        },
        l6Principle: 'A telemetria de operações transforma impressões subjetivas em decisões sustentadas por dados reais.',
      },
    ],
  },
];
