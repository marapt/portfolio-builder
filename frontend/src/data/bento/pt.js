// Data for the Multimodal Bento Box: Experiences Page in Portuguese (PT)
// Baseado diretamente em modelos STAR validados e Estruturas de Governação Operacional Google L6

export const bentoHero = {
  eyebrow: 'SISTEMAS OPERACIONAIS E CARTÕES STAR',
  title: 'Experiências',
  subheading: 'Modelos STAR',
  subtitle:
    'Demonstração da minha experiência em modelos de governação empresarial, gestão de fornecedores externos e processos comprovados através de cartões estruturados STAR.\n\nA minha missão: Ajudar a tornar produtos, serviços e soluções acessíveis a todos e em qualquer lugar.',
  quickStats: [
    { label: 'Pilares Estratégicos', value: '6 Pilares de Topo' },
    { label: 'Domínios Operacionais', value: '2 Domínios Especializados' },
    { label: 'Cartões Interativos', value: '27 Cartões STAR' },
  ],
};

export const topPillars = [
  {
    id: 'portfolio-governance',
    number: '01',
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
            'Na Block, a expansão do Square para mercados europeus (incluindo Irlanda [IE], França [FR], Espanha [ES] e Portugal [PT]) exigiu a coordenação multifuncional entre Produto, Engenharia, Finanças, Jurídico, Localização e RP. Durante a expansão na UE e os lançamentos de checkout, lacunas no licenciamento regulamentar, redes locais de pagamento/bancárias (como Multibanco/MB WAY) e testes pré-lançamento deixaram o checkout do Square Terminal inoperacional para certos fluxos de pagamento e expuseram os cronogramas a pontos cegos regulamentares e culturais, colocando em risco a receita projetada de lançamento na UE e forçando a Espanha (ES) a adiar para janeiro de 2022, enquanto Portugal (PT) foi reposicionado como mercado Tier 5.',
          task:
            'Coordenar o planeamento de lançamento de mercado de ponta a ponta, o alinhamento de RACI e launch rooms entre líderes funcionais, intervindo em bloqueadores críticos de lançamento e pagamento para proteger a receita, localizar a jornada do cliente (moeda local, métodos de pagamento locais e experiências adaptadas à cultura) e capturar aprendizagens para futuras expansões.',
          action:
            'Planeamento Multifuncional, RACI e Launch Rooms: Alinhei Marketing, Produto, Engenharia, Finanças, Jurídico, Localização e RP em propostas de mercado, orçamentos, necessidades de contratação, matriz RACI, planos de sprint e launch rooms para aprovação executiva. Mitigação de Problemas de Pagamento e Checkout: Colaborei com Engenharia, Jurídico, Finanças e RP na triagem de emergência e testes quando surgiram falhas no checkout, direcionando o suporte de GTM para métodos de pagamento consolidados (como Visa, Apple Pay e Google Pay), adiando redes não suportadas como MB WAY, alinhando RP e liderança para evitar declarações públicas prematuras ou danos à reputação da marca, e localizando preços, moeda e fluxos de checkout. Post-Mortem e Governação de Consultoria Local: Liderei post-mortems e partilha de aprendizagens transversais após a resolução dos problemas, identificando lacunas regulamentares e bancárias entre Jurídico, Finanças e o contexto cultural local; contratei consultores regulamentares/de mercado locais, atualizei marcos de lançamento e RACI, e reclassifiquei Portugal para Tier 5.',
          result:
            'Lançamento bem-sucedido na Irlanda (IE) e França (FR) durante o ciclo de 2021 em paralelo com o momento de expansão europeia onde a receita anual europeia do Square atingiu ~$185M (~95% de crescimento homólogo em 2021). Recuperação de até 10% na receita de transações localizadas através da resolução de atritos no checkout e viabilização dos principais métodos de pagamento nos mercados europeus alvo. Institucionalização de aprendizagens pós-morte, apoio de consultoria regulamentar local e governação mais clara de gates de lançamento e RACI entre equipas.',
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
            'Na Microsoft, o suporte aos lançamentos globais de lojas e marketing em mais de 40–45 mercados internacionais e 200 pontos de venda digitais significava que os conteúdos de marketing regional, editorial e produto enfrentavam riscos geopolíticos, regulamentares e culturais. Sem pontos de validação pré-lançamento padronizados e articulados entre o Jurídico, Relações Públicas e equipas regionais/geopolíticas, uma localização fragmentada e normas inconsistentes colocavam em risco a reputação da marca, gerando conflitos e atrasos de lançamento.',
          task:
            'Estabelecer pontos de validação prévia de conformidade geopolítica e de marca integrados no ritmo de lançamento global, em parceria com o Jurídico, RP e partes interessadas regionais/geopolíticas, garantindo que os lançamentos internacionais cumpriam os requisitos em simultâneo com as etapas de localização e engenharia, sem abrandar a velocidade de publicação.',
          action:
            'Integração de Portões de Lançamento Geopolíticos e de Políticas: Considerei a preparação geopolítica, de políticas de conteúdo e de marketing regional como portões simultâneos de lançamento no comboio global de entregas, em vez de verificações de última hora. Padronização de Scorecards de Aprovação e Alinhamento Terminológico: Colaborei com o Jurídico, RP e equipas geopolíticas/marca para padronizar grelhas de avaliação, diretrizes de sensibilidade regional e materiais de referência e terminologia partilhados. Revisão com Partes Interessadas Regionais e no Terreno: Estabeleci parceria com linguistas locais, revisores no terreno e líderes multifuncionais para equilibrar a consistência global da marca com as especificidades locais e resolver sensibilidades culturais atempadamente durante os ciclos de negócio (ROB) e revisões de lançamento.',
          result:
            'Aprovei mais de 200 mercados de montras globais em 40–45+ países com 0 infrações de marca e 100% de conformidade face às diretrizes internacionais. Reduzi os escalamentos associados a desajustes culturais ou geopolíticos e consolidei o alinhamento entre o Jurídico, RP, Produto e equipas regionais.',
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
            'Durante a rápida transição para o trabalho remoto motivada pela COVID-19 em 2020, o LinkedIn precisava de lançar o LinkedIn Stories (um novo formato de narrativa visual para utilizadores, jornalistas e marcas) em ondas internacionais sequenciais e em paralelo com a primeira grande reformulação da plataforma em cinco anos. A coordenação de campanhas locais de GTM, atualizações de marca e gates de lançamento em 26 idiomas e 17 mercados sem um modelo centralizado prévio de localização de MARCOM criava riscos elevados de lançamentos fragmentados e perda de janelas regionais.',
          task:
            'Criar uma equipa de PGM de Marketing de Localização e executar um modelo escalável de governação de lançamentos e Go-to-Market (GTM) multi-onda, estabelecendo parcerias com Marketing, Engenharia de Localização, Legal e Notícias Editoriais para que cada lançamento regional cumprisse a sua janela, ligando a adoção do storytelling ao valor na jornada do cliente e ao ROI comercial.',
          action:
            'Estruturei lançamentos faseados por ondas começando no Brasil (Onda 1, abril de 2020) e expandindo pelos Países Baixos, EAU/MENA, Austrália, França, Redesenho Global e EUA/Canadá a 24 de setembro de 2020, e Reino Unido (Onda 6, outubro de 2020), aplicando critérios rigorosos de validação humana (Human-in-the-Loop) e alinhamento regional. Criei um modelo de governação de MARCOM com 2 PMs de Marketing de Localização, até 2 fornecedores MSP e até 15 linguistas internos para absorver picos de procura sem comprometer o ritmo de entrega. Mapeei a comunicação de GTM localizada a cada etapa da jornada dos membros e anunciantes: da descoberta e criação da primeira história (Ativação), à formação de hábitos diários no novo design (Retenção), até ao storytelling e desempenho de campanhas de marcas (ROI).',
          result:
            'Entreguei com sucesso lançamentos globais de GTM em 6 ondas, 26 idiomas e 17 mercados durante o período de trabalho remoto da pandemia, em conjunto com o redesenho global de setembro de 2020. Conectei a execução operacional de GTM a resultados comerciais e de retenção ao monitorizar sinais de ROI de anunciantes e métricas de utilizadores, no contexto em que o LinkedIn superou $10B em receita anual no FY21 e a LinkedIn Marketing Solutions atingiu um crescimento recorde de +97% YoY.',
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
            'Pouco depois do lançamento da base de dados IATE (InterActive Terminology for Europe) em junho de 2008 como repositório terminológico multilingue de grande escala (evoluindo para milhões de termos e pesquisas), a estruturação do par de idiomas português (EN-PT e PT-EN) exigiu uma contribuição estruturada para a base de termos, aliada a uma avaliação rigorosa sobre como os utilizadores pesquisavam, recuperavam e experienciavam a plataforma.',
          task:
            'Como estagiário de utilizador e dados, adquirir domínio aprofundado da base de dados IATE, tanto da perspetiva de utilizador final/curador como de avaliação de dados, concentrando-me na curadoria terminológica de elevada qualidade para português, gestão de permissões com múltiplos perfis, avaliação da relevância de pesquisa e rotulagem de dados, e teste de funcionalidades pré-lançamento, estabelecendo bases sólidas para trabalhos futuros com catálogos (tanto em fluxos de utilizador no front-end como em estruturas de dados/motores no back-end).',
          action:
            'Curadoria Terminológica de Alto Ritmo e Domínio de Perfis: Dediquei blocos diários focados (cerca de 4 horas/dia, ou 50% do tempo diário, com a meta de pelo menos 50 termos por dia durante um sprint de 30 dias) à inserção, revisão e aprovação de termos EN-PT / PT-EN, dominando a interface do IATE nos perfis de terminólogo, revisor e aprovador. Relevância de Pesquisa, Rotulagem de Dados e Testes Pré-Lançamento: Colaborei com equipas internas de dados e engenharia na inspeção de tipos de pesquisa dos utilizadores, qualidade dos resultados e termos não encontrados, avaliei a relevância de pesquisa e critérios de rotulagem de dados, auditei o comportamento do motor/back-end de termos e testei funcionalidades pré-lançamento. Perspetiva Estrutural de Catálogos e Sistemas: Tratei cada entrada de termo, metadados/estados de perfil e resultados de pesquisa como registos estruturados de catálogo, desenvolvendo fluência precoce sobre como interfaces de pesquisa/curadoria no front-end interagem com a lógica de dados/motores no back-end em repositórios de grande escala (mantendo a engenharia de infraestrutura profunda fora do âmbito do estágio).',
          result:
            'Concluí com êxito o sprint estruturado de 30 dias de curadoria terminológica para o par português, dominando fluxos de trabalho com múltiplos perfis no IATE. Entreguei contributos práticos sobre consultas de pesquisa, termos em falta, rotulagem de dados e testes de funcionalidades pré-lançamento junto das equipas de dados e engenharia. Construí um modelo mental duradouro para operações de catálogos em grande escala, articulando usabilidade no front-end e rigor de curadoria com integridade de dados no back-end em funções posteriores.',
        },
        l6Principle:
          'Aplicar uma execução focada e mensurável a uma base de dados de grande escala desde o início, analisando tanto como os utilizadores consultam/curam dados no front-end como o comportamento subjacente de qualidade e relevância, cria uma base sólida e duradoura para a gestão de catálogos complexos ao longo da carreira.',
      },
    ],
    extendedSubsections: [],
  },
  {
    id: 'supplier-performance',
    number: '02',
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
            'Na Block (Nov. 2021 – Nov. 2022), durante a entrega contínua de software em mais de 15 mercados internacionais, um parceiro externo Tier-1 de testes e internacionalização começou a falhar de forma consistente os prazos acordados de SLA e a exceder o nosso limite de 5% de fuga de defeitos.',
          task:
            'Como Senior PGM Lead, fui responsável por diagnosticar a causa-raiz com relatórios de dados objetivos, proteger os cronogramas de lançamento e limites de qualidade multi-mercado, e aplicar a responsabilidade contratual/SOW sem descarrilar a produção ou quebrar a continuidade do fornecedor, assegurando que o incumprimento contratual era tratado e uma via corretiva implementada.',
          action:
            'Conduzi um diagnóstico objetivo e auditoria de causa-raiz, reunindo escalamentos internos e dados de desempenho do fornecedor onde identifiquei um aumento de 20% na latência de entrega (20 entregas atrasadas em 100 mensais ao longo de 3 a 6 meses) e fuga de defeitos acima do limite de 5%. Trabalhei com o Account Executive e o Lead PM do fornecedor ao longo de 3 meses, descobrindo rotatividade de equipa pós-aquisição e lacunas de integração em ferramentas personalizadas. Ativei o reencaminhamento de volume de contingência, transferindo de imediato cerca de 30% do volume para um parceiro de reserva para proteger o caminho crítico dos lançamentos. Construí um plano de remediação de 30 dias com pontos de controlo semanais e alinhei a liderança executiva da Block e do parceiro no âmbito do Master Agreement (MA) e SOW, incorporando manuais técnicos atualizados, uma equipa de conta dedicada, um líder sénior de QA a rever entregas a expensas do fornecedor e termos de retenção de contingência para lançamentos de emergência no SOW.',
          result:
            'Reduzi a taxa de defeitos para níveis abaixo do limiar de 5% e estabilizei a velocidade de entrega em 4 semanas. Restaurei as alocações normais de volume em 90 dias com a recuperação da adesão aos SLAs, transformando um incumprimento de desempenho num modelo operacional duradouro e auditado, com zero impacto nos lançamentos globais.',
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
    extendedSubsections: [],
  },
  {
    id: 'operations-change',
    number: '03',
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
            'Na Microsoft, durante a liderança das operações globais de Marcom em mais de 40 idiomas e 200 mercados, a Engenharia recebeu a tarefa de desativar um CRM legado e migrar para uma nova plataforma, em simultâneo com a publicação ativa de campanhas sazonais e de retalho ao vivo. Surgiu um risco técnico crítico baseado na suposição de lift-and-shift da Engenharia para migrar os pipelines de ingestão e extração do Adobe InDesign tal como estavam, com risco de corrupção de esquemas visuais multicamada, perda de variáveis dinâmicas de preços/SKUs e quebra de conteúdos localizados em produção.',
          task:
            'Após identificar esse risco através da extração manual de ficheiros .indd e auditorias de impacto com fornecedores (que revelaram uma exposição estimada de $500M no orçamento de Globalização MARCOM e potenciais disrupções nas campanhas de retalho em todos os mercados), assumi um mandato alargado de ligação PgM multifuncional entre Engenharia, equipas regionais de Marketing e parceiros linguísticos externos. O meu objetivo foi desenhar um modelo de testes pré-migração e uma resposta de produção em tempo real que assegurasse zero regressões de layout ou localização durante a desativação do CRM, sem abrandar lançamentos regionais ao vivo.',
          action:
            'Validação Empírica do Risco e Criação da Coligação: Para afastar a Engenharia da suposição de lift-and-shift, executei uma prova de conceito recolhendo ficheiros .indd reais e elaborando relatórios de impacto técnico com fornecedores Tier-1 para apresentar uma proposta unificada com a Gestão, Marketing e equipas regionais. Redução da Superfície de Migração e Testes Shadow: Auditei campanhas ativas vs inativas, implementando congelamento temporário e desativação de ativos obsoletos. Coordenei Engenharia e fornecedores em testes shadow paralelos com cargas InDesign e feeds de CRM de alta complexidade (recorrendo a trocas manuais controladas em sandbox para isolar pipelines em produção e poupar recursos de engenharia), validando 100% de integridade na extração de texto, expansão de caracteres e reinjeção. Ritmo de Comando de Cutover em Tempo Real e Portões Pré-Voo: Como os lançamentos decorriam em simultâneo, estabeleci uma matriz de triagem P0-P3 com SLAs rigorosos (enxame P0 imediato para quebras em produção ou variáveis perdidas e SLA de 24 horas para P1s), convertendo cada caso de exceção em validações pré-voo automáticas no nosso CoE para evitar repetições.',
          result:
            'Proteção de ~$500M em Continuidade de Negócio e Campanhas: Concluí a desativação do CRM e a migração dos pipelines InDesign dentro do prazo, com zero falhas em lançamentos ao vivo e zero quebras com impacto em receita. Manutenção de Velocidade e Qualidade Máximas: Preservei prazos 35% mais rápidos e uma satisfação de clientes superior a 90% NPS durante uma transição arquitetural de alto risco. Normalização de Padrões Empresariais de Teste: Transformei as listas de verificação de testes shadow, os manuais de depreciação e os protocolos de triagem P0-P3 em padrões permanentes de governação do CoE para migrações futuras (incluindo a posterior transição para Adobe).',
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
            'Na Microsoft, o intake de conteúdos estava fragmentado por sete sistemas desconectados de Produto, Marketing e Engenharia. Isto gerava múltiplos fluxos manuais, atrasos e problemas no processamento de localização, duplicação de pedidos e uma experiência inconsistente para os clientes em mais de 40 idiomas e cerca de 200 mercados.',
          task:
            'Identificar e conceber soluções para lacunas de processos nas ferramentas para substituir o intake manual e ad-hoc por um pipeline de ingestão centralizado e automatizado com Governação Mínima Viável (MVG) desde o início, validando a completude e o encaminhamento prioritário sem desacelerar a Engenharia ou o Marketing.',
          action:
            'Padronizei o intake automatizado e gates de validação pré-voo (verificando completude de metadados, dependências de SKU/preços e estado de bloqueio), transitando de e-mails e folhas de cálculo para formulários padronizados e conectores API no M365. Implementei uma matriz de triagem P0-P3 que classificava payloads por criticidade e modalidade de lançamento, direcionando strings urgentes P0/P1 para pipelines automatizados contínuos enquanto agrupava colaterais P2/P3. Monitorei a capacidade de fornecedores em tempo real versus métricas de ingestão, tempo de triagem, profundidade de fila e taxas de rejeição para antecipar estrangulamentos dias antes da entrega regional.',
          result:
            'Eliminei estrangulamentos manuais de intake e perseguição entre equipas em mais de 40 mercados, reduzindo o tempo de ingestão e preparação de conteúdos de 5-10 dias para 48 horas. Calculei uma poupança de $300K na gestão de recursos em Engenharia e fornecedores. Alcancei adoção sem fricção ao integrar modelos nativamente nas rotinas do M365 e absorver a configuração inicial no orçamento de Globalização da Marcom, com zero necessidade de nova formação.',
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
            'Na Microsoft Stores, as equipas de Produto, Marketing e Engenharia descreviam os mesmos lançamentos de produtos com modelos de dados incompatíveis. Um SKU no catálogo de Produto não tinha as flags de encaminhamento por mercado exigidas pelo CMS da Engenharia, enquanto as campanhas de Marketing no Eloqua usavam tags de texto livre que não mapeavam para os metadados de Pesquisa ou conformidade Legal. A falta de contexto forçava triagens manuais e causava inconsistências de nomenclatura em mais de 40 mercados.',
          task:
            'Enquanto PGM responsável pela Globalização na Microsoft Stores e membro do Centro de Excelência (CoE) de Marcom, definir um schema sistemático de conteúdos e metadados que normalizasse ativos estruturados e não estruturados em todas as organizações, garantindo encaminhamento, conformidade e contexto de localização automáticos.',
          action:
            'Auditei campos de dados em sete repositórios e criei um formato unificado JSON/XML com atributos obrigatórios (market_tier, content_modality, legal_lock_status, source_locale, parent_sku_id) alinhado com Produto, Engenharia, Legal e fornecedores. Colaborei com equipas de SEO e Engenharia para implementar regras que dissociaram tags de código/UI, variáveis dinâmicas de preços e palavras-chave de SEO do texto traduzível, salvaguardando termos de marca protegidos. Integrei com Engenharia validações automáticas pré-voo nos conectores API, sinalizando payloads malformados ou incompletos imediatamente aos autores antes da entrada em localização.',
          result:
            'Alcancei encaminhamento automatizado e baseado em regras para mais de 40 idiomas e 200+ mercados, eliminando a triagem manual de gestores de projetos em atualizações rotineiras de catálogo e campanhas. Preparei o Hub de Globalização para o futuro com dados limpos e estruturados, estabelecendo a base necessária para a migração para a Adobe Experience Cloud e camadas de extração do Azure Cognitive Services.',
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
            'A realização simultânea de lançamentos globais, promoções regionais de Marketing e campanhas sazonais de GTM na Microsoft Stores gerava forte proliferação e duplicação de conteúdos. As equipas regionais recriavam ou retraduziam textos promocionais semelhantes, avisos legais obsoletos permaneciam em ramificações ativas do CMS e ativos locais de alto impacto não eram partilhados para reutilização, aumentando os custos com fornecedores e atrasando o time-to-market regional.',
          task:
            'Enquanto PGM responsável pelo Programa de Globalização, estabelecer um modelo integrado de curadoria e ciclo de vida de conteúdos para maximizar a reutilização entre mercados, garantir a atualização e depreciação de cópia obsoleta e fornecer blocos pré-aprovados para equipas regionais.',
          action:
            'Criei uma arquitetura de conteúdos em três níveis: Nível 1 Core Global (cópia legal e de produto bloqueada), Nível 2 Modular Regional (blocos de campanha pré-aprovados na regra 80/20) e Nível 3 Net-New Local (transcriação de alto impacto). Integrei com Engenharia e Legal regras automatizadas de expiração e estados de ciclo de vida para arquivar promoções expiradas e impedir a reingestão de textos obsoletos na Pesquisa da MS Store. Adicionei métricas de curadoria aos SOWs de fornecedores para recompensar o aproveitamento de memórias de tradução e reutilização modular sem custos adicionais, criando ainda um circuito de feedback para promover as melhores adaptações locais à biblioteca global.',
          result:
            'Reduzi despesas redundantes e retrabalho ao aumentar a reutilização de conteúdos em campanhas globais e regionais, contribuindo diretamente para uma poupança anual de 10% em custos de fornecedores e um aumento de 10% na capacidade de processamento, mantendo o índice de satisfação acima de 90% NPS. Eliminei conteúdos promocionais e legais obsoletos da montra digital e da Pesquisa da MS Store, melhorando a precisão dos resultados e a experiência de compra dos clientes.',
        },
        l6Principle:
          'A velocidade sustentável de conteúdos exige uma governação proativa de ciclo de vida: curadoria de ativos de alto valor para montagem modular e depreciação sistemática de conteúdos obsoletos na origem.',
      },
    ],
    extendedSubsections: [
      {
        id: 'content-operations',
        number: '01',
        title: 'Operações de Conteúdo',
        shortName: 'Operações de Conteúdo',
        icon: 'FileText',
        description:
          'Cadeias de fornecimento de conteúdos digitais, integração de CMS/TMS e gestão de publicações multi-mercado.',
        subCards: [],
      },
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
            title: 'Microsoft - Reformulação da Web Careers -\nPortal de Força de Trabalho e Conformidade Laboral',
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
            title: 'Block - Proposta de Programa de Trabalhadores Temporários',
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
            title:
              "Microsoft Power BI's -  Fornecedores -\nCapacidade, SLAs e Governação de Custos Operacionais",
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
        ],
      },
    ],
  },
  {
    id: 'cross-functional-partners',
    number: '05',
    title: 'Parceiros Multifuncionais e Partes Interessadas',
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
    ],
    extendedSubsections: [],
  },
  {
    id: 'live-incidents-response',
    number: '06',
    title: 'Resposta a Incidentes em Tempo Real',
    shortName: 'Incidentes',
    subtitle:
      'Triagem de incidentes com base em SLAs, transições 24/7 Follow-the-Sun, mitigação de crises geopolíticas em tempo real e testes automatizados de regressão.',
    icon: 'Zap',
    color: 'rose',
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
      {
        id: 'tr-thailand-crisis',
        title: 'Morte do Rei da Tailândia',
        subtitle:
          'Ativação de uma força-tarefa de resposta rápida e matriz de decisão com 3 opções para proteger a integridade da marca durante uma crise nacional imprevista.',
        tag: 'Resposta a Crises',
        proofAnchor: 'microsoft',
        metrics: 'Implementação em 48 Horas · 0 Infrações RP/Legais · Playbook para 200+ Mercados',
        star: {
          situation:
            'Durante a liderança das operações globais de Marcom para as Microsoft Stores (2016–2020), surgiu uma crise geopolítica e cultural súbita com o falecimento do Rei da Tailândia. A nossa montra digital de comércio eletrónico na Tailândia estava a executar campanhas promocionais de retalho ativas, o que representava um risco imediato e de elevado impacto. A manutenção de vendas comerciais normais durante um período de profundo luto nacional arriscava reações públicas severas contra a marca, insensibilidade cultural e eventual incumprimento de regulamentos locais em rápida evolução, acarretando sérias consequências geopolíticas e de relações públicas para a Microsoft a nível global.',
          task:
            'Assim que a equipa regional da Tailândia me alertou, assumi a liderança da resposta em tempo real ativando um protocolo de comando de emergência multifuncional para alinhar o Jurídico, RP, Design, Engenharia e lideranças regionais numa solução conforme, culturalmente respeitosa e tecnicamente exequível em poucas horas, e não em dias.',
          action:
            'Mobilização de Força-Tarefa de Resposta Rápida: Reuni de imediato pontos de contacto locais da Tailândia com as equipas globais de Design, Jurídico, RP, Desenvolvimento Web, Engenharia e liderança executiva para avaliar requisitos regulamentares, riscos de marca e viabilidade técnica em tempo real.\n\nEstruturação de Matriz de Decisão Executiva com 3 Opções (Trade-Offs Explícitos): Em vez de escalar um problema em aberto, liderei a equipa na síntese de três opções concretas com equilíbrios claros entre risco e receita para aprovação executiva:\n\nOpção 1 - Manutenção do Status Quo + Alerta de RP: Menor esforço técnico, mas risco inaceitavelmente elevado para a marca, cultura e conformidade legal.\n\nOpção 2 - Desativação Total da Loja: Eliminação imediata do risco cultural e legal, mas resultando num apagão comercial total e má experiência para clientes que necessitavam de suporte essencial ou downloads.\n\nOpção 3 - Redesenho com Adaptação Cultural + Prontidão para Moratória Legal (Recomendada): Remoção imediata de faixas promocionais e transição da montra para uma paleta sóbria e monocromática expressando condolências nacionais, preservando funcionalidades essenciais da loja enquanto uma equipa de piquete de Engenharia e Jurídico permanecia pronta para desativação instantânea se o governo tailandês decretasse uma moratória comercial obrigatória.\n\nExecução Rápida e Monitorização Contínua: Obtive o alinhamento executivo na Opção 3, acelerei a localização de design e QA com a equipa regional tailandesa para garantir o rigor cultural e linguístico, e implementei a nova montra em produção em 48 horas mantendo um gatilho de prontidão 24/7 para alterações regulamentares.',
          result:
            'Zero Danos Reputacionais, de RP ou Legais: Lançamento da montra culturalmente adaptada em 48 horas com zero cobertura negativa nos media, zero infrações regulamentares e disponibilidade ininterrupta das funções nucleares da loja.\n\nInstitucionalização de Playbook de Crises Geopolíticas: Transformação do modelo de decisão em 3 opções e do protocolo de resposta rápida num Playbook reutilizável de Resposta Rápida Geopolítica e Cultural do Centro de Excelência (CoE). Partilha de boas práticas com todas as outras equipas regionais, proporcionando a equipas em mais de 200 mercados um caminho de escalamento pré-alinhado para emergências nacionais repentinas, mudanças regulamentares ou desastres naturais.',
        },
        l6Principle:
          'Em crises geopolíticas ou culturais imprevistas, a resposta a incidentes em tempo real tem sucesso ao substituir escalamentos em aberto por uma matriz estruturada de trade-offs explícitos entre risco e receita, combinando adaptação culturalmente respeitosa com gatilhos de prontidão contínua para proteger a integridade global da marca.',
      },
    ],
    extendedSubsections: [],
  },
];

export const operationalDomains = [
  {
    id: 'eval-feedback',
    number: '01',
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
      {
        id: 'co-1',
        title: 'Automação da Cadeia de Conteúdos Digitais',
        subtitle: 'Ligação entre repositórios de engenharia e sistemas globais de marketing.',
        tag: 'Cadeia de Conteúdos',
        metrics: 'Ciclos Reduzidos em 67% · APIs Automatizadas',
        star: {
          situation: 'A passagem manual de ficheiros entre repositórios de código e o CMS causava atrasos consideráveis.',
          task: 'Automatizar o fluxo de extração, validação e entrega de conteúdos.',
          action: 'Concebi uma solução com webhooks do GitHub integrada com os motores de tradução.',
          result: 'Reduzi o tempo de entrega de 15 para 5 dias úteis sem erros manuais.',
        },
        l6Principle: 'Automatizar os processos técnicos liberta as equipas criativas para se focarem na mensagem.',
      },
    ],
  },
  {
    id: 'ai-data-training',
    number: '02',
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
      {
        id: 'ai-2',
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
