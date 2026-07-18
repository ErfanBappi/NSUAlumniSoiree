import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Sparkles, Heart, Crown, Music, Ticket, Drama } from 'lucide-react';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export default function InvitationModal({ isOpen, onClose, onBookClick }: InvitationModalProps) {
  const [isSealed, setIsSealed] = useState(true);
  const [isPopped, setIsPopped] = useState(false);

  const handleSealClick = () => {
    setIsSealed(false);
    setTimeout(() => {
      setIsPopped(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSealed(true);
    setIsPopped(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C0103]/75 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Subtle sparkles behind */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-10 left-10 w-48 h-48 bg-gold-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-burgundy-600/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative w-full max-w-lg mx-auto py-8">
            
            {/* Close Button at top-right of screen */}
            <button
              onClick={onClose}
              className="absolute -top-4 right-2 text-ivory/60 hover:text-gold-400 bg-burgundy-950/40 p-2 border border-gold-500/10 rounded-full transition-all duration-300 z-50"
              aria-label="Close invitation"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Envelope Container */}
            <div className="relative w-full h-[460px] flex items-center justify-center">
              
              {isSealed ? (
                /* ==================== STATE 1: ENVELOPE SEALED ==================== */
                <motion.div
                  key="sealed-envelope"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="w-full max-w-[400px] h-[300px] relative bg-gradient-to-br from-burgundy-950 via-[#1F040C] to-burgundy-950 border border-gold-500/25 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-between items-center text-center overflow-hidden"
                >
                  {/* Luxury corner patterns */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-500/20" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-500/20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-500/20" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/20" />

                  {/* Mail icon backdrop */}
                  <div className="absolute -right-10 -bottom-10 opacity-5 text-gold-500 transform rotate-12 scale-150">
                    <Mail className="w-64 h-64" />
                  </div>

                  <div className="space-y-2 mt-4 relative z-10">
                    <span className="font-display text-[9px] tracking-[0.4em] text-gold-500 font-black uppercase block">
                      Royal Invitation
                    </span>
                    <h3 className="font-serif italic text-lg sm:text-xl text-ivory/95">
                      NSU Alumni Soirée 2026
                    </h3>
                  </div>

                  {/* Dynamic Floating Wax Seal Button */}
                  <motion.button
                    onClick={handleSealClick}
                    className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none z-20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Ring glow */}
                    <div className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-400/20 group-hover:bg-gold-500/15 group-hover:border-gold-400/40 transition-all duration-300 animate-ping" />
                    
                    {/* Inner Wax Seal Background */}
                    <div className="absolute inset-1.5 rounded-full bg-gradient-to-b from-[#b81d24] to-[#7a060b] shadow-[0_4px_15px_rgba(122,6,11,0.5),_inset_0_2px_4px_rgba(255,255,255,0.25)] border-2 border-[#520003] flex flex-col items-center justify-center">
                      {/* Mask logo embossed */}
                      <Drama className="w-8 h-8 text-[#ffdf7a] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-pulse" />
                      <span className="font-mono text-[7px] text-[#ffdf7a] font-bold tracking-widest mt-0.5 select-none">
                        OPEN
                      </span>
                    </div>

                    {/* Left/Right splitting arrows guide */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-gold-400/40 text-[9px] font-mono tracking-widest animate-pulse hidden sm:block">
                      UNVEIL &rarr;
                    </div>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-gold-400/40 text-[9px] font-mono tracking-widest animate-pulse hidden sm:block">
                      &larr; SEAL
                    </div>
                  </motion.button>

                  <div className="space-y-1 mb-2 relative z-10">
                    <p className="font-sans text-xs text-ivory/60">
                      Press the golden-crimson wax seal to
                    </p>
                    <p className="font-sans text-xs font-semibold text-gold-400 uppercase tracking-widest">
                      Unmask the Soirée Details
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ==================== STATE 2: ENVELOPE OPENING / LETTER REVEALED ==================== */
                <div className="w-full h-full flex items-center justify-center">
                  
                  {/* Flap & slider container animation */}
                  {!isPopped && (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 0.9], opacity: [1, 1, 0] }}
                      transition={{ duration: 0.8 }}
                      className="w-full max-w-[400px] h-[300px] rounded-xl border border-gold-500/30 bg-[#1F040C] flex items-center justify-center"
                    >
                      <div className="text-gold-400 text-sm font-mono tracking-widest uppercase animate-pulse flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" /> Unrolling Parchment...
                      </div>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {isPopped && (
                      <motion.div
                        key="invitation-parchment"
                        initial={{ y: 150, scale: 0.6, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 150, scale: 0.6, opacity: 0 }}
                        transition={{ type: 'spring', damping: 15, mass: 1 }}
                        className="w-full max-w-[440px] bg-gradient-to-b from-[#FAF8F5] via-[#FCFBF9] to-[#FAF8F5] border-4 border-double border-gold-500 text-burgundy-950 px-8 py-10 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
                      >
                        {/* Elegant vintage watermark border inside */}
                        <div className="absolute inset-2 border border-gold-500/20 pointer-events-none" />
                        
                        {/* Decorative corner flourishes */}
                        <div className="absolute top-3 left-3 text-gold-600/30 font-serif text-2xl select-none">&#10043;</div>
                        <div className="absolute top-3 right-3 text-gold-600/30 font-serif text-2xl select-none">&#10043;</div>
                        <div className="absolute bottom-3 left-3 text-gold-600/30 font-serif text-2xl select-none">&#10043;</div>
                        <div className="absolute bottom-3 right-3 text-gold-600/30 font-serif text-2xl select-none">&#10043;</div>

                        {/* Top Banner */}
                        <div className="text-center space-y-2 relative z-10">
                          <span className="font-display text-[9px] tracking-[0.35em] text-gold-600 font-extrabold uppercase block">
                            THE BOARD OF NSUAAA PROUDLY INVITES YOU
                          </span>
                          <div className="w-12 h-[1px] bg-gold-600/30 mx-auto" />
                        </div>

                        {/* Invitation Narrative */}
                        <div className="text-center space-y-5 mt-6 relative z-10">
                          <h4 className="font-display text-xs tracking-[0.25em] text-burgundy-900 font-black uppercase">
                            Formal Invitation
                          </h4>

                          <h3 className="font-serif text-3xl md:text-4xl text-burgundy-950 font-bold tracking-wide leading-tight">
                            NSU Alumni Soirée
                          </h3>

                          <div className="italic font-serif text-gold-700 text-sm font-semibold">
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

                          {/* Specific venue detail */}
                          <div className="space-y-1.5 font-sans text-xs text-burgundy-950 tracking-wide leading-normal">
                            <p className="font-bold text-sm text-burgundy-900">ST KILDA TOWN HALL, MELBOURNE</p>
                            <p className="font-semibold text-gold-700">SUNDAY, 18TH OCTOBER 2026 &bull; 4:30 PM ONWARDS</p>
                          </div>

                          <p className="font-serif italic text-xs text-burgundy-950/70 leading-relaxed max-w-xs mx-auto">
                            Step onto the velvet red carpet in your finest evening attire. An exquisite Venetian masquerade mask will be prepared for you upon arrival.
                          </p>
                        </div>

                        {/* CTA and RSVP */}
                        <div className="mt-8 flex flex-col gap-2.5 items-center relative z-10">
                          <button
                            onClick={() => {
                              onBookClick();
                              onClose();
                            }}
                            className="w-full font-btn text-xs tracking-[0.2em] text-[#FCFBF9] bg-gradient-to-r from-burgundy-950 to-[#520003] hover:from-burgundy-900 hover:to-burgundy-950 py-3 rounded-none font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                          >
                            <Ticket className="w-4 h-4 text-gold-400" />
                            Secure My Table Seat
                          </button>

                          <button
                            onClick={handleReset}
                            className="font-sans text-[10px] tracking-widest text-burgundy-950/40 hover:text-burgundy-950 font-bold uppercase py-1 transition-colors duration-200"
                          >
                            &larr; Reseal Envelope
                          </button>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )}

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
