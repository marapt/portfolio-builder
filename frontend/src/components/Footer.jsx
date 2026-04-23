import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo as personalInfoEN } from '../data/site/en';
import { personalInfo as personalInfoPT } from '../data/site/pt';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const personalInfo = i18n.language.startsWith('pt') ? personalInfoPT : personalInfoEN;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#contact', label: t('nav.contact') }
  ];

  const legalLinks = [
    { to: '/privacy', label: t('hero.privacy_title') || 'Privacy Policy' },
    { to: '/imprint', label: t('hero.imprint_title') || 'Legal Imprint' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Mara</span>
              <span className="text-2xl font-light text-indigo-400">Martins</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links') || 'Quick Links'}</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal_col') || 'Legal'}</h4>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <p className="text-gray-600 text-xs pt-2 leading-relaxed">
                {personalInfo.location}
              </p>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} {personalInfo.name}. {t('footer.rights') || 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors">{t('hero.privacy_title')}</Link>
            <span>·</span>
            <Link to="/imprint" className="hover:text-indigo-400 transition-colors">{t('hero.imprint_title')}</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            {i18n.language.startsWith('pt') ? 'Voltar ao topo' : 'Back to top'}
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
