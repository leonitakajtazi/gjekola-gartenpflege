import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558293842-c0fd3db8415e?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="mb-6 inline-block">
          <span className="py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm">
            Seit über 10 Jahren Erfahrung
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Gartenliebe
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
          Professionelle Gartenpflege für Ihr grünes Paradies. Wir gestalten, pflegen und erhalten Ihre Natur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-900/20"
          >
            Jetzt anfragen
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/70">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
};