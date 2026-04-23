import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Globe, Scale, Brain } from 'lucide-react';
import { personalInfo } from '../data/mock';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen stellar-bg">
      <Header />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="glass-card p-10 lg:p-16 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-2xl shadow-cyan-900/10">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-12 text-white/70 leading-relaxed font-medium">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                <Scale size={12} /> {t('imprint.label')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                {t('hero.imprint_title')}
              </h1>
              <p className="text-lg italic text-white/40 border-l-2 border-cyan-500/30 pl-6">
                {t('imprint.intro')}
              </p>
            </div>

            <section className="grid lg:grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <MapPin size={20} className="text-cyan-400" /> {t('imprint.base_title')}
                </h2>
                <div className="space-y-1 text-sm">
                   <p className="font-black text-white text-xl tracking-tight mb-2">{personalInfo.name}</p>
                   <p className="text-cyan-400/80 font-bold">{t('imprint.role')}</p>
                   <p className="text-white/40">{personalInfo.location}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <Mail size={20} className="text-cyan-400" /> {t('imprint.contact_title')}
                </h2>
                <div className="space-y-2 text-sm">
                   <p className="flex items-center gap-2"><span className="text-white/30 uppercase text-[9px] font-black">Email:</span> {personalInfo.email}</p>
                   <p className="flex items-center gap-2"><span className="text-white/30 uppercase text-[9px] font-black">{t('imprint.web')}:</span> maramartins.com</p>
                </div>
              </div>
            </section>

            <section className="space-y-6 bg-white/3 p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                <Brain size={20} className="text-cyan-400" /> {t('imprint.ethics_title')}
              </h2>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-white/50">
                  {t('imprint.ethics_desc')}
                </p>
                <div className="p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/10 text-[11px] font-bold text-cyan-400/80">
                  {t('imprint.ai_disclosure')}
                </div>
                <div className="p-4 rounded-xl bg-violet-400/5 border border-violet-400/10 text-[10px] italic text-violet-400/60 leading-relaxed">
                  {t('imprint.legal_ai_disclaimer')}
                </div>
              </div>
            </section>

            <section className="space-y-6 bg-white/3 p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                <Globe size={20} className="text-cyan-400" /> {t('imprint.disclaimer_title')}
              </h2>
              <p className="text-sm leading-relaxed">
                {t('imprint.disclaimer_desc')}
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest flex justify-between items-center font-black opacity-30">
              <span>{t('imprint.jurisdiction')}</span>
              <span className="text-cyan-400">{t('imprint.audited')}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
