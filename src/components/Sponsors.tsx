import { motion } from 'motion/react';
import { Drama, Sparkles } from 'lucide-react';
import { SponsorItem } from '../types';

export default function Sponsors() {
  const sponsors: SponsorItem[] = [
    { name: 'Aust-Pacific Corp', category: 'Platinum Partner', logo: 'APC' },
    { name: 'Melbourne Royal Group', category: 'Elite Catering Partner', logo: 'MRG' },
    { name: 'Gold-Crest Media', category: 'Official Broadcast', logo: 'GCM' },
    { name: 'Ivory & Co Travels', category: 'Luxury Travel Agency', logo: 'ICT' },
    { name: 'The Masquerade Co', category: 'Creative & Decor', logo: 'TMC' },
    { name: 'Crown Estate Agents', category: 'Elite Sponsor', logo: 'CEA' },
  ];

  return (
    <section
      id="sponsors"
      className="relative py-20 bg-[#0A0103] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[9px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Our Partners
            </span>
          </div>
          <h2 className="font-display text-xl md:text-2xl tracking-widest text-ivory/80 uppercase font-bold">
            NSU Alumni Soirée Patrons &amp; Sponsors
          </h2>
          <div className="w-12 h-[1px] bg-gold-500/20 mx-auto mt-4" />
        </div>

        {/* Logo Wall Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center max-w-5xl mx-auto">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              id={`sponsor-logo-${idx}`}
              className="glass-premium rounded-2xl p-6 border border-gold-500/5 hover:border-gold-500/20 shadow-md flex flex-col items-center justify-center h-32 relative group transition-all duration-300 hover:scale-105 cursor-default"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Grayscale Logo Representation */}
              <div className="font-display text-2xl font-black text-ivory/40 tracking-widest group-hover:text-gold-400 group-hover:scale-110 transition-all duration-500 uppercase flex items-center gap-1">
                <Drama className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-gold-500 transition-all duration-500" />
                <span>{sponsor.logo}</span>
              </div>

              {/* Sponsor Information label */}
              <div className="mt-3 text-center">
                <p className="font-sans text-[10px] font-bold text-ivory/70 group-hover:text-ivory transition-colors duration-300">
                  {sponsor.name}
                </p>
                <p className="font-sans text-[8px] text-gold-500/50 group-hover:text-gold-400 transition-colors duration-300 tracking-wider uppercase mt-0.5">
                  {sponsor.category}
                </p>
              </div>

              {/* Hover highlight circle */}
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 rounded-2xl pointer-events-none transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
