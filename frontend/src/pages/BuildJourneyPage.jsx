import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  buildJourneyHero as heroEN,
  buildJourneyOwnership as ownershipEN,
  buildJourneyGuardrails as guardrailsEN,
  buildJourneyPillars as pillarsEN,
  buildJourneyMindset as mindsetEN,
} from '../data/buildJourney/en';
import {
  buildJourneyHero as heroPT,
  buildJourneyOwnership as ownershipPT,
  buildJourneyGuardrails as guardrailsPT,
  buildJourneyPillars as pillarsPT,
  buildJourneyMindset as mindsetPT,
} from '../data/buildJourney/pt';
import {
  Cpu,
  Code2,
  GitBranch,
  Globe,
  Cloud,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  ZoomIn,
  X,
  ArrowRight,
  Layers,
  FileText,
  Mail,
  Eye,
  UserCheck,
  Bot,
  RefreshCw,
} from 'lucide-react';

const toolIcons = {
  'antigravity-ai': Cpu,
  'visual-studio-code': Code2,
  'github-cicd': GitBranch,
  'crowdin-localization': Globe,
  'vercel-cloud': Cloud,
};

const pillarThemes = {
  violet: {
    border: 'border-violet-500/30 hover:border-violet-500/60',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    glow: 'from-violet-500/10 via-purple-500/5 to-transparent',
    iconBg: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    accent: 'text-violet-400',
    btn: 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-500/25',
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500/60',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glow: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    iconBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    accent: 'text-blue-400',
    btn: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    accent: 'text-emerald-400',
    btn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25',
  },
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'from-cyan-500/10 via-sky-500/5 to-transparent',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    accent: 'text-cyan-400',
    btn: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-500/25',
  },
  amber: {
    border: 'border-amber-500/30 hover:border-amber-500/60',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'from-amber-500/10 via-orange-500/5 to-transparent',
    iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    accent: 'text-amber-400',
    btn: 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-500/25',
  },
};

