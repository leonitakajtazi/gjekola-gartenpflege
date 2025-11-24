import React from 'react';
import { CheckCircle2, Leaf } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <Reveal>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-emerald-100 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-stone-100 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598555848520-213c38099839?q=80&w=1000&auto=format&fit=crop" 
                alt="Gärtner bei der Arbeit" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                  <span className="font-bold text-stone-900">Qualität & Vertrauen</span>
                </div>
                <p className="text-sm text-stone-600">
                  Wir behandeln jeden Garten so, als wäre es unser eigener.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={200}>
            <div>
              <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-sm mb-3">Über Uns</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Leidenschaft für Natur seit über 10 Jahren
              </h3>
              
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Willkommen bei <strong>Gjekola Gartenpflege</strong>. Wir sind Ihr zuverlässiger Partner für alles rund um Ihren Garten. Was als kleine Leidenschaft begann, hat sich zu einem professionellen Dienstleistungsunternehmen entwickelt, das Gärten in wahre Wohlfühloasen verwandelt.
              </p>

              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Unser Geschäftsführer <strong>Oltjon Gjekola</strong> und sein Team legen größten Wert auf präzise Arbeit, Pünktlichkeit und die Zufriedenheit unserer Kunden. Egal ob einfache Rasenpflege oder komplexe Neugestaltung – wir bringen das richtige Werkzeug und die nötige Expertise mit.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700 font-medium">Kostenlose Erstbesichtigung & Beratung</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700 font-medium">Modernste Geräte & umweltfreundliche Methoden</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700 font-medium">Fairer Preis für erstklassige Leistung</span>
                </div>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-stone-900 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Kennenlernen
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};