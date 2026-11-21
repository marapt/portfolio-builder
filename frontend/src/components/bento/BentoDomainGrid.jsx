import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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

const domainThemeMap = {
  'content-operations': {
    color: 'sky',
    pillActive: 'bg-sky-600 text-white shadow-lg shadow-sky-500/25',
    boxBg: 'bg-gradient-to-br from-white via-sky-50/40 to-white',
    boxBorder: 'border-sky-200/80 hover:border-sky-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(14,165,233,0.08)]',
    ambientGlow: 'bg-sky-100/60',
    iconBadge: 'bg-sky-100 border-sky-200 text-sky-700',
    textAccent: 'text-sky-600',
  },
  'eval-feedback': {
    color: 'emerald',
    pillActive: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25',
    boxBg: 'bg-gradient-to-br from-white via-emerald-50/40 to-white',
    boxBorder: 'border-emerald-200/80 hover:border-emerald-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(16,185,129,0.08)]',
    ambientGlow: 'bg-emerald-100/60',
    iconBadge: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    textAccent: 'text-emerald-600',
  },
  'ai-data-training': {
    color: 'violet',
    pillActive: 'bg-violet-600 text-white shadow-lg shadow-violet-500/25',
    boxBg: 'bg-gradient-to-br from-white via-violet-50/40 to-white',
    boxBorder: 'border-violet-200/80 hover:border-violet-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(139,92,246,0.08)]',
    ambientGlow: 'bg-violet-100/60',
    iconBadge: 'bg-violet-100 border-violet-200 text-violet-700',
    textAccent: 'text-violet-600',
  },
  'testing-response': {
    color: 'rose',
    pillActive: 'bg-rose-600 text-white shadow-lg shadow-rose-500/25',
    boxBg: 'bg-gradient-to-br from-white via-rose-50/40 to-white',
    boxBorder: 'border-rose-200/80 hover:border-rose-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(244,63,94,0.08)]',
    ambientGlow: 'bg-rose-100/60',
    iconBadge: 'bg-rose-100 border-rose-200 text-rose-700',
    textAccent: 'text-rose-600',
  },
  'global-language': {
    color: 'indigo',
    pillActive: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25',
    boxBg: 'bg-gradient-to-br from-white via-indigo-50/40 to-white',
    boxBorder: 'border-indigo-200/80 hover:border-indigo-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(99,102,241,0.08)]',
    ambientGlow: 'bg-indigo-100/60',
    iconBadge: 'bg-indigo-100 border-indigo-200 text-indigo-700',
    textAccent: 'text-indigo-600',
  },
  'strategy-enablement': {
    color: 'amber',
    pillActive: 'bg-amber-600 text-white shadow-lg shadow-amber-500/25',
    boxBg: 'bg-gradient-to-br from-white via-amber-50/40 to-white',
    boxBorder: 'border-amber-200/80 hover:border-amber-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(245,158,11,0.08)]',
    ambientGlow: 'bg-amber-100/60',
    iconBadge: 'bg-amber-100 border-amber-200 text-amber-700',
    textAccent: 'text-amber-600',
  },
  'supplier-partner': {
    color: 'teal',
    pillActive: 'bg-teal-600 text-white shadow-lg shadow-teal-500/25',
    boxBg: 'bg-gradient-to-br from-white via-teal-50/40 to-white',
    boxBorder: 'border-teal-200/80 hover:border-teal-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(20,184,166,0.08)]',
    ambientGlow: 'bg-teal-100/60',
    iconBadge: 'bg-teal-100 border-teal-200 text-teal-700',
    textAccent: 'text-teal-600',
  },
  'operational-controls': {
    color: 'purple',
    pillActive: 'bg-purple-600 text-white shadow-lg shadow-purple-500/25',
    boxBg: 'bg-gradient-to-br from-white via-purple-50/40 to-white',
    boxBorder: 'border-purple-200/80 hover:border-purple-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(168,85,247,0.08)]',
    ambientGlow: 'bg-purple-100/60',
    iconBadge: 'bg-purple-100 border-purple-200 text-purple-700',
    textAccent: 'text-purple-600',
  },
  'finance-opex': {
    color: 'cyan',
    pillActive: 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25',
    boxBg: 'bg-gradient-to-br from-white via-cyan-50/40 to-white',
    boxBorder: 'border-cyan-200/80 hover:border-cyan-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(6,182,212,0.08)]',
    ambientGlow: 'bg-cyan-100/60',
    iconBadge: 'bg-cyan-100 border-cyan-200 text-cyan-700',
    textAccent: 'text-cyan-600',
  },
  'bi-telemetry': {
    color: 'blue',
    pillActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/25',
    boxBg: 'bg-gradient-to-br from-white via-blue-50/40 to-white',
    boxBorder: 'border-blue-200/80 hover:border-blue-300',
    boxShadow: 'shadow-[0_20px_50px_rgba(59,130,246,0.08)]',
    ambientGlow: 'bg-blue-100/60',
    iconBadge: 'bg-blue-100 border-blue-200 text-blue-700',
    textAccent: 'text-blue-600',
  },
};