const BuildJourneyPage = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const hero = isPt ? heroPT : heroEN;
  const ownership = isPt ? ownershipPT : ownershipEN;
  const guardrails = isPt ? guardrailsPT : guardrailsEN;
  const pillars = isPt ? pillarsPT : pillarsEN;
  const mindset = isPt ? mindsetPT : mindsetEN;

  const [selectedPillarId, setSelectedPillarId] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = isPt
      ? 'Como Construí Este Portfólio com IA | Mara Martins'
      : 'How I Built This Portfolio Leveraging AI | Mara Martins';
  }, [isPt]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImage]);

  const visiblePillars =
    selectedPillarId === 'all'
      ? pillars
      : pillars.filter((p) => p.id === selectedPillarId);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-indigo-500/30">
      <Header />

      <main className="flex-1 pt-28 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 p-8 md:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
                {hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 text-xl sm:text-3xl mt-2 font-bold">
                  {hero.subheading}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {hero.subtitle}
              </p>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {(hero.quickStats || []).map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-center"
                  >
                    <span className="block text-sm sm:text-base font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Action Navigation */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/experiences"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                >
                  <Layers className="w-4 h-4" />
                  <span>{isPt ? 'Ver Modelos STAR' : 'Explore STAR Cards'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/career"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 bg-slate-900/80 hover:bg-slate-850 text-slate-200 border border-slate-700/80 shadow-md"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>{isPt ? 'Carreira e Liderança' : 'Career Timeline'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OWNERSHIP BOUNDARIES: WHAT I OWNED VS WHAT AUTOMATION EXECUTED */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{ownership.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {ownership.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {ownership.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Human Owned Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 border border-indigo-500/30 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {ownership.humanOwned.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                        {ownership.humanOwned.subtitle}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {ownership.humanOwned.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-indigo-500/20 text-xs font-semibold text-indigo-300">
                  {isPt ? 'Princípio: Decisões de arquitetura e qualidade são sempre humanas.' : 'Principle: Architectural decisions and quality approvals remain strictly human.'}
                </div>
              </div>

              {/* AI Executed Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-950 border border-slate-700/60 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                      <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {ownership.aiExecuted.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        {ownership.aiExecuted.subtitle}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {ownership.aiExecuted.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <Bot className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-slate-400">
                  {isPt ? 'Princípio: Automação acelera a prototipagem sem comprometer o controlo.' : 'Principle: Automation accelerates throughput without bypassing governance gates.'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW FILTER TOOLBAR */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {isPt ? 'Pilares do Fluxo de Engenharia' : 'Engineering Workflow Pillars'}:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedPillarId('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedPillarId === 'all'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                {isPt ? `Todos os Pilares (${pillars.length})` : `All Pillars (${pillars.length})`}
              </button>

              {pillars.map((p) => {
                const Icon = toolIcons[p.id] || Cpu;
                const isSelected = selectedPillarId === p.id;
                const theme = pillarThemes[p.color] || pillarThemes.violet;

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPillarId(p.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? theme.btn
                        : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{p.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PILLARS SHOWCASE GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 mb-20">
          {visiblePillars.map((pillar) => {
            const Icon = toolIcons[pillar.id] || Cpu;
            const theme = pillarThemes[pillar.color] || pillarThemes.violet;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`rounded-3xl bg-slate-900/70 border ${theme.border} p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all duration-300`}
              >
                {/* Pillar Ambient Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${theme.glow} rounded-full blur-3xl pointer-events-none`}
                />

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`p-3.5 rounded-2xl ${theme.iconBg} shadow-sm shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                          PILLAR {pillar.number}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${theme.badge}`}>
                          {pillar.badge}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-slate-400 font-medium">
                          {pillar.tool}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content Layout: Screenshot on one side, Detailed Story on the other */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Interactive Visual Screenshot */}
                  <div className="lg:col-span-6 space-y-3">
                    <div
                      className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl cursor-pointer"
                      onClick={() =>
                        setModalImage({
                          src: pillar.image,
                          title: pillar.title,
                          tool: pillar.tool,
                          alt: pillar.imageAlt,
                        })
                      }
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover Overlay with Zoom Prompt */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
                        <span className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                          <ZoomIn className="w-4 h-4" />
                          <span>{isPt ? 'Clique para Ampliar' : 'Click to Enlarge'}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{pillar.tool}</span>
                      </span>
                      <span className="italic">{isPt ? 'Ambiente Real de Trabalho' : 'Production Workspace Snapshot'}</span>
                    </div>
                  </div>

                  {/* Right Column: Execution Details & Takeaways */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Summary */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {isPt ? 'Visão Geral & Desafio' : 'Overview & Architecture'}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                        {pillar.summary}
                      </p>
                    </div>

                    {/* Skills & Craft Mastered */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{isPt ? 'Competências de Programação e Métodos Adquiridos' : 'Code Craft & Skills Mastered'}</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {pillar.skillsLearned.map((skill, sIdx) => (
                          <li
                            key={sIdx}
                            className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Execution Details */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {isPt ? 'Como Foi Executado' : 'Execution Deep Dive'}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {pillar.executionDetails}
                      </p>
                    </div>

                    {/* Executive Takeaway */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950/20 to-slate-950 border border-indigo-500/20">
                      <div className="flex items-center gap-2 mb-2 text-indigo-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {isPt ? 'Perspetiva de Senior Program Manager' : 'Executive Program Manager Takeaway'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-indigo-100 font-medium leading-relaxed italic">
                        "{pillar.executiveTakeaway}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* FAILURE MODES, GUARDRAILS & REVERSIBLE ROLLOUTS */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{guardrails.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                {guardrails.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {guardrails.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guardrails.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span className="text-xs uppercase tracking-wider font-bold">
                        {isPt ? `Risco Antecipado 0${idx + 1}` : `Failure Mode 0${idx + 1}`}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-rose-300/80 leading-relaxed">
                      <span className="font-semibold text-rose-400">{isPt ? 'Risco:' : 'Risk:'} </span>
                      {item.risk}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <span className="font-semibold text-emerald-400">{isPt ? 'Salvaguarda:' : 'Guardrail:'} </span>
                      {item.guardrail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-indigo-300 font-medium">
                    <span className="text-slate-400">{isPt ? 'Resultado:' : 'Outcome:'} </span>
                    {item.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXECUTIVE MINDSET & LEADERSHIP SYNTHESIS */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>{mindset.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                {mindset.title}
              </h2>
              <blockquote className="text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-4 py-1">
                "{mindset.quote}"
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mindset.pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {isPt
                  ? 'Gostaria de ver estes sistemas operacionais em ação?'
                  : 'Interested in exploring the operational systems in detail?'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {isPt
                  ? 'Explore os 7 Pilares Estratégicos e os 26 Cartões STAR com dados de impacto comprovado em empresas como Microsoft, Block e LinkedIn.'
                  : 'Explore the 7 Strategic Pillars and 26 STAR Framework cards with real metric achievements delivered at Microsoft, Block, and LinkedIn.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/experiences"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>{isPt ? 'Explorar Experiências STAR' : 'Explore STAR Experiences'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/#contact"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{isPt ? 'Fale Comigo' : 'Get in Touch'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX / ZOOM MODAL */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
            onClick={() => setModalImage(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                    {modalImage.tool}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {modalImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalImage(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
                <img
                  src={modalImage.src}
                  alt={modalImage.alt || modalImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-slate-800/80"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BuildJourneyPage;
