import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Users,
  Cpu,
  GraduationCap,
  Zap,
  Languages,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
  HeartHandshake,
  Maximize2,
  Minimize2,
  ArrowRight,
  Target,
  Compass,
} from 'lucide-react';
import {
  aboutHero as aboutHeroEN,
  functionalPillars as functionalPillarsEN,
  personalSide as personalSideEN,
} from '../data/about/en';
import {
  aboutHero as aboutHeroPT,
  functionalPillars as functionalPillarsPT,
  personalSide as personalSidePT,
} from '../data/about/pt';

const iconMap = {
  Users,
  Cpu,
  GraduationCap,
  Zap,
  Compass,
  Languages,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Target,
  Layers,
};

const pillarColorMap = {
  violet: {
    badge: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    border: 'border-violet-500/25 hover:border-violet-400/40',
    glow: 'from-violet-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-violet-400',
    subCardBg: 'bg-violet-950/15 border-violet-500/15',
    pill: 'bg-violet-400/10 hover:bg-violet-400/20 text-violet-200 border-violet-400/30',
  },
  cyan: {
    badge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
    border: 'border-cyan-500/25 hover:border-cyan-400/40',
    glow: 'from-cyan-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-cyan-400',
    subCardBg: 'bg-cyan-950/15 border-cyan-500/15',
    pill: 'bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-200 border-cyan-400/30',
  },
  emerald: {
    badge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    border: 'border-emerald-500/25 hover:border-emerald-400/40',
    glow: 'from-emerald-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-emerald-400',
    subCardBg: 'bg-emerald-950/15 border-emerald-500/15',
    pill: 'bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-200 border-emerald-400/30',
  },
};

