import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Clock, Bot, Users, Zap, Globe, Brain, GitMerge } from 'lucide-react';

// ── Mock approval queue (will be replaced by API from pending_approvals.json) ──
const MOCK_QUEUE = [
  {
    id: 'qa-001',
    agent: 'LocLead',
    status: 'PASS',
    message: 'Privacy Policy page detected. EU/GDPR requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
    explanation: 'The EU General Data Protection Regulation (GDPR) requires every website targeting European visitors to publish a clear Privacy Policy. The Localization Lead agent scanned the site and confirmed this page exists at /privacy. This is a hard legal requirement — without it, the site cannot legally operate in EU markets.',
  },
  {
    id: 'qa-002',
    agent: 'LocLead',
    status: 'PASS',
    message: 'Legal Imprint page detected. EU business transparency requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
    explanation: 'An Imprint (Impressum) is mandatory in Germany, Austria, Switzerland, and Portugal for any professional online presence. It must identify the responsible person behind the site by name and contact details. This protects visitors and satisfies EU business transparency law. The agent confirmed the /imprint page is live and populated.',
  },
  {
    id: 'qa-003',
    agent: 'Linguist pt-PT',
    status: 'PASS',
    message: 'No forbidden pt-BR terms detected. Locale is pt-PT compliant.',
    timestamp: new Date().toISOString(),
    category: 'Localization QA',
    explanation: 'European Portuguese (pt-PT) and Brazilian Portuguese (pt-BR) are the same language but with significant differences in vocabulary, spelling, and formality. Terms that sound natural in Brazil can feel foreign or unprofessional to a Portuguese reader. The Linguist agent checked every string in the pt-PT locale file against a list of prohibited Brazilian terms — and found none. The content is clean for the EU/Portugal market.',
  },
  {
    id: 'qa-004',
    agent: 'VisualAuditor',
    status: 'WARNING',
    message: 'Manual visual audit pending: glassmorphism contrast and mobile Hero stacking.',
    timestamp: new Date().toISOString(),
    category: 'Visual QA',
    explanation: 'Two specific visual issues need a human eye to verify: (1) Glassmorphism contrast — the frosted-glass card style used throughout the Stellar UI can occasionally produce low text-to-background contrast ratios on certain screen brightness settings, which affects readability and WCAG accessibility compliance. (2) Mobile Hero stacking — on small screens (375px), the 4-quadrant value cards in the Hero section should stack vertically without overlapping or overflowing. The agent flags this as needing a human visual check because automated tools cannot reliably detect subtle layout issues.',
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

  return (
    <div className={`glass-card p-6 rounded-2xl border ${cfg.border} transition-all duration-300 ${decision ? 'opacity-50' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`p-2 rounded-xl ${cfg.bg} flex-shrink-0`}>
            <Icon size={18} className={cfg.color} />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{finding.agent}</span>
              <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
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
              showExplanation
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60'
            }`}
          >
            ?
          </button>
        )}
      </div>

      {/* Explanation panel */}
      {showExplanation && finding.explanation && (
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/8 space-y-1">
          <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">ⓘ What does this mean?</p>
          <p className="text-xs text-white/50 leading-relaxed">{finding.explanation}</p>
        </div>
      )}

      {!decision && (
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => onApprove(finding.id)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400/20 transition-all"
          >
            <CheckCircle size={12} /> Approve
          </button>
          <button
            onClick={() => onBlock(finding.id)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-400/20 transition-all"
          >
            <XCircle size={12} /> Block
          </button>
        </div>
      )}

      {decision && (
        <div className={`mt-4 text-center text-[10px] font-black uppercase tracking-widest ${decision === 'approved' ? 'text-emerald-400' : 'text-red-400'}`}>
          {decision === 'approved' ? '✅ Approved' : '🚫 Blocked'} — Logged to Decision Registry
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Loc Lead Expert', role: 'Localization Governance', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { name: 'Linguist en-US', role: 'American English QA', icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
                { name: 'Linguist pt-PT', role: 'European Portuguese QA', icon: Zap, color: 'text-green-400', bg: 'bg-green-400/10' },
                { name: 'LQC Engine', role: 'Structural Quality Check', icon: Shield, color: 'text-violet-400', bg: 'bg-violet-400/10' },
                { name: 'LQA Engine', role: 'Semantic & Cultural QA', icon: Brain, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
                { name: 'Tester Agent', role: '12 E2E Live Tests', icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                { name: 'Jira PM Agent', role: 'Sprint Lifecycle Sync', icon: GitMerge, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                { name: 'GTM Strategy', role: 'Worldwide Rollout Plan', icon: Globe, color: 'text-rose-400', bg: 'bg-rose-400/10' },
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
