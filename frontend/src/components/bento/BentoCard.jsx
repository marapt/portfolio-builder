import React, { useState } from 'react';
import { RotateCw, CheckCircle2, ArrowRight, Sparkles, Building2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BentoCard.css';

const colorThemes = {
  violet: {
    badge: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    border: 'border-slate-700/80 hover:border-violet-400/80',
    topBorder: 'border-t-violet-400',
    accentText: 'text-violet-400',
    btn: 'bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-500/40',
    glow: 'shadow-violet-500/10',
  },
  emerald: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    border: 'border-slate-700/80 hover:border-emerald-400/80',
    topBorder: 'border-t-emerald-400',
    accentText: 'text-emerald-400',
    btn: 'bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border-emerald-500/40',
    glow: 'shadow-emerald-500/10',
  },
  sky: {
    badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    border: 'border-slate-700/80 hover:border-sky-400/80',
    topBorder: 'border-t-sky-400',
    accentText: 'text-sky-400',
    btn: 'bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border-sky-500/40',
    glow: 'shadow-sky-500/10',
  },
  amber: {
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    border: 'border-slate-700/80 hover:border-amber-400/80',
    topBorder: 'border-t-amber-400',
    accentText: 'text-amber-400',
    btn: 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border-amber-500/40',
    glow: 'shadow-amber-500/10',
  },
  indigo: {
    badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    border: 'border-slate-700/80 hover:border-indigo-400/80',
    topBorder: 'border-t-indigo-400',
    accentText: 'text-indigo-400',
    btn: 'bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border-indigo-500/40',
    glow: 'shadow-indigo-500/10',
  },
  rose: {
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    border: 'border-slate-700/80 hover:border-rose-400/80',
    topBorder: 'border-t-rose-400',
    accentText: 'text-rose-400',
    btn: 'bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border-rose-500/40',
    glow: 'shadow-rose-500/10',
  },
};

export const BentoCard = ({
  card,
  color = 'indigo',
  isFlippedControlled,
  onToggleFlip,
  domainTitle,
}) => {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isFlipped = isFlippedControlled !== undefined ? isFlippedControlled : internalFlipped;

  const handleFlip = (e) => {
    e.stopPropagation();
    if (onToggleFlip) {
      onToggleFlip(card.id);
    } else {
      setInternalFlipped((prev) => !prev);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip(e);
    }
  };

  const theme = colorThemes[color] || colorThemes.indigo;
  const star = card.star || {};

  return (
    <div
      className="bento-card-container group w-full"
      tabIndex={0}
      role="region"
      aria-label={`${card.title}. Press Enter to ${isFlipped ? 'collapse' : 'flip'} STAR details.`}
      onKeyDown={handleKeyDown}
    >
      <div className={`bento-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT FACE (Elevated Surface with High Contrast) */}
        <div
          className={`bento-card-face bento-card-front bg-gradient-to-br from-slate-800/95 via-slate-850 to-slate-900/95 p-6 border ${theme.border} transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-indigo-400/60 cursor-pointer`}
          onClick={handleFlip}
        >
          {/* Top Row: Domain / Tag and Flip Cue */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${theme.badge}`}
              >
                <Sparkles className="w-3 h-3" />
                {card.tag || domainTitle || 'Operational Playbook'}
              </span>
              <button
                type="button"
                onClick={handleFlip}
                aria-label="Flip card for STAR details"
                className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors ${theme.btn}`}
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Flip STAR</span>
              </button>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed">
              {card.subtitle}
            </p>
          </div>

          {/* Bottom Area: Key Metrics Pill & Proof Anchor */}
          <div className="pt-4 border-t border-slate-700/60">
            {card.metrics && (
              <div className="mb-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Validated Impact
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{card.metrics}</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-slate-400">
              {card.proofAnchor ? (
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-200 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  <Building2 className="w-3 h-3 text-indigo-400" />
                  {card.proofAnchor.toUpperCase()}
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">Executive Playbook</span>
              )}

              <span className="text-indigo-400 flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform">
                Read playbook
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* BACK FACE (Flipped STAR Model with High-Contrast Background & Accents) */}
        <div
          className={`bento-card-face bento-card-back bg-gradient-to-b from-slate-800/95 via-slate-850 to-slate-900/95 p-6 border border-slate-700/80 border-t-2 ${theme.topBorder} shadow-2xl ring-1 ring-white/10 flex flex-col justify-between`}
        >
          {/* Header Row */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 mb-3">
              <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
                STAR Framework
              </span>
              <button
                type="button"
                onClick={handleFlip}
                aria-label="Return to card summary"
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <RotateCw className="w-3 h-3" />
                <span>Summary</span>
              </button>
            </div>

            <h4 className="text-sm font-bold text-white mb-3 line-clamp-1">{card.title}</h4>

            {/* STAR Content Grid with Contrasting Card Insets */}
            <div className="space-y-2.5 text-xs">
              {star.situation && (
                <div className="bg-slate-900/90 rounded-lg p-2.5 border-l-2 border-amber-500 border border-slate-800/80">
                  <span className="font-bold text-amber-400 uppercase tracking-wide block text-[10px] mb-0.5">
                    Situation
                  </span>
                  <p className="text-slate-300 leading-relaxed">{star.situation}</p>
                </div>
              )}

              {star.task && (
                <div className="bg-slate-900/90 rounded-lg p-2.5 border-l-2 border-sky-500 border border-slate-800/80">
                  <span className="font-bold text-sky-400 uppercase tracking-wide block text-[10px] mb-0.5">
                    Task
                  </span>
                  <p className="text-slate-300 leading-relaxed">{star.task}</p>
                </div>
              )}

              {star.action && (
                <div className="bg-slate-900/90 rounded-lg p-2.5 border-l-2 border-indigo-500 border border-slate-800/80">
                  <span className="font-bold text-indigo-400 uppercase tracking-wide block text-[10px] mb-0.5">
                    Action
                  </span>
                  <p className="text-slate-300 leading-relaxed">{star.action}</p>
                </div>
              )}

              {star.result && (
                <div className="bg-emerald-950/40 rounded-lg p-2.5 border-l-2 border-emerald-500 border border-emerald-500/30">
                  <span className="font-bold text-emerald-400 uppercase tracking-wide block text-[10px] mb-0.5">
                    Result & Impact
                  </span>
                  <p className="text-slate-200 font-medium leading-relaxed">{star.result}</p>
                </div>
              )}
            </div>

            {/* L6 Principle Callout */}
            {card.l6Principle && (
              <div className="mt-3 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/40 flex items-start gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-indigo-200 italic leading-snug">
                  {card.l6Principle}
                </p>
              </div>
            )}
          </div>

          {/* Footer Action: Anchor jump if available */}
          {card.proofAnchor && (
            <div className="pt-3 mt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Career Link:</span>
              <Link
                to={`/career#${card.proofAnchor}`}
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View in Career Timeline</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
