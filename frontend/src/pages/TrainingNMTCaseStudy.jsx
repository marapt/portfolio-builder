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
  Award
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const TrainingNMTCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStep, setActiveStep] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          desc: "Discards extreme paragraph outliers (>100–120 words) that degrade Transformer attention matrices. Enforces strict length-ratio heuristics (0.4 to 2.5) to catch sentence boundary misalignments where single sentences were erroneously paired with entire paragraphs."
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
          desc: "Leverages pre-trained multilingual foundation models (NLLB, Marian, AutoML) that already possess deep syntactic and grammatical competence, adapting them using 50k–300k curated domain pairs in hours rather than months."
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
      executiveQuote: "When evaluating an engine before release, I look at the metrics as a tripartite stack: I use BLEU strictly as an automated sanity check for catastrophic drops in word-order alignment or token loss. I use chrF++ to ensure we aren't suffering morphological or compound-word penalties in complex languages like German, Russian, or Japanese. Crucially for Apple Music editorial, our primary automated gate is COMET. Because COMET evaluates neural semantic embeddings rather than literal word matches, it recognizes when our model uses a valid, culturally resonant synonym. If an engine doesn't hit our target COMET threshold (>0.82), it doesn't advance to human blind testing."
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
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-3xl font-black text-indigo-400 mb-1 tracking-tight">60%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time Reduction</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-3xl font-black text-purple-400 mb-1 tracking-tight">0.85+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">COMET Score</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-3xl font-black text-emerald-400 mb-1 tracking-tight">94%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MTPE Parity</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-3xl font-black text-indigo-300 mb-1 tracking-tight">≥0.75</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cosine Gate</div>
                </div>
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

      {/* Sticky Step Navigation */}
      <section className="sticky top-20 z-40 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
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

      {/* Cross-Link / Related Projects CTA */}
      <section className="py-20 border-t border-slate-800 bg-[#060911]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950/50 border border-slate-800 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-2 block">
                Related Production Application
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Explore the AI Translation Engine App
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                See the corresponding interactive application showcase, featuring full-scale enterprise localization workflow metrics, team collaboration models, and client delivery results.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/project/ai-translation-engine">
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-6 rounded-2xl font-black uppercase tracking-wider text-xs shadow-xl shadow-indigo-600/20">
                  View Translation Engine App ↗
                </Button>
              </Link>
              <Link to="/#portfolio">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 rounded-2xl font-black uppercase tracking-wider text-xs">
                  All Case Studies
                </Button>
              </Link>
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
