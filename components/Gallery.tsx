import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { Reveal } from './Reveal';

const projects: Project[] = [
  { id: '1', title: 'Moderner Steingarten', category: 'Galabau', imageUrl: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Rasenpflege & Schnitt', category: 'Gartenpflege', imageUrl: 'https://images.unsplash.com/photo-1558293842-c0fd3db8415e?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Vorgarten Neugestaltung', category: 'Galabau', imageUrl: 'https://images.unsplash.com/photo-1605117882932-f9e32b03ef3c?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Heckenschnitt', category: 'Pflege', imageUrl: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Terrassen Bepflanzung', category: 'Dekoration', imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Baumfällung & Entsorgung', category: 'Entsorgung', imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' },
  { id: '7', title: 'Gartenweg Pflasterung', category: 'Galabau', imageUrl: 'https://images.unsplash.com/photo-1596632488825-7b51b72b8d0c?auto=format&fit=crop&q=80&w=800' },
  { id: '8', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: 'https://images.unsplash.com/photo-1628186749968-3e4b7858c9f5?auto=format&fit=crop&q=80&w=800' },
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsToShow);

  // Autoplay functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (!isPaused && totalSlides > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000); // Slides every 4 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true); // Pause on touch interaction
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Unpause is handled by mouse leave or specific logic, 
    // but for mobile we might want to start it again after a delay or leave it.
    // For simplicity, we restart autoplay when they stop touching after a short delay
    setTimeout(() => setIsPaused(false), 2000);

    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide(); // Swipe Left
    if (diff < -50) prevSlide(); // Swipe Right
    
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-sm mb-3">Galerie</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Unsere Projekte</h3>
            <p className="max-w-2xl mx-auto text-stone-600">
              Ein Einblick in unsere Arbeit. Wischen Sie durch unsere Projekte und lassen Sie sich inspirieren.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div 
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slider Container */}
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex gap-6 px-1">
                    {projects.slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow).map((project) => (
                      <div key={project.id} className="w-full relative overflow-hidden rounded-xl aspect-[4/3] shadow-md group/card">
                         <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider mb-1 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-100">
                            {project.category}
                          </span>
                          <h4 className="text-white text-xl font-bold translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white p-3 rounded-full shadow-lg text-stone-800 hover:text-emerald-600 hover:scale-110 transition-all z-10 hidden md:block"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white p-3 rounded-full shadow-lg text-stone-800 hover:text-emerald-600 hover:scale-110 transition-all z-10 hidden md:block"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-stone-300 hover:bg-emerald-300'
                  }`}
                  aria-label={`Gehe zu Seite ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};