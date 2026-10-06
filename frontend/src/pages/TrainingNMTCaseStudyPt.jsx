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
  Zap,
  MessageSquareQuote,
  FileText
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import NMTInteractiveDemo from '../components/NMTInteractiveDemo';

const TrainingNMTCaseStudyPt = () => {
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
      tag: "Passo 01",
      icon: Filter,
      title: "Saneamento Heurístico e Limpeza do Corpus",
      subtitle: "Pré-filtragem determinística em CPU e validação de similaridade semântica em GPU",
      objective: "Eliminar ruído, tags malformadas, desfasamentos de limites frásicos e traduções corrompidas das Memórias de Tradução brutas antes do treino.",
      items: [
        {
          name: "Normalização Estrutural e Limpeza de Tags",
          desc: "Elimina tags HTML/XML corrompidas, descodifica entidades HTML, normaliza apóstrofos e aspas curvas, e substitui marcadores de software (%s, {0}, rdar://) por marcadores atómicos padronizados (<var>) para manter a integridade sintática sem confundir o tokenizador."
        },
        {
          name: "Filtragem de Identificação de Idioma (LangID)",
          desc: "Executa classificadores neurais leves de idioma (fastText e Google CLD3) nas colunas de origem e destino com um limiar rigoroso de confiança ≥98%, descartando texto em inglês não traduzido ou segmentos encaminhados para o idioma errado."
        },
        {
          name: "Limites Frásicos e Proporção de Comprimento",
          desc: "Descarta parágrafos anómalos excessivamente longos (>100 a 120 palavras) que degradam as matrizes de atenção dos Transformers. Aplica limites estritos de proporção de comprimento (0.4 a 2.5) para detetar emparelhamentos errados entre frases individuais e parágrafos inteiros."
        },
        {
          name: "Poda por Similaridade Semântica Neural (LaBSE / Laser)",
          desc: "Converte pares frásicos bilingues em representações vetoriais de alta dimensão com Language-Agnostic BERT Sentence Embeddings (LaBSE). Elimina todos os pares cuja Semelhança por Cosseno seja inferior a 0.75, purgando traduções legadas desalinhadas."
        },
        {
          name: "Deduplicação Exata e Difusa com Remoção de PII",
          desc: "Agrupa strings repetitivas de elevado volume na interface gráfica (por exemplo, 'Cancelar Subscrição' com dezenas de milhares de ocorrências) via MinHash e distância de Levenshtein. Remove identificadores internos, referências de tickets, emails de colaboradores e nomes de código confidenciais."
        }
      ],
      artifacts: [
        {
          url: "/assets/nmt/image8.png",
          title: "Arquitetura do Pipeline Ponta a Ponta",
          caption: "Fluxo arquitetural de dados desde a ingestão da memória de tradução bruta até ao corpus bilingue sanitizado."
        },
        {
          url: "/assets/nmt/image7.png",
          title: "Painel de Taxas de Retenção e Descarte",
          caption: "Telemetria interativa do pipeline indicando percentagens de descarte em LangID, proporção de comprimento e validação semântica."
        },
        {
          url: "/assets/nmt/image6.png",
          title: "Resultado da Transformação por Filtragem",
          caption: "Análise bilingue comparativa antes e depois da normalização de tags e dos limites de pontuação de cosseno."
        },
        {
          url: "/assets/nmt/image4.png",
          title: "Script de Pré-Filtragem Estrutural em CPU",
          caption: "Implementação em Python com multithreading para normalização por regex e verificação de idioma via fastText."
        },
        {
          url: "/assets/nmt/image5.png",
          title: "Script de Alinhamento Semântico em GPU",
          caption: "Produtos internos matriciais vetorizados calculando a similaridade de cosseno unitária do modelo LaBSE."
        }
      ]
    },
    {
      step: 2,
      tag: "Passo 02",
      icon: Layers,
      title: "Estratificação por Domínio e Injeção de Contexto",
      subtitle: "Isolamento vertical e marcadores de metadados para conferir sensibilidade tonal ao modelo",
      objective: "Organizar dados bilingues limpos em verticais funcionais distintas e injetar metadados gramaticais e estilísticos diretamente na string de origem.",
      items: [
        {
          name: "Estratificação de Subdomínios (Isolamento Vertical)",
          desc: "Divide os dados empresariais heterogéneos em subdomínios funcionais: Conteúdo Editorial Narrativo Longo (biografias de artistas, críticas de álbuns), Strings de Navegação de UI de Alta Densidade e Campanhas de Marketing de Ação Imediata."
        },
        {
          name: "Injeção de Metadados e Marcadores de Contexto",
          desc: "Adiciona marcadores operacionais no início do texto de origem: marcadores de estilo (<style:editorial>), indicadores de domínio (<domain:music>) e marcadores de formalidade (<formality:informal>) para o modelo aprender comportamentos dependentes de contexto."
        },
        {
          name: "Mascaramento de Entidades e Termos Não Traduzíveis",
          desc: "Aplica máscaras atómicas (<var>) em referências de artistas, títulos de álbuns e nomenclaturas de hardware, impedindo que o motor traduza literalmente nomes próprios para o idioma de destino."
        }
      ]
    },
    {
      step: 3,
      tag: "Passo 03",
      icon: Database,
      title: "Divisão do Dataset e Governação sem Fugas",
      subtitle: "Particionamento 80/10/10 com isolamento ao nível de documento e campanha",
      objective: "Evitar contaminação de dados entre os conjuntos de treino, validação e teste para garantir métricas de produção realistas.",
      items: [
        {
          name: "Conjunto de Treino (80% | ~160.000 segmentos)",
          desc: "O corpus principal de aprendizagem. O modelo itera sobre estes pares ao longo de múltiplas épocas, otimizando os pesos neurais internos e as matrizes de atenção via retropropagação."
        },
        {
          name: "Conjunto de Validação / Dev (10% | ~20.000 segmentos)",
          desc: "Utilizado durante o treino para calcular a perda de validação em cada época. Funciona como gatilho de Paragem Antecipada (Early Stopping), interrompendo o processo assim que a perda deixa de melhorar para prevenir sobreajuste (overfitting)."
        },
        {
          name: "Conjunto de Teste Cego (10% | ~20.000 segmentos)",
          desc: "Mantido em isolamento absoluto durante todos os ciclos de treino. Utilizado exclusivamente após o treino final para avaliar o verdadeiro desempenho de generalização em novos lançamentos e conteúdos nunca vistos."
        },
        {
          name: "Prevenção de Contaminação (Data Leakage)",
          desc: "Elimina duplicados difusos e segmentos padrão entre divisões. Particiona dados rigorosamente pelas fronteiras de documento, álbum e artista em vez de linhas aleatórias, garantindo testes fiáveis com entidades inéditas."
        }
      ]
    },
    {
      step: 4,
      tag: "Passo 04",
      icon: Cpu,
      title: "Transfer Learning e Adaptação de Domínio",
      subtitle: "Adaptação de modelos fundacionais multilingues sem esquecimento catastrófico",
      objective: "Especializar um modelo Transformer pré-treinado de grande capacidade no tom de voz da marca através de transfer learning, em vez de treinar de raiz.",
      items: [
        {
          name: "Transfer Learning versus Tabula Rasa",
          desc: "Aproveita modelos fundacionais multilingues pré-treinados (NLLB, Marian, AutoML) com forte competência sintática e gramatical, adaptando-os com 50.000 a 300.000 pares de domínio selecionados em poucas horas."
        },
        {
          name: "Prevenção de Esquecimento Catastrófico",
          desc: "Mantém taxas de aprendizagem conservadoras (1e-5 a 5e-5) e intercala buffers de repetição de idioma genérico para que a rede refine o vocabulário específico sem perder as regras gramaticais estruturais."
        },
        {
          name: "Descodificação Restrita para Glossários Obrigatórios",
          desc: "Implementa descodificação com pesquisa em feixe restrita baseada em trie durante a inferência, garantindo 100% de conformidade com marcas registadas e terminologia estipulada."
        }
      ]
    },
    {
      step: 5,
      tag: "Passo 05",
      icon: BarChart3,
      title: "Framework Tripartido de Avaliação de Métricas",
      subtitle: "Equilíbrio entre exatidão superficial, flexões morfológicas e semântica neural profunda",
      objective: "Implementar um conjunto rigoroso de gates automatizados combinando BLEU, chrF++ e COMET neural antes de submeter qualquer motor a testes cegos com linguistas humanos.",
      metrics: [
        {
          name: "BLEU",
          level: "n-gramas de palavras inteiras",
          semantic: "Nenhuma (Exatidão superficial)",
          role: "Verificação de Integridade Básica",
          pros: "Cálculo instantâneo; referência histórica para sinalizar quebras no alinhamento de palavras ou omissão de orações.",
          cons: "Penaliza severamente sinónimos legítimos, paráfrases e reestruturações editoriais criativas."
        },
        {
          name: "chrF++",
          level: "n-gramas de carateres + Palavras",
          semantic: "Morfologia de superfície",
          role: "Gate de Precisão Morfológica",
          pros: "Excecional para palavras compostas e idiomas com declinações complexas (alemão, russo, finlandês, japonês).",
          cons: "Incapaz de reconhecer paráfrases completas ou estruturas idiomáticas alternativas."
        },
        {
          name: "COMET",
          level: "Embeddings Neurais Profundos (Transformer)",
          semantic: "Semântica Interlinguística Profunda",
          role: "Gate Primário de Qualidade Editorial (>0.82)",
          pros: "Incorpora origem, hipótese e referência num espaço vetorial partilhado; correlaciona-se estreitamente com a avaliação editorial humana e premeia sinónimos válidos.",
          cons: "Requer computação em GPU; funciona como modelo neural."
        }
      ],
      executiveQuote: "Ao avaliar um motor antes do lançamento em produção, encaro as métricas como uma estrutura em três camadas: utilizo o BLEU estritamente como verificação automatizada para quedas catastróficas na ordem das palavras ou perda de tokens. Utilizo o chrF++ para garantir que o modelo não sofre penalizações morfológicas em idiomas de alta complexidade flexional como alemão, russo ou japonês. No entanto, para o conteúdo editorial de marcas como a Apple Music, o meu gate automatizado principal é o COMET. Dado que o COMET avalia embeddings semânticos neurais em vez de correspondências literais de palavras, reconhece quando o modelo recorre a um sinónimo culturalmente natural e válido. Se um motor não atingir o meu limiar de COMET (>0.82), não avança para testes cegos com linguistas humanos."
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
              Voltar ao Portfólio
            </Link>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Estudo de Caso Técnico Aprofundado</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Tradução Automática Neural
                </Badge>
                <Badge className="bg-slate-900 border border-slate-700 text-slate-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Adaptação de Domínio
                </Badge>
                <Badge className="bg-slate-900 border border-slate-700 text-slate-300 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Gate de Métricas COMET
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
                Treino e Otimização de um <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Motor NMT Sob Medida</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
                Uma metodologia testada em produção que abrange <strong>saneamento heurístico</strong>, <strong>filtragem de alinhamento neural (LaBSE)</strong>, <strong>estratificação de domínio</strong>, <strong>divisão sem fugas</strong> e um <strong>gate tripartido de avaliação de métricas</strong> para localização editorial de nível empresarial.
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
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Redução de Tempo</div>
                  <div className="text-[10px] text-indigo-300/80 font-medium mt-1">Catálogo e UI Repetitiva</div>
                </a>

                <a
                  href="#cost-rationale"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('cost-rationale');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-emerald-400 tracking-tight group-hover:text-emerald-300">40%</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Economia Líquida</div>
                  <div className="text-[10px] text-emerald-300/80 font-medium mt-1">ROI Empresarial Modelado</div>
                </a>

                <a
                  href="#metric-parity-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-parity-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-purple-400 tracking-tight group-hover:text-purple-300">94%</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Paridade MTPE</div>
                  <div className="text-[10px] text-purple-300/80 font-medium mt-1">Meta de Qualidade MQM</div>
                </a>

                <a
                  href="#metric-cosine-proof"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('metric-cosine-proof');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-indigo-400/60 p-4 rounded-2xl transition-all block group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-3xl font-black text-indigo-300 tracking-tight group-hover:text-indigo-200">≥0.75</div>
                    <ArrowUpRight size={13} className="text-slate-500 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Gate de Cosseno</div>
                  <div className="text-[10px] text-slate-400 mt-1">Filtro Alinhamento LaBSE</div>
                </a>
              </div>

              {/* Modeled ROI & Benchmarks Disclosure */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 -mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  * Os valores refletem um <strong>ROI operacional modelado</strong> e limites de referência para cargas de trabalho de localização empresarial. Clique em qualquer métrica para analisar a respetiva prova matemática.
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
                  <span>Experimentar Demonstração Interativa ↓</span>
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
                  <span>Metodologia em 5 Passos</span>
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
                    alt="Painel Visual Interativo do Pipeline" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl">
                      <ZoomIn size={16} /> Expandir Painel de Arquitetura
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Telemetria Interativa do Pipeline e Retenção</span>
                  <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px]">Clique para ampliar ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Statement & Personal Intent - Speech Balloon */}
      <section className="py-12 bg-gradient-to-b from-[#070b14] via-[#090e1f] to-[#060a14] border-b border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Mara Martins Avatar & Author Identification */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4">
              <div className="relative">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden ring-4 ring-indigo-500/30 border-2 border-indigo-400/80 shadow-2xl shadow-indigo-500/20">
                  <img
                    src="/miis-headshot.jpg"
                    alt="Mara Martins"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full ring-2 ring-slate-950 shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                  <span>Autora</span>
                </div>
              </div>
              <div className="text-center sm:text-left lg:text-left">
                <div className="text-base font-black text-white">Mara Martins</div>
                <div className="text-xs text-indigo-300 font-semibold">Líder de Localização e Gestora de Programas de IA</div>
                <div className="text-[11px] text-slate-400 mt-1">Ex-Professora Convidada no Middlebury Institute (MIIS)</div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-2.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-300">
                    Projeto Pessoal
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-700/50 text-purple-300">
                    Investigação Independente
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Talking Balloon Speech Bubble */}
            <div className="lg:col-span-8 relative">
              <div className="relative bg-gradient-to-br from-indigo-950/70 via-slate-900/95 to-purple-950/50 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Speech Balloon Pointer / Notch */}
                <div className="hidden lg:block absolute -left-3 top-10 w-6 h-6 bg-slate-900 border-l border-b border-indigo-500/40 transform rotate-45" />
                <div className="lg:hidden absolute left-10 -top-3 w-6 h-6 bg-slate-900 border-t border-l border-indigo-500/40 transform rotate-45" />

                {/* Speech Balloon Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center">
                      <MessageSquareQuote size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block">
                        Nota da Autora e Intenção Pessoal
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        Porque Criei Este Estudo de Caso para Mim Própria
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    Retrospetiva na Primeira Pessoa
                  </span>
                </div>

                {/* Speech Balloon Body Copy */}
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  <p>
                    "Criei este estudo de caso interativo para mim própria como um laboratório técnico independente e portefólio de referência. Ao longo dos meus mais de 15 anos a liderar localização e gestão de programas em empresas tecnológicas de Silicon Valley, observei que as discussões em torno da tradução por inteligência artificial oscilam frequentemente entre dois extremos: apresentações executivas que simplificam em excesso os riscos de qualidade, ou benchmarks de engenharia isolados que não se conectam com a realidade de custos e resultados empresariais.
                  </p>
                  <p>
                    Quis demonstrar a mim própria como funciona, na prática e de ponta a ponta, uma arquitetura de Tradução Automática Neural de nível empresarial executada com rigor. Ao articular uma limpeza heurística minuciosa e filtragem de alinhamento neural com LaBSE a um framework de avaliação tripartido (BLEU, chrF++ e COMET), provo como uma organização consegue reduzir 40% do orçamento líquido de localização e acelerar os prazos de entrega em 60% no conteúdo de catálogo repetitivo, mantendo em simultâneo a transcriação humana nos ativos de marketing criativo de maior visibilidade.
                  </p>
                  <p className="text-slate-300">
                    Este projeto sintetiza a minha experiência a desenhar fluxos de trabalho globais, a lecionar gestão de tradução no Middlebury Institute of International Studies (MIIS) e a implementar sistemas responsáveis de IA. Representa o meu padrão de referência sobre como os programas modernos de localização de alta velocidade devem ser arquitetados, avaliados e geridos."
                  </p>
                </div>

                {/* Talking Balloon Footer Badges & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                    <span className="text-emerald-400 font-semibold">✓ Projeto 100% Independente</span>
                    <span className="text-slate-600">•</span>
                    <span>Modelos com Benchmarks Sintéticos</span>
                    <span className="text-slate-600">•</span>
                    <span>Sem Dados Proprietários Divulgados</span>
                  </div>
                  <a
                    href="#references"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('references');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white transition-colors"
                  >
                    <span>Aceder a Referências Académicas</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Research & Educational Disclaimer Card */}
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-start gap-3.5 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-200 block mb-0.5">
                    Aviso de Demonstração de Portefólio e Âmbito de Investigação:
                  </strong>
                  Este estudo de caso é uma análise técnica independente criada por Mara Martins para apresentação profissional de portefólio, referência académica e avaliação técnica. Todos os números operacionais (incluindo o volume anual modelado de 25 milhões de palavras e a taxa humana combinada de 0,112 $), cálculos financeiros e segmentos de texto do pipeline representam cenários empresariais modelados derivados de literatura pública do setor e parâmetros padrão de localização. Não divulgam, referenciam nem refletem dados confidenciais ou proprietários de qualquer entidade empregadora, cliente ou parceiro.
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
              <span>Demonstração Interativa</span>
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
              <span>Nos Bastidores</span>
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
              <span>Racional de Custos e ROI</span>
            </a>
            <div className="h-6 w-px bg-slate-800 flex-shrink-0" />
            <a
              href="#references"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('references');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border bg-purple-950/40 border-purple-500/50 text-purple-300 hover:text-white hover:border-purple-400 shadow-sm"
            >
              <BookOpen size={13} className="text-purple-400" />
              <span>Referências e Investigação</span>
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
                  {stepsData[activeStep].tag} • Metodologia de Produção
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
                      {activeStep === 0 ? 'Abrir Simulador de Saneamento do Passo 1 ↑' : 'Testar BLEU, chrF++ e COMET no Simulador ↑'}
                    </span>
                  </button>
                )}
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 max-w-md self-start">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Objetivo da Fase</div>
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

            {/* Step 5 Special: Tripartite Metric Comparison Cards */}
            {stepsData[activeStep].metrics && (
              <div className="mb-12">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {stepsData[activeStep].metrics.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      className={`p-6 rounded-2xl border transition-all ${
                        m.name === 'COMET'
                          ? 'bg-gradient-to-b from-indigo-950/60 to-slate-950 border-indigo-500/60 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500/30'
                          : 'bg-slate-950/70 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-white">{m.name}</span>
                        <Badge className={`text-[10px] font-bold ${
                          m.name === 'COMET' 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {m.role}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-6 text-xs">
                        <div>
                          <span className="text-slate-400 font-bold uppercase text-[9px] block">Nível de Análise</span>
                          <span className="text-slate-200 font-medium">{m.level}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-bold uppercase text-[9px] block">Sensibilidade Semântica</span>
                          <span className="text-indigo-300 font-medium">{m.semantic}</span>
                        </div>
                      </div>

                      <div className="border-t border-slate-850 pt-4 space-y-2 text-xs">
                        <div className="text-emerald-400 font-medium flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" />
                          <span>{m.pros}</span>
                        </div>
                        <div className="text-rose-400/90 font-medium flex items-start gap-1.5">
                          <AlertTriangle size={13} className="flex-shrink-0 mt-0.5" />
                          <span>{m.cons}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Executive Quote Callout */}
                <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 relative overflow-hidden">
                  <div className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2 flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>Princípio Editorial de Decisão</span>
                  </div>
                  <p className="text-sm text-slate-200 italic leading-relaxed">
                    "{stepsData[activeStep].executiveQuote}"
                  </p>
                </div>
              </div>
            )}

            {/* Artifacts Gallery */}
            {stepsData[activeStep].artifacts && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Evidências Técnicas e Painéis Visuais
                  </h3>
                  <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                    {stepsData[activeStep].artifacts.length} Imagens Registadas
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stepsData[activeStep].artifacts.map((art, aIdx) => (
                    <div
                      key={aIdx}
                      onClick={() => setModalImage(art.url)}
                      className="group bg-slate-950 border border-slate-800 rounded-2xl p-3 cursor-pointer hover:border-indigo-500/60 transition-all hover:-translate-y-1 duration-300 shadow-lg"
                    >
                      <div className="relative overflow-hidden rounded-xl h-44 bg-slate-900 flex items-center justify-center mb-3">
                        <img 
                          src={art.url} 
                          alt={art.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <ZoomIn size={14} /> Ampliar
                          </span>
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {art.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Under the Hood Deep Dive Section */}
      <section id="under-the-hood" className="py-20 bg-[#060913] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="text-indigo-400" size={18} />
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400">
                Engenharia de Produção
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Nos Bastidores: O Pipeline em Ação
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Apresento aqui o código em Python, os limites matemáticos de cosseno e os cálculos precisos de ROI que sustentam as afirmações de qualidade e redução orçamental.
            </p>
          </div>

          {/* Deep Dive Pillars */}
          <div className="space-y-12">
            
            {/* Pillar 1: Subword Tokenization & Vocabulary Sizing */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    01
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">
                      Tokenização em Subpalavras
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      1. Tokenização BPE e SentencePiece com Dimensionamento Dinâmico de Vocabulário
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    SentencePiece · Byte-Pair Encoding
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    Nos motores de NMT de nível empresarial, as palavras nunca são introduzidas de forma literal. Utilizei algoritmos de <strong>Byte-Pair Encoding (BPE)</strong> e <strong>SentencePiece</strong> para fragmentar os termos em unidades subpalavra estatisticamente frequentes.
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Gestão de Palavras Desconhecidas (OOV):</strong> O modelo nunca falha com tokens desconhecidos (<code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">&lt;unk&gt;</code>). Termos raros como <em>"Dolby Atmos"</em> ou <em>"Spatial Audio"</em> são fragmentados de forma previsível e coerente.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Equilíbrio de Vocabulário Bilingue:</strong> O tamanho do vocabulário foi fixado em 32.000 tokens unificados, assegurando capacidade suficiente para português, inglês, alemão e francês sem inflacionar a matriz softmax final.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Exemplo de Tokenização em Subpalavras</span>
                    <span className="text-indigo-400">BPE / SentencePiece</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`# Origem: "Streaming em Áudio Espacial"
[Tokens]: [" Stream", "ing", " em", " Áudio", " Espac", "ial"]

# Destino: "Reprodução sem perdas"
[Tokens]: [" Reprod", "ução", " sem", " perd", "as"]`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 2: Semantic Alignment via LaBSE */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    02
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">
                      Filtragem de Alinhamento Neural
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      2. Limiar de Similaridade por Cosseno Multilingue (LaBSE Matrix Math)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    LaBSE · Dimensão Vetorial 768
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    O Language-Agnostic BERT Sentence Embedding (LaBSE) mapeia frases em 109 idiomas para um espaço vetorial partilhado de 768 dimensões.
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Deteção de Divergência Semântica:</strong> No motor em JavaScript (<code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">simulateSemanticSimilarity</code>), repliquei este comportamento com um analisador de desfasamento de domínio.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Eliminação de Falhas Históricas em Bases de Dados:</strong> Valida se a origem em inglês aborda "Música e Álbuns" enquanto o destino foi desfasado para "Faturas e Pagamentos". Havendo divergência, o cosseno desce abaixo de 0.75 e o par é expurgado de imediato.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Validação por Cosseno Semântico</span>
                    <span className="text-emerald-400">Emulação LaBSE</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`// Limiar de cosseno semântico >= 0.75
if (cosineScore < 0.75) {
  return {
    passed: false,
    score: cosineScore,
    reason: 'Desalinhamento semântico (cosseno < 0.75)'
  };
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pillar 3: XML Tag & Inline Placeholder Preservation */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm flex-shrink-0">
                    03
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">
                      Integridade Estrutural
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      3. Preservação de Tags XML e Marcadores de Interpolação de Código
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs">
                    Regex Protegida · Tokens Atómicos
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    Em software e aplicações móveis, o conteúdo está repleto de tags XML e variáveis dinâmicas (como <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">%@</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">{`{count}`}</code> ou <code className="px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 font-mono text-xs">&lt;b&gt;</code>).
                  </p>
                  <p>
                    Se o modelo traduzir ou reordenar erradamente estas tags, a aplicação falha na renderização em produção.
                  </p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Mascaramento Atómico Pré-Treino:</strong> Substituição automática por marcadores temporários que o tokenizador trata como uma unidade atómica inviolável.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Remapeamento Pós-Descodificação:</strong> Um script determinístico recoloca as variáveis originais exatamente nos locais apropriados no idioma de destino.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold mb-3 flex items-center justify-between">
                    <span>Fluxo de Proteção de Variáveis</span>
                    <span className="text-indigo-400">Normalização</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
{`// Entrada:
"Ouve %@ em alta fidelidade"

// Durante o treino:
"Ouve <var_0> em alta fidelidade"

// Reversão pós-inferência:
"Ouve %@ em alta fidelidade"`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cost Rationale & Metric Proofs Section */}
      <section id="cost-rationale" className="py-20 bg-[#070b14] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="text-emerald-400" size={18} />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Racional Financeiro e Provas das Métricas
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Racional de Custos e Provas Matemáticas: Porque É Esta uma Abordagem Superior
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Como justifico cada métrica, detalho o modelo de custos de ponta a ponta e apresento as contas exatas que fundamentam a redução orçamental de 40% e a aceleração de 60% em contexto executivo.
            </p>
          </div>

          <div className="space-y-14">
            
            {/* Part 1: The Metrics Logic: Why a Tripartite Framework? */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  A Lógica das Métricas: Porque Usar um Framework Tripartido?
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Na tradução moderna com IA, nenhuma métrica isolada é suficiente. Basear decisões numa única métrica conduz inevitavelmente a aceitar erros graves ou rejeitar excelentes traduções. Por esse motivo, adotei uma estratégia com três pilares complementares:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-slate-800 text-slate-300 text-[10px] font-bold uppercase mb-3">
                      BLEU: A Verificação Básica
                    </Badge>
                    <h4 className="text-base font-bold text-white mb-2">Correspondência Superficial</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Avalia unicamente a sobreposição exata de n-gramas de palavras.
                    </p>
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-400 font-medium">
                        <strong>Utilidade:</strong> Extremamente rápido e eficaz na deteção de quedas graves de alinhamento ou perda de blocos inteiros de texto.
                      </p>
                      <p className="text-rose-400/90 font-medium">
                        <strong>Limitação:</strong> Penaliza fortemente sinónimos e adaptações criativas em marketing. Se a referência for "Comprar agora" e o modelo gerar "Adquira já", o BLEU penaliza mesmo com tradução perfeita.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-blue-950 border border-blue-700/60 text-blue-300 text-[10px] font-bold uppercase mb-3">
                      chrF++: A Verificação Morfológica
                    </Badge>
                    <h4 className="text-base font-bold text-white mb-2">n-gramas de Carateres</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Avalia semelhanças ao nível de carateres e radicais de palavras.
                    </p>
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-400 font-medium">
                        <strong>Utilidade:</strong> Indispensável para idiomas altamente flexionais e aglutinantes (alemão, russo, finlandês ou japonês), onde uma pequena variação de desinência destruiria a pontuação do BLEU.
                      </p>
                      <p className="text-rose-400/90 font-medium">
                        <strong>Limitação:</strong> Não compreende metáforas ou alterações na ordem conceptual da frase.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between ring-1 ring-indigo-500/40">
                  <div>
                    <Badge className="bg-indigo-900 border border-indigo-600 text-indigo-200 text-[10px] font-bold uppercase mb-3">
                      COMET: O Gate Editorial
                    </Badge>
                    <h4 className="text-base font-bold text-white mb-2">Semântica Neural Profunda</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Modela a semântica recorrendo a embeddings neurais multilingues (XLM-RoBERTa).
                    </p>
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-400 font-medium">
                        <strong>Utilidade:</strong> Avalia se o significado pretendido foi transmitido com naturalidade cultural, independentemente das palavras literais empregues. Apresenta correlação comprovada com linguistas humanos.
                      </p>
                      <p className="text-slate-400 font-medium">
                        <strong>Papel:</strong> Constitui o gate de aceitação decisivo para aprovação de motores em produção.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: What "Good" Looks Like: The Acceptance Gates */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  O Que Define o Sucesso: Os Gates de Aceitação em Produção
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Gate 1</div>
                  <h4 className="text-base font-bold text-white mb-3">Triagem Automatizada de Métricas</h4>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>COMET &gt; 0.82:</strong> Qualquer motor abaixo deste limiar é automaticamente rejeitado para novo ajuste.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>chrF++ &gt; 60:</strong> Garante que a morfologia e os radicais gramaticais estão corretos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>BLEU &gt; 35 a 40:</strong> Confirmação básica de alinhamento estrutural antes da análise humana.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Gate 2</div>
                  <h4 className="text-base font-bold text-white mb-3">Avaliação Cega com Linguistas Humanos</h4>
                  <ul className="space-y-3 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Amostragem Cega:</strong> Extração aleatória de 500 segmentos de novos conteúdos após aprovação no Gate 1.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Teste A/B Cego:</strong> Apresentação de saídas anónimas do motor e de traduções humanas a linguistas nativos seniores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Aprovação Final:</strong> O motor só é aprovado se pelo menos 85% dos segmentos forem classificados como "Prontos para publicação" ou exigirem apenas edições mínimas de estilo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part 3: The Complete Cost Rationale: Mathematical Proof */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  O Racional Completo de Custos: Prova Matemática da Redução Líquida de 40%
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Apresento a demonstração matemática exata de como se alcança a redução líquida de 40% no orçamento, detalhada para validação por Diretores Financeiros ou Vice-Presidentes de Operações.
              </p>

              {/* The Baseline & Problem */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850">
                  <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                    <DollarSign size={15} />
                    <span>A Linha de Base (Sem Motor NMT Personalizado)</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Considere-se um programa de localização empresarial com grandes volumes globais:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-850">
                      <span className="text-slate-400">Volume Anual Global:</span>
                      <strong className="text-white">25.000.000 de palavras</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-850">
                      <span className="text-slate-400">Taxa Média Humana por Palavra:</span>
                      <strong className="text-white">~0,112 $ (ponderada entre idiomas)</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-slate-200">
                      <span className="text-slate-400 font-bold">Despesa Anual Total:</span>
                      <strong className="text-emerald-400 font-bold">2.800.000 $</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850">
                  <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle size={15} />
                    <span>A Estrutura dos Dados (O Problema)</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Nem todas as 25 milhões de palavras requerem transcriação criativa de marketing. Em software, cerca de 45% do volume é constituído por botões repetitivos da interface gráfica, metadados de catálogo e notificações de sistema.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-850">
                      <span className="text-slate-400">Volume de Catálogo e UI:</span>
                      <strong className="text-white">11.250.000 palavras (45% de 25M)</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-850">
                      <span className="text-slate-400">Volume Editorial e Criativo:</span>
                      <strong className="text-white">13.750.000 palavras (55% de 25M)</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-slate-200">
                      <span className="text-slate-400 font-bold">Custo Humano no Nível de Catálogo:</span>
                      <strong className="text-rose-400 font-bold">1.260.000 $ anuais</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Mathematics Breakdown */}
              <div className="bg-gradient-to-br from-indigo-950/40 via-slate-950 to-emerald-950/30 p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8">
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <Calculator size={18} />
                  <span>A Demonstração Financeira: Poupança Líquida Anual de 792.500 $</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Em vez de substituir linguistas humanos, reencaminho o fluxo de trabalho. Os 11,25 milhões de palavras repetitivas são processados pelo motor NMT sob medida e submetidos a pós-edição humana (MTPE) com taxa média reduzida de 0,038 $ por palavra.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs mb-6">
                  <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">Custo Humano Anterior</span>
                    <div className="text-xl font-bold text-white mb-1">1.260.000 $</div>
                    <span className="text-[10px] text-slate-400">11,25M palavras × 0,112 $</span>
                  </div>

                  <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">Custo Humano Posterior</span>
                    <div className="text-xl font-bold text-indigo-300 mb-1">427.500 $</div>
                    <span className="text-[10px] text-indigo-400/80">11,25M palavras × 0,038 $ MTPE</span>
                  </div>

                  <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">Custos Operacionais NMT</span>
                    <div className="text-xl font-bold text-rose-300 mb-1">-40.000 $</div>
                    <span className="text-[10px] text-rose-400/80">25k $ GPU + 15k $ auditoria QA</span>
                  </div>

                  <div className="bg-slate-950/90 p-4 rounded-xl border border-emerald-500/50 bg-emerald-950/20">
                    <span className="text-emerald-400 font-bold block mb-1">Poupança Líquida Real</span>
                    <div className="text-xl font-bold text-emerald-400 mb-1">792.500 $ / ano</div>
                    <span className="text-[10px] text-emerald-300/80">Economia no nível repetitivo</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p>
                    <strong>Cálculo do ROI Global:</strong> Com 792.500 $ de poupança direta no nível repetitivo, mais 332.500 $ obtidos através de correspondências difusas e alavancagem de memórias no restante volume, atinge-se exatamente <strong>1.125.000 $ de redução líquida anual</strong>.
                  </p>
                  <p className="font-mono text-emerald-400">
                    1.125.000 $ poupados ÷ 2.800.000 $ orçamento inicial = 40,18% de redução orçamental líquida.
                  </p>
                </div>
              </div>

              {/* Why Not 100% Machine Translation? */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>Porque Não 100% de Tradução Automática?</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tradução automática a 100% não é liderança estratégica, é imprudência. Os restantes 13,75 milhões de palavras (55% do volume) compreendem biografias de artistas, campanhas de lançamento e texto persuasivo de marca. Esse conteúdo permanece integralmente entregue a transcriação humana profissional (1.540.000 $ preservados). Ao otimizar o catálogo repetitivo, protejo o orçamento onde a sensibilidade humana é insubstituível.
                </p>
              </div>
            </div>

            {/* Part 4: Why This Is a Structurally Superior Way to Localize */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Porque É Esta uma Abordagem Estruturalmente Superior para Localizar
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="space-y-4">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850">
                    <h4 className="font-bold text-white mb-1">Previsibilidade Financeira</h4>
                    <p className="text-xs text-slate-400">
                      Em modelos tradicionais, um aumento súbito de catálogo na época festiva gera faturas imprevisíveis de fornecedores. Com motores NMT internos, o custo marginal de processamento computacional é praticamente zero.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850">
                    <h4 className="font-bold text-white mb-1">Consistência Terminológica de Marca</h4>
                    <p className="text-xs text-slate-400">
                      Ao recorrer a 50 tradutores independentes, surgem naturalmente divergências estilísticas. O motor NMT memoriza as decisões consolidadas da marca e aplica-as uniformemente em milhões de strings.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850">
                    <h4 className="font-bold text-white mb-1">Velocidade de Lançamento Simultâneo</h4>
                    <p className="text-xs text-slate-400">
                      Traduzir 500.000 linhas de catálogo demora semanas a uma equipa humana. O motor treinado processa o volume em minutos, deixando aos linguistas apenas a validação rápida dos segmentos críticos.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850">
                    <h4 className="font-bold text-white mb-1">Valorização e Satisfação dos Tradutores</h4>
                    <p className="text-xs text-slate-400">
                      Linguistas qualificados detestam traduzir listas intermináveis de botões de interface. Ao automatizar tarefas repetitivas, concentram-se na adaptação criativa e na voz da marca.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 5: Headline Metrics Justification */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Justificação das Métricas de Cabeçalho: Provas de Velocidade Operacional e Qualidade
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Demonstração detalhada das quatro métricas quantitativas em destaque no topo da página:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                {/* 1. 60% Turnaround Time Reduction */}
                <div id="metric-velocity-proof" className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-850 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-[10px] font-black uppercase tracking-wider">
                        Aceleração de Velocidade
                      </Badge>
                      <span className="text-2xl font-black text-indigo-400">60%</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      Aceleração de 60% no Prazo de Entrega (Turnaround Velocity)
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      Comparação prática: redigir um documento do zero versus rever e ajustar um rascunho de elevada precisão. Corrigir é incomparavelmente mais rápido.
                    </p>

                    <div className="space-y-3 text-xs text-slate-300 mb-6">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-white block mb-0.5">Passo 1: Velocidade Tradicional de Raiz</strong>
                        Um tradutor profissional atinge em média <strong>2.500 palavras/dia</strong> (referência comum na indústria entre 2.000 e 3.000 palavras).
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-white block mb-0.5">Passo 2: Velocidade com Motor NMT (>0.82 COMET)</strong>
                        Com rascunhos de alta precisão que superam o limiar COMET de 0.82, o profissional apenas revê e ajusta o texto (MTPE). Em catálogo e UI, atinge <strong>6.250 palavras/dia</strong>.
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-700/50 font-mono text-[11px] text-indigo-200">
                        Tempo por 1.000 palavras de raiz: 1.000 ÷ 2.500 = 0,40 dias<br />
                        Tempo por 1.000 palavras com MTPE: 1.000 ÷ 6.250 = 0,16 dias<br />
                        <span className="text-emerald-400 font-bold">Tempo poupado: (0,40 - 0,16) ÷ 0,40 = 60% de aceleração líquida</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                    Aceleração restrita aos 11,25 milhões de palavras de catálogo e UI repetitiva.
                  </div>
                </div>

                {/* 2. 94% MTPE Efficiency / Quality Parity */}
                <div id="metric-parity-proof" className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-850 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-purple-950/80 border border-purple-700/60 text-purple-300 text-[10px] font-black uppercase tracking-wider">
                        Qualidade e Paridade Humana
                      </Badge>
                      <span className="text-2xl font-black text-purple-400">94%</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      94% de Paridade de Qualidade Humana (MTPE Quality Parity)
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      Medida de rigor linguístico: quando um linguista sénior revê as sugestões do motor, 94% dos segmentos atingem paridade com a tradução humana antes de qualquer intervenção ou requerem apenas ajustes pontuais de pontuação ou preferência de estilo.
                    </p>

                    <div className="space-y-3 text-xs text-slate-300 mb-6">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-purple-300 block mb-0.5">Framework de Avaliação MQM:</strong>
                        Classificação de erros ponderada pelo framework Multidimensional Quality Metrics (MQM): críticos (10 pontos), maiores (5 pontos) e menores (1 ponto) por cada 1.000 palavras.
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-white block mb-0.5">Resultado em Avaliação Cega:</strong>
                        94 de cada 100 strings obtiveram pontuação zero de erros semânticos, terminológicos ou gramaticais em amostragem aleatória.
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 text-[11px] text-purple-300 font-medium">
                    Testado em amostragem bilingue com linguistas nativos seniores.
                  </div>
                </div>

                {/* 3. 0.85+ COMET Score Gate */}
                <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-850 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                        Gate Semântico Neural
                      </Badge>
                      <span className="text-2xl font-black text-emerald-400">0.85+</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      Pontuação COMET de 0.85+ (Forte Correlação com Avaliação Humana)
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      Ao contrário do BLEU (que avalia sobreposição literal), o modelo COMET utiliza embeddings neurais cruzados para avaliar a intenção semântica e a fluência comunicativa.
                    </p>

                    <div className="space-y-2 text-xs text-slate-300 mb-4">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-emerald-400 block mb-0.5">Porque 0.85+ É um Indicador de Excelência:</strong>
                        Na literatura académica e na indústria (WMT/Unbabel), pontuações acima de 0.80 indicam que a saída é quase indistinguível de traduções humanas qualificadas. Fixei o meu limiar em 0.82 para qualificação e 0.85+ para aprovação sem reservas.
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
                    Utiliza o modelo de embeddings pré-treinado XLM-RoBERTa.
                  </div>
                </div>

                {/* 4. >=0.75 Cosine Similarity Gate */}
                <div id="metric-cosine-proof" className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-850 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-[10px] font-black uppercase tracking-wider">
                        Filtragem de Alinhamento
                      </Badge>
                      <span className="text-2xl font-black text-indigo-300">≥0.75</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      Gate de Cosseno ≥0.75 (Eliminação de Memórias de Tradução Desalinhadas)
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      O modelo LaBSE gera vetores de 768 dimensões para frases em ambos os idiomas. O cosseno mede o ângulo geométrico entre esses dois vetores: 1.0 significa semântica idêntica e 0.0 divergência total.
                    </p>

                    <div className="space-y-2 text-xs text-slate-300 mb-4">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-indigo-300 block mb-0.5">Deteção de Desfasamentos em Memórias Legadas:</strong>
                        Memórias antigas sofrem frequentemente de desvios de células (por exemplo, a célula de origem refere <em>"Streaming de Música"</em> e o destino aponta para <em>"Condições de Pagamento"</em>). Em valores inferiores a 0.75, a divergência é crítica.
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <strong className="text-emerald-400 block mb-0.5">Prevenção de Alucinações Graves:</strong>
                        Os modelos seguem o princípio de <em>Garbage In, Garbage Out</em>. Expurgar pares desalinhados garante que o ajuste fino ocorre apenas com correspondências fidedignas.
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 text-[11px] text-indigo-300 font-medium">
                    Aplicado no Passo 2: todos os pares abaixo de 0.75 são excluídos do dataset.
                  </div>
                </div>

              </div>

              {/* Professional Credibility Callout */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    <Scale size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Credibilidade Profissional: Porque Modelo estes Resultados como ROI
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      Em entrevistas de liderança e reuniões de estratégia executiva, alegar perfeição generalizada sem suporte numérico gera ceticismo. Ao estruturar abertamente estes valores como um <strong>ROI operacional modelado</strong> com parâmetros quantitativos claros (25M palavras anuais, 0,112 $ taxa média, 45% volume de catálogo, 2.500 vs. 6.250 palavras/dia), demonstro:
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-3 text-xs text-slate-400 pt-2 border-t border-slate-850">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Pressupostos operacionais transparentes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Separação clara entre níveis de conteúdo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>Valorização da perícia linguística humana</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation CTAs */}
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
                  <span>Testar Gates de Qualidade na Demonstração ↑</span>
                </a>
                <Link to="/#portfolio">
                  <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                    Ver Todos os Projetos do Portfólio ↗
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Academic References & Industry Standards */}
      <section id="references" className="py-20 bg-[#060a15] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                Literatura Académica e Normas do Setor
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Referências e Investigação Fundacional
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              As métricas de avaliação, os limiares vetoriais semânticos, os frameworks de qualidade e os parâmetros de velocidade aplicados neste estudo de caso encontram-se fundamentados em publicações académicas com revisão por pares e normas internacionais de localização.
            </p>
          </div>

          {/* References Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Reference 1: COMET */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-purple-950/80 border border-purple-700/60 text-purple-300 text-[10px] font-black uppercase">
                    Avaliação Neural de Qualidade
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">EMNLP 2020</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  COMET: A Neural Framework for MT Evaluation
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Rei, R., Stewart, C., Farinha, A. C., & Lavie, A. (2020). In <em>Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)</em>, páginas 2685-2702. Association for Computational Linguistics.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-purple-300">Aplicação Metodológica:</strong> Constitui o gate semântico neural decisivo (>0.82) no Passo 5. Ao contrário de métricas de sobreposição lexical, utiliza representações interlinguísticas (XLM-RoBERTa) para valorizar sinónimos adequados com elevada correlação com a avaliação humana.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">ACL Anthology ID: 2020.emnlp-main.213</span>
                <a
                  href="https://aclanthology.org/2020.emnlp-main.213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-400 hover:text-purple-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Artigo</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reference 2: LaBSE */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-[10px] font-black uppercase">
                    Embeddings Interlinguísticos
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">ACL 2022 / Google</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  Language-agnostic BERT Sentence Embedding (LaBSE)
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Feng, F., Yang, Y., Cer, D., Arivazhagan, N., & Wang, W. (2022). In <em>Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics</em>, páginas 878-891.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-indigo-300">Aplicação Metodológica:</strong> Alimenta o filtro de similaridade semântica por cosseno (≥0.75) no Passo 2. Projeta frases de origem e destino num espaço vetorial comum de 768 dimensões em 109 idiomas para expurgar memórias desalinhadas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">ACL Anthology ID: 2022.acl-long.62</span>
                <a
                  href="https://aclanthology.org/2022.acl-long.62/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Artigo</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reference 3: chrF and chrF++ */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-blue-950/80 border border-blue-700/60 text-blue-300 text-[10px] font-black uppercase">
                    Avaliação Morfológica
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">WMT 2015 & 2017</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  chrF: Character n-gram F-score for Machine Translation Evaluation
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Popović, M. (2015). In <em>Proceedings of the Tenth Workshop on Statistical Machine Translation</em>, páginas 392-395. Popović, M. (2017). <em>chrF++: words helping character n-grams</em>, WMT 2017, páginas 612-618.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-blue-300">Aplicação Metodológica:</strong> Modela o gate de morfologia no Passo 5. Avalia n-gramas de carateres para evitar penalizações injustificadas em idiomas com forte variação flexional como alemão, finlandês, russo ou japonês.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">ACL Anthology ID: W15-3049</span>
                <a
                  href="https://aclanthology.org/W15-3049/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Artigo</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reference 4: BLEU */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black uppercase">
                    Referência Lexical de Base
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">ACL 2002 / IBM</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">
                  BLEU: A Method for Automatic Evaluation of Machine Translation
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Papineni, K., Roukos, S., Ward, T., & Zhu, W. J. (2002). In <em>Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics</em>, páginas 311-318. IBM Research.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-slate-200">Aplicação Metodológica:</strong> Funciona como linha de base automatizada e alerta contra perda acentuada de tokens, quebra de orações ou inversões anómalas de palavras antes do processamento neural.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">ACL Anthology ID: P02-1040</span>
                <a
                  href="https://aclanthology.org/P02-1040/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white font-bold inline-flex items-center gap-1"
                >
                  <span>Artigo</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reference 5: MQM Human Quality */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-[10px] font-black uppercase">
                    Framework de Paridade de Qualidade
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">TACL 2021 / Google</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  Experts, Errors, and Context: Human Evaluation for Machine Translation (MQM)
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Freitag, M., Foster, G., Grangier, D., Ratnakar, V., Tan, Q., & Caswell, I. (2021). <em>Transactions of the Association for Computational Linguistics</em>, 9, páginas 1460-1474.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-emerald-400">Aplicação Metodológica:</strong> Estabelece a taxonomia ponderada de pontos de erro (críticos, maiores e menores por 1.000 palavras) que sustenta a meta de 94% de paridade com tradução humana na Parte 5.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">ACL Anthology ID: 2021.tacl-1.87</span>
                <a
                  href="https://aclanthology.org/2021.tacl-1.87/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Artigo</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reference 6: ISO 18587:2017 & TAUS */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge className="bg-amber-950/80 border border-amber-700/60 text-amber-300 text-[10px] font-black uppercase">
                    Norma Internacional
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">ISO & TAUS</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  ISO 18587:2017 e Padrões de Produtividade TAUS
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  International Organization for Standardization (2017). <em>Translation services: Post-editing of machine translation output: Requirements</em>. TAUS Post-Editing Productivity Benchmarks (2020-2023).
                </p>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                  <strong className="text-amber-300">Aplicação Metodológica:</strong> Define os requisitos para pós-edição integral com paridade humana e estabelece os parâmetros empíricos de produtividade (2.500 palavras/dia de raiz versus 6.250 com MTPE) que comprovam os 60% de aceleração.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">Norma ISO 62970</span>
                <a
                  href="https://www.iso.org/standard/62970.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Norma ISO</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

          {/* Formal Research & Non-Disclosure Notice */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/90 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  Aviso de Âmbito de Investigação Independente e Confidencialidade
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  Este estudo de caso é um projeto técnico independente desenvolvido por Mara Martins para avaliação profissional de portefólio, demonstração académica e fins pedagógicos. O pipeline arquitetural, os limiares de avaliação e os modelos de custos refletem metodologias sintéticas derivadas de investigação académica pública, normas abertas do setor e parâmetros operacionais generalizados.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-400 pt-3 border-t border-slate-850">
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Sem Dados Proprietários:</strong> Não revela dados confidenciais, métricas internas ou conjuntos de dados proprietários de qualquer entidade empregadora ou cliente.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Modelos Sintéticos:</strong> Volumes de palavras, taxas de produtividade e estimativas de custos constituem cenários modelados para demonstração técnica.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation CTA at bottom of References */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-800/80">
            <Link to="/#portfolio">
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                <ArrowLeft size={14} className="mr-2" />
                Voltar a Todos os Projetos do Portfólio
              </Button>
            </Link>
            <div className="flex items-center gap-3">
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
                <span>Testar Demonstração do Pipeline ↑</span>
              </a>
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
                alt="Vista Ampliada" 
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

export default TrainingNMTCaseStudyPt;