export const BentoDomainGrid = ({
  domains,
  flippedCards,
  onToggleFlip,
  onFlipAll,
  onResetAll,
  allFlipped,
  onExpand,
}) => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');
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
            <span>
              {isPt
                ? `Arquitetura Tier 2 · ${domains.length} Domínios Especializados`
                : `Tier 2 Architecture · ${domains.length} Specialized Domains`}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Specialized Operational Domains
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Granular STAR cards spanning content pipelines, AI model evaluation, continuous vendor accountability, compliance controls, and unit economics.
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
            placeholder="Search STAR cards by metric, situation, action, or principle..."
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

        {/* Category Filter Pills (10 Domains with Topic-Specific Colors) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
          <button
            type="button"
            onClick={() => setSelectedDomainId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedDomainId === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-800/70 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            <span>All Domains</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900/60 text-slate-300">
              {totalCardsCount}
            </span>
          </button>

          {domains.map((domain) => {
            const Icon = domainIcons[domain.icon] || FileText;
            const isSelected = selectedDomainId === domain.id;
            const theme = domainThemeMap[domain.id] || domainThemeMap['content-operations'];
            const count = domain.subCards?.length || 0;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomainId(domain.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? theme.pillActive
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
          <h3 className="text-lg font-bold text-white mb-1">No matching STAR cards found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms or selecting 'All Domains' to explore the full library.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredDomains.map((domain) => {
            const Icon = domainIcons[domain.icon] || FileText;
            const theme = domainThemeMap[domain.id] || domainThemeMap['content-operations'];

            return (
              <div
                key={domain.id}
                className={`${theme.boxBg} rounded-3xl p-6 md:p-8 lg:p-10 border ${theme.boxBorder} ${theme.boxShadow} transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Subtle Themed Ambient Gradient */}
                <div className={`absolute top-0 right-0 w-96 h-96 ${theme.ambientGlow} rounded-full blur-3xl -z-10 pointer-events-none`} />

                {/* Domain Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-5 border-b border-gray-100">
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <div className={`p-3.5 rounded-2xl ${theme.iconBadge} shadow-sm shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs font-bold ${theme.textAccent} uppercase tracking-wider`}>
                          DOMAIN {domain.number}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-500 font-mono font-medium">
                          {domain.subCards?.length || 0} STAR Cards
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 text-left font-normal leading-relaxed max-w-xl xl:max-w-2xl [text-wrap:pretty]">
                    {domain.description}
                  </p>
                </div>

                {/* Subcards Grid (up to 10 subcards per domain) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(domain.subCards || []).map((card) => (
                    <BentoCard
                      key={card.id}
                      card={card}
                      color={theme.color}
                      domainTitle={domain.title}
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
      )}
    </section>
  );
};

export default BentoDomainGrid;
