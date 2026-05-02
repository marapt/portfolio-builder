import React, { useState, useEffect, useRef } from 'react';
import { Shield, Send, X, AlertCircle, Camera, MessageSquare, Bot } from 'lucide-react';
import html2canvas from 'html2canvas';

const LQAReporterModal = ({ isOpen, onClose, targetData, onReported }) => {
  const [fix, setFix] = useState('');
  const [agent, setAgent] = useState('Tiago | pt-PT Linguist');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successKey, setSuccessKey] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [chatLog, setChatLog] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && targetData) {
      setScreenshot(null); // Clear old evidence
      setFix(''); // Clear old suggestion
      setSuccessKey(null); // Clear old success state
      captureScreenshot();
      setChatLog([{
        role: 'agent',
        name: agent.split(' | ')[0],
        text: `Olá Mara! Detectei a área: "${targetData.text.substring(0, 40)}...". Como posso ajudar?`
      }]);
    }
  }, [isOpen, targetData]);

  const captureScreenshot = async () => {
    try {
      const element = document.body;
      const options = {
        backgroundColor: null,
        scale: 2,
        useCORS: true
      };

      if (targetData.rect) {
        options.x = targetData.rect.x + window.scrollX;
        options.y = targetData.rect.y + window.scrollY;
        options.width = targetData.rect.w;
        options.height = targetData.rect.h;
      }

      const canvas = await html2canvas(element, options);
      setScreenshot(canvas.toDataURL('image/png'));
    } catch (err) {
      console.error("Screenshot failed:", err);
    }
  };

  const handleConsult = async () => {
    if (!inputText.trim()) return;
    const userMsg = { role: 'user', name: 'Mara', text: inputText };
    setChatLog(prev => [...prev, userMsg]);
    setInputText('');
    setIsConsulting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://portfolio-backend.onrender.com'}/api/governance/interaction`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            finding_id: 'lqa_live_audit', 
            text: `[LQA AUDIT CONTEXT: ${targetData.text}] User says: ${inputText}` 
        })
      });
      const data = await response.json();
      setChatLog(prev => [...prev, { role: 'agent', name: agent.split(' | ')[0], text: data.agent_response }]);
    } catch (err) {
      console.error("Consultation failed:", err);
    } finally {
      setIsConsulting(false);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://portfolio-backend.onrender.com'}/api/governance/report`, {
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
          screenshot: screenshot,
          chatHistory: chatLog,
          locale: localStorage.getItem('i18nextLng') || 'pt-PT'
        })
      });
      
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setSuccessKey(data.jira_key);
        onReported(data.jira_key);
        setTimeout(() => {
          setSuccessKey(data.jira_key);
          onReported(data.jira_key);
        }, 500);
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

  const handleFinish = () => {
    setSuccessKey(null);
    setFix('');
    setChatLog([]);
    onClose();
  };

  return (
    <div id="lqa-modal" className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      <div className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/2">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
               <Shield size={24} className="text-red-400" />
             </div>
             <div>
               <h2 className="text-xl font-bold text-white tracking-tight">Hub de Auditoria LQA</h2>
               <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">Agent Consultation Mode</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X size={20} className="text-white/40" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto grid md:grid-cols-2 gap-0">
          {/* Left Side: Visual Evidence & Report */}
          <div className="p-8 border-r border-white/5 space-y-6">
            <div className="space-y-4">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-white/40 flex items-center justify-between">
                   <div className="flex items-center gap-2"><Camera size={12} /> Evidência Visual</div>
                   <span className="text-[9px] text-cyan-400/60 lowercase italic">Dica: Cole (Cmd+V) para anexar instantaneamente</span>
                 </label>
                 <div 
                   onPaste={(e) => {
                     const item = e.clipboardData.items[0];
                     if (item?.type.includes('image')) {
                       const blob = item.getAsFile();
                       const reader = new FileReader();
                       reader.onload = (event) => setScreenshot(event.target.result);
                       reader.readAsDataURL(blob);
                     }
                   }}
                   className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40 min-h-[160px] flex items-center justify-center transition-all hover:border-cyan-400/30"
                 >
                   {screenshot ? (
                     <>
                       <img src={screenshot} alt="Evidence" className="w-full h-auto" />
                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                         <button onClick={() => setScreenshot(null)} className="p-2 bg-red-500/20 rounded-lg text-red-400 hover:bg-red-500/40 text-[10px] font-bold uppercase">Limpar</button>
                         <label className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/40 text-[10px] font-bold uppercase cursor-pointer">
                           Alterar
                           <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                             const file = e.target.files[0];
                             if (file) {
                               const reader = new FileReader();
                               reader.onload = (event) => setScreenshot(event.target.result);
                               reader.readAsDataURL(file);
                             }
                           }} />
                         </label>
                       </div>
                     </>
                   ) : (
                     <label className="cursor-pointer flex flex-col items-center gap-3">
                       <Camera size={24} className="text-white/20" />
                       <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Carregar ou Colar Imagem</span>
                       <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => setScreenshot(event.target.result);
                            reader.readAsDataURL(file);
                          }
                       }} />
                     </label>
                   )}
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Contexto Original</label>
                 <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-sm text-white/60 italic font-mono">
                   "{targetData.text}"
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-white/40">Correção Sugerida</label>
                 <textarea 
                   value={fix}
                   onChange={(e) => setFix(e.target.value)}
                   placeholder="Insira a correção final aqui..."
                   className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400/50 min-h-[80px]"
                 />
               </div>
            </div>
          </div>

          {/* Right Side: Agent Consultation */}
          <div className="bg-white/2 flex flex-col">
            <div className="p-6 border-b border-white/5 bg-white/2 flex items-center gap-3">
              <Bot size={16} className="text-violet-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">Consultar Especialista: {agent.split(' | ')[0]}</span>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-4 min-h-[300px]">
               {chatLog.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'agent' ? 'justify-start' : 'justify-end'}`}>
                   <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed ${
                     msg.role === 'agent' 
                     ? 'bg-violet-600/10 border border-violet-500/20 text-violet-200' 
                     : 'bg-white/5 border border-white/10 text-white/80'
                   }`}>
                     {msg.text}
                   </div>
                 </div>
               ))}
               {isConsulting && (
                 <div className="flex justify-start">
                   <div className="bg-violet-600/10 border border-violet-500/20 text-violet-200 p-3 rounded-2xl flex items-center gap-2">
                     <div className="w-1 h-1 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                     <div className="w-1 h-1 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                     <div className="w-1 h-1 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                   </div>
                 </div>
               )}
               <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-black/20 border-t border-white/5 flex gap-2">
               <input 
                 type="text" 
                 value={inputText}
                 onChange={e => setInputText(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && handleConsult()}
                 placeholder="Perguntar ao agente..."
                 className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
               />
               <button 
                 onClick={handleConsult}
                 disabled={isConsulting || !inputText}
                 className="p-2 bg-violet-500/20 rounded-xl text-violet-400 hover:bg-violet-500/30 transition-all disabled:opacity-30"
               >
                 <Send size={16} />
               </button>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white/2 border-t border-white/5">
          {successKey ? (
             <div className="flex flex-col items-center gap-4 animate-in zoom-in duration-300">
               <div className="flex items-center gap-4 text-emerald-400 font-bold">
                 <Shield size={20} />
                 <span>REPORTADO COM SUCESSO: {successKey}</span>
               </div>
               <button 
                 onClick={handleFinish}
                 className="px-8 py-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500/30 transition-all"
               >
                 Concluir e Voltar
               </button>
             </div>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting || !fix}
              className="w-full py-4 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30 rounded-2xl flex items-center justify-center gap-3 text-cyan-400 font-bold transition-all disabled:opacity-30"
            >
              <Send size={18} />
              {isSubmitting ? 'A Sincronizar com Jira...' : 'Submeter Auditoria Final'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LQAReporterModal;
