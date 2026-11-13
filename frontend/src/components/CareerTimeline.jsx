import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Archive,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Compass,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
  Plane,
  Sparkles,
} from 'lucide-react';
import { useCareerData } from '../data/career';
import MetricBadge from './MetricBadge';

const ACADEMIC_VISUAL = {
  chip: 'border-violet-400/45 bg-violet-500/15 text-violet-100',
  chipHover: 'hover:bg-violet-500/20 hover:border-violet-300/60',
  chipSelected:
    '!border-violet-300 bg-violet-500/25 shadow-[0_0_24px_rgba(167,139,250,0.24)] ring-1 ring-violet-300/60',
  chipUnderline: 'bg-violet-300',
  iconBox: 'border-violet-400/35 bg-violet-500/15',
  mobile: 'border-violet-400/35 bg-violet-500/[0.08] text-violet-100 hover:bg-violet-500/15',
  mobileSelected: 'border-violet-300 bg-violet-500/20 text-white border-l-4',
  detailBox: 'border-violet-400/45 bg-violet-500/15 text-violet-100 shadow-inner',
  labelText: 'text-violet-300',
  railYearActive:
    'bg-violet-500/40 text-white border border-violet-300 font-extrabold shadow-[0_0_16px_rgba(167,139,250,0.42)] ring-1 ring-violet-300/60',
  railBar: 'bg-violet-300',
};

const WORK_VISUAL = {
  chip: 'border-white/20 bg-white/[0.05] text-white',
  chipHover: 'hover:bg-white/[0.1] hover:border-white/35',
  chipSelected:
    '!border-cyan-300 bg-white/[0.14] shadow-[0_0_24px_rgba(34,211,238,0.22)] ring-1 ring-cyan-300/60',
  chipUnderline: 'bg-cyan-300',
  iconBox: 'border-white/15 bg-white/[0.08]',
  mobile: 'border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08]',
  mobileSelected: 'border-cyan-300 bg-cyan-400/15 text-white border-l-4',
  detailBox: 'border-cyan-400/35 bg-gradient-to-br from-slate-900/90 to-slate-800/80 text-white shadow-inner',
  labelText: 'text-cyan-300',
  railYearActive:
    'bg-cyan-400/35 text-white border border-cyan-300 font-extrabold shadow-[0_0_16px_rgba(34,211,238,0.38)] ring-1 ring-cyan-300/60',
  railBar: 'bg-cyan-300',
};

const TYPE_VISUALS = {
  internship: ACADEMIC_VISUAL,
  milestone: ACADEMIC_VISUAL,
  group: WORK_VISUAL,
  role: WORK_VISUAL,
  break: {
    chip: 'border-dashed border-amber-400/55 bg-amber-500/15 text-amber-100',
    chipHover: 'hover:bg-amber-500/20 hover:border-amber-300/70',
    chipSelected:
      '!border-amber-300 bg-amber-500/25 shadow-[0_0_24px_rgba(251,191,36,0.22)] ring-1 ring-amber-300/60',
    chipUnderline: 'bg-amber-300',
    iconBox: 'border-dashed border-amber-400/40 bg-amber-500/15',
    mobile: 'border-dashed border-amber-400/40 bg-amber-500/[0.08] text-amber-100 hover:bg-amber-500/15',
    mobileSelected: 'border-dashed border-amber-300 bg-amber-500/20 text-white border-l-4',
    detailBox: 'border-dashed border-amber-400/55 bg-amber-500/15 text-amber-200',
    labelText: 'text-amber-300',
    railYearActive:
      'bg-amber-400/35 text-white border border-amber-300 font-extrabold shadow-[0_0_16px_rgba(251,191,36,0.38)] ring-1 ring-amber-300/60',
    railBar: 'bg-amber-300',
  },
  future: {
    chip: 'border-dashed border-emerald-400/50 bg-emerald-500/10 text-emerald-100',
    chipHover: 'hover:bg-emerald-500/15 hover:border-emerald-300/65',
    chipSelected:
      '!border-emerald-300 bg-emerald-500/20 shadow-[0_0_24px_rgba(52,211,153,0.22)] ring-1 ring-emerald-300/60',
    chipUnderline: 'bg-emerald-300',
    iconBox: 'border-dashed border-emerald-400/35 bg-emerald-500/10',
    mobile: 'border-dashed border-emerald-400/35 bg-emerald-500/[0.07] text-emerald-100 hover:bg-emerald-500/15',
    mobileSelected: 'border-dashed border-emerald-300 bg-emerald-500/20 text-white border-l-4',
    detailBox: 'border-dashed border-emerald-400/50 bg-emerald-500/10 text-emerald-200',
    labelText: 'text-emerald-300',
    railYearActive:
      'bg-emerald-400/35 text-white border border-emerald-300 font-extrabold shadow-[0_0_16px_rgba(52,211,153,0.38)] ring-1 ring-emerald-300/60',
    railBar: 'bg-emerald-300',
  },
};

