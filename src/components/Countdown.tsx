import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-10-18T18:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const countdownUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-16 bg-[#0A0103] overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-burgundy-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Title */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-2 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              The Grand Gathering Awaits
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl tracking-widest text-ivory uppercase font-bold">
            Countdown to an Unforgettable Celebration
          </h3>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Timer Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {countdownUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              id={`countdown-card-${unit.label.toLowerCase()}`}
              className="glass-premium rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center relative group border border-gold-500/10 shadow-[0_15px_35px_rgba(10,1,3,0.5)] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Subtle shining light sweep */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-gold-500/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000 ease-in-out" />

              {/* Number */}
              <span className="font-display text-4xl md:text-6xl font-bold text-gold-400 tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {String(unit.value).padStart(2, '0')}
              </span>

              {/* Separator line */}
              <div className="w-12 h-[1px] bg-gold-500/20 mb-3 group-hover:bg-gold-500/40 transition-colors duration-300" />

              {/* Label */}
              <span className="font-btn text-[10px] md:text-xs tracking-[0.2em] text-ivory/60 uppercase font-semibold group-hover:text-gold-300 transition-colors duration-300">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {timeLeft.isExpired && (
          <motion.div
            id="countdown-expired-msg"
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="font-serif italic text-gold-400 text-lg">
              The Soirée has commenced. Step beyond the masks!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
