import React, { useEffect } from 'react';
import { X, CheckCircle2, Building2, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCompanyBrands } from '../../data/bento/brandMap';

const colorThemes = {
  violet: {
    badge: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    topBorder: 'border-t-violet-400',
    accentText: 'text-violet-400',
    btn: 'bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-500/40',
  },
  emerald: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    topBorder: 'border-t-emerald-400',
    accentText: 'text-emerald-400',
    btn: 'bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border-emerald-500/40',
  },
  sky: {
    badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    topBorder: 'border-t-sky-400',
    accentText: 'text-sky-400',
    btn: 'bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border-sky-500/40',
  },
  amber: {
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    topBorder: 'border-t-amber-400',
    accentText: 'text-amber-400',
    btn: 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border-amber-500/40',
  },
  indigo: {
    badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    topBorder: 'border-t-indigo-400',
    accentText: 'text-indigo-400',
    btn: 'bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border-indigo-500/40',
  },
  rose: {
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    topBorder: 'border-t-rose-400',
    accentText: 'text-rose-400',
    btn: 'bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border-rose-500/40',
  },
  teal: {
    badge: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    topBorder: 'border-t-teal-400',
    accentText: 'text-teal-400',
    btn: 'bg-teal-600/30 hover:bg-teal-600/50 text-teal-200 border-teal-500/40',
  },
  purple: {
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    topBorder: 'border-t-purple-400',
    accentText: 'text-purple-400',
    btn: 'bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border-purple-500/40',
  },
  cyan: {
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    topBorder: 'border-t-cyan-400',
    accentText: 'text-cyan-400',
    btn: 'bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border-cyan-500/40',
  },
  blue: {
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    topBorder: 'border-t-blue-400',
    accentText: 'text-blue-400',
    btn: 'bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border-blue-500/40',
  },
};

export const BentoCardModal = ({ card, color = 'indigo', domainTitle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body background scroll while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!card) return null;

  const theme = colorThemes[color] || colorThemes.indigo;
  const star = card.star || {};
  const companies = getCompanyBrands(card);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-card-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 border-t-4 ${theme.topBorder} p-6 sm:p-8 shadow-2xl text-left transition-all transform scale-100 ring-1 ring-white/10`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close expanded card"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header: Badge, Metric Pill, Company Logo and Title */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${theme.badge}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {card.tag || domainTitle || 'STAR Card'}
            </span>

            {card.metrics && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{card.metrics}</span>
              </span>
            )}

            {companies.length > 0 ? (
              companies.map((comp) => (
                <span
                  key={comp.name}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-slate-200 shadow-sm"
                >
                  <img
                    src={comp.logo}
                    alt={comp.name}
                    className="w-4 h-4 rounded-sm object-contain shrink-0"
                  />
                  <span>{comp.name}</span>
                </span>
              ))
            ) : card.proofAnchor ? (
              <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-200 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                {card.proofAnchor.toUpperCase()}
              </span>
            ) : null}
          </div>

          <h3 id="modal-card-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mt-3 mb-2.5">
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {card.subtitle}
          </p>
        </div>

        {/* Expanded STAR Framework Content */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between pb-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
              Full STAR Execution Model
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Click anywhere outside or Esc to close
            </span>
          </div>

          {star.situation && (
            <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-5 border-l-4 border-amber-500 border border-slate-800/80 shadow-sm">
              <span className="font-bold text-amber-400 uppercase tracking-wide text-xs block mb-1">
                Situation
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {star.situation}
              </p>
            </div>
          )}

          {star.task && (
            <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-5 border-l-4 border-sky-500 border border-slate-800/80 shadow-sm">
              <span className="font-bold text-sky-400 uppercase tracking-wide text-xs block mb-1">
                Task
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {star.task}
              </p>
            </div>
          )}

          {star.action && (
            <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-5 border-l-4 border-indigo-500 border border-slate-800/80 shadow-sm">
              <span className="font-bold text-indigo-400 uppercase tracking-wide text-xs block mb-1">
                Action
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {star.action}
              </p>
            </div>
          )}

          {star.result && (
            <div className="bg-emerald-950/30 rounded-2xl p-4 sm:p-5 border-l-4 border-emerald-500 border border-emerald-500/30 shadow-sm">
              <span className="font-bold text-emerald-400 uppercase tracking-wide text-xs block mb-1">
                Result
              </span>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                {star.result}
              </p>
            </div>
          )}

          {card.l6Principle && (
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 flex items-start gap-3 shadow-sm">
              <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 block mb-0.5">
                  Learning
                </span>
                <p className="text-xs sm:text-sm text-indigo-100 italic leading-relaxed">
                  {card.l6Principle}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {card.proofAnchor ? (
            <Link
              to={`/career#${card.proofAnchor}`}
              className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
              onClick={onClose}
            >
              <span>View company background in Career Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="text-xs text-slate-400 font-mono">Calibrated Executive Framework</span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
          >
            Close Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default BentoCardModal;
