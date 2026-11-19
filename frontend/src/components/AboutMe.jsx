import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Compass,
  Users,
  TrendingUp,
  Cpu,
  GraduationCap,
  Zap,
  MessageSquare,
  Languages,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Layers,
  HeartHandshake,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import {
  aboutHero as aboutHeroEN,
  whyHireMe as whyHireMeEN,
  workStyle as workStyleEN,
  partnerArchetypes as partnerArchetypesEN,
  superpowersAndGrowth as superpowersAndGrowthEN,
  personalSide as personalSideEN,
} from '../data/about/en';
import {
  aboutHero as aboutHeroPT,
  whyHireMe as whyHireMePT,
  workStyle as workStylePT,
  partnerArchetypes as partnerArchetypesPT,
  superpowersAndGrowth as superpowersAndGrowthPT,
  personalSide as personalSidePT,
} from '../data/about/pt';

const iconMap = {
  Users,
  TrendingUp,
  Cpu,
  GraduationCap,
  Zap,
  MessageSquare,
  Compass,
  Languages,
  BookOpen,
};

const AboutMe = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const hero = isPt ? aboutHeroPT : aboutHeroEN;
  const why = isPt ? whyHireMePT : whyHireMeEN;
  const style = isPt ? workStylePT : workStyleEN;
  const archetypes = isPt ? partnerArchetypesPT : partnerArchetypesEN;
  const superpowers = isPt ? superpowersAndGrowthPT : superpowersAndGrowthEN;
  const personal = isPt ? personalSidePT : personalSideEN;

  // Active section filter tabs
  const [activeTab, setActiveTab] = useState('all');

  // Track expanded cards by ID
  const [expandedCards, setExpandedCards] = useState({
    'origin-story': false,
    'extended-workforce': false,
    'scaling-orgs': false,
    'technical-modernization': false,
    'bridge-academia': false,
    'friction-removal': false,
    'signal-over-noise': false,
    'telemetry-judgment': false,
    engineering: false,
    'finance-legal': false,
    'product-growth': false,
    'vendors-extended': false,
    'ambiguity-to-structure': false,
    'technical-translation': false,
    'calibrated-weakness': false,
    'polyglot-cultural': false,
    'lifelong-learning': false,
    'mentorship-community': false,
  });

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const areAllExpanded = Object.values(expandedCards).every(Boolean);

  const toggleAll = () => {
    const nextState = !areAllExpanded;
    const updated = {};
    Object.keys(expandedCards).forEach((key) => {
      updated[key] = nextState;
    });
    setExpandedCards(updated);
  };

  const navTabs = [
    { id: 'all', label: isPt ? 'Visão Geral' : 'All Sections' },
    { id: 'why', label: isPt ? 'Porque Colaborar' : 'Why Work With Me' },
    { id: 'style', label: isPt ? 'Estilo de Trabalho' : 'Work Style & Habits' },
    { id: 'archetypes', label: isPt ? 'Parcerias & Perfis' : 'Partner Archetypes' },
    { id: 'superpowers', label: isPt ? 'Superpoderes' : 'Strengths & Growth' },
    { id: 'personal', label: isPt ? 'Lado Pessoal' : 'Personal Journey' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Header & Executive Eyebrow */}
      <section className="space-y-6 pt-4 text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              <Sparkles size={14} aria-hidden="true" />
              {hero.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {hero.title}
            </h1>
            <p className="text-cyan-300/90 text-base sm:text-lg font-medium leading-relaxed">
              {hero.tagline}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              {hero.quickGrasp}
            </p>
          </div>

          {/* Quick Grasp Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-lg backdrop-blur-md cursor-pointer"
              aria-label={areAllExpanded ? 'Collapse all card details' : 'Expand all card details'}
            >
              {areAllExpanded ? (
                <>
                  <Minimize2 size={14} className="text-cyan-400" />
                  {isPt ? 'Recolher Detalhes' : 'Collapse All Details'}
                </>
              ) : (
                <>
                  <Maximize2 size={14} className="text-cyan-400" />
                  {isPt ? 'Expandir Todos os Detalhes' : 'Expand All Details'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Executive Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left transition-all hover:border-cyan-400/30"
            >
              <div className="text-lg sm:text-xl font-black text-cyan-300 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Origin Story Card: Expandable */}
        <div className="glass-card rounded-3xl p-6 sm:p-7 border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-transparent to-violet-950/20 text-left space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                <HeartHandshake size={13} />
                {isPt ? 'História de Origem' : 'Foundational Story'}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                {hero.originStory.title}
              </h2>
            </div>
            <button
              onClick={() => toggleCard('origin-story')}
              className="shrink-0 p-2 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-expanded={expandedCards['origin-story']}
              aria-label="Toggle origin story details"
            >
              {expandedCards['origin-story'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {hero.originStory.quickGrasp}
          </p>

          {expandedCards['origin-story'] && (
            <div className="pt-3 border-t border-white/10 text-sm text-cyan-100/90 leading-relaxed bg-cyan-950/30 rounded-2xl p-4">
              {hero.originStory.deepDive}
            </div>
          )}
        </div>
      </section>

      {/* Navigation Filter Pills */}
      <nav aria-label="About Sections" className="sticky top-24 z-30 pt-2 pb-3 backdrop-blur-xl bg-slate-950/60 border-y border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-2xl">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* SECTION 1: Why Work With Me */}
      {(activeTab === 'all' || activeTab === 'why') && (
        <section className="space-y-6 text-left" id="why-work-with-me">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
              01 · {isPt ? 'Proposta Executiva' : 'Executive Value Proposition'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {why.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {why.quickGrasp}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {why.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Users;
              const isExpanded = expandedCards[pillar.id];

              return (
                <div
                  key={pillar.id}
                  className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between transition-all hover:border-cyan-400/30"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                          <Icon size={20} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                          {pillar.tag}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleCard(pillar.id)}
                        className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-400/40 bg-white/5 transition-all cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <>
                            {isPt ? 'Fechar' : 'Close'} <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            {isPt ? 'Detalhes' : 'Deep Dive'} <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.quickGrasp}
                    </p>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-white/10 space-y-2.5 bg-black/20 -mx-6 -mb-6 p-6 rounded-b-3xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {isPt ? 'Evidências & Impacto em Produção' : 'Proven Levers & Enterprise Metrics'}
                      </span>
                      <ul className="space-y-2 pt-1">
                        {pillar.deepDive.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 2: Work Style & Operating Habits */}
      {(activeTab === 'all' || activeTab === 'style') && (
        <section className="space-y-6 text-left" id="work-style">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-violet-400">
              02 · {isPt ? 'Hábitos e Ritmo' : 'Operating Rhythm & Habits'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {style.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {style.corePhilosophy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {style.principles.map((principle) => {
              const Icon = iconMap[principle.icon] || Zap;
              const isExpanded = expandedCards[principle.id];

              return (
                <div
                  key={principle.id}
                  className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between transition-all hover:border-violet-400/30"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-violet-400/10 border border-violet-400/20 text-violet-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400 px-2.5 py-1 rounded-full bg-violet-400/10 border border-violet-400/20">
                        {principle.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight">
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {principle.quickGrasp}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleCard(principle.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-violet-300 hover:text-white py-1 transition-all cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? (isPt ? 'Recolher detalhes' : 'Collapse details') : (isPt ? 'Ver regras práticas' : 'View operating rules')}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2 pt-3 border-t border-white/10 text-xs text-slate-300">
                        {principle.deepDive.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-violet-400 mt-0.5">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 3: How I Partner Across Personalities */}
      {(activeTab === 'all' || activeTab === 'archetypes') && (
        <section className="space-y-6 text-left" id="partner-archetypes">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
              03 · {isPt ? 'Colaboração Multifuncional' : 'Cross-Functional Partnership'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {archetypes.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {archetypes.premise}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {archetypes.archetypes.map((arch) => {
              const isExpanded = expandedCards[arch.id];
              const borderColors = {
                cyan: 'hover:border-cyan-400/40',
                emerald: 'hover:border-emerald-400/40',
                violet: 'hover:border-violet-400/40',
                amber: 'hover:border-amber-400/40',
              };

              return (
                <div
                  key={arch.id}
                  className={`glass-card rounded-3xl p-6 sm:p-7 border border-white/10 transition-all ${borderColors[arch.color] || 'hover:border-cyan-400/30'} flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" role="img" aria-label={arch.name}>
                          {arch.avatar}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {arch.name}
                          </h3>
                          <span className="text-xs text-slate-400 font-medium">
                            {arch.roleContext}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {arch.tag}
                      </span>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">
                        {isPt ? 'Incentivo Principal & Ceticismo:' : 'Underlying Pressure & Concern:'}
                      </strong>
                      {arch.quickGrasp}
                    </div>

                    <div className="text-xs sm:text-sm text-cyan-200/90 font-medium">
                      <span className="text-slate-400 font-bold">{isPt ? 'Como Adapto:' : 'How I Adapt:'} </span>
                      {arch.approach}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleCard(arch.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-cyan-300 hover:text-white py-1 transition-all cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? (isPt ? 'Recolher táticas & exemplo' : 'Collapse tactics & example')
                          : (isPt ? 'Ver táticas concretas & citação' : 'View concrete tactics & quote')}
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 space-y-3.5 pt-3 border-t border-white/10">
                        <ul className="space-y-2 text-xs text-slate-300">
                          {arch.tactics.map((tactic, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                              <span>{tactic}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-black/30 rounded-xl p-3.5 border-l-2 border-cyan-400 text-xs italic text-slate-300 leading-relaxed flex items-start gap-2">
                          <Quote size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{arch.quote}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 4: Superpowers & Growth Edge */}
      {(activeTab === 'all' || activeTab === 'superpowers') && (
        <section className="space-y-6 text-left" id="superpowers">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
              04 · {isPt ? 'Autoconhecimento Executivo' : 'Executive Self-Awareness'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {superpowers.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {superpowers.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Strengths */}
            {superpowers.strengths.map((str) => {
              const isExpanded = expandedCards[str.id];

              return (
                <div
                  key={str.id}
                  className="glass-card rounded-3xl p-6 sm:p-7 border border-emerald-500/20 bg-emerald-950/10 flex flex-col justify-between transition-all hover:border-emerald-400/40"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                        <ShieldCheck size={12} />
                        {str.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {str.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {str.quickGrasp}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleCard(str.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-emerald-300 hover:text-white py-1 transition-all cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded ? (isPt ? 'Recolher exemplos' : 'Collapse proof') : (isPt ? 'Ver exemplos em escala' : 'View scale proof')}
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2 pt-3 border-t border-white/10 text-xs text-slate-300">
                        {str.deepDive.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Calibrated Weakness / Growth Edge */}
            {(() => {
              const weak = superpowers.weakness;
              const isExpanded = expandedCards[weak.id];

              return (
                <div className="glass-card rounded-3xl p-6 sm:p-7 border border-amber-500/25 bg-amber-950/10 flex flex-col justify-between transition-all hover:border-amber-400/40">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                        <Layers size={12} />
                        {weak.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {weak.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {weak.quickGrasp}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleCard(weak.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-amber-300 hover:text-white py-1 transition-all cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded ? (isPt ? 'Recolher calibração' : 'Collapse calibration') : (isPt ? 'Ver calibração e resultado' : 'View calibration & outcome')}
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2 pt-3 border-t border-white/10 text-xs text-slate-300">
                        {weak.deepDive.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* SECTION 5: The Personal Side */}
      {(activeTab === 'all' || activeTab === 'personal') && (
        <section className="space-y-6 text-left" id="personal-side">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
              05 · {isPt ? 'Além do Currículo' : 'Beyond the Resume'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {personal.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {personal.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {personal.pillars.map((item) => {
              const Icon = iconMap[item.icon] || Languages;
              const isExpanded = expandedCards[item.id];

              return (
                <div
                  key={item.id}
                  className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between transition-all hover:border-cyan-400/30"
                >
                  <div className="space-y-3.5">
                    <div className="p-2.5 w-fit rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.quickGrasp}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleCard(item.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-cyan-300 hover:text-white py-1 transition-all cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? (isPt ? 'Recolher detalhes' : 'Collapse narrative') : (isPt ? 'Ver história pessoal' : 'View personal story')}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutMe;
