import React, { useState } from 'react';
import { Globe, CheckCircle, XCircle, AlertTriangle, ChevronDown, ChevronUp, MapPin, TrendingUp, Users, Target, Clock, BookOpen, Zap, Lock, Unlock } from 'lucide-react';

// ── GTM Phase Data ────────────────────────────────────────────────────────────
const PHASES = [
  {
    id: 1,
    name: 'Home Base',
    subtitle: 'en-US Launch',
    region: 'North America',
    flag: '🇺🇸',
    locale: 'en-US',
    status: 'ACTIVE',
    color: 'emerald',
    coords: { top: '28%', left: '18%' },
    markets: ['Silicon Valley', 'Seattle', 'New York', 'Toronto'],
    audience: ['Senior Tech Recruiters', 'Heads of Localization', 'Program Directors'],
    metrics: ['≥3 inbound recruiter contacts/month', 'CV download rate ≥5%', 'Time on site ≥2 min'],
    blockers: [],
    approved: true,
  },
  {
    id: 2,
    name: 'EU Expansion',
    subtitle: 'pt-PT Launch',
    region: 'Europe',
    flag: '🇵🇹',
    locale: 'pt-PT',
    status: 'QUEUED',
    color: 'amber',
    coords: { top: '28%', left: '46%' },
    markets: ['Lisbon', 'Porto', 'London', 'Amsterdam', 'Berlin'],
    audience: ['EU Tech Startups', 'Portuguese Companies', 'EUATC Network'],
    metrics: ['≥2 EU contacts/month', 'pt-PT toggle ≥15% sessions', 'Indexed on google.pt'],
    blockers: ['LQA pt-PT: resolve "legal" term warning (PJM-68)', 'hreflang tags not yet implemented (PJM-67)', 'GDPR audit pending (PJM-69)'],
    approved: false,
  },
  {
    id: 3,
    name: 'LATAM Entry',
    subtitle: 'es-419 / pt-BR TBD',
    region: 'Latin America',
    flag: '🌎',
    locale: 'TBD',
    status: 'FUTURE',
    color: 'blue',
    coords: { top: '58%', left: '26%' },
    markets: ['Mexico City', 'São Paulo', 'Buenos Aires', 'Bogotá'],
    audience: ['LATAM Tech Scale-ups', 'Multinational Expansion Teams'],
    metrics: ['Locale selection decided', '≥1 LATAM contact/month', 'Regional SEO indexed'],
    blockers: ['Locale decision required: es-419 vs pt-BR (PJM-72)', 'No LATAM-specific content yet', 'Legal compliance research needed (PJM-74)'],
    approved: false,
  },
  {
    id: 4,
    name: 'APAC Vision',
    subtitle: 'zh-TW / ja-JP TBD',
    region: 'Asia Pacific',
    flag: '🌏',
    locale: 'TBD',
    status: 'FUTURE',
    color: 'violet',
    coords: { top: '38%', left: '76%' },
    markets: ['Taipei', 'Tokyo', 'Singapore', 'Hong Kong'],
    audience: ['Semiconductor Companies', 'APAC Tech Leaders', 'Global Consultancies'],
    metrics: ['CJK rendering feasibility complete', 'Specialist linguist agents built'],
    blockers: ['Business vision definition required (PJM-75)', 'CJK rendering engineering needed (PJM-76)', 'Specialist agents not yet built'],
    approved: false,
  },
];