const getTypeVisual = (type) => TYPE_VISUALS[type] || WORK_VISUAL;

const TYPE_LABELS = {
  internship: 'Internship',
  milestone: 'Academic Milestone',
  group: 'Career Track',
  break: 'Relocation & Transition',
  role: 'Industry Role',
  future: 'Future Horizon (Placeholder)',
};

const CareerTimeline = () => {
  const { pillars, pillarMeta, railYears, futureYears, timelineItems, isFallbackLanguage } =
    useCareerData();

  const [activePillar, setActivePillar] = useState('all');
  const [showFuture, setShowFuture] = useState(true);
  const [selectedId, setSelectedId] = useState('apple-2026');
  const [showHowBuilt, setShowHowBuilt] = useState(false);
  const [showFoundationsBreakdown, setShowFoundationsBreakdown] = useState(true);
  const [brokenLogos, setBrokenLogos] = useState({});
  const [brokenSnapshots, setBrokenSnapshots] = useState({});

  const markLogoBroken = (id) => {
    setBrokenLogos((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const markSnapshotBroken = (id) => {
    setBrokenSnapshots((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const renderLogoOrMonogram = (item, imgClassName, textClassName = '', planeSize = 15) => {
    if (item.logo && !brokenLogos[item.id]) {
      return (
        <img
          src={`${process.env.PUBLIC_URL || ''}${item.logo}`}
          alt=""
          aria-hidden="true"
          onError={() => markLogoBroken(item.id)}
          className={imgClassName}
        />
      );
    }
    if (item.type === 'break') {
      return <Plane size={planeSize} className="text-amber-200" aria-hidden="true" />;
    }
    return <span className={textClassName}>{item.monogram}</span>;
  };

  const tabRefs = useRef({});
  const panelRef = useRef(null);

  const visibleItems = useMemo(
    () => (showFuture ? timelineItems : timelineItems.filter((item) => item.type !== 'future')),
    [showFuture, timelineItems]
  );

  const selectedIndex = useMemo(() => {
    const idx = visibleItems.findIndex((item) => item.id === selectedId);
    return idx >= 0 ? idx : Math.max(0, visibleItems.findIndex((item) => item.id === 'apple-2026'));
  }, [visibleItems, selectedId]);

  const selectedItem = visibleItems[selectedIndex] || visibleItems[0];
  const selectedVisual = getTypeVisual(selectedItem?.type);

  useEffect(() => {
    if (!showFuture && selectedItem?.type === 'future') {
      setSelectedId('apple-2026');
    }
  }, [showFuture, selectedItem]);

  useEffect(() => {
    const activeTab = tabRefs.current[selectedItem?.id];
    if (activeTab && typeof activeTab.scrollIntoView === 'function') {
      activeTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [selectedItem?.id]);

  const itemMatchesPillar = (item) =>
    activePillar === 'all' || (Array.isArray(item.pillars) && item.pillars.includes(activePillar));

  const isYearInSelectedRange = (year) => {
    if (!selectedItem || typeof year !== 'number') return false;
    return year >= selectedItem.startYear && year <= selectedItem.endYear;
  };

  const selectByIndex = (nextIndex, focusTab = false) => {
    const bounded = Math.max(0, Math.min(visibleItems.length - 1, nextIndex));
    const target = visibleItems[bounded];
    if (!target) return;
    setSelectedId(target.id);
    if (focusTab) {
      requestAnimationFrame(() => {
        tabRefs.current[target.id]?.focus();
      });
    }
  };

  const handleTabKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        selectByIndex((index + 1) % visibleItems.length, true);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        selectByIndex((index - 1 + visibleItems.length) % visibleItems.length, true);
        break;
      case 'Home':
        event.preventDefault();
        selectByIndex(0, true);
        break;
      case 'End':
        event.preventDefault();
        selectByIndex(visibleItems.length - 1, true);
        break;
      default:
        break;
    }
  };

  const handleMobileSelect = (id) => {
    setSelectedId(id);
    panelRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'nearest' });
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      selectByIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < visibleItems.length - 1) {
      selectByIndex(selectedIndex + 1);
    }
  };

  return (
    <section
      aria-labelledby="career-timeline-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
    >
      {/* Header & Controls */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              <Compass size={14} aria-hidden="true" />
              2006 – 2026 &amp; Beyond · Career Arc
            </div>
            <h1
              id="career-timeline-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            >
              Interactive Career Timeline
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore 20+ years from internships at RTP and EU DGT, roles at Sony Portugal, Sony UK,
              and Hogarth Worldwide in London — spanning relocations from Portugal to the UK (2007)
              and UK to Silicon Valley (2014), AI governance, and what comes next.
            </p>
          </div>

          {/* Future Horizon Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              aria-pressed={showFuture}
              onClick={() => setShowFuture((prev) => !prev)}
              className={`inline-flex items-center gap-2 min-h-[40px] rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                showFuture
                  ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-100'
                  : 'border-white/20 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {showFuture ? (
                <Eye size={15} aria-hidden="true" />
              ) : (
                <EyeOff size={15} aria-hidden="true" />
              )}
              Future Horizon (2027–2029+): {showFuture ? 'Shown' : 'Hidden'}
            </button>
          </div>
        </div>

        {isFallbackLanguage && (
          <div
            role="status"
            className="mt-4 rounded-xl border border-amber-400/35 bg-amber-500/10 px-4 py-2.5 text-xs text-amber-100"
          >
            Portuguese translation for the Career Timeline is scheduled for Phase 3; currently displaying
            the English prototype.
          </div>
        )}

        {/* Pillar Filters */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Filter by Leadership Pillar (dims non-matching nodes)
            </span>
            <span className="text-xs text-slate-400">
              Use <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-200">←</kbd>{' '}
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-200">→</kbd> or{' '}
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-200">Prev</kbd> /{' '}
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-200">Next</kbd> to step through
            </span>
          </div>

          <div
            role="group"
            aria-label="Filter career timeline by competency pillar"
            className="flex flex-wrap gap-2"
          >
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`relative min-h-[38px] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    isActive
                      ? 'border-cyan-300 bg-cyan-400/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.22)] underline decoration-cyan-300 decoration-2 underline-offset-4'
                      : 'border-white/15 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {pillar.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Continuous Year Rail (2006–2026 + Future) */}
      <div className="hidden md:block glass-card rounded-3xl p-6 border border-white/10 space-y-4">
        {/* Continuous Year Axis */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            <span>Continuous Chronology (2006 – 2026)</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span className="inline-block h-2 w-4 rounded-sm border border-white/30 bg-white/15" />
                Work Role
              </span>
              <span className="inline-flex items-center gap-1.5 text-violet-200">
                <span className="inline-block h-2 w-4 rounded-sm border border-violet-400/70 bg-violet-500/30" />
                Academic &amp; Internship
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-200">
                <span className="inline-block h-2 w-4 rounded-sm border border-dashed border-amber-400/80 bg-amber-400/25" />
                2007 &amp; 2014 Relocations
              </span>
              {showFuture && (
                <span className="inline-flex items-center gap-1.5 text-emerald-200">
                  <span className="inline-block h-2 w-4 rounded-sm border border-dashed border-emerald-400/80 bg-emerald-400/20" />
                  Coming Next (2027–2029+)
                </span>
              )}
            </div>
          </div>

          <div className="flex items-stretch gap-3">
            {/* Evenly Spaced 2006–2026 Grid */}
            <div
              className="flex-1 grid gap-1 rounded-2xl border border-white/10 bg-black/25 p-2"
              style={{ gridTemplateColumns: `repeat(${railYears.length}, minmax(0, 1fr))` }}
              aria-label="Years from 2006 to 2026"
            >
              {railYears.map((year) => {
                const isRelocSpan = year === 2007 || year === 2014;
                const inSelected = isYearInSelectedRange(year);
                return (
                  <div
                    key={year}
                    data-active={inSelected ? 'true' : 'false'}
                    className={`relative flex flex-col items-center justify-center rounded-lg py-1.5 text-[11px] font-medium transition-all ${
                      inSelected
                        ? selectedVisual.railYearActive
                        : isRelocSpan
                          ? 'bg-amber-500/10 text-amber-200 border border-dashed border-amber-400/35'
                          : 'text-slate-400 border border-transparent'
                    }`}
                  >
                    <span>{year}</span>
                    {inSelected && (
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-1 bottom-0.5 h-[3px] rounded-full ${selectedVisual.railBar}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Future Extension Rail */}
            {showFuture && (
              <div
                className="w-52 shrink-0 grid grid-cols-3 gap-1 rounded-2xl border border-dashed border-emerald-400/40 bg-emerald-500/[0.05] p-2"
                aria-label="Future horizon 2027 to 2029+"
              >
                {futureYears.map((fy) => {
                  const fyNum = fy.startsWith('2029') ? 2029 : Number(fy);
                  const inSelected = selectedItem?.type === 'future' && selectedItem.startYear === fyNum;
                  return (
                    <div
                      key={fy}
                      data-active={inSelected ? 'true' : 'false'}
                      className={`relative flex flex-col items-center justify-center rounded-lg py-1.5 text-[11px] font-semibold transition-all ${
                        inSelected
                          ? selectedVisual.railYearActive
                          : 'text-emerald-200/80 border border-transparent'
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-wider opacity-75">Next</span>
                      <span>{fy}</span>
                      {inSelected && (
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-1 bottom-0.5 h-[3px] rounded-full ${selectedVisual.railBar}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Single-row Accessible Tablist of Timeline Nodes */}
        <div
          role="tablist"
          aria-label="Career milestones from 2006 to present and future horizon"
          className="flex flex-nowrap items-stretch gap-2 overflow-x-auto pb-2 pt-1"
        >
          {visibleItems.map((item, idx) => {
            const isSelected = selectedItem?.id === item.id;
            const matches = itemMatchesPillar(item);
            const visual = getTypeVisual(item.type);

            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[item.id] = el;
                }}
                id={`tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${item.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedId(item.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`group relative shrink-0 min-h-[58px] min-w-[116px] rounded-2xl border px-3.5 py-2 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${visual.chip} ${
                  isSelected ? visual.chipSelected : visual.chipHover
                } ${!matches && !isSelected ? 'opacity-35' : 'opacity-100'}`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className={`h-7 w-7 shrink-0 rounded-lg border flex items-center justify-center overflow-hidden p-1 ${visual.iconBox}`}
                  >
                    {renderLogoOrMonogram(item, 'h-5 w-5 object-contain', 'text-[10px] font-extrabold text-white', 15)}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold tracking-tight text-white whitespace-nowrap">
                      {item.chipLabel}
                    </span>
                    {item.subLabel && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 whitespace-nowrap">
                        {item.countryFlag && <span aria-hidden="true">{item.countryFlag}</span>}
                        <span>{item.subLabel}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Non-color selection underline indicator */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 bottom-1 h-[3px] rounded-full transition-opacity ${visual.chipUnderline} ${
                    isSelected ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Fallback (< md) */}
      <div className="md:hidden glass-card rounded-3xl p-4 border border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Select Milestone (2006 – Present)
          </p>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
            <span className="text-violet-200">● Academic</span>
            <span className="text-amber-200">● Relocation</span>
            {showFuture && <span className="text-emerald-200">● Future</span>}
          </div>
        </div>
        <div className="relative pl-5 space-y-2 border-l border-white/15">
          {visibleItems.map((item) => {
            const isSelected = selectedItem?.id === item.id;
            const matches = itemMatchesPillar(item);
            const visual = getTypeVisual(item.type);
            return (
              <button
                key={item.id}
                type="button"
                aria-current={isSelected ? 'step' : undefined}
                onClick={() => handleMobileSelect(item.id)}
                className={`relative w-full min-h-[44px] flex items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                  isSelected ? visual.mobileSelected : visual.mobile
                } ${!matches && !isSelected ? 'opacity-35' : 'opacity-100'}`}
              >
                <div>
                  <span className="block text-sm font-bold text-white">{item.chipLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    {item.countryFlag && <span aria-hidden="true">{item.countryFlag}</span>}
                    <span>{item.period}</span>
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className={`h-9 w-9 shrink-0 rounded-lg border flex items-center justify-center overflow-hidden p-1.5 ${visual.iconBox}`}
                >
                  {renderLogoOrMonogram(item, 'h-6 w-6 object-contain', 'text-xs font-bold text-slate-200', 18)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Role Detail Panel */}
      {selectedItem && (
        <div
          ref={panelRef}
          id={`panel-${selectedItem.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedItem.id}`}
          tabIndex={0}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          {/* Top Row: Monogram + Identity + Prev/Next */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div
                aria-hidden="true"
                className={`h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-extrabold tracking-tight border overflow-hidden p-2 ${selectedVisual.detailBox}`}
              >
                {renderLogoOrMonogram(
                  selectedItem,
                  'h-10 w-10 sm:h-11 sm:w-11 object-contain',
                  '',
                  26
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${selectedVisual.labelText}`}>
                    {(selectedItem.type === 'internship' || selectedItem.type === 'milestone') && (
                      <GraduationCap size={14} className="text-violet-300" aria-hidden="true" />
                    )}
                    {selectedItem.type === 'break' && (
                      <Plane size={14} className="text-amber-300" aria-hidden="true" />
                    )}
                    {TYPE_LABELS[selectedItem.type] || 'Milestone'}
                  </span>
                  <span className="text-slate-500" aria-hidden="true">
                    •
                  </span>
                  <span className="text-xs font-medium text-slate-300">{selectedItem.period}</span>
                  {selectedItem.location && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-slate-200">
                      {selectedItem.countryFlag && (
                        <span aria-hidden="true">{selectedItem.countryFlag}</span>
                      )}
                      <span>{selectedItem.location}</span>
                    </span>
                  )}
                  {selectedItem.placeholder && (
                    <span className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                      Placeholder Draft
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedItem.org || selectedItem.company}
                </h2>
                <p className="text-sm sm:text-base font-medium text-cyan-200">
                  {selectedItem.title}
                </p>

                {/* Pillar Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {(selectedItem.pillars || []).map((pid) => {
                    const meta = pillarMeta[pid];
                    if (!meta) return null;
                    return (
                      <span
                        key={pid}
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${meta.badgeClass}`}
                      >
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Prev / Next Navigation */}
            <div className="flex items-center gap-2 self-start shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={selectedIndex <= 0}
                className="inline-flex items-center gap-1.5 min-h-[38px] rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-white/10 disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <ChevronLeft size={15} aria-hidden="true" />
                Prev
              </button>
              <span className="px-2 text-xs font-medium text-slate-400">
                {selectedIndex + 1} / {visibleItems.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                disabled={selectedIndex >= visibleItems.length - 1}
                className="inline-flex items-center gap-1.5 min-h-[38px] rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-white/10 disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Next
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-3 max-w-4xl">
            {selectedItem.summaryHeading && (
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                {selectedItem.summaryHeading}
              </p>
            )}
            <p className="whitespace-pre-line text-slate-200 text-sm sm:text-base leading-relaxed">
              {selectedItem.summary}
            </p>
            {selectedItem.executionSummary && (
              <div className="pt-1 space-y-2">
                {selectedItem.executionSummary.heading && (
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {selectedItem.executionSummary.heading}
                  </p>
                )}
                <ul className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {selectedItem.executionSummary.items.map((entry) => (
                    <li key={entry.label}>
                      <span className="font-semibold text-white">{entry.label}</span> {entry.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Rule of 3 Metrics Grid */}
          {Array.isArray(selectedItem.metrics) && selectedItem.metrics.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Impact Snapshot (Rule of 3: Scale · Velocity · Quality)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedItem.metrics.map((metric) => (
                  <MetricBadge
                    key={metric.evidenceId || `${selectedItem.id}-${metric.kind}`}
                    metric={metric}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Future Target Skills */}
          {Array.isArray(selectedItem.targetSkills) && selectedItem.targetSkills.length > 0 && (
            <div className="rounded-2xl border border-dashed border-emerald-400/35 bg-emerald-500/[0.05] p-4 sm:p-5 space-y-2.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                <Sparkles size={14} aria-hidden="true" />
                Target Capabilities &amp; Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedItem.targetSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expandable Foundations Sub-Roles */}
          {Array.isArray(selectedItem.subRoles) && selectedItem.subRoles.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <button
                type="button"
                aria-expanded={showFoundationsBreakdown}
                onClick={() => setShowFoundationsBreakdown((prev) => !prev)}
                className="w-full flex items-center justify-between gap-3 text-left min-h-[36px] text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <span>{selectedItem.breakdownTitle || 'Early Career Role Breakdown'}</span>
                {showFoundationsBreakdown ? (
                  <ChevronUp size={16} aria-hidden="true" />
                ) : (
                  <ChevronDown size={16} aria-hidden="true" />
                )}
              </button>

              {showFoundationsBreakdown && (
                <ul className="mt-4 divide-y divide-white/10">
                  {selectedItem.subRoles.map((sub) => (
                    <li
                      key={`${sub.company}-${sub.period}`}
                      className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-white">{sub.company}</span>
                        {sub.badge && (
                          <span
                            className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              sub.badge === 'Internship'
                                ? 'border-violet-400/40 bg-violet-500/15 text-violet-200'
                                : 'border-cyan-400/35 bg-cyan-500/10 text-cyan-200'
                            }`}
                          >
                            {sub.badge}
                          </span>
                        )}
                        <span className="text-slate-400">— {sub.role}</span>
                      </div>
                      <span className="text-xs font-medium text-cyan-200 shrink-0">{sub.period}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Collapsible "How I built it" Highlights & Proof Evidence */}
          {((Array.isArray(selectedItem.highlights) && selectedItem.highlights.length > 0) ||
            selectedItem.evidence) && (
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
              <button
                type="button"
                aria-expanded={showHowBuilt}
                onClick={() => setShowHowBuilt((prev) => !prev)}
                className="w-full flex items-center justify-between gap-3 text-left min-h-[36px] text-sm font-semibold text-cyan-200 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <span className="inline-flex flex-wrap items-center gap-2">
                  <FileText size={15} aria-hidden="true" />
                  <span>How I built it &amp; Evidence Notes</span>
                  {selectedItem.evidence && (
                    <span className="rounded-full border border-cyan-400/35 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                      Links &amp; Archive
                    </span>
                  )}
                </span>
                {showHowBuilt ? (
                  <ChevronUp size={16} aria-hidden="true" />
                ) : (
                  <ChevronDown size={16} aria-hidden="true" />
                )}
              </button>

              {showHowBuilt && (
                <div className="mt-3 space-y-4">
                  {Array.isArray(selectedItem.highlights) && selectedItem.highlights.length > 0 && (
                    <ul className="space-y-2 list-disc list-inside text-sm text-slate-300 leading-relaxed">
                      {selectedItem.highlights.map((note, idx) => {
                        const text = typeof note === 'string' ? note : note.text;
                        const href = typeof note === 'object' ? note.url : null;
                        const to = typeof note === 'object' ? note.to : null;
                        const linkLabel = typeof note === 'object' ? note.linkLabel : null;
                        return (
                          <li key={`${selectedItem.id}-note-${idx}`}>
                            <span>{text}</span>
                            {href && (
                              <>
                                {' '}
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:text-white underline underline-offset-4"
                                >
                                  <span>{linkLabel || href}</span>
                                  <ExternalLink size={12} aria-hidden="true" />
                                </a>
                              </>
                            )}
                            {!href && to && (
                              <>
                                {' '}
                                <Link
                                  to={to}
                                  className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:text-white underline underline-offset-4"
                                >
                                  <span>{linkLabel || to}</span>
                                </Link>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {selectedItem.evidence && (
                    <div className="space-y-3 pt-3 border-t border-white/10">
                      {selectedItem.evidence.note && (
                        <p className="flex items-start gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/[0.06] px-3.5 py-2.5 text-xs text-slate-200 leading-relaxed">
                          <Archive size={14} className="text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{selectedItem.evidence.note}</span>
                        </p>
                      )}

                      {Array.isArray(selectedItem.evidence.links) &&
                        selectedItem.evidence.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.evidence.links.map((linkItem) => {
                              const linkClass =
                                'inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.12] hover:border-cyan-300/50 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300';
                              const Icon = linkItem.kind === 'archive' ? Archive : ExternalLink;

                              if (linkItem.to) {
                                return (
                                  <Link key={linkItem.label} to={linkItem.to} className={linkClass}>
                                    <Icon size={13} className="text-cyan-300" aria-hidden="true" />
                                    <span>{linkItem.label}</span>
                                  </Link>
                                );
                              }

                              return (
                                <a
                                  key={linkItem.label}
                                  href={linkItem.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={linkClass}
                                >
                                  <Icon size={13} className="text-cyan-300" aria-hidden="true" />
                                  <span>{linkItem.label}</span>
                                </a>
                              );
                            })}
                          </div>
                        )}

                      {(() => {
                        const snapshots = selectedItem.evidence.snapshots?.length
                          ? selectedItem.evidence.snapshots
                          : selectedItem.evidence.snapshotImage
                            ? [
                                {
                                  src: selectedItem.evidence.snapshotImage,
                                  alt: selectedItem.evidence.snapshotAlt,
                                  caption: selectedItem.evidence.snapshotCaption,
                                },
                              ]
                            : [];
                        if (snapshots.length === 0) return null;
                        return (
                          <div
                            className={`grid gap-3 ${
                              snapshots.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                            }`}
                          >
                            {snapshots.map((snap) => {
                              const fullSrc = `${process.env.PUBLIC_URL || ''}${snap.src}`;
                              const isBroken = brokenSnapshots[snap.src];
                              return (
                                <div
                                  key={snap.src}
                                  className="rounded-xl border border-white/10 bg-black/30 p-3 space-y-2"
                                >
                                  <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                                    <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                                      <Camera size={13} className="text-cyan-300 shrink-0" aria-hidden="true" />
                                      <span>{snap.caption || 'Saved Reference Snapshot'}</span>
                                    </span>
                                    {!isBroken && (
                                      <a
                                        href={fullSrc}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-200 hover:text-white underline underline-offset-4 shrink-0"
                                      >
                                        Full Image
                                        <ExternalLink size={11} aria-hidden="true" />
                                      </a>
                                    )}
                                  </div>

                                  {!isBroken ? (
                                    <a
                                      href={fullSrc}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block overflow-hidden rounded-lg border border-white/10 hover:border-cyan-300/60 transition"
                                    >
                                      <img
                                        src={fullSrc}
                                        alt={
                                          snap.alt ||
                                          `${selectedItem.company} reference webpage snapshot`
                                        }
                                        onError={() => markSnapshotBroken(snap.src)}
                                        className="w-full max-h-64 object-cover object-top"
                                      />
                                    </a>
                                  ) : (
                                    <p className="rounded-lg border border-dashed border-white/15 bg-white/[0.02] px-3 py-2 text-xs text-slate-400">
                                      Local snapshot image not yet saved at{' '}
                                      <code className="text-slate-200">{snap.src}</code>. Use the
                                      official/archive links above to view or save a local capture.
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CareerTimeline;
