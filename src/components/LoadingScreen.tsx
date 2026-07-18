import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Drama, Sparkles, MailOpen, Crown } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Snappy but premium organic progress bar increment
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          // Automatically trigger the opening transition immediately (200ms delay)
          setTimeout(() => {
            setIsOpened(true);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, []);

  // Automate transition to main website after the beautiful invitation unrolling/animation completes
  useEffect(() => {
    if (isOpened) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 2500);
      return () => clearTimeout(completionTimer);
    }
  }, [isOpened, onComplete]);

  const handleOpenInvitation = () => {
    if (isOpened) return;
    setIsOpened(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        className="fixed inset-0 bg-[#0A0103] z-[9999] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      >
        {/* Ambient Dark Velvet Backdrop Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-burgundy-950/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gold-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Outer Frame Border to emphasize grand experience */}
        <div className="absolute inset-4 sm:inset-6 border border-gold-500/10 pointer-events-none z-10" />

        <div className="text-center relative max-w-lg w-full flex flex-col items-center z-20">
          
          <AnimatePresence mode="wait">
            {!isOpened ? (
              /* ==================== STATE A: SEALED ENVELOPE / LOADER ==================== */
              <motion.div
                key="loader-sealed"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.08, opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center"
              >
                {/* Envelope Front Panel Mock */}
                <div className="relative w-[310px] sm:w-[380px] h-[220px] bg-gradient-to-b from-[#1C0207] to-[#0A0103] border border-gold-500/20 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 items-center overflow-hidden">
                  
                  {/* Gold Filigree corner markings */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold-500/30" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold-500/30" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold-500/30" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gold-500/30" />

                  {/* Little invitation text */}
                  <div className="space-y-1 relative z-10">
                    <span className="font-display text-[8px] tracking-[0.35em] text-gold-500 font-extrabold uppercase">
                      Royal Invitation &bull; NSUAAA
                    </span>
                    <div className="w-10 h-[1px] bg-gold-500/20 mx-auto mt-1" />
                  </div>

                  {/* Middle Wax Seal Button */}
                  <motion.button
                    onClick={() => {
                      if (isLoaded) handleOpenInvitation();
                    }}
                    disabled={!isLoaded}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center ${isLoaded ? 'cursor-pointer group' : 'cursor-not-allowed opacity-80'}`}
                    whileHover={isLoaded ? { scale: 1.08 } : {}}
                    whileTap={isLoaded ? { scale: 0.92 } : {}}
                  >
                    {/* Ring glow for ready state */}
                    {isLoaded && (
                      <div className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-400/30 group-hover:bg-gold-500/20 group-hover:border-gold-400/50 animate-ping" />
                    )}

                    {/* Wax Seal Face */}
                    <div className={`absolute inset-1.5 rounded-full bg-gradient-to-b from-[#C41C24] to-[#6E0205] shadow-[0_4px_12px_rgba(110,2,5,0.4),_inset_0_2px_4px_rgba(255,255,255,0.25)] border-2 border-[#4A0002] flex flex-col items-center justify-center transition-all ${isLoaded ? 'opacity-100' : 'opacity-65'}`}>
                      <Drama className={`w-7 h-7 text-[#FFDF7A] ${isLoaded ? 'animate-pulse' : ''}`} />
                    </div>
                  </motion.button>

                  {/* Progress display / interactive instruction */}
                  <div className="w-full relative z-10">
                    {isLoaded ? (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        <p className="font-sans text-[10px] text-gold-400 uppercase tracking-[0.25em] font-bold animate-pulse">
                          Click Wax Seal to Enter
                        </p>
                      </motion.div>
                    ) : (
                      <div className="space-y-2 flex flex-col items-center">
                        <div className="w-40 h-[2px] bg-burgundy-900/30 rounded-full overflow-hidden relative border border-gold-500/10">
                          <div
                            className="h-full bg-gradient-to-r from-burgundy-700 via-gold-500 to-gold-300 transition-all duration-150"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="font-mono text-[8px] text-gold-500/50 tracking-widest uppercase">
                          Preparing Royal Invitation... {progress}%
                        </p>
                      </div>
                    )}
                  </div>

                </div>

                <div className="mt-8 space-y-1">
                  <h3 className="font-display text-xs tracking-[0.3em] text-gold-500/40 uppercase">
                    North South University
                  </h3>
                  <p className="font-serif italic text-sm text-ivory/40">
                    Alumni Association of Australia
                  </p>
                </div>
              </motion.div>
            ) : (
              /* ==================== STATE B: THE DYNAMIC OPENING REVEAL ==================== */
              <motion.div
                key="loader-opened"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex flex-col items-center justify-center px-4"
              >
                {/* Floating Gilded Parchment unrolling upwards */}
                <motion.div
                  initial={{ y: 150, scale: 0.7, rotateX: 45, opacity: 0 }}
                  animate={{ y: 0, scale: 1, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[420px] bg-gradient-to-b from-[#FAF8F5] via-[#FCFBF9] to-[#FAF8F5] border-4 border-double border-gold-500/90 text-burgundy-950 p-8 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative"
                >
                  <div className="absolute inset-1 border border-gold-500/10" />

                  {/* Animated Gold Sparkles inside */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute top-4 left-6"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Sparkles className="w-5 h-5 text-gold-500/30" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 right-6"
                      animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    >
                      <Sparkles className="w-5 h-5 text-gold-500/30" />
                    </motion.div>
                  </div>

                  {/* Royal Crown logo emblem */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center mb-6"
                  >
                    <Crown className="w-8 h-8 text-gold-600 animate-pulse" />
                  </motion.div>

                  {/* Elegant typography unrolling */}
                  <div className="space-y-4">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="font-display text-[9px] tracking-[0.35em] text-gold-700 font-black uppercase block"
                    >
                      North South University Alumni Association
                    </motion.span>

                    <div className="w-12 h-[1px] bg-gold-500/20 mx-auto" />

                    <motion.h1
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="font-serif text-3xl sm:text-4xl text-burgundy-950 font-bold tracking-tight leading-none"
                    >
                      NSU Alumni Soirée
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: 1.1 }}
                      className="font-sans text-[10px] tracking-[0.3em] text-burgundy-900 font-extrabold uppercase mt-1"
                    >
                      &amp; The Grand Reunion Masquerade
                    </motion.p>

                    <div className="w-8 h-[1px] bg-gold-500/20 mx-auto mt-2" />

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="font-serif italic text-sm text-gold-700/95 font-semibold pt-2"
                    >
                      &ldquo;Unmasking Moments, Rekindling Bonds.&rdquo;
                    </motion.p>
                  </div>

                  {/* Little gold ribbon seal hanging off the bottom for absolute premium depth */}
                  <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-3 h-8 bg-gold-500/85 transform rotate-3 shadow-md" />
                    <div className="w-3 h-8 bg-gold-600/85 transform -rotate-3 shadow-md" />
                  </div>

                </motion.div>

                {/* Subtext guiding entry */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 1.8 }}
                  className="mt-8 font-sans text-[9px] tracking-[0.4em] uppercase text-gold-500"
                >
                  Your presence is requested &bull; Welcome
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
