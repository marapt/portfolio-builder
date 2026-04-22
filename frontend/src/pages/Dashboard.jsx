import React, { useState, useRef, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Clock, Bot, Users, Zap, Globe, Brain, GitMerge, MessageSquare, Send, ChevronDown, ChevronUp } from 'lucide-react';

// ── Mock approval queue ──
const MOCK_QUEUE = [
  {
    id: 'qa-001',
    agent: 'Elena | Loc Lead',
    status: 'PASS',
    message: 'Privacy Policy page detected. EU/GDPR requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
    explanation: 'The EU General Data Protection Regulation (GDPR) requires every website targeting European visitors to publish a clear Privacy Policy. The Localization Lead agent scanned the site and confirmed this page exists at /privacy. This is a hard legal requirement — without it, the site cannot legally operate in EU markets.',
    interactionLog: [
      { role: 'agent', name: 'Elena | Loc Lead', time: '13:52', text: 'Scan complete. Privacy Policy detected at /privacy. Page is reachable, content is non-empty, and the route is registered in App.js. GDPR Article 13 requirement: satisfied.' },
      { role: 'user', name: 'Mara Martins', time: '13:54', text: 'Does the policy cover cookie consent and right to erasure explicitly?' },
      { role: 'agent', name: 'Elena | Loc Lead', time: '13:54', text: 'Partial coverage detected. Cookie consent language is present but a cookie banner implementation is not yet active on the site. Right to erasure is mentioned but no contact form specifically for erasure requests exists. Action items: (1) Implement cookie consent banner — PJM-69. (2) Add erasure request link to Privacy Policy footer. These are Sprint 5 items and do not block Phase 1 en-US launch.' },
      { role: 'user', name: 'Mara Martins', time: '13:56', text: 'Understood. Log these as Sprint 5 items and approve the current policy for Phase 1.' },
      { role: 'agent', name: 'Elena | Loc Lead', time: '13:56', text: 'Logged. PJM-69 updated with cookie consent subtask. Current Privacy Policy is approved for Phase 1 en-US launch. Status: PASS — Phase 2 EU gate will require the full cookie banner implementation.' },
    ],
  },
  {
    id: 'qa-002',
    agent: 'Elena | Loc Lead',
    status: 'PASS',
    message: 'Legal Imprint page detected. EU business transparency requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
    explanation: 'An Imprint (Impressum) is mandatory in Germany, Austria, Switzerland, and Portugal for any professional online presence. It must identify the responsible person behind the site by name and contact details. This protects visitors and satisfies EU business transparency law. The agent confirmed the /imprint page is live and populated.',
    interactionLog: [
      { role: 'agent', name: 'Elena | Loc Lead', time: '13:52', text: 'Imprint page confirmed at /imprint. Contains: full name, location (Mountain View, CA), and contact email. Satisfies Portugal and EU business transparency requirements under e-Commerce Directive 2000/31/EC.' },
      { role: 'user', name: 'Mara Martins', time: '13:55', text: 'Do we need to add a phone number or registered company address?' },
      { role: 'agent', name: 'Elena | Loc Lead', time: '13:55', text: 'For a personal professional portfolio with no registered legal entity, a full name, country, and contact email is sufficient under current EU personal site guidelines. A registered business address would only be required if this site were operating as a commercial service or trading entity. Current configuration: compliant. No action required for Phase 1.' },
    ],
  },
  {
    id: 'qa-003',
    agent: 'Tiago | pt-PT Linguist',
    status: 'PASS',
    message: 'No forbidden pt-BR terms detected. Locale is pt-PT compliant.',
    timestamp: new Date().toISOString(),
    category: 'Localization QA',
    explanation: 'European Portuguese (pt-PT) and Brazilian Portuguese (pt-BR) are the same language but with significant differences in vocabulary, spelling, and formality. Terms that sound natural in Brazil can feel foreign or unprofessional to a Portuguese reader. The Linguist agent checked every string in the pt-PT locale file against a list of prohibited Brazilian terms — and found none. The content is clean for the EU/Portugal market.',
    interactionLog: [
      { role: 'agent', name: 'Tiago | pt-PT Linguist', time: '13:53', text: 'Audit complete. Scanned 56 strings across all keys in pt-PT.json. Zero prohibited pt-BR terms detected. Formal register maintained throughout. Terminology audit: Contacto ✓, Equipa ✓, Formação ✓, Serviços ✓.' },
      { role: 'user', name: 'Mara Martins', time: '13:57', text: 'The LQA engine flagged the word "legal" as a possible Brazilian slang term. Can you investigate?' },
      { role: 'agent', name: 'Tiago | pt-PT Linguist', time: '13:57', text: 'Confirmed. "Legal" appearing in the pt-PT strings is inherited from the footer Legal column label. In European Portuguese, "legal" as a navigation label is acceptable in a legal/compliance context — it reads as the adjective "lawful" or "pertaining to law", not the Brazilian slang meaning "cool". However, to eliminate ambiguity for a professional EU audience, I recommend replacing it with "Conformidade" or "Informações Legais". Action item: PJM-68.' },
      { role: 'user', name: 'Mara Martins', time: '13:59', text: 'Good catch. Log PJM-68 and implement the fix before Phase 2 opens.' },
      { role: 'agent', name: 'Tiago | pt-PT Linguist', time: '13:59', text: 'Logged. PJM-68: Replace "legal" footer label with "Informações Legais" in pt-PT.json. Sprint 5 item. Phase 1 en-US unaffected. Current status remains PASS for Phase 1 gate.' },
    ],
  },
  {
    id: 'qa-004',
    agent: 'Alex | Visual Auditor',
    status: 'WARNING',
    message: 'Manual visual audit pending: glassmorphism contrast and mobile Hero stacking.',
    timestamp: new Date().toISOString(),
    category: 'Visual QA',
    explanation: 'Two specific visual issues need a human eye to verify: (1) Glassmorphism contrast — the frosted-glass card style used throughout the Stellar UI can occasionally produce low text-to-background contrast ratios on certain screen brightness settings, which affects readability and WCAG accessibility compliance. (2) Mobile Hero stacking — on small screens (375px), the 4-quadrant value cards in the Hero section should stack vertically without overlapping or overflowing. The agent flags this as needing a human visual check because automated tools cannot reliably detect subtle layout issues.',
    interactionLog: [
      { role: 'agent', name: 'Alex | Visual Auditor', time: '13:53', text: 'Automated checks complete. Two items require manual human verification before I can issue a PASS: (1) Glassmorphism contrast ratios on the Hero cards at medium brightness. Lighthouse reports 4.1:1 contrast — WCAG AA requires 4.5:1 minimum. Borderline. (2) Hero section at 375px viewport: the InsightCard grid may overflow on very small handsets. Automated snapshot inconclusive.' },
      { role: 'user', name: 'Mara Martins', time: '14:00', text: 'I reviewed both on my iPhone SE and a standard monitor. The contrast is readable and the Hero stacks correctly. The 4.1:1 is close but acceptable for dark-mode glassmorphic UI at this brightness. I am approving the visual check.' },
      { role: 'agent', name: 'Alex | Visual Auditor', time: '14:00', text: 'Human override logged. Mara Martins confirmed visual QA manually at 14:00 UTC. Recommendation: revisit contrast ratios in Sprint 4 with a dedicated accessibility pass (WCAG 2.1 AA full compliance). Adding to Sprint 4 backlog. Current finding status updated: conditionally approved pending Sprint 4 accessibility audit.' },
    ],
    resolution: 'Conditionally approved by Mara Martins — Sprint 4 accessibility audit scheduled.',
  },
  {
    id: 'qa-005',
    agent: 'Marcus | Security Analyst',
    status: 'PASS',
    message: 'Security headers map validated. HTTPS enforced. Content Security Policy strictly mapped.',
    timestamp: new Date().toISOString(),
    category: 'Security Operations',
    explanation: 'A strong security posture requires HTTP security headers (like HSTS, X-Frame-Options, and CSP) to prevent cross-site scripting (XSS), clickjacking, and man-in-the-middle attacks. The Security Analyst continuously monitors these headers on the live Vercel edge endpoints.',
    interactionLog: [
      { role: 'agent', name: 'Marcus | Security Analyst', time: '14:40', text: 'Security headers verified returning 200 OK across edge networks. Strict-Transport-Security (HSTS) is active enforcing HTTPS. X-Content-Type-Options: nosniff is set properly.' },
      { role: 'user', name: 'Mara Martins', time: '14:41', text: 'Excellent. Have we audited the new Render backend endpoints from the recent cutover?' },
      { role: 'agent', name: 'Marcus | Security Analyst', time: '14:42', text: 'Yes. The Render /contact backend endpoint correctly negotiates TLS 1.3. CORS is tightly scoped to maramartins.com origins. All external API keys (Jira, SendGrid) are confirmed hidden from client-side bundles and resolved natively server-side. No credential leaks detected. Security posture is GREEN.' }
    ],
  },
];

