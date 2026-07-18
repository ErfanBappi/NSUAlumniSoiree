import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Shield, Sparkles } from 'lucide-react';

export default function Venue() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.658742512196!2d144.98064567683935!3d-37.86835263690666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6686940d9595d%3A0xe67db5098ffbca97!2sSt%20Kilda%20Town%20Hall!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau';

  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=St+Kilda+Town+Hall+Melbourne+Australia';

  return (
    <section
      id="venue"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-burgundy-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              The Destination
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            The Venue
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Gathering in historic grandeur and luxury in Melbourne, Australia
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Two Column Layout: Map Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Map Column */}
          <motion.div
            className="lg:col-span-7 p-2 bg-burgundy-950/20 border border-gold-500/15 rounded-3xl relative h-[450px] min-h-[350px] shadow-[0_20px_50px_rgba(10,1,3,0.7)] group overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Map iframe */}
            <iframe
              id="venue-map-iframe"
              src={mapEmbedUrl}
              className="w-full h-full rounded-2xl border-0 grayscale brightness-[0.75] contrast-[1.1] hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-out"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map St Kilda Town Hall"
            />
            
            {/* Subtle overlay border inside iframe container */}
            <div className="absolute inset-2 border border-gold-500/10 rounded-xl pointer-events-none group-hover:border-gold-500/30 transition-colors duration-500" />
          </motion.div>

          {/* Details Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="glass-premium rounded-3xl p-8 border border-gold-500/10 shadow-lg space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold-500">
                  <MapPin className="w-5 h-5" />
                  <span className="font-btn text-xs tracking-widest uppercase font-bold text-gold-400">
                    Grand Hall Entrance
                  </span>
                </div>
                
                <h3 className="font-display text-3xl font-bold text-ivory tracking-wide leading-tight uppercase">
                  St Kilda Town Hall
                </h3>
                
                <p className="font-serif italic text-lg text-gold-200">
                  Melbourne, Australia
                </p>

                <p className="font-sans text-sm text-ivory/80 leading-relaxed font-light">
                  A majestic municipal landmark built in classical French Renaissance style. Featuring soaring ceilings, sweeping columns, historic timber floorboards, and stunning ballroom chandeliers—the perfect heritage canvas for the luxury Alumni Soirée.
                </p>
              </div>

              {/* Venue Conveniences bullet list */}
              <div className="space-y-4 py-6 border-t border-b border-gold-500/10">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-ivory">Parking &amp; Transit</h4>
                    <p className="font-sans text-xs text-ivory/60 leading-normal">
                      Dedicated on-site secure parking behind the town hall. Easily accessible via Melbourne Tram Route 3/3a or 67.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-ivory">Event Security</h4>
                    <p className="font-sans text-xs text-ivory/60 leading-normal">
                      Private, invite-only luxury reception. Strictly registered guestlist checks at the portico gates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions CTA Button */}
              <div className="pt-4">
                <a
                  id="venue-directions-btn"
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-btn text-[11px] tracking-widest text-[#0A0103] bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 px-6 py-3 rounded-none font-bold uppercase transition-all duration-300 hover:scale-105 active:scale-100 shadow-[0_5px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  View on Google Maps
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
