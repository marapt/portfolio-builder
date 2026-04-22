import React from 'react';
import { ArrowDown, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLocalizedStats = () => {
    return [
      { value: '15+', label: t('stats.years') },
      { value: '40+', label: t('stats.languages') },
      { value: '50+', label: t('stats.projects') },
      { value: '100%', label: t('stats.satisfaction') }
    ];
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50/50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 text-indigo-600 mb-4">
              <div className="p-1.5 bg-indigo-50 rounded-lg">
                <MapPin size={16} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider">{personalInfo.location}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-4 leading-[1.1] tracking-tight">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-indigo-600 font-extrabold mb-8 uppercase tracking-tight">
              {personalInfo.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              {t('hero.tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 mb-16">
              <Button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-indigo-600 hover:bg-black text-white px-10 py-7 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95"
              >
                <Calendar size={18} />
                {t('hero.cta_primary')}
              </Button>
              <Button
                variant="outline"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-10 py-7 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 transform hover:-translate-y-1"
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
              {getLocalizedStats().map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl font-black text-indigo-600 tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 transition-all duration-700 group-hover:rotate-2 group-hover:scale-105">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-7xl lg:text-9xl font-black text-indigo-200">MM</div>`;
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-10 blur-2xl opacity-50 group-hover:bg-indigo-200 transition-colors"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full -z-10 blur-2xl opacity-50 group-hover:bg-purple-200 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-all duration-300 group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Explore Work</span>
            <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center p-1">
               <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