const statusConfig = {
  PASS:    { icon: CheckCircle,    color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', label: 'Pass' },
  WARNING: { icon: AlertTriangle,  color: 'text-amber-400',   bg: 'bg-amber-400/10',   border: 'border-amber-400/20',   label: 'Warning' },
  FAIL:    { icon: XCircle,        color: 'text-red-400',     bg: 'bg-red-400/10',      border: 'border-red-400/20',     label: 'Fail' },
  CAUTION: { icon: AlertTriangle,  color: 'text-orange-400',  bg: 'bg-orange-400/10',  border: 'border-orange-400/20',  label: 'Caution' },
};

const FindingCard = ({ finding, onApprove, onBlock, decision }) => {
  const cfg = statusConfig[finding.status] || statusConfig.WARNING;
  const Icon = cfg.icon;
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [showChat, setShowChat] = React.useState(false);
  const [chatLog, setChatLog] = React.useState(finding.interactionLog || []);
  const [inputText, setInputText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLog, showChat]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = { role: 'user', name: 'Mara Martins', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), text: inputText.trim() };
    setChatLog(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
      const agentReply = {
        role: 'agent', name: finding.agent,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Input received and logged. I will analyse your query: "${userMsg.text}" — and update this finding accordingly. If this requires a code change or Jira ticket, I will surface it as a new action item in the next audit cycle.`,
      };
      setChatLog(prev => [...prev, agentReply]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={`glass-card rounded-2xl border transition-all duration-300 ${cfg.border} ${decision ? 'opacity-60' : ''}`}>

      {/* ── Card header ── */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className={`p-2 rounded-xl ${cfg.bg} flex-shrink-0`}>
              <Icon size={18} className={cfg.color} />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{finding.agent}</span>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                {finding.interactionLog?.length > 0 && (
                  <span className="text-[9px] text-cyan-400/60 bg-cyan-400/10 px-2 py-0.5 rounded-full font-black uppercase tracking-widest flex items-center gap-1">
                    <MessageSquare size={8} /> {finding.interactionLog.length} messages
                  </span>
                )}
                <span className="text-[9px] text-white/20 ml-auto">{finding.category}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{finding.message}</p>
              <p className="text-[10px] text-white/20">{new Date(finding.timestamp).toLocaleString()}</p>
            </div>
          </div>
          {/* Info toggle */}
          {finding.explanation && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              title="What does this mean?"
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 text-[11px] font-black ${
                showExplanation ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60'
              }`}
            >?</button>
          )}
        </div>

        {/* Explanation panel */}
        {showExplanation && finding.explanation && (
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/8">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">ⓘ What does this mean?</p>
            <p className="text-xs text-white/50 leading-relaxed">{finding.explanation}</p>
          </div>
        )}

        {/* Resolution badge */}
        {finding.resolution && (
          <div className="mt-3 p-3 rounded-xl bg-cyan-400/5 border border-cyan-400/15">
            <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400/60 mb-1">Resolution</p>
            <p className="text-xs text-cyan-400/80">{finding.resolution}</p>
          </div>
        )}

        {/* Action buttons */}
        {!decision && (
          <div className="mt-4 flex gap-2">
            <button onClick={() => onApprove(finding.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400/20 transition-all">
              <CheckCircle size={11} /> Approve
            </button>
            <button onClick={() => onBlock(finding.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-400/20 transition-all">
              <XCircle size={11} /> Block
            </button>
            <button onClick={() => setShowChat(!showChat)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                showChat ? 'bg-cyan-400/20 border-cyan-400/30 text-cyan-400' : 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/20'
              }`}>
              <MessageSquare size={11} /> {showChat ? 'Close Chat' : 'Consult Agent'}
            </button>
          </div>
        )}
        {decision && (
          <div className={`mt-4 text-center text-[10px] font-black uppercase tracking-widest ${decision === 'approved' ? 'text-emerald-400' : 'text-red-400'}`}>
            {decision === 'approved' ? '✅ Approved' : '🚫 Blocked'} — Logged to Decision Registry
          </div>
        )}
      </div>

      {/* ── Interaction Log Panel ── */}
      {showChat && (
        <div className="border-t border-white/8">
          {/* Log header */}
          <div className="px-6 py-3 flex items-center justify-between bg-cyan-400/5">
            <div className="flex items-center gap-2">
              <MessageSquare size={11} className="text-cyan-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">Agent Interaction Log — {finding.agent}</span>
            </div>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">{chatLog.length} messages · Visible to all visitors</span>
          </div>

          {/* Messages */}
          <div className="px-6 py-4 space-y-4 max-h-80 overflow-y-auto">
            {chatLog.length === 0 && (
              <p className="text-xs text-white/20 text-center py-4">No interaction yet. Send a query below to consult this agent.</p>
            )}
            {chatLog.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black ${
                  msg.role === 'agent' ? 'bg-violet-600/30 text-violet-400' : 'bg-indigo-600/30 text-indigo-400'
                }`}>
                  {msg.role === 'agent' ? <Bot size={13} /> : 'M'}
                </div>
                <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/30">{msg.name}</span>
                    <span className="text-[9px] text-white/15">{msg.time}</span>
                  </div>
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'agent'
                      ? 'bg-white/5 border border-white/8 text-white/60 rounded-tl-sm'
                      : 'bg-indigo-600/20 border border-indigo-500/20 text-indigo-200 rounded-tr-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-violet-600/30 flex items-center justify-center flex-shrink-0">
                  <Bot size={13} className="text-violet-400" />
                </div>
                <div className="flex gap-1 py-3 px-4 bg-white/5 rounded-2xl rounded-tl-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="px-6 pb-4 flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={`Query ${finding.agent}...`}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white/70 placeholder-white/20 outline-none focus:border-cyan-400/30 focus:bg-white/8 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 transition-all disabled:opacity-30"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [queue, setQueue] = useState(MOCK_QUEUE);
  const [decisions, setDecisions] = useState({});
  const [lastAudit] = useState(new Date().toISOString());

  const handleApprove = (id) => {
    setDecisions(prev => ({ ...prev, [id]: 'approved' }));
  };

  const handleBlock = (id) => {
    setDecisions(prev => ({ ...prev, [id]: 'blocked' }));
  };

  const passCount   = queue.filter(f => f.status === 'PASS').length;
  const warnCount   = queue.filter(f => f.status === 'WARNING' || f.status === 'CAUTION').length;
  const failCount   = queue.filter(f => f.status === 'FAIL').length;
  const pendingCount = queue.filter(f => !decisions[f.id]).length;

  const mergeBlocked = queue.some(f => (f.status === 'FAIL' || f.status === 'WARNING') && !decisions[f.id]);

  return (
    <div className="min-h-screen stellar-bg pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">

        {/* ── Public Showcase Header ── */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-violet-600/20 flex-shrink-0">
              <Shield size={24} className="text-violet-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400/60">Live Operations</span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
                  </span>
                  <span className="text-[10px] text-violet-400/60 uppercase tracking-widest">Active</span>
                </span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter">AI Agents Governance HQ</h1>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                This is a live operations centre where I manage a fleet of specialised AI agents that run quality audits,
                legal compliance checks, localisation reviews, and deployment verifications for this portfolio — 
                in real time. Every agent finding surfaces here for my review and explicit approval before any change ships to production.
              </p>
            </div>
          </div>

          {/* ── Philosophy Banner ── */}
          <div className="glass-card p-6 rounded-2xl border border-violet-500/10 bg-violet-600/5 grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain size={14} className="text-violet-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">AI Does the Heavy Lifting</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Autonomous agents run continuous audits — linguistic quality, legal compliance, visual integrity, and E2E testing — with zero manual triggering.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-cyan-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Human Stays in Control</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                No agent decision reaches production without my explicit approval. Every finding below is reviewed, approved or blocked — by me.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GitMerge size={14} className="text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Governance Gates Every Deploy</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                The merge gate below represents the current deployment health. Green means the full agent suite has signed off and the site is clear to ship.
              </p>
            </div>
          </div>

          {/* ── Agent Fleet ── */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
              <Bot size={11} /> Active Agent Fleet
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: 'Elena | Loc Lead', role: 'Localization Governance', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { name: 'David | en-US Linguist', role: 'American English QA', icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
                { name: 'Tiago | pt-PT Linguist', role: 'European Portuguese QA', icon: Zap, color: 'text-green-400', bg: 'bg-green-400/10' },
                { name: 'Sofia | LQC Engineer', role: 'Structural Quality Check', icon: Shield, color: 'text-violet-400', bg: 'bg-violet-400/10' },
                { name: 'Isabella | LQA Expert', role: 'Semantic & Cultural QA', icon: Brain, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
                { name: 'Lucas | QA Tester', role: '12 E2E Live Tests', icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                { name: 'Sarah | Scrum Master', role: 'Sprint Lifecycle Sync', icon: GitMerge, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                { name: 'Julia | GTM Strategist', role: 'Worldwide Rollout Plan', icon: Globe, color: 'text-rose-400', bg: 'bg-rose-400/10' },
                { name: 'Marcus | Security Analyst', role: 'SecOps & Compliance', icon: Shield, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
              ].map(agent => (
                <div key={agent.name} className={`glass-card p-4 rounded-2xl ${agent.bg} border border-white/5 space-y-2`}>
                  <agent.icon size={14} className={agent.color} />
                  <p className={`text-[10px] font-black uppercase tracking-wider ${agent.color}`}>{agent.name}</p>
                  <p className="text-[9px] text-white/30 leading-relaxed">{agent.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Passing', value: passCount, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { label: 'Warnings', value: warnCount, color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { label: 'Failures', value: failCount, color: 'text-red-400', bg: 'bg-red-400/10' },
            { label: 'Pending Review', value: pendingCount, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          ].map(s => (
            <div key={s.label} className={`glass-card p-5 rounded-2xl ${s.bg} text-center space-y-1`}>
              <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Merge Gate Banner */}
        <div className={`glass-card p-5 rounded-2xl flex items-center gap-4 ${mergeBlocked ? 'border border-red-400/20 bg-red-400/5' : 'border border-emerald-400/20 bg-emerald-400/5'}`}>
          {mergeBlocked
            ? <XCircle size={20} className="text-red-400 flex-shrink-0" />
            : <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
          }
          <div>
            <p className={`text-sm font-bold ${mergeBlocked ? 'text-red-400' : 'text-emerald-400'}`}>
              {mergeBlocked ? 'Merge to Main: BLOCKED' : 'Merge to Main: CLEARED'}
            </p>
            <p className="text-xs text-white/30">
              {mergeBlocked
                ? 'Review and resolve all open findings before proceeding.'
                : 'All findings reviewed. Safe to proceed with deployment.'}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">Last Audit</p>
            <p className="text-[10px] text-white/40">{new Date(lastAudit).toLocaleString()}</p>
          </div>
        </div>

        {/* Approval Queue */}
        <div className="space-y-4">
          <h2 className="text-white/50 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <Clock size={12} /> Approval Queue ({pendingCount} pending)
          </h2>
          {queue.map(finding => (
            <FindingCard
              key={finding.id}
              finding={finding}
              onApprove={handleApprove}
              onBlock={handleBlock}
              decision={decisions[finding.id]}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest">
          <span>Mara Martins Operating System · Sprint 3</span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Governance Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
