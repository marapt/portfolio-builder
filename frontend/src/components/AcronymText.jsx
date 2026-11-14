import React, { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';

const QUARTER_NAMES = {
  Q1: 'First Quarter (Jan–Mar)',
  Q2: 'Second Quarter (Apr–Jun)',
  Q3: 'Third Quarter (Jul–Sep)',
  Q4: 'Fourth Quarter (Oct–Dec)',
};

export const ACRONYM_DEFINITIONS = {
  'Ex-BNPL': {
    expansion: 'Excluding Buy Now, Pay Later (Afterpay) — organic core results',
    glossaryId: 'ex-bnpl',
  },
  BNPL: {
    expansion: 'Buy Now, Pay Later (Afterpay installment platform)',
    glossaryId: 'bnpl',
  },
  GAAP: {
    expansion: 'Generally Accepted Accounting Principles',
    glossaryId: 'gaap',
  },
  GPV: {
    expansion: 'Gross Payment Volume',
    glossaryId: 'gpv',
  },
  CC: {
    expansion: 'Constant Currency (foreign-exchange-adjusted)',
    glossaryId: 'constant-currency',
  },
  'Constant Currency': {
    expansion: 'Foreign-exchange-adjusted growth rate (constant FX rates)',
    glossaryId: 'constant-currency',
  },
  'Gross Profit': {
    expansion: 'Net revenue retained after direct processing & product costs',
    glossaryId: 'gross-profit',
  },
  ROI: {
    expansion: 'Return on Investment',
  },
  CAGR: {
    expansion: 'Compound Annual Growth Rate',
    glossaryId: 'growth-rates',
  },
  YoY: {
    expansion: 'Year-over-Year',
    glossaryId: 'growth-rates',
  },
  YTD: {
    expansion: 'Year-to-Date',
    glossaryId: 'periods',
  },
  '9M': {
    expansion: 'Nine Months Ended (Jan–Sep)',
    glossaryId: 'periods',
  },
  GTM: {
    expansion: 'Go-To-Market',
  },
  USD: {
    expansion: 'United States Dollar',
  },
  QR: {
    expansion: 'Quick Response (2D barcode payment)',
  },
  SLA: {
    expansion: 'Service-Level Agreement',
  },
  NDA: {
    expansion: 'Non-Disclosure Agreement',
  },
  QA: {
    expansion: 'Quality Assurance',
  },
  API: {
    expansion: 'Application Programming Interface',
  },
  GenAI: {
    expansion: 'Generative Artificial Intelligence',
  },
  AI: {
    expansion: 'Artificial Intelligence',
  },
  HITL: {
    expansion: 'Human-in-the-Loop',
  },
  SMB: {
    expansion: 'Small and Medium-Sized Businesses',
  },
  TLM: {
    expansion: 'Translation & Localization Management',
  },
  PGM: {
    expansion: 'Program Management',
  },
  MIIS: {
    expansion: 'Middlebury Institute of International Studies',
  },
  DGT: {
    expansion: 'Directorate-General for Translation (European Commission)',
  },
};

export function resolveAcronymDefinition(token) {
  if (!token) return null;
  if (token === 'ex-BNPL' || token === 'Ex-BNPL') {
    return { term: 'Ex-BNPL', ...ACRONYM_DEFINITIONS['Ex-BNPL'] };
  }
  if (ACRONYM_DEFINITIONS[token]) {
    return { term: token, ...ACRONYM_DEFINITIONS[token] };
  }
  if (/^FY\d{2}$/.test(token)) {
    const fullYear = 2000 + Number(token.slice(2));
    return {
      term: token,
      expansion: `Fiscal Year ${fullYear}`,
      glossaryId: 'periods',
    };
  }
  if (QUARTER_NAMES[token]) {
    return {
      term: token,
      expansion: QUARTER_NAMES[token],
      glossaryId: 'periods',
    };
  }
  return null;
}

export function getGlossaryPillTooltipPayload(entry) {
  if (!entry) return null;
  const label = entry.shortLabel || entry.term;
  const known = resolveAcronymDefinition(label);
  if (known) {
    return { ...known, glossaryId: entry.id || known.glossaryId };
  }
  return {
    term: label,
    expansion: entry.definition,
    glossaryId: entry.id,
  };
}

const ACRONYM_TOKEN_REGEX =
  /\b([Ee]x-BNPL|BNPL|GAAP|GPV|CAGR|YoY|YTD|ROI|GTM|CC|USD|QR|SLA|NDA|QA|API|GenAI|AI|HITL|SMB|TLM|PGM|MIIS|DGT|9M|FY\d{2}|Q[1-4])\b/g;

const AcronymTooltipContext = createContext(null);

export const useAcronymTooltip = () => useContext(AcronymTooltipContext);

/**
 * Provides a single shared hover/focus tooltip overlay (top-layer popover when supported)
 * so inline acronyms and glossary pills stay responsive without overflowing parent cards.
 */
export const AcronymTooltipProvider = ({
  availableGlossaryIds = [],
  onOpenGlossary = null,
  children,
}) => {
  const tooltipId = useId();
  const tooltipRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [activeTip, setActiveTip] = useState(null);

  const glossaryIdSet = useMemo(() => new Set(availableGlossaryIds), [availableGlossaryIds]);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const hideTip = useCallback(() => {
    cancelClose();
    setActiveTip(null);
  }, [cancelClose]);

  const scheduleHide = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setActiveTip(null);
    }, 120);
  }, [cancelClose]);

  const showTip = useCallback(
    (targetEl, payload) => {
      cancelClose();
      if (!targetEl || !payload?.expansion) return;
      const rect = targetEl.getBoundingClientRect();
      const canOpenGlossary = Boolean(
        onOpenGlossary && payload.glossaryId && glossaryIdSet.has(payload.glossaryId)
      );
      setActiveTip({
        term: payload.term,
        expansion: payload.expansion,
        glossaryId: canOpenGlossary ? payload.glossaryId : null,
        rect: {
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
        },
      });
    },
    [cancelClose, glossaryIdSet, onOpenGlossary]
  );

  // Dismiss via Escape key without moving focus (WCAG 1.4.13 Dismissible).
  useEffect(() => {
    if (!activeTip) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        hideTip();
      }
    };
    const handleScroll = () => hideTip();
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [activeTip, hideTip]);

  // Promote tooltip into browser top-layer via manual popover when supported so
  // hovering acronyms inside modals sits above the dialog without closing other popovers.
  useEffect(() => {
    const el = tooltipRef.current;
    if (!el || !('popover' in HTMLElement.prototype)) return;
    try {
      if (activeTip && !el.matches(':popover-open')) {
        el.showPopover?.();
      } else if (!activeTip && el.matches(':popover-open')) {
        el.hidePopover?.();
      }
    } catch {
      // Fall back silently to fixed z-index positioning if top-layer call is unavailable.
    }
  }, [activeTip]);

  const openGlossaryTerm = useCallback(
    (glossaryId) => {
      if (!onOpenGlossary || !glossaryId || !glossaryIdSet.has(glossaryId)) return;
      hideTip();
      onOpenGlossary(glossaryId);
    },
    [glossaryIdSet, hideTip, onOpenGlossary]
  );

  const value = useMemo(
    () => ({
      tooltipId,
      activeTip,
      showTip,
      scheduleHide,
      hideTip,
      openGlossaryTerm,
      hasGlossary: Boolean(onOpenGlossary && glossaryIdSet.size > 0),
    }),
    [tooltipId, activeTip, showTip, scheduleHide, hideTip, openGlossaryTerm, onOpenGlossary, glossaryIdSet]
  );

  const placement = useMemo(() => {
    if (!activeTip || typeof window === 'undefined') return null;
    const { rect } = activeTip;
    const showBelow = rect.top < 84;
    const centerX = rect.left + rect.width / 2;
    const clampedX = Math.max(150, Math.min(window.innerWidth - 150, centerX));
    return {
      left: `${clampedX}px`,
      top: showBelow ? `${rect.bottom + 8}px` : `${rect.top - 8}px`,
      transform: showBelow ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
    };
  }, [activeTip]);

  return (
    <AcronymTooltipContext.Provider value={value}>
      {children}
      <div
        id={tooltipId}
        ref={tooltipRef}
        role="tooltip"
        popover="manual"
        aria-hidden={!activeTip}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleHide}
        style={
          placement
            ? {
                position: 'fixed',
                left: placement.left,
                top: placement.top,
                right: 'auto',
                bottom: 'auto',
                transform: placement.transform,
                margin: 0,
              }
            : { display: 'none' }
        }
        className={
          activeTip
            ? 'z-50 max-w-[280px] rounded-xl border border-cyan-400/40 bg-slate-950/95 px-3 py-2 text-xs text-slate-100 shadow-2xl backdrop-blur-md pointer-events-auto'
            : 'hidden'
        }
      >
        {activeTip && (
          <div className="space-y-0.5 leading-snug">
            <p className="font-semibold text-white">
              <span className="text-cyan-300">{activeTip.term}</span> = {activeTip.expansion}
            </p>
            {activeTip.glossaryId && (
              <p className="text-[10px] text-cyan-200/80">
                Click term for full filing guide
              </p>
            )}
          </div>
        )}
      </div>
    </AcronymTooltipContext.Provider>
  );
};

