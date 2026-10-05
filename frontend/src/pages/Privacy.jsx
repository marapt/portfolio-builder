import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileText, Database, Scale, ExternalLink } from 'lucide-react';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen stellar-bg">
      <Header />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-10 lg:p-16 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-2xl shadow-violet-900/20">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-12 text-white/70 leading-relaxed font-medium">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                <Shield size={12} /> GDPR Compliant • EU Expansion Ready
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                {t('privacy.title')}
              </h1>
              <p className="text-lg italic text-white/40 border-l-2 border-violet-500/30 pl-6">
                {t('privacy.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <section className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <Database size={20} className="text-violet-400" /> {t('privacy.controller_title')}
                </h2>
                <p className="text-sm">
                  {t('privacy.controller_desc')}
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <Lock size={20} className="text-violet-400" /> {t('privacy.collection_title')}
                </h2>
                <p className="text-sm text-white/60">
                   {t('privacy.collection_desc')}
                </p>
              </section>
            </div>

            <section className="space-y-6 bg-white/3 p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                <Shield size={20} className="text-emerald-400" /> {t('privacy.infra_title')}
              </h2>
              <p className="text-sm">
                {t('privacy.infra_desc')}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12">
              <section className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <Eye size={20} className="text-violet-400" /> {t('privacy.rights_title')}
                </h2>
                <p className="text-sm">
                  {t('privacy.rights_desc')}
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                  <Scale size={20} className="text-violet-400" /> {t('privacy.supervisory_title')}
                </h2>
                <p className="text-sm italic text-white/50 mb-4">
                   {t('privacy.supervisory_desc')}
                </p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.cnpd.pt/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all">
                    CNPD Portal <ExternalLink size={11} />
                  </a>
                </div>
              </section>
            </div>

            <div className="p-4 rounded-xl bg-violet-400/5 border border-violet-400/10 text-[10px] italic text-violet-400/60 leading-relaxed">
              {t('imprint.legal_ai_disclaimer')}
            </div>

            <div className="pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest flex justify-between items-center font-black opacity-30">
              <span>{t('privacy.last_updated')}: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              <span className="text-emerald-400">Governance Verified</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
