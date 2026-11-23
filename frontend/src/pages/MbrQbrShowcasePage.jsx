import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Layers,
  DollarSign,
  Globe,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  Sliders,
  Building2,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const slideDeckItems = [
  {
    slideNumber: 49,
    id: 'slide-49',
    category: 'executive',
    image: '/assets/mbr-qbr-deck/slide-49.jpg',
    titleEN: 'Vendor Spending Actuals: FYxx Localization & Language Services Overview',
    titlePT: 'Despesas Reais de Fornecedores: Visão Geral de Serviços de Localização FYxx',
    tagEN: 'Executive MBR/QBR Scorecard',
    tagPT: 'Scorecard Executivo MBR/QBR',
    metrics: '$2,048,000 Total Spend (+2.4% vs Budget) · 9 Languages · 98.2% On-Time SLA',
    takeawayEN:
      'Opens executive QBRs with a single 3-pillar scorecard connecting Financial Burn ($2.048M across a $2.0M target), Market Coverage (9 active languages tiered by ROI), and Vendor SLA Health (98.2% on-time delivery across 8 global LSP partners).',
    takeawayPT:
      'Inicia as revisões executivas QBR com um scorecard de 3 pilares interligando Execução Orçamental ($2,048M face à meta de $2,0M), Cobertura de Mercados (9 idiomas ativos por níveis) e Cumprimento de SLAs (98,2% de entregas no prazo em 8 parceiros LSP).',
  },
  {
    slideNumber: 50,
    id: 'slide-50',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-50.jpg',
    titleEN: 'Spend per Language FYxx Q1: Regional Spend Breakdown',
    titlePT: 'Despesa por Idioma FYxx Q1: Distribuição Regional do 1.º Trimestre',
    tagEN: 'Regional Cost Telemetry',
    tagPT: 'Telemetria de Custos Regionais',
    metrics: 'German $101.9K · Japanese $101.9K · Korean $73.7K · Chinese $60.1K · Spanish $59.4K',
    takeawayEN:
      'Surfaces Q1 regional cost concentration for senior leadership, showing German and Japanese co-leading Q1 spend ($101.9K each), followed by Korean ($73.7K) and Simplified Chinese ($60.1K).',
    takeawayPT:
      'Evidencia a concentração regional de custos no Q1 para a liderança sénior, demonstrando o alemão e o japonês no topo ($101,9K cada), seguidos pelo coreano ($73,7K) e chinês simplificado ($60,1K).',
  },
  {
    slideNumber: 51,
    id: 'slide-51',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-51.jpg',
    titleEN: 'Spend per Language FYxx: Per Quarter Multi-Market Analysis',
    titlePT: 'Despesa por Idioma FYxx: Análise Trimestral Multimercado',
    tagEN: 'Quarterly Market Pacing',
    tagPT: 'Ritmo Trimestral por Mercado',
    metrics: 'Q1 vs Q2 vs Q3 Pacing · 10 Locale Codes (ZH-S, FR-CA, FR-FR, DE, IT, JA, KO, PT-BR, RU, ES)',
    takeawayEN:
      'Tracks quarter-over-quarter volume shifts per locale code so budget owners can spot Q2 release surges in German, Spanish, and Brazilian Portuguese while keeping low-volume locales (like FR-CA) on light ad-hoc rates.',
    takeawayPT:
      'Monitoriza variações de volume trimestre a trimestre por código de idioma, permitindo identificar picos de lançamento no Q2 em alemão, espanhol e português do Brasil.',
  },
  {
    slideNumber: 52,
    id: 'slide-52',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-52.jpg',
    titleEN: 'Translation Spending: FYxx Language Year vs. Quarter Share',
    titlePT: 'Despesa de Tradução: Comparação Anual vs. Trimestral FYxx',
    tagEN: 'Spend Share & Velocity',
    tagPT: 'Quota de Despesa e Velocidade',
    metrics: '$1.56M Core Allocation vs $389K Peak Delta · Q2 Peak $641.5K to Q4 $93.1K',
    takeawayEN:
      'Pairs a proportional spend share chart with a quarterly velocity curve ($414.7K Q1 -> $641.5K Q2 -> $406.9K Q3 -> $93.1K Q4) to show finance stakeholders how front-loaded H1 product launches taper in H2.',
    takeawayPT:
      'Combina um gráfico de proporção orçamental com a curva de velocidade trimestral ($414,7K Q1 -> $641,5K Q2 -> $406,9K Q3 -> $93,1K Q4) para demonstrar às equipas financeiras o impacto dos lançamentos do 1.º semestre.',
  },
  {
    slideNumber: 55,
    id: 'slide-55',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-55.jpg',
    titleEN: 'Translation Spending: YoY Quarterly Trajectory Comparison',
    titlePT: 'Despesa de Tradução: Comparação Interanual (YoY) por Trimestre',
    tagEN: 'YoY Variance BI',
    tagPT: 'BI de Variação Interanual',
    metrics: 'Prior FY ($414.7K to $641.5K) vs Current FY ($100.4K to $1.06M Q2 Peak)',
    takeawayEN:
      'Overlays Prior Fiscal Year against Current Fiscal Year quarterly spend to highlight seasonal shifts and campaign consolidation around major Q2 global release trains.',
    takeawayPT:
      'Sobrepõe o ano fiscal anterior ao ano fiscal atual por trimestre para evidenciar alterações sazonais e a consolidação de campanhas nos lançamentos globais do Q2.',
  },
  {
    slideNumber: 56,
    id: 'slide-56',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-56.jpg',
    titleEN: 'Annual Translation Spending Ranking Across 16 Languages',
    titlePT: 'Ranking Anual de Despesa de Tradução em 16 Idiomas',
    tagEN: 'Annual Pareto Ranking',
    tagPT: 'Ranking Anual de Pareto',
    metrics: 'Top 5: German ($422K), Spanish ($351K), French ($320K), B. Port ($285K), Japanese ($241K)',
    takeawayEN:
      'Provides executive sponsors with a clear annual Pareto distribution across 16 languages, demonstrating that the top 7 languages account for over 94% of total localization investment.',
    takeawayPT:
      'Apresenta aos patrocinadores executivos uma distribuição de Pareto clara em 16 idiomas, demonstrando que os 7 principais idiomas concentram mais de 94% do investimento total.',
  },
  {
    slideNumber: 58,
    id: 'slide-58',
    category: 'bi',
    image: '/assets/mbr-qbr-deck/slide-58.jpg',
    titleEN: 'Average Quarterly Spend Curve by Language Market',
    titlePT: 'Curva de Despesa Média Trimestral por Idioma',
    tagEN: 'Quarterly Run-Rate BI',
    tagPT: 'BI de Run-Rate Trimestral',
    metrics: 'French $131.5K/Qtr · Japanese $79.8K/Qtr · Spanish $64.0K/Qtr · German $62.3K/Qtr',
    takeawayEN:
      'Establishes baseline quarterly run-rates per language so Procurement and PMs can negotiate volume discounts and committed quarterly SOW capacity tiers.',
    takeawayPT:
      'Estabelece taxas médias de execução trimestral por idioma para que Compras e Gestores de Programa possam negociar descontos de volume e escalões SOW.',
  },
  {
    slideNumber: 61,
    id: 'slide-61',
    category: 'vendor',
    image: '/assets/mbr-qbr-deck/slide-61.jpg',
    titleEN: 'Tier Distribution: Active Duration & Language SOW Tiering Matrix',
    titlePT: 'Distribuição por Escalões: Matriz de Duração Ativa e Escalões SOW',
    tagEN: 'Vendor SOW Tiering',
    tagPT: 'Escalões SOW de Fornecedores',
    metrics: 'All Quarters ($745K) · 3 Quarters ($1.09M) · 2 Quarters ($34.6K) · 1 Quarter ($77.5K)',
    takeawayEN:
      'Segments languages by active quarter cadence (All 4 Quarters vs. 3, 2, or 1 Quarter) to align vendor contracts: moving continuous Tier 1 languages onto dedicated retainers while keeping 1-quarter markets on flexible on-demand SOWs.',
    takeawayPT:
      'Segmenta os idiomas por cadência de trimestres ativos (4 Trimestres vs. 3, 2 ou 1 Trimestre) para alinhar contratos: colocando idiomas contínuos em avença dedicada e mercados pontuais em SOWs flexíveis.',
  },
  {
    slideNumber: 62,
    id: 'slide-62',
    category: 'executive',
    image: '/assets/mbr-qbr-deck/slide-62.jpg',
    titleEN: 'Multi-Year Spend Overview: 3-Year Optimization Trajectory',
    titlePT: 'Visão Geral Plurianual: Trajetória de Otimização a 3 Anos',
    tagEN: 'Multi-Year OPEX Governance',
    tagPT: 'Governação OPEX Plurianual',
    metrics: 'Year 1 Baseline $1.91M -> Year 2 Peak $2.02M (+5.9%) -> Year 3 Optimized $1.50M (-25.8%)',
    takeawayEN:
      'Demonstrates compounding executive cost governance: after absorbing peak expansion in Year 2 ($2.02M), vendor consolidation, TM leverage, and MTPE workflows reduced annual spend by 25.8% down to $1.50M without reducing language coverage.',
    takeawayPT:
      'Demonstra governação executiva de custos: após absorver o pico de expansão no Ano 2 ($2,02M), a consolidação de fornecedores, memória de tradução e MTPE reduziram a despesa anual em 25,8% para $1,50M sem reduzir idiomas.',
  },
  {
    slideNumber: 63,
    id: 'slide-63',
    category: 'executive',
    image: '/assets/mbr-qbr-deck/slide-63.jpg',
    titleEN: 'Multi-Year Quarterly Trajectory: Peak Absorption to Run-Rate Stability',
    titlePT: 'Trajetória Trimestral Plurianual: Absorção de Pico e Estabilização',
    tagEN: '3-Year Quarterly Trend',
    tagPT: 'Tendência Trimestral a 3 Anos',
    metrics: 'Y1 Q2 Peak $783K -> Y2 Q2 Peak $1.27M -> Y3 Stabilized at ~$350K/Quarter',
    takeawayEN:
      'Visualizes 11 consecutive quarters across 3 fiscal years, proving to C-level leadership how governance reforms eliminated volatile $1.27M quarterly spikes and stabilized expenditure at a predictable ~$350K per quarter.',
    takeawayPT:
      'Visualiza 11 trimestres consecutivos ao longo de 3 anos fiscais, comprovando à liderança executiva como as reformas de governação eliminaram picos voláteis de $1,27M e estabilizaram a despesa em ~$350K por trimestre.',
  },
  {
    slideNumber: 64,
    id: 'slide-64',
    category: 'executive',
    image: '/assets/mbr-qbr-deck/slide-64.jpg',
    titleEN: 'Fiscal Year Quarterly Breakdown: Isolating Q2 Launch Concentration',
    titlePT: 'Decomposição Trimestral do Ano Fiscal: Concentração de Lançamentos no Q2',
    tagEN: 'Quarterly Budget Variance',
    tagPT: 'Variação Orçamental Trimestral',
    metrics: 'Total $2,021,350 · Q1 $122.7K · Q2 $1,271.8K (62.9%) · Q3 $223.8K · Q4 $403.0K',
    takeawayEN:
      'Highlights how 62.9% ($1.27M) of annual spend concentrated in Q2, providing the business case for pre-planned standby vendor capacity and smoothed release train scheduling.',
    takeawayPT:
      'Destaca como 62,9% ($1,27M) da despesa anual se concentrou no Q2, fundamentando o planeamento prévio de capacidade de fornecedores e o nivelamento dos calendários de lançamento.',
  },
  {
    slideNumber: 66,
    id: 'slide-66',
    category: 'vendor',
    image: '/assets/mbr-qbr-deck/slide-66.jpg',
    titleEN: 'Total Spend per Component: Web, DemandGen, Adhoc & Video Breakdown',
    titlePT: 'Despesa Total por Componente: Web, DemandGen, Adhoc e Vídeo',
    tagEN: 'Workstream Cost Attribution',
    tagPT: 'Atribuição de Custos por Canal',
    metrics: 'Q1 $826K (Adhoc $700K) · Q2 $1.33M (DemandGen $670K + Web $590K) · Q3 $218K · Q4 $414K',
    takeawayEN:
      'Breaks down quarterly spend by functional workstream (Web, DemandGen, Adhoc, Video). Exposing Q1 Adhoc spend ($700K) enabled leadership to transition unscheduled requests into planned DemandGen and Web release trains in H2.',
    takeawayPT:
      'Decompõe a despesa trimestral por frente funcional (Web, DemandGen, Adhoc, Vídeo). Evidenciar a despesa Adhoc do Q1 ($700K) permitiu migrar pedidos avulsos para fluxos planeados de DemandGen e Web no 2.º semestre.',
  },
];

