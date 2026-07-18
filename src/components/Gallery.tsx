import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Drama, Sparkles } from 'lucide-react';

// Import our beautiful generated images
import heroBg from '../assets/images/masquerade_hero_bg_1784330478253.jpg';
import ballroomBg from '../assets/images/gala_ballroom_1784330494239.jpg';
import guestsBg from '../assets/images/masquerade_guests_1784330506103.jpg';

export default function Gallery() {
  const images = [
    {
      url: ballroomBg,
      title: 'Grand Ballroom',
      caption: 'The historic and luxurious St Kilda Town Hall fully decorated for the gala night.',
    },
    {
      url: guestsBg,
      title: 'Masquerade Mystique',
      caption: 'Alumni uniting behind elegant Venetian masquerade masks and evening wear.',
    },
    {
      url: heroBg,
      title: 'The Soirée Aesthetic',
      caption: 'Cinematic visual designs and gold glittering highlights throughout the evening.',
    },
    {
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200',
      title: 'Luxury Fine Dining',
      caption: 'A curated premium multi-course dinner paired with fine wines and champagne toast.',
    },
    {
      url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200',
      title: 'Enchanting Entertainment',
      caption: 'Live orchestra, cultural performances, and alumni awards ceremonies.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
      },
    }),
  };

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-[#0A0103] via-burgundy-950/15 to-[#0A0103] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Visual Highlights
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            The Gallery Experience
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            A glimpse into the mystery, glamour, and beauty of the Masquerade
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Slider Frame */}
        <div
          className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-gold-500/15 bg-burgundy-950/20 shadow-[0_25px_60px_rgba(10,1,3,0.9)] group"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slides */}
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover select-none"
                  draggable="false"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103]/90 via-transparent to-[#0A0103]/30" />

                {/* Caption Card */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-left glass-premium p-6 rounded-2xl border border-gold-500/10 max-w-xl">
                  <span className="font-display text-[10px] tracking-[0.3em] text-gold-400 uppercase font-bold block mb-1">
                    HIGHLIGHT {currentIndex + 1} OF {images.length}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-ivory tracking-wide mb-2">
                    {images[currentIndex].title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-ivory/80 leading-relaxed font-light">
                    {images[currentIndex].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            id="gallery-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-premium flex items-center justify-center text-gold-500 border border-gold-500/10 hover:text-[#0A0103] hover:bg-gold-500/90 hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            id="gallery-next-btn"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-premium flex items-center justify-center text-gold-500 border border-gold-500/10 hover:text-[#0A0103] hover:bg-gold-500/90 hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              id={`gallery-dot-${index}`}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex
                  ? 'w-8 bg-gold-400 border border-gold-300/40'
                  : 'w-2 bg-burgundy-900/60 hover:bg-gold-500/40 border border-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Decorative Masquerade Pattern Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10 py-6 pointer-events-none">
        <div className="masquerade-divider max-w-7xl mx-auto px-6">
          <div className="masquerade-divider-icon">
            <Drama className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
