import datetime

MOCK_FINDINGS = [
  {
    "id": "qa-001",
    "agent": "Elena | Loc Lead",
    "status": "PASS",
    "message": "Página de Política de Privacidade detetada. Requisito UE/GDPR satisfeito.",
    "message_en": "Privacy Policy page detected. EU/GDPR requirement satisfied.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Legal Compliance",
    "explanation": "O Regulamento Geral sobre a Proteção de Dados (GDPR) da UE exige que todos os websites publiquem uma Política de Privacidade clara. O agente Elena analisou o site e confirmou a existência desta página em /privacy.",
    "interactionLog": [
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:52", "text": "Auditoria concluída. Política de Privacidade detetada em /privacy. Requisito do Artigo 13 do GDPR: satisfeito." }
    ],
  },
  {
    "id": "qa-002",
    "agent": "Elena | Loc Lead",
    "status": "PASS",
    "message": "Página de Identificação Legal (Imprint) detetada. Requisito de transparência da UE satisfeito.",
    "message_en": "Legal Imprint page detected. EU business transparency requirement satisfied.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Legal Compliance",
    "explanation": "Um 'Imprint' (Impressum) é obrigatório na Alemanha, Áustria, Suíça e Portugal para qualquer presença online profissional. O agente confirmou que a página /imprint está ativa e preenchida.",
    "interactionLog": [
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:52", "text": "Página confirmada. Contém: nome completo, localização e email de contacto. Cumpre a Diretiva de Comércio Eletrónico 2000/31/CE." }
    ],
  },
  {
    "id": "qa-003",
    "agent": "Tiago | pt-PT Linguist",
    "status": "FAIL",
    "message": "FUGA CRÍTICA: Detetadas strings em Inglês na rota de produção pt-PT.",
    "message_en": "CRITICAL LEAK: English strings detected in pt-PT production route.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Localization QA",
    "explanation": "A auditoria detetou frases em Inglês na camada de dados 'mock.js' que serve a Homepage. Tiago foi atualizado com deteção de fugas entre ficheiros e bloqueou a implementação.",
    "interactionLog": [
      { "role": "agent", "name": "Tiago | pt-PT Linguist", "time": "18:05", "text": "Alerta de Auditoria: Encontrado 'Bridging AI with language...' na vista pt-PT. Fuga de conteúdo em Inglês detetada." },
      { "role": "agent", "name": "Tiago | pt-PT Linguist", "time": "18:10", "text": "A corrigir: Criando src/data/site/pt.js e en.js para suportar locales dinâmicos." }
    ],
    "decision": "blocked",
    "resolution": "Bloqueado aguardando refatoração de mock.js e mapeamento dinâmico no Hero.jsx.",
  },
  {
    "id": "qa-004",
    "agent": "Sofia | LQC Engineer",
    "status": "PASS",
    "message": "Sincronização de chaves de tradução verificada entre en-US e pt-PT.",
    "message_en": "Translation key sync verified between en-US and pt-PT.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Linguistic Quality Check",
    "explanation": "A estrutura dos ficheiros JSON de localização deve ser idêntica para evitar erros de renderização.",
    "interactionLog": [
      { "role": "agent", "name": "Sofia | LQC Engineer", "time": "10:15", "text": "LQC Pass. Ficheiros JSON validados estruturalmente." }
    ],
  },
  {
    "id": "qa-005",
    "agent": "Marcus | Security Analyst",
    "status": "PASS",
    "message": "Mapa de cabeçalhos de segurança validado. HTTPS forçado. CSP mapeada com rigor.",
    "message_en": "Security headers map validated. HTTPS enforced. Content Security Policy strictly mapped.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Security Operations",
    "explanation": "Uma postura de segurança forte requer cabeçalhos HTTP (como HSTS, X-Frame-Options e CSP) para evitar ataques. O Analista de Segurança monitoriza estes cabeçalhos em direto.",
    "interactionLog": [
      { "role": "agent", "name": "Marcus | Security Analyst", "time": "14:40", "text": "Cabeçalhos de segurança verificados (200 OK). HSTS ativo. CSP configurada corretamente." }
    ],
  }
]
