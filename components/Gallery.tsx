import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Project } from '../types';
import { Reveal } from './Reveal';

const projects: Project[] = [
  { id: '1', title: 'Moderner Steingarten', category: 'Galabau', imageUrl: './images/1.jpg' },
  { id: '2', title: 'Rasenpflege & Schnitt', category: 'Gartenpflege', imageUrl: './images/2.jpg' },
  { id: '3', title: 'Vorgarten Neugestaltung', category: 'Galabau', imageUrl: './images/3.jpg' },
  { id: '4', title: 'Heckenschnitt', category: 'Pflege', imageUrl: './images/4.jpg' },
  { id: '5', title: 'Terrassen Bepflanzung', category: 'Dekoration', imageUrl: './images/5.jpg' },
  { id: '6', title: 'Baumfällung & Entsorgung', category: 'Entsorgung', imageUrl: './images/34.jpg' },
  { id: '7', title: 'Gartenweg Pflasterung', category: 'Galabau', imageUrl: './images/7.jpg' },
  { id: '8', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/8.jpg' },
  { id: '9', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/9.jpg' },
  { id: '10', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/10.jpg' },
    { id: '11', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/33.jpg' },
    { id: '12', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/32.jpg' },
  { id: '13', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/13.jpg' },
    { id: '14', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/14.jpg' },
      { id: '15', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/15.jpg' },
  { id: '16', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/16.jpg' },
  { id: '17', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/19.jpg' },
  { id: '18', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/18.jpg' },
    { id: '19', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/19.jpg' },
      { id: '20', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/20.jpg' },
        { id: '21', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/21.jpg' },
  { id: '22', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/22.jpg' },
  { id: '23', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/23.jpg' },
  { id: '24', title: 'Rollrasen Verlegung', category: 'Gartenpflege', imageUrl: './images/27.jpg' },









];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
  if (totalSlides <= 1) return; // nuk ka kuptim autoplay

  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  }, 4000);

  return () => clearInterval(interval);
}, [totalSlides]);


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

  // Open lightbox with specific image
  const openLightbox = (projectIndex: number) => {
    setLightboxIndex(projectIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Navigate lightbox
  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % projects.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = '';
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Get the actual project index from the slider
  const getProjectIndex = (slideIndex: number, itemIndex: number) => {
    return slideIndex * itemsToShow + itemIndex;
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <Reveal>
            <h2 className="text-emerald-700 font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">Galerie</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 sm:mb-6">Unsere Projekte</h3>
            <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base px-4">
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
style={{ transform: `translateX(-${(currentIndex * 100)}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex gap-6 px-1">
                    {projects.slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow).map((project, itemIndex) => {
                      const projectIndex = getProjectIndex(slideIndex, itemIndex);
                      return (
                        <div 
                          key={project.id} 
                          className="w-full rounded-xl aspect-[4/3] shadow-md overflow-hidden relative group cursor-pointer"
                          onClick={() => openLightbox(projectIndex)}
                        >
                          <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      );
                    })}
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
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 min-w-[10px] ${
                    currentIndex === idx ? 'w-8 sm:w-8 bg-emerald-600' : 'w-2.5 sm:w-2 bg-stone-300 hover:bg-emerald-300 active:bg-emerald-400'
                  }`}
                  aria-label={`Gehe zu Seite ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 z-50 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-16 sm:py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={projects[lightboxIndex].imageUrl} 
                alt={projects[lightboxIndex].title}
                className="max-w-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-10rem)] object-contain rounded-lg shadow-2xl animate-zoomIn"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full max-w-[90%] sm:max-w-none">
                <p className="text-xs sm:text-sm md:text-base font-semibold truncate">{projects[lightboxIndex].title}</p>
                <p className="text-xs sm:text-sm text-white/80 truncate">{projects[lightboxIndex].category}</p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightboxImage();
                }}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md text-white p-3 sm:p-4 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightboxImage();
                }}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md text-white p-3 sm:p-4 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </button>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
            {lightboxIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </section>
  );
};