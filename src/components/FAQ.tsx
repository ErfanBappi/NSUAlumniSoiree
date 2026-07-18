import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, Drama } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'Who can attend the NSU Alumni Soirée 2026?',
      answer: 'All North South University (NSU) alumni residing across Australia, along with their partners, spouses, and family members, are warmly welcome. It is a wonderful opportunity to unite, celebrate shared heritage, and connect with fellow graduates.',
    },
    {
      question: 'What is the dress code for the event?',
      answer: 'The dress code is strict Formal Evening Wear / Black-Tie with Masquerade Elegance. Gentlemen are expected to wear dinner suits, tuxedos, or premium traditional formal wear. Ladies are expected to wear elegant evening gowns, cocktail dresses, or premium formal sarees. Complimentary exquisite masquerade masks will be distributed at check-in.',
    },
    {
      question: 'Can I bring children or additional family members?',
      answer: 'Yes! Spouses, partners, children, and immediate family members are warmly invited to participate. To guarantee correct seating arrangements and dietary catering, please ensure you purchase individual tickets for each family member.',
    },
    {
      question: 'How do I complete my registration and secure tickets?',
      answer: 'Simply click any "Book Your Spot Now" button to select your ticket counts, provide guest details, specify special dietary requirements (e.g., Halal, Vegetarian, Gluten-Free), and make secure online payment. An official confirmation email containing your digital PDF entry tickets and QR codes will be sent to you immediately.',
    },
    {
      question: 'Is parking available at the venue?',
      answer: 'Yes, the St Kilda Town Hall provides a dedicated, well-lit secure on-site parking lot at the rear of the building. The venue is also exceptionally convenient via Melbourne public transit, with multiple tram lines (Routes 3/3a and 67) stopping directly outside the town hall entrance.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#0A0103] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-burgundy-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-500">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-btn text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
              Assistance &amp; Support
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-widest text-ivory uppercase font-bold">
            Frequently Asked Questions
          </h2>
          <p className="font-serif italic text-sm md:text-base text-gold-300/80">
            Answers to key details regarding your premium masquerade night
          </p>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={faq.question}
                id={`faq-item-${idx}`}
                className="glass-premium rounded-2xl overflow-hidden border border-gold-500/10 transition-colors duration-300 hover:border-gold-500/20"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-gold-500 group-hover:text-gold-400 shrink-0" />
                    <span className="font-display text-sm md:text-base font-bold text-ivory group-hover:text-gold-200 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-transform duration-500 shrink-0 ${
                      isOpen ? 'rotate-180 text-gold-400' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Animated Collapse Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 border-t border-gold-500/5 font-sans text-xs md:text-sm text-ivory/80 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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
