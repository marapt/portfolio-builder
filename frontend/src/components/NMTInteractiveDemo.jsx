import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Sparkles, 
  Filter, 
  BarChart3, 
  Cpu, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Code2,
  FileCheck,
  Zap,
  Sliders,
  Award,
  PlayCircle,
  Pause,
  SkipForward,
  X,
  Terminal,
  Coins
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  cleanTagsAndEntities, 
  simulateLangId, 
  checkLengthRatio, 
  simulateSemanticSimilarity, 
  executeFullPipeline,
  calculateBLEU,
  calculateChrF,
  calculateCOMET,
  FUNNEL_STAGES_DATA,
  PRESET_TEST_CASES,
  PRESET_EVALUATION_CASES
} from '../utils/nmtPipelineEngine';

const NMTInteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('funnel'); // 'funnel' | 'evaluator'

  // --- Auto-Play Walkthrough State ---
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [stepSecondsLeft, setStepSecondsLeft] = useState(6);

  // --- Funnel / Sanitization State ---
  const [selectedFunnelStage, setSelectedFunnelStage] = useState(1);
  const [selectedTestCase, setSelectedTestCase] = useState(PRESET_TEST_CASES[0]);
  const [customSource, setCustomSource] = useState(PRESET_TEST_CASES[0].source);
  const [customTarget, setCustomTarget] = useState(PRESET_TEST_CASES[0].target);
  const [targetLang, setTargetLang] = useState(PRESET_TEST_CASES[0].targetLang || 'pt');
  const [pipelineResult, setPipelineResult] = useState(null);
  const [isRunningAnalysis, setIsRunningAnalysis] = useState(false);

  // --- Evaluator State ---
  const [selectedEvalCase, setSelectedEvalCase] = useState(PRESET_EVALUATION_CASES[0]);
  const [evalSource, setEvalSource] = useState(PRESET_EVALUATION_CASES[0].source);
  const [evalRef, setEvalRef] = useState(PRESET_EVALUATION_CASES[0].reference);
  const [evalHyp, setEvalHyp] = useState(PRESET_EVALUATION_CASES[0].hypothesis);
  const [bleuScore, setBleuScore] = useState(0);
  const [chrfScore, setChrfScore] = useState(0);
  const [cometResult, setCometResult] = useState({ score: 0, passed: false, note: '' });

  // Initial calculation
  useEffect(() => {
    runAnalysis();
    recalculateMetrics(evalSource, evalHyp, evalRef);
  }, []);

  const handleSelectTestCase = (tc) => {
    setSelectedTestCase(tc);
    setCustomSource(tc.source);
    setCustomTarget(tc.target);
    setTargetLang(tc.targetLang || 'de');
    runAnalysisDirect(tc.source, tc.target, tc.targetLang || 'de');
  };

  const runAnalysis = () => {
    runAnalysisDirect(customSource, customTarget, targetLang);
  };

  const runAnalysisDirect = (src, tgt, lang) => {
    setIsRunningAnalysis(true);
    setTimeout(() => {
      const res = executeFullPipeline(src, tgt, lang);
      setPipelineResult(res);
      setIsRunningAnalysis(false);
    }, 250);
  };

  const handleSelectEvalCase = (c) => {
    setSelectedEvalCase(c);
    setEvalSource(c.source);
    setEvalRef(c.reference);
    setEvalHyp(c.hypothesis);
    recalculateMetrics(c.source, c.hypothesis, c.reference);
  };

  const recalculateMetrics = (src, hyp, ref) => {
    const b = calculateBLEU(hyp, ref);
    const c = calculateChrF(hyp, ref);
    const comet = calculateCOMET(src, hyp, ref);
    setBleuScore(b);
    setChrfScore(c);
    setCometResult(comet);
  };

  const handleHypChange = (val) => {
    if (isAutoPlaying) setIsAutoPlayPaused(true);
    setEvalHyp(val);
    recalculateMetrics(evalSource, val, evalRef);
  };

  const STEP_DURATION = 7; // 7 seconds per walkthrough phase

  const AUTO_PLAY_STEPS = [
    {
      title: "1. 🇵🇹 Portuguese: Data Normalization & Bug ID Scrubbing",
      stageDesc: "Stage 1 Heuristic Pre-Filtering",
      narration: "Cleaning broken HTML tags, unescaping entities, and converting placeholders into uniform <var> tokens in Portuguese and German.",
      tab: 'funnel',
      run: () => {
        setActiveTab('funnel');
        setSelectedFunnelStage(1);
        const tc = PRESET_TEST_CASES[5]; // Tag Normalization
        setSelectedTestCase(tc);
        setCustomSource(tc.source);
        setCustomTarget(tc.target);
        setTargetLang('pt');
        runAnalysisDirect(tc.source, tc.target, 'pt');
      }
    },
    {
      title: "2. 🇫🇷 French: Neural LangID Filtering (Untranslated Drop)",
      stageDesc: "Stage 2 Language Identification Gate",
      narration: "Detecting untranslated English mistakenly left in French TM. FastText identifies target as EN with 0.99 confidence and automatically rejects.",
      tab: 'funnel',
      run: () => {
        setActiveTab('funnel');
        setSelectedFunnelStage(2);
        const tc = PRESET_TEST_CASES[6]; // Untranslated English
        setSelectedTestCase(tc);
        setCustomSource(tc.source);
        setCustomTarget(tc.target);
        setTargetLang('fr');
        runAnalysisDirect(tc.source, tc.target, 'fr');
      }
    },
    {
      title: "3. 🇵🇹 Portuguese Transcreation: The COMET Quality Gate",
      stageDesc: "Step 5 Metric Evaluation (Portuguese)",
      narration: "Testing Portuguese editorial transcreation ('Novo disco chega hoje...'). BLEU drops due to n-gram mismatch, but COMET awards 0.86 and PASSES the enterprise release gate.",
      tab: 'evaluator',
      run: () => {
        setActiveTab('evaluator');
        const c = PRESET_EVALUATION_CASES[0]; // Portuguese Pass
        setSelectedEvalCase(c);
        setEvalSource(c.source);
        setEvalRef(c.reference);
        setEvalHyp(c.hypothesis);
        recalculateMetrics(c.source, c.hypothesis, c.reference);
      }
    },
    {
      title: "4. 🇫🇷 French Transcreation: Audio Spatial Editorial",
      stageDesc: "Step 5 Metric Evaluation (French)",
      narration: "Testing French transcreation ('Découvrez vos morceaux favoris'). COMET scores 0.85, recognizing human editorial parity over literal word matching.",
      tab: 'evaluator',
      run: () => {
        setActiveTab('evaluator');
        const c = PRESET_EVALUATION_CASES[1]; // French Pass
        setSelectedEvalCase(c);
        setEvalSource(c.source);
        setEvalRef(c.reference);
        setEvalHyp(c.hypothesis);
        recalculateMetrics(c.source, c.hypothesis, c.reference);
      }
    },
    {
      title: "5. ❌ Literal MT Failure Gate Rejection (Portuguese / French)",
      stageDesc: "Step 5 Production Gate Rejection",
      narration: "Testing literal translation error ('drops' -> 'cai' / 'tombe'). The COMET score collapses to 0.46, instantly rejecting the output before human blind testing.",
      tab: 'evaluator',
      run: () => {
        setActiveTab('evaluator');
        const c = PRESET_EVALUATION_CASES[4]; // Portuguese Fail
        setSelectedEvalCase(c);
        setEvalSource(c.source);
        setEvalRef(c.reference);
        setEvalHyp(c.hypothesis);
        recalculateMetrics(c.source, c.hypothesis, c.reference);
      }
    }
  ];

  // Auto-play timer
  useEffect(() => {
    let interval = null;
    if (isAutoPlaying && !isAutoPlayPaused) {
      interval = setInterval(() => {
        setStepSecondsLeft((prev) => {
          if (prev <= 1) {
            setAutoPlayIndex((curIdx) => {
              const nextIdx = curIdx + 1;
              if (nextIdx >= AUTO_PLAY_STEPS.length) {
                setIsAutoPlaying(false);
                return 0;
              } else {
                AUTO_PLAY_STEPS[nextIdx].run();
                return nextIdx;
              }
            });
            return STEP_DURATION;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isAutoPlayPaused]);

  const startAutoPlay = () => {
    setIsAutoPlaying(true);
    setIsAutoPlayPaused(false);
    setAutoPlayIndex(0);
    setStepSecondsLeft(STEP_DURATION);
    AUTO_PLAY_STEPS[0].run();
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    setIsAutoPlayPaused(false);
  };

  const togglePause = () => {
    setIsAutoPlayPaused((prev) => !prev);
  };

  const skipToNextStep = () => {
    const nextIdx = (autoPlayIndex + 1) % AUTO_PLAY_STEPS.length;
    setAutoPlayIndex(nextIdx);
    setStepSecondsLeft(STEP_DURATION);
    AUTO_PLAY_STEPS[nextIdx].run();
  };

  const activeFunnel = FUNNEL_STAGES_DATA[selectedFunnelStage];

  return (
    <div id="interactive-nmt-demo" className="w-full bg-[#0a0f1d] border border-slate-800 rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden text-slate-100">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      {/* Demo Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-[10px] font-black uppercase tracking-wider mb-3">
            <Zap size={13} className="text-indigo-400" />
            Live Interactive Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            NMT Pipeline & Metric Execution Demo
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl font-medium">
            Test real-life translation memory pairs through the 5-stage corpus sanitization funnel and evaluate model outputs against BLEU, chrF++, and COMET.
          </p>
        </div>

        {/* Controls and Tabs */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          {/* Auto-Play Walkthrough Button */}
          <button
            onClick={isAutoPlaying ? stopAutoPlay : startAutoPlay}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all border shadow-lg ${
              isAutoPlaying 
                ? 'bg-rose-950/80 border-rose-500/80 text-rose-300 hover:bg-rose-900 shadow-rose-900/30' 
                : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white shadow-emerald-600/30 transform hover:-translate-y-0.5'
            }`}
          >
            {isAutoPlaying ? <Pause size={14} className="text-rose-300 animate-pulse" /> : <PlayCircle size={14} className="text-emerald-200" />}
            <span>{isAutoPlaying ? 'Exit Auto-Play' : 'Auto-Play Guided Tour'}</span>
          </button>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-950 border border-slate-800 p-1.5 rounded-2xl">
            <button
              onClick={() => { if (isAutoPlaying) stopAutoPlay(); setActiveTab('funnel'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'funnel'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Filter size={13} />
              <span>Sanitization Funnel</span>
            </button>
            <button
              onClick={() => { if (isAutoPlaying) stopAutoPlay(); setActiveTab('evaluator'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'evaluator'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 size={13} />
              <span>Metric Evaluator</span>
            </button>
            <button
              onClick={() => { if (isAutoPlaying) stopAutoPlay(); setActiveTab('engine'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'engine'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu size={13} />
              <span>Under the Hood</span>
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Play Guided Tour Banner */}
      {isAutoPlaying && (
        <div className="mb-8 p-5 bg-gradient-to-r from-slate-900/90 via-indigo-950/70 to-slate-900/90 border border-indigo-500/80 rounded-2xl shadow-2xl relative z-20 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-black text-sm flex-shrink-0">
                {autoPlayIndex + 1}/{AUTO_PLAY_STEPS.length}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    Guided Walkthrough • {AUTO_PLAY_STEPS[autoPlayIndex].stageDesc}
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {AUTO_PLAY_STEPS[autoPlayIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {AUTO_PLAY_STEPS[autoPlayIndex].narration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <Button
                variant="outline"
                size="sm"
                onClick={togglePause}
                className="h-8 px-3 text-xs border-slate-700 bg-slate-950 text-slate-200 hover:bg-slate-800"
              >
                {isAutoPlayPaused ? <Play size={12} className="mr-1 text-emerald-400" /> : <Pause size={12} className="mr-1 text-yellow-400" />}
                {isAutoPlayPaused ? 'Resume' : 'Pause'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={skipToNextStep}
                className="h-8 px-3 text-xs border-slate-700 bg-slate-950 text-slate-200 hover:bg-slate-800"
              >
                <SkipForward size={12} className="mr-1 text-indigo-400" /> Next
              </Button>
              <button
                onClick={stopAutoPlay}
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                title="Exit Guided Walkthrough"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Step Progress Bar */}
          <div className="w-full h-1.5 bg-slate-950 rounded-full mt-4 overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((STEP_DURATION - stepSecondsLeft) / STEP_DURATION) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 1: STEP 1 DATA SANITIZATION & RETENTION FUNNEL                       */}
      {/* ========================================================================= */}
      {activeTab === 'funnel' && (
        <div className="space-y-10 relative z-10 animate-in fade-in duration-300">
          {/* Funnel Graph Section */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Step 1 Corpus Telemetry</span>
                <h3 className="text-xl font-bold text-white">Segment Retention Funnel (500k Corpus)</h3>
              </div>
              <span className="text-xs text-slate-400">Click any stage bar below to inspect rules</span>
            </div>

            {/* Stage Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-8">
              {FUNNEL_STAGES_DATA.map((stg) => (
                <button
                  key={stg.id}
                  onClick={() => setSelectedFunnelStage(stg.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedFunnelStage === stg.id
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="text-[9px] font-black uppercase tracking-wider opacity-75">{stg.stage.split(' ')[0]}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{stg.stage.split('. ')[1] || stg.stage}</div>
                </button>
              ))}
            </div>

            {/* Animated Funnel Bars */}
            <div className="space-y-3.5">
              {FUNNEL_STAGES_DATA.map((stg) => {
                const percentage = (stg.retainedCount / 500000) * 100;
                const isSelected = selectedFunnelStage === stg.id;
                return (
                  <div 
                    key={stg.id}
                    onClick={() => setSelectedFunnelStage(stg.id)}
                    className={`cursor-pointer p-3 rounded-2xl transition-all ${
                      isSelected ? 'bg-indigo-950/40 ring-1 ring-indigo-500' : 'hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                      <span className={isSelected ? 'text-white' : 'text-slate-300'}>{stg.stage}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[11px]">{stg.retainedCount.toLocaleString()} segments</span>
                        <span className="text-indigo-400 font-black text-xs">{stg.retentionRate}</span>
                      </div>
                    </div>
                    <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          isSelected 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]' 
                            : 'bg-indigo-600/70 hover:bg-indigo-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Stage Detail Panel */}
            {activeFunnel && (
              <div className="mt-8 pt-8 border-t border-slate-800/80 bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black text-white">{activeFunnel.name}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${activeFunnel.statusColor}`}>
                      {activeFunnel.statusBadge}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-xs">
                    <div>
                      <span className="text-slate-400">Retained: </span>
                      <strong className="text-emerald-400">{activeFunnel.retainedCount.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Filtered Out: </span>
                      <strong className="text-rose-400">{activeFunnel.filteredCount.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Retention: </span>
                      <strong className="text-indigo-400">{activeFunnel.retentionRate}</strong>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-xs mt-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Operation & Logic Rule</span>
                    <p className="text-slate-300 leading-relaxed">{activeFunnel.operationRule}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Rejection Criteria</span>
                    <p className="text-rose-300/90 leading-relaxed">{activeFunnel.rejectionCriteria}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/60 grid md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Sample Raw Segment</span>
                    <p className="text-slate-300 break-all">{activeFunnel.sampleRaw}</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Sanitized Output / Action</span>
                    <p className="text-indigo-200 break-all">{activeFunnel.sampleSanitized}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Live Segment Pair Analyzer */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Interactive Segment Tester</span>
                <h3 className="text-xl font-bold text-white">Execute Pipeline on Custom or Preset Strings</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Target Locale:</span>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-white text-xs font-bold rounded-xl px-3.5 py-1.5 focus:outline-none focus:border-indigo-500 shadow-sm"
                >
                  <option value="pt">🇵🇹 Portuguese (PT)</option>
                  <option value="fr">🇫🇷 French (FR)</option>
                  <option value="de">🇩🇪 German (DE)</option>
                  <option value="es">🇪🇸 Spanish (ES)</option>
                  <option value="ja">🇯🇵 Japanese (JA)</option>
                </select>
              </div>
            </div>

            {/* Presets Row */}
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Production Test Case Presets:</span>
              <div className="flex flex-wrap gap-2">
                {PRESET_TEST_CASES.map((tc) => (
                  <button
                    key={tc.id}
                    onClick={() => handleSelectTestCase(tc)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedTestCase.id === tc.id
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {tc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  English Source Segment
                </label>
                <textarea
                  rows={3}
                  value={customSource}
                  onChange={(e) => setCustomSource(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Enter source string..."
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  Localized Target Segment ({targetLang.toUpperCase()})
                </label>
                <textarea
                  rows={3}
                  value={customTarget}
                  onChange={(e) => setCustomTarget(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Enter localized target string..."
                />
              </div>
            </div>

            {/* Run Button */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-slate-400 italic">
                {selectedTestCase.description}
              </p>
              <Button
                onClick={runAnalysis}
                disabled={isRunningAnalysis}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-wider text-xs px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <Play size={14} /> Run Pipeline Analysis
              </Button>
            </div>

            {/* Live Pipeline Results */}
            {pipelineResult && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                {/* Result Verdict Banner */}
                <div className={`p-4 rounded-xl border flex items-center justify-between mb-6 ${
                  pipelineResult.verdict === 'PASS'
                    ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300'
                    : pipelineResult.verdict === 'CLEANED & PASSED'
                    ? 'bg-blue-950/40 border-blue-700/60 text-blue-300'
                    : 'bg-rose-950/40 border-rose-700/60 text-rose-300'
                }`}>
                  <div className="flex items-center gap-3">
                    {pipelineResult.verdict === 'PASS' && <CheckCircle size={20} className="text-emerald-400" />}
                    {pipelineResult.verdict === 'CLEANED & PASSED' && <Sparkles size={20} className="text-blue-400" />}
                    {pipelineResult.verdict === 'REJECTED' && <XCircle size={20} className="text-rose-400" />}
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest block">Pipeline Verdict: {pipelineResult.verdict}</span>
                      <p className="text-xs font-medium opacity-90 mt-0.5">
                        {pipelineResult.rejectionReason || 'Segment pair satisfies all data hygiene and neural semantic gates.'}
                      </p>
                    </div>
                  </div>
                  {pipelineResult.dropStage && (
                    <Badge className="bg-rose-900/80 border border-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
                      Dropped at {pipelineResult.dropStage}
                    </Badge>
                  )}
                </div>

                {/* Step-by-Step Gate Audit */}
                <div className="grid sm:grid-cols-5 gap-3 text-xs">
                  {/* Gate 1 */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Gate 1: De-Tag</span>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400 text-xs mb-1">
                      <CheckCircle size={13} /> {pipelineResult.stage1.wasCleaned ? 'Normalized' : 'Clean'}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Tags mapped to &lt;var&gt;, entities decoded.</p>
                  </div>

                  {/* Gate 2 */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Gate 2: LangID</span>
                    <div className={`flex items-center gap-1.5 font-bold text-xs mb-1 ${
                      pipelineResult.stage2.passed ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {pipelineResult.stage2.passed ? <CheckCircle size={13} /> : <XCircle size={13} />}
                      {pipelineResult.stage2.tgtLangInfo.lang.toUpperCase()} ({(pipelineResult.stage2.tgtLangInfo.confidence * 100).toFixed(0)}%)
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Requires ≥90% confidence on {targetLang.toUpperCase()}.</p>
                  </div>

                  {/* Gate 3 */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Gate 3: Ratio</span>
                    <div className={`flex items-center gap-1.5 font-bold text-xs mb-1 ${
                      pipelineResult.stage3.passed ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {pipelineResult.stage3.passed ? <CheckCircle size={13} /> : <XCircle size={13} />}
                      Ratio: {pipelineResult.stage3.ratio}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Allowed bounds: [0.4, 2.5].</p>
                  </div>

                  {/* Gate 4 */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Gate 4: LaBSE</span>
                    <div className={`flex items-center gap-1.5 font-bold text-xs mb-1 ${
                      pipelineResult.stage4.passed ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {pipelineResult.stage4.passed ? <CheckCircle size={13} /> : <XCircle size={13} />}
                      Cosine: {pipelineResult.stage4.score}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Requires cosine similarity ≥ 0.75.</p>
                  </div>

                  {/* Gate 5 */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Gate 5: Dedup</span>
                    <div className={`flex items-center gap-1.5 font-bold text-xs mb-1 ${
                      pipelineResult.stage5.passed ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {pipelineResult.stage5.passed ? <CheckCircle size={13} /> : <XCircle size={13} />}
                      {pipelineResult.stage5.passed ? 'Indexed' : 'Skipped'}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Deduplicated in clean training pool.</p>
                  </div>
                </div>

                {/* Sanitized String Diff */}
                <div className="mt-6 pt-6 border-t border-slate-800 grid md:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Cleaned Source Output:</span>
                    <p className="text-slate-200">{pipelineResult.cleanSource}</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Cleaned Target Output:</span>
                    <p className="text-indigo-200">{pipelineResult.cleanTarget}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: STEP 5 TRIPARTITE METRIC EVALUATION CALCULATOR                    */}
      {/* ========================================================================= */}
      {activeTab === 'evaluator' && (
        <div className="space-y-10 relative z-10 animate-in fade-in duration-300">
          <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Step 5 Production Benchmarks</span>
                <h3 className="text-xl font-bold text-white">Tripartite Automated Evaluation Stack</h3>
              </div>
              <Badge className="bg-indigo-950 text-indigo-300 border border-indigo-700/60 text-xs font-bold self-start">
                COMET Gating Threshold: 0.82
              </Badge>
            </div>

            {/* Presets Row */}
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Evaluation Scenarios:</span>
              <div className="flex flex-wrap gap-2">
                {PRESET_EVALUATION_CASES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectEvalCase(c)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedEvalCase.id === c.id
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
              <p className="text-xs text-indigo-300/80 italic mt-3 bg-indigo-950/30 p-3 rounded-xl border border-indigo-800/40">
                {selectedEvalCase.scenarioNote}
              </p>
            </div>

            {/* Input Triplet */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  1. English Source
                </label>
                <textarea
                  rows={3}
                  value={evalSource}
                  onChange={(e) => { setEvalSource(e.target.value); recalculateMetrics(e.target.value, evalHyp, evalRef); }}
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                  2. Human Reference {selectedEvalCase.langName && <span className="text-indigo-400 font-bold">({selectedEvalCase.langName})</span>}
                </label>
                <textarea
                  rows={3}
                  value={evalRef}
                  onChange={(e) => { setEvalRef(e.target.value); recalculateMetrics(evalSource, evalHyp, e.target.value); }}
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1.5">
                  3. Model Hypothesis (Editable) {selectedEvalCase.langName && <span className="text-purple-300 font-bold">({selectedEvalCase.langName})</span>}
                </label>
                <textarea
                  rows={3}
                  value={evalHyp}
                  onChange={(e) => handleHypChange(e.target.value)}
                  className="w-full bg-slate-900 border border-indigo-500/80 rounded-2xl p-4 text-xs font-mono text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Metric Score Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {/* BLEU */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">BLEU Score</span>
                  <span className="text-[9px] font-semibold text-slate-400">Word n-grams</span>
                </div>
                <div className="text-3xl font-black text-white tracking-tight mb-2">
                  {bleuScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: `${Math.min(100, bleuScore)}%` }} />
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Automated sanity check. Penalizes synonyms that deviate from literal tokens.
                </p>
              </div>

              {/* chrF++ */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">chrF++ Score</span>
                  <span className="text-[9px] font-semibold text-indigo-300">Char + Word n-grams</span>
                </div>
                <div className="text-3xl font-black text-indigo-400 tracking-tight mb-2">
                  {chrfScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min(100, chrfScore)}%` }} />
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Morphological root matching. Awards partial credit to shared compound stems.
                </p>
              </div>

              {/* COMET */}
              <div className={`rounded-2xl p-5 border ${
                cometResult.passed 
                  ? 'bg-indigo-950/40 border-indigo-500/80 ring-1 ring-indigo-500/30' 
                  : 'bg-rose-950/30 border-rose-700/60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">COMET Neural Gate</span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                    cometResult.passed ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'bg-rose-950 text-rose-400 border border-rose-700'
                  }`}>
                    {cometResult.passed ? 'PASS (>0.82)' : 'FAIL (<0.82)'}
                  </span>
                </div>
                <div className={`text-3xl font-black tracking-tight mb-2 ${
                  cometResult.passed ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {cometResult.score} <span className="text-xs text-slate-400 font-normal">/ 1.000</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden mb-2">
                  <div 
                    className={`h-full rounded-full ${cometResult.passed ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                    style={{ width: `${Math.min(100, cometResult.score * 100)}%` }} 
                  />
                </div>
                <p className="text-[10px] text-slate-300 leading-tight font-medium">
                  {cometResult.note}
                </p>
              </div>
            </div>

            {/* Production Decision Explanation */}
            <div className={`p-6 rounded-2xl border flex items-start gap-4 ${
              cometResult.passed
                ? 'bg-slate-900 border-indigo-500/40 text-indigo-100'
                : 'bg-rose-950/20 border-rose-800/40 text-rose-200'
            }`}>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                cometResult.passed ? 'bg-emerald-600/20 text-emerald-400' : 'bg-rose-600/20 text-rose-400'
              }`}>
                {cometResult.passed ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
              </div>
              <div className="text-xs leading-relaxed">
                <span className="font-black uppercase tracking-wider block mb-1 text-white">
                  Producer Release Gate Evaluation:
                </span>
                {cometResult.passed ? (
                  <span>
                    <strong>Model output cleared for human blind testing.</strong> The engine captures semantic meaning, intent, and musical terminology while exhibiting natural editorial syntax that traditional surface metrics like BLEU under-score.
                  </span>
                ) : (
                  <span>
                    <strong>Model output rejected by automated gate.</strong> The engine failed semantic threshold (score {cometResult.score} &lt; 0.82). Segment must be routed to human linguist post-editing (MTPE) or flagged for fine-tuning retraining.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 3: UNDER THE HOOD (ENGINE ARCHITECTURE)                              */}
      {/* ========================================================================= */}
      {activeTab === 'engine' && (
        <div className="space-y-8 relative z-10 animate-in fade-in duration-300">
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Simulation Architecture</span>
                <h3 className="text-xl font-bold text-white">How the Engine Works Under the Hood</h3>
              </div>
              <a
                href="#under-the-hood"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('under-the-hood');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>Full Architectural Breakdown Below</span>
                <span>↓</span>
              </a>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-8">
              Because running massive 768-dimensional Python GPU models inside a browser for a portfolio demo isn't feasible, I engineered <code className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-xs border border-indigo-800/60">nmtPipelineEngine.js</code> in client-side JavaScript. It accurately replicates the exact mathematical boundaries, stop-word frequency classifiers, length ratios, and cross-encoder semantic rewards of an enterprise NLP pipeline.
            </p>

            {/* 5 Engine Quick Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Function 1 */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2 py-0.5 rounded">01 • REGEX</span>
                  <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-400">Sanitization</Badge>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">cleanTagsAndEntities()</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Decodes HTML entities, purges internal bug patterns (<code className="text-rose-400 font-mono text-[10px]">rdar://</code>, <code className="text-rose-400 font-mono text-[10px]">JIRA-</code>), and normalizes sprint tags and variables to uniform <code className="text-emerald-300 font-mono text-[10px]">&lt;var&gt;</code> tokens.
                </p>
              </div>

              {/* Function 2 */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/80 border border-purple-800/60 px-2 py-0.5 rounded">02 • CLASSIFIER</span>
                  <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-400">fastText</Badge>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">simulateLangId()</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Profiles stop-word distributions across PT, FR, DE, ES, and JA. Catches translators who accidentally copy-pasted English source into target translation files and automatically purges the contaminated row.
                </p>
              </div>

              {/* Function 3 */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 border border-amber-800/60 px-2 py-0.5 rounded">03 • BOUNDARY</span>
                  <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-400">Pure Math</Badge>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">checkLengthRatio()</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Computes token count ratio (Target / Source). Enforces the strict empirical NLP window <code className="text-amber-300 font-mono text-[10px]">[0.4, 2.5]</code>, discarding segments where 1 word was paired with a 50-word foreign paragraph.
                </p>
              </div>

              {/* Function 4 */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">04 • EMBEDDINGS</span>
                  <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-400">LaBSE</Badge>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">simulateSemanticSimilarity()</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Simulates 768-dimension vector cosine similarity. Detects domain divergence (e.g. source talks about "Music" while target talks about "Billing"), purging misaligned legacy database pairs with cosine &lt; 0.75.
                </p>
              </div>

              {/* Function 5 */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/50 transition-all sm:col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-2 py-0.5 rounded">05 • METRIC LAB</span>
                  <Badge variant="outline" className="text-[9px] border-indigo-800 text-indigo-400">BLEU · chrF · COMET</Badge>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">Tripartite Evaluation Engines</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Calculates real word n-grams (BLEU), character n-grams (chrF++), and cross-encoder neural transcreation weights (COMET). Awards bonuses for idiomatic synonyms while heavily penalizing literal translations (e.g. music "drops" translated as "falls down") to stop unverified deployment.
                </p>
              </div>
            </div>

            {/* Financial ROI Callout */}
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold flex-shrink-0">
                  <Coins size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                    Enterprise Cost Rationale & 40% Reduction
                  </span>
                  <p className="text-xs text-slate-200">
                    Routing <strong>11.25M rote words</strong> (45% of a 25M-word program) through the NMT engine saves <strong>$0.10/word</strong>, or <strong>$1,125,000 a year</strong> against a $2.8M baseline.
                  </p>
                </div>
              </div>
              <a
                href="#cost-rationale"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('cost-rationale');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-500/60 text-emerald-300 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap self-start sm:self-auto transition-colors"
              >
                Cost Rationale & ROI ↓
              </a>
            </div>

            {/* Bottom Link to In-Depth Conclusion */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Want to read the full code formulas and engineering rationale?
              </span>
              <a
                href="#under-the-hood"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('under-the-hood');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Read Full Conclusion & Architecture ↓</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NMTInteractiveDemo;
