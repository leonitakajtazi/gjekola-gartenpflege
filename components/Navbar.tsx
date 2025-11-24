import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'Dienstleistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-emerald-100' : 'bg-white/20 backdrop-blur-md'}`}>
               <Leaf className={`h-6 w-6 ${isScrolled ? 'text-emerald-700' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-tight ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                Gjekola
              </span>
              <span className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-emerald-700' : 'text-emerald-100'}`}>
                Gartenpflege
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
                  : 'bg-white text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              Angebot anfordern
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-800' : 'text-white'} hover:bg-white/10`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100 flex flex-col gap-3">
              <a href="tel:01623222606" className="flex items-center gap-2 text-stone-600 px-3">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>0162 3222 606</span>
              </a>
              <a href="mailto:Gartenarbeit_01@gmx.net" className="flex items-center gap-2 text-stone-600 px-3">
                <Mail className="h-4 w-4 text-emerald-600" />
                <span>Gartenarbeit_01@gmx.net</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};