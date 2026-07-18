import { motion } from 'motion/react';
import { Clock, Sparkles, Drama } from 'lucide-react';
import { TimelineItem } from '../types';

export default function Timeline() {
  const schedule: TimelineItem[] = [
    {
      time: '16:30',
      title: 'Arrival & Registration',
      description: 'Step onto the velvet red carpet, check in with our hosts, and select your exquisite Venetian masquerade mask for the evening.',
    },
    {
      time: '17:00',
      title: 'Welcome Reception',
      description: 'Sip custom champagne cocktails, network in the grand foyer, and enjoy beautiful ambient live string ensembles.',
    },
    {
      time: '17:45',
      title: 'Opening Ceremony',
      description: 'Take your seats in the majestic Grand Hall as the night is inaugurated by esteemed leaders of the NSU Alumni Association.',
    },
    {
      time: '18:15',
      title: 'Gastronomic Dinner',
      description: 'Indulge in an extraordinary multi-course gourmet fine dining menu curated by award-winning executive chefs.',
    },
    {
      time: '19:30',
      title: 'Cultural Showcase & Live Performances',
      description: 'Be mesmerized by custom theatrical acts, classical musical showcases, and inspiring cultural performances.',
    },
    {
      time: '20:30',
      title: 'Alumni Recognition Awards',
      description: 'Honor the outstanding achievements, leadership, and professional contributions of distinguished alumni across Australia.',
    },
    {
      time: '21:15',
      title: 'Networking & Mingle Dance',
      description: 'Share stories, catch up with old friends, exchange business connections, and dance under the sparkling ballroom chandeliers.',
    },
    {
      time: '22:30',
      title: 'Closing Toast & Grand Farewell',
      description: 'Raise a final champagne toast to lifelong friendships and capture the memorable night in our official group portrait.',
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      {/* Background radial elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              The Evening Flow
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Event Timeline
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            A chronological journey of elegance, connection, and high celebration
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline Path container */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold-500/10 via-gold-500/40 to-gold-500/10 transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {schedule.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.time}
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 w-7 h-7 rounded-full bg-[#0A0103] border border-gold-500/40 flex items-center justify-center transform md:-translate-x-1/2 z-20 group hover:border-gold-500 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Left Side (Spaced for layout) */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Right Side / Content side */}
                  <motion.div
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <div className="glass-premium rounded-2xl p-6 md:p-8 border border-gold-500/10 hover:border-gold-500/30 shadow-lg relative group overflow-hidden">
                      {/* Interactive Gold Light sweep inside card */}
                      <div className="absolute top-0 left-0 w-2 h-full bg-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Time & Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-burgundy-950/80 border border-gold-500/20 text-gold-400 font-mono text-xs font-semibold rounded-none">
                          <Clock className="w-3 h-3" />
                          <span>{item.time}</span>
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-ivory tracking-wide group-hover:text-gold-200 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs md:text-sm text-ivory/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Elegant masquerade decorative separator */}
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
