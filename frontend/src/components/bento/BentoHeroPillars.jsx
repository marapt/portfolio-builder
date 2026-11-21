import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, ShieldCheck, Activity, TrendingUp, Sparkles, LayoutGrid } from 'lucide-react';
import BentoCard from './BentoCard';

const pillarIcons = {
  Layers,
  ShieldCheck,
  Activity,
  TrendingUp,
};

const pillarThemes = {
  violet: {
    pillActive: 'bg-violet-600 text-white shadow-lg shadow-violet-500/25',
    boxBg: 'bg-gradient-to-br from-white via-violet-50/40 to-white',
    boxBorder: 'border-violet-200/80 hover:border-violet-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(139,92,246,0.08)]',
    ambientGlow: 'bg-violet-100/60',
    iconBadge: 'bg-violet-100 border-violet-200 text-violet-700',
    textAccent: 'text-violet-600',
  },
  emerald: {
    pillActive: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25',
    boxBg: 'bg-gradient-to-br from-white via-emerald-50/40 to-white',
    boxBorder: 'border-emerald-200/80 hover:border-emerald-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(16,185,129,0.08)]',
    ambientGlow: 'bg-emerald-100/60',
    iconBadge: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    textAccent: 'text-emerald-600',
  },
  amber: {
    pillActive: 'bg-amber-600 text-white shadow-lg shadow-amber-500/25',
    boxBg: 'bg-gradient-to-br from-white via-amber-50/40 to-white',
    boxBorder: 'border-amber-200/80 hover:border-amber-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(245,158,11,0.08)]',
    ambientGlow: 'bg-amber-100/60',
    iconBadge: 'bg-amber-100 border-amber-200 text-amber-700',
    textAccent: 'text-amber-600',
  },
  sky: {
    pillActive: 'bg-sky-600 text-white shadow-lg shadow-sky-500/25',
    boxBg: 'bg-gradient-to-br from-white via-sky-50/40 to-white',
    boxBorder: 'border-sky-200/80 hover:border-sky-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(14,165,233,0.08)]',
    ambientGlow: 'bg-sky-100/60',
    iconBadge: 'bg-sky-100 border-sky-200 text-sky-700',
    textAccent: 'text-sky-600',
  },
};

export const BentoHeroPillars = ({ pillars, flippedCards, onToggleFlip, onExpand }) => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');
  const [selectedPillarId, setSelectedPillarId] = useState('all');

  const visiblePillars =
    selectedPillarId === 'all'
      ? pillars
      : pillars.filter((p) => p.id === selectedPillarId);

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isPt
                ? 'Arquitetura Tier 1 · Pilares Estratégicos'
                : 'Tier 1 Architecture · Strategic Pillars'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {isPt
              ? 'Principais Responsabilidades de Senior PGM'
              : 'Senior PGM Core Responsibilities'}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            {isPt
              ? 'Com foco em Capacitação Operacional e Governação, o meu objetivo é demonstrar como atuo de forma autónoma para conferir estrutura, eficiência e escala a programas multifuncionais.'
              : 'Focusing on Operational Enablement and Governance, my goal is to show how I operate autonomously to bring structure, efficiency, and scale to cross-functional programs.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedPillarId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedPillarId === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{isPt ? 'Todos os Pilares (4)' : 'All Pillars (4)'}</span>
          </button>

          {pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon] || Layers;
            const isSelected = selectedPillarId === pillar.id;
            const theme = pillarThemes[pillar.color] || pillarThemes.violet;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? theme.pillActive
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{pillar.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pillars Presentation */}
      <div className="space-y-12">
        {visiblePillars.map((pillar) => {
          const Icon = pillarIcons[pillar.icon] || Layers;
          const theme = pillarThemes[pillar.color] || pillarThemes.violet;

          return (
            <div
              key={pillar.id}
              className={`${theme.boxBg} rounded-3xl p-6 md:p-8 lg:p-10 border ${theme.boxBorder} ${theme.boxShadow} transition-all duration-500 relative overflow-hidden group`}
            >
              {/* Subtle Ambient Themed Gradient */}
              <div className={`absolute top-0 right-0 w-96 h-96 ${theme.ambientGlow} rounded-full blur-3xl -z-10 pointer-events-none`} />

              {/* Pillar Title Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-gray-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className={`p-3.5 rounded-2xl ${theme.iconBadge} shadow-sm shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-mono text-xs font-bold ${theme.textAccent} uppercase tracking-wider`}>
                        PILLAR {pillar.number}
                      </span>
                      <span className="text-gray-300">·</span>
                      <span className="text-xs text-gray-500 font-mono font-medium">
                        {pillar.subCards?.length || 0} STAR Cards
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-xl lg:text-right font-normal leading-relaxed whitespace-pre-line">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Subcards Grid (up to 3 cards per pillar) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(pillar.subCards || []).map((card) => (
                  <BentoCard
                    key={card.id}
                    card={card}
                    color={pillar.color || 'indigo'}
                    domainTitle={pillar.title}
                    isFlippedControlled={
                      flippedCards ? !!flippedCards[card.id] : undefined
                    }
                    onToggleFlip={onToggleFlip}
                    onExpand={onExpand}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BentoHeroPillars;
