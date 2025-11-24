import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Clickable */}
      <a 
        href="#gallery"
        className="absolute inset-0 z-0 hero-background cursor-pointer group"
        style={{
          backgroundImage: 'url("./images/1.jpg")',
        }}
        aria-label="View gallery"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70 group-hover:from-stone-900/50 group-hover:via-stone-900/30 group-hover:to-stone-900/60 transition-all duration-300"></div>
      </a>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20 sm:mt-16 md:mt-0">
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="py-1.5 px-3 sm:px-4 border border-white/30 rounded-full text-white/90 text-xs sm:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm">
            Seit über 10 Jahren Erfahrung
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-lg px-2">
          Gartenliebe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-stone-100 mb-6 sm:mb-8 md:mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md px-2 leading-relaxed">
          Professionelle Gartenpflege für Ihr grünes Paradies. Wir gestalten, pflegen und erhalten Ihre Natur.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <a 
            href="#contact" 
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-emerald-500 transition-all active:scale-95 shadow-xl hover:shadow-emerald-900/20 min-h-[44px] flex items-center justify-center"
          >
            Jetzt anfragen
          </a>
          <a 
            href="#services" 
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all active:scale-95 min-h-[44px] flex items-center justify-center"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/70">
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
    </section>
  );
};