import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-24 stellar-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-10 lg:p-16 rounded-[4rem] border-white/5 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-12 text-white/70 leading-relaxed">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                <Shield size={12} /> Compliance Guaranteed
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                {t('hero.privacy_title')}
              </h1>
              <p className="text-lg italic text-white/40">
                {t('hero.legal_intro')}
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Lock size={20} className="text-violet-400" /> Data Collection
              </h2>
              <p>
                My consultancy follows strict data minimization principles. I only collect information provided directly by you through the contact form or Calendly booking integration. This typically includes your name, email address, and project details.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Eye size={20} className="text-violet-400" /> AI & Processing
              </h2>
              <p>
                As an AI-driven consultancy, I leverage local AI agents to assist in project orchestration. No personal data shared in our preliminary conversations is fed into public training models. Your privacy and intellectual property are protected by specialized local architectures.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FileText size={20} className="text-violet-400" /> Your Rights (GDPR)
              </h2>
              <p>
                In accordance with global standards (GDPR/EU and CCPA), you have the right to request access to, correction of, or deletion of your personal data at any time. For such requests, please contact me directly at the official address listed in the Imprint.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest flex justify-between items-center">
              <span>Last Updated: April 2024</span>
              <span className="text-cyan-400">Strategically Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
