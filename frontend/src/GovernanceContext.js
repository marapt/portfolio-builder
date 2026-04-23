import React, { createContext, useContext, useState, useEffect } from 'react';
import LQAReporterModal from './components/LQAReporterModal';

const GovernanceContext = createContext();

export const GovernanceProvider = ({ children }) => {
  const [isAuditMode, setIsAuditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetData, setTargetData] = useState(null);

  useEffect(() => {
    if (isAuditMode) {
      document.body.classList.add('audit-mode');
    } else {
      document.body.classList.remove('audit-mode');
    }

    const handleGlobalClick = (e) => {
      // 1. Ignore if mode is off
      if (!isAuditMode) return;

      // 2. Ignore clicks inside the LQA modal itself (to prevent meta-reporting)
      if (e.target.closest('.glass-card') || e.target.closest('#lqa-modal')) return;

      // 3. Allow navigation and button clicks
      if (e.target.closest('a') || e.target.closest('button')) return;

      // If text is being selected (dragged), don't trigger the modal
      if (window.getSelection().toString().length > 0) return;

      e.preventDefault();
      e.stopPropagation();

      const text = e.target.innerText || e.target.value || '';
      if (text.length > 0) {
        setTargetData({
          text: text.trim(),
          selector: e.target.tagName + (e.target.className ? '.' + e.target.className.split(' ').join('.') : ''),
        });
        setModalOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, [isAuditMode]);

  return (
    <GovernanceContext.Provider value={{ isAuditMode, setIsAuditMode }}>
      {children}
      <LQAReporterModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        targetData={targetData}
        onReported={(key) => {
          console.log(`PJM Issue Created: ${key}`);
          alert(`Enviado! Ticket Jira criado: ${key}. Tiago foi notificado.`);
        }}
      />
      {isAuditMode && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] px-6 py-3 bg-red-600 text-white font-black uppercase tracking-[0.2em] rounded-full shadow-2xl animate-pulse flex items-center gap-6 border-2 border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span>MODO DE ANOTAÇÃO ATIVO</span>
          </div>
          <button 
            onClick={() => setIsAuditMode(false)}
            className="px-4 py-1.5 bg-white text-red-600 rounded-lg text-[10px] hover:bg-white/90 transition-colors"
          >
            SAIR DO MODO
          </button>
        </div>
      )}
    </GovernanceContext.Provider>
  );
};

export const useGovernance = () => useContext(GovernanceContext);
