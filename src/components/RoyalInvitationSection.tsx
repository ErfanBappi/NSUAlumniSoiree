import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Drama, Ticket, ShieldAlert, Crown } from 'lucide-react';

interface RoyalInvitationSectionProps {
  onBookClick: () => void;
}

export default function RoyalInvitationSection({ onBookClick }: RoyalInvitationSectionProps) {
  const [isSealed, setIsSealed] = useState(true);
  const [isPopped, setIsPopped] = useState(false);

  const handleSealClick = () => {
    setIsSealed(false);
    setTimeout(() => {
      setIsPopped(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSealed(true);
    setIsPopped(false);
  };

  return (
    <section
      id="royal-invitation-section"
      className="relative py-24 bg-[#0A0103] overflow-hidden border-t border-b border-gold-500/10"
    >
      {/* Luxury backgrounds */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-burgundy-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Drama className="w-4 h-4 text-gold-400 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Interactive Experience
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Royal Wax-Sealed Invitation
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Unmask your personal ticket to the most prestigious reunion of the year
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Dynamic Interactive Envelope Area */}
        <div className="flex items-center justify-center min-h-[480px]">
          <AnimatePresence mode="wait">
            {isSealed ? (
              /* ==================== STATE 1: SEALED ENVELOPE ==================== */
              <motion.div
                key="section-sealed"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0, y: -20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="w-full max-w-lg bg-gradient-to-br from-[#1A0207] via-[#0D0104] to-[#1F0309] border-2 border-gold-500/20 p-8 sm:p-12 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative overflow-hidden flex flex-col justify-between items-center text-center"
                style={{ minHeight: '400px' }}
              >
                {/* Vintage gold ornamental corners */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-gold-500/30 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-gold-500/30 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg" />

                {/* Sub-header inside */}
                <div className="space-y-2 mt-4 relative z-10">
                  <span className="font-display text-[9px] tracking-[0.4em] text-gold-500 font-extrabold uppercase">
                    NSU Alumni Association &bull; Australia
                  </span>
                  <h3 className="font-serif italic text-2xl text-ivory/90 leading-tight">
                    The Grand Reunion Masquerade
                  </h3>
                  <div className="w-8 h-[1px] bg-gold-500/20 mx-auto mt-2" />
                </div>

                {/* Big Interactive Wax Seal */}
                <motion.button
                  onClick={handleSealClick}
                  className="relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none my-8 z-20"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {/* Outer breathing golden aura */}
                  <div className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-400/20 group-hover:bg-gold-500/20 group-hover:border-gold-400/40 transition-all duration-500 animate-pulse" />
                  <div className="absolute -inset-2 rounded-full border border-gold-500/5 animate-ping" style={{ animationDuration: '3s' }} />

                  {/* Crimson Wax Seal */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#C41C24] via-[#94080D] to-[#6E0205] shadow-[0_8px_25px_rgba(110,2,5,0.6),_inset_0_3px_6px_rgba(255,255,255,0.3)] border-[3px] border-[#4A0002] flex flex-col items-center justify-center">
                    <Drama className="w-10 h-10 text-[#FFDF7A] drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[8px] text-[#FFDF7A] font-extrabold tracking-widest mt-1 select-none">
                      BREAK SEAL
                    </span>
                  </div>

                  {/* Left / Right text guide */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-gold-400/50 text-[10px] font-mono tracking-widest animate-pulse hidden sm:block">
                    TOUCH &rarr;
                  </div>
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-gold-400/50 text-[10px] font-mono tracking-widest animate-pulse hidden sm:block">
                    &larr; TO OPEN
                  </div>
                </motion.button>

                <div className="space-y-1 relative z-10">
                  <p className="font-sans text-xs text-ivory/60">
                    Break the crimson wax seal to reveal your formal digital invite
                  </p>
                  <p className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                    ST KILDA TOWN HALL, MELBOURNE
                  </p>
                </div>
              </motion.div>
            ) : (
              /* ==================== STATE 2: REVEALED PARCHMENT ==================== */
              <div className="w-full flex justify-center">
                {!isPopped && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: [1, 1.05, 0.95], opacity: [1, 1, 0] }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-xl h-[420px] rounded-2xl border border-gold-500/20 bg-burgundy-950/20 flex items-center justify-center"
                  >
                    <div className="text-gold-400 text-sm font-mono tracking-widest uppercase animate-pulse flex items-center gap-2">
                      <Sparkles className="w-5 h-5 animate-spin" /> Unrolling Royal Parchment...
                    </div>
                  </motion.div>
                )}

                <AnimatePresence>
                  {isPopped && (
                    <motion.div
                      key="section-parchment"
                      initial={{ y: 80, scale: 0.85, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      exit={{ y: 50, scale: 0.9, opacity: 0 }}
                      transition={{ type: 'spring', damping: 20 }}
                      className="w-full max-w-xl bg-gradient-to-b from-[#FAF8F5] via-[#FCFBF9] to-[#F7F4F0] border-8 border-double border-gold-500/80 text-burgundy-950 p-8 sm:p-12 rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.95)] relative overflow-hidden"
                    >
                      {/* Artistic double border line inside */}
                      <div className="absolute inset-2 border border-gold-600/10 pointer-events-none" />

                      {/* Traditional vector corners */}
                      <span className="absolute top-4 left-4 text-gold-600/35 font-serif text-3xl select-none">&#10046;</span>
                      <span className="absolute top-4 right-4 text-gold-600/35 font-serif text-3xl select-none">&#10046;</span>
                      <span className="absolute bottom-4 left-4 text-gold-600/35 font-serif text-3xl select-none">&#10046;</span>
                      <span className="absolute bottom-4 right-4 text-gold-600/35 font-serif text-3xl select-none">&#10046;</span>

                      {/* Header Line */}
                      <div className="text-center space-y-1">
                        <span className="font-display text-[9px] tracking-[0.35em] text-gold-700 font-extrabold uppercase block">
                          THE BOARD OF NSUAAA PROUDLY INVITES YOU
                        </span>
                        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2" />
                      </div>

                      {/* Invitation Core Narrative */}
                      <div className="text-center space-y-6 mt-8">
                        <h4 className="font-display text-xs tracking-[0.25em] text-burgundy-900 font-extrabold uppercase">
                          The Grand Reunion Masquerade
                        </h4>

                        <h3 className="font-serif text-3xl sm:text-5xl text-burgundy-950 font-bold tracking-tight">
                          Alumni Soirée 2026
                        </h3>

                        <div className="font-serif italic text-gold-700 text-sm md:text-base font-semibold">
                          &ldquo;Unmasking Moments, Rekindling Bonds.&rdquo;
                        </div>

                        {/* Elegant Royal Crest Emblem replacing Name Input */}
                        <div className="flex flex-col items-center justify-center my-6 py-2">
                          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-3.5" />
                          <div className="relative p-2.5 border border-gold-500/35 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F5F2EC] shadow-md">
                            <Crown className="w-5 h-5 text-gold-600 animate-pulse" />
                          </div>
                          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-3.5" />
                        </div>

                        {/* Venue Specific Details */}
                        <div className="space-y-1.5 font-sans text-xs tracking-wider text-burgundy-900/90 leading-normal">
                          <p className="font-bold text-burgundy-950 text-sm sm:text-base">ST KILDA TOWN HALL, MELBOURNE</p>
                          <p className="font-semibold text-gold-700">SUNDAY, 18TH OCTOBER 2026 &bull; 4:30 PM ONWARDS</p>
                        </div>

                        <p className="font-serif italic text-xs text-burgundy-950/70 leading-relaxed max-w-md mx-auto">
                          Walk down the velvet red carpet into a night of absolute splendor. An exquisite Venetian masquerade mask will be custom gifted to you at our grand foyer.
                        </p>
                      </div>

                      {/* Call to Actions */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <button
                          onClick={onBookClick}
                          className="w-full sm:w-auto font-btn text-xs tracking-[0.18em] text-[#FCFBF9] bg-gradient-to-r from-burgundy-950 to-[#520003] hover:from-[#520003] hover:to-burgundy-950 px-8 py-3.5 font-extrabold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          <Ticket className="w-4 h-4 text-gold-400" />
                          Secure Table Seats
                        </button>

                        <button
                          onClick={handleReset}
                          className="w-full sm:w-auto font-sans text-[11px] tracking-widest text-burgundy-950/50 hover:text-burgundy-950 hover:bg-gold-500/10 px-5 py-3.5 font-bold uppercase transition-all duration-300"
                        >
                          &larr; Reseal Invitation
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
