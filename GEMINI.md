# Portfolio Builder: Engineering & Content Guardrails

## 1. Copywriting & Voice Invariants
- **No Em-Dashes (`—`):** Do NOT use long em-dashes (`—`) or excessive en-dashes (`–`) as clausal punctuation. Use natural human punctuation: commas, colons, parentheses, or simple hyphens (`-`). (Standard numeric year ranges like `2006–2026` are permitted).
- **Tone & Authenticity:** Avoid boilerplate AI phrasing. Keep technical descriptions grounded in real metric achievements and executive leadership scope.
- **UI Interaction Prompts:** Never add static keyboard shortcut hints (e.g. `[←] [→]`) unless they function globally and match exact user expectations.

## 2. Career Timeline Data Invariants (`frontend/src/data/career/en.js`)
- **Education Pillar (`education`):** Must strictly contain exactly 5 milestone items:
  `['graduation', 'rtp', 'eu-dgt', 'miis', 'postgrad-education']`. Do not add this tag to corporate roles.
- **Vendor & Finance Pillar (`vendor`):** Must strictly contain enterprise commercial/vendor management orgs:
  `['apple-2014', 'microsoft', 'linkedin', 'block', 'apple-2026']`.
- **Machine Translation, LLMs and AI Pillar (`ai`):** Tag label is canonicalized as `"Machine Translation, LLMs and AI"`.
- **Program & Delivery Pillar (`program`):** Must include Microsoft (`microsoft`) alongside other major delivery roles.
- **Leadership Pillar (`leadership`):** Must include LinkedIn (`linkedin`) and Block (`block`).
- **Future Horizon Nodes (`future-2027`, `future-2028`, `future-2029`):**
  - Anchor each node on focused forward-looking strategic themes (AI Program Leadership, Global Scale Strategy, Executive Enablement).
  - NEVER duplicate title strings inside `summary` or `highlights`. Pair each node with distinct forward-looking copy.

## 3. Token Efficiency for Audits & Subagents
- When auditing datasets, copy, links, or visual assets, NEVER launch browser or screenshot subagents.
- Always use direct code tools (`read_file`, `grep`, python scripts) and automated Jest tests (`career.test.js`) to verify changes fast with minimal token spend.

## 4. Contact Form & API Resilience
- Public contact forms must never rely exclusively on backend availability. If the backend API endpoint (`/api/contact`) is unavailable, immediately fall back to a pre-filled `mailto:marapt@gmail.com` client link.
