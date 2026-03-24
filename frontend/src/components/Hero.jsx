import React from 'react';
import { ArrowDown, MapPin, Linkedin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, stats } from '../data/mock';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50/50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 text-indigo-600 mb-4">
              <MapPin size={18} />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-indigo-600 font-medium mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>
            
            <p className="text-gray-500 mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <Calendar size={18} />
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                View My Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-indigo-100 to-indigo-50">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl lg:text-8xl font-bold text-indigo-300">MM</div>`;
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-indigo-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-indigo-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-colors duration-200 animate-bounce"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
