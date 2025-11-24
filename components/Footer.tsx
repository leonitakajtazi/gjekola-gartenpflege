import React from 'react';
import { Leaf, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-emerald-500">
              <Leaf className="h-7 w-7 sm:h-8 sm:w-8" />
              <span className="text-xl sm:text-2xl font-serif font-bold text-white">Gjekola</span>
            </div>
            <p className="text-stone-400 text-sm sm:text-base max-w-xs">
              Professionelle Gartenpflege, Galabau und Entsorgung. Wir machen Ihren Garten zu Ihrem Lieblingsort.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-2">
              <a href="#" className="bg-stone-800 p-2.5 sm:p-2 rounded-full hover:bg-emerald-700 hover:text-white active:bg-emerald-800 active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2.5 sm:p-2 rounded-full hover:bg-blue-700 hover:text-white active:bg-blue-800 active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Navigation</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><a href="#home" className="hover:text-emerald-500 active:text-emerald-400 transition-colors text-sm sm:text-base block py-1">Startseite</a></li>
              <li><a href="#services" className="hover:text-emerald-500 active:text-emerald-400 transition-colors text-sm sm:text-base block py-1">Dienstleistungen</a></li>
              <li><a href="#gallery" className="hover:text-emerald-500 active:text-emerald-400 transition-colors text-sm sm:text-base block py-1">Galerie</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 active:text-emerald-400 transition-colors text-sm sm:text-base block py-1">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Kontakt</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex flex-col">
                <span className="text-stone-500 mb-1">Geschäftsführer</span>
                <span className="text-stone-300">Oltjon Gjekola</span>
              </li>
              <li className="flex flex-col">
                <span className="text-stone-500 mb-1">Telefon</span>
                <a href="tel:+491623222606" className="hover:text-emerald-500 active:text-emerald-400 transition-colors break-all sm:break-normal">0162 3222 606</a>
              </li>
              <li className="flex flex-col">
                <span className="text-stone-500 mb-1">Email</span>
                <a href="mailto:Gartenarbeit_01@gmx.net" className="hover:text-emerald-500 active:text-emerald-400 transition-colors break-all text-xs sm:text-sm">Gartenarbeit_01@gmx.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-stone-500 text-center md:text-left">
            © {new Date().getFullYear()} Gjekola Gartenpflege. Alle Rechte vorbehalten.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-stone-800 rounded-full hover:bg-emerald-600 hover:text-white active:bg-emerald-700 active:scale-95 transition-all group min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Nach oben"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};