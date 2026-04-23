import React, { createContext, useContext, useState, useEffect } from 'react';
import LQAReporterModal from './components/LQAReporterModal';

const GovernanceContext = createContext();

export const GovernanceProvider = ({ children }) => {
  const [isAuditMode, setIsAuditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetData, setTargetData] = useState(null);

  useEffect(() => {
    if (!isAuditMode) return;

    const handleGlobalClick = (e) => {
      // Allow navigation and button clicks even in audit mode
      if (e.target.closest('a') || e.target.closest('button')) {
          return; 
      }

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

    // Add overlay class to body to show annotation cursor
    document.body.classList.add('annotation-mode-active');
    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      document.body.classList.remove('annotation-mode-active');
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
