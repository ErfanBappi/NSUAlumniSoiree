import { motion } from 'motion/react';
import { Calendar, MapPin, Play, Ticket, Sparkles, Drama } from 'lucide-react';
import heroBg from '../assets/images/masquerade_hero_bg_1784330478253.jpg';
import NsuLogos from './NsuLogos';

interface HeroProps {
  onBookClick: () => void;
  onWatchPromoClick: () => void;
}

export default function Hero({ onBookClick, onWatchPromoClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24"
    >
      {/* 16:9 Background Image with Parallax & Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103] via-[#0A0103]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0103]/90 via-transparent to-[#0A0103]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/40 via-transparent to-transparent" />
      </div>

      {/* Floating Gold Sparkle Accents */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-gold-400 to-gold-200 rounded-full animate-sparkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-6 text-center z-20 relative flex flex-col items-center">
        {/* NSU & NSUAAA Vector Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <NsuLogos />
        </motion.div>

        {/* Subtle Event Category Pill */}
        <motion.div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 bg-burgundy-950/80 backdrop-blur-md rounded-full mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold-300 font-semibold">
            The Grand Reunion Masquerade
          </span>
        </motion.div>

        {/* Cinematic Title Group */}
        <div className="mb-4 flex flex-col items-center">
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-6xl sm:text-8xl md:text-[9rem] tracking-[0.05em] font-extrabold text-gold-metallic italic select-none drop-shadow-[0_10px_20px_rgba(10,1,3,0.9)] leading-none">
              NSU
            </span>
            <motion.div
              className="text-gold-300 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)] flex items-center justify-center pb-4"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-gold-300 fill-gold-400 animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.h2
            id="hero-title-sub"
            className="font-display text-3xl sm:text-5xl md:text-[4.5rem] tracking-[0.1em] font-black text-gold-metallic uppercase drop-shadow-[0_10px_20px_rgba(10,1,3,0.9)] leading-none mt-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            ALUMNI SOIRÉE
          </motion.h2>
        </div>

        {/* Elegant Event Slogan / Quote */}
        <motion.p
          id="hero-slogan"
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-gold-100/90 tracking-wide mb-12 max-w-2xl border-t border-b border-gold-500/15 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          &ldquo;Unmasking Moments, Rekindling Bonds.&rdquo;
        </motion.p>

        {/* Date & Venue Quick Details */}
        <motion.div
          id="hero-details"
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-12 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-500/10 flex items-center justify-center bg-burgundy-950/40 text-gold-400 group-hover:border-gold-500/30 transition-colors duration-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] tracking-widest text-gold-500/60 uppercase font-mono">Date &amp; Schedule</p>
              <p className="text-sm font-medium text-ivory">Sunday, 18 October 2026</p>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-gold-500/10" />

          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-500/10 flex items-center justify-center bg-burgundy-950/40 text-gold-400 group-hover:border-gold-500/30 transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] tracking-widest text-gold-500/60 uppercase font-mono">Location &amp; Venue</p>
              <p className="text-sm font-medium text-ivory">St Kilda Town Hall, Melbourne</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          id="hero-ctas"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            id="hero-cta-book"
            onClick={onBookClick}
            className="w-full sm:w-auto font-btn text-xs tracking-[0.2em] text-[#0A0103] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 px-8 py-4 rounded-none font-bold uppercase transition-all duration-300 hover:scale-105 active:scale-100 shadow-[0_10px_30px_rgba(212,175,55,0.25)] flex items-center justify-center gap-3 cursor-pointer"
          >
            <Ticket className="w-4 h-4" />
            Book Your Spot Now
          </button>

          <button
            id="hero-cta-promo"
            onClick={onWatchPromoClick}
            className="w-full sm:w-auto font-btn text-xs tracking-[0.2em] text-ivory border border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/10 px-8 py-4 rounded-none font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-100 cursor-pointer"
          >
            <Play className="w-4 h-4 text-gold-400" />
            Watch Promo
          </button>
        </motion.div>
      </div>

      {/* Decorative Custom Masquerade Pattern Divider */}
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
