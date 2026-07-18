import { motion } from 'motion/react';
import { Calendar, MapPin, Crown, Users, Sparkles } from 'lucide-react';

export default function EventInfo() {
  const cards = [
    {
      id: 'info-card-date',
      title: 'Date & Timing',
      value: 'Sunday',
      subValue: '18 October 2026',
      desc: 'Arrivals from 6:00 PM onwards',
      icon: Calendar,
      color: 'from-burgundy-950/40 to-burgundy-900/10',
    },
    {
      id: 'info-card-venue',
      title: 'The Venue',
      value: 'St Kilda Town Hall',
      subValue: 'Melbourne, Australia',
      desc: 'Carlisle St, St Kilda VIC 3182',
      icon: MapPin,
      color: 'from-burgundy-950/40 to-burgundy-900/10',
    },
    {
      id: 'info-card-dresscode',
      title: 'Dress Code',
      value: 'Formal Evening Wear',
      subValue: 'Masquerade Elegance',
      desc: 'Black-tie or traditional premium attire',
      icon: Crown,
      color: 'from-burgundy-950/40 to-burgundy-900/10',
    },
    {
      id: 'info-card-organizer',
      title: 'Organizer',
      value: 'NSU Alumni',
      subValue: 'Association Australia',
      desc: 'Connecting alumni across Australia',
      icon: Users,
      color: 'from-burgundy-950/40 to-burgundy-900/10',
    },
  ];

  return (
    <section
      id="details"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-burgundy-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Key Details
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Event Information
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Everything you need to plan your magnificent experience
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                id={card.id}
                className="glass-premium rounded-2xl p-8 flex flex-col justify-between border border-gold-500/10 shadow-[0_15px_35px_rgba(10,1,3,0.4)] relative group transition-all duration-300 hover:border-gold-500/30 hover:shadow-[0_20px_45px_rgba(212,175,55,0.15)] hover:-translate-y-1 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Accent decoration inside card */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold-500/5 rounded-full blur-xl group-hover:bg-gold-500/10 transition-colors duration-500" />

                {/* Upper portion */}
                <div>
                  <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-burgundy-950/60 flex items-center justify-center text-gold-400 mb-6 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <span className="font-btn text-[10px] tracking-widest text-gold-500/60 uppercase font-mono block mb-2">
                    {card.title}
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold text-ivory tracking-wide mb-1 leading-snug group-hover:text-gold-200 transition-colors duration-300">
                    {card.value}
                  </h3>
                  
                  <p className="font-sans text-sm font-medium text-gold-300 tracking-wide mb-4">
                    {card.subValue}
                  </p>
                </div>

                {/* Footer description inside card */}
                <div className="pt-4 border-t border-gold-500/5 mt-4">
                  <p className="font-sans text-xs text-ivory/60 leading-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