// ── GTM Blog Entries ──────────────────────────────────────────────────────────
const BLOG_POSTS = [
  {
    id: 'gtm-001',
    date: 'April 2026',
    phase: 1,
    title: 'Why Silicon Valley First — The Strategic Logic of en-US as Home Base',
    category: 'Market Strategy',
    excerpt: 'When building a global portfolio, the instinct might be to launch everywhere at once. The discipline is in choosing one market to own completely before expanding.',
    content: `The decision to anchor Phase 1 in Silicon Valley wasn't arbitrary — it's where the highest density of Localization, Program Management, and AI Strategy leadership sits. Companies like Google, Apple, LinkedIn, and HP (all part of my professional history) are headquartered within 50 miles of each other.

Starting with en-US also means starting in the language I communicate most precisely in for a professional context. It allows me to establish a baseline quality standard that all subsequent locales are measured against.

The principle: **perfect one market before opening the next**. This isn't caution — it's precision. A portfolio that is exceptional in one language is more powerful than one that is mediocre in five.

**Key decision**: Use maramartins.com as the canonical en-US home. The pt-PT locale lives as an alternate, not a translation — with distinct CTAs, distinct audiences, and distinct success metrics.`,
    tags: ['Market Entry', 'en-US', 'Strategy'],
    status: 'Published',
  },
  {
    id: 'gtm-002',
    date: 'April 2026',
    phase: 2,
    title: 'The EU/pt-PT Launch Gate: What Has to Be True Before Phase 2 Opens',
    category: 'Governance',
    excerpt: 'Phase 2 is not a date on a calendar. It is a checklist of conditions — and every condition gate is enforced by the agent fleet.',
    content: `The EU/pt-PT expansion targets a fundamentally different audience than Phase 1. Portuguese and EU-based companies evaluating a senior Localization leader will scrutinise the language quality of a portfolio in a way that English-speaking US recruiters will not.

This creates a higher bar: the pt-PT locale must pass a full LQC + LQA cycle, the site must comply with GDPR (not just in spirit but in technical implementation), and the hreflang tags must be in place so Google.pt serves the correct version to Portuguese visitors.

**The Phase 2 gate conditions:**
1. LQA Engine: zero FAIL findings for pt-PT (the "legal" term warning must be resolved)
2. hreflang tags: \`en-US\` and \`pt-PT\` correctly implemented in \`index.html\`
3. GDPR audit: Compliance Officer agent sign-off
4. Governance Dashboard: explicit Mara Martins approval

None of these gates open automatically. Each requires a human decision. This is by design.`,
    tags: ['EU Launch', 'GDPR', 'pt-PT', 'Governance'],
    status: 'Published',
  },
  {
    id: 'gtm-003',
    date: 'May 2026 (Planned)',
    phase: 3,
    title: 'LATAM Expansion: The es-419 vs pt-BR Decision Framework',
    category: 'Market Research',
    excerpt: 'Latin America is not a single market. The locale selection here is a strategic bet on which professional communities I want to serve first.',
    content: `The LATAM expansion presents a genuine strategic fork that requires a decision rather than a default.

**Option A: es-419 (Latin American Spanish)**
- Reaches Mexico, Colombia, Argentina — the largest LATAM tech hubs
- Broader addressable audience
- Requires a new linguist agent and style guide from scratch

**Option B: pt-BR (Brazilian Portuguese)**  
- Leverages existing Portuguese language infrastructure (pt-PT as base)
- Brazil is LATAM's largest economy and growing tech market
- Risk: pt-BR and pt-PT are meaningfully different — the LQA engine would need LATAM-specific prohibited terms

**The decision criteria:**
1. Where is the strongest demand signal from inbound contacts?
2. Which market aligns better with the future company vision?
3. Which locale can be brought to LQC/LQA certification fastest?

This entry will be updated once Phase 1 metrics have run for 90 days and a demand signal is observable.`,
    tags: ['LATAM', 'es-419', 'pt-BR', 'Market Research'],
    status: 'Draft',
  },
  {
    id: 'gtm-004',
    date: 'Q3 2026 (Future)',
    phase: 4,
    title: 'APAC Entry: CJK Rendering, Cultural Localization, and the Long Game',
    category: 'Future Vision',
    excerpt: 'The APAC expansion is the most technically complex and strategically deliberate phase. It will not be rushed.',
    content: `APAC entry — whether Taiwan, Japan, or Singapore — requires a different kind of preparation than any previous phase.

**Technical complexity**: CJK character sets (Chinese, Japanese, Korean) have different typographic requirements. Line-height, font-loading, character encoding, and text layout all need explicit engineering attention. The Stellar UI was not designed with CJK rendering in mind — this must be assessed before anything else.

**Cultural complexity**: Japanese professional culture has specific expectations around formality, hierarchy, and brand presentation that require genuine local expertise — not just translation. A linguist agent for ja-JP would need to encode rules that a Western professional might not intuit.

**The long game principle**: APAC is where the portfolio becomes a gateway for potential company building — not just career opportunities. The networks I want to reach in APAC are those of senior technology leaders at Tier 1 semiconductor and hardware companies.

This phase opens only when: (1) the business vision is defined, (2) the technical infrastructure is ready, and (3) a qualified specialist linguist is available for the target locale.`,
    tags: ['APAC', 'CJK', 'Japan', 'Taiwan', 'Future Vision'],
    status: 'Outline',
  },
];

