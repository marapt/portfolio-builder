import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Globe, Scale } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-24 stellar-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-10 lg:p-16 rounded-[4rem] border-white/5 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 space-y-12 text-white/70 leading-relaxed">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                <Scale size={12} /> Legal Discovery
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                {t('hero.imprint_title')}
              </h1>
              <p className="text-lg italic text-white/40">
                In compliance with professional standards for global consultancies.
              </p>
            </div>

            <section className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <MapPin size={20} className="text-cyan-400" /> Professional Base
                </h2>
                <div className="space-y-2 text-sm">
                   <p className="font-bold text-white text-lg">{personalInfo.name}</p>
                   <p>AI Localization Strategy & Program Leadership</p>
                   <p>{personalInfo.location}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Mail size={20} className="text-cyan-400" /> Digital Contact
                </h2>
                <div className="space-y-2 text-sm italic">
                   <p>Email: {personalInfo.email}</p>
                   <p>Digital Presence: maramartins.com</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Globe size={20} className="text-cyan-400" /> Disclaimer
              </h2>
              <p className="text-sm">
                The content provided on this website is for informational purposes for professional consultancy and recruitment. While I strive for 100% accuracy in the "Stellar" design and AI implementation, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest flex justify-between items-center">
              <span>Jurisdiction: California, USA</span>
              <span className="text-cyan-400">Professionally Audited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
