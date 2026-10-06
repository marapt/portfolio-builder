import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  Cpu, 
  Layers, 
  Database, 
  BarChart3, 
  Filter, 
  Code2, 
  ZoomIn, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  GitFork, 
  Workflow,
  FileCode2,
  Sliders,
  Check,
  Award,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingDown,
  DollarSign,
  Calculator,
  Scale,
  Target,
  Percent,
  Coins,
  Clock,
  Gauge,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import NMTInteractiveDemo from '../components/NMTInteractiveDemo';

const TrainingNMTCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStep, setActiveStep] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const stepsData = [
    {
      step: 1,
      tag: "Step 01",
      icon: Filter,
      title: "Data Sanitization & Corpus Cleaning",
      subtitle: "Deterministic CPU pre-filtering & GPU-accelerated semantic similarity gating",
      objective: "Eliminate noise, malformed tags, sentence boundary misalignments, and corrupted translations from raw Translation Memories before training.",
      items: [
        {
          name: "Structural Normalization & Tag Cleaning",
          desc: "Strips broken HTML/XML tags, unescapes HTML entities, normalizes curly apostrophes/quotes, and replaces diverse software placeholders (%s, {0}, rdar://) with uniform atomic tokens (<var>) to preserve syntax without confusing the tokenizer."
        },
        {
          name: "Language Identification (LangID) Filtering",
          desc: "Executes lightweight neural language classifiers (fastText & Google CLD3) over both source and target columns with strict ≥98% confidence gates, dropping untranslated English or incorrectly routed locales."
        },
        {
          name: "Sentence Boundary & Length Ratio Filtering",
          desc: "Discards extreme paragraph outliers (>100 to 120 words) that degrade Transformer attention matrices. Enforces strict length-ratio heuristics (0.4 to 2.5) to catch sentence boundary misalignments where single sentences were erroneously paired with entire paragraphs."
        },
        {
          name: "Neural Semantic Similarity Pruning (LaBSE / Laser)",
          desc: "Transforms bilingual sentence pairs into shared high-dimensional embeddings using Language-Agnostic BERT Sentence Embeddings (LaBSE). Discards all pairs where Cosine Similarity falls below 0.75, eliminating semantically unfaithful legacy strings."
        },
        {
          name: "Exact & Fuzzy Deduplication + PII Scrubbing",
          desc: "Collapses high-volume repetitive UI strings (e.g., 'Cancel Subscription' appearing 20,000+ times) via MinHash and Levenshtein distance. Strips internal Radar IDs, Jira ticket references, employee emails, and unreleased internal codenames."
        }
      ],
      artifacts: [
        {
          url: "/assets/nmt/image8.png",
          title: "End-to-End Pipeline Architecture",
          caption: "Architectural data flow from raw translation memory ingestion to verified clean bilingual corpus."
        },
        {
          url: "/assets/nmt/image7.png",
          title: "Retention & Fallout Rates Dashboard",
          caption: "Interactive visual pipeline telemetry showing drop percentages across LangID, length ratios, and semantic gating."
        },
        {
          url: "/assets/nmt/image6.png",
          title: "Filtering Transformation Output",
          caption: "Before-and-after bilingual segment analysis showing tag normalization and cosine score cutoffs."
        },
        {
          url: "/assets/nmt/image4.png",
          title: "CPU Structural Pre-Filtering Script",
          caption: "Production Python implementation executing multithreaded regex normalization and fastText LangID verification."
        },
        {
          url: "/assets/nmt/image5.png",
          title: "GPU Semantic Alignment Script",
          caption: "Batch-vectorized matrix dot products computing LaBSE unit-normalized cosine similarity."
        }
      ]
    },
    {
      step: 2,
      tag: "Step 02",
      icon: Layers,
      title: "Domain Stratification & Context Injection",
      subtitle: "Vertical isolation and inline metadata tags to give the model tonal awareness",
      objective: "Organize clean bilingual data into distinct functional verticals and inject grammatical and stylistic metadata directly into the source string.",
      items: [
        {
          name: "Sub-Domain Stratification (Vertical Isolation)",
          desc: "Splits heterogeneous enterprise data into discrete functional sub-domains: Long-Form Narrative Editorial (artist bios, album reviews), High-Density UI Navigation Strings, and Time-Sensitive Marketing/Push copy."
        },
        {
          name: "Metadata & Context Injection Tags",
          desc: "Prepends operational tokens to the source payload: style markers (<style:editorial>), domain indicators (<domain:music>), and formality flags (<formality:informal>) so the model learns context-dependent word behaviors."
        },
        {
          name: "Entity & Non-Translatable Masking",
          desc: "Applies non-translatable masks (<var>) around artist handles, album titles, and hardware features to prevent the engine from translating proper nouns into literal target-language words."
        }
      ]
    },
    {
      step: 3,
      tag: "Step 03",
      icon: Database,
      title: "Dataset Splitting & Anti-Leakage Governance",
      subtitle: "80/10/10 partitioning with document-level and campaign-level isolation",
      objective: "Prevent data contamination between training, tuning, and benchmark evaluation splits to ensure realistic production metrics.",
      items: [
        {
          name: "The Training Set (80% | ~160,000 segments)",
          desc: "The primary learning corpus. The model iterates across these sentence pairs over multiple epochs, optimizing internal neural weights and attention matrices via backpropagation."
        },
        {
          name: "The Validation / Dev Set (10% | ~20,000 segments)",
          desc: "Used during training to calculate Validation Loss at every epoch. Acts as the automated trigger for Early Stopping, terminating training the exact moment validation loss ceases to improve to avoid overfitting."
        },
        {
          name: "The Holdout Test Set (10% | ~20,000 segments)",
          desc: "Strictly locked away and quarantined from all training cycles. Used solely after final training to benchmark true generalization performance on unreleased albums and copy."
        },
        {
          name: "Data Contamination (Leakage) Prevention",
          desc: "Eliminates fuzzy near-duplicates and boilerplate strings across splits. Partitions data strictly at document, album, and artist boundaries rather than random line splitting, ensuring the test set genuinely tests unseen entities."
        }
      ]
    },
    {
      step: 4,
      tag: "Step 04",
      icon: Cpu,
      title: "Transfer Learning & Domain Adaptation",
      subtitle: "Adapting massive multilingual foundation models without catastrophic forgetting",
      objective: "Specialize a high-capacity base Transformer in the enterprise brand voice using transfer learning rather than training from scratch.",
      items: [
        {
          name: "Transfer Learning vs. Tabula Rasa",
          desc: "Leverages pre-trained multilingual foundation models (NLLB, Marian, AutoML) that already possess deep syntactic and grammatical competence, adapting them using 50,000 to 300,000 curated domain pairs in hours rather than months."
        },
        {
          name: "Preventing Catastrophic Forgetting",
          desc: "Maintains conservative learning rates (e.g., 1e-5 to 5e-5) and interleaves generic language replay buffers so the network refines domain vocabulary without forgetting fundamental grammatical rules."
        },
        {
          name: "Constrained Decoding for Strict Termbases",
          desc: "Implements trie-based constrained beam search decoding at inference time to guarantee 100% compliance on trademarked product names and mandated client glossaries."
        }
      ]
    },
    {
      step: 5,
      tag: "Step 05",
      icon: BarChart3,
      title: "Tripartite Metric Evaluation Framework",
      subtitle: "Balancing surface exactness, morphological inflections, and deep neural semantics",
      objective: "Deploy a rigorous automated gating stack combining BLEU, chrF++, and neural COMET before advancing any engine to human linguist blind testing.",
      metrics: [
        {
          name: "BLEU",
          level: "Whole-word n-grams",
          semantic: "None (Surface exact)",
          role: "Automated Sanity Check",
          pros: "Instant to compute; historical benchmark to flag catastrophic drops in word alignment or dropped clauses.",
          cons: "Harshly penalizes valid synonyms, paraphrasing, and creative editorial restructuring."
        },
        {
          name: "chrF++",
          level: "Character n-grams + Words",
          semantic: "Surface morphology only",
          role: "Morphological Precision Gate",
          pros: "Exceptional for compound words and highly inflected languages (German, Russian, Finnish, Japanese).",
          cons: "Still blind to complete paraphrasing or alternate idiomatic structures."
        },
        {
          name: "COMET",
          level: "Deep Neural Embeddings (Transformer)",
          semantic: "Deep Cross-Lingual Semantic",
          role: "Primary Editorial Quality Gate (>0.82)",
          pros: "Embeds source, hypothesis, and reference into shared vector space; correlates closely with human editorial judgement and rewards valid synonyms.",
          cons: "Requires GPU compute; operates as a neural model."
        }
      ],
      executiveQuote: "When evaluating an engine before release, I look at the metrics as a tripartite stack: I use BLEU strictly as an automated sanity check for catastrophic drops in word-order alignment or token loss. I use chrF++ to ensure the model does not suffer morphological or compound-word penalties in complex languages like German, Russian, or Japanese. Crucially for Apple Music editorial, my primary automated gate is COMET. Because COMET evaluates neural semantic embeddings rather than literal word matches, it recognizes when the model uses a valid, culturally resonant synonym. If an engine doesn't hit my target COMET threshold (>0.82), it doesn't advance to human blind testing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-20 relative overflow-hidden border-b border-slate-800/80">
        {/* Ambient Gradients */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link 
              to="/#portfolio" 
              className="group inline-flex items-center text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft size={14} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Technical Deep-Dive Case Study</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Neural Machine Translation
                </Badge>
                <Badge className="bg-slate-900 border border-slate-700 text-slate-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Domain Adaptation
                </Badge>
                <Badge className="bg-slate-900 border border-slate-700 text-slate-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  COMET Metric Gating
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
                Training & Tuning a <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Custom NMT Engine</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
                A production-tested methodology covering <strong>heuristic sanitization</strong>, <strong>neural alignment filtering (LaBSE)</strong>, <strong>domain stratification</strong>, <strong>anti-leakage splitting</strong>, and a <strong>tripartite metric evaluation gate</strong> for enterprise editorial localization.
              </p>

              {/* Key Quantitative Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a
                  href="#metric-velocity-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-velocity-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-indigo-400 tracking-tight group-hover:text-indigo-300">60%</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Time Reduction</div>
                  <div className="text-[10px] text-slate-400 mt-1">Catalog & UI Tiers (Modeled)</div>
                </a>

                <a
                  href="#metric-comet-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-comet-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-purple-400 tracking-tight group-hover:text-purple-300">0.85+</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">COMET Score</div>
                  <div className="text-[10px] text-slate-400 mt-1">Neural Quality Gate</div>
                </a>

                <a
                  href="#metric-parity-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-parity-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-emerald-400 tracking-tight group-hover:text-emerald-300">94%</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">MTPE Parity</div>
                  <div className="text-[10px] text-slate-400 mt-1">Linguist Acceptance Rate</div>
                </a>

                <a
                  href="#metric-cosine-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-cosine-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-indigo-300 tracking-tight group-hover:text-indigo-200">≥0.75</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Cosine Gate</div>
                  <div className="text-[10px] text-slate-400 mt-1">LaBSE Alignment Filter</div>
                </a>
              </div>

              {/* Modeled ROI & Benchmarks Disclosure */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 -mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  * Figures reflect <strong>modeled operational ROI</strong> & benchmark thresholds for enterprise localization workloads. Click any metric to review the exact mathematical proof.
                </span>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#interactive-nmt-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('interactive-nmt-demo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles size={16} className="text-yellow-300" />
                  <span>Try Live Pipeline Demo ↓</span>
                </a>
                <a
                  href="#methodology-steps"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('methodology-steps');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>5-Step Methodology</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setModalImage('/assets/nmt/image7.png')}
                className="group relative bg-slate-900/90 border border-slate-800 rounded-3xl p-3 shadow-2xl cursor-pointer hover:border-indigo-500/80 transition-all hover:-translate-y-1.5 duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl h-80 bg-slate-950 flex items-center justify-center">
                  <img 
                    src="/assets/nmt/image7.png" 
                    alt="Interactive Visual Pipeline Dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl">
                      <ZoomIn size={16} /> Expand Architecture Dashboard
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Interactive Pipeline & Retention Telemetry</span>
                  <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px]">Click to zoom ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Demo Section */}
      <section id="interactive-nmt-demo" className="py-16 bg-[#060a14] border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <NMTInteractiveDemo />
        </div>
      </section>

      {/* Sticky Step Navigation */}
      <section id="methodology-steps" className="sticky top-20 z-40 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            <a
              href="#interactive-nmt-demo"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('interactive-nmt-demo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border bg-gradient-to-r from-indigo-950 to-purple-950/70 border-indigo-500/60 text-indigo-300 hover:text-white shadow-sm"
            >
              <Sparkles size={13} className="text-yellow-300" />
              <span>Interactive Demo</span>
            </a>
            <div className="h-6 w-px bg-slate-800 flex-shrink-0" />
            {stepsData.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                    activeStep === idx
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <IconComp size={14} className={activeStep === idx ? 'text-white' : 'text-indigo-400'} />
                  <span>{step.tag}: {step.title.split('&')[0]}</span>
                </button>
              );
            })}
            <div className="h-6 w-px bg-slate-800 flex-shrink-0" />
            <a
              href="#under-the-hood"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('under-the-hood');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border bg-indigo-950/40 border-indigo-500/50 text-indigo-300 hover:text-white hover:border-indigo-400 shadow-sm"
            >
              <Cpu size={13} className="text-indigo-400" />
              <span>Under the Hood</span>
            </a>
            <div className="h-6 w-px bg-slate-800 flex-shrink-0" />
            <a
              href="#cost-rationale"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('cost-rationale');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:text-white hover:border-emerald-400 shadow-sm"
            >
              <TrendingDown size={13} className="text-emerald-400" />
              <span>Cost & ROI Rationale</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content / Active Step Focus */}
      <main className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        {stepsData[activeStep] && (
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-[3rem] p-8 lg:p-14 shadow-2xl relative">
            {/* Step Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 pb-8 border-b border-slate-800">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 block mb-2">
                  {stepsData[activeStep].tag} • Production Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                  {stepsData[activeStep].title}
                </h2>
                <p className="text-slate-400 text-base max-w-2xl font-medium">
                  {stepsData[activeStep].subtitle}
                </p>
                {(activeStep === 0 || activeStep === 4) && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('interactive-nmt-demo');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 hover:text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <Sparkles size={14} className="text-yellow-300" />
                    <span>
                      {activeStep === 0 ? 'Launch Step 1 Sanitization Funnel Simulator ↑' : 'Test BLEU, chrF++, and COMET in Simulator ↑'}
                    </span>
                  </button>
                )}
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 max-w-md self-start">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phase Objective</div>
                <div className="text-xs text-indigo-200 font-semibold leading-relaxed">
                  {stepsData[activeStep].objective}
                </div>
              </div>
            </div>

            {/* Step Content Items */}
            {stepsData[activeStep].items && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {stepsData[activeStep].items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-black text-xs">
                        {iIdx + 1}
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">{item.name}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1 Visual Artifacts Grid */}
            {activeStep === 0 && stepsData[0].artifacts && (
              <div className="mt-14 pt-10 border-t border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Technical Gallery</span>
                    <h3 className="text-2xl font-black text-white">Pipeline Architecture & Inspection Artifacts</h3>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline">Click to inspect high-resolution diagrams</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stepsData[0].artifacts.map((art, aIdx) => (
                    <div 
                      key={aIdx}
                      onClick={() => setModalImage(art.url)}
                      className="group bg-slate-950 border border-slate-800 rounded-2xl p-3.5 cursor-pointer hover:border-indigo-500/80 transition-all hover:-translate-y-1 shadow-lg"
                    >
                      <div className="relative overflow-hidden rounded-xl h-52 bg-slate-900 flex items-center justify-center mb-3">
                        <img 
                          src={art.url} 
                          alt={art.title} 
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <ZoomIn size={14} /> Full View
                          </span>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{art.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{art.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5 Comparison Matrix */}
            {activeStep === 4 && stepsData[4].metrics && (
              <div className="mt-10">
                <h3 className="text-2xl font-black text-white mb-6">Tripartite Evaluation Framework Matrix</h3>
                <div className="overflow-x-auto mb-10">
                  <table className="w-full text-left text-xs border border-slate-800 rounded-2xl overflow-hidden">
                    <thead className="bg-slate-950 text-slate-300 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-4 border-b border-slate-800">Metric</th>
                        <th className="p-4 border-b border-slate-800">Analysis Level</th>
                        <th className="p-4 border-b border-slate-800">Semantic Awareness</th>
                        <th className="p-4 border-b border-slate-800">Role in Pipeline</th>
                        <th className="p-4 border-b border-slate-800">Primary Strength</th>
                        <th className="p-4 border-b border-slate-800">Weakness / Blindspot</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {stepsData[4].metrics.map((m, mIdx) => (
                        <tr key={mIdx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-4 font-black text-indigo-400 text-sm">{m.name}</td>
                          <td className="p-4 text-slate-300 font-medium">{m.level}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                              m.name === 'COMET' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {m.semantic}
                            </span>
                          </td>
                          <td className="p-4 font-bold text-white">{m.role}</td>
                          <td className="p-4 text-slate-300">{m.pros}</td>
                          <td className="p-4 text-slate-400">{m.cons}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Executive Quote Box */}
                <div className="p-8 rounded-3xl bg-indigo-950/30 border border-indigo-700/40 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center flex-shrink-0 font-black text-xl">
                    ★
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 block mb-2">
                      Producer Interview Strategy & Execution
                    </span>
                    <p className="text-sm sm:text-base italic text-indigo-100 leading-relaxed font-medium">
                      "{stepsData[4].executiveQuote}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* CONCLUSION & ARCHITECTURE: HOW THIS DEMO WORKS UNDER THE HOOD            */}
      {/* ========================================================================= */}
      <section id="under-the-hood" className="py-24 border-t border-slate-800/80 bg-gradient-to-b from-[#060a14] via-[#080d1a] to-[#060911] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Terminal size={13} className="text-indigo-400" />
              <span>Technical Deep Dive & Conclusion</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              How This Demo Works: Under the Hood
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              For an in-depth view into the underlying architecture, this section details the mechanics under the hood. My goal was to build a React application powered by a custom JavaScript regex and heuristic engine that accurately mimics the mathematical boundaries, filtering logic, and n-gram scoring of a production NLP pipeline, allowing visitors to experience deep-learning concepts instantly in their browser.
            </p>
          </div>

          {/* Engine Motivation Callout Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 shadow-2xl mb-16 max-w-4xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold flex-shrink-0">
                <Code2 size={24} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400 block mb-1">
                  Engine Architecture Rationale
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  Because running massive Python GPU models inside a browser is impractical for a web portfolio demo, I built a lightweight JavaScript "engine" (<code className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-xs border border-indigo-800/60">nmtPipelineEngine.js</code>) that simulates the exact mathematical logic of a real NLP pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* 5 Architecture Pillar Cards */}
          <div className="space-y-8">
            {/* Pillar 1: Data Sanitization */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    01
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1">
                      Regex & Token Normalization
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      1. Data Sanitization Engine (Regex)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    cleanTagsAndEntities()
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    In the <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">cleanTagsAndEntities</code> function, I used targeted Regular Expressions (Regex) to purge noise before tokenization:
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Decodes HTML Entities:</strong> It hunts for entities like <code className="text-slate-400 font-mono text-xs">&amp;amp;</code> or <code className="text-slate-400 font-mono text-xs">&amp;quot;</code> and unescapes them into natural characters.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Purges Confidential Internal Metadata:</strong> It detects internal corporate ticket patterns (such as <code className="text-rose-400 font-mono text-xs">rdar://1234567</code> or <code className="text-rose-400 font-mono text-xs">JIRA-9876</code>) and strips them out, preventing internal bugs or confidential system URLs from leaking into the AI's training weights.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>The Smartest Part (Placeholder Normalization):</strong> It identifies HTML tags (<code className="text-indigo-300 font-mono text-xs">&lt;b&gt;</code>, <code className="text-indigo-300 font-mono text-xs">&lt;span&gt;</code>) and printf placeholders (<code className="text-indigo-300 font-mono text-xs">%s</code>, <code className="text-indigo-300 font-mono text-xs">&#123;0&#125;</code>) and replaces them all with a uniform <code className="text-emerald-300 font-mono text-xs">&lt;var&gt;</code> token. This prevents the AI's subword BPE/SentencePiece tokenizer from fragmenting code syntax during fine-tuning.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Regex Core Implementation</span>
                    <span className="text-blue-400">cleanTagsAndEntities</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`// 1. Decodes HTML Entities
clean = clean.replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<');

// 2. Strips internal bug links
clean = clean.replace(
  /(rdar:\\/\\/\\d+|[A-Z]+-\\d+)/gi, ''
);

// 3. Normalizes tags & placeholders
clean = clean.replace(
  /(<[^>]+>|%[s|d]|\\{[0-9]+\\})/gi, 
  '<var>'
);`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 2: The Language ID Gate */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    02
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 block mb-1">
                      Neural Classifier Emulation (fastText)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      2. The Language ID Gate (Simulating fastText)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    simulateLangId()
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    The <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">simulateLangId</code> function acts like an in-browser neural language classifier:
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Statistical Stop-Word Profiling:</strong> It scans the string for characteristic linguistic markers (e.g. <code className="text-purple-300 font-mono text-xs">der/die/das/und</code> for German, <code className="text-purple-300 font-mono text-xs">o/a/os/para/com</code> for Portuguese, <code className="text-purple-300 font-mono text-xs">le/la/les/dans</code> for French, <code className="text-purple-300 font-mono text-xs">el/la/en/los</code> for Spanish, and script ranges for Japanese).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>The Pro-Trick (Catching English Leakage):</strong> If it sees that the English source is English, but the localized target file <em>also</em> scores 99% on English stop words, it flags a classic enterprise localization blunder: a translator or ingestion script accidentally copy-pasted the English string into the foreign target file. The gate drops the contaminated row immediately before it ruins model training.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Language Gating Logic</span>
                    <span className="text-purple-400">simulateLangId</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`// Catching unlocalized source leakage
if (expectedLang !== 'en' && 
    detectedLang === 'en' && 
    confidence > 0.85) {
  return {
    passed: false,
    reason: 'Unlocalized English copy in target file'
  };
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 3: The Boundary & Ratio Gate */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    03
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1">
                      Token Distribution Mathematics
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      3. The Boundary & Ratio Gate
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    checkLengthRatio()
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    The <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">checkLengthRatio</code> function is pure mathematics:
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Length Ratio Computation:</strong> It splits both strings into word token arrays and divides the Target count by the Source count (<code className="text-amber-300 font-mono text-xs">ratio = targetWords.length / sourceWords.length</code>).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Preventing Catastrophic Hallucinations:</strong> If the ratio falls outside the boundary <code className="text-amber-300 font-mono text-xs">[0.4, 2.5]</code>, the pair is purged. This prevents the AI from learning from misaligned segments where 1 English word was accidentally mapped to a 50-word foreign paragraph due to database indexing slips.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Mathematical Ratio Boundary</span>
                    <span className="text-amber-400">checkLengthRatio</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`const ratio = tgtWords.length / srcWords.length;

// Strict empirical NLP boundary
if (ratio < 0.4 || ratio > 2.5) {
  return {
    passed: false,
    ratio: Number(ratio.toFixed(2)),
    reason: \`Ratio \${ratio} out of bounds [0.4, 2.5]\`
  };
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 4: Neural Semantic Gating */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    04
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                      Vector Space Divergence (LaBSE)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      4. Neural Semantic Gating (Simulating LaBSE Embeddings)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    simulateSemanticSimilarity()
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    In production, Google LaBSE converts sentences into 768-dimensional vectors and compares their angles via Cosine Similarity (<code className="text-emerald-300 font-mono text-xs">cos(θ)</code>):
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>High-Precision Divergence Detection:</strong> In the JS engine (<code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">simulateSemanticSimilarity</code>), I mocked this with a cross-lingual domain divergence detector.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Catching Legacy Database Misalignments:</strong> It checks whether the English source talks about "Music Streaming" while the Target text talks about "Billing & Invoices" (a common database offset bug). If topics diverge, the Cosine Score drops below 0.75, and the pair is purged immediately.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Semantic Cosine Verification</span>
                    <span className="text-emerald-400">LaBSE Emulation</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`// Cosine similarity threshold >= 0.75
if (cosineScore < 0.75) {
  return {
    passed: false,
    score: cosineScore,
    reason: 'Semantic misalignment (cosine < 0.75)'
  };
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 5: The Tripartite Evaluator */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    05
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">
                      Evaluation Framework
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      5. The Tripartite Evaluator (BLEU, chrF++, COMET)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    calculateBLEU · chrF · COMET
                  </span>
                </div>
              </div>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <p>
                  This is the core of the demo: it demonstrates why production AI localization requires semantic neural scoring over legacy surface matching:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* BLEU */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">calculateBLEU</span>
                        <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-400">Surface N-Gram</Badge>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">Word N-Gram Matching (1 to 4)</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        I wrote a real n-gram matching algorithm (1 to 4 words). It mathematically proves that BLEU fails for transcreation: if the hypothesis uses a valid, idiomatic synonym, the exact word match fails, and BLEU crashes to 0.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-amber-400 font-medium">
                      ⚠️ False Negative on creative synonyms
                    </div>
                  </div>

                  {/* chrF++ */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">calculateChrF</span>
                        <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-400">Subword & Char</Badge>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">Character N-Gram Matching</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        I wrote a character-level matching algorithm. It proves why German works better here: if the reference is <em>Lieblingslied</em> and the model outputs <em>Lieblingssong</em>, chrF++ still awards points because the first 9 characters (<em>Lieblings</em>) match perfectly.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-purple-300 font-medium">
                      ✓ Ideal for German compound words
                    </div>
                  </div>

                  {/* COMET */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">calculateCOMET</span>
                        <Badge variant="outline" className="text-[10px] border-emerald-800 text-emerald-400">Neural Semantic</Badge>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">Cross-Lingual Neural Simulation</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        To mock neural embeddings in JS, I built a dictionary of high-editorial cross-lingual synonyms. If the model uses a colloquial synonym (like translating "drops" as <em>lançamento</em> in Portuguese or <em>disponible</em> in French), COMET awards a bonus. BUT, if the model translates a music "drop" literally as "falling down" (PT: <em>cai</em>, FR: <em>laissez tomber</em>), the script heavily penalizes the score below 0.82, forcing human review.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 font-medium">
                      ★ Industry standard production release gate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Conclusion & Executive Summary Box */}
          <div className="mt-16 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-3 block">
                Executive Takeaway & Business Impact
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                Bridging Linguistic Empathy with Computational Rigor
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                By embedding linguistic expertise directly into the automated data pipeline, I transformed what was once an uncurated, error-prone translation memory into a high-precision, self-sustaining neural asset. The result was not merely a 40% cost reduction on high-volume catalog localization, but the ability to launch worldwide marketing releases across 5 major languages on day one, preserving brand voice and musical authenticity.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#interactive-nmt-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('interactive-nmt-demo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-yellow-300" />
                  <span>Launch Interactive Simulator ↗</span>
                </a>
                <a
                  href="#cost-rationale"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('cost-rationale');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 hover:bg-emerald-900/80 text-emerald-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <TrendingDown size={14} className="text-emerald-400" />
                  <span>Cost & 40% ROI Justification ↓</span>
                </a>
                <Link to="/#portfolio">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                    All Case Studies ↗
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COST RATIONALE & WHY THIS IS A BETTER WAY TO LOCALIZE                     */}
      {/* ========================================================================= */}
      <section id="cost-rationale" className="py-24 border-t border-slate-800/80 bg-[#070b16] relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Coins size={13} className="text-emerald-400" />
              <span>Financial Rationale & Operational Proofs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Cost Rationale & Metric Proofs: Why This Is a Better Way to Localize
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              In enterprise localization leadership, mathematical rigor must accompany linguistic excellence. Here is the operational proof, compute breakdown, and financial ROI model justifying my <strong>40% cost reduction</strong> and <strong>60% turnaround velocity</strong> model, demonstrating why domain-adapted foundation models fundamentally outperform legacy brute-force translation.
            </p>
          </div>

          {/* Part 1: The Metrics Logic (Tripartite Framework) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm">
                1
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                The Metrics Logic: Why a "Tripartite" Framework?
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
              In modern AI translation, no single metric is perfect. Relying on just one metric inevitably passes bad translations or rejects great ones. In this architecture, I deployed a three-pillared quality gate:
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* BLEU */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-7 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">01 • Baseline Check</span>
                    <Badge variant="outline" className="border-indigo-800 text-indigo-300 text-[10px]">Exact N-Grams</Badge>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">BLEU (Word-Level Overlap)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    BLEU strictly measures exact word matches (unigrams through 4-grams).
                  </p>
                  <div className="space-y-3 text-xs text-slate-400">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-emerald-400 block mb-1">Why Use It:</strong>
                      Lightning-fast and great for catching catastrophic errors (e.g. if the model hallucinates or drops an entire sentence, BLEU instantly crashes to near 0).
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-rose-400 block mb-1">The Flaw in Transcreation:</strong>
                      Heavily penalizes creative marketing copy. If the human reference is <em>"Purchase now"</em> and the AI outputs <em>"Buy now"</em>, BLEU awards a score of 0, even though the translation is flawless.
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                  Role: Catastrophic omission filter; never an editorial veto.
                </div>
              </div>

              {/* chrF++ */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-7 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider font-mono">02 • Morphology Check</span>
                    <Badge variant="outline" className="border-purple-800 text-purple-300 text-[10px]">Char & Subword</Badge>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">chrF++ (Character Overlap)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Evaluates character-level $n$-gram overlap instead of whole words.
                  </p>
                  <div className="space-y-3 text-xs text-slate-400">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-purple-300 block mb-1">Why Use It:</strong>
                      Absolutely critical for morphologically rich or agglutinative languages like German, Russian, or Japanese.
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-emerald-400 block mb-1">German Compound Case Study:</strong>
                      In German compound words, if the human reference is <em>Lieblingslied</em> and the AI outputs <em>Lieblingssong</em>, BLEU marks them as 100% different words (0 score); chrF++ recognizes they share the same first 9 root characters (<em>Lieblings-</em>) and awards high partial points.
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-purple-300 font-medium">
                  Role: Prevents false penalties on compound linguistic roots.
                </div>
              </div>

              {/* COMET */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-7 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">03 • Semantic Gate</span>
                    <Badge variant="outline" className="border-emerald-800 text-emerald-300 text-[10px]">Neural Embedding</Badge>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">COMET (Neural Editor)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Evaluates meaning and intent using multilingual neural cross-encoders.
                  </p>
                  <div className="space-y-3 text-xs text-slate-400">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-emerald-400 block mb-1">Why Use It:</strong>
                      Operates like an expert human editor. It maps source, human reference, and AI hypothesis into a shared 768-dim neural vector space to measure true semantic intent.
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      <strong className="text-emerald-400 block mb-1">Transcreation Parity:</strong>
                      If the AI uses a culturally resonant synonym that deviates from the literal source, COMET rewards it. When COMET scores above <strong>0.82</strong>, it is statistically proven to correlate with near human-parity.
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
                  Role: Industry standard automated production release gate.
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: Justification: Why Is This a World-Class Model? */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm">
                2
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Justification: Why Is This a World-Class Training Model?
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
              This methodology is fundamentally more effective than traditional translation memories or brute-force LLMs because it prioritizes <strong>Data Quality</strong> and <strong>Domain Adaptation</strong> over raw compute volume:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Transfer Learning */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold mb-4">
                  <Workflow size={20} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Transfer Learning vs. Tabula Rasa</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of training a model from scratch (<em>Tabula Rasa</em>), which is prohibitively expensive, slow, and prone to catastrophic forgetting, I leveraged an open foundation model (such as Meta's NLLB or MarianMT) with existing global grammatical mastery, fine-tuning it strictly on proprietary brand voice and terminology.
                </p>
              </div>

              {/* Ruthless Sanitization */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Ruthless Pre-Ingestion Sanitization</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  AI models strictly obey <em>"Garbage In, Garbage Out"</em> (GIGO). By enforcing a 5-stage automated gate funnel (stripping HTML, evicting language leaks via fastText, checking sentence ratio boundaries between 0.4 and 2.5, and pruning cosine scores &lt; 0.75), I ensured the model only trains on pristine, high-fidelity parallel segments.
                </p>
              </div>

              {/* Domain Stratification */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold mb-4">
                  <Sliders size={20} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Domain Stratification via Style Tags</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  By injecting contextual tokens (such as <code className="text-purple-300 font-mono text-[11px]">&lt;style:editorial&gt;</code> or <code className="text-purple-300 font-mono text-[11px]">&lt;style:ui_concise&gt;</code>), the single foundation engine modulates its tone dynamically, shifting between punchy 2-word UI buttons and lyrical artist biographies without model sprawl.
                </p>
              </div>
            </div>
          </div>

          {/* Part 3: The Costs of Training & Financial Breakdown */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm">
                3
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                The Costs of Training: Real Cloud Numbers
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
              Training an NMT model from scratch using millions of sentences costs tens of thousands of dollars in massive GPU clusters. However, because this methodology uses <strong>Transfer Learning (Fine-Tuning)</strong> on a clean, condensed dataset (~150,000 curated segments), actual training compute costs are remarkably low:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option A */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-2.5 py-1 rounded">
                    OPTION A • OPEN-SOURCE CLOUD
                  </span>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 text-[10px]">AWS / GCP Dedicated GPU</Badge>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Open-Source Cloud Compute</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Most common for tech enterprises: fine-tuning an open-source model (like NLLB or Llama 3) on custom infrastructure.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-300 bg-slate-950 p-5 rounded-2xl border border-slate-800/80 mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Hardware Instance:</span>
                    <span className="text-white font-bold">1x NVIDIA A100 (80GB)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Compute Hourly Rate:</span>
                    <span className="text-emerald-400 font-bold">$4.00 to $8.00 / hr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Training Duration (~150k pairs):</span>
                    <span className="text-indigo-300 font-bold">2 to 5 hours</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm font-sans font-bold">
                    <span className="text-slate-300">Estimated Cost:</span>
                    <span className="text-emerald-400 font-mono text-base">$20 to $50 / language pair</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Provides total privacy, customized hyperparameters (LoRA/QLoRA), and zero vendor lock-in.
                </p>
              </div>

              {/* Option B */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded">
                    OPTION B • MANAGED CLOUD
                  </span>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 text-[10px]">Google Cloud AutoML</Badge>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Managed Enterprise Services</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Ideal for zero-DevOps pipelines: Google or Azure handles model convergence, provisioning, and autoscaling.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-300 bg-slate-950 p-5 rounded-2xl border border-slate-800/80 mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Managed Service:</span>
                    <span className="text-white font-bold">Google Cloud AutoML Translation</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Fixed Custom Model Training:</span>
                    <span className="text-emerald-400 font-bold">~$45.00 / language direction</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400">Inference Compute:</span>
                    <span className="text-indigo-300 font-bold">Pay-per-character micro-tier</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm font-sans font-bold">
                    <span className="text-slate-300">Estimated Cost:</span>
                    <span className="text-emerald-400 font-mono text-base">$45 to $100 / language pair</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Turnkey enterprise integration with automatic REST API endpoints and zero GPU maintenance overhead.
                </p>
              </div>
            </div>
          </div>

          {/* Part 4: The 40% Cost Reduction: Exact Mathematical Breakdown */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-emerald-950/60 via-slate-900 to-indigo-950/50 border border-emerald-500/50 shadow-2xl relative overflow-hidden">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Calculator size={13} className="text-emerald-300" />
                <span>The Mathematical ROI Proof</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
                The Exact Math Behind the 40% Net Cost Reduction
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-10 font-normal">
                This is how the 40% reduction is calculated, step by step, as I present it to finance leadership and operations executives. Consider an enterprise localization program handling massive global releases:
              </p>

              {/* Step 1: Baseline */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center font-black text-xs">1</span>
                  <h4 className="text-lg font-bold text-white">The Baseline (Before Custom NMT)</h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Total Annual Volume</span>
                    <div className="text-2xl font-black text-white mb-1">25,000,000</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">words localized across global releases per year.</p>
                  </div>
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Average Human Rate</span>
                    <div className="text-2xl font-black text-white mb-1">~$0.112 / word</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">a blended rate across all global languages.</p>
                  </div>
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Total Annual Spend</span>
                    <div className="text-2xl font-black text-white mb-1">$2,800,000</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-mono">25,000,000 × $0.112</p>
                  </div>
                </div>
              </div>

              {/* Step 2: The Problem */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-amber-600/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-black text-xs">2</span>
                  <h4 className="text-lg font-bold text-white">The Problem: Not Every Word Is High-Value</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-3xl">
                  Not all 25 million words are marketing transcreation. In software, roughly <strong>45%</strong> of the volume is repetitive UI buttons (<em>"Cancel Subscription"</em>, <em>"Play"</em>, <em>"Next"</em>), artist metadata, system error alerts, and boilerplate catalog strings.
                </p>
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30 inline-block">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1">Rote / Repetitive Volume</span>
                  <div className="text-2xl font-black text-amber-300 mb-1">11,250,000 words</div>
                  <p className="text-[11px] text-slate-400 font-mono">45% × 25,000,000</p>
                </div>
              </div>

              {/* Step 3: The Intervention */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center font-black text-xs">3</span>
                  <h4 className="text-lg font-bold text-white">The Intervention: Re-Route, Don't Replace</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-3xl">
                  I did not replace human linguists; I re-routed the traffic. Those 11.25M rote words are channeled through the domain-adapted NMT engine. Because outputs clear the <strong>&gt; 0.82 COMET</strong> gate, human linguists only perform light post-editing (MTPE), or the engine publishes directly.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-950 text-slate-300 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="p-4">Workflow (Rote UI / Catalog)</th>
                        <th className="p-4">Cost per Word</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                      <tr>
                        <td className="p-4 text-slate-300">Human translation (tech / UI)</td>
                        <td className="p-4 font-mono text-rose-300 font-bold">~$0.13</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-300">Custom NMT + light MTPE / direct publish</td>
                        <td className="p-4 font-mono text-emerald-300 font-bold">~$0.03</td>
                      </tr>
                      <tr className="bg-emerald-950/30">
                        <td className="p-4 font-bold text-white">Net savings per word</td>
                        <td className="p-4 font-mono text-emerald-400 font-black">$0.10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 4: The Proof */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-black text-xs">4</span>
                  <h4 className="text-lg font-bold text-white">The Mathematical ROI Proof (The 40%)</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">Volume × Savings</span>
                      <div className="text-xl sm:text-2xl font-black text-white mb-2">11,250,000 × $0.10</div>
                    </div>
                    <p className="text-[11px] text-slate-400">automated volume × savings per word</p>
                  </div>
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">Total Annual Savings</span>
                      <div className="text-2xl font-black text-emerald-400 mb-2">$1,125,000</div>
                    </div>
                    <p className="text-[11px] text-slate-400">recovered every year</p>
                  </div>
                  <div className="bg-emerald-950/50 p-5 rounded-2xl border border-emerald-400/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block mb-1">Savings ÷ Original Spend</span>
                      <div className="text-xl sm:text-2xl font-black text-white mb-1 font-mono">$1,125,000 ÷ $2,800,000</div>
                      <div className="text-sm text-emerald-200 font-mono">= 0.4018</div>
                    </div>
                    <div className="mt-3 text-3xl font-black text-emerald-400">≈ 40% Cost Reduction</div>
                  </div>
                </div>
              </div>

              {/* Beyond Rate Arbitrage + Reinvestment */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="font-bold text-white text-base flex items-center gap-2 mb-2">
                    <Scale size={18} className="text-emerald-400" />
                    <span>It's Not Just About Paying Translators $0.10 Less</span>
                  </div>
                  <p>
                    The real leverage is no longer needing to translate the phrase <em>"Cancel Subscription"</em> 500 times. A domain-adapted engine, backed by clean translation memory, handles repetition and consistency at near-zero marginal cost, so human attention goes only where it adds value.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="font-bold text-white text-base flex items-center gap-2 mb-2">
                    <Coins size={18} className="text-emerald-400" />
                    <span>Reinvest the $1.1M in Human-in-the-Loop Talent</span>
                  </div>
                  <p>
                    The best use of the savings is to reinvest them in <strong>top-tier premium rates for expert linguists</strong> on high-visibility, creative marketing copy, where human empathy and cultural nuance actually matter. Automation funds the craft.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed mb-8">
                Investment note: fine-tuning the engine costs roughly $20 to $100 per language pair in compute (see Option A / Option B above), a rounding error against $1.125M in annual savings.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#interactive-nmt-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('interactive-nmt-demo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-yellow-300" />
                  <span>Test Quality Gating in Demo ↗</span>
                </a>
                <Link to="/#portfolio">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                    All Portfolio Case Studies ↗
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Part 5: Headline Metrics Justification: Operational Velocity & Quality Proofs */}
          <div id="metrics-justification" className="mt-20 pt-16 border-t border-slate-800/80">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-black text-sm">
                5
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Headline Metrics Justification: Operational Velocity & Quality Proofs
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-10 font-normal">
              In executive briefings and leadership interviews, numbers without transparent derivation lose credibility. Below is the operational and mathematical proof backing my headline metrics, grounded in standard localization benchmarks and explicit scope boundaries.
            </p>

            <div className="space-y-8">
              {/* 1. The 60% Time Reduction (Turnaround Velocity) */}
              <div id="metric-velocity-proof" className="scroll-mt-24 p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/30 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">Metric 01 • Turnaround Velocity</span>
                      <h4 className="text-xl font-bold text-white">60% Time Reduction (Human vs. Post-Editing Math)</h4>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-indigo-800 text-indigo-300 text-[10px]">
                    Catalog & UI Tier (11.25M Words)
                  </Badge>
                </div>

                {/* Plain-terms analogy */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/90 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-indigo-300 block mb-1">The Core Intuition in Plain Terms:</strong>
                  Translating from scratch is like writing an entire letter starting from a blank page. Post-editing is like reviewing and lightly correcting a well-formed draft someone has already produced. Reviewing a qualified draft is inherently faster than drafting from scratch.
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {/* Step 1 */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Step 1 • Human Scratch Baseline</span>
                    <div className="text-2xl font-black text-white mb-2">2,500 words/day</div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      Standard industry benchmark for a professional human translator (typically quoted at 2,000 to 3,000 words/day).
                    </p>
                    <div className="pt-2 border-t border-slate-850 font-mono text-[11px] text-indigo-300">
                      Time per 1,000 words:<br />
                      <strong>1,000 ÷ 2,500 = 0.40 days</strong> (3.2 hrs)
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Step 2 • Engine Draft + MTPE</span>
                    <div className="text-2xl font-black text-indigo-300 mb-2">6,250 words/day</div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      When outputs clear the ≥ 0.82 COMET gate on repetitive UI strings and catalog metadata, linguists switch from typing to reviewing.
                    </p>
                    <div className="pt-2 border-t border-slate-850 font-mono text-[11px] text-emerald-300">
                      Time per 1,000 words:<br />
                      <strong>1,000 ÷ 6,250 = 0.16 days</strong> (1.28 hrs)
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-gradient-to-br from-indigo-950/60 to-slate-950 p-5 rounded-2xl border border-indigo-500/40 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block mb-1">Step 3 • The Mathematical Proof</span>
                      <div className="font-mono text-sm sm:text-base text-white font-bold mb-2">
                        (0.40 − 0.16) ÷ 0.40
                      </div>
                      <div className="text-xs text-slate-300 font-mono mb-2">= 0.24 ÷ 0.40 = 0.60</div>
                    </div>
                    <div className="pt-2 border-t border-indigo-800/60">
                      <div className="text-2xl font-black text-indigo-400 tracking-tight">60% Time Saved</div>
                      <span className="text-[10px] text-slate-400">on catalog & repetitive UI volume</span>
                    </div>
                  </div>
                </div>

                {/* Scope Caveat */}
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 flex items-start gap-3 text-xs text-slate-300">
                  <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 block mb-0.5">Critical Scope Caveat:</strong>
                    This 60% acceleration applies strictly to the <strong>45% catalog & repetitive UI volume tier</strong> (11.25M words). High-visibility editorial, artist storytelling, and marketing campaign headlines are intentionally preserved for unhurried human transcreation.
                  </div>
                </div>
              </div>

              {/* 2. 94% MTPE Parity (Linguist Acceptance) */}
              <div id="metric-parity-proof" className="scroll-mt-24 p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                      <Award size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">Metric 02 • Linguistic Quality</span>
                      <h4 className="text-xl font-bold text-white">94% MTPE Acceptance & Quality Parity</h4>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-800 text-emerald-300 text-[10px]">
                    MQM / DQF Blind QA Framework
                  </Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 md:col-span-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-2">How 94% Parity Is Measured in Production:</strong>
                    Under blind side-by-side linguistic evaluation using the industry-standard <strong>Multidimensional Quality Metrics (MQM)</strong> framework, <strong>94% of translated segments</strong> in the UI and catalog streams met or exceeded the human benchmark release standard with zero edits or minor cosmetic adjustments (e.g. non-breaking spaces or brand casing).
                    <p className="mt-3 text-slate-400 text-xs">
                      Only <strong>6% of segments</strong> required structural re-translation by a senior linguist, demonstrating that my domain stratification tokens (<code className="text-purple-300 font-mono text-[10px]">&lt;style:ui_concise&gt;</code>) successfully prevent syntactic drift and hallucination.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Human-in-the-Loop Principle</span>
                      <div className="text-2xl font-black text-white mb-2">94% Accepted</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Linguists are relieved from re-translating standard UI buttons, shifting their energy toward creative brand voice.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-300 font-medium">
                      Zero human displacement; 100% human-guided oversight.
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 0.85+ COMET Score & >= 0.75 Cosine Gate */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* 0.85+ COMET Score */}
                <div id="metric-comet-proof" className="scroll-mt-24 p-8 rounded-3xl bg-slate-900/80 border border-purple-500/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 font-mono">Metric 03 • Semantic Gate</span>
                      <Badge variant="outline" className="border-purple-800 text-purple-300 text-[10px]">Cross-Encoder Embedding</Badge>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">0.85+ COMET Score Threshold</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Why set the release bar at <strong>0.85+</strong> when the academic threshold for human parity is typically <strong>0.80 to 0.82</strong>?
                    </p>
                    <div className="space-y-3 text-xs text-slate-400">
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                        <strong className="text-purple-300 block mb-1">Crosslingual Optimized Metric (COMET):</strong>
                        COMET evaluates source, hypothesis, and human reference simultaneously inside a 768-dimensional multilingual transformer space, scoring meaning and tone rather than literal word overlap.
                      </div>
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                        <strong className="text-emerald-400 block mb-1">The Enterprise Safety Margin:</strong>
                        Setting an internal release bar at <strong>0.85+</strong> creates a strict safety buffer. Translations clearing this gate are guaranteed to be free of embarrassing cultural slips or brand tone drift before reaching users.
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-purple-300 font-medium">
                    Automated pass threshold: segments ≥ 0.85 advance directly to production or light MTPE.
                  </div>
                </div>

                {/* >= 0.75 Cosine Gate */}
                <div id="metric-cosine-proof" className="scroll-mt-24 p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">Metric 04 • Alignment Filter</span>
                      <Badge variant="outline" className="border-indigo-800 text-indigo-300 text-[10px]">LaBSE 768-Dim Vector</Badge>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">≥ 0.75 Cosine Gate (LaBSE Purity)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Why does the pre-ingestion pipeline strictly discard any training pair with <strong>Cosine Similarity &lt; 0.75</strong>?
                    </p>
                    <div className="space-y-3 text-xs text-slate-400">
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                        <strong className="text-indigo-300 block mb-1">Catching Legacy TM Corruption:</strong>
                        Legacy translation memories frequently suffer from offset bugs (e.g. source cell talks about <em>"Music Streaming"</em> while target was misaligned to <em>"Billing Terms"</em>). At cosine &lt; 0.75, semantic divergence is severe.
                      </div>
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                        <strong className="text-emerald-400 block mb-1">Preventing Catastrophic Hallucinations:</strong>
                        AI models strictly follow <em>Garbage In, Garbage Out</em> (GIGO). Dropping misaligned pairs guarantees the model fine-tunes solely on pristine, faithfully matched sentence pairs.
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-indigo-300 font-medium">
                    Enforced in Step 2: all pairs &lt; 0.75 are evicted before dataset partitioning.
                  </div>
                </div>
              </div>

              {/* 4. Professional Framing: Why I Frame This as a "Modeled ROI" */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    <Scale size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Professional Credibility: Why I Frame This as a "Modeled ROI"
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      In professional executive interviews and VP-level strategy reviews, claiming unverified "blanket perfection" immediately triggers skepticism. By openly classifying these figures as a <strong>modeled operational ROI</strong> backed by stated mathematical parameters (25M annual words, $0.112 blended rate, 45% catalog volume, 2,500 vs. 6,250 words/day), I demonstrate:
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-3 text-xs text-slate-400 pt-2 border-t border-slate-850">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Transparent operational assumptions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Clear boundaries between copy tiers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Respect for human linguistic craftsmanship</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Concluding Navigation CTAs */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#interactive-nmt-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('interactive-nmt-demo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-yellow-300" />
                  <span>Test Quality Gating in Live Demo ↗</span>
                </a>
                <Link to="/#portfolio">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                    All Portfolio Case Studies ↗
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {modalImage && (
        <div 
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-3xl p-4 overflow-hidden shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
            <div className="max-h-[80vh] flex items-center justify-center overflow-auto p-4">
              <img 
                src={modalImage} 
                alt="Expanded View" 
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TrainingNMTCaseStudy;
