import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Github, Globe, Brain, Layout, Heart, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import aiGlassIcon from '../assets/branding/ai-glass-icon.png';

const InsightCard = ({ label, description, icon: Icon, position, targetId, isPrimary }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`absolute z-30 transition-all duration-500 transform ${position} ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Balloon / Tooltip */}
      <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 p-4 rounded-2xl insight-balloon transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
        <p className="text-[10px] text-white/90 leading-relaxed font-medium">
          {description}
        </p>
        <button 
          onClick={scrollToSection}
          className="mt-3 flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
        >
          Learn More <ArrowUpRight size={10} />
        </button>
      </div>

      {/* Main Card */}
      <div className={`glass-card p-4 lg:p-5 rounded-3xl shadow-2xl cursor-pointer pulse-glow ${isPrimary ? 'bg-violet-600/10' : 'bg-white/5'}`}>
        <div className="flex flex-col items-center gap-2">
          {Icon && (
            <div className={`p-2 rounded-xl ${isPrimary ? 'bg-violet-600/20' : 'bg-white/10'}`}>
              <Icon size={isPrimary ? 24 : 20} className={isPrimary ? 'text-cyan-400' : 'text-white/70'} />
            </div>
          )}
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{label}</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  const quadrants = [
    { 
      label: t('hero.val_ai_title'), 
      description: t('hero.val_ai_desc'), 
      icon: Brain, 
      position: "-top-8 -right-8 lg:-top-16 lg:-right-16",
      targetId: "#portfolio",
      isPrimary: true
    },
    { 
      label: t('hero.val_geo_title'), 
      description: t('hero.val_geo_desc'), 
      icon: Globe, 
      position: "-bottom-8 -right-8 lg:-bottom-16 lg:-right-16",
      targetId: "#resume"
    },
    { 
      label: t('hero.val_pm_title'), 
      description: t('hero.val_pm_desc'), 
      icon: Layout, 
      position: "-bottom-8 -left-8 lg:-bottom-16 lg:-left-16",
      targetId: "#scrum-board"
    },
    { 
      label: t('hero.val_culture_title'), 
      description: t('hero.val_culture_desc'), 
      icon: Heart, 
      position: "-top-8 -left-8 lg:-top-16 lg:-left-16",
      targetId: "#about"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center stellar-bg pt-24 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                {t('hero.title')}
              </h1>
              
              <div className="space-y-6">
                <h2 className="text-xl lg:text-2xl font-bold text-white/90">
                  {t('hero.tagline')}
                </h2>
                
                <p className="text-lg text-white/50 max-w-xl leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-violet-600 hover:bg-violet-500 text-white px-10 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 active:scale-95"
              >
                {t('hero.cta_primary')}
              </Button>
              
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 px-10 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8 pt-8 text-white/30">
              <a href={personalInfo.socials?.[0]?.url || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Interactive Visual System */}
          <div className="relative group flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              
              {/* Central Shield/Photo */}
              <div className="relative z-20 glass-card p-1.5 rounded-[3rem] shadow-2xl">
                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-[2.8rem] overflow-hidden bg-black/40 border border-white/5">
                  <img 
                    src={personalInfo.photo} 
                    alt="Mara Martins"
                    className="w-full h-full object-cover object-top mix-blend-lighten opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Interactive Quadrants */}
              {quadrants.map((q, idx) => (
                <InsightCard key={idx} {...q} />
              ))}

              {/* Decorative Animated Rings */}
              <div className="absolute inset-x-[-10%] inset-y-[-10%] border border-white/5 rounded-full pointer-events-none animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-x-[-20%] inset-y-[-20%] border border-white/5 rounded-full pointer-events-none animate-[spin_30s_linear_infinite_reverse] opacity-50" />
            </div>
          </div>
        </div>

        {/* Global Signature */}
        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-white/10 uppercase tracking-[0.5em] text-[9px] font-black">
           <span>Mara Martins · 2024</span>
           <span className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
             Strategic Alignment Active
           </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
