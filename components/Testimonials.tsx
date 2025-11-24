import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Reveal } from './Reveal';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sabine Müller',
    role: 'Hausbesitzerin',
    text: 'Das Team von Gjekola hat unsere alte Hecke entfernt und einen wunderschönen neuen Zaun gesetzt. Schnell, sauber und sehr freundlich!',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Thomas Weber',
    role: 'Gewerbekunde',
    text: 'Wir lassen unsere Grünflächen regelmäßig pflegen. Die Zuverlässigkeit und das Auge fürs Detail sind hervorragend.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Julia Schneider',
    role: 'Privatkundin',
    text: 'Endlich jemand, der sich wirklich auskennt. Mein Garten sah noch nie so gut aus. Preis-Leistung ist absolut fair.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-sm mb-3">Kundenmeinungen</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Das sagen unsere Kunden</h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 150}>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-emerald-100 fill-emerald-100" />
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{testimonial.name}</h4>
                    <span className="text-stone-500 text-xs">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};