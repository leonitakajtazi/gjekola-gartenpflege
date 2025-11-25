import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Gartenpflege'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({ name: '', email: '', phone: '', message: '', service: 'Gartenpflege' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          
          {/* Contact Info */}
          <Reveal>
            <div className="pr-0 lg:pr-12">
              <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">Kontakt</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4 sm:mb-6">Sprechen Sie mit uns</h3>
              <p className="text-stone-600 mb-8 sm:mb-10 text-base sm:text-lg">
                Gerne beraten wir Sie unverbindlich zu Ihrem Vorhaben. Rufen Sie uns an oder schreiben Sie uns.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 active:bg-emerald-100 transition-colors group">
                  <div className="bg-white p-2.5 sm:p-3 rounded-full shadow-sm group-hover:text-emerald-600 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-stone-900 mb-1 text-sm sm:text-base">Telefon</h4>
                    <p className="text-stone-600 mb-2 text-sm sm:text-base">Geschäftsführer: Oltjon Gjekola</p>
                    <a href="tel:+491623222606" className="text-base sm:text-lg font-semibold text-emerald-700 hover:text-emerald-800 active:text-emerald-900 break-all sm:break-normal">
                      0162 3222 606
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 active:bg-emerald-100 transition-colors group">
                  <div className="bg-white p-2.5 sm:p-3 rounded-full shadow-sm group-hover:text-emerald-600 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-stone-900 mb-1 text-sm sm:text-base">E-Mail</h4>
                    <a href="mailto:Gartenarbeit_01@gmx.net" className="text-sm sm:text-base md:text-lg font-semibold text-emerald-700 hover:text-emerald-800 active:text-emerald-900 break-all">
                      Gartenarbeit_01@gmx.net
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pl-0 sm:pl-4">
                    <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-emerald-600 active:text-emerald-700 transition-colors min-h-[44px]">
                        <Instagram className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">Gjekola_Gartenpflege</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-stone-600 hover:text-blue-600 active:text-blue-700 transition-colors min-h-[44px]">
                        <Facebook className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">Gjekola Gartenpflege</span>
                    </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={200}>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-stone-100">
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-5 sm:mb-6">Anfrage senden</h4>
             <form
  action="https://formspree.io/f/mwpjavke"
  method="POST"
  className="space-y-5 sm:space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-base min-h-[44px]"
        placeholder="Ihr Name"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
        Telefon
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-base min-h-[44px]"
        placeholder="Ihre Nummer"
      />
    </div>
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
      E-Mail
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-base min-h-[44px]"
      placeholder="ihre@email.de"
    />
  </div>

  <div>
    <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">
      Interesse an
    </label>
    <select
      id="service"
      name="service"
      value={formData.service}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-base min-h-[44px]"
    >
      <option value="Gartenpflege">Gartenpflege</option>
      <option value="Galabau">Galabau (Gestaltung)</option>
      <option value="Hecke entfernen">Hecke entfernen</option>
      <option value="Entsorgung">Entsorgung</option>
      <option value="Sonstiges">Sonstiges</option>
    </select>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
      Nachricht
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={4}
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none text-base"
      placeholder="Wie können wir Ihnen helfen?"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-3.5 sm:py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 active:bg-emerald-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/20 min-h-[44px] text-base sm:text-lg"
  >
    Nachricht senden <Send className="h-4 w-4" />
  </button>
</form>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};