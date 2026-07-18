import { motion } from 'motion/react';
import { Drama, Sparkles } from 'lucide-react';

// Easily customizable YouTube Promo Video ID
const YOUTUBE_VIDEO_ID = 'R1DAwXwtOTM';

export default function PromoVideo() {
  return (
    <section
      id="promo-video"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Cinematic Preview
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Official Event Promo
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Witness the elegance of NSU Alumni Soirée 2026
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Video Frame with Luxury double border and drop shadows */}
        <motion.div
          id="promo-video-container"
          className="relative p-3 border border-gold-500/15 rounded-3xl bg-burgundy-950/20 shadow-[0_30px_70px_rgba(10,1,3,0.95)] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Corner gold pieces */}
          <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-gold-500/40" />
          <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-gold-500/40" />
          <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-gold-500/40" />
          <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-gold-500/40" />

          {/* Video Inner Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gold-500/10">
            <iframe
              id="promo-youtube-iframe"
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=0`}
              title="NSU Alumni Soirée 2026 - Behind the Masks, Beyond the Years"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
