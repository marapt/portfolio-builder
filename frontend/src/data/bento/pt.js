// Data for the Multimodal Bento Box: Experiences Page in Portuguese (PT)
// Baseado diretamente em modelos STAR validados e Estruturas de Governação Operacional Google L6

export const bentoHero = {
  eyebrow: 'SISTEMAS OPERACIONAIS E CARTÕES STAR',
  title: 'Experiências',
  subheading: 'Modelos STAR',
  subtitle:
    'Demonstração da minha experiência em modelos de governação empresarial, gestão de fornecedores externos e processos comprovados através de cartões estruturados STAR.\n\nA minha missão: Ajudar a tornar produtos, serviços e soluções acessíveis a todos e em qualquer lugar.',
  quickStats: [
    { label: 'Pilares Estratégicos', value: '8 Pilares de Topo' },
    { label: 'Estruturas Empresariais', value: 'Arquitetura STAR' },
    { label: 'Cartões Interativos', value: '28 Cartões STAR' },
  ],
};

export const topPillars = [
  {
    id: 'executive-health',
    number: '01',
    title: 'Monitorização Executiva e Relatórios de Impacto',
    subtitle:
      'Manter um Índice de Saúde Executiva para Operações e Governação de Programas, evidenciando despesas, cumprimento de SLAs, alocação de capacidade de recursos e métricas de sucesso para a Liderança. Fazer a ponte entre métricas operacionais e a Visão, Missão, Objetivos e OKRs da Organização.',
    icon: 'Activity',
    color: 'amber',
    subCards: [
      {
        id: 'eh-2',
        title: 'Block and Microsoft - Revisões Anuais de Desempenho + MBRs/QBRs',
        subtitle:
          'Alinhar equipas internas e fornecedores em torno de OKRs, agir sobre decisões de risco e celebrar conquistas.',
        tag: 'Governação Executiva',
        metrics: '50 para 10-20 Participantes · 3x Sem. para MBR/QBR · Decisões Rápidas',
        proofAnchor: 'block-microsoft',
        proofAnchors: ['block', 'microsoft'],
        star: {
          situation:
            'As revisões operacionais multifuncionais ficavam frequentemente presas em detalhes táticos, consumindo tempo de VPs, líderes seniores e equipas sem garantir decisões sobre bloqueios críticos. Faltava também às equipas uma estrutura consistente e um alinhamento claro com a visão, missão e OKRs mais amplos da organização e da empresa.',
          task:
            'Fui encarregada de desenhar um modelo de revisão de alto impacto em funções-chave, organizações e fornecedores, em conjunto com líderes seniores e partes interessadas de operações executivas, ancorado em OKRs, KPIs e objetivos de negócio consistentes.',
          action:
            'Estabeleci um modelo operacional de revisão com múltiplas cadências, abrangendo encontros anuais de alinhamento, Quarterly Business Reviews (QBRs) de 45 minutos e Monthly Business Reviews (MBRs) de 30 minutos para equipas internas e fornecedores externos. Introduzi agendas estruturadas com um sistema de semáforo para manter o foco e promover resoluções rápidas (por exemplo, estruturando as QBRs em torno de atualizações de liderança sobre objetivos/mudanças, alinhamento conciso de OKRs e sucessos de equipa, oportunidades estratégicas, riscos críticos sem responsável atribuído a exigir decisões executivas e próximos passos com titularidade clara no modelo RACI). Adicionalmente, assumi a síntese de dados pré-reunião, relatórios de riscos e pedidos claros de aprovação com os responsáveis pelas equipas, distribuindo apresentações prévias para assegurar o princípio de \"sem surpresas\" e o alinhamento nas decisões necessárias, assegurando em seguida a distribuição e acompanhamento dos planos de ação pós-reunião.',
          result:
            'Simplifiquei as comunicações e aprovações executivas, reduzi a participação em reuniões de mais de 50 pessoas para entre 10 e 20, e alterei a cadência de 3 revisões semanais para uma governação mensal, trimestral e anual estruturada com os responsáveis; melhorei o alinhamento quanto a OKRs, riscos e titularidade de decisões, obtendo reconhecimento direto pela clareza executiva e liderança operacional estruturada.',
        },
        l6Principle:
          'Uma governação estruturada com dados claros simplifica a comunicação, impulsiona ações concretas e aprovações, reduz atritos e dá às equipas o espaço necessário para se sentirem valorizadas e ouvidas.',
      },
      {
        id: 'fom-block',
        title: "Block - Gestão e Reporte Orçamental dos PGMs",
        subtitle:
          'Transição de um estrangulamento manual centrado numa única pessoa para ownership orçamental distribuída pelos PMs e dashboards interativos.',
        tag: 'Finanças & OPEX',
        proofAnchor: 'block',
        metrics: 'Block · Processamento de Faturas de 30 para 5 Dias · Margem de 5-10% em SOWs',
        star: {
      situation:
        'Ao ingressar na Block, a gestão financeira de localização dependia de um único recurso que tratava da gestão de fornecedores através de processos marcadamente manuais e validações cruzadas de faturas. Este modelo operacional não conseguia escalar perante a expansão de mercado planeada ou o aumento no volume de transações.',
      task:
        'Como líder de PGM, assumi a responsabilidade de substituir o estrangulamento manual por um modelo financeiro operacional escalável. Para isso, colaborei com os RH para expandir os níveis e responsabilidades dos PMs para a gestão orçamental ponta a ponta (estimativa, reconciliação, monitorização e reporte) e equipar as equipas com relatórios fiscais visuais e interativos.',
      action:
        'Após formalizar com os RH a expansão da função dos PMs para assumirem a estimativa, reconciliação, monitorização e reporte de orçamentos funcionais, coliderei a criação de painéis fiscais visuais e interativos com PMs sob a minha orientação, Engenharia, Finanças, Líderes Seniores e Fornecedores, permitindo aos PMs monitorizarem e reportarem despesas de forma transparente sem dependerem de verificações manuais cruzadas. Também organizei sessões de capacitação, orientando os PMs na gestão de orçamentos de fornecedores, acompanhamento de variações e governação de programas multifuncionais.',
      result:
        'Substituí um estrangulamento manual centrado num único recurso por responsabilidade orçamental distribuída pelos PMs e visibilidade fiscal multifuncional e interativa entre PMs, Engenharia, Finanças, liderança e fornecedores. Ao estabelecer uma base escalável de governação de despesas preparada para expansão de mercados, capacitei toda a organização a cumprir as metas orçamentais, mantendo uma variação orçamental trimestral controlada de 5-10% integrada nos SOWs negociados.',
        },
        l6Principle:
          'Escalar a governação financeira exige associar clareza de funções e dashboards transversais a uma titularidade descentralizada, em vez de sobrecarregar uma única pessoa com estrangulamentos manuais.',
      },
      {
        id: 'fom-microsoft',
        title: 'Microsoft - RFP e Governação de MA / SOW',
        subtitle:
          'Padronização de modelos de SOW, descontos por volume e termos comerciais de MSA em mais de 40 mercados.',
        tag: 'Finanças & OPEX',
        proofAnchor: 'microsoft',
        metrics: '$500K Custos Evitados · -35% Tempo de Ciclo · 40+ Mercados',
        star: {
      situation:
        'Na Microsoft (jun. de 2016 - abr. de 2020), o suporte a operações globais de marketing e localização em mais de 40 mercados internacionais implicava trabalhar com múltiplos parceiros linguísticos e fornecedores externos em equipas regionais, onde SOWs descentralizados, tabelas de preços inconsistentes, SLAs pontuais e verificações manuais de faturação criavam atrito nos custos e atrasos nas aprovações.',
      task:
        'Fui encarregada de auditar a cobertura de fornecedores em conjunto com Procurement e partes interessadas multifuncionais, padronizar SOWs e níveis de SLA baseados em desempenho, e negociar termos comerciais de Master Services Agreements (MSA) para proteger o orçamento e encurtar prazos de entrega num programa anual multimilionário.',
      action:
        'Colaborei com o departamento global de Procurement para auditar fornecedores ativos de localização, alinhar responsáveis multifuncionais de localização em modelos uniformizados de SOW e níveis contratuais baseados em desempenho, e negociar termos de MSA, incluindo descontos corporativos por volume agregado de trabalho; articulei termos comerciais com SLAs padronizados, scorecards e revisões operacionais mensais e trimestrais de execução orçamental e capacidade com Finanças e Engenharia.',
      result:
        'Reduzi os prazos de ciclo dos fornecedores em 35% (de 15 para 9 dias) em mais de 40 mercados internacionais (incluindo a redução nos lançamentos de localização de campanhas e produtos de 15 para 9 dias), consegui $500.000 em custos evitados na dotação anual multimilionária da Microsoft Store para reinvestimento em mercados de elevado crescimento, e mantive um índice de satisfação do cliente (CSAT/NPS) superior a 90%, a par da conformidade auditável de pagamento de faturas a 30 dias.',
        },
        l6Principle:
          'Associar SOWs padronizados, capacidade negocial por volume e telemetria transparente de despesa transforma o investimento em parceiros em capacidade previsível e rigor orçamental.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'operational-bi',
    number: '02',
    title: 'Business Intelligence Operacional',
    shortName: 'BI & Telemetria',
    subtitle:
      'Colaboro com as equipas internas de BI e Análise de Dados para automatizar o acompanhamento de fluxos, a telemetria de SLAs, as métricas de execução e os dashboards executivos, transformando dados operacionais numa fonte única de verdade para decisões mais rápidas.',
    icon: 'BarChart3',
    color: 'sky',
    subCards: [
      {
        id: 'bit-bf',
        title: 'Campanhas Microsoft - Black Friday: Telemetria em Tempo Real para Campanhas Globais',
        subtitle:
          'Dashboards Power BI em tempo real unificando o desempenho de campanhas em mercados globais e locais.',
        tag: 'BI & Telemetria',
        proofAnchor: 'microsoft',
        metrics: '40+ Mercados · 24-48h Turnaround',
        star: {
      situation:
        'Durante eventos globais de alta velocidade como a Black Friday, as partes interessadas internas não tinham visibilidade unificada e em tempo real sobre a entrega e o desempenho de campanhas nos mercados globais e locais, arriscando correções de rumo tardias sempre que os ritmos regionais ou tendências de conversão variavam a meio do evento.',
      task:
        'Fui encarregada de construir dashboards no Power BI com visibilidade de desempenho global e por mercado em tempo real, em colaboração com equipas internas de BI e engenharia, suportados por mockups visuais claros antes do desenvolvimento técnico.',
      action:
        'Estabeleci parcerias multifuncionais para padronizar definições de KPIs e agregações de dados entre mercados globais e locais. Desenhei mockups visuais prévios para alinhar as partes interessadas na hierarquia e apresentação dos dados antes da programação, e construí dashboards no Power BI acompanhando o desempenho ao vivo nos mercados globais e locais em mais de 40 mercados com ciclos de atualização quase em tempo real (como a cada 60 minutos).',
      result:
        'Substituí verificações manuais e fragmentadas de estado por uma fonte única de verdade entre equipas globais e locais durante períodos críticos de Black Friday, reduzindo o tempo de reporte de 3-5 dias para 24-48 horas e permitindo ajustes mais rápidos a meio de campanhas com desempenho abaixo do esperado.',
        },
        l6Principle:
          'Prototipar a clareza visual primeiro e associar telemetria em tempo real ao contexto local transforma a velocidade de campanha em execução coordenada.',
      },
      {
        id: 'bit-vendor-governance',
        title:
          "Microsoft Power BI's -  Fornecedores -\nCapacidade, SLAs e Governação de Custos Operacionais",
        subtitle:
          'Dashboards Power BI unificados integrando capacidade de fornecedores, SLAs de entrega e limites orçamentais.',
        tag: 'Operações de Fornecedores',
        proofAnchor: 'microsoft',
        metrics: '5 Fornecedores · Visibilidade de SLAs a 30 Dias e Previsões a 3 Meses',
        star: {
      situation:
        'A gestão de capacidade de fornecedores, volume, cumprimento de SLAs (incluindo entregas no prazo) e custos operacionais nas iniciativas ativas não dispunha de uma visão operacional consolidada, dificultando o equilíbrio das cargas de trabalho face aos limites orçamentais.',
      task:
        'Fui encarregada de desenhar dashboards no Power BI que unificassem capacidade de fornecedores, volume, desempenho de SLAs (pontualidade nas entregas) e métricas de custos operacionais para orientar o planeamento proativo e a governação orçamental.',
      action:
        'Colaborei com partes interessadas internas para alinhar a utilização de capacidade, volume produzido, limiares de SLA de pontualidade e vetores de custos. Desenvolvi vistas visuais de telemetria relacionando a produção de fornecedores e a conformidade de SLAs diretamente com a execução orçamental e a margem de capacidade em 5 fluxos de trabalho de fornecedores.',
      result:
        'Assegurei aos responsáveis de programas e orçamentos visibilidade em tempo real sobre estrangulamentos de capacidade, cumprimento de SLAs e evolução de despesas. Melhorei a visibilidade de entregas no prazo em todos os itens acompanhados, apoiei um controlo mais rigoroso de variações orçamentais e viabilizei até 30 dias de visibilidade de conformidade e 3 meses de previsão sem sobrealocação de fornecedores.',
        },
        l6Principle:
          'Quando o volume operacional, a saúde dos SLAs e os custos coexistem numa única visão, a governação evolui da reação a urgências para uma gestão disciplinada de recursos e orçamento.',
      },
      {
        id: 'bit-1',
        title: 'Block e LinkedIn - Capacitação Operacional, SLAs e Continuidade de Negócio',
        subtitle:
          'Telemetria etapa a etapa unificando TMS de fornecedores e Jira com alertas proativos de SLA.',
        tag: 'BI & Telemetria',
        proofAnchor: 'block-linkedin',
        proofAnchors: ['block', 'linkedin'],
        metrics: '20+ Partes Interessadas · >50% Redução de Pedidos de Estado',
        star: {
      situation:
        'As partes interessadas multifuncionais em produto, engenharia, localização e equipas regionais não dispunham de visibilidade de ponta a ponta sobre o ponto em que cada pedido individual se encontrava nas etapas de intake, triagem, tradução e implementação, o que fazia com que bloqueios passassem despercebidos até os prazos ficarem apertados, originando pedidos constantes de ponto de situação.',
      task:
        'Fui encarregada de coordenar a integração de APIs de fornecedores e desenhar a arquitetura visual de gráficos para um portal centralizado de telemetria e BI que acompanhasse o rendimento etapa a etapa e o cumprimento de SLAs ao longo de todo o ciclo de vida do pedido, capacitando equipas com visibilidade em regime de autoatendimento e alertas de estrangulamento.',
      action:
        'Colaborei com lideranças de engenharia, operações e fornecedores para padronizar definições de etapas e metas de SLA ao longo do intake, triagem, localização/tradução e implementação. Agreguei dados de eventos e estados em tempo real de ferramentas CAT/TMS de fornecedores para sistemas internos como o Jira num portal unificado de telemetria, configurando alertas automáticos para pedidos parados e quebras de SLAs para que os responsáveis pudessem intervir precocemente.',
      result:
        'Concedi a mais de 20 partes interessadas multifuncionais visibilidade em tempo real e autoatendimento sobre cada fase do processo, reduzindo atritos ao cortar consultas de estado em mais de metade, acelerando a triagem de estrangulamentos antes das datas-limite de lançamento e convertendo cobranças subjetivas em governação objetiva de SLAs.',
        },
        l6Principle:
          'A telemetria operacional transforma frustrações subjetivas em dados objetivos e acionáveis.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'portfolio-governance',
    number: '03',
    title: 'Governação de Portfólio e Desenho de Estruturas',
    subtitle:
      'Desenhar, padronizar e escalar modelos operacionais e cadências de revisão em todos os pilares. Estabelecer processos estruturados de admissão, alocação de recursos e priorização de programas. Cobertura Linguística Global e Soluções de Localização. Sequenciação de lançamentos internacionais multi-onda, governação de campanhas GTM localizadas e alinhamento comercial entre mercados estratégicos.',
    icon: 'Layers',
    color: 'violet',
    subCards: [
      {
        id: 'block-eu-expansion',
        title: 'Block - Expansão para Novos Mercados na UE e Recuperação de Checkout',
        subtitle:
          'Coordenação de lançamentos na UE, resolução de atritos no checkout e institucionalização de governança pós-morte.',
        tag: 'Expansão de Mercados',
        proofAnchor: 'block',
        metrics: '4 Mercados na UE · ~$185M Receita Europeia · Até 10% Recuperação de Receita',
        star: {
          situation:
            'Na Block, a expansão da Square nos mercados europeus (incluindo Irlanda [IE], França [FR], Espanha [ES] e Portugal [PT]) exigiu a coordenação da prontidão multifuncional entre Produto, Engenharia, Finanças, Jurídico, Localização e RP. Durante a expansão na UE e a disponibilização do checkout, lacunas no licenciamento regulamentar, redes bancárias e de pagamentos locais (como Multibanco/MB WAY) e testes pré-lançamento deixaram o checkout do Square Terminal inoperacional para certos fluxos e expuseram os cronogramas a pontos cegos regulamentares e culturais, colocando em risco a receita projetada para o lançamento na UE e forçando a transição de Espanha (ES) para janeiro de 2022, enquanto Portugal (PT) foi reposicionado para mercado Tier 5.',
          task:
            'Fui encarregada de coordenar o planeamento de lançamento de mercado de ponta a ponta, o alinhamento de RACI e launch rooms entre líderes funcionais, intervindo em bloqueadores críticos de lançamento e pagamento para proteger a receita, localizando a jornada do cliente (moeda local, métodos de pagamento locais e experiências adaptadas à cultura) e capturando aprendizagens para futuras expansões.',
          action:
            'Planeamento Multifuncional, RACI e Launch Rooms: Alinhei Marketing, Produto, Engenharia, Finanças, Jurídico, Localização e RP em propostas de mercado, orçamentos, necessidades de contratação, titularidade de RACI, planos de sprint e launch rooms para aprovação executiva.\n\nMitigação de Incidentes de Pagamento e Checkout: Colaborei com Engenharia, Jurídico, Finanças e RP na triagem e testes de emergência quando surgiram lacunas no checkout. Redirecionei o suporte de GTM para métodos de pagamento estabelecidos (como Visa, Apple Pay e Google Pay), adiei sistemas não suportados como o MB WAY, alinhei RP e liderança para evitar declarações públicas prematuras e adaptei localmente preços, moedas e fluxos de checkout.\n\nPost-Mortem e Governação de Fornecedores Locais: Liderei post-mortems e partilha de aprendizagens após a resolução dos incidentes, identificando lacunas regulamentares e bancárias entre o Jurídico, Finanças e o contexto cultural local. Contratei consultores regulamentares e de mercado locais, atualizei matrizes RACI e marcos de lançamento, e reposicionei Portugal para o Tier 5.',
          result:
            'Assegurei com sucesso o lançamento na Irlanda (IE) e em França (FR) durante o ciclo de 2021, em paralelo com a dinâmica de expansão europeia onde a receita anual da Square na Europa atingiu ~$185M (~95% de crescimento homólogo em 2021). Recuperei até 10% da receita de transações localizadas resolvendo a fricção no checkout e ativando métodos de pagamento essenciais nos mercados-alvo europeus. Além disso, institucionalizei aprendizagens pós-incidente, suporte de consultoria regulamentar local e uma governação de portões de lançamento e RACI mais clara entre as equipas.',
        },
        l6Principle:
          'A expansão de mercados tem sucesso quando o licenciamento regulamentar, as redes locais de pagamento e a devida diligência cultural e bancária são validados antecipadamente, e quando as equipas combinam a mitigação rápida de problemas de checkout com post-mortems transparentes que convertem contratempos em governação mais sólida.',
      },
      {
        id: 'gl-2',
        title: 'Microsoft - Conformidade Geopolítica e da Marca',
        subtitle:
          'Implementação de portões pré-voo, scorecards padronizados e revisões no terreno em mais de 40–45 mercados.',
        tag: 'Conformidade Geopolítica',
        proofAnchor: 'microsoft',
        metrics: '200+ Mercados · 40–45+ Países · 0 Infrações · 100% Conformidade',
        star: {
          situation:
            'Enquanto apoiava lançamentos globais de montras e campanhas de marketing na Microsoft em 40-45+ mercados internacionais e mais de 200 montras digitais regionais, os materiais de marketing, editoriais e de produto enfrentavam riscos geopolíticos, regulamentares e culturais. Sem pontos de validação pré-lançamento padronizados e alinhados entre o Jurídico, RP e equipas regionais/geopolíticas, a localização fragmentada e normas inconsistentes arriscavam a exposição da marca, escalamentos e atrasos no lançamento.',
          task:
            'Fui encarregada de estabelecer pontos de validação prévia de conformidade geopolítica e de marca integrados no ritmo de lançamento global, em parceria com o Jurídico, RP e partes interessadas regionais e geopolíticas, garantindo que os lançamentos internacionais cumpriam os requisitos em simultâneo com as etapas de localização e engenharia, sem abrandar a velocidade de publicação.',
          action:
            'Integração de Portões de Lançamento Geopolíticos e de Políticas: Considerei a prontidão geopolítica, de políticas de conteúdos e de marketing regional como critérios de validação simultâneos no fluxo de lançamentos globais, e não como verificações de última hora.\n\nScorecards de Aprovação Padronizados e Alinhamento Terminológico: Colaborei com equipas jurídicas, de relações públicas, geopolíticas e de marca para padronizar grelhas de avaliação de conformidade, diretrizes de sensibilidade regional e materiais de referência e terminologia partilhados.\n\nRevisão de Partes Interessadas Regionais e no Mercado: Estabeleci parcerias com linguistas regionais, revisores locais e responsáveis multifuncionais para equilibrar a consistência global da marca com as especificidades locais e resolver precocemente sensibilidades regionais e culturais durante as reuniões de Rhythm-of-Business (ROB) e revisões de lançamento.',
          result:
            'Aprovei mais de 200 montras digitais de mercado em 40-45+ mercados internacionais com 0 violações de marca e 100% de conformidade com as diretrizes internacionais. Reduzi escalamentos associados a desalinhamentos culturais ou geopolíticos e fortaleci o alinhamento entre o Jurídico, RP, Produto e equipas regionais.',
        },
        l6Principle:
          'A conformidade geopolítica deve ser antecipada, padronizada e integrada de raiz nas etapas do comboio de lançamentos, em vez de constituir um obstáculo reativo de última hora.',
      },
      {
        id: 'gtm-linkedin-stories-redesign',
        title:
          'LinkedIn - Stories e Redesenho da Plataforma\nGovernação Global Multi-Onda de GTM',
        subtitle:
          'Sequenciação de lançamentos internacionais faseados em 6 ondas, 26 idiomas e 17 mercados durante operações remotas da pandemia.',
        tag: 'Expansão Global & GTM',
        metrics: '6 Ondas Globais de GTM · 26 Idiomas e 17 Mercados',
        proofAnchor: 'linkedin',
        externalLink: {
          url: 'https://www.linkedin.com/blog/member/product/a-new-look-for-linkedin-from-the-inside-out',
          label: 'A New Look for LinkedIn: From the Inside Out',
        },
        star: {
          situation:
            'Durante a transição acelerada provocada pela COVID-19 para o trabalho remoto em 2020, o LinkedIn necessitou de lançar o LinkedIn Stories (um novo formato de narrativa visual para utilizadores, jornalistas e marcas) em ondas internacionais sequenciais, a par do primeiro grande redesign da plataforma em cinco anos. Coordenar campanhas de GTM localizadas, atualizações de marca e portões de lançamento em 26 idiomas e 17 mercados sem um modelo operacional de localização centralizado pré-existente arriscava lançamentos fragmentados e janelas de oportunidade perdidas.',
          task:
            'Fui encarregada de criar uma equipa de PGM de Marketing de Localização e executar um modelo escalável de governação de lançamentos e Go-to-Market (GTM) multi-onda, estabelecendo parcerias com Marketing, Engenharia de Localização, Legal e Notícias Editoriais para que cada lançamento regional cumprisse a sua janela, ligando a adoção do storytelling ao valor na jornada do cliente e ao ROI comercial.',
          action:
            'Estruturei lançamentos faseados por ondas começando no Brasil (Onda 1, abril de 2020) e expandindo pelos Países Baixos, EAU/MENA, Austrália, França, o Redesign Global e lançamento nos EUA/Canadá em 24 de setembro de 2020, e Reino Unido (Onda 6, outubro de 2020), aplicando critérios de validação rigorosos com Human-in-the-Loop e alinhamento com parceiros regionais. Estabeleci um modelo operacional resiliente de localização de MARCOM com 2 PMs de Marketing de Localização a tempo inteiro (FTE), até 2 fornecedores Managed Service Provider (MSP) e até 15 linguistas internos para absorver picos de procura sem comprometer a velocidade. Mapeei a comunicação localizada de GTM para cada etapa da jornada do utilizador e anunciante, desde a descoberta inicial e criação do primeiro story (Notoriedade e Ativação), até à criação de hábitos diários (Envolvimento e Retenção), culminando no storytelling de marcas/criadores e desempenho de campanhas (Fidelização e ROI).',
          result:
            'Entreguei com sucesso os lançamentos globais de GTM planeados em 6 ondas, 26 idiomas e 17 mercados durante o período de trabalho remoto da pandemia, a par do redesign global da plataforma em setembro de 2020. Associei a execução localizada de GTM a resultados comerciais e da jornada do cliente, recolhendo sinais de ROI dos anunciantes e métricas de retenção de utilizadores no contexto macro do LinkedIn ultrapassar $10B em receita anual no AF21 e do LinkedIn Marketing Solutions atingir um pico de crescimento de +97% em termos homólogos.',
        },
        l6Principle:
          'Lançamentos globais complexos têm sucesso quando a coordenação de entregas multi-onda alinha a prontidão multifuncional com marcos mensuráveis na jornada do cliente, em vez de datas de lançamento isoladas.',
      },
      {
        id: 'gl-1',
        title: 'IATE -  Data Trainee - Training Fundamentals',
        subtitle:
          'Domínio da curadoria terminológica, avaliação da relevância de pesquisa e fluxos de catálogo com múltiplos perfis no repositório multilingue da UE.',
        tag: 'Fundamentos de Dados',
        proofAnchor: 'eu-dgt',
        metrics: '50 Termos/Dia · Sprint de 30 Dias · EN-PT / PT-EN',
        star: {
          situation:
            'Pouco depois de a base de dados IATE (InterActive Terminology for Europe) ter sido lançada em junho de 2008 como um repositório terminológico multilingue em grande escala (crescendo para milhões de termos e pesquisas), expandir o par linguístico português (EN-PT e PT-EN) exigia a contribuição estruturada para a base terminológica combinada com uma avaliação rigorosa da forma como os utilizadores pesquisavam, recuperavam e experienciavam a plataforma.',
          task:
            'Como estagiária de utilizador e dados, propus-me adquirir domínio aprofundado da base de dados IATE, tanto da perspetiva de utilizador final/curadora como de avaliação de dados, concentrando-me na curadoria terminológica de elevada qualidade para português, gestão de permissões com múltiplos perfis, avaliação da relevância de pesquisa e rotulagem de dados, e teste de funcionalidades pré-lançamento, estabelecendo bases sólidas para trabalhos futuros com catálogos (tanto em fluxos de utilizador no front-end como em estruturas de dados/motores no back-end).',
          action:
            'Curadoria Terminológica de Alto Ritmo e Domínio de Perfis: Dediquei blocos diários específicos (cerca de 4 horas/dia, ou 50% do tempo diário, com a meta de pelo menos 50 termos por dia num sprint de 30 dias) à adição, revisão e aprovação de termos EN-PT / PT-EN, dominando a interface do IATE nos perfis de terminologista, revisora e aprovadora.\n\nRelevância de Pesquisa, Rotulagem de Dados e Testes Pré-Lançamento: Colaborei com equipas internas de dados e engenharia na análise de tipos de consultas de utilizadores, qualidade de resultados e termos não encontrados, avaliação da relevância de pesquisa e critérios de rotulagem de dados, auditoria do motor de termos e comportamento no back-end, e testes a funcionalidades pré-lançamento.\n\nPerspetiva de Catálogo e Fundamentos de Sistemas: Tratei cada entrada de termo, metadado/estado de perfil e resultado de pesquisa como um registo estruturado de catálogo, desenvolvendo uma compreensão precoce da interação entre interfaces de pesquisa/curadoria no front-end e lógica de dados/motor no back-end em repositórios de grande escala (mantendo o desenvolvimento de infraestruturas mais profundas de back-end fora do âmbito do estágio).',
          result:
            'Concluí o sprint estruturado de curadoria terminológica de 30 dias para o par português, dominando os fluxos multi-perfil do IATE. Forneci análises práticas sobre consultas de pesquisa, termos em falta, rotulagem de dados e testes pré-lançamento em conjunto com parceiros de dados e engenharia. Através deste trabalho, construí um modelo mental sólido e duradouro para operações com catálogos de grande escala, interligando a usabilidade no front-end e a precisão da curadoria com a integridade de dados no back-end em funções posteriores.',
        },
        l6Principle:
          'Aplicar uma execução focada e mensurável a uma base de dados de grande escala desde o início, analisando tanto como os utilizadores consultam/curam dados no front-end como o comportamento subjacente de qualidade e relevância, cria uma base sólida e duradoura para a gestão de catálogos complexos ao longo da carreira.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'supplier-performance',
    number: '04',
    title: 'Desempenho de Fornecedores e Governação de Parceiros',
    subtitle:
      'Liderar a estratégia de fornecedores, avaliações de desempenho (MBRs/QBRs) e responsabilização por KPIs/SLAs em parceiros globais (ex.: Lionbridge, Moravia, Accenture, PwC, etc.). Parceria com Procurement, Legal e Finanças da Microsoft/Block em RFPs, ciclos de contratação, acordos-quadro, governação de SOWs e fluxos de pagamento. Padronização de modelos de gestão de fornecedores, cadernos de encargos (SOWs), tabelas de preços contratuais, fluxos de admissão e cumprimento de SLAs/SLOs. Estratégia de fornecedores, governação, conformidade, controlo orçamental e ferramentas operacionais transversais.',
    icon: 'Users',
    color: 'cyan',
    subCards: [
      {
        id: 'sp-3',
        title: "Block - Incumprimento Contratual de Fornecedor - Falha no Cumprimento de SLAs",
        subtitle:
          'Diagnóstico de causas-raiz, reencaminhamento de contingência e plano de ação corretiva de 30 dias para recuperar a adesão a SLAs.',
        tag: 'Governação de Fornecedores',
        metrics: 'Recuperação em 4 Semanas · Fuga de Defeitos <5% · Zero Impacto no Lançamento',
        proofAnchor: 'block',
        star: {
          situation:
            'Na Block (nov. de 2021 - nov. de 2022), durante a entrega contínua de software em mais de 15 mercados internacionais, um fornecedor de nível 1 responsável pelo teste de recursos e internacionalização começou a falhar de forma consistente os prazos de SLA acordados e a ultrapassar o nosso limite de 5% de defeitos não detetados.',
          task:
            'Como Senior PGM Lead, fui responsável por diagnosticar a causa-raiz com relatórios de dados objetivos, proteger os cronogramas de lançamento e limites de qualidade multi-mercado, e aplicar a responsabilidade contratual/SOW sem descarrilar a produção ou quebrar a continuidade do fornecedor, assegurando que o incumprimento contratual era tratado e uma via corretiva implementada.',
          action:
            'Conduzi um diagnóstico objetivo e auditoria de causa-raiz, reunindo escalamentos de parceiros e auditando dados de desempenho de fornecedores, identificando um aumento de 20% no tempo de resposta (20 entregas fora do prazo num universo de 100 mensais durante 3 a 6 meses) e uma fuga de defeitos acima do limite de 5%. Trabalhei com o gestor de conta e PM principal do fornecedor durante 3 meses para auditar operações, descobrindo rotatividade de colaboradores pós-aquisição e falhas na integração em ferramentas personalizadas. Iniciei o reencaminhamento de contingência de volumes ao desviar de imediato cerca de 30% do volume de entrada para um fornecedor de apoio, protegendo os cronogramas críticos de lançamento enquanto a remediação avançava. Estruturei um plano de remediação de 30 dias com verificações semanais e alinhei a liderança da Block e do fornecedor relativamente aos progressos do Master Agreement (MA) e SOW, incorporando manuais técnicos atualizados, uma equipa dedicada no fornecedor, um responsável sénior de QA a rever pacotes de saída a expensas do fornecedor e termos de retenção de contingência para lançamentos de emergência no SOW.',
          result:
            'Reduzi a taxa de defeitos para níveis abaixo do limiar de 5% e estabilizei a velocidade de entrega em 4 semanas. Restabeleci as alocações normais de volume no prazo de 90 dias com a recuperação da conformidade com os SLAs, transformando um incumprimento contratual de fornecedor num modelo operacional duradouro e auditado com zero perturbações em lançamentos subsequentes.',
        },
        l6Principle:
          'Articule telemetria objetiva e reencaminhamento de contingência imediato com alinhamento executivo estruturado e salvaguardas contratuais no SOW para que fornecedores em dificuldade recuperem com métricas sólidas sem paralisar lançamentos globais.',
      },
      {
        id: 'spg-rfp-governance',
        title:
          'Microsoft - RFP Global de Fornecedores, Governação de MSAs/SOWs e Cumprimento de SLAs',
        subtitle:
          'Liderança do primeiro RFP em mais de 5 anos, padronização de MSAs/SOWs e implementação de scorecards MBR/QBR.',
        tag: 'Governação de Fornecedores',
        proofAnchor: 'microsoft',
        metrics: '10% Poupança Anual · 15% Eficiência · 95% Limiar de Qualidade',
        star: {
          situation:
            'Na Microsoft (na MSCOM, em mais de 40 mercados internacionais), a organização não realizava um novo RFP de fornecedores de globalização há mais de cinco anos, deixando o aprovisionamento, o cumprimento de SLAs, os ciclos de compras e a gestão de pagamentos/SOWs desatualizados face à evolução da escala e das necessidades de mercado; de forma semelhante, nos programas multi-mercado da Block (15+ mercados), contratos fragmentados e processos manuais de faturação e reconciliação criavam atritos nos custos e inconsistências na prestação de contas.',
          task:
            'Fui encarregada de liderar um RFP competitivo e reestruturar a governação de parceiros em conjunto com Procurement, Legal e Finanças: expandir as opções de fornecedores qualificados, validar o desempenho dos parceiros em funções, padronizar MSAs/SOWs e scorecards de KPIs/SLAs (acompanhados via MBRs/QBRs) e otimizar fluxos de contratação e pagamento sem perturbar a entrega global.',
          action:
            'Propus e liderei um RFP estruturado com Procurement e equipas transversais para avaliar a maturidade de mercado, inovação e continuidade. Conduzi o processo de avaliação e aprovação em comité para expandir o grupo de fornecedores aprovados, validando simultaneamente parceiros em exercício. Em parceria com Procurement, Legal e Finanças, padronizei níveis de MSA/SOW, grelhas de avaliação de KPIs/SLAs, cadências de MBRs/QBRs e fluxos mais claros de ordens de compra e pagamentos.',
          result:
            'Expandi o grupo de fornecedores aprovados em Procurement enquanto validei a capacidade dos operadores existentes, reforcei a prestação de contas contínua através de MBRs/QBRs e MSAs/SOWs padronizados, e melhorei a velocidade operacional e a previsibilidade de custos. Negociei novas cláusulas contratuais incluindo 10% de poupança homóloga nos custos, 15% de otimização operacional através de inovação e o aumento dos limiares de qualidade para 95% nos mercados T1-T2 e 90% para o Resto do Mundo.',
        },
        l6Principle:
          'RFPs competitivos periódicos, MSAs/SOWs transparentes e uma disciplina rigorosa de MBRs/QBRs salvaguardam a continuidade do negócio enquanto impulsionam inovação e poder negocial.',
      },
      {
        id: 'bit-workforce-capacity',
        title:
          'LinkedIn e Block - FTEs e Força de Trabalho Temporária\nGestão de Recursos e Capacidade',
        subtitle:
          'Modelo de capacidade 0-a-1 de baixa fricção e gestão de trabalho contingente em fases de rápida expansão.',
        tag: 'Operações de Equipas',
        proofAnchor: 'linkedin-block',
        proofAnchors: ['linkedin', 'block'],
        metrics: 'LinkedIn & Block · Escala Contingente de 1 a 5 · 5 para 10 PGMs',
        star: {
          situation:
            'No LinkedIn (gerindo 2 colaboradores diretos a tempo inteiro e 15 linguistas) e na Block (escalando de 5 PMs para 10 PGMs durante a expansão de mercado), as equipas sobrecarregadas enfrentavam uma gestão de crises constante entre a triagem reativa de erros e novas entregas, sem que existisse qualquer telemetria de base para medir a carga de trabalho real ou comparar a capacidade interna de efetivos face aos trabalhadores temporários.',
          task:
            'Fui encarregada de construir um modelo de monitorização de capacidade e alocação de trabalho 0-a-1 de baixa fricção para aliviar a sobrecarga da equipa, equilibrar tarefas entre colaboradores internos e temporários, e fundamentar com dados a expansão da capacidade contingente de apoio aos novos mercados.',
          action:
            'Utilizei fluxos de trabalho existentes no Jira como camada intercalar de monitorização, distinguindo o tempo despendido na triagem de erros face a novas entregas de projetos e registando tarefas externas ao Jira sem acrescentar atrito administrativo. Apliquei esses indicadores de carga de trabalho para reequilibrar tarefas entre efetivos e trabalhadores temporários e, na Block, lancei um programa de contingência dedicado, escalando contratados de 1 para 5 para reforçar a capacidade de pessoal a tempo inteiro na expansão de mercado.',
          result:
            'Estabeleci visibilidade imediata sobre a carga de trabalho real e a afetação de efetivos versus pessoal temporário no LinkedIn e na Block. Aliviei a sobrecarga da equipa, escalei o grupo de contratados temporários da Block de 1 para 5 paralelamente ao crescimento de 5 PMs para 10 PGMs em suporte à expansão de mercado, e criei um modelo de capacidade replicável e suportado em dados objetivos.',
        },
        l6Principle:
          'Transformar sinais operacionais já existentes em visibilidade clara de capacidade protege as equipas e apoia os pedidos de recursos com evidências objetivas.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'operations-change',
    number: '05',
    title: 'Capacitação Operacional e Otimização de Processos',
    subtitle:
      'Identificar estrangulamentos entre parceiros multifuncionais, organizações e fluxos de trabalho. Introduzir ferramentas e automação de fluxos (automação e integração de processos), e liderar a integração e implementação de políticas operacionais (governação de programas, conformidade de recursos e conformidade de dados).',
    icon: 'RefreshCw',
    color: 'emerald',
    subCards: [
      {
        id: 'oc-3',
        title: 'Microsoft - Operações de Migração de CRM e Poupança de Custos',
        subtitle:
          'Validação de pipelines InDesign, testes shadow e triagem P0-P3 para proteger $500M em continuidade de campanhas durante a desativação de CRM.',
        tag: 'Migração de Plataformas',
        metrics: 'Protegidos ~$500M de Orçamento · 0 Lançamentos Falhados · >90% NPS',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Na Microsoft, enquanto liderava operações globais de Marcom em mais de 40 idiomas e 200 mercados, a Engenharia foi incumbida de desativar o CRM legado e migrar para uma nova plataforma, em simultâneo com a publicação ativa de campanhas sazonais e de retalho. Surgiu um risco técnico significativo devido à premissa da Engenharia de realizar uma migração direta (\"lift-and-shift\") dos pipelines de extração e ingestão do Adobe InDesign para o novo CRM, o que ameaçava corromper layouts complexos com múltiplas camadas, eliminar variáveis dinâmicas de preços/SKUs e quebrar ativos localizados em produção.',
          task:
            'Após identificar esse risco através da extração manual de ficheiros .indd e auditorias de impacto com fornecedores (que revelaram uma exposição estimada de $500M no orçamento de Globalização MARCOM e potenciais disrupções nas campanhas de retalho em todos os mercados), assumi um mandato alargado de ligação PgM multifuncional entre Engenharia, equipas regionais de Marketing e parceiros linguísticos externos. O meu objetivo foi desenhar um modelo de testes pré-migração e uma resposta de produção em tempo real que assegurasse zero regressões de layout ou localização durante a desativação do CRM, sem abrandar lançamentos regionais ao vivo.',
          action:
            'Validação Empírica do Risco e Criação da Coligação: Para afastar a Engenharia da sua premissa de migração direta, executei uma prova de conceito de diagnóstico recolhendo ficheiros-fonte .indd reais e estabeleci parcerias com fornecedores de Nível 1 para produzir um relatório de impacto técnico, alinhando a gestão, equipas regionais e Marketing numa proposta unificada.\n\nRedução da Superfície de Migração e Testes Paralelos em Sombra: Colaborei com equipas regionais na auditoria de campanhas ativas e inativas, estabelecendo um congelamento temporário de conteúdos e a depreciação de ativos não utilizados. Coordenei a Engenharia e fornecedores de Nível 1 na execução de testes paralelos de ingestão-sombra em pacotes complexos de InDesign e feeds de CRM (usando trocas manuais controladas de ficheiros durante testes em sandbox para isolar pipelines ativos e poupar largura de banda de Engenharia), verificando 100% da integridade na extração de texto, expansão de carateres, gráficos vinculados e reinjeção.\n\nRitmo de Comando em Tempo Real e Portões de Pré-Validação: Estabeleci uma matriz de triagem em tempo real com SLAs rigorosos ativando equipas de emergência de Engenharia e fornecedores para falhas de compilação ou variáveis perdidas de CRM, aplicando um SLA de resolução de 24 horas para defeitos críticos de P1. Transformei cada caso excecional detetado durante os testes em validações automatizadas pré-voo no fluxo do CoE, prevenindo regressões repetidas em vagas regionais subsequentes.',
          result:
            'Proteção de ~$500M em Continuidade de Negócio e Campanhas: Concluí a desativação do CRM e a transição do pipeline de InDesign dentro do prazo, sem qualquer perda de lançamentos ao vivo ou interrupções com impacto nas receitas.\n\nManutenção da Velocidade Máxima e Qualidade: Preservei o nosso tempo de resposta 35% mais rápido e um índice de satisfação do cliente (NPS) superior a 90% ao longo de uma transição arquitetural de elevado risco.\n\nInstitucionalização de Padrões Empresariais de Teste: Converti a nossa lista de verificação de testes-sombra de InDesign, o plano de depreciação de ativos e o protocolo de triagem P0-P3 num padrão permanente de governação do CoE para migrações de plataformas posteriores (incluindo a transição posterior para Adobe).',
        },
        l6Principle:
          'Migrações arquiteturais complexas exigem validação empírica de riscos com dados dos parceiros e isolamento de fluxos de produção através de testes shadow em paralelo antes do corte definitivo.',
      },
      {
        id: 'oc-microsoft-content-ingestion',
        title: 'Microsoft - Content Ingestion and Management',
        subtitle:
          'Substituição do intake fragmentado em sete sistemas por um pipeline automatizado integrado no M365 com validações MVG.',
        tag: 'Otimização de Processos',
        metrics: '5-10 Dias para 48h · Poupança de $300K · 40+ Mercados',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Na Microsoft, a receção de conteúdos estava fragmentada por sete sistemas desconectados de Produto, Marketing e Engenharia. Isto gerava múltiplos fluxos de trabalho manuais, atrasos nos conteúdos, problemas no processamento de localização, duplicação de pedidos de conteúdos e uma experiência inconsistente para os clientes em mais de 40 idiomas e cerca de 200 mercados.',
          task:
            'Fui encarregada de identificar e conceber soluções para lacunas de processos nas ferramentas para substituir o intake manual e ad-hoc por um pipeline de ingestão centralizado e automatizado com Governação Mínima Viável (MVG) desde o início, validando a completude e o encaminhamento prioritário sem desacelerar a Engenharia ou o Marketing.',
          action:
            'Padronizei o intake automatizado e gates de validação pré-voo (verificando completude de metadados, dependências de SKU/preços e estado de bloqueio), transitando de e-mails e folhas de cálculo para modelos estruturados de intake e conectores de API no M365. Implementei uma matriz de triagem e encaminhamento P0-P3 que classificava cargas de entrada por criticidade e modalidade de lançamento, direcionando strings críticas de lançamentos P0/P1 diretamente para pipelines contínuos automatizados, enquanto agrupava materiais standard P2/P3. Monitorizei a capacidade dos fornecedores em tempo real face a métricas de ingestão, tempo de ciclo entre intake e triagem, profundidade de filas e rejeições pré-voo para identificar e resolver estrangulamentos a montante dias antes da entrega regional.',
          result:
            'Eliminei estrangulamentos manuais de admissão e cobranças entre equipas em mais de 40 mercados, reduzindo o tempo de preparação e ingestão de conteúdos de 5 a 10 dias para 48 horas. Consegui poupanças de $300K na gestão de recursos em processos de preparação de ficheiros por parte de efetivos e fornecedores. Alcancei uma adoção sem atrito pelas equipas de Marketing e Produto ao incorporar modelos nativamente nos fluxos do M365 existentes e absorvendo o esforço de configuração no orçamento de Globalização de Marcom, sem necessidade de formação adicional em novas ferramentas.',
        },
        l6Principle:
          'A governação de intake escala com sucesso quando as validações e a triagem prioritária são integradas nativamente nas ferramentas que os parceiros já utilizam sem fricção.',
      },
      {
        id: 'oc-microsoft-content-schema',
        title: 'Microsoft - Content Schema and Metadata Ops',
        subtitle:
          'Definição de schemas unificados de metadados em JSON/XML e validações pré-voo entre Produto, Marketing e Engenharia.',
        tag: 'Arquitetura de Metadados',
        metrics: '100% Conformidade de Schema · 40+ Idiomas · 200+ Mercados',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'Nas Microsoft Stores, as equipas de Produto, Marketing e Engenharia descreviam lançamentos de produtos idênticos recorrendo a modelos de dados incompatíveis. Um SKU no catálogo de Produto não tinha as etiquetas de encaminhamento local exigidas pelo CMS de Engenharia, enquanto as campanhas de Demand Gen no Eloqua usavam etiquetas de texto livre incompatíveis com os metadados de pesquisa da MS Store e com as normas jurídicas. A falta de contexto forçava a triagens manuais e gerava nomenclaturas inconsistentes de produtos em mais de 40 mercados.',
          task:
            'Enquanto PGM responsável pela Globalização na Microsoft Stores e membro do Centro de Excelência (CoE) de Marcom, fui encarregada de definir um schema sistemático de conteúdos e metadados que normalizasse ativos estruturados e não estruturados em todas as organizações, garantindo encaminhamento, conformidade e contexto de localização automáticos.',
          action:
            'Auditei campos de dados em sete repositórios e criei um formato unificado JSON/XML padronizando atributos obrigatórios (market_tier, content_modality, legal_lock_status, source_locale, parent_sku_id) com responsáveis de Produto, Engenharia, Jurídico e fornecedores. Estabeleci parcerias com SEO, Engenharia e programadores web para aplicar regras de schema separando tags de UI/código, variáveis dinâmicas de preços e palavras-chave de pesquisa do texto traduzível, blindando a terminologia protegida da marca. Colaborei com a Engenharia para integrar validações automatizadas de schema pré-voo nos conectores de API, rejeitando de imediato envios mal formatados ou incompletos para os autores antes da sua entrada na localização.',
          result:
            'Consegui um encaminhamento automatizado e baseado em regras em mais de 40 idiomas e 200 mercados, eliminando a triagem manual de PMs para lançamentos de catálogo e campanhas de rotina. Preparei o Hub de Globalização para o futuro com dados estruturados limpos, assegurando a camada fundamental de metadados necessária para a migração subsequente para o Adobe Experience Cloud e pipelines de extração com Azure Cognitive Services.',
        },
        l6Principle:
          'As operações de conteúdo em escala funcionam quando schemas padronizados garantem higiene de dados na ingestão, em vez de corrigir falhas nas fases finais.',
      },
      {
        id: 'oc-microsoft-content-curation',
        title: 'Microsoft - Content Curation, Reuse and Governance',
        subtitle:
          'Estrutura de reutilização de conteúdo em 3 níveis, ciclo de vida com depreciação automatizada e KPIs de reutilização em fornecedores.',
        tag: 'Governação de Conteúdo',
        metrics: 'Poupança Anual de 10% em Fornecedores · +10% Volume · NPS >90%',
        proofAnchor: 'microsoft',
        star: {
          situation:
            'As Microsoft Stores realizavam lançamentos simultâneos a nível global, campanhas promocionais de marketing regional no terreno e iniciativas sazonais de GTM em todo o mundo, resultando numa proliferação excessiva de conteúdos e duplicação em repositórios. As equipas regionais recriavam ou retraduziam textos promocionais quase idênticos, avisos jurídicos desatualizados permaneciam em ramos ativos do CMS e recursos de alto rendimento não eram partilhados para reutilização, elevando os custos de fornecedores e atrasando o time-to-market.',
          task:
            'Enquanto PGM responsável pelo Programa de Globalização, fui encarregada de estabelecer um modelo integrado de curadoria e ciclo de vida de conteúdos para maximizar a reutilização entre mercados, garantir a atualização e depreciação de cópia obsoleta e fornecer blocos pré-aprovados para equipas regionais.',
          action:
            'Criei uma arquitetura de conteúdos em três níveis: Nível 1 Core Global (cópia legal e de produto bloqueada), Nível 2 Regional Modular (blocos de campanha pré-aprovados baseados num modelo de montagem 80/20) e Nível 3 Local Exclusivo (transcriação de elevado contacto). Colaborei com a Engenharia e o Jurídico para implementar regras automáticas de depreciação e ciclo de vida, etiquetando ativos com datas de expiração e estados de campanha para auto-arquivar promoções expiradas e evitar que textos antigos poluíssem a pesquisa da MS Store. Integrei KPIs de curadoria de conteúdos nos SOWs de fornecedores para recompensar o aproveitamento de memórias de tradução e a reutilização modular sem taxas adicionais, estabelecendo ciclos de revisão regional para promover adaptações locais de alto desempenho para a biblioteca core global.',
          result:
            'Reduzi custos redundantes e retrabalho ao maximizar a reutilização de conteúdos em campanhas globais e regionais, contribuindo diretamente para 10% de poupanças homólogas nos custos de fornecedores e um aumento de 10% na capacidade de volume negociada em SOWs, sustentando a satisfação dos clientes acima de 90% NPS. Otimizei as montras digitais e a pesquisa da MS Store ao impedir que textos sazonais caducados e avisos legais obsoletos fossem exibidos, simplificando a descoberta de produtos e a jornada global do comprador.',
        },
        l6Principle:
          'A velocidade sustentável de conteúdos exige uma governação proativa de ciclo de vida: curadoria de ativos de alto valor para montagem modular e depreciação sistemática de conteúdos obsoletos na origem.',
      },
      {
        id: 'occ-workforce-portal',
        title: 'Microsoft - Reformulação da Web Careers -\nPortal de Força de Trabalho e Conformidade Laboral',
        subtitle:
          'Modernização do portal de carreiras e força de trabalho da Microsoft para cumprir leis laborais e eliminar fricções operacionais.',
        tag: 'Controlos & Conformidade',
        proofAnchor: 'microsoft',
        metrics: 'Microsoft · Conformidade Laboral · Fluxos Integrados',
        star: {
      situation:
        'Para cumprir a legislação sobre Força de Trabalho Contingente e Leis Laborais, a equipa de Procurement necessitou de renovar o Website de Carreiras e o Portal de Força de Trabalho, o que exigiu alinhar partes interessadas multifuncionais, fluxos operacionais e de conteúdos, e visibilidade de candidatos ou recrutamento sem transições fragmentadas, monitorização pouco clara ou estrangulamentos manuais.',
      task:
        'Fui encarregada de desenvolver e operacionalizar a globalização da experiência do Careers Website e Workforce Portal para que as equipas de programas tivessem fluxos claros, admissão estruturada e execução operacional fiável a nível global.',
      action:
        'Colaborei com equipas de produto, engenharia e operações para mapear fluxos de trabalho completos em portais e equipas, alinhar requisitos e vistas de acompanhamento claras, e estabelecer transições operacionais estruturadas e visibilidade no Careers Website e Workforce Portal.',
      result:
        'Disponibilizei uma capacidade coerente para o Careers Website e Workforce Portal que simplificou a coordenação entre equipas e a visibilidade operacional nos fluxos de integração e recrutamento, assegurando total conformidade com a legislação laboral e de pessoal contingente.',
        },
        l6Principle:
          'Grandes portais e sistemas de gestão de força de trabalho triunfam quando o desenho de fluxos, a titularidade clara e a visibilidade operacional são concebidos desde o primeiro dia.',
      },
      {
        id: 'occ-block-temp-workers',
        title: 'Block - Proposta de Programa de Trabalhadores Temporários',
        subtitle:
          'Auditoria à capacidade interna, extensão de portais transversais e financiamento para cinco mercados de expansão.',
        tag: 'Governação de Equipas',
        proofAnchor: 'block',
        metrics: 'Block · 5 Mercados Expandidos · 5 Recursos Contingentes · Contratação em 4 Semanas',
        star: {
      situation:
        'Na Block, os objetivos de crescimento acelerado em cinco mercados adicionais e iniciativas concorrentes a nível de toda a organização geraram tensão com a continuidade das operações diárias. A capacidade interna de colaboradores e as estruturas de equipa existentes não conseguiam absorver o pico de trabalho sem arriscar estrangulamentos operacionais ou falhas de conformidade.',
      task:
        'Fui encarregada de liderar uma auditoria multifuncional com a gestão sénior e RH sobre equipas internas e necessidades de contratação temporária, definir perfis de competências necessários, propor um Programa formal de Trabalho Temporário para Globalização e assegurar a aprovação e financiamento da liderança.',
      action:
        'Mapeei a pressão de trabalho, lacunas de competências e riscos de continuidade nos cinco mercados de expansão; liderei uma auditoria estruturada de necessidades com a gestão sénior e RH para formalizar requisitos de apoio externo; e apresentei uma proposta abrangente de programa detalhando perfis funcionais, salvaguardas de governação e orçamento. Concomitantemente, orquestrei cinco integrações operacionais: 1) estendi o Portal de Trabalhadores Temporários de uma organização parceira à operação de globalização; 2) expandi o grupo de agências especializadas para quatro fornecedores especialistas; 3) colaborei com TI na gestão segura de acessos, integração e desativação; 4) estabeleci um Master Agreement e SOW padronizados com os RH e agências; e 5) alinhei com o Jurídico o cumprimento das leis laborais internacionais e normas para contratados.',
      result:
        'Estabeleci um Programa dedicado de Trabalho Temporário para Globalização com financiamento aprovado e planeamento previsível de capacidade nos cinco mercados de expansão, protegendo a continuidade do negócio: expandi o grupo de fornecedores para 4 agências, garanti aprovação orçamental para 5 colaboradores temporários adicionais, reduzi os ciclos de contratação de 4-8 semanas para 4 semanas e lancei todos os cinco mercados-alvo dentro do prazo e orçamento.',
        },
        l6Principle:
          'A governação proativa de equipas e a extensão transversal de plataformas expandem a capacidade elástica enquanto protegem a conformidade laboral e a sustentabilidade das equipas.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'cross-functional-partners',
    number: '06',
    title: 'Alinhamento Multifuncional\n(Partes Interessadas, Parceiros e Clientes)',
    subtitle:
      'Promover a colaboração multifuncional, o alinhamento estratégico com partes interessadas e o consenso executivo entre Produto, Engenharia, Marketing, Jurídico e lideranças regionais. Histórico comprovado de alinhamento com equipas de engenharia e líderes sénior, controladores financeiros, parceiros multifuncionais em diferentes fusos horários, fornecedores externos e executivos.',
    icon: 'Network',
    color: 'blue',
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
            'Líderes de mercados regionais resistiam à transição de agências locais personalizadas para um modelo operacional global unificado, receando perda de qualidade cultural diferenciada e de autonomia.',
          task:
            'Fui encarregada de construir consenso e obter a aprovação de líderes em 8 organizações regionais dispersas que se mostravam céticas quanto à centralização de operações.',
          action:
            'Realizei auditorias transparentes comparando qualidade local e centralizada; lancei um projeto-piloto de 30 dias dando aos líderes regionais corresponsabilidade direta nos critérios de avaliação; e partilhei relatórios semanais de telemetria para demonstrar qualidade e velocidade.',
          result:
            'Converti partes interessadas regionais céticas em promotoras ativas do programa, garantindo aprovação unânime e 100% de adesão ao modelo operacional global em todas as 8 regiões.',
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
            'Durante um contrato de produção de ritmo acelerado na Apple, múltiplas frentes de engenharia e design submetiam pedidos concorrentes e não avaliados sem critérios claros de prioridade, gerando atritos e falhas de comunicação.',
          task:
            'Assumi a responsabilidade de preencher o vazio operacional sem autoridade hierárquica formal para estabelecer processos claros de triagem e um ritmo de trabalho calmo e estruturado.',
          action:
            'Mapeei o ciclo de vida dos pedidos; implementei um painel centralizado de triagem com SLAs explícitos de P0 a P3; e orientei líderes multifuncionais em leituras prévias assíncronas e sessões estruturadas de triagem.',
          result:
            'Reduzi o tempo de resposta a pedidos em 50%, eliminei escalamentos entre equipas e estabeleci um sistema de admissão duradouro adotado por todo o grupo alargado com 100% de clareza organizacional.',
        },
        l6Principle: 'A verdadeira liderança demonstra-se resolvendo ambiguidades que ninguém assumiu.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'live-incidents-response',
    number: '07',
    title: 'Resposta a Incidentes em Tempo Real',
    shortName: 'Incidentes',
    subtitle:
      'Triagem de incidentes com base em SLAs, transições 24/7 Follow-the-Sun, mitigação de crises geopolíticas em tempo real e testes automatizados de regressão.',
    icon: 'Zap',
    color: 'rose',
    subCards: [
      {
        id: 'tr-1',
        title: 'Microsoft e LinkedIn\nModelo 24/7 Follow-the-Sun',
        subtitle: 'Triagem de Incidentes em Escala',
        tag: 'Triagem Operacional de Incidentes',
        proofAnchor: 'microsoft',
        metrics: 'Triagem P0/P1 Quase em Tempo Real · SLA Obrigatório 24-48h · Prontidão Global 24/7',
        star: {
          situation:
            'Em operações de grande volume e grandes campanhas na Microsoft e no LinkedIn, lançamentos multimilionários e períodos de pico como a Black Friday exigiam cobertura global ininterrupta. Sem um modelo operacional contínuo, as diferenças de fusos horários e os riscos operacionais ao vivo podiam paralisar a execução ou adiar correções urgentes.',
          task:
            'Fui encarregada de supervisionar as operações centralizadas de fornecedores Managed Service Provider (MSP) e equipas internas, construindo um modelo 24 horas follow-the-sun com cobertura global em prontidão, especialmente para períodos críticos como a Black Friday. Isto exigia capacidade pré-planeada em avença e prontidão, fluxos claros de mitigação de riscos, e permissões de administração e marcos de aprovação pré-configurados.',
          action:
            'Desenhei e implementei um modelo operacional 24 horas follow-the-sun com fornecedores, parceiros e equipas regionais, assegurando capacidade dedicada em prontidão e avença para janelas de pico. Obtive aprovação das lideranças e de finanças para dotações de pessoal, aprovações e protocolos de mitigação de riscos, permitindo às equipas executarem lançamentos e resolverem riscos operacionais sem aguardar por aprovações ou transferências de cobertura.',
          result:
            'Assegurei lançamentos de campanhas sem incidentes e uma resposta rápida a riscos, resolvendo problemas críticos de P0 e P1 quase em tempo real face a um SLA obrigatório de 24 a 48 horas com cobertura 24/7 global.',
        },
        l6Principle:
          'Operações globais contínuas follow-the-sun exigem capacidade dedicada de prontidão e protocolos de aprovação pré-alinhados para eliminar dependências de fuso horário.',
      },
      {
        id: 'tr-thailand-crisis',
        title: 'Microsoft - Morte do Rei da Tailândia',
        subtitle:
          'Ativação de uma força-tarefa de resposta rápida e matriz de decisão com 3 opções para proteger a integridade da marca durante uma crise nacional imprevista.',
        tag: 'Resposta a Crises',
        proofAnchor: 'microsoft',
        metrics: 'Implementação em 48 Horas · 0 Infrações RP/Legais · Playbook para 200+ Mercados',
        star: {
          situation:
            'Enquanto liderava operações globais de Marcom para as Microsoft Stores (2016-2020), surgiu uma crise geopolítica e cultural súbita com o falecimento do Rei da Tailândia. A nossa montra digital na Tailândia estava ativamente a divulgar campanhas promocionais de retalho, o que representava um risco imediato e de elevado impacto. Prosseguir com vendas comerciais normais num período de luto nacional profundo acarretava o risco de reação negativa severa contra a marca, insensibilidade cultural e potencial infração das regras locais de luto na Tailândia que evoluíam rapidamente, com consequências sérias de relações públicas e geopolíticas para a Microsoft a nível global.',
          task:
            'Assim que a equipa regional da Tailândia me alertou, assumi a liderança da resposta em tempo real ativando um protocolo de comando de emergência multifuncional para alinhar o Jurídico, RP, Design, Engenharia e lideranças regionais numa solução conforme, culturalmente respeitosa e tecnicamente exequível em poucas horas, e não em dias.',
          action:
            'Mobilização de Força-Tarefa de Resposta Rápida: Reuni de imediato pontos de contacto regionais na Tailândia com responsáveis globais de Design, Jurídico, RP, Desenvolvimento Web, Engenharia e liderança executiva para avaliar requisitos regulamentares, riscos de marca e viabilidade técnica em tempo real.\n\nEstruturação de Matriz de Decisão Executiva com 3 Opções (Compromissos Explícitos): Em vez de escalar um problema em aberto, liderei a equipa na síntese de três opções concretas com compromissos claros entre risco e receita para aprovação da liderança:\n\nOpção 1 - Manutenção do Estado Atual + RP em Alerta: Menor esforço de engenharia, mas risco inaceitavelmente elevado para a marca, cultura e conformidade jurídica.\n\nOpção 2 - Desativação Total da Loja Online: Eliminava de imediato o risco cultural/jurídico, mas causava um apagão comercial total e uma experiência negativa para clientes que necessitavam de suporte ou transferências essenciais.\n\nOpção 3 - Reformulação Culturalmente Adaptada + Prontidão para Moratória Legal (Recomendada): Retirar rapidamente faixas promocionais e transitar a loja para uma paleta sóbria, monocromática e respeitosa expressando condolências nacionais, preservando funcionalidades essenciais enquanto se mantinha uma equipa de Engenharia e Jurídico de prevenção para suspensão imediata caso o governo tailandês decretasse moratória comercial obrigatória.\n\nImplementação Rápida e Monitorização em Tempo Real: Obtive alinhamento executivo na Opção 3, acelerei a localização do design e controlo de qualidade com a equipa regional da Tailândia para garantir nuances culturais e linguísticas, e publiquei a loja redesenhada em 48 horas, mantendo ativação de prontidão 24/7 para alterações regulamentares.',
          result:
            'Zero Impacto Negativo em Marca, RP ou Nível Jurídico: Publiquei a loja online culturalmente respeitosa em 48 horas sem qualquer cobertura mediática negativa, zero infrações regulamentares e disponibilidade ininterrupta das funções nucleares da loja.\n\nInstitucionalização de um Guia de Resposta a Crises Geopolíticas: Converti a matriz de decisão de 3 opções e o protocolo de resposta rápida num Guia Reutilizável de Resposta Rápida Geopolítica e Cultural do CoE. Partilhei as melhores práticas aprendidas com todas as outras equipas regionais, dotando equipas em mais de 200 mercados de um fluxo de escalamento pré-alinhado para emergências nacionais súbitas, alterações regulamentares ou desastres naturais.',
        },
        l6Principle:
          'Em crises geopolíticas ou culturais imprevistas, a resposta a incidentes em tempo real tem sucesso ao substituir escalamentos em aberto por uma matriz estruturada de trade-offs explícitos entre risco e receita, combinando adaptação culturalmente respeitosa com gatilhos de prontidão contínua para proteger a integridade global da marca.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'optimization-innovation',
    number: '08',
    title: 'Otimização e Inovação\nMTPE + IA + HIL',
    shortName: 'Otimização e Inovação',
    subtitle:
      'Liderança na otimização de fluxos com IA, treino de modelos neuronais customizados, compressão de economia unitária e sistemas de produto autónomos.',
    icon: 'Cpu',
    color: 'indigo',
    subCards: [
      {
        id: 'ai-1',
        title: 'Microsoft - Lançamento Piloto de MTPE',
        subtitle:
          'Viabilização de localização em grande escala e otimização de SLAs através de tradução com IA e avaliação objetiva.',
        tag: 'Fluxos de MT e IA',
        proofAnchor: 'microsoft',
        metrics: '15 para 5 Dias no Fluxo de MT · -35% Tempo Global de Entrega · 5B Palavras · >90% NPS',
        star: {
          situation:
            'Enquanto Senior Marcom Manager na Microsoft, apoiei as operações globais de marketing e localização para as Microsoft Stores em mais de 40 mercados internacionais, lidando com volumes elevados e ciclos de entrega manuais e legados lentos.',
          task:
            'Fui encarregada de liderar um teste MVP e a adoção piloto de tradução automática (MT) e fluxos assistidos por IA integrados com TMS e avaliação objetiva de qualidade (TAUS DQF) para as Microsoft Stores, de modo a acelerar a entrega e expandir a capacidade mantendo a qualidade e a satisfação do cliente.',
          action:
            'Testei e introduzi fluxos de tradução automática e assistida por IA nas operações de marketing, juntamente com a integração de TMS e avaliação de qualidade com TAUS DQF, estabelecendo parcerias entre equipas e fornecedores para validar a qualidade e o rendimento.',
          result:
            'Reduzi os prazos de entrega de 15 para 5 dias no fluxo de MT (e alcancei uma redução global de 35% nos prazos de localização em mais de 40 mercados), escalei a capacidade de processamento até 5 mil milhões de palavras e sustentei um NPS superior a 90%.',
        },
        l6Principle:
          'Acelerar fluxos de localização em grande volume exige combinar tradução automática com critérios objetivos de qualidade como o TAUS DQF, reduzindo prazos enquanto se protege a satisfação do cliente.',
      },
      {
        id: 'loc-solutions-framework',
        title: 'Arquitetura de Soluções de Localização Empresarial',
        subtitle:
          'Modelo Operacional em 5 Pilares: CoE, MTPE, Telemetria, HITL e Governação Cultural.',
        tag: 'Soluções e Arquitetura de Localização',
        contextLabel: 'Soluções Empresariais',
        proofAnchors: ['microsoft', 'apple-2014', 'linkedin', 'block'],
        proofAnchor: 'microsoft',
        metrics: 'Tiering de SOW/SLA Empresarial · Telemetria Automatizada e MTPE · HITL Estratificado · 50+ Mercados',
        star: {
          situation:
            'Ao operar em organizações globais descentralizadas (Microsoft, Apple, LinkedIn, Block e Hogarth Worldwide), identifiquei estrangulamentos operacionais e comerciais críticos:\n\n• Fragmentação Comercial: Contratos de fornecedores díspares por região, sem SOWs padronizados ou tabelas de preços unificadas.\n• Latência Operacional: Acompanhamento manual por folhas de cálculo e registo de bugs, criando estrangulamentos nos lançamentos.\n• Assimetria de Risco e Qualidade: Exposição ao risco desequilibrada entre conteúdos de base de grande volume e marketing criativo de elevado impacto.',
          task:
            'Fui encarregada de conceber e institucionalizar soluções de localização reutilizáveis e de nível empresarial para escalar a entrega de conteúdos globais por dezenas de mercados internacionais:\n\n• Modelo Operacional Escalável: Escalar a entrega por mais de 50 mercados sem expandir o orçamento ou o número de efetivos.\n• Rapidez e Ciclos de Entrega: Eliminar a admissão manual por folhas de cálculo e acelerar os ciclos de resposta para menos de 24 horas.\n• Qualidade e Governação: Proteger a integridade da marca, a ressonância cultural e a conformidade regulamentar nos níveis técnico e criativo.',
          action:
            'Desenhei e implementei 5 soluções centrais de localização empresarial em equipas operacionais globais:\n\n1. CoE Centralizado e Tiering de SOW/SLA:\nSubstituição de acordos de fornecedores fragmentados por região por um modelo unificado de Centro de Excelência (CoE) e SOWs/SLAs padronizados multinível associados a cartões de pontuação de desempenho objetivos (Microsoft, LinkedIn).\n\n2. Fluxos de Tradução Automática (MT) e Pós-Edição Neuronal (MTPE):\nIntrodução de canais de tradução assistida por IA e modelos de MTPE para conteúdos de base de grande volume, combinados com avaliação de qualidade objetiva usando o TAUS Dynamic Quality Framework (DQF) (Microsoft Stores, Block).\n\n3. Telemetria e Canais de Ingestão Automatizados por API:\nParceria com a Engenharia Central para substituir o acompanhamento manual por folhas de cálculo por canais automatizados de ingestão por API, scripts de triagem de incidentes e painéis de estado operacional em tempo real, reduzindo a latência de admissão para menos de 24 horas (Microsoft, Apple).\n\n4. Estruturas de Avaliação com Estratificação de Risco e Human-in-the-Loop (HITL):\nDesenho de um modelo de verificação de qualidade em 3 níveis combinando verificações estruturais automatizadas, validações semânticas assistidas por modelos e revisão humana (HITL) focada estritamente em casos ambíguos, culturais ou legais de alto risco (Microsoft, MIIS).\n\n5. Governação de Transcriação e Adaptação Cultural Multi-Mercado:\nEstabelecimento de fluxos rigorosos de transcriação, gestão de bases terminológicas e memórias de tradução, e diretrizes de marca em 26 a 50+ mercados para preservar a integridade da marca e a conformidade regulamentar (Hogarth Worldwide, LinkedIn).',
          result:
            'Alcancei resultados mensuráveis de eficiência, rapidez e escala em operações de conteúdos multi-mercado:\n\n• Otimização de Custos: Reduzi substancialmente custos operacionais e de tradução de base através de MTPE e consolidação de fornecedores via CoE.\n• Eficiência Operacional: Eliminei estrangulamentos em transferências manuais e reduzi a latência de admissão para menos de 24 horas via telemetria por API.\n• Aceleração de Prazos: Reduzi prazos de entrega e acelerei os ritmos de lançamento em dezenas de mercados internacionais.\n• Escalabilidade Sem Efetivos Adicionais: Escalei a capacidade de processamento em 50+ mercados globais com zero aumento de equipa.',
        },
        l6Principle:
          'A globalização moderna atinge o sucesso quando as organizações deixam de tratar a localização como um serviço pós-produção.\n\nO sucesso exige estruturar a localização como uma infraestrutura de produto automatizada e estratificada por risco, com uma sólida governação human-in-the-loop.',
      },
      {
        id: 'mara-ai-voice-assistant',
        title: "Mara's AI - Criação de Assistente de Voz com IA em Tempo Real",
        subtitle:
          'Assistente pessoal de voz por IA e dashboard tático de telemetria em tempo real para monitorização de quotas de modelos, rotinas familiares e automação doméstica.',
        tag: 'Desenvolvimento e Crescimento Pessoal',
        contextLabel: 'Projeto Pessoal',
        metrics:
          'Agente Multimodal macOS Local · Gemini 2.5 Flash Native Audio · Telemetria em Tempo Real de Quotas · Sincronização com Calendário e Home Assistant',
        screenshot: '/evidence/mara-ai-voice-assistant.jpg',
        externalLink: {
          url: '/evidence/mara-ai-voice-assistant.jpg',
          label: 'Ver Dashboard do Sistema em Tempo Real (Alta Resolução)',
          buttonLabel: 'UI do Dashboard',
        },
        star: {
          situation:
            'É impossível gerir todas as tarefas diárias e técnicas sem apoio, mas contratar uma assistente a tempo inteiro é dispendioso. Ao tirar partido da tecnologia de IA multimodal emergente, quis testar a hipótese de "me clonar" - não de forma literal, mas criando um agente autónomo de IA que atuasse como a minha assistente executiva pessoal, garantindo a execução pontual de tarefas familiares, técnicas e domésticas.',
          task:
            'Propus-me criar um agente de voz associado a um dashboard visual e dinâmico para análise rápida de dados, interação em tempo real por voz, monitorização da capacidade de recursos e quotas de API no Mac, e agendamento automatizado de alarmes e lembretes de calendário.',
          action:
            'Arquitetei e construí o "Mara AI", um agente multimodal local em macOS com tecnologia Gemini 2.5 Flash Native Audio e um painel de controlo tático em tempo real:\n\n• Telemetria de Quotas e Tokens em Tempo Real: Integrei a monitorização automática de quotas e janelas de 5 horas para modelos Gemini, Claude e GPT, garantindo rigor orçamental no consumo de tokens enquanto desenvolvo o meu portfólio e projetos de engenharia.\n• Automação de Calendário Escolar e Desportivo: Implementei a sincronização contínua de horários escolares, ementas de almoço e treinos de futebol com alertas automáticos com 1 hora de antecedência, eliminando falhas de agenda.\n• Rotinas de Voz e Automação Doméstica: Liguei o sistema a dispositivos Home Assistant e configurei avisos automáticos por voz para rotinas diárias (como lembrar o meu filho e o meu marido para descalçarem os sapatos à entrada).\n• Interação Multimodal por Voz: Desenvolvi comunicação bidirecional por voz com telemetria visual em tempo real através de osciloscópio e esfera de plasma interativa.',
          result:
            'Alcancei uma alavancagem operacional diária expressiva em projetos técnicos e na rotina familiar:\n\n• Governação Orçamental de IA: Monitorizo e planeio atividades de IA mantendo-me rigorosamente dentro do orçamento e do tempo despendido em tokens ao construir projetos como o meu portfólio.\n• Pontualidade e Cumprimento de Agenda: Nunca perco eventos escolares ou treinos de futebol graças ao planeamento automático e lembretes proativos de calendário, poupando tempo valioso.\n• Gestão Doméstica Sem Atrito: Automatizei rotinas familiares diárias com comandos de voz fiáveis, mantendo a vida familiar organizada através de uma arquitetura divertida, escalável e pronta para receber novas competências.',
        },
        l6Principle:
          'Os agentes pessoais de IA atingem o seu potencial máximo quando a interação dinâmica por voz se apoia em telemetria visual em tempo real, transformando a sobrecarga de tarefas diárias em execução proativa e automatizada.',
      },
      {
        id: 'ai-portfolio-building',
        title: 'Construção de Portfólio com IA',
        subtitle:
          'Transformação de marcos de carreira, estruturas de governação operacional e artefactos de entrega num sistema de portfólio bilingue e interativo.',
        tag: 'Desenvolvimento e Crescimento Pessoal',
        contextLabel: 'Projeto Pessoal',
        metrics: '28 Cartões STAR · 8 Pilares Estratégicos · 100% Paridade EN/PT',
        externalLink: {
          url: '/how-i-built-this',
          label: 'Como Construí Este Portfólio (Jornada IA)',
          buttonLabel: 'Como Foi Construído',
        },
        star: {
          situation:
            'Em vez de apresentar um currículo estático ou uma lista tradicional de cargos anteriores, necessitei de apresentar a minha liderança operacional como um sistema de produto interativo e de nível de produção para lideranças executivas e públicos técnicos.',
          task:
            'Propus-me conceber uma experiência de portfólio interativa e bilingue que transformasse marcos de carreira, governação operacional e artefactos de entrega em níveis intuitivos e navegáveis.',
          action:
            'Estruturei uma arquitetura Bento multinível organizando 28 cartões STAR em 8 pilares estratégicos com controlos de rotação, expansão e pesquisa. Interliguei a progressão narrativa de carreira a vistas dinâmicas, incluindo uma cronologia contínua de 20 marcos e quadros Scrum ao vivo, mantendo uma correspondência sincronizada entre inglês (en.js) e português (pt.js) em todos os componentes interativos e filtros.',
          result:
            'Disponibilizei um sistema de portfólio em qualidade de produção combinando métricas essenciais em destaque com secções fáceis de ler de Situação, Tarefa, Ação, Resultado e Aprendizagem, permitindo aos visitantes consultar primeiro os resultados de alto nível ou aprofundar todos os detalhes de execução conforme pretendido.',
        },
        l6Principle:
          'Um portfólio sólido deve ir além de listar conquistas passadas: deve demonstrar como estruturamos informação, desenhamos caminhos de decisão claros e transformamos trabalho operacional complexo numa experiência intuitiva.',
      },
      {
        id: 'ai-nmt-case-study',
        title: 'NMT com IA - Simulador & estudo de caso',
        subtitle:
          'Metodologia empresarial de treino de NMT customizado, sanitização de corpora em 5 fases e avaliação tripartida com simulador interativo.',
        tag: 'Desenvolvimento e Crescimento Pessoal',
        contextLabel: 'Projeto Pessoal',
        metrics:
          'Redução Modelada de ~40% em Custos ($1.125M/Ano em 25M Palavras) · -60% Tempo em Catálogo/UI · COMET ≥0.85 · LaBSE Cosine ≥0.75',
        externalLink: {
          url: '/case-studies/training-nmt',
          label: 'Ver Estudo de Caso NMT e Simulador Interativo',
        },
        star: {
          situation:
            'Os programas empresariais de localização em dezenas de idiomas e mercados dividem-se entre strings repetitivas de UI/catálogo (cerca de 45% de um volume anual estimado de 25M de palavras a uma taxa humana combinada de ~$0,112, ou $2,8M/ano) e transcriação criativa, enquanto as memórias de tradução brutas contêm frequentemente tags corrompidas, identificadores internos de bilhetes (rdar://, Jira), texto em inglês não traduzido nos ficheiros finais ou pares de frases desalinhados. Basear-se exclusivamente em métricas como o BLEU falha perante sinónimos criativos e palavras compostas.',
          task:
            'Fui encarregada de desenhar uma metodologia completa de treino, sanitização e avaliação de Tradução Automática Neuronal (NMT) personalizada (associada a um simulador interativo no browser em nmtPipelineEngine.js) que limpe corpora ruidosos, ajuste modelos estratificados por domínio via transfer learning, aplique critérios rigorosos de qualidade semântica e preserve a criatividade humana para campanhas de marketing de alto impacto.',
          action:
            'Sanitização em 5 Fases e Prevenção de Fugas: Construí um funil multifásico (reduzindo um volume ingerido de 500k segmentos para 250k segmentos limpos) que normaliza tags HTML/XML e variáveis (<var>), remove referências internas a bilhetes e dados pessoais (PII), executa verificações de identificação de idioma (fastText / CLD3) para intercetar fugas em inglês, aplica limites de proporção de comprimento (0,4 a 2,5) e limites de frases, e elimina desalinhamentos semânticos com filtros de similaridade de cosseno LaBSE (maior ou igual a 0,75) antes da deduplicação e isolamento de conjuntos de dados.\n\nTransfer Learning Estratificado por Domínio: Ajustei modelos fundacionais abertos (como NLLB, MarianMT ou Llama 3 via LoRA/QLoRA ou cloud gerida) em dados bilingues curados usando tokens de estilo (como <style:editorial> e <style:ui_concise>) em vez de treinar a partir do zero.\n\nAvaliação Tripartida e Encaminhamento Seletivo: Combinei BLEU (verificação de omissões catastróficas), chrF++ (sensibilidade morfológica e a palavras compostas) e COMET (filtro neural semântico a 0,85+ face aos 0,80 a 0,82 da paridade académica) com fluxos de pós-edição MQM/DQF, encaminhando 11,25M de palavras repetitivas de UI/catálogo através de NMT + MTPE ligeira (passando de 2.500 para 6.250 palavras/dia) mantendo as campanhas criativas sob liderança humana.',
          result:
            'ROI Financeiro e de Velocidade Projetados: Modelei poupanças anuais de ~$1,125M (~40% de redução líquida de custos face a uma base de $2,8M) e uma redução de 60% no tempo de ciclo de catálogos e UI (de 2.500 para 6.250 palavras/dia), com custos reduzidos de computação em fine-tuning (~$20 a $100 por par de idiomas).\n\nRigor de Qualidade e Critérios de Aprovação: Estabeleci uma meta de aceitação de MTPE de 94% segundo avaliação MQM/DQF, um limiar de produção COMET de 0,85+ e um filtro de alinhamento LaBSE maior ou igual a 0,75, preservando a redação publicitária criativa nas mãos de profissionais humanos.',
        },
        l6Principle:
          'O desempenho dos modelos depende de uma rigorosa limpeza e validação semântica pré-ingestão (evitando lixo à entrada, lixo à saída), enquanto a combinação de automação seletiva em conteúdos repetitivos com transcriação humana em materiais estratégicos protege a voz da marca e o orçamento.',
      },
    ],
    extendedSubsections: [],
  },
];

export const operationalDomains = [];