const annualLanguageData = [
  { lang: 'German (DE)', annual: 422, q1: 101.9, avgQtr: 62.3, tier: 'Tier 1' },
  { lang: 'Spanish (ES)', annual: 351, q1: 59.4, avgQtr: 64.0, tier: 'Tier 1' },
  { lang: 'French (FR)', annual: 320, q1: 27.1, avgQtr: 131.5, tier: 'Tier 1' },
  { lang: 'Portuguese (PT-BR)', annual: 285, q1: 54.2, avgQtr: 14.8, tier: 'Tier 2' },
  { lang: 'Japanese (JA)', annual: 241, q1: 101.9, avgQtr: 79.8, tier: 'Tier 1' },
  { lang: 'Korean (KO)', annual: 155, q1: 73.7, avgQtr: 46.5, tier: 'Tier 2' },
  { lang: 'Simplified Chinese (ZH-S)', annual: 134, q1: 60.1, avgQtr: 60.0, tier: 'Tier 1' },
  { lang: 'Finnish (FI)', annual: 27, q1: 6.2, avgQtr: 3.1, tier: 'Tier 3' },
  { lang: 'Italian (IT)', annual: 22, q1: 21.7, avgQtr: 5.6, tier: 'Tier 3' },
  { lang: 'Dutch (NL)', annual: 16, q1: 4.0, avgQtr: 3.0, tier: 'Tier 3' },
  { lang: 'Traditional Chinese (ZH-T)', annual: 14.5, q1: 7.2, avgQtr: 7.0, tier: 'Emerging' },
  { lang: 'Thai (TH)', annual: 8.0, q1: 4.0, avgQtr: 9.3, tier: 'Emerging' },
];

