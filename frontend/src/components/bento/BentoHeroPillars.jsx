import React, { useState } from 'react';
import { Layers, ShieldCheck, Activity, TrendingUp, Sparkles, LayoutGrid } from 'lucide-react';
import BentoCard from './BentoCard';

const pillarIcons = {
  Layers,
  ShieldCheck,
  Activity,
  TrendingUp,
};

export const BentoHeroPillars = ({ pillars, flippedCards, onToggleFlip }) => {
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
            <span>Tier 1 Architecture · Strategic Pillars</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Top Executive Governance Pillars
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Four core executive leadership foundations calibrated for high-velocity global operations, extended workforce orchestration, and C-level transparency.
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
            <span>All Pillars (4)</span>
          </button>

          {pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon] || Layers;
            const isSelected = selectedPillarId === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
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

          return (
            <div
              key={pillar.id}
              className="bg-slate-900/40 rounded-2xl p-6 md:p-8 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Subtle Background Accent Gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Pillar Title Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/60">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-indigo-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-indigo-400">
                        PILLAR {pillar.number}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 font-mono">
                        {pillar.subCards?.length || 0} STAR Playbooks
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 max-w-xl lg:text-right">
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