// ── Utility ───────────────────────────────────────────────────────────────────
const phaseColors = {
  ACTIVE: { bg: 'bg-emerald-400/15', border: 'border-emerald-400/30', text: 'text-emerald-400', dot: 'bg-emerald-400', badge: 'bg-emerald-400/20 text-emerald-400' },
  QUEUED: { bg: 'bg-amber-400/15', border: 'border-amber-400/30', text: 'text-amber-400', dot: 'bg-amber-400', badge: 'bg-amber-400/20 text-amber-400' },
  FUTURE: { bg: 'bg-white/5', border: 'border-white/10', text: 'text-white/30', dot: 'bg-white/20', badge: 'bg-white/10 text-white/30' },
};

const blogStatusColors = {
  Published: 'bg-emerald-400/20 text-emerald-400',
  Draft: 'bg-amber-400/20 text-amber-400',
  Outline: 'bg-white/10 text-white/30',
};

// ── Sub-components ────────────────────────────────────────────────────────────

const WorldPhaseMap = ({ phases, activePhase, onSelectPhase }) => (
  <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
    <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
      <div>
        <h2 className="text-white font-black tracking-tighter">Global Rollout Map</h2>
        <p className="text-white/30 text-xs mt-0.5">Click a region to view phase details</p>
      </div>
      <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest">
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Active</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" />Queued</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />Future</span>
      </div>
    </div>

    {/* Stylised world map using CSS regions */}
    <div className="relative bg-[#0a0a1a] p-8" style={{ minHeight: '320px' }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Continent silhouettes – simplified CSS shapes */}
      {/* North America */}
      <div className="absolute opacity-10 bg-white/20 rounded-tl-3xl rounded-br-xl" style={{ top: '15%', left: '5%', width: '28%', height: '50%', clipPath: 'polygon(10% 0%, 90% 5%, 100% 40%, 80% 100%, 30% 90%, 0% 60%)' }} />
      {/* South America */}
      <div className="absolute opacity-10 bg-white/20 rounded-bl-3xl" style={{ top: '55%', left: '20%', width: '16%', height: '35%', clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 60% 100%, 0% 80%)' }} />
      {/* Europe */}
      <div className="absolute opacity-10 bg-white/20" style={{ top: '12%', left: '42%', width: '16%', height: '35%', clipPath: 'polygon(20% 0%, 80% 0%, 100% 60%, 70% 100%, 0% 70%)' }} />
      {/* Africa */}
      <div className="absolute opacity-10 bg-white/20 rounded-b-3xl" style={{ top: '42%', left: '44%', width: '14%', height: '42%', clipPath: 'polygon(15% 0%, 85% 0%, 90% 60%, 50% 100%, 10% 60%)' }} />
      {/* Asia */}
      <div className="absolute opacity-10 bg-white/20" style={{ top: '10%', left: '58%', width: '30%', height: '50%', clipPath: 'polygon(0% 20%, 40% 0%, 100% 10%, 95% 70%, 50% 90%, 0% 60%)' }} />
      {/* Australia */}
      <div className="absolute opacity-10 bg-white/20 rounded-2xl" style={{ top: '62%', left: '72%', width: '14%', height: '22%', clipPath: 'polygon(0% 20%, 60% 0%, 100% 30%, 80% 100%, 10% 90%)' }} />

      {/* Phase markers */}
      {phases.map((phase) => {
        const c = phaseColors[phase.status];
        const isSelected = activePhase === phase.id;
        return (
          <button
            key={phase.id}
            onClick={() => onSelectPhase(phase.id)}
            className="absolute group transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ top: phase.coords.top, left: phase.coords.left }}
          >
            {/* Pulse ring */}
            {phase.status === 'ACTIVE' && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-emerald-400/20 animate-ping" />
              </span>
            )}
            {/* Marker */}
            <div className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border-2 backdrop-blur-sm ${c.bg} ${c.border} shadow-lg`}>
                <span className="text-xl leading-none">{phase.flag}</span>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${c.badge} backdrop-blur-sm whitespace-nowrap`}>
                Phase {phase.id}
              </div>
            </div>
          </button>
        );
      })}

      {/* Rollout path lines - SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.15)" />
          </marker>
        </defs>
        {/* Phase 1 → 2 */}
        <line x1="18%" y1="28%" x2="46%" y2="28%" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="6,4" markerEnd="url(#arrow)" />
        {/* Phase 2 → 3 */}
        <line x1="46%" y1="38%" x2="26%" y2="58%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6,4" />
        {/* Phase 2 → 4 */}
        <line x1="56%" y1="28%" x2="76%" y2="38%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6,4" />
      </svg>
    </div>
  </div>
);