const componentQuarterlyData = [
  { quarter: 'Q1', total: 826, web: 0, demandGen: 127, adhoc: 699, video: 0 },
  { quarter: 'Q2 (Peak)', total: 1330, web: 590, demandGen: 670, adhoc: 70, video: 0 },
  { quarter: 'Q3', total: 218, web: 18, demandGen: 182, adhoc: 0, video: 18 },
  { quarter: 'Q4', total: 414, web: 214, demandGen: 119, adhoc: 61, video: 20 },
];

const tierMatrixData = [
  {
    durationEN: 'All 4 Quarters (Continuous Retainer)',
    durationPT: 'Todos os 4 Trimestres (Avença Contínua)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/40',
    topBorder: 'border-t-sky-400',
    total: '$745K',
    items: [
      { name: 'Japanese (JA)', spend: '$319K' },
      { name: 'Simplified Chinese (ZH-S)', spend: '$240K' },
      { name: 'Korean (KO)', spend: '$186K' },
    ],
  },
  {
    durationEN: '3 Quarters (Core Wave Tier)',
    durationPT: '3 Trimestres (Escalão Principal em Vagas)',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
    topBorder: 'border-t-emerald-400',
    total: '$1,090K',
    items: [
      { name: 'French (FR)', spend: '$526K' },
      { name: 'Spanish (ES)', spend: '$256K' },
      { name: 'German (DE)', spend: '$249K' },
      { name: 'Portuguese Brazil (PT-BR)', spend: '$59K' },
    ],
  },
  {
    durationEN: '2 Quarters (Seasonal / Campaign Tier)',
    durationPT: '2 Trimestres (Escalão Sazonal / Campanha)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
    topBorder: 'border-t-amber-400',
    total: '$34.6K',
    items: [
      { name: 'Italian (IT)', spend: '$22.3K' },
      { name: 'Finnish (FI)', spend: '$12.3K' },
    ],
  },
  {
    durationEN: '1 Quarter (Ad-Hoc Market Entry)',
    durationPT: '1 Trimestre (Entrada Pontual em Mercado)',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
    topBorder: 'border-t-rose-400',
    total: '$77.5K',
    items: [
      { name: 'Thai (TH)', spend: '$37.0K' },
      { name: 'Traditional Chinese (ZH-T)', spend: '$28.0K' },
      { name: 'Spanish LATAM (ES-419)', spend: '$12.5K' },
    ],
  },
];