const AboutMe = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const hero = isPt ? aboutHeroPT : aboutHeroEN;
  const pillars = isPt ? functionalPillarsPT : functionalPillarsEN;
  const personal = isPt ? personalSidePT : personalSideEN;

  // Active pillar filter tab
  const [activeTab, setActiveTab] = useState('all');

  // Track expanded cards by ID
  const [expandedCards, setExpandedCards] = useState({
    'origin-story': false,
    // Pillar 1
    'program-delivery-whyWorkWithMe': false,
    'program-delivery-workStyle': false,
    'program-delivery-partnerArchetypes': false,
    'program-delivery-strengthsAndGrowth': false,
    // Pillar 2
    'product-ai-strategy-whyWorkWithMe': false,
    'product-ai-strategy-workStyle': false,
    'product-ai-strategy-partnerArchetypes': false,
    'product-ai-strategy-strengthsAndGrowth': false,
    // Pillar 3
    'operational-enablement-whyWorkWithMe': false,
    'operational-enablement-workStyle': false,
    'operational-enablement-partnerArchetypes': false,
    'operational-enablement-strengthsAndGrowth': false,
    // Personal Side
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
    { id: 'all', label: isPt ? 'Todos os Pilares' : 'All Pillars' },
    ...pillars.map((p) => ({
      id: p.id,
      label: `${p.number} · ${p.title}`,
    })),
    { id: 'personal', label: isPt ? '04 · Além do Currículo' : '04 · Beyond the Resume' },
  ];

  const subSectionConfig = [
    {
      key: 'whyWorkWithMe',
      icon: Target,
      label: isPt ? 'Proposta de Valor' : 'Why Work With Me',
      expandLabel: isPt ? 'Ver métricas e impacto' : 'View proof & metrics',
      collapseLabel: isPt ? 'Recolher métricas' : 'Collapse proof',
    },
    {
      key: 'workStyle',
      icon: Zap,
      label: isPt ? 'Estilo de Trabalho' : 'Work Style & Habits',
      expandLabel: isPt ? 'Ver regras práticas' : 'View operating rules',
      collapseLabel: isPt ? 'Recolher regras' : 'Collapse rules',
    },
    {
      key: 'partnerArchetypes',
      icon: Users,
      label: isPt ? 'Perfis de Parceria' : 'Partner Archetypes',
      expandLabel: isPt ? 'Ver alinhamento por área' : 'View cross-org alignment',
      collapseLabel: isPt ? 'Recolher alinhamento' : 'Collapse alignment',
    },
    {
      key: 'strengthsAndGrowth',
      icon: ShieldCheck,
      label: isPt ? 'Superpoderes & Crescimento' : 'Strengths & Growth Edge',
      expandLabel: isPt ? 'Ver calibração e foco' : 'View growth calibration',
      collapseLabel: isPt ? 'Recolher calibração' : 'Collapse calibration',
    },
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

      {/* 3 CORE FUNCTIONAL PILLARS */}
      <div className="space-y-12">
        {pillars
          .filter((pillar) => activeTab === 'all' || activeTab === pillar.id)
          .map((pillar) => {
            const colors = pillarColorMap[pillar.color] || pillarColorMap.violet;

            return (
              <section
                key={pillar.id}
                id={pillar.id}
                className={`glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border ${colors.border} bg-gradient-to-br ${colors.glow} text-left space-y-8 transition-all shadow-2xl`}
              >
                {/* Pillar Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl sm:text-4xl p-2.5 rounded-2xl bg-white/5 border border-white/10 shrink-0" role="img" aria-label={pillar.title}>
                      {pillar.avatar}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                          {pillar.number} · {isPt ? 'Pilar Funcional' : 'Core Pillar'}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {pillar.title}
                      </h2>
                      <p className={`text-sm sm:text-base font-semibold ${colors.accentText}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Grasp Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-sm sm:text-base text-slate-200 leading-relaxed">
                  <span className="font-bold text-white block mb-1">
                    {isPt ? 'Resumo Executivo:' : 'Executive Summary:'}
                  </span>
                  {pillar.quickGrasp}
                </div>

                {/* 4 Internal Dimensions: 2x2 Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {subSectionConfig.map(({ key, icon: SubIcon, label, expandLabel, collapseLabel }) => {
                    const sectionData = pillar.sections[key];
                    if (!sectionData) return null;
                    const cardKey = `${pillar.id}-${key}`;
                    const isExpanded = expandedCards[cardKey];

                    return (
                      <div
                        key={key}
                        className={`glass-card rounded-2xl p-5 sm:p-6 border ${colors.subCardBg} flex flex-col justify-between transition-all hover:border-white/20`}
                      >
                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                                <SubIcon size={16} />
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                {label}
                              </span>
                            </div>
                            <button
                              onClick={() => toggleCard(cardKey)}
                              className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 transition-all cursor-pointer"
                              aria-expanded={isExpanded}
                            >
                              <span>{isExpanded ? collapseLabel : expandLabel}</span>
                              {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                            </button>
                          </div>

                          <h3 className="text-base font-bold text-white tracking-tight">
                            {sectionData.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {sectionData.text}
                          </p>
                        </div>

                        {/* Expandable Highlights / Evidence */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-white/10 space-y-2 bg-black/25 -mx-5 -mb-5 p-5 rounded-b-2xl">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                              {isPt ? 'Evidências & Ações Concretas' : 'Proven Levers & Concrete Impact'}
                            </span>
                            <ul className="space-y-2">
                              {sectionData.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                                  <CheckCircle2 size={14} className={`${colors.accentText} shrink-0 mt-0.5`} />
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

                {/* Proof Links Footer */}
                {pillar.proofLinks && pillar.proofLinks.length > 0 && (
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isPt ? 'Evidências & Casos Práticos:' : 'Enterprise Proof & Career Case Studies:'}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {pillar.proofLinks.map((link, idx) => {
                        const targetUrl = link.anchor ? `${link.to}#${link.anchor}` : link.to;

                        return (
                          <Link
                            key={idx}
                            to={targetUrl}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shadow-sm ${colors.pill}`}
                          >
                            <span>{link.label}</span>
                            <ArrowRight size={13} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
      </div>

      {/* SECTION 4: Beyond the Resume (Personal Side) */}
      {(activeTab === 'all' || activeTab === 'personal') && (
        <section className="space-y-6 text-left" id="personal-side">
          <div className="space-y-1.5">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
              04 · {isPt ? 'Além do Currículo' : 'Beyond the Resume'}
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
