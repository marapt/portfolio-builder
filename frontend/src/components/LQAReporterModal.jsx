import React, { useState } from 'react';
import { Shield, Send, X, AlertCircle } from 'lucide-react';

const LQAReporterModal = ({ isOpen, onClose, targetData, onReported }) => {
  const [fix, setFix] = useState('');
  const [agent, setAgent] = useState('Tiago | pt-PT Linguist');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successKey, setSuccessKey] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://portfolio-backend-dot7.onrender.com'}/api/governance/report`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': sessionStorage.getItem('gov_auth_key') || ''
        },
        body: JSON.stringify({
          originalText: targetData.text,
          selector: targetData.selector,
          suggestedFix: fix,
          agent: agent,
          url: window.location.href,
          locale: localStorage.getItem('i18nextLng') || 'pt-PT'
        })
      });
      
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setSuccessKey(data.jira_key);
        onReported(data.jira_key);
        setTimeout(() => {
          setSuccessKey(null);
          setFix('');
          onClose();
        }, 2500);
      } else {
        alert("Erro ao reportar: " + (data.message || "Verifique a sua chave de acesso."));
      }
    } catch (error) {
      console.error('LQA Submission failed:', error);
      alert("Erro de conexão com o servidor de Governança.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="glass-card w-full max-w-lg p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors">
          <X size={20} className="text-white/40" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
              <AlertCircle size={24} className="text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Reportar Erro de Ativo</h2>
              <p className="text-xs text-white/40 uppercase tracking-widest font-black">Modo LQA Ativo</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Texto Original Detectado</label>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-sm text-white/60 font-mono italic">
                "{targetData.text}"
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Correção Sugerida (pt-PT)</label>
              <textarea 
                value={fix}
                onChange={(e) => setFix(e.target.value)}
                placeholder="Insira a tradução correta ou ajuste de conteúdo..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400/50 transition-all min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Atribuir a Especialista</label>
              <select 
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white appearance-none"
              >
                <option value="Tiago | pt-PT Linguist">Tiago | Linguagem e Cultura</option>
                <option value="Elena | Loc Lead">Elena | Conformidade e Estratégia</option>
                <option value="Marcus | Security Analyst">Marcus | Segurança e Integridade</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isSubmitting || !fix}
            className="w-full py-4 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30 rounded-2xl flex items-center justify-center gap-2 text-cyan-400 font-bold transition-all disabled:opacity-30 disabled:grayscale"
          >
            {isSubmitting ? 'A Sincronizar com Jira...' : (
              <>
                <Send size={18} />
                Submeter para Auditoria de Agente
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LQAReporterModal;
