import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Drama } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Simulate luxury API submission delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto dismiss success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contacts = [
    {
      id: 'contact-detail-email',
      label: 'Email Inquiries',
      value: 'soiree@nsualumni.org.au',
      sub: 'General & Sponsorship queries',
      icon: Mail,
      href: 'mailto:soiree@nsualumni.org.au',
    },
    {
      id: 'contact-detail-phone',
      label: 'Phone Support',
      value: '+61 3 9123 4567',
      sub: 'Available Mon - Fri, 9am - 5pm AEST',
      icon: Phone,
      href: 'tel:+61391234567',
    },
    {
      id: 'contact-detail-address',
      label: 'Association Office',
      value: 'Melbourne, Victoria, Australia',
      sub: 'NSU Alumni Association Australia',
      icon: MapPin,
      href: '#venue',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#0A0103] via-burgundy-950/20 to-[#0A0103] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-burgundy-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Get in Touch
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Have Questions?
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            We are here to help you coordinate your magnificent experience
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Inquiry details */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-ivory tracking-wider uppercase">
                Committee Inquiries
              </h3>
              <p className="font-sans text-sm text-ivory/70 leading-relaxed font-light">
                Whether you need assistance regarding group table bookings, dietary catering, ticket sponsorships, or credentials, our local Melbourne-based Alumni Soirée team is at your disposal.
              </p>
            </div>

            {/* Support Details Cards */}
            <div className="space-y-4">
              {contacts.map((contact) => {
                const ContactIcon = contact.icon;
                return (
                  <a
                    key={contact.id}
                    id={contact.id}
                    href={contact.href}
                    className="flex items-center gap-4 p-5 glass-premium rounded-2xl border border-gold-500/10 hover:border-gold-500/30 shadow-md transition-all duration-300 group block"
                  >
                    <div className="w-10 h-10 rounded-full border border-gold-500/20 bg-burgundy-950/60 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-300">
                      <ContactIcon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-mono text-[9px] tracking-widest text-gold-500/60 uppercase leading-none mb-1">
                        {contact.label}
                      </p>
                      <p className="font-display text-base font-bold text-ivory tracking-wide leading-tight group-hover:text-gold-200 transition-colors duration-300">
                        {contact.value}
                      </p>
                      <p className="font-sans text-xs text-ivory/50 mt-0.5 leading-none">
                        {contact.sub}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Note */}
            <div className="p-4 border-l border-gold-500/30 bg-burgundy-950/40 text-left">
              <p className="font-serif italic text-xs text-gold-300">
                &ldquo;Behind the Masks, Beyond the Years&rdquo; &bull; Est. Melbourne 2026
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interaction form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="glass-premium rounded-3xl p-8 border border-gold-500/15 shadow-[0_20px_50px_rgba(10,1,3,0.8)] h-full relative overflow-hidden flex flex-col justify-between">
              
              <div className="space-y-4 mb-6">
                <h3 className="font-display text-2xl font-bold text-ivory tracking-wider uppercase">
                  Send Your Inquiry
                </h3>
                <p className="font-sans text-xs text-ivory/60 font-light">
                  Complete the secure form below. A committee representative will respond within 24 hours.
                </p>
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Name */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Dr. John Alumni"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john.alumni@domain.com"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="text-left">
                    <label className="font-mono text-[9px] tracking-widest text-gold-500/80 uppercase block mb-1">
                      Your Inquiry *
                    </label>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="How can we assist you with the Soirée?"
                      className="w-full bg-[#0A0103]/60 border border-gold-500/10 hover:border-gold-500/30 focus:border-gold-500 p-3.5 rounded-none font-sans text-sm text-ivory/90 placeholder:text-ivory/30 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submission State Notifications */}
                <div className="mt-6 flex flex-col gap-4">
                  <AnimatePresence mode="wait">
                    {isSubmitted && (
                      <motion.div
                        id="contact-form-success"
                        className="p-4 bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                        <div className="text-left text-xs font-sans">
                          <p className="font-semibold">Inquiry Sent Successfully!</p>
                          <p className="text-gold-500/80 font-light mt-0.5">Thank you for writing. Our team will contact you shortly.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={loading || isSubmitted}
                    className="w-full font-btn text-xs tracking-[0.25em] text-[#0A0103] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 py-4 rounded-none font-extrabold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(212,175,55,0.15)] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {loading ? 'Submitting Inquiry...' : 'Submit Message'}
                  </button>
                </div>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
