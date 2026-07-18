import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Ticket, Sparkles, Drama, ChevronRight, HelpCircle } from 'lucide-react';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookNowModal({ isOpen, onClose }: BookNowModalProps) {
  const [step, setStep] = useState(1); // 1: Select Tier/Form, 2: Success Ticket
  const [tier, setTier] = useState('Couples Gala Pass');
  const [guests, setGuests] = useState({
    name: '',
    email: '',
    phone: '',
    diet: 'None',
    maskStyle: 'Venetian Classic Gold',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guests.name || !guests.email || !guests.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2); // Show receipt
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGuests((prev) => ({ ...prev, [name]: value }));
  };

  const resetState = () => {
    setStep(1);
    setGuests({
      name: '',
      email: '',
      phone: '',
      diet: 'None',
      maskStyle: 'Venetian Classic Gold',
    });
    onClose();
  };

  // Mask options for the masquerade
  const maskStyles = [
    'Venetian Classic Gold',
    'Black Velvet Mystery',
    'Burgundy Royale Lacework',
    'Champagne Pearl Gilded',
    'Silver Filigree Moonlight',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 bg-[#0A0103]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetState}
          />

          {/* Modal Container */}
          <motion.div
            id="booking-modal-container"
            className="relative w-full max-w-lg bg-burgundy-950/95 border border-gold-500/20 rounded-3xl p-8 shadow-[0_30px_80px_rgba(10,1,3,0.95)] z-10 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Close Trigger */}
            <button
              id="booking-modal-close"
              onClick={resetState}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gold-500/10 flex items-center justify-center text-ivory/60 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
              aria-label="Close booking modal"
            >
              <X className="w-4 h-4" />
            </button>

            {step === 1 ? (
              /* Step 1: Form Inputs */
              <div>
                {/* Header branding */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gold-500">
                    <Drama className="w-5 h-5" />
                    <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
                      Gala Reservation
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory tracking-wider uppercase">
                    Unveil Your Privilege
                  </h3>
                  <div className="w-12 h-[1px] bg-gold-500/20" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Tier Selection */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Choose Pass Level
                    </label>
                    <select
                      id="booking-select-tier"
                      name="tier"
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/80 focus:outline-none transition-colors duration-300"
                    >
                      <option value="Single Guest Pass">Single Guest Pass ($125 AUD)</option>
                      <option value="Couples Gala Pass">Couples Gala Pass ($230 AUD)</option>
                      <option value="Patron VIP Table (8)">Patron VIP Table of 8 ($920 AUD)</option>
                    </select>
                  </div>

                  {/* Primary Guest Name */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Primary Guest Name *
                    </label>
                    <input
                      id="booking-input-name"
                      type="text"
                      name="name"
                      value={guests.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe (NSU '14)"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Primary Guest Email */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="booking-input-email"
                      type="email"
                      name="email"
                      value={guests.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john@domain.com"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Primary Guest Phone */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="booking-input-phone"
                      type="tel"
                      name="phone"
                      value={guests.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +61 412 345 678"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Venetian Mask Selection */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Complimentary Mask Preset
                    </label>
                    <select
                      id="booking-select-mask"
                      name="maskStyle"
                      value={guests.maskStyle}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/80 focus:outline-none transition-colors duration-300"
                    >
                      {maskStyles.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dietary Requirements */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Dietary Notes
                    </label>
                    <select
                      id="booking-select-diet"
                      name="diet"
                      value={guests.diet}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/80 focus:outline-none transition-colors duration-300"
                    >
                      <option value="None">None (Standard Gourmet Selection)</option>
                      <option value="Halal">Strict Halal</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                    </select>
                  </div>

                  {/* Submit Trigger */}
                  <button
                    id="booking-form-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full font-btn text-xs tracking-[0.2em] text-[#0A0103] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 py-4 mt-6 rounded-none font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    <Ticket className="w-4 h-4 text-gold-950" />
                    {loading ? 'Processing Invitation...' : 'Complete Reservation'}
                  </button>
                </form>
              </div>
            ) : (
              /* Step 2: Luxurious Souvenir Receipt Ticket */
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400 mx-auto animate-pulse">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-gold-400 tracking-wider uppercase leading-none">
                    Reservation Confirmed
                  </h3>
                  <p className="font-serif italic text-sm text-ivory/70">
                    Welcome to the Inner Circle
                  </p>
                </div>

                {/* Simulated ticket card layout */}
                <div className="p-6 bg-burgundy-900/40 border border-gold-500/30 rounded-2xl relative overflow-hidden space-y-4 text-left shadow-lg">
                  {/* Decorative ticket notch punches */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-burgundy-950 border-r border-gold-500/20 transform -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-burgundy-950 border-l border-gold-500/20 transform -translate-y-1/2" />

                  <div className="flex justify-between items-center border-b border-gold-500/15 pb-3">
                    <span className="font-display text-xs tracking-widest text-gold-300 font-bold">NSU SOIRÉE &bull; 2026</span>
                    <span className="font-mono text-[9px] text-gold-500/70 font-semibold uppercase">QR - #9573884</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="font-mono text-[8px] tracking-widest text-gold-500/50 uppercase leading-none">PRIMARY GUEST</p>
                      <p className="font-display text-base font-bold text-ivory tracking-wide mt-1 uppercase">{guests.name}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div>
                        <p className="font-mono text-[8px] tracking-widest text-gold-500/50 uppercase leading-none">TICKET LEVEL</p>
                        <p className="font-sans text-xs font-semibold text-gold-300 mt-1">{tier}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[8px] tracking-widest text-gold-500/50 uppercase leading-none">MASK SELECTION</p>
                        <p className="font-sans text-xs text-ivory/85 font-light mt-1 italic">{guests.maskStyle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div>
                        <p className="font-mono text-[8px] tracking-widest text-gold-500/50 uppercase leading-none">DIETARY ASSIGNMENT</p>
                        <p className="font-sans text-xs text-ivory/85 font-light mt-1">{guests.diet}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[8px] tracking-widest text-gold-500/50 uppercase leading-none">GRAND DESTINATION</p>
                        <p className="font-sans text-xs text-ivory/85 font-light mt-1">St Kilda Town Hall</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gold-500/15 pt-3 mt-4 text-center">
                    <p className="font-serif italic text-[11px] text-gold-400/80">
                      Show this QR code at the Portico Entrance
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs text-ivory/60 leading-normal font-light">
                  A PDF invitation confirmation package has been sent to <strong className="text-ivory">{guests.email}</strong>. If you have any further questions, please coordinate with our committee.
                </p>

                <button
                  id="booking-modal-done"
                  onClick={resetState}
                  className="font-btn text-[10px] tracking-widest text-gold-400 border border-gold-500/30 hover:border-gold-500 hover:bg-gold-500/10 px-8 py-3 uppercase transition-all duration-300 cursor-pointer"
                >
                  Close Receipt
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
