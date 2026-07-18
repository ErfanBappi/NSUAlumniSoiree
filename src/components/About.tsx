import { motion } from 'motion/react';
import { Drama, Check, Sparkles } from 'lucide-react';
import masqueradeGuests from '../assets/images/masquerade_guests_1784330506103.jpg';

export default function About({ onInvitationClick }: { onInvitationClick: () => void }) {
  const features = [
    'Gala Dinner',
    'Live Entertainment',
    'Cultural Performances',
    'Awards',
    'Networking',
    'Memorable Experiences',
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-[#0A0103] via-burgundy-950/20 to-[#0A0103] overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-burgundy-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text narrative */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Header / Sub-badge */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gold-500">
                <Drama className="w-5 h-5" />
                <span className="font-btn text-xs tracking-[0.3em] uppercase font-bold text-gold-400">
                  The Soirée Narrative
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold leading-tight">
                An Evening to Remember
              </h2>
              <div className="w-20 h-[1.5px] bg-gradient-to-r from-gold-500 to-transparent" />
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6 font-serif text-lg md:text-xl text-ivory/90 leading-relaxed font-light">
              <p>
                Step into an unforgettable evening of elegance, nostalgia, and celebration as the{' '}
                <strong className="text-gold-300 font-semibold">NSU Alumni Association Australia</strong> proudly
                presents <strong className="text-gold-400 font-bold">NSU Alumni Soirée 2026</strong>.
              </p>
              <p className="text-base font-sans font-light text-ivory/80 leading-relaxed">
                Inspired by the mystery and glamour of a masquerade, this year's theme,{' '}
                <span className="italic font-serif text-gold-300 font-medium text-lg">
                  &ldquo;Unmasking Moments, Rekindling Bonds.&rdquo;
                </span>{' '}
                celebrates enduring friendships, shared memories, and lifelong connections that unite the
                North South University alumni community across Australia.
              </p>
            </div>

            {/* Featured Bullet points with gold icons */}
            <div className="space-y-4">
              <p className="font-btn text-xs tracking-widest text-gold-400 font-semibold uppercase">
                An extraordinary evening featuring:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feat, idx) => (
                  <motion.div
                    key={feat}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full border border-gold-500/20 bg-burgundy-900/40 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 group-hover:bg-burgundy-800/60 transition-all duration-300">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-sm md:text-base text-ivory/85 font-medium group-hover:text-gold-200 transition-colors duration-300">
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Finish Quote */}
            <div className="pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                <p className="font-display text-lg sm:text-2xl tracking-[0.2em] text-gold-400 uppercase font-bold">
                  Reconnect. Celebrate. Belong.
                </p>
              </div>
              <button
                onClick={onInvitationClick}
                className="self-start sm:self-center font-btn text-[10px] tracking-widest text-[#0A0103] bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 px-5 py-2.5 font-bold uppercase transition-all duration-300 cursor-pointer shadow-md"
              >
                Unveil Invitation
              </button>
            </div>
          </motion.div>

          {/* Right Column: Framed Mascot/Guests Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            {/* Elegant outer gold double border */}
            <div className="relative p-3 border border-gold-500/20 rounded-2xl bg-burgundy-950/20 shadow-[0_20px_50px_rgba(10,1,3,0.8)] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-900/10 via-transparent to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Inner frame */}
              <div className="border border-gold-500/30 rounded-lg overflow-hidden relative aspect-[4/5]">
                <img
                  src={masqueradeGuests}
                  alt="NSU Alumni Soirée Masquerade Guests"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                
                {/* Image overlay shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent" />

                {/* Micro branding over image */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-display text-[10px] tracking-[0.4em] uppercase text-gold-400 block mb-1">
                    OCTOBER 18 &bull; MELBOURNE
                  </span>
                  <span className="font-serif italic text-xs text-ivory/60">
                    Behind the Masks, Beyond the Years
                  </span>
                </div>
              </div>

              {/* Decorative Corner Gold Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-500/60" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-500/60" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-500/60" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-500/60" />
            </div>

            {/* Small absolute detail card */}
            <button
              onClick={onInvitationClick}
              className="absolute -bottom-6 -left-6 glass-premium px-5 py-4 border border-gold-500/20 shadow-xl hidden sm:flex items-center gap-3 animate-bounce cursor-pointer hover:border-gold-400/60 hover:bg-burgundy-950/90 hover:scale-105 transition-all text-left group"
              style={{ animationDuration: '3s' }}
            >
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                <Drama className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs font-semibold text-gold-300 uppercase tracking-widest">Formal Invitation</p>
                <p className="font-serif italic text-[11px] text-ivory/70 group-hover:text-gold-300 transition-colors">Click to Unveil</p>
              </div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