const PhaseCard = ({ phase, expanded, onToggle }) => {
  const c = phaseColors[phase.status];
  return (
    <div className={`glass-card rounded-2xl border transition-all duration-300 ${c.border} ${expanded ? c.bg : 'bg-white/3 hover:bg-white/5'}`}>
      <button onClick={onToggle} className="w-full p-5 text-left">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg} text-xl flex-shrink-0`}>
              {phase.flag}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[9px] font-black uppercase tracking-widest ${c.text}`}>Phase {phase.id} · {phase.status}</span>
                {phase.blockers.length > 0 && (
                  <span className="text-[9px] bg-red-400/10 text-red-400 px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">
                    {phase.blockers.length} blockers
                  </span>
                )}
                {phase.approved && <span className="text-[9px] bg-emerald-400/10 text-emerald-400 px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">✓ Approved</span>}
              </div>
              <h3 className="text-white font-black tracking-tight">{phase.name} <span className="text-white/30 font-light">— {phase.subtitle}</span></h3>
              <p className="text-white/30 text-xs mt-0.5">{phase.markets.slice(0, 3).join(' · ')}{phase.markets.length > 3 ? ` +${phase.markets.length - 3}` : ''}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${c.badge}`}>{phase.locale}</span>
            {expanded ? <ChevronUp size={14} className="text-white/30" /> : <ChevronDown size={14} className="text-white/30" />}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 space-y-5 border-t border-white/5 pt-5">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-1"><Target size={9} /> Target Audience</p>
              {phase.audience.map(a => <p key={a} className="text-xs text-white/50">• {a}</p>)}
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-1"><TrendingUp size={9} /> Success Metrics</p>
              {phase.metrics.map(m => <p key={m} className="text-xs text-white/50">• {m}</p>)}
            </div>
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-1"><AlertTriangle size={9} /> Blockers</p>
              {phase.blockers.length === 0
                ? <p className="text-xs text-emerald-400">✓ No blockers — phase is clear</p>
                : phase.blockers.map(b => <p key={b} className="text-xs text-amber-400/70">⚠ {b}</p>)
              }
            </div>
          </div>

          {!phase.approved && phase.status !== 'FUTURE' && (
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400/20 transition-all">
                <Unlock size={11} /> Approve Phase {phase.id} Launch
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-400/20 transition-all">
                <Lock size={11} /> Hold — Blockers Outstanding
              </button>
            </div>
          )}
          {phase.approved && (
            <div className="text-center py-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
              ✅ Phase {phase.id} Approved — Live on maramartins.com
            </div>
          )}
          {phase.status === 'FUTURE' && (
            <div className="text-center py-2 text-[10px] font-black uppercase tracking-widest text-white/20">
              ⏳ Future Vision — Awaiting strategy definition
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const BlogPost = ({ post, expanded, onToggle }) => (
  <div className="glass-card rounded-2xl border border-white/8 overflow-hidden transition-all duration-300">
    <button onClick={onToggle} className="w-full p-6 text-left hover:bg-white/3 transition-colors">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-1">
              <Clock size={9} /> {post.date}
            </span>
            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${blogStatusColors[post.status]}`}>{post.status}</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-violet-400/60 bg-violet-400/10 px-2 py-0.5 rounded-full">Phase {post.phase}</span>
          </div>
          <h3 className="text-white font-black tracking-tight leading-snug">{post.title}</h3>
          <p className="text-white/40 text-sm leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-2 flex-wrap pt-1">
            {post.tags.map(t => (
              <span key={t} className="text-[9px] text-white/20 bg-white/5 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">#{t}</span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 pt-1">
          {expanded ? <ChevronUp size={16} className="text-white/30" /> : <ChevronDown size={16} className="text-white/30" />}
        </div>
      </div>
    </button>
    {expanded && (
      <div className="px-6 pb-6 border-t border-white/5 pt-6">
        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <p key={i} className="font-black text-white text-sm mb-3">{para.replace(/\*\*/g, '')}</p>;
            }
            if (para.startsWith('- ') || para.split('\n').every(l => l.startsWith('- '))) {
              return (
                <ul key={i} className="mb-3 space-y-1">
                  {para.split('\n').map((l, j) => <li key={j} className="text-white/50 text-sm ml-4">• {l.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>)}
                </ul>
              );
            }
            return <p key={i} className="text-white/50 text-sm leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/80">$1</strong>') }} />;
          })}
        </div>
      </div>
    )}
  </div>
);

