import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/scrum-board', label: 'Scrum Board', isPage: true },
    { href: '/resume', label: 'Resume', isPage: true },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, link) => {
    if (link.isPage) {
      setIsMobileMenuOpen(false);
      return; // Let React Router handle it
    }
    
    e.preventDefault();
    const hash = link.href.replace('/', '');
    
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = link.href;
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
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
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors duration-200 ${
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
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/#contact">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 font-medium transition-colors duration-200 ${
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
                    className="text-gray-600 hover:text-indigo-600 font-medium px-4 py-2 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="px-4 pt-2">
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                  >
                    Let's Connect
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
