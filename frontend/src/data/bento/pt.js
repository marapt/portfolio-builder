// Data for the Multimodal Bento Box: Experiences Page in Portuguese (PT)
// Baseado diretamente em modelos STAR validados e Estruturas de Governação Operacional Google L6

export const bentoHero = {
  eyebrow: 'SISTEMAS OPERACIONAIS E CARTÕES STAR',
  title: 'As Minhas Experiências',
  subheading: 'Modelos STAR',
  subtitle:
    'Demonstração da minha experiência em modelos de governação empresarial, gestão de fornecedores externos e processos comprovados através de cartões estruturados STAR.',
  quickStats: [
    { label: 'Pilares Estratégicos', value: '4 Pilares de Topo' },
    { label: 'Domínios Operacionais', value: '6 Categorias' },
    { label: 'Cartões Interativos', value: '27 Cartões STAR' },
  ],
};

export const topPillars = [
  {
    id: 'portfolio-governance',
    number: '01',
    title: 'Governação de Portfólio e Desenho de Estruturas',
    subtitle:
      'Desenhar, padronizar e escalar modelos operacionais e cadências de revisão em todos os pilares.\nEstabelecer processos estruturados de admissão, alocação de recursos e priorização de programas.',
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
    subtitle:
      'Liderar a estratégia de fornecedores, avaliações de desempenho (MBRs/QBRs) e responsabilização por KPIs/SLAs em parceiros globais (ex.: Lionbridge, Moravia, Accenture, PwC, etc.).\nParceria com Procurement, Legal e Finanças da Microsoft/Block em RFPs, ciclos de contratação, acordos-quadro, governação de SOWs e fluxos de pagamento.',
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
    extendedSubsections: [
      {
        id: 'supplier-partner',
        number: '07',
        title: 'Governação de Fornecedores e Parceiros',
        shortName: 'Governação de Parceiros',
        icon: 'ShieldCheck',
        description:
          'Padronização de modelos de gestão de fornecedores, cadernos de encargos (SOWs), tabelas de preços contratuais, fluxos de admissão e cumprimento de SLAs/SLOs.',
        subCards: [
          {
            id: 'spg-rfp-governance',
            title: 'RFP Global de Fornecedores, Governação de MSAs/SOWs e Cumprimento de SLAs',
            subtitle:
              'Liderança do primeiro RFP em mais de 5 anos, padronização de MSAs/SOWs e implementação de scorecards MBR/QBR.',
            tag: 'Governação de Fornecedores',
            proofAnchor: 'microsoft',
            metrics: '10% Poupança Anual · 15% Eficiência · 95% Limiar de Qualidade',
            star: {
              situation:
                'Na Microsoft (MSCOM em mais de 40 mercados internacionais), a organização não realizava um RFP competitivo para parceiros de globalização há mais de cinco anos, deixando o fornecimento, a responsabilização por SLAs, os ciclos de compras e a governação de SOWs estagnados face à evolução do negócio; de forma similar, em programas multimercado na Block (15+ mercados), acordos fragmentados e validações manuais de faturas causavam atrito de custos e disparidade de desempenho.',
              task:
                'Liderar um RFP competitivo e reestruturar a governação de parceiros em conjunto com Procurement, Legal e Finanças: expandir as opções de fornecedores qualificados, validar o desempenho dos parceiros em funções, padronizar MSAs/SOWs e scorecards de KPIs/SLAs (acompanhados via MBRs/QBRs) e otimizar fluxos de contratação e pagamento sem perturbar a entrega global.',
              action:
                'Propus e liderei um RFP estruturado com Procurement e equipas transversais para avaliar maturidade de mercado, inovação e continuidade; orientei a avaliação do comité para aprovar novos fornecedores enquanto validava os parceiros incumbentes; e colaborei com Procurement, Legal e Finanças para padronizar níveis de MSAs/SOWs, métricas de SLA, reuniões periódicas MBR/QBR e fluxos claros de encomendas e liquidação.',
              result:
                'Ampliei o leque de fornecedores aprovados em Procurement enquanto validei a capacidade dos parceiros incumbentes, reforcei a responsabilização contínua de SLAs através de MBRs/QBRs e MSAs/SOWs uniformizados, e aumentei a velocidade operacional e a previsibilidade de custos com cláusulas inovadoras, incluindo 10% de poupança anual, 15% de otimização operacional e limiares de qualidade de 95% em mercados Tier 1-Tier 2 e 90% no restante globo.',
            },
            l6Principle:
              'RFPs competitivos periódicos, MSAs/SOWs transparentes e uma disciplina rigorosa de MBRs/QBRs salvaguardam a continuidade do negócio enquanto impulsionam inovação e poder negocial.',
          },
        ],
      },
    ],
  },
  {
    id: 'operations-change',
    number: '03',
    title: 'Capacitação Operacional e Otimização de Processos',
    subtitle:
      'Identificar estrangulamentos entre parceiros multifuncionais, organizações e fluxos de trabalho. Introduzir ferramentas e automação de fluxos (automação e integração de processos).\nLiderar a integração e implementação de políticas operacionais (governação de programas, conformidade de recursos e conformidade de dados).',
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
    extendedSubsections: [
      {
        id: 'operational-controls',
        number: '08',
        title: 'Controlos Operacionais e Conformidade',
        shortName: 'Controlos & Conformidade',
        icon: 'Lock',
        description:
          'Gestão da governação de acessos (políticas de equipa e transições de sistemas legados para novas plataformas de força de trabalho), integração/saída de colaboradores e mitigação de riscos operacionais.',
        subCards: [
          {
            id: 'occ-workforce-portal',
            title: 'Reformulação do Microsoft Careers: Portal de Força de Trabalho e Conformidade Laboral',
            subtitle:
              'Modernização do portal de carreiras e força de trabalho da Microsoft para cumprir leis laborais e eliminar fricções operacionais.',
            tag: 'Controlos & Conformidade',
            proofAnchor: 'microsoft',
            metrics: 'Microsoft · Conformidade Laboral · Fluxos Integrados',
            star: {
              situation:
                'Para garantir conformidade legal com leis laborais e de trabalho temporário/contingente, a equipa de Procurement pretendia modernizar o Careers Website e o Workforce Portal, exigindo o alinhamento de partes interessadas, fluxos de conteúdo/operações e visibilidade de recrutamento sem transferências fragmentadas ou estrangulamentos manuais.',
              task:
                'Ajudei a desenvolver e operacionalizar a globalização da experiência do Careers Website e Workforce Portal para que as equipas de programas tivessem fluxos claros, admissão estruturada e execução operacional fiável a nível global.',
              action:
                'Colaborei com equipas de produto, engenharia e operações para mapear fluxos de trabalho ponta a ponta, alinhar requisitos e vistas de acompanhamento, e estabelecer transferências operacionais estruturadas entre o Careers Website e o Workforce Portal.',
              result:
                'Entreguei uma plataforma coesa de Careers Website e Workforce Portal que otimizou a coordenação entre equipas e a visibilidade operacional nos fluxos de gestão e contratação de força de trabalho.',
            },
            l6Principle:
              'Grandes portais e sistemas de gestão de força de trabalho triunfam quando o desenho de fluxos, a titularidade clara e a visibilidade operacional são concebidos desde o primeiro dia.',
          },
          {
            id: 'occ-block-temp-workers',
            title: 'Proposta de Programa de Trabalhadores Temporários da Block',
            subtitle:
              'Auditoria à capacidade interna, extensão de portais transversais e financiamento para cinco mercados de expansão.',
            tag: 'Governação de Equipas',
            proofAnchor: 'block',
            metrics: 'Block · 5 Mercados Expandidos · 5 Recursos Contingentes · Contratação em 4 Semanas',
            star: {
              situation:
                'Na Block, os objetivos de crescimento acelerado em cinco novos mercados e iniciativas concorrentes da organização geraram forte tensão com a continuidade do negócio diário. A capacidade existente de colaboradores internos (FTEs) e as estruturas de equipa não conseguiam absorver a sobrecarga sem colocar em risco prazos operacionais ou gerar falhas de conformidade legal.',
              task:
                'Colaborar com lideranças multifuncionais para liderar uma auditoria com a gestão sénior e RH sobre equipas internas e necessidades de contratação temporária, definir perfis de competências necessários, propor um Programa formal de Trabalho Temporário para Globalização e assegurar a aprovação e financiamento da liderança.',
              action:
                'Mapeei a pressão de trabalho, lacunas de competências e riscos de continuidade nos cinco mercados de expansão; liderei uma auditoria estruturada com a gestão sénior e RH para formalizar os requisitos de trabalho temporário; e apresentei uma proposta abrangente definindo perfis funcionais, salvaguardas de governação e necessidades orçamentais. Concomitantemente, liderei cinco parcerias operacionais: 1) estendi o Portal de Trabalhadores Temporários de outra organização interna à equipa de globalização; 2) ampliei o leque de agências de recrutamento especializadas para 4 fornecedores homologados; 3) colaborei com TI na segurança de onboarding/offboarding, identidades e acessos; 4) elaborei um Acordo-Quadro e SOW uniformizado com os RH e agências; e 5) alinhei com o departamento jurídico o enquadramento estrito da legislação laboral internacional.',
              result:
                'Implementação de um Programa de Trabalho Temporário dedicado à Globalização com financiamento aprovado e capacidade planeada em cinco mercados de expansão com salvaguarda da continuidade: alargamento do leque de agências para 4 parceiros especializados, aprovação executiva para 5 profissionais temporários adicionais, aceleração dos prazos de contratação de 4-8 semanas para 4 semanas e lançamento de todos os cinco mercados no prazo e dentro do orçamento.',
            },
            l6Principle:
              'A governação proativa de equipas e a extensão transversal de plataformas expandem a capacidade elástica enquanto protegem a conformidade laboral e a sustentabilidade das equipas.',
          },
        ],
      },
    ],
  },
  {
    id: 'executive-health',
    number: '04',
    title: 'Monitorização Executiva e Relatórios de Impacto',
    subtitle:
      'Manter um Índice de Saúde Executiva para Operações e Governação de Programas, evidenciando despesas, cumprimento de SLAs, alocação de capacidade de recursos e métricas de sucesso para a Liderança.\nFazer a ponte entre métricas operacionais e a Visão, Missão, Objetivos e OKRs da Organização.',
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
        title: 'Revisões Anuais de Desempenho + MBRs/QBRs',
        subtitle:
          'Alinhar equipas internas e fornecedores em torno de OKRs, agir sobre decisões de risco e celebrar conquistas.',
        tag: 'Governação Executiva',
        metrics: '50 para 10-20 Participantes · 3x Sem. para MBR/QBR · Decisões Rápidas',
        proofAnchor: 'block-microsoft',
        proofAnchors: ['block', 'microsoft'],
        star: {
          situation:
            'As revisões operacionais multifuncionais ficavam frequentemente atoladas em minúcias táticas, consumindo o tempo de VPs, líderes seniores e equipas alargadas sem assegurar decisões sobre bloqueios críticos. Faltava também às equipas uma estrutura consistente e alinhamento claro com a visão, missão e OKRs da organização.',
          task:
            'Colaborar com líderes seniores e partes interessadas de operações executivas para desenhar um modelo de revisão de alto impacto em funções-chave, organizações e fornecedores, ancorado em OKRs, KPIs e objetivos de negócio consistentes.',
          action:
            'Estabeleci um modelo operacional de revisão com múltiplas cadências, abrangendo encontros anuais (offsites), Quarterly Business Reviews (QBRs) de 45 minutos e Monthly Business Reviews (MBRs) de 30 minutos, tanto para equipas internas como para fornecedores externos. Introduzi agendas estruturadas com um sistema de semáforo para manter as revisões focadas e acelerar o seguimento (estruturando QBRs em atualizações de líderes sobre metas/mudanças, alinhamento conciso de OKRs e vitórias, oportunidades estratégicas, riscos críticos sem dono que exigem decisões executivas e próximos passos com matriz RACI clara). Além disso, assumi a síntese de dados pré-reunião, relatórios de risco e pedidos formais de aprovação, distribuindo os documentos com antecedência para garantir "zero surpresas" e alinhamento nas decisões necessárias, seguido da distribuição e acompanhamento rigoroso dos planos de ação acordados.',
          result:
            'Simplifiquei a comunicação executiva e os processos de aprovação, reduzi a participação em reuniões de mais de 50 pessoas para 10 a 20 e converti reuniões 3 vezes por semana numa governação estruturada mensal, trimestral e anual com as lideranças; melhorei o alinhamento em torno de OKRs, riscos e propriedade de decisões, obtendo elogios diretos pela clareza executiva e liderança operacional estruturada.',
        },
        l6Principle:
          'Uma governação estruturada com dados claros simplifica a comunicação, impulsiona ações concretas e aprovações, reduz atritos e dá às equipas o espaço necessário para se sentirem valorizadas e ouvidas.',
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
    extendedSubsections: [
      {
        id: 'finance-opex',
        number: '09',
        title: 'Gestão Financeira e Otimização de Custos (OPEX)',
        shortName: 'Finanças & OPEX',
        icon: 'DollarSign',
        description: 'Economia unitária, estimativas orçamentais, conciliação de encomendas e eficiência contínua.',
        subCards: [
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
                'Ao integrar a Block, a gestão financeira de localização dependia de um único colaborador a gerir fornecedores através de processos manuais e validações cruzadas de faturas. Este modelo operacional não tinha capacidade de escalar face aos planos de expansão internacional e ao volume crescente de transações.',
              task:
                'Como líder de PGM, assumi a responsabilidade de substituir o estrangulamento manual por um modelo financeiro operacional escalável. Para isso, colaborei com os RH para expandir os níveis e responsabilidades dos PMs para a gestão orçamental ponta a ponta (estimativa, reconciliação, monitorização e reporte) e equipar as equipas com relatórios fiscais visuais e interativos.',
              action:
                'Após formalizar com os RH a expansão da função dos PMs para assumirem a estimativa, reconciliação, monitorização e reporte orçamental, coliderei a criação de dashboards fiscais visuais e interativos com os PMs diretos, Engenharia, Finanças, Lideranças Seniores e Fornecedores, permitindo aos PMs auto-monitorizar e reportar custos de forma transparente sem depender de verificações manuais. Também organizei sessões de formação, partilhando com os PMs a minha experiência na gestão orçamental de fornecedores e programas transversais.',
              result:
                'Substituição de um estrangulamento manual por responsabilidade orçamental distribuída entre os PMs e visibilidade fiscal interativa entre PMs, Engenharia, Finanças, liderança e fornecedores. Ao estabelecer uma base escalável de governação de despesas preparada para a expansão de mercados, permitiu a toda a organização cumprir os orçamentos com uma margem de variação trimestral de 5-10% integrada nos SOWs negociados.',
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
                'Na Microsoft (jun. 2016 a abr. 2020), o suporte a operações de marketing global e localização em mais de 40 mercados internacionais implicava trabalhar com múltiplos parceiros externos de tradução e fornecedores em equipas regionais, onde SOWs descentralizados, tabelas de preços inconsistentes, SLAs ad-hoc e validações manuais de faturas causavam atrito de custos e atrasos nas aprovações.',
              task:
                'Estabelecer parceria com Procurement e partes interessadas multifuncionais para auditar a cobertura de fornecedores, padronizar SOWs e níveis de SLA baseados em desempenho, e negociar termos comerciais de Master Services Agreements (MSA) para proteger o orçamento e encurtar prazos de entrega num programa anual multimilionário.',
              action:
                'Colaborei com o departamento global de Procurement para auditar fornecedores ativos, alinhar equipas de localização em torno de modelos unificados de SOW e níveis contratuais orientados a resultados, e rever/negociar termos de MSA incluindo descontos por volume em escala corporativa; associei os termos comerciais a SLAs padronizados, scorecards e revisões mensais/trimestrais de capacidade e execução orçamental com Finanças e Engenharia.',
              result:
                'Reduzi os tempos de ciclo de fornecedores em 35% (de 15 para 9 dias) em mais de 40 mercados internacionais (incluindo lançamentos de campanhas e produtos cortados de 15 para 9 dias), desbloqueei 500.000 dólares em custos evitados no orçamento anual multimilionário da Microsoft Store para reinvestimento em mercados de alto crescimento, e mantive níveis superiores a 90% de CSAT/NPS com conformidade de pagamento a 30 dias.',
            },
            l6Principle:
              'Associar SOWs padronizados, capacidade negocial por volume e telemetria transparente de despesa transforma o investimento em parceiros em capacidade previsível e rigor orçamental.',
          },
        ],
      },
      {
        id: 'bi-telemetry',
        number: '10',
        title: 'Business Intelligence e Telemetria Operacional',
        shortName: 'BI & Telemetria',
        icon: 'BarChart3',
        description:
          'Colaboração com a equipa interna de BI e análise de dados para automatizar o acompanhamento de fluxos, métricas de execução e dashboards executivos.',
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
                'Durante eventos globais de alta velocidade como a Black Friday, as partes interessadas internas não tinham visibilidade unificada e em tempo real sobre a entrega e desempenho de campanhas nos mercados globais e locais, arriscando correções de curso tardias quando o ritmo regional mudava a meio do evento.',
              task:
                'Colaborar com equipas internas para construir dashboards no Power BI com visibilidade de desempenho global e por mercado em tempo real, suportados por mockups visuais claros antes do desenvolvimento.',
              action:
                'Estabeleci parcerias multifuncionais para padronizar definições de KPIs e agregações de mercado globais e locais; desenhei mockups visuais antecipadamente para alinhar hierarquias de dados antes da construção; e implementei dashboards Power BI com atualização quase em tempo real (a cada 60 minutos) cobrindo mais de 40 mercados.',
              result:
                'Substituição de verificações manuais fragmentadas por uma fonte única de verdade durante a Black Friday, reduzindo o tempo de reporte de 3-5 dias para 24-48 horas e permitindo ajustes rápidos a campanhas com baixo desempenho.',
            },
            l6Principle:
              'Prototipar a clareza visual primeiro e associar telemetria em tempo real ao contexto local transforma a velocidade de campanha em execução coordenada.',
          },
          {
            id: 'bit-vendor-governance',
            title: "Microsoft Power BI's: Capacidade de Fornecedores, SLAs e Governação de Custos Operacionais",
            subtitle:
              'Dashboards Power BI unificados integrando capacidade de fornecedores, SLAs de entrega e limites orçamentais.',
            tag: 'Operações de Fornecedores',
            proofAnchor: 'microsoft',
            metrics: '5 Fornecedores · Visibilidade de SLAs a 30 Dias e Previsões a 3 Meses',
            star: {
              situation:
                'A gestão de capacidade de fornecedores, volume de entregas, cumprimento de SLAs (incluindo pontualidade) e custos operacionais em iniciativas ativas não dispunha de uma visão consolidada, dificultando o equilíbrio da carga de trabalho dos parceiros face aos limites orçamentais.',
              task:
                'Desenhar dashboards no Power BI que unificassem capacidade de fornecedores, volume, desempenho de SLAs (pontualidade nas entregas) e métricas de custos operacionais para orientar o planeamento proativo e a governação orçamental.',
              action:
                'Colaborei com partes interessadas internas para alinhar a utilização de capacidade, volume de trabalho, limites de SLAs de entrega pontual e fatores de custo; criei visualizações ligando a produção de parceiros e a conformidade de SLAs diretamente à execução orçamental e margem de capacidade em 5 fluxos de fornecedores.',
              result:
                'Proporcionei aos responsáveis de programas e orçamento visibilidade em tempo real sobre estrangulamentos de capacidade, cumprimento de SLAs e trajetória de despesas, melhorando a visibilidade de entregas pontuais e permitindo um controlo orçamental mais rigoroso, com visibilidade de conformidade até 30 dias e previsões a 3 meses sem sobrecarregar fornecedores.',
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
                'As partes interessadas em produto, engenharia, localização e equipas regionais não dispunham de visibilidade de ponta a ponta sobre onde cada pedido se encontrava entre admissão, triagem, tradução e lançamento, provocando estrangulamentos não detetados até prazos críticos e gerando frequentes pedidos ad-hoc de ponto de situação.',
              task:
                'Coordenei a integração de APIs de fornecedores, desenhei e estruturei a arquitetura visual de gráficos para um portal centralizado de telemetria e BI que acompanhava o rendimento etapa a etapa e o cumprimento de SLAs ao longo de todo o ciclo de vida do pedido, capacitando equipas com visibilidade em regime de autoatendimento e alertas de estrangulamento.',
              action:
                'Colaborei com lideranças de engenharia, operações e fornecedores para padronizar definições de etapas e metas de SLA em admissão, triagem, localização/tradução e implementação; agreguei eventos em tempo real desde ferramentas CAT de fornecedores (TMS) até ferramentas internas da Microsoft como o Jira num portal unificado; e configurei alertas automatizados para pedidos pendentes e quebras de SLA para permitir intervenção precoce.',
              result:
                'Disponibilizei a mais de 20 partes interessadas visibilidade em tempo real sobre cada etapa do fluxo, reduzindo o desgaste ao diminuir em mais de metade as consultas de estado, acelerando a resolução de estrangulamentos antes dos prazos de corte e transformando o acompanhamento subjetivo em governação objetiva de SLAs.',
            },
            l6Principle:
              'A telemetria operacional transforma frustrações subjetivas em dados objetivos e acionáveis.',
          },
          {
            id: 'bit-workforce-capacity',
            title: 'LinkedIn e Block - Gestão de Capacidade de FTEs + Trabalho Temporário',
            subtitle:
              'Modelo de capacidade 0-a-1 de baixa fricção e gestão de trabalho contingente em fases de rápida expansão.',
            tag: 'Operações de Equipas',
            proofAnchor: 'linkedin-block',
            proofAnchors: ['linkedin', 'block'],
            metrics: 'LinkedIn & Block · Escala Contingente de 1 a 5 · 5 para 10 PGMs',
            star: {
              situation:
                'No LinkedIn (a gerir 2 colaboradores diretos internos e 15 linguistas) e na Block (com crescimento de 5 PMs para 10 PGMs em plena expansão internacional), as equipas sobrecarregadas enfrentavam constantes urgências entre a triagem reativa de erros e novas entregas, sem qualquer telemetria de base para medir a carga real de trabalho ou comparar a capacidade de colaboradores internos face a trabalhadores temporários.',
              task:
                'Construir um modelo de monitorização de capacidade e alocação de trabalho 0-a-1 de baixa fricção para aliviar a sobrecarga da equipa, equilibrar tarefas entre colaboradores internos e temporários, e fundamentar com dados a expansão da capacidade contingente de apoio aos novos mercados.',
              action:
                'Utilizei fluxos de trabalho existentes no Jira como camada intercalar de monitorização, separando o tempo dedicado à resolução de erros face a novas entregas e registando tarefas fora do Jira sem burocracia excessiva. Utilizei esses sinais de volume de trabalho para reequilibrar tarefas entre internos e temporários e, na Block, criei um programa dedicado de contratação temporária, escalando de 1 para 5 prestadores de serviços para complementar a equipa interna.',
              result:
                'Estabeleci visibilidade imediata sobre a carga real de trabalho e a distribuição entre recursos internos e temporários no LinkedIn e na Block, aliviando a equipa, escalando a bolsa de prestadores da Block de 1 para 5 em paralelo com o crescimento de 5 PMs para 10 PGMs, e estabelecendo um modelo sustentado e replicável de capacidade.',
            },
            l6Principle:
              'Transformar sinais operacionais já existentes em visibilidade clara de capacidade protege as equipas e apoia os pedidos de recursos com evidências objetivas.',
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
    description: 'Cobertura Linguística Global e Soluções de Localização.',
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
    description: 'Estratégia de fornecedores, governação, conformidade, controlo orçamental e ferramentas operacionais transversais.',
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
];
