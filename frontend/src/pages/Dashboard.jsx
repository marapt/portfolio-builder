import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Clock, ChevronRight, Lock } from 'lucide-react';

// ── Mock approval queue (will be replaced by API from pending_approvals.json) ──
const MOCK_QUEUE = [
  {
    id: 'qa-001',
    agent: 'LocLead',
    status: 'PASS',
    message: 'Privacy Policy page detected. EU/GDPR requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
  },
  {
    id: 'qa-002',
    agent: 'LocLead',
    status: 'PASS',
    message: 'Legal Imprint page detected. EU business transparency requirement satisfied.',
    timestamp: new Date().toISOString(),
    category: 'Legal Compliance',
  },
  {
    id: 'qa-003',
    agent: 'Linguist_pt-PT',
    status: 'PASS',
    message: 'No forbidden pt-BR terms detected. Locale is pt-PT compliant.',
    timestamp: new Date().toISOString(),
    category: 'Localization QA',
  },
  {
    id: 'qa-004',
    agent: 'VisualAuditor',
    status: 'WARNING',
    message: 'Manual visual audit pending: glassmorphism contrast and mobile Hero stacking.',
    timestamp: new Date().toISOString(),
    category: 'Visual QA',
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
      </div>

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
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600/20">
              <Shield size={20} className="text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter">Governance HQ</h1>
              <p className="text-white/30 text-xs uppercase tracking-widest">Internal Operations · Pre-Approval Dashboard</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Lock size={12} className="text-white/20" />
              <span className="text-[10px] text-white/20 uppercase tracking-widest">Private · Not Indexed</span>
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
