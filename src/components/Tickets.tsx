import { useState } from 'react';
import { motion } from 'motion/react';
import { Ticket, Sparkles, Check, Crown, Drama, ArrowRight, MapPin } from 'lucide-react';

interface TicketsProps {
  onBookClick: () => void;
}

interface TableInfo {
  id: number;
  label: string;
  row: number;
  col: number;
  tier: string;
  price: number;
  capacity: number;
  available: number;
}

export default function Tickets({ onBookClick }: TicketsProps) {
  const [selectedTable, setSelectedTable] = useState<TableInfo | null>({
    id: 1,
    label: 'T-01',
    row: 1,
    col: 1,
    tier: 'VIP Stage Front',
    price: 190,
    capacity: 10,
    available: 3
  });

  const tiers = [
    {
      name: 'Standard Seat',
      price: '$35 - $85',
      tagline: 'Standard Rear Hall table seating',
      features: [
        'Entry for 1 Guest (Student/Youth discount from $35)',
        'Standard table placement (Tables 26 - 40)',
        'Complimentary Masquerade Mask',
        'Gourmet Multi-course buffet feast',
        'Access to bar & networking',
      ],
      isPopular: false,
      isVip: false,
    },
    {
      name: 'Premium Seat',
      price: '$120',
      tagline: 'Outstanding view from mid-hall tables',
      features: [
        'Premium reserved table seat (Tables 11 - 25)',
        'Complimentary Luxury Mask Set',
        'Multi-course fine dining buffet',
        'Excellent line of sight to main stage',
        'Access to full open bar with cocktails',
      ],
      isPopular: true,
      isVip: false,
    },
    {
      name: 'VIP Front Row Seat',
      price: '$190',
      tagline: 'Exclusive stage-front table selection',
      features: [
        'Front-row VIP table seat (Tables 1 - 10)',
        'Ultimate proximity to stage & catwalk',
        'Dedicated VIP host and priority service',
        'Signature keepsake gift bag & champagne',
        'Premium gourmet upgrades included',
      ],
      isPopular: false,
      isVip: true,
    },
  ];

  // Map representation of St Kilda Town Hall floor plan (Tables 01 to 40)
  const tablesData: TableInfo[] = [
    // Row 1
    { id: 1, label: 'T-01', row: 1, col: 1, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 3 },
    { id: 2, label: 'T-02', row: 1, col: 2, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 4 },
    { id: 4, label: 'T-04', row: 1, col: 4, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 2 },
    { id: 5, label: 'T-05', row: 1, col: 5, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 1 },

    // Row 2
    { id: 6, label: 'T-06', row: 2, col: 1, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 5 },
    { id: 7, label: 'T-07', row: 2, col: 2, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 2 },
    { id: 9, label: 'T-09', row: 2, col: 4, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 4 },
    { id: 10, label: 'T-10', row: 2, col: 5, tier: 'VIP Stage Front', price: 190, capacity: 10, available: 3 },

    // Row 3
    { id: 11, label: 'T-11', row: 3, col: 1, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 6 },
    { id: 12, label: 'T-12', row: 3, col: 2, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 8 },
    { id: 13, label: 'T-13', row: 3, col: 3, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 5 },
    { id: 14, label: 'T-14', row: 3, col: 4, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 7 },
    { id: 15, label: 'T-15', row: 3, col: 5, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 4 },

    // Row 4
    { id: 16, label: 'T-16', row: 4, col: 1, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 5 },
    { id: 17, label: 'T-17', row: 4, col: 2, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 3 },
    { id: 18, label: 'T-18', row: 4, col: 3, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 8 },
    { id: 19, label: 'T-19', row: 4, col: 4, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 4 },
    { id: 20, label: 'T-20', row: 4, col: 5, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 6 },

    // Row 5
    { id: 21, label: 'T-21', row: 5, col: 1, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 4 },
    { id: 22, label: 'T-22', row: 5, col: 2, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 5 },
    { id: 23, label: 'T-23', row: 5, col: 3, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 7 },
    { id: 24, label: 'T-24', row: 5, col: 4, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 2 },
    { id: 25, label: 'T-25', row: 5, col: 5, tier: 'Premium Main Floor', price: 120, capacity: 10, available: 6 },

    // Row 6
    { id: 26, label: 'T-26', row: 6, col: 1, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 8 },
    { id: 27, label: 'T-27', row: 6, col: 2, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 7 },
    { id: 28, label: 'T-28', row: 6, col: 3, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 9 },
    { id: 29, label: 'T-29', row: 6, col: 4, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 6 },
    { id: 30, label: 'T-30', row: 6, col: 5, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 5 },

    // Row 7
    { id: 31, label: 'T-31', row: 7, col: 1, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 4 },
    { id: 32, label: 'T-32', row: 7, col: 2, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 9 },
    { id: 33, label: 'T-33', row: 7, col: 3, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 8 },
    { id: 34, label: 'T-34', row: 7, col: 4, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 7 },
    { id: 35, label: 'T-35', row: 7, col: 5, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 6 },

    // Row 8
    { id: 36, label: 'T-36', row: 8, col: 1, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 9 },
    { id: 37, label: 'T-37', row: 8, col: 2, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 5 },
    { id: 38, label: 'T-38', row: 8, col: 3, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 8 },
    { id: 39, label: 'T-39', row: 8, col: 4, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 4 },
    { id: 40, label: 'T-40', row: 8, col: 5, tier: 'Standard Rear Hall', price: 85, capacity: 10, available: 8 }
  ];

  return (
    <section
      id="tickets"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Reserve Your Place
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Reserve Your Seat
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Join us for an unforgettable evening. Seats range from $35.00 to $190.00.
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-24">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              id={`ticket-card-${idx}`}
              className={`rounded-3xl p-8 flex flex-col justify-between relative border shadow-[0_20px_50px_rgba(10,1,3,0.8)] overflow-hidden group transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-burgundy-950/60 border-gold-500/40 hover:border-gold-500 shadow-[0_25px_55px_rgba(212,175,55,0.15)] scale-105 z-10'
                  : 'bg-burgundy-950/20 border-gold-500/10 hover:border-gold-500/30'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-4 right-4 bg-gold-500 text-[#0A0103] font-btn text-[8px] tracking-[0.2em] uppercase font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
                  <Crown className="w-2.5 h-2.5" />
                  Most Popular
                </div>
              )}

              {/* VIP Overlay Sparkles */}
              {tier.isVip && (
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold-500/5 rounded-full blur-xl group-hover:bg-gold-500/10 transition-colors duration-500" />
              )}

              {/* Upper Portion */}
              <div>
                <span className="font-btn text-[9px] tracking-[0.25em] text-gold-500/60 uppercase font-bold block mb-1">
                  INVITATION LEVEL
                </span>
                <h3 className="font-display text-2xl font-bold text-ivory tracking-wide uppercase mb-1">
                  {tier.name}
                </h3>
                <p className="font-sans text-xs text-ivory/60 mb-6 font-light">{tier.tagline}</p>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 border-b border-gold-500/10 pb-6">
                  <span className="font-display text-4xl md:text-5xl font-bold text-gold-400 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                    {tier.price}
                  </span>
                  <span className="font-sans text-xs text-ivory/40">AUD</span>
                </div>

                {/* Inclusions Check List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-xs md:text-sm text-ivory/80 leading-normal font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Button */}
              <div className="pt-4">
                <button
                  id={`ticket-btn-${idx}`}
                  onClick={onBookClick}
                  className={`w-full font-btn text-xs tracking-[0.2em] py-4 rounded-none font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer ${
                    tier.isPopular
                      ? 'text-[#0A0103] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 shadow-[0_5px_20px_rgba(212,175,55,0.2)]'
                      : 'text-ivory border border-gold-500/30 hover:border-gold-500 hover:bg-gold-500/10'
                  }`}
                >
                  <Ticket className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
                  Book Your Seat
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Interactive Floor Plan Selection Title */}
        <div className="text-center mb-10">
          <h3 className="font-display text-xl sm:text-2xl tracking-[0.2em] text-gold-400 uppercase font-bold mb-2">
            Interactive Ballroom Floor Plan
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 max-w-2xl mx-auto font-light">
            Click any of the 40 circular tables below to view price details, stage proximity, and seat availability. High-fidelity representation of the St Kilda Town Hall layout.
          </p>
        </div>

        {/* Floor Plan Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch bg-burgundy-950/20 border border-gold-500/15 p-6 sm:p-8 rounded-3xl relative">
          
          {/* Left Column: Visual Map */}
          <div className="lg:col-span-8 flex flex-col items-center">
            
            {/* The Stage */}
            <div className="w-full max-w-lg mb-4 text-center">
              <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 border border-gold-400 text-[#0A0103] font-display text-xs tracking-[0.3em] font-black uppercase py-2.5 rounded-md shadow-[0_0_30px_rgba(212,175,55,0.25)] relative overflow-hidden">
                STAGE &bull; THE GRAND RUNWAY
                {/* Visual Runway extension */}
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250px_250px] animate-[pulse_3s_infinite]" />
              </div>
              
              {/* runway strip representation extending downwards */}
              <div className="w-20 h-16 bg-gradient-to-b from-gold-500 to-gold-600 mx-auto relative border-x border-gold-400">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-gold-950 font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">
                  Dance Floor
                </div>
              </div>
            </div>

            {/* Custom Grid Representation mimicking exactly the provided blueprint */}
            <div className="w-full max-w-lg overflow-x-auto py-2">
              <div className="min-w-[420px] grid grid-cols-5 gap-y-4 gap-x-2 text-center relative">
                
                {tablesData.map((table) => {
                  const isSelected = selectedTable?.label === table.label;
                  let colorClass = 'border-gold-500/30 text-gold-400 bg-burgundy-950/60 hover:bg-gold-500/10 hover:border-gold-500';
                  
                  if (table.tier === 'VIP Stage Front') {
                    colorClass = isSelected 
                      ? 'border-gold-400 text-gold-950 bg-gradient-to-r from-gold-500 to-gold-400 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.6)]'
                      : 'border-gold-400/80 text-gold-300 bg-burgundy-900/40 hover:bg-gold-400/10 hover:border-gold-400';
                  } else if (table.tier === 'Premium Main Floor') {
                    colorClass = isSelected
                      ? 'border-gold-500 text-gold-950 bg-gold-500 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                      : 'border-gold-500/30 text-ivory/95 bg-burgundy-950/40 hover:bg-gold-500/10 hover:border-gold-500';
                  } else { // Standard
                    colorClass = isSelected
                      ? 'border-gold-300 text-gold-950 bg-gold-300 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'border-gold-500/10 text-ivory/60 bg-burgundy-950/20 hover:bg-gold-500/10 hover:border-gold-500';
                  }

                  // Determine position in the grid
                  // The grid has 5 columns. T-03 is blank (runway catwalk spacer)
                  // Let's position using style or grid column attributes
                  const isCatwalkFillerRow1or2 = (table.row === 1 || table.row === 2) && table.col === 3;

                  return (
                    <button
                      key={table.id}
                      onClick={() => setSelectedTable(table)}
                      className={`w-14 h-14 rounded-full border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer relative mx-auto group ${colorClass}`}
                      style={{
                        gridColumn: table.col,
                        gridRow: table.row
                      }}
                      aria-label={`Select ${table.label}`}
                    >
                      <span className="font-mono text-[9px] font-bold tracking-tighter leading-none">
                        {table.label}
                      </span>
                      {/* Seats represented as micro dots around circle */}
                      <span className="font-sans text-[7px] opacity-75 mt-0.5 scale-95 leading-none">
                        {table.available} seats
                      </span>

                      {/* Small crown for VIP tables */}
                      {table.tier === 'VIP Stage Front' && (
                        <div className="absolute -top-1 right-0 text-gold-500">
                          <Crown className="w-2.5 h-2.5 fill-gold-500/20" />
                        </div>
                      )}
                    </button>
                  );
                })}

                {/* Simulated Catwalk Empty Spacers in Grid for rows 1 & 2 column 3 */}
                <div className="absolute w-14 h-32 top-0 left-[40%] transform translate-x-1 border border-dashed border-gold-500/10 bg-gold-500/5 flex items-center justify-center rounded-lg pointer-events-none z-0">
                  <span className="text-[7px] text-gold-400/40 uppercase tracking-widest font-mono rotate-90">
                    Catwalk
                  </span>
                </div>

              </div>
            </div>

            {/* Map Legend */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center font-sans text-[10px] tracking-wider uppercase text-ivory/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 border border-gold-400" />
                <span>VIP Front ($190)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-burgundy-950 border border-gold-500/40" />
                <span>Premium Mid ($120)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-burgundy-950 border border-gold-500/10" />
                <span>Standard Rear ($35 - $85)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Table Info Selection detail card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="glass-premium rounded-2xl p-6 border border-gold-500/10 h-full flex flex-col justify-between space-y-6">
              
              {selectedTable ? (
                <div className="space-y-4">
                  
                  {/* Table identifier */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-gold-500/70 uppercase">
                        SELECTED PLAN
                      </span>
                      <h4 className="font-display text-3xl font-extrabold text-gold-400 mt-1 uppercase">
                        Table {selectedTable.label}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gold-500/20 bg-burgundy-950/60 flex items-center justify-center text-gold-400">
                      <Drama className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="w-12 h-[1px] bg-gold-500/20" />

                  {/* Table details list */}
                  <div className="space-y-3 font-sans text-xs">
                    
                    <div>
                      <span className="text-ivory/40 block mb-0.5">Ballroom Sector</span>
                      <span className="text-ivory font-medium text-sm flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gold-400" />
                        {selectedTable.tier}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-ivory/40 block mb-0.5">Price Per Seat</span>
                        <span className="text-gold-300 font-bold text-base">
                          ${selectedTable.price}.00 AUD
                        </span>
                      </div>
                      <div>
                        <span className="text-ivory/40 block mb-0.5">Discount Seats</span>
                        <span className="text-ivory/80 font-light italic">
                          From $35.00
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-ivory/40 block mb-0.5">Table Proximity</span>
                        <span className="text-ivory/80">
                          {selectedTable.row <= 2 ? 'Direct Stage Front' : selectedTable.row <= 5 ? 'Excellent Mid View' : 'Comfortable Rear'}
                        </span>
                      </div>
                      <div>
                        <span className="text-ivory/40 block mb-0.5">Seats Remaining</span>
                        <span className="text-gold-400 font-semibold uppercase">
                          {selectedTable.available} / {selectedTable.capacity} Available
                        </span>
                      </div>
                    </div>

                  </div>

                  <p className="font-serif italic text-xs text-ivory/50 leading-relaxed border-t border-gold-500/10 pt-4">
                    * Interactive seats selected here are for visual planning/preview. Secure seats via our TryBooking checkout.
                  </p>

                </div>
              ) : (
                <div className="text-center py-12 space-y-2">
                  <Drama className="w-10 h-10 text-gold-500/30 mx-auto" />
                  <p className="font-display text-sm text-ivory/60 uppercase">No Table Selected</p>
                  <p className="font-sans text-xs text-ivory/40">Click any table to preview seat arrangements.</p>
                </div>
              )}

              {/* Secure spots button with direct link */}
              <a
                href="https://www.trybooking.com/events/1614599/sessions/6564178/sections?embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-btn text-xs tracking-[0.2em] text-[#0A0103] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 py-4 rounded-none font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] cursor-pointer"
              >
                <Ticket className="w-4 h-4 text-gold-950" />
                Secure Seats Now
                <ArrowRight className="w-3.5 h-3.5 text-gold-950" />
              </a>

            </div>
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
