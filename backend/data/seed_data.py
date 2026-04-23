import datetime

MOCK_FINDINGS = [
  {
    "id": "qa-001",
    "agent": "Elena | Loc Lead",
    "status": "PASS",
    "message": "Privacy Policy page detected. EU/GDPR requirement satisfied.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Legal Compliance",
    "explanation": "The EU General Data Protection Regulation (GDPR) requires every website targeting European visitors to publish a clear Privacy Policy. The Localization Lead agent scanned the site and confirmed this page exists at /privacy. This is a hard legal requirement — without it, the site cannot legally operate in EU markets.",
    "interactionLog": [
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:52", "text": "Scan complete. Privacy Policy detected at /privacy. Page is reachable, content is non-empty, and the route is registered in App.js. GDPR Article 13 requirement: satisfied." },
      { "role": "user", "name": "Mara Martins", "time": "13:54", "text": "Does the policy cover cookie consent and right to erasure explicitly?" },
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:54", "text": "Partial coverage detected. Cookie consent language is present but a cookie banner implementation is not yet active on the site. Right to erasure is mentioned but no contact form specifically for erasure requests exists. Action items: (1) Implement cookie consent banner — PJM-69. (2) Add erasure request link to Privacy Policy footer. These are Sprint 5 items and do not block Phase 1 en-US launch." },
      { "role": "user", "name": "Mara Martins", "time": "13:56", "text": "Understood. Log these as Sprint 5 items and approve the current policy for Phase 1." },
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:56", "text": "Logged. PJM-69 updated with cookie consent subtask. Current Privacy Policy is approved for Phase 1 en-US launch. Status: PASS — Phase 2 EU gate will require the full cookie banner implementation." }
    ],
  },
  {
    "id": "qa-002",
    "agent": "Elena | Loc Lead",
    "status": "PASS",
    "message": "Legal Imprint page detected. EU business transparency requirement satisfied.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Legal Compliance",
    "explanation": "An Imprint (Impressum) is mandatory in Germany, Austria, Switzerland, and Portugal for any professional online presence. It must identify the responsible person behind the site by name and contact details. This protects visitors and satisfies EU business transparency law. The agent confirmed the /imprint page is live and populated.",
    "interactionLog": [
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:52", "text": "Imprint page confirmed at /imprint. Contains: full name, location (Mountain View, CA), and contact email. Satisfies Portugal and EU business transparency requirements under e-Commerce Directive 2000/31/EC." },
      { "role": "user", "name": "Mara Martins", "time": "13:55", "text": "Do we need to add a phone number or registered company address?" },
      { "role": "agent", "name": "Elena | Loc Lead", "time": "13:55", "text": "For a personal professional portfolio with no registered legal entity, a full name, country, and contact email is sufficient under current EU personal site guidelines. A registered business address would only be required if this site were operating as a commercial service or trading entity. Current configuration: compliant. No action required for Phase 1." }
    ],
  },
  {
    "id": "qa-003",
    "agent": "Tiago | pt-PT Linguist",
    "status": "PASS",
    "message": "No forbidden pt-BR terms detected. Locale is pt-PT compliant.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Localization QA",
    "explanation": "European Portuguese (pt-PT) and Brazilian Portuguese (pt-BR) are the same language but with significant differences in vocabulary, spelling, and formality. Terms that sound natural in Brazil can feel foreign or unprofessional to a Portuguese reader. The Linguist agent checked every string in the pt-PT locale file against a list of prohibited Brazilian terms — and found none. The content is clean for the EU/Portugal market.",
    "interactionLog": [
      { "role": "agent", "name": "Tiago | pt-PT Linguist", "time": "13:53", "text": "Audit complete. Scanned 56 strings across all keys in pt-PT.json. Zero prohibited pt-BR terms detected. Formal register maintained throughout. Terminology audit: Contacto ✓, Equipa ✓, Formação ✓, Serviços ✓." },
      { "role": "user", "name": "Mara Martins", "time": "13:57", "text": "The LQA engine flagged the word \"legal\" as a possible Brazilian slang term. Can you investigate?" },
      { "role": "agent", "name": "Tiago | pt-PT Linguist", "time": "13:57", "text": "Confirmed. \"Legal\" appearing in the pt-PT strings is inherited from the footer Legal column label. In European Portuguese, \"legal\" as a navigation label is acceptable in a legal/compliance context — it reads as the adjective \"lawful\" or \"pertaining to law\", not the Brazilian slang meaning \"cool\". However, to eliminate ambiguity for a professional EU audience, I recommend replacing it with \"Conformidade\" or \"Informações Legais\". Action item: PJM-68." },
      { "role": "user", "name": "Mara Martins", "time": "13:59", "text": "Good catch. Log PJM-68 and implement the fix before Phase 2 opens." },
      { "role": "agent", "name": "Tiago | pt-PT Linguist", "time": "13:59", "text": "Logged. PJM-68: Replace \"legal\" footer label with \"Informações Legais\" in pt-PT.json. Sprint 5 item. Phase 1 en-US unaffected. Current status remains PASS for Phase 1 gate." }
    ],
  },
  {
    "id": "qa-004",
    "agent": "Alex | Visual Auditor",
    "status": "WARNING",
    "message": "Manual visual audit pending: glassmorphism contrast and mobile Hero stacking.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Visual QA",
    "explanation": "Two specific visual issues need a human eye to verify: (1) Glassmorphism contrast — the frosted-glass card style used throughout the Stellar UI can occasionally produce low text-to-background contrast ratios on certain screen brightness settings, which affects readability and WCAG accessibility compliance. (2) Mobile Hero stacking — on small screens (375px), the 4-quadrant value cards in the Hero section should stack vertically without overlapping or overflowing. The agent flags this as needing a human visual check because automated tools cannot reliably detect subtle layout issues.",
    "interactionLog": [
      { "role": "agent", "name": "Alex | Visual Auditor", "time": "13:53", "text": "Automated checks complete. Two items require manual human verification before I can issue a PASS: (1) Glassmorphism contrast ratios on the Hero cards at medium brightness. Lighthouse reports 4.1:1 contrast — WCAG AA requires 4.5:1 minimum. Borderline. (2) Hero section at 375px viewport: the InsightCard grid may overflow on very small handsets. Automated snapshot inconclusive." },
      { "role": "user", "name": "Mara Martins", "time": "14:00", "text": "I reviewed both on my iPhone SE and a standard monitor. The contrast is readable and the Hero stacks correctly. The 4.1:1 is close but acceptable for dark-mode glassmorphic UI at this brightness. I am approving the visual check." },
      { "role": "agent", "name": "Alex | Visual Auditor", "time": "14:00", "text": "Human override logged. Mara Martins confirmed visual QA manually at 14:00 UTC. Recommendation: revisit contrast ratios in Sprint 4 with a dedicated accessibility pass (WCAG 2.1 AA full compliance). Adding to Sprint 4 backlog. Current finding status updated: conditionally approved pending Sprint 4 accessibility audit." }
    ],
    "decision": "approved",
    "resolution": "Conditionally approved by Mara Martins — Sprint 4 accessibility audit scheduled.",
  },
  {
    "id": "qa-005",
    "agent": "Marcus | Security Analyst",
    "status": "PASS",
    "message": "Security headers map validated. HTTPS enforced. Content Security Policy strictly mapped.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Security Operations",
    "explanation": "A strong security posture requires HTTP security headers (like HSTS, X-Frame-Options, and CSP) to prevent cross-site scripting (XSS), clickjacking, and man-in-the-middle attacks. The Security Analyst continuously monitors these headers on the live Vercel edge endpoints.",
    "interactionLog": [
      { "role": "agent", "name": "Marcus | Security Analyst", "time": "14:40", "text": "Security headers verified returning 200 OK across edge networks. Strict-Transport-Security (HSTS) is active enforcing HTTPS. X-Content-Type-Options: nosniff is set properly." },
      { "role": "user", "name": "Mara Martins", "time": "14:41", "text": "Excellent. Have we audited the new Render backend endpoints from the recent cutover?" },
      { "role": "agent", "name": "Marcus | Security Analyst", "time": "14:42", "text": "Yes. The Render /contact backend endpoint correctly negotiates TLS 1.3. CORS is tightly scoped to maramartins.com origins. All external API keys (Jira, SendGrid) are confirmed hidden from client-side bundles and resolved natively server-side. No credential leaks detected. Security posture is GREEN." }
    ],
  },
  {
    "id": "sec-777",
    "agent": "Marcus | Security Analyst",
    "status": "FAIL",
    "message": "CRITICAL: Mandatory regulatory portal (livrodereclamacoes.pt) detected as compromised.",
    "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "category": "Security Operations",
    "explanation": "Security audit detected a defacement of the external government portal. To prevent visitor redirection to a malicious domain, Marcus has automatically isolated the link components in Privacy.jsx and Imprint.jsx until the government endpoint restores integrity.",
    "interactionLog": [
      { "role": "agent", "name": "Marcus | Security Analyst", "time": "17:58", "text": "Immediate action required. livrodereclamacoes.pt has been hacked and defaced. I have temporarily redirected our local links to a maintenance notice." },
      { "role": "user", "name": "Mara Martins", "time": "17:59", "text": "Should this be reported to PT authorities?" },
      { "role": "agent", "name": "Marcus | Security Analyst", "time": "18:00", "text": "Confirmed. I recommend filing a report with CNCS (cert.pt@cncs.gov.pt) and the Políca Judiciária (unc3t@pj.pt) сразу. Our integration is secured." }
    ],
  }
]
