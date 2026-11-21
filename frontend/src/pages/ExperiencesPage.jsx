import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BentoHeroPillars from '../components/bento/BentoHeroPillars';
import BentoDomainGrid from '../components/bento/BentoDomainGrid';
import BentoCardModal from '../components/bento/BentoCardModal';
import {
  bentoHero as bentoHeroEN,
  topPillars as topPillarsEN,
  operationalDomains as operationalDomainsEN,
} from '../data/bento/en';
import {
  bentoHero as bentoHeroPT,
  topPillars as topPillarsPT,
  operationalDomains as operationalDomainsPT,
} from '../data/bento/pt';
import {
  Layers,
  ArrowRight,
  FileText,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperiencesPage = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  const hero = isPt ? bentoHeroPT : bentoHeroEN;
  const pillars = isPt ? topPillarsPT : topPillarsEN;
  const domains = isPt ? operationalDomainsPT : operationalDomainsEN;

  const [flippedCards, setFlippedCards] = useState({});
  const [allFlipped, setAllFlipped] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    document.title = isPt
      ? 'Minhas Experiências · Modelos STAR | Mara Martins'
      : 'My Experiences · STAR Frameworks | Mara Martins';
  }, [isPt]);

  const handleToggleFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleFlipAll = () => {
    const newFlippedState = {};
    pillars.forEach((p) => {
      (p.subCards || []).forEach((c) => {
        newFlippedState[c.id] = true;
      });
      (p.extendedSubsections || []).forEach((subSec) => {
        (subSec.subCards || []).forEach((c) => {
          newFlippedState[c.id] = true;
        });
      });
    });
    domains.forEach((d) => {
      (d.subCards || []).forEach((c) => {
        newFlippedState[c.id] = true;
      });
    });
    setFlippedCards(newFlippedState);
    setAllFlipped(true);
  };

  const handleResetAll = () => {
    setFlippedCards({});
    setAllFlipped(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-indigo-500/30">
      <Header />

      <main className="flex-1 pt-28 pb-24">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-950 p-8 md:p-12 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
                {hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 text-2xl sm:text-4xl mt-1">
                  {hero.subheading || (isPt ? 'Modelos STAR' : 'STAR Frameworks')}
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/career"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                >
                  <Layers className="w-4 h-4" />
                  <span>{isPt ? 'Linha do Tempo' : 'Career Timeline'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/resume"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 bg-slate-900/80 hover:bg-slate-850 text-slate-200 border border-slate-700/80 shadow-md"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>{isPt ? 'Currículo' : 'Resume'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN BENTO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* TIER 1: TOP 4 STRATEGIC PILLARS */}
          <BentoHeroPillars
            pillars={pillars}
            flippedCards={flippedCards}
            onToggleFlip={handleToggleFlip}
            onExpand={(card, color, domainTitle) =>
              setExpandedCard({ ...card, color, domainTitle })
            }
          />

          {/* TIER 2: 10 SPECIALIZED OPERATIONAL DOMAINS */}
          <BentoDomainGrid
            domains={domains}
            flippedCards={flippedCards}
            onToggleFlip={handleToggleFlip}
            onFlipAll={handleFlipAll}
            onResetAll={handleResetAll}
            allFlipped={allFlipped}
            onExpand={(card, color, domainTitle) =>
              setExpandedCard({ ...card, color, domainTitle })
            }
          />

          {/* EXECUTIVE ENGAGEMENT CTA */}
          <section className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                <span>{isPt ? 'Liderança Estratégica & Execução' : 'Strategic Leadership & Alignment'}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {isPt
                  ? 'Interessado em aprofundar estes modelos operacionais?'
                  : 'Looking to dive deeper into these operational systems?'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {isPt
                  ? 'Cada cartão STAR reflete desafios reais resolvidos em organizações globais de grande escala. Vamos conversar sobre como aplicar estes princípios ao seu ecossistema.'
                  : 'Every STAR card reflects proven execution models delivered across complex global programs. Connect to explore how these operational frameworks can scale your organization.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isPt ? 'Fale Comigo' : 'Get in Touch'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/career"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>{isPt ? 'Explorar Carreira' : 'Explore Career Timeline'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* EXPANDED POP-UP STAR CARD MODAL */}
        {expandedCard && (
          <BentoCardModal
            card={expandedCard}
            color={expandedCard.color}
            domainTitle={expandedCard.domainTitle}
            onClose={() => setExpandedCard(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;
