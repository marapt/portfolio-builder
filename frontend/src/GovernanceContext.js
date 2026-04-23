import React, { createContext, useContext, useState, useEffect } from 'react';
import LQAReporterModal from './components/LQAReporterModal';

const GovernanceContext = createContext();

export const GovernanceProvider = ({ children }) => {
  const [isAuditMode, setIsAuditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetData, setTargetData] = useState(null);

  const [selection, setSelection] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isAuditMode) {
      document.body.classList.add('audit-mode');
    } else {
      document.body.classList.remove('audit-mode');
      setSelection(null);
    }

    const handleMouseDown = (e) => {
      if (!isAuditMode || e.target.closest('#lqa-modal') || e.target.closest('button')) return;
      setIsDrawing(true);
      setStartPos({ x: e.clientX, y: e.clientY });
      setSelection({ x: e.clientX, y: e.clientY, w: 0, h: 0 });
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      const w = e.clientX - startPos.x;
      const h = e.clientY - startPos.y;
      setSelection(prev => ({ ...prev, w, h }));
    };

    const handleMouseUp = async (e) => {
      if (!isDrawing) return;
      setIsDrawing(false);
      
      const rect = {
        x: Math.min(startPos.x, e.clientX),
        y: Math.min(startPos.y, e.clientY),
        w: Math.abs(e.clientX - startPos.x),
        h: Math.abs(e.clientY - startPos.y)
      };

      if (rect.w > 10 && rect.h > 10) {
        // Spatial Text Extraction logic
        const allElements = document.querySelectorAll('p, h1, h2, h3, h4, span, li, a, button');
        let extractedText = "";
        
        allElements.forEach(el => {
          const elRect = el.getBoundingClientRect();
          // Check if element is at least partially within the selection box
          if (
            elRect.left < rect.x + rect.w &&
            elRect.right > rect.x &&
            elRect.top < rect.y + rect.h &&
            elRect.bottom > rect.y
          ) {
            extractedText += el.innerText + " ";
          }
        });

        setTargetData({
          text: extractedText.trim() || "Visual Area Capture",
          selector: "body",
          rect: rect
        });
        setModalOpen(true);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isAuditMode, isDrawing, startPos]);

  return (
    <GovernanceContext.Provider value={{ isAuditMode, setIsAuditMode }}>
      {children}
      <LQAReporterModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        targetData={targetData}
        onReported={(key) => {
          console.log(`PJM Issue Created: ${key}`);
        }}
      />
      {isAuditMode && (
        <>
          {selection && isDrawing && (
            <div 
              style={{
                position: 'fixed',
                left: Math.min(selection.x, selection.x + selection.w),
                top: Math.min(selection.y, selection.y + selection.h),
                width: Math.abs(selection.w),
                height: Math.abs(selection.h),
                border: '2px solid #22d3ee',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                zIndex: 9999,
                pointerEvents: 'none'
              }}
            />
          )}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] px-6 py-3 bg-red-600 text-white font-black uppercase tracking-[0.2em] rounded-full shadow-2xl animate-pulse flex items-center gap-6 border-2 border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              <span>MODO DE ANOTAÇÃO ATIVO: ARRASTE PARA CAPTURAR</span>
            </div>
            <button 
              onClick={() => setIsAuditMode(false)}
              className="px-4 py-1.5 bg-white text-red-600 rounded-lg text-[10px] hover:bg-white/90 transition-colors"
            >
              SAIR DO MODO
            </button>
          </div>
        </>
      )}
    </GovernanceContext.Provider>
  );
};

export const useGovernance = () => useContext(GovernanceContext);
