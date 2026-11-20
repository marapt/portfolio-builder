import React, { useState, useMemo } from 'react';
import {
  FileText,
  CheckSquare,
  Cpu,
  Zap,
  Globe,
  Compass,
  Users,
  Sliders,
  DollarSign,
  BarChart3,
  Search,
  RotateCw,
  FolderOpen,
  Filter,
} from 'lucide-react';
import BentoCard from './BentoCard';

const domainIcons = {
  FileText,
  CheckSquare,
  Cpu,
  Zap,
  Globe,
  Compass,
  Users,
  Sliders,
  DollarSign,
  BarChart3,
};

const domainColors = [
  'indigo',
  'violet',
  'sky',
  'emerald',
  'amber',
  'rose',
  'indigo',
  'violet',
  'emerald',
  'sky',
];

export const BentoDomainGrid = ({
  domains,
  flippedCards,
  onToggleFlip,
  onFlipAll,
  onResetAll,
  allFlipped,
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Count total cards across all domains
  const totalCardsCount = useMemo(() => {
    return domains.reduce((acc, d) => acc + (d.subCards?.length || 0), 0);
  }, [domains]);

  // Filtered cards based on domain tab and search query
  const filteredDomains = useMemo(() => {
    return domains
      .map((domain) => {
        if (selectedDomainId !== 'all' && domain.id !== selectedDomainId) {
          return null;
        }

        const filteredSubcards = (domain.subCards || []).filter((card) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          const titleMatch = card.title?.toLowerCase().includes(q);
          const subtitleMatch = card.subtitle?.toLowerCase().includes(q);
          const metricsMatch = card.metrics?.toLowerCase().includes(q);
          const situationMatch = card.star?.situation?.toLowerCase().includes(q);
          const actionMatch = card.star?.action?.toLowerCase().includes(q);
          const resultMatch = card.star?.result?.toLowerCase().includes(q);
          const principleMatch = card.l6Principle?.toLowerCase().includes(q);

          return (
            titleMatch ||
            subtitleMatch ||
            metricsMatch ||
            situationMatch ||
            actionMatch ||
            resultMatch ||
            principleMatch
          );
        });

        if (searchQuery.trim() && filteredSubcards.length === 0) {
          return null;
        }

        return {
          ...domain,
          subCards: filteredSubcards,
        };
      })
      .filter(Boolean);
  }, [domains, selectedDomainId, searchQuery]);

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Filter className="w-3.5 h-3.5" />
            <span>Tier 2 Architecture · 10 Specialized Domains</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Specialized Operational Domains
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Granular execution playbooks spanning content pipelines, AI model evaluation, continuous vendor accountability, compliance controls, and unit economics.
          </p>
        </div>

        {/* Global Flip / Reset Action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={allFlipped ? onResetAll : onFlipAll}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-md"
          >
            <RotateCw className="w-3.5 h-3.5 text-indigo-400" />
            <span>{allFlipped ? 'Reset to Cards' : 'Flip All to STAR'}</span>
          </button>
        </div>
      </div>

      {/* Search & Domain Filter Toolbar */}
      <div className="bg-slate-900/60 rounded-2xl p-4 md:p-6 border border-slate-800 mb-8 backdrop-blur-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search playbooks by metric, situation, action, or L6 principle..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills (10 Domains) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
          <button
            type="button"
            onClick={() => setSelectedDomainId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedDomainId === 'all'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-slate-800/70 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            <span>All Domains</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900/60 text-slate-300">
              {totalCardsCount}
            </span>
          </button>

          {domains.map((domain, index) => {
            const Icon = domainIcons[domain.icon] || FileText;
            const isSelected = selectedDomainId === domain.id;
            const count = domain.subCards?.length || 0;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomainId(domain.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-800/70 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{domain.shortName || domain.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900/60 text-slate-300">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Domains Presentation */}
      {filteredDomains.length === 0 ? (
        <div className="bg-slate-900/40 rounded-2xl p-12 text-center border border-slate-800">
          <FolderOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No matching playbooks found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms or selecting 'All Domains' to explore the full library.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredDomains.map((domain, index) => {
            const Icon = domainIcons[domain.icon] || FileText;
            const color = domainColors[index % domainColors.length];

            return (
              <div
                key={domain.id}
                className="bg-slate-900/30 rounded-2xl p-6 md:p-8 border border-slate-800/70 backdrop-blur-sm"
              >
                {/* Domain Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-emerald-400">
                          DOMAIN {domain.number}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-slate-400 font-mono">
                          {domain.subCards?.length || 0} Playbooks
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-400 max-w-md sm:text-right">
                    {domain.description}
                  </p>
                </div>

                {/* Subcards Grid (up to 10 subcards per domain) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(domain.subCards || []).map((card) => (
                    <BentoCard
                      key={card.id}
                      card={card}
                      color={color}
                      domainTitle={domain.title}
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
      )}
    </section>
  );
};

export default BentoDomainGrid;
