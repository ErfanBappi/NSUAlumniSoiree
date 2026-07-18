import { motion } from 'motion/react';
import { Facebook, Heart, MessageCircle, Sparkles } from 'lucide-react';

export default function SocialFeed() {
  const feedItems = [
    {
      id: 'feed-1',
      url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600',
      likes: '245',
      comments: '34',
    },
    {
      id: 'feed-2',
      url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
      likes: '412',
      comments: '52',
    },
    {
      id: 'feed-3',
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
      likes: '519',
      comments: '67',
    },
    {
      id: 'feed-4',
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600',
      likes: '312',
      comments: '29',
    },
    {
      id: 'feed-5',
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600',
      likes: '382',
      comments: '48',
    },
    {
      id: 'feed-6',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
      likes: '614',
      comments: '88',
    },
  ];

  return (
    <section
      id="social-feed"
      className="relative py-24 bg-gradient-to-b from-[#0A0103] via-burgundy-950/15 to-[#0A0103] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Facebook className="w-4 h-4 text-gold-400 fill-gold-400/20" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Social Moments
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Stay Connected
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Follow the latest updates on our official Facebook Page
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Responsive Grid of Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-10">
          {feedItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href="https://www.facebook.com/NSUAA.org.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden border border-gold-500/10 shadow-md group block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={`Facebook moment ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Luxury Overlay */}
              <div className="absolute inset-0 bg-burgundy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <Facebook className="w-6 h-6 text-gold-400 fill-gold-400/20" />
                <div className="flex items-center gap-4 text-ivory text-xs font-mono">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-gold-300 fill-gold-300" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct Link button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.facebook.com/NSUAA.org.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-btn text-xs tracking-widest text-[#0A0103] bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 px-8 py-3.5 font-bold uppercase transition-all duration-300 shadow-[0_5px_15px_rgba(212,175,55,0.15)] hover:shadow-[0_5px_25px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Facebook className="w-4 h-4 fill-current" />
            Visit Our Facebook Page
          </a>
        </motion.div>

      </div>
    </section>
  );
}
