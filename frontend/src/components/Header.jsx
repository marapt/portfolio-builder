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
    { href: '/#about', label: t('nav.about') },
    { href: '/#services', label: t('nav.services') },
    { href: '/#portfolio', label: t('nav.portfolio') },
    { href: '/scrum-board', label: t('nav.scrum_board'), isPage: true },
    { href: '/resume', label: t('nav.resume'), isPage: true },
    { href: '/#testimonials', label: t('nav.testimonials') },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">Mara</span>
            <span className="text-2xl font-light text-indigo-600">Martins</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium text-sm uppercase tracking-widest transition-colors duration-200 ${
                    location.pathname === link.href 
                      ? 'text-indigo-600' 
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-600 hover:text-indigo-600 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-bold uppercase tracking-tighter text-xs h-9 px-3 rounded-full hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all">
                  <Globe size={16} className="text-indigo-500" />
                  <span>{currentLanguage.code}</span>
                  <ChevronDown size={14} className="opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 p-1 rounded-xl shadow-xl border-gray-100 bg-white/95 backdrop-blur-md">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-xs font-bold transition-colors ${
                      currentLanguage.code === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="flex items-center gap-2">
                       <span className="text-base">{lang.flag}</span>
                       {lang.name}
                    </span>
                    {currentLanguage.code === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/#contact">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
              >
                {t('contact.submit')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 h-9 w-9 rounded-full bg-gray-50">
                    <Globe size={18} className="text-indigo-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 p-1 rounded-xl bg-white shadow-xl border-gray-100">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      className="flex items-center gap-3 px-3 py-2 text-xs font-bold"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

            <button
              className="p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 py-6 absolute left-0 right-0 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-2 px-6">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 font-bold text-sm uppercase tracking-[0.2em] rounded-xl transition-colors ${
                      location.pathname === link.href 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-600 hover:bg-gray-50 font-bold text-sm uppercase tracking-[0.2em] px-4 py-3 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-4">
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6 font-bold uppercase tracking-widest text-xs"
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