/**
 * Renders any plain text string with consistent hover/focus `<abbr>` tooltips
 * for recognized acronyms and shorthand financial codes.
 */
const AcronymText = ({ text, insideInteractive = false }) => {
  const ctx = useAcronymTooltip();

  if (typeof text !== 'string' || !text) {
    return text ?? null;
  }

  const parts = [];
  let lastIndex = 0;
  ACRONYM_TOKEN_REGEX.lastIndex = 0;
  let match = ACRONYM_TOKEN_REGEX.exec(text);

  while (match !== null) {
    const token = match[0];
    const start = match.index;
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }
    const def = resolveAcronymDefinition(token);
    if (def) {
      parts.push({ key: `${start}-${token}`, token, def });
    } else {
      parts.push(token);
    }
    lastIndex = start + token.length;
    match = ACRONYM_TOKEN_REGEX.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 1 && typeof parts[0] === 'string') {
    return text;
  }

  return (
    <>
      {parts.map((part) => {
        if (typeof part === 'string') return part;
        const { key, token, def } = part;
        const tooltipLabel = `${def.term} = ${def.expansion}`;
        const canFocusOrClick = Boolean(ctx && !insideInteractive);
        const isCurrentTip = Boolean(
          ctx?.activeTip && ctx.activeTip.term === def.term && ctx.activeTip.expansion === def.expansion
        );

        return (
          <abbr
            key={key}
            title={tooltipLabel}
            tabIndex={canFocusOrClick ? 0 : undefined}
            aria-describedby={canFocusOrClick && isCurrentTip ? ctx.tooltipId : undefined}
            onMouseEnter={ctx ? (e) => ctx.showTip(e.currentTarget, def) : undefined}
            onMouseLeave={ctx ? ctx.scheduleHide : undefined}
            onFocus={canFocusOrClick ? (e) => ctx.showTip(e.currentTarget, def) : undefined}
            onBlur={canFocusOrClick ? ctx.scheduleHide : undefined}
            onClick={
              canFocusOrClick && def.glossaryId
                ? (e) => {
                    e.stopPropagation();
                    ctx.openGlossaryTerm(def.glossaryId);
                  }
                : undefined
            }
            onKeyDown={
              canFocusOrClick && def.glossaryId
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      ctx.openGlossaryTerm(def.glossaryId);
                    }
                  }
                : undefined
            }
            className="underline decoration-dotted decoration-cyan-300/60 underline-offset-4 cursor-help rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {token}
          </abbr>
        );
      })}
    </>
  );
};

export default AcronymText;
