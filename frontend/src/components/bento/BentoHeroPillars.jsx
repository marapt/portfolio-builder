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
              className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(99,102,241,0.08)] transition-all duration-500 relative overflow-hidden group"
            >
              {/* Subtle Ambient Gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Pillar Title Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-gray-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider">
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

                <p className="text-sm text-gray-600 max-w-xl lg:text-right font-normal leading-relaxed">
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
