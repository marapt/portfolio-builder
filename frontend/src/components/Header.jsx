import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/#services', label: t('nav.services') },
    { href: '/resume', label: t('nav.experience'), isPage: true },
    { href: '/scrum-board', label: t('nav.insights'), isPage: true },
    { href: '/#contact', label: t('nav.contact') }
  ];

  const handleNavClick = (e, link) => {
    if (link.isPage) {
      setIsMobileMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    const hash = link.href.replace('/', '');
    
    if (location.pathname !== '/') {
      window.location.href = link.href;
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language.split('-')[0]) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl font-black text-white tracking-tighter uppercase">Mara</span>
            <span className="text-xl font-light text-white/70 tracking-tighter ml-1 uppercase">Martins</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative py-2 group ${
                    location.pathname === link.href 
                      ? 'text-indigo-600' 
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full ${location.pathname === link.href ? 'w-full' : ''}`} />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-8">
            {/* Language Switcher - Premium "Pill" Design */}
            <div className="h-6 w-px bg-gray-100 hidden xl:block"></div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center gap-3 text-gray-500 hover:text-indigo-600 bg-gray-50/50 hover:bg-indigo-50 border border-gray-100/50 hover:border-indigo-100 px-4 py-2 h-10 rounded-full transition-all group outline-none ring-0">
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 group-hover:bg-indigo-600 transition-colors">
                     <Globe size={10} className="text-gray-400 group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{currentLanguage.code}</span>
                  <ChevronDown size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-gray-100 bg-white/95 backdrop-blur-xl animate-in zoom-in-95 duration-200">
                <div className="px-3 py-2 border-b border-gray-50 mb-1">
                   <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">Select Region</p>
                </div>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer text-[11px] font-black transition-all ${
                      currentLanguage.code === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="flex items-center gap-3">
                       <span className="text-lg grayscale-[0.5] group-hover:grayscale-0">{lang.flag}</span>
                       {lang.name}
                    </span>
                    {currentLanguage.code === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/#contact">
              <Button
                className="bg-gray-900 hover:bg-indigo-600 text-white px-8 h-12 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-gray-100 hover:shadow-indigo-100 transform hover:-translate-y-0.5 active:scale-95"
              >
                {t('contact.submit')}
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 h-10 w-10 flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100">
                    <Globe size={16} className="text-indigo-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 p-1 rounded-2xl bg-white shadow-2xl border-gray-100">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      className="flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase tracking-wider"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="text-base">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 py-10 absolute left-0 right-0 shadow-[0_30px_60px_rgba(0,0,0,0.1)] animate-in slide-in-from-top duration-500 rounded-b-[3rem]">
            <nav className="flex flex-col space-y-2 px-8">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6 px-4">Navigation Menu</p>
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-4 font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all ${
                      location.pathname === link.href 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-500 hover:bg-gray-50 font-black text-xs uppercase tracking-[0.3em] px-4 py-4 rounded-2xl transition-all"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-8">
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-indigo-600 hover:bg-black text-white rounded-2xl py-8 font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-indigo-100"
                  >
                    {t('contact.submit')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
