import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, CheckCircle, XCircle, AlertTriangle, Clock, Bot, Users, Zap, Globe, Brain, GitMerge, MessageSquare, Send, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGovernance } from '../GovernanceContext';

// ── Mock data remained the same as it represents live logs ──
// But we could translate the roles in the fleet list
const Dashboard = () => {
  const { t } = useTranslation();
  const { isAuditMode, setIsAuditMode } = useGovernance();
  const [queue, setQueue] = useState([]);
  const [decisions, setDecisions] = useState({});
  const [lastAudit] = useState(new Date().toISOString());
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('gov_auth_key'));
  const [authKey, setAuthKey] = useState(sessionStorage.getItem('gov_auth_key') || '');

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        const pass = prompt(t("governance.auth_prompt") || "Operações de Governança: Insira a Chave de Acesso");
        if (!pass) {
          // Allow read-only access instead of redirecting
          console.log("Entering Read-Only mode.");
          return;
        }

        try {
          const response = await fetch('/api/governance/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: pass })
          });

          if (response.ok) {
            setIsAuthenticated(true);
            setAuthKey(pass);
            sessionStorage.setItem('gov_auth_key', pass);
          } else {
            alert(t("governance.auth_failed") || "Chave Inválida. Modo de Leitura Ativado.");
          }
        } catch (error) {
          console.error("Auth error:", error);
        }
      }
    };
    checkAuth();
  }, [isAuthenticated, t]);

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/governance/findings`)
      .then(res => res.json())
      .then(data => {
        setQueue(data);
        const storedDecisions = {};
        data.forEach(item => {
          if (item.decision) storedDecisions[item.id] = item.decision;
        });
        setDecisions(storedDecisions);
      })
      .catch(err => console.error("Failed to load governance findings", err));
  }, []);

  const handleDecisionAPI = async (id, decisionStr) => {
    setDecisions(prev => ({ ...prev, [id]: decisionStr }));
    try {
      await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/governance/decision`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ finding_id: id, decision: decisionStr })
      });
    } catch (err) {
      console.error("Failed to save decision", err);
    }
  };

  const handleApprove = (id) => handleDecisionAPI(id, 'approved');
  const handleBlock = (id) => handleDecisionAPI(id, 'blocked');

  const passCount   = queue.filter(f => f.status === 'PASS').length;
  const warnCount   = queue.filter(f => f.status === 'WARNING' || f.status === 'CAUTION').length;
  const failCount   = queue.filter(f => f.status === 'FAIL').length;
  const pendingCount = queue.filter(f => !decisions[f.id]).length;

  const mergeBlocked = queue.some(f => (f.status === 'FAIL' || f.status === 'WARNING') && !decisions[f.id]);

  const AGENT_FLEET = [
    { name: 'Elena | Loc Lead', role: t('dashboard.fleet_roles.loc_lead'), icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'David | en-US Linguist', role: t('dashboard.fleet_roles.en_linguist'), icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Tiago | pt-PT Linguist', role: t('dashboard.fleet_roles.pt_linguist'), icon: Zap, color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Sofia | LQC Engineer', role: t('dashboard.fleet_roles.lqc_eng'), icon: Shield, color: 'text-violet-400', bg: 'bg-violet-400/10' },
    { name: 'Isabella | LQA Expert', role: t('dashboard.fleet_roles.lqa_expert'), icon: Brain, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
    { name: 'Lucas | QA Tester', role: t('dashboard.fleet_roles.qa_tester'), icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'Sarah | Scrum Master', role: t('dashboard.fleet_roles.scrum_master'), icon: GitMerge, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'Julia | GTM Strategist', role: t('dashboard.fleet_roles.gtm_strat'), icon: Globe, color: 'text-rose-400', bg: 'bg-rose-400/10' },
    { name: 'Marcus | Security Analyst', role: t('dashboard.fleet_roles.sec_analyst'), icon: Shield, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
  ];

  return (
    <div className="min-h-screen stellar-bg">
      <Header />
      <div className="pt-28 pb-24 max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-violet-600/20 flex-shrink-0 animate-pulse">
              <Shield size={24} className="text-violet-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400/60">{t('dashboard.subtitle')}</span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
                  </span>
                  <span className="text-[10px] text-violet-400/60 uppercase tracking-widest">{t('dashboard.active')}</span>
                </span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter">
                {t('dashboard.title')}
              </h1>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl font-medium">
                {t('dashboard.desc')}
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* ── Philosophy Banner ── */}
            <div className="glass-card p-6 rounded-2xl border border-violet-500/10 bg-violet-600/5 grid md:grid-cols-3 gap-6 shadow-2xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain size={14} className="text-violet-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">{t('dashboard.heavy_lifting')}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-medium">
                {t('dashboard.heavy_lifting_desc')}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-cyan-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">{t('dashboard.human_control')}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-medium">
                {t('dashboard.human_control_desc')}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GitMerge size={14} className="text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">{t('dashboard.gates')}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-medium">
                {t('dashboard.gates_desc')}
              </p>
            </div>
            </div>
          </div>

          <div className="space-y-8">
            <button 
              onClick={() => setIsAuditMode(!isAuditMode)}
              className={`w-full px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all border-2 flex items-center justify-center gap-3 shrink-0 ${
                isAuditMode 
                ? 'bg-red-500/10 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
              }`}
            >
              <Shield size={14} className={isAuditMode ? 'animate-spin-slow' : ''} />
              {isAuditMode ? t('dashboard.annotation_on') : t('dashboard.activate_annotation')}
            </button>

            {/* ── Agent Fleet ── */}
            <div className="space-y-3">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
                <Bot size={11} /> {t('dashboard.fleet')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {AGENT_FLEET.map(agent => (
                  <div key={agent.name} className={`glass-card p-4 rounded-2xl ${agent.bg} border border-white/5 space-y-2 hover:translate-y-[-2px] transition-all`}>
                    <agent.icon size={14} className={agent.color} />
                    <p className={`text-[10px] font-black uppercase tracking-wider ${agent.color}`}>{agent.name}</p>
                    <p className="text-[9px] text-white/30 leading-relaxed font-black">{agent.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: t('dashboard.stats.passing'), value: passCount, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { label: t('dashboard.stats.warnings'), value: warnCount, color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { label: t('dashboard.stats.failures'), value: failCount, color: 'text-red-400', bg: 'bg-red-400/10' },
            { label: t('dashboard.stats.pending'), value: pendingCount, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          ].map(s => (
            <div key={s.label} className={`glass-card p-5 rounded-2xl ${s.bg} text-center space-y-1`}>
              <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Merge Gate Banner */}
        <div className={`glass-card p-5 rounded-2xl flex items-center gap-4 border-2 transition-all ${mergeBlocked ? 'border-red-400/20 bg-red-400/5' : 'border-emerald-400/20 bg-emerald-400/5 shadow-lg shadow-emerald-400/5'}`}>
          {mergeBlocked
            ? <XCircle size={20} className="text-red-400 flex-shrink-0" />
            : <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
          }
          <div>
            <p className={`text-sm font-black uppercase tracking-tighter ${mergeBlocked ? 'text-red-400' : 'text-emerald-400'}`}>
              {mergeBlocked ? t('dashboard.merge.blocked') : t('dashboard.merge.cleared')}
            </p>
            <p className="text-xs text-white/30 font-medium">
              {mergeBlocked
                ? t('dashboard.merge.blocked_desc')
                : t('dashboard.merge.cleared_desc')}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-[10px] text-white/20 uppercase tracking-widest font-black">{t('dashboard.last_audit')}</p>
            <p className="text-[10px] text-white/40 font-bold">{new Date(lastAudit).toLocaleString()}</p>
          </div>
        </div>

        {/* Approval Queue */}
        <div className="space-y-4">
          <h2 className="text-white/50 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <Clock size={12} /> {t('dashboard.queue')} ({pendingCount} {t('dashboard.stats.pending').toLowerCase()})
          </h2>
          {queue.map(finding => (
            <FindingCard
              key={finding.id}
              finding={finding}
              onApprove={handleApprove}
              onBlock={handleBlock}
              decision={decisions[finding.id]}
              isAuthenticated={isAuthenticated}
              authKey={authKey}
            />
          ))}
        </div>

        {/* Localized Footer Branding */}
        <div className="pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest font-black">
          <span>{t('dashboard.os_version')} · Sprint 3</span>
          <span className="flex items-center gap-2 text-violet-400/60">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {t('dashboard.gov_active')}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ── Re-using FindingCard with translation support ──
const statusConfig = {
  PASS:    { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  WARNING: { color: 'text-amber-400',   bg: 'bg-amber-400/10',   border: 'border-amber-400/20'   },
  FAIL:    { color: 'text-red-400',     bg: 'bg-red-400/10',      border: 'border-red-400/20'     },
  CAUTION: { color: 'text-orange-400',  bg: 'bg-orange-400/10',  border: 'border-orange-400/20'  },
};

const FindingCard = ({ finding, onApprove, onBlock, decision, isAuthenticated, authKey }) => {
  const { t, i18n } = useTranslation();
  const cfg = statusConfig[finding.status] || statusConfig.WARNING;
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

  const handleSend = async () => {
    if (!inputText.trim()) return;
    const currentText = inputText.trim();
    const userMsg = { role: 'user', name: 'Mara Martins', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), text: currentText };
    setChatLog(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/governance/interaction`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': authKey 
        },
        body: JSON.stringify({ finding_id: finding.id, text: currentText })
      });
      if (response.ok) {
        const agentReply = await response.json();
        setChatLog(prev => [...prev, agentReply]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`glass-card rounded-2xl border transition-all duration-300 ${cfg.border} ${decision ? 'opacity-30 grayscale' : ''}`}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className={`p-2 rounded-xl ${cfg.bg} flex-shrink-0`}>
              <Bot size={18} className={cfg.color} />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{finding.agent}</span>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{finding.status}</span>
                <span className="text-[9px] text-white/20 ml-auto font-black">{finding.category}</span>
              </div>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                {i18n.language.startsWith('pt') 
                  ? (finding.message_pt || finding.message) 
                  : (finding.message_en || finding.message)}
              </p>
            </div>
          </div>
          <button onClick={() => setShowExplanation(!showExplanation)} className="text-[11px] font-black text-white/20 hover:text-white/60">?</button>
        </div>
        {!decision && isAuthenticated && (
          <div className="mt-4 flex gap-2">
            <button onClick={() => onApprove(finding.id)} className="flex-1 py-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">{t('dashboard.buttons.approve')}</button>
            <button onClick={() => onBlock(finding.id)} className="flex-1 py-2 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-[10px] font-black uppercase tracking-widest">{t('dashboard.buttons.block')}</button>
            <button onClick={() => setShowChat(!showChat)} className="flex-1 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest">{t('dashboard.buttons.consult')}</button>
          </div>
        )}
        {!decision && !isAuthenticated && (
          <div className="mt-4">
             <button onClick={() => setShowChat(!showChat)} className="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-white/30 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                {showChat ? 'Hide History' : 'View Interaction History (Read Only)'}
             </button>
          </div>
        )}
      </div>
      {showChat && (
        <div className="border-t border-white/5 p-6 space-y-4">
          <div className="max-h-60 overflow-y-auto space-y-4 pr-2">
            {chatLog.map((msg, i) => (
              <div key={i} className={`text-[11px] leading-relaxed ${msg.role === 'agent' ? 'text-white/60' : 'text-cyan-400/80 font-bold'}`}>
                <span className="uppercase tracking-tighter opacity-30 mr-2">{msg.name}:</span> {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          {isAuthenticated ? (
            <div className="flex gap-2">
              <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white" placeholder="Respond..." />
              <button onClick={handleSend} className="p-2 bg-cyan-400/20 rounded-lg"><Send size={14} className="text-cyan-400" /></button>
            </div>
          ) : (
            <div className="py-2 text-[10px] font-black uppercase tracking-widest text-white/20 text-center border border-white/5 rounded-lg bg-white/2">
               🔒 Read-Only Mode · Auth Required to Consult
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
