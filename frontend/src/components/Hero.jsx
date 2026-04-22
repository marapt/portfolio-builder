import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Github, Globe, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import aiGlassIcon from '../assets/branding/ai-glass-icon.png';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const hash = href.replace('/', '');
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center stellar-bg pt-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                {t('hero.title')}
              </h1>
              
              <div className="space-y-6">
                <h2 className="text-xl lg:text-2xl font-bold text-white/90">
                  {t('hero.tagline')}
                </h2>
                
                <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="bg-violet-600 hover:bg-violet-500 text-white px-10 h-14 rounded-2xl font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:-translate-y-1"
              >
                {t('hero.cta_primary')}
              </Button>
              
              <Button
                variant="outline"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 px-10 h-14 rounded-2xl font-bold text-sm transition-all"
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 text-white/40">
              <a href={personalInfo.socials?.[0]?.url || "#"} className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href={personalInfo.github} className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Floating Glass System */}
          <div className="relative group flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
            
            {/* Main Visual Container */}
            <div className="relative w-full max-w-md aspect-square lg:aspect-video flex items-center justify-center">
              
              {/* Background Globe Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
              
              {/* Central AI Card (Floating) */}
              <div className="relative z-20 glass-card p-1 rounded-[2.5rem] transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-[2.2rem] overflow-hidden bg-black/40">
                  <img 
                    src={personalInfo.photo} 
                    alt="Mara Martins"
                    className="w-full h-full object-cover object-top mix-blend-lighten opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Element 1 - AI Icon */}
              <div className="absolute -top-4 right-4 lg:-right-8 z-30 glass-card p-4 rounded-3xl shadow-2xl animate-bounce duration-[4000ms] transition-transform hover:scale-110">
                <img src={aiGlassIcon} alt="AI" className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
                <div className="absolute top-2 right-2 flex space-x-0.5">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest leading-none">AI Neural</span>
                </div>
              </div>

              {/* Floating Element 2 - Tech Globe */}
              <div className="absolute -bottom-8 left-4 lg:-left-12 z-30 glass-card p-5 rounded-3xl shadow-2xl animate-bounce duration-[5000ms] delay-700 transition-transform hover:scale-110">
                <div className="flex flex-col items-center gap-3">
                   <div className="p-3 bg-violet-600/20 rounded-2xl border border-violet-500/30">
                     <Globe className="text-cyan-400" size={24} />
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-white uppercase tracking-widest">Global Scan</p>
                      <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="w-2/3 h-full bg-cyan-500 rounded-full animate-pulse" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Tech Grid */}
              <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute inset-4 border border-white/5 rounded-full pointer-events-none scale-90" />
            </div>
          </div>
        </div>

        {/* Footer info (matching mockup bottom labels) */}
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-white/20">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Mara Martins</span>
           <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Footer</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
