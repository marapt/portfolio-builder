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
  ShieldCheck,
  CheckCircle2,
  Layers,
  HeartHandshake,
  Maximize2,
  Minimize2,
  ArrowRight,
  Target,
  Compass,
  Anchor,
  MessageSquare,
  Lightbulb,
  Handshake,
  Code2,
  TrendingUp,
  Workflow,
  Network,
  Globe,
} from 'lucide-react';
import {
  aboutHero as aboutHeroEN,
  functionalPillars as functionalPillarsEN,
  personalSide as personalSideEN,
  closingInvitation as closingInvitationEN,
} from '../data/about/en';
import {
  aboutHero as aboutHeroPT,
  functionalPillars as functionalPillarsPT,
  personalSide as personalSidePT,
  closingInvitation as closingInvitationPT,
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
  Anchor,
  MessageSquare,
  Lightbulb,
  Handshake,
  Code2,
  TrendingUp,
  Workflow,
  Network,
  Globe,
};

const pillarColorMap = {
  violet: {
    badge: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    iconBox: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
    border: 'border-violet-500/25 hover:border-violet-400/40',
    glow: 'from-violet-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-violet-400',
    subCardBg: 'bg-violet-950/15 border-violet-500/15',
    pill: 'bg-violet-400/10 hover:bg-violet-400/20 text-violet-200 border-violet-400/30',
  },
  cyan: {
    badge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
    iconBox: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
    border: 'border-cyan-500/25 hover:border-cyan-400/40',
    glow: 'from-cyan-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-cyan-400',
    subCardBg: 'bg-cyan-950/15 border-cyan-500/15',
    pill: 'bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-200 border-cyan-400/30',
  },
  emerald: {
    badge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    iconBox: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    border: 'border-emerald-500/25 hover:border-emerald-400/40',
    glow: 'from-emerald-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-emerald-400',
    subCardBg: 'bg-emerald-950/15 border-emerald-500/15',
    pill: 'bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-200 border-emerald-400/30',
  },
  amber: {
    badge: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
    iconBox: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    border: 'border-amber-500/25 hover:border-amber-400/40',
    glow: 'from-amber-950/25 via-slate-900/40 to-slate-950/40',
    accentText: 'text-amber-400',
    subCardBg: 'bg-amber-950/15 border-amber-500/15',
    pill: 'bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 border-amber-400/30',
  },
};

