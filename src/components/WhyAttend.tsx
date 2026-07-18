import { motion } from 'motion/react';
import { Users, Heart, Wine, Music, Award, Sparkles, Shield, MapPin } from 'lucide-react';

export default function WhyAttend() {
  const points = [
    {
      title: 'Reconnect with Alumni',
      description: 'Renew valuable connections with former classmates and build bridges between generations of NSU graduates.',
      icon: Users,
    },
    {
      title: 'Celebrate Lifelong Friendships',
      description: 'Savor nostalgic stories, shared laughs, and create sparkling new memories with people who shaped your journey.',
      icon: Heart,
    },
    {
      title: 'Exclusive Gala Dinner',
      description: 'Experience a grand multi-course fine dining service curated with premium culinary dishes and fine beverages.',
      icon: Wine,
    },
    {
      title: 'Live Performances',
      description: 'Be enchanted by live classical musicians, stellar cultural showcases, and energetic live dance performances.',
      icon: Music,
    },
    {
      title: 'Professional Networking',
      description: 'Exchange insights and build professional collaborations with industry-leading alumni working across Australia.',
      icon: Sparkles,
    },
    {
      title: 'Awards & Recognition',
      description: 'Applaud the remarkable accolades, careers, and contributions of outstanding members in our alumni network.',
      icon: Award,
    },
    {
      title: 'Family Friendly Experience',
      description: 'An inclusive evening welcoming partners, spouses, and families to celebrate our shared heritage together.',
      icon: Shield,
    },
    {
      title: 'Premium Venue',
      description: 'Gather in the historic, visually majestic St Kilda Town Hall—renowned for its sweeping architecture and elegance.',
      icon: MapPin,
    },
  ];

  return (
    <section
      id="why-attend"
      className="relative py-24 bg-gradient-to-b from-[#0A0103] via-burgundy-950/20 to-[#0A0103] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-burgundy-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Why Attend
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            The Prestige of the Soirée
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Immerse yourself in a black-tie evening designed to inspire, connect, and celebrate
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Bento Grid layout of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                id={`why-attend-card-${idx}`}
                className="glass-premium rounded-2xl p-6 flex flex-col justify-between border border-gold-500/10 shadow-[0_15px_30px_rgba(10,1,3,0.5)] transition-all duration-300 hover:border-gold-500/30 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 group cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Upper portion */}
                <div>
                  <div className="w-10 h-10 rounded-full border border-gold-500/20 bg-burgundy-950/60 flex items-center justify-center text-gold-400 mb-5 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ivory tracking-wide mb-2 group-hover:text-gold-200 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-ivory/70 leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>

                {/* Micro ornament border highlight on hover */}
                <div className="h-[2px] w-0 bg-gradient-to-r from-gold-500 to-gold-300 mt-6 transition-all duration-500 group-hover:w-full rounded-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