const MbrQbrShowcasePage = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [langMetricMode, setLangMetricMode] = useState('annual'); // 'annual' | 'q1' | 'avgQtr'
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = isPt
      ? 'Showcase Executivo MBR/QBR, Governação de Fornecedores & BI | Mara Martins'
      : 'Executive MBR/QBR, Vendor Governance & BI Showcase | Mara Martins';
    window.scrollTo(0, 0);
  }, [isPt]);

  const filteredSlides =
    selectedCategory === 'all'
      ? slideDeckItems
      : slideDeckItems.filter((s) => s.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredSlides.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredSlides.length]);

  const maxLangVal =
    langMetricMode === 'annual' ? 422 : langMetricMode === 'q1' ? 105 : 135;

  return (
    <div className="min-h-screen stellar-bg text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Header />

      <main className="flex-grow pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-14">
        {/* Top Back Navigation & Confidentiality Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {isPt ? 'Voltar para Experiências (Pilares STAR)' : 'Back to Experiences (STAR Pillars)'}
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {isPt
                ? 'Dados Ilustrativos de Demonstração (Conformidade com NDA: Sem Dados Confidenciais)'
                : 'Illustrative Showcase Data (NDA-Compliant: Modeled for Senior Leadership Reviews)'}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="rounded-3xl p-7 sm:p-10 lg:p-12 border border-indigo-500/30 bg-gradient-to-br from-slate-900/95 via-indigo-950/50 to-slate-900/95 shadow-2xl space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                {isPt
                  ? 'Pilar 01 & Pilar 02 · Artefactos Executivos'
                  : 'Pillar 01 & Pillar 02 · Executive Review Artifacts'}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                {isPt ? 'Slides 49 a 66 · Deck Estratégico' : 'Slides 49 to 66 · Strategic Work Deck'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {isPt
                ? 'Apresentações Executivas MBR/QBR, Governação de Fornecedores e Gráficos de Business Intelligence'
                : 'MBR/QBR Executive Decks, Vendor Management & Business Intelligence Telemetry'}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              {isPt
                ? 'Uma demonstração interativa dos quadros de revisão mensal e trimestral (MBR/QBR), análises de custos OPEX de fornecedores e gráficos típicos de Business Intelligence que apresento a equipas de liderança sénior. Todos os valores são ilustrativos para proteger acordos de confidencialidade (NDA).'
                : 'An interactive showcase of the Monthly and Quarterly Business Review (MBR/QBR) slide decks, vendor OPEX governance scorecards, and Business Intelligence graphs I build and present to senior leadership teams. All figures are illustrative to protect NDA and company confidentiality.'}
            </p>
          </div>

          {/* 4 Headline Executive KPI Cards (From Slide 49 & Slide 62) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="rounded-2xl p-5 bg-slate-900/90 border border-sky-500/30 border-t-4 border-t-sky-400 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                <span>{isPt ? 'Orçamento Anual Modelado' : 'Modeled Annual Spend'}</span>
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">$2,048,000</div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                {isPt ? '+2,4% vs. Meta Orçamental de $2,0M' : '+2.4% vs. $2.0M Target Budget'}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-snug">
                {isPt
                  ? 'Controlo de variância trimestral de 5-10% em SOWs negociados.'
                  : 'Controlled within 5-10% quarterly SOW variance guardrails.'}
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-slate-900/90 border border-emerald-500/30 border-t-4 border-t-emerald-400 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <span>{isPt ? 'Otimização Plurianual' : 'Multi-Year Optimization'}</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">-25.8% YoY</div>
              <div className="text-xs text-emerald-300 font-semibold mt-1">
                {isPt ? '$2,02M (Pico) -> $1,50M (Estabilizado)' : '$2.02M Peak -> $1.50M Leveled Run-Rate'}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-snug">
                {isPt
                  ? 'Estabilização em ~$350K/trimestre via consolidação de fornecedores e MTPE.'
                  : 'Stabilized at ~$350K/quarter via CoE consolidation and MTPE.'}
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-slate-900/90 border border-indigo-500/30 border-t-4 border-t-indigo-400 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                <span>{isPt ? 'Desempenho de Fornecedores' : 'Vendor SLA Performance'}</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">98.2%</div>
              <div className="text-xs text-indigo-300 font-semibold mt-1">
                {isPt ? 'Taxa de Entrega no Prazo (8 Parceiros LSP)' : 'On-Time Delivery (8 Global LSP Partners)'}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-snug">
                {isPt
                  ? 'Scorecards auditados em revisões formais MBR e QBR.'
                  : 'Audited scorecards across monthly MBR and quarterly QBR cadences.'}
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-slate-900/90 border border-amber-500/30 border-t-4 border-t-amber-400 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <span>{isPt ? 'Escala de Mercados & Tiers' : 'Market Scope & Tiering'}</span>
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">9–16 Locales</div>
              <div className="text-xs text-amber-300 font-semibold mt-1">
                {isPt ? 'Matriz de 4 Escalões (Tiers 1, 2, 3 e Emergentes)' : '4-Tier Active Duration & ROI Matrix'}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-snug">
                {isPt
                  ? 'Top 7 idiomas concentram >94% do investimento anual.'
                  : 'Top 7 languages represent >94% of annual localization spend.'}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive Business Intelligence Graphs (Reconstructed from Slides 50-66) */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                {isPt
                  ? 'Telemetria Interativa · Gráficos Típicos de Business Intelligence'
                  : 'Interactive Telemetry · Typical Business Intelligence Graphs'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {isPt
                  ? 'Modelos Visuais de BI para Revisões Executivas (MBR / QBR)'
                  : 'Executive BI Models Presented to Senior Leadership'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {isPt
                ? 'Gráficos interativos baseados nos slides 50 a 66 para apoiar decisões de alocação de capacidade, negociação de SOWs e planeamento financeiro.'
                : 'Interactive charts modeled directly from slides 50 to 66 to drive executive decisions on capacity planning, SOW tiering, and OPEX control.'}
            </p>
          </div>

          {/* Row 1 of BI Charts: Multi-Year Spend Optimization (Slides 62-64) + Component Stacked Spend (Slide 66) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BI Graph 1: 3-Year Spend & Quarterly Peak Moderation (Slides 62, 63, 64) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {isPt ? 'Slides 62–64 · Trajetória Plurianual OPEX' : 'Slides 62–64 · Multi-Year OPEX Trajectory'}
                  </span>
                  <span className="text-xs font-mono text-slate-400">FY Year 1 – Year 3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {isPt
                    ? 'Despesa Total por Ano e Absorção de Pico no 2.º Trimestre'
                    : 'Total Spend per Year & Q2 Launch Peak Moderation'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {isPt
                    ? 'Demonstra como a governação de SOWs e MTPE reduziu a despesa anual em -25,8% após o pico de $2,02M (onde o Q2 representou 62,9% do orçamento).'
                    : 'Shows how SOW consolidation and MTPE cut annual spend by -25.8% after a $2.02M expansion peak (where Q2 accounted for 62.9% of annual spend).'}
                </p>
              </div>

              {/* 3-Year Horizontal Comparison Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-300">
                      {isPt ? 'Ano 1 (Linha de Base)' : 'Year 1 (Baseline Expenditure)'}
                    </span>
                    <span className="font-mono text-lime-400 font-bold">$1,907,840</span>
                  </div>
                  <div className="w-full h-7 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 p-1">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-lime-500 to-emerald-400 transition-all duration-700"
                      style={{ width: '94.4%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-white">
                      {isPt
                        ? 'Ano 2 (Pico de Expansão · +5,9% YoY)'
                        : 'Year 2 (Peak Expansion · +5.9% YoY)'}
                    </span>
                    <span className="font-mono text-sky-400 font-bold">$2,021,350</span>
                  </div>
                  <div className="w-full h-7 bg-slate-950 rounded-xl overflow-hidden border border-sky-500/40 p-1">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-sky-500 to-cyan-300 transition-all duration-700"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-300">
                      {isPt
                        ? 'Ano 3 (Orçamento Otimizado e Nivelado · -25,8%)'
                        : 'Year 3 (Optimized & Leveled Off · -25.8%)'}
                    </span>
                    <span className="font-mono text-amber-400 font-bold">$1,500,000</span>
                  </div>
                  <div className="w-full h-7 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 p-1">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-700"
                      style={{ width: '74.2%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Peak Year Quarterly Mini-Breakdown (Slide 64) */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {isPt
                    ? 'Decomposição Trimestral do Ano de Pico ($2.021.350):'
                    : 'Peak Year Quarterly Breakdown ($2,021,350 Total):'}
                </div>
                <div className="grid grid-cols-4 gap-2.5 text-center">
                  {[
                    { q: 'Q1', val: '$122.7K', pct: '6.1%', highlight: false },
                    { q: 'Q2 (Peak)', val: '$1,271.8K', pct: '62.9%', highlight: true },
                    { q: 'Q3', val: '$223.8K', pct: '11.1%', highlight: false },
                    { q: 'Q4', val: '$403.0K', pct: '19.9%', highlight: false },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className={`p-2.5 rounded-xl border ${
                        item.highlight
                          ? 'bg-sky-950/60 border-sky-400/50 text-white'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase text-slate-400">{item.q}</div>
                      <div className="text-xs sm:text-sm font-black font-mono mt-0.5">{item.val}</div>
                      <div
                        className={`text-[10px] font-mono ${
                          item.highlight ? 'text-sky-300 font-bold' : 'text-slate-500'
                        }`}
                      >
                        {item.pct}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BI Graph 2: Spend by Functional Component (Slide 66) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {isPt ? 'Slide 66 · Despesa por Componente' : 'Slide 66 · Spend per Component'}
                  </span>
                  <div className="flex items-center gap-3 text-[11px] font-semibold">
                    <span className="inline-flex items-center gap-1 text-blue-400">
                      <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> Web
                    </span>
                    <span className="inline-flex items-center gap-1 text-lime-400">
                      <span className="w-2.5 h-2.5 rounded-sm bg-lime-500" /> DemandGen
                    </span>
                    <span className="inline-flex items-center gap-1 text-orange-400">
                      <span className="w-2.5 h-2.5 rounded-sm bg-orange-500" /> Adhoc
                    </span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {isPt
                    ? 'Atribuição Trimestral por Canal: Web, DemandGen, Adhoc & Vídeo'
                    : 'Quarterly Spend by Workstream: Web, DemandGen, Adhoc & Video'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {isPt
                    ? 'Isolar os $700K de pedidos Adhoc no Q1 permitiu migrar o volume para lançamentos planeados de DemandGen ($670K) e Web ($590K) no Q2.'
                    : 'Isolating $700K of unscheduled Q1 Adhoc requests enabled leadership to shift H1/H2 volume into planned DemandGen ($670K) and Web ($590K) trains.'}
                </p>
              </div>

              {/* Stacked Bar Chart per Quarter */}
              <div className="space-y-4">
                {componentQuarterlyData.map((row) => {
                  const maxTotal = 1330;
                  const webW = (row.web / maxTotal) * 100;
                  const dgW = (row.demandGen / maxTotal) * 100;
                  const adhocW = (row.adhoc / maxTotal) * 100;
                  const vidW = (row.video / maxTotal) * 100;

                  return (
                    <div key={row.quarter} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{row.quarter}</span>
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                          {row.web > 0 && <span className="text-blue-300">Web: ${row.web}K</span>}
                          {row.demandGen > 0 && (
                            <span className="text-lime-300">DemandGen: ${row.demandGen}K</span>
                          )}
                          {row.adhoc > 0 && (
                            <span className="text-orange-300">Adhoc: ${row.adhoc}K</span>
                          )}
                          <span className="text-white font-bold ml-1">
                            Total: ${row.total >= 1000 ? `${(row.total / 1000).toFixed(2)}M` : `${row.total}K`}
                          </span>
                        </div>
                      </div>

                      <div className="w-full h-7 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex p-1 gap-0.5">
                        {webW > 0 && (
                          <div
                            className="h-full bg-blue-500 first:rounded-l-lg last:rounded-r-lg transition-all duration-700"
                            style={{ width: `${webW}%` }}
                            title={`Web: $${row.web}K`}
                          />
                        )}
                        {dgW > 0 && (
                          <div
                            className="h-full bg-lime-500 first:rounded-l-lg last:rounded-r-lg transition-all duration-700"
                            style={{ width: `${dgW}%` }}
                            title={`DemandGen: $${row.demandGen}K`}
                          />
                        )}
                        {adhocW > 0 && (
                          <div
                            className="h-full bg-orange-500 first:rounded-l-lg last:rounded-r-lg transition-all duration-700"
                            style={{ width: `${adhocW}%` }}
                            title={`Adhoc: $${row.adhoc}K`}
                          />
                        )}
                        {vidW > 0 && (
                          <div
                            className="h-full bg-cyan-400 first:rounded-l-lg last:rounded-r-lg transition-all duration-700"
                            style={{ width: `${vidW}%` }}
                            title={`Video: $${row.video}K`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Executive Decision Callout */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
                <strong className="text-white uppercase tracking-wider block text-[10px] mb-1">
                  {isPt ? 'Decisão Executiva em QBR:' : 'Executive QBR Action Taken:'}
                </strong>
                {isPt
                  ? 'A visibilidade por componente reduziu a despesa total do segundo semestre (Q3 $218K e Q4 $414K) para menos de $420K/trimestre ao canalizar pedidos avulsos para sprints planeados.'
                  : 'Component-level attribution reduced H2 expenditure (Q3 $218K and Q4 $414K) to under $420K/quarter by channeling ad-hoc intake into scheduled release trains.'}
              </div>
            </div>
          </div>

          {/* Row 2 of BI Charts: Interactive Language Spend Pareto (Slides 50, 56, 58) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {isPt
                    ? 'Slides 50, 56 & 58 · Ranking de Investimento por Idioma'
                    : 'Slides 50, 56 & 58 · Language Investment Pareto & Quarterly Pacing'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {isPt
                    ? 'Análise Comparativa de Despesa por Idioma (Anual vs. Q1 vs. Média Trimestral)'
                    : 'Language Spend Telemetry (Annual Total vs. Q1 Regional vs. Quarterly Average)'}
                </h3>
              </div>

              {/* Interactive Metric Mode Switcher */}
              <div className="inline-flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start">
                {[
                  {
                    id: 'annual',
                    label: isPt ? 'Total Anual (Slide 56)' : 'Annual Total (Slide 56)',
                  },
                  {
                    id: 'q1',
                    label: isPt ? 'Despesa Q1 (Slide 50)' : 'Q1 Regional (Slide 50)',
                  },
                  {
                    id: 'avgQtr',
                    label: isPt ? 'Média Trimestral (Slide 58)' : 'Quarterly Avg (Slide 58)',
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setLangMetricMode(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      langMetricMode === tab.id
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
              {annualLanguageData.map((item) => {
                const rawVal =
                  langMetricMode === 'annual'
                    ? item.annual
                    : langMetricMode === 'q1'
                    ? item.q1
                    : item.avgQtr;
                const widthPct = Math.max((rawVal / maxLangVal) * 100, 3);

                return (
                  <div key={item.lang} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">{item.lang}</span>
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {item.tier}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-cyan-300">${rawVal}K</span>
                    </div>
                    <div className="w-full h-4 bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80 p-0.5">
                      <div
                        className="h-full rounded-md bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-all duration-500"
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3 of BI Charts: 4-Tier Active Duration & SOW Matrix (Slides 60 & 61) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {isPt
                  ? 'Slides 60 & 61 · Matriz de Escalões SOW por Duração Ativa'
                  : 'Slides 60 & 61 · Tier Distribution & Active Duration Matrix'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {isPt
                  ? 'Segmentação de Idiomas por Cadência Trimestral para Negociação de Contratos (MSA/SOW)'
                  : 'Language Cadence Tiering for Vendor MSA/SOW Contract Negotiation'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
                {isPt
                  ? 'Utilizado nas QBRs com Procurement e Finanças para separar idiomas de fluxo contínuo (4 trimestres, elegíveis para descontos de volume em avença) de mercados sazonais ou pontuais (1 a 2 trimestres).'
                  : 'Used in QBRs with Procurement and Finance to separate continuous 4-quarter languages (eligible for committed volume discounts) from seasonal 1-to-2 quarter expansion markets.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tierMatrixData.map((tier) => (
                <div
                  key={tier.durationEN}
                  className={`rounded-2xl p-5 bg-slate-950/80 border border-slate-800 border-t-4 ${tier.topBorder} flex flex-col justify-between space-y-4`}
                >
                  <div>
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2 ${tier.badgeColor}`}
                    >
                      {isPt ? 'Duração Ativa' : 'Active Duration'}
                    </span>
                    <h4 className="text-base font-black text-white leading-snug">
                      {isPt ? tier.durationPT : tier.durationEN}
                    </h4>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    {tier.items.map((loc) => (
                      <div key={loc.name} className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{loc.name}</span>
                        <span className="font-mono font-bold text-white">{loc.spend}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 uppercase font-bold text-[10px]">
                      {isPt ? 'Subtotal do Escalão' : 'Tier Subtotal'}
                    </span>
                    <span className="font-mono font-black text-sm text-cyan-300">{tier.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Actual Rendered Slide Deck Gallery (Slides 49 to 66) */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-5 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">
                {isPt
                  ? 'Galeria de Slides Executivos · Slides 49 a 66'
                  : 'Executive Presentation Deck · Slides 49 to 66'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {isPt
                  ? 'Slides Reais de MBR/QBR e Governação de Fornecedores'
                  : 'MBR/QBR & Vendor Governance Presentation Slides'}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                {
                  id: 'all',
                  label: isPt
                    ? `Todos os Slides (${slideDeckItems.length})`
                    : `All Showcase Slides (${slideDeckItems.length})`,
                },
                {
                  id: 'executive',
                  label: isPt ? 'Scorecards MBR / QBR' : 'Executive MBR / QBR',
                },
                {
                  id: 'bi',
                  label: isPt ? 'Gráficos BI por Idioma' : 'Language & Regional BI',
                },
                {
                  id: 'vendor',
                  label: isPt ? 'Governação & Escalões SOW' : 'Vendor & SOW Tiering',
                },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slide Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlides.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => setLightboxIndex(idx)}
                className="group rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-indigo-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Slide Image Container */}
                  <div className="relative aspect-video bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img
                      src={slide.image}
                      alt={isPt ? slide.titlePT : slide.titleEN}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-cyan-300">
                        Slide {slide.slideNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-950/90 backdrop-blur-md border border-indigo-400/30 text-[11px] font-semibold text-indigo-200">
                        {isPt ? slide.tagPT : slide.tagEN}
                      </span>
                    </div>
                    <button
                      type="button"
                      aria-label="Expand slide"
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 text-slate-200 group-hover:bg-indigo-600 group-hover:text-white border border-white/15 transition-colors"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Slide Narrative & Talking Points */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {isPt ? slide.titlePT : slide.titleEN}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {isPt ? slide.takeawayPT : slide.takeawayEN}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-800/80 space-y-2.5">
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium">
                    {slide.metrics}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{isPt ? 'Dados ilustrativos (NDA)' : 'Illustrative data (NDA)'}</span>
                    <span className="text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      <span>{isPt ? 'Ampliar Slide' : 'Inspect Slide'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation CTA */}
        <section className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              {isPt ? 'Explorar Mais Evidências Executivas' : 'Explore Connected Executive Proof Points'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isPt
                ? 'Veja Como Estes Dashboards Alimentam os Meus 8 Pilares Estratégicos'
                : 'See How These MBR/QBR Frameworks Connect to My 8 Strategic Pillars'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isPt
                ? 'Explore os 28 cartões STAR interativos na página de Experiências ou consulte a minha Linha de Carreira (2006–2026) para ver o impacto real na Microsoft, Apple, LinkedIn e Block.'
                : 'Explore all 28 interactive STAR cards on the Experiences page or inspect my Career Timeline (2006–2026) for verified outcomes delivered at Microsoft, Apple, LinkedIn, and Block.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              to="/experiences"
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/30 inline-flex items-center gap-2 transition-all"
            >
              <span>{isPt ? 'Explorar 28 Cartões STAR' : 'Explore 28 STAR Cards'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/career"
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all"
            >
              <span>{isPt ? 'Ver Linha de Carreira' : 'View Career Timeline'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Full-Resolution Slide Inspection */}
      {lightboxIndex !== null && filteredSlides[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-xs font-mono font-bold text-indigo-300">
                  Slide {filteredSlides[lightboxIndex].slideNumber} ({lightboxIndex + 1} /{' '}
                  {filteredSlides.length})
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white truncate max-w-xl">
                  {isPt
                    ? filteredSlides[lightboxIndex].titlePT
                    : filteredSlides[lightboxIndex].titleEN}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Image */}
            <div className="relative bg-slate-950 flex items-center justify-center p-3 sm:p-6">
              <img
                src={filteredSlides[lightboxIndex].image}
                alt={
                  isPt
                    ? filteredSlides[lightboxIndex].titlePT
                    : filteredSlides[lightboxIndex].titleEN
                }
                className="max-h-[70vh] w-auto rounded-xl border border-slate-800 shadow-2xl object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length
                  )
                }
                aria-label="Previous slide"
                className="absolute left-4 p-3 rounded-full bg-slate-900/90 hover:bg-indigo-600 text-white border border-white/15 shadow-xl transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredSlides.length)}
                aria-label="Next slide"
                className="absolute right-4 p-3 rounded-full bg-slate-900/90 hover:bg-indigo-600 text-white border border-white/15 shadow-xl transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Takeaway Footer */}
            <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {isPt
                  ? filteredSlides[lightboxIndex].takeawayPT
                  : filteredSlides[lightboxIndex].takeawayEN}
              </p>
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-xl shrink-0">
                {filteredSlides[lightboxIndex].metrics}
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MbrQbrShowcasePage;