// ── Main Page ─────────────────────────────────────────────────────────────────
const GTMDashboard = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [expandedPhase, setExpandedPhase] = useState(1);
  const [expandedPost, setExpandedPost] = useState('gtm-001');
  const [activeTab, setActiveTab] = useState('phases'); // 'phases' | 'blog'

  const activeCount = PHASES.filter(p => p.status === 'ACTIVE').length;
  const queuedCount = PHASES.filter(p => p.status === 'QUEUED').length;
  const blockerCount = PHASES.reduce((acc, p) => acc + p.blockers.length, 0);
  const publishedPosts = BLOG_POSTS.filter(p => p.status === 'Published').length;

  return (
    <div className="min-h-screen stellar-bg pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">

        {/* ── Header ── */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-rose-600/20 flex-shrink-0">
              <Globe size={24} className="text-rose-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400/60">GTM Strategy</span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500" />
                  </span>
                  <span className="text-[10px] text-rose-400/60 uppercase tracking-widest">Live</span>
                </span>
              </div>
              <h1 className="text-4xl font-black text-white tracking-tighter">Global GTM Command Centre</h1>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                A live Go-To-Market strategy dashboard tracking the phased worldwide expansion of maramartins.com — from Silicon Valley to Europe, Latin America, and APAC. Each phase is governed by a strict readiness gate and requires explicit approval before opening. The strategy blog documents the reasoning behind every major decision.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Phases Active', value: `${activeCount}/4`, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
              { label: 'Queued', value: queuedCount, color: 'text-amber-400', bg: 'bg-amber-400/10' },
              { label: 'Open Blockers', value: blockerCount, color: 'text-red-400', bg: 'bg-red-400/10' },
              { label: 'Strategy Posts', value: `${publishedPosts}/${BLOG_POSTS.length}`, color: 'text-violet-400', bg: 'bg-violet-400/10' },
            ].map(s => (
              <div key={s.label} className={`glass-card p-5 rounded-2xl ${s.bg} text-center space-y-1`}>
                <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── World Map ── */}
        <WorldPhaseMap phases={PHASES} activePhase={activePhase} onSelectPhase={(id) => { setActivePhase(id); setExpandedPhase(id); }} />

        {/* ── Tab Navigation ── */}
        <div className="flex gap-2">
          {[
            { id: 'phases', label: 'Phase Approvals', icon: Target },
            { id: 'blog', label: 'GTM Strategy Blog', icon: BookOpen },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white border border-white/15'
                  : 'text-white/30 hover:text-white/50'
              }`}
            >
              <tab.icon size={11} /> {tab.label}
            </button>
          ))}
        </div>

        {/* ── Phase Approvals Tab ── */}
        {activeTab === 'phases' && (
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
              <Zap size={10} /> Phase Readiness & Approvals
            </p>
            {PHASES.map(phase => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                expanded={expandedPhase === phase.id}
                onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              />
            ))}
          </div>
        )}

        {/* ── Blog Tab ── */}
        {activeTab === 'blog' && (
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 flex items-center gap-2">
              <BookOpen size={10} /> GTM Strategy Journal — Professional Decision Log
            </p>
            {BLOG_POSTS.map(post => (
              <BlogPost
                key={post.id}
                post={post}
                expanded={expandedPost === post.id}
                onToggle={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
              />
            ))}
          </div>
        )}

        {/* ── Footer ── */}
        <div className="pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest">
          <span>GTM Strategy Agent · Mara Martins Operating System</span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            4 Phases Tracked
          </span>
        </div>
      </div>
    </div>
  );
};

export default GTMDashboard;