const AboutMe = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const hero = isPt ? aboutHeroPT : aboutHeroEN;
  const pillars = isPt ? functionalPillarsPT : functionalPillarsEN;
  const personal = isPt ? personalSidePT : personalSideEN;
  const closing = isPt ? closingInvitationPT : closingInvitationEN;

  // Active pillar filter tab
  const [activeTab, setActiveTab] = useState('all');

  // Track expanded cards by ID
  const [expandedCards, setExpandedCards] = useState({
    'origin-story': false,
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
    { id: 'why-work-with-me', label: isPt ? '01 · Porque Trabalhar Comigo' : '01 · Why Work With Me' },
    { id: 'work-style-habits', label: isPt ? '02 · Estilo de Trabalho' : '02 · Work Style & Habits' },
    { id: 'connections-presence', label: isPt ? '03 · Conexões & Presença' : '03 · Connections & Presence' },
    { id: 'value-and-leverage', label: isPt ? '04 · Valor & Alavancagem' : '04 · Value & Leverage' },
    { id: 'personal', label: isPt ? '05 · Além do Currículo' : '05 · Beyond the Resume' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Header & Executive Eyebrow */}
      <section className="space-y-6 pt-4 text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                {hero.eyebrow}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              {hero.titlePrimary && hero.titleSecondary ? (
                <>
                  <span className="block text-white">{hero.titlePrimary}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-1.5">
                    {hero.titleSecondary}
                  </span>
                </>
              ) : (
                hero.title
              )}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1 max-w-3xl">
              {hero.lead || hero.quickGrasp || hero.tagline}
            </p>
          </div>

          {/* Open to New Opportunities Neon Pill Banner & Quick Grasp Controls */}
          <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
            <a
              href="/#contact"
              aria-label={isPt ? 'Aberta a Novas Oportunidades - Entrar em Contacto' : 'Open to New Opportunities - Get in Touch'}
              className="group relative inline-flex rounded-full p-[2.5px] bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-[0_0_26px_rgba(34,211,238,0.45),0_0_52px_rgba(16,185,129,0.28)] hover:shadow-[0_0_34px_rgba(34,211,238,0.65),0_0_64px_rgba(16,185,129,0.42)] transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Subtle corner light flares */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 right-6 h-2.5 w-10 rounded-full bg-emerald-300/60 blur-md transition-opacity group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-6 h-2.5 w-10 rounded-full bg-cyan-300/60 blur-md transition-opacity group-hover:opacity-100"
              />

              {/* Inner dark channel */}
              <span className="inline-flex rounded-full bg-slate-950/95 p-[4px]">
                {/* Inner glass capsule */}
                <span className="inline-flex items-center gap-3.5 sm:gap-4 rounded-full border border-cyan-300/45 bg-gradient-to-br from-slate-800/90 via-slate-900/85 to-teal-950/80 px-5 py-2.5 sm:px-6 sm:py-3 shadow-[inset_0_1px_12px_rgba(52,211,153,0.18)] backdrop-blur-md">
                  {/* Neon Open Door + Arrow SVG Icon */}
                  <svg
                    viewBox="0 0 44 44"
                    className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-[0_0_8px_rgba(52,211,153,0.65)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="openDoorGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#6ee7b7" />
                        <stop offset="55%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    {/* Outer door frame (right side) */}
                    <path
                      d="M22 8H35C36.1 8 37 8.9 37 10V34C37 35.1 36.1 36 35 36H22"
                      stroke="url(#openDoorGrad)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Angled open door panel */}
                    <path
                      d="M17 9.5L28 5.5V38.5L17 34.5V9.5Z"
                      stroke="url(#openDoorGrad)"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                      fill="rgba(34, 211, 238, 0.08)"
                    />
                    {/* Door handle dot */}
                    <circle cx="24.5" cy="22" r="1.3" fill="#6ee7b7" />
                    {/* Entering arrow */}
                    <path
                      d="M4 22H18M18 22L13 17M18 22L13 27"
                      stroke="url(#openDoorGrad)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Glowing Two-Line Headline */}
                  <span className="flex flex-col text-left leading-[1.08] tracking-wider font-black uppercase text-white [text-shadow:0_0_12px_rgba(52,211,153,0.65),0_0_24px_rgba(34,211,238,0.35)]">
                    <span className="text-sm sm:text-base md:text-lg">
                      {isPt ? 'ABERTA A NOVAS' : 'OPEN TO NEW'}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      {isPt ? 'OPORTUNIDADES' : 'OPPORTUNITIES'}
                    </span>
                  </span>
                </span>
              </span>
            </a>

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

        {/* Foundational Story Section: Title Inside the Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-violet-950/20 text-left space-y-4 shadow-2xl">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400">
              <HeartHandshake size={14} />
              {isPt ? 'História de Origem' : 'Foundational Story'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {hero.originStory.title}
            </h2>
          </div>

          <div className="flex items-start justify-between gap-4 pt-1">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal flex-1">
              {hero.originStory.quickGrasp}
            </p>
            <button
              onClick={() => toggleCard('origin-story')}
              className="shrink-0 p-2 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-expanded={expandedCards['origin-story']}
              aria-label="Toggle origin story details"
            >
              {expandedCards['origin-story'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {expandedCards['origin-story'] && (
            <div className="pt-3 border-t border-white/10 text-sm text-cyan-100/90 leading-relaxed bg-cyan-950/30 rounded-2xl p-4">
              {hero.originStory.deepDive}
            </div>
          )}
        </div>

        {/* My Personality Traits Section: Title Inside the Box */}
        {hero.personalityTraits && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-slate-900/60 text-left space-y-6 shadow-2xl">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400">
                {hero.personalityTraits.eyebrow || 'MY PERSONALITY'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {hero.personalityTraits.title || 'How I Work, Lead & Collaborate'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed pt-0.5">
                {hero.personalityTraits.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
              {hero.personalityTraits.traits.map((trait, idx) => {
                const TraitIcon = iconMap[trait.icon] || Compass;
                return (
                  <div
                    key={trait.id || idx}
                    className="rounded-2xl p-5 sm:p-6 border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-cyan-400/30 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 shrink-0">
                          <TraitIcon size={18} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-cyan-200 tracking-tight group-hover:text-cyan-100 transition-colors">
                          {trait.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {trait.description}
                      </p>
                    </div>

                    {trait.l6Scope && (
                      <div className="pt-3 border-t border-white/5 text-[11px] font-medium text-slate-400 tracking-wide">
                        {trait.l6Scope}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Navigation Filter Pills */}
      <nav aria-label="About Sections" className="sticky top-24 z-30 pt-2 pb-3 backdrop-blur-xl bg-slate-950/70 border-y border-white/10 -mx-4 px-4 sm:mx-0 sm:px-3 sm:rounded-2xl">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth pr-8 sm:pr-4">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
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

      {/* 4 CORE FUNCTIONAL PILLARS */}
      <div className="space-y-12">
        {pillars
          .filter((pillar) => activeTab === 'all' || activeTab === pillar.id)
          .map((pillar) => {
            const colors = pillarColorMap[pillar.color] || pillarColorMap.violet;
            const PillarIcon = iconMap[pillar.icon] || Compass;

            return (
              <section
                key={pillar.id}
                id={pillar.id}
                className={`glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border ${colors.border} bg-gradient-to-br ${colors.glow} text-left space-y-8 transition-all shadow-2xl`}
              >
                {/* Pillar Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-2xl border ${colors.iconBox} shrink-0 shadow-sm`}
                      aria-hidden="true"
                    >
                      <PillarIcon size={26} />
                    </div>
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
                        {pillar.focus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Pillar Items: 3-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {pillar.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`glass-card rounded-2xl p-5 sm:p-6 border ${colors.subCardBg} flex flex-col justify-between transition-all hover:border-white/20`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5 min-h-[2.25rem]">
                          <span className={`text-xs font-black px-2 py-0.5 rounded-md border ${colors.badge} shrink-0 mt-0.5`}>
                            0{itemIdx + 1}
                          </span>
                          <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {item.description}
                        </p>

                        {/* Dedicated Growth Edge Callout if present */}
                        {item.growthEdge && (
                          <div className="mt-3 pt-3 border-t border-white/10 rounded-xl bg-white/[0.03] p-3 border border-white/5 space-y-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                              {isPt ? 'Área de Crescimento & Calibração' : 'Growth Edge & Calibration'}
                            </span>
                            <p className="text-xs text-slate-200 leading-relaxed font-medium italic">
                              "{item.growthEdge}"
                            </p>
                          </div>
                        )}
                      </div>

                      {/* If item has proofLinks (e.g. Pillar 04) */}
                      {item.proofLinks && item.proofLinks.length > 0 && (
                        <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {isPt ? 'Evidências no Percurso:' : 'Career Proof:'}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.proofLinks.map((link, linkIdx) => {
                              const targetUrl = link.anchor ? `${link.to}#${link.anchor}` : link.to;
                              return (
                                <Link
                                  key={linkIdx}
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
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
      </div>

      {/* SECTION 5: Beyond the Resume (Personal Side) */}
      {(activeTab === 'all' || activeTab === 'personal') && (
        <section
          id="personal-side"
          className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/25 hover:border-cyan-400/40 bg-gradient-to-br from-cyan-950/25 via-slate-900/40 to-slate-950/40 text-left space-y-8 transition-all shadow-2xl"
        >
          {/* Section Header Inside Box */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shrink-0 shadow-sm"
                aria-hidden="true"
              >
                <Globe size={26} />
              </div>
              <div className="space-y-1 max-w-3xl">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
                  05 · {isPt ? 'Além do Currículo' : 'Beyond the Resume'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {personal.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {personal.sectionSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {personal.pillars.map((item) => {
              const Icon = iconMap[item.icon] || Languages;
              const isExpanded = expandedCards[item.id];

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-cyan-400/30 flex flex-col justify-between transition-all"
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

      {/* SECTION 6: Closing Invitation / Let's Connect */}
      <section className="glass-card rounded-3xl p-7 sm:p-9 lg:p-10 border border-white/10 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-violet-950/30 text-left space-y-6 shadow-2xl">
        <div className="space-y-3 w-full">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400">
            {closing.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {closing.title}
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-0.5 w-full">
            {closing.leadParagraphs ? (
              closing.leadParagraphs.map((para, idx) => (
                <p key={idx} className="w-full [text-wrap:pretty]">
                  {para}
                </p>
              ))
            ) : (
              <p className="w-full [text-wrap:pretty]">{closing.lead}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {closing.actions.map((act, idx) =>
            act.primary ? (
              <a
                key={idx}
                href={act.to}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all"
              >
                <span>{act.label}</span>
                <ArrowRight size={14} />
              </a>
            ) : (
              <Link
                key={idx}
                to={act.to}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold border border-white/15 transition-all"
              >
                <span>{act.label}</span>
                <ArrowRight size={14} />
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
