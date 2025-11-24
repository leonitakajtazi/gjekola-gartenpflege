import React from 'react';
import { Shovel, Trash2, Scissors, Flower2, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './Reveal';

const services: Service[] = [
  {
    id: '1',
    title: 'Gartenpflege',
    description: 'Rundum-Sorglos-Paket für Ihren Rasen, Pflanzenpflege und Bewässerung. Wir sorgen dafür, dass alles grünt und blüht.',
    icon: Flower2,
    image: './images/3.jpg'
  },
  {
    id: '2',
    title: 'Galabau',
    description: 'Kreative Gartengestaltung, Pflasterarbeiten, Dekoration und Installationen für Ihre persönliche Wohlfühloase.',
    icon: Shovel,
    image: './images/28.jpg'
  },
  {
    id: '3',
    title: 'Hecke entfernen',
    description: 'Fachgerechtes Schneiden, Kürzen oder komplettes Entfernen von Hecken inklusive Wurzelwerk.',
    icon: Scissors,
    image: './images/7.jpg'
  },
  {
    id: '4',
    title: 'Entsorgung',
    description: 'Schnelle und saubere Entfernung sowie fachgerechte Entsorgung von Gartenabfällen, Grünschnitt und Laub.',
    icon: Trash2,
    image: './images/14.jpg'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-sm mb-3">Was wir bieten</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Unsere Dienstleistungen</h3>
            <p className="max-w-2xl mx-auto text-stone-600 text-lg">
              Von der regelmäßigen Pflege bis zur kompletten Neugestaltung – wir sind Ihr Partner für alle Arbeiten im Grünen.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-stone-100 hover:border-emerald-200">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md z-20 text-emerald-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-stone-600 mb-6 leading-relaxed flex-grow text-sm">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-800 transition-colors">
                    Angebot anfragen <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};