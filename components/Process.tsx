import React from 'react';
import { Phone, Calendar, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    id: 1,
    title: 'Kontakt aufnehmen',
    description: 'Rufen Sie uns an oder senden Sie uns eine Nachricht über das Kontaktformular. Wir sind für Sie da!',
    icon: Phone,
    color: 'emerald'
  },
  {
    id: 2,
    title: 'Kostenlose Besichtigung',
    description: 'Wir vereinbaren einen Termin für eine kostenlose Erstbesichtigung und Beratung vor Ort.',
    icon: Calendar,
    color: 'stone'
  },
  {
    id: 3,
    title: 'Angebot erhalten',
    description: 'Sie erhalten ein transparentes, unverbindliches Angebot mit allen Details und Kosten.',
    icon: ClipboardCheck,
    color: 'emerald'
  },
  {
    id: 4,
    title: 'Auftrag starten',
    description: 'Nach Ihrer Zusage starten wir pünktlich und zuverlässig mit der Arbeit an Ihrem Garten.',
    icon: CheckCircle2,
    color: 'stone'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-stone-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <Reveal>
            <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">So funktioniert's</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 sm:mb-6">Ihr Weg zu einem perfekten Garten</h3>
            <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg px-4">
              Von der ersten Kontaktaufnahme bis zur fertigen Arbeit – wir begleiten Sie durch jeden Schritt.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 100}>
              <div className="relative">
                {/* Connection line (hidden on mobile, visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full z-0" style={{ width: 'calc(100% + 1.5rem)', marginLeft: '1.5rem' }}>
                    <div className="h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-stone-200 w-full relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                )}

                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 h-full flex flex-col group">
                  {/* Step number badge */}
                  <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 bg-emerald-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform ${
                    step.color === 'emerald' ? 'bg-emerald-100' : 'bg-stone-100'
                  }`}>
                    <step.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${
                      step.color === 'emerald' ? 'text-emerald-600' : 'text-stone-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed flex-grow text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-stone-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Bereit für den ersten Schritt?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-lg hover:shadow-emerald-900/20 min-h-[44px]"
            >
              Jetzt kostenlos anfragen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

