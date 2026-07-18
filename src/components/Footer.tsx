import { Facebook, Instagram, Linkedin, Drama, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/NSUAA.org.au/' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Support Inquiries', href: '#contact' },
  ];

  return (
    <footer id="footer" className="relative bg-[#0A0103] border-t border-gold-500/10 pt-16 pb-12 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-burgundy-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core footer upper layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-gold-500/10 mb-8">
          
          {/* Brand/Logo column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center bg-burgundy-900/60">
                <Drama className="w-4.5 h-4.5 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] tracking-[0.3em] text-gold-400 font-bold leading-none">NSU ALUMNI</span>
                <span className="font-display text-sm tracking-[0.2em] text-ivory font-light leading-snug">SOIRÉE 2026</span>
              </div>
            </div>
            <p className="font-serif italic text-xs text-ivory/50 mt-1">
              &ldquo;Unmasking Moments, Rekindling Bonds.&rdquo;
            </p>
          </div>

          {/* Social Platforms column */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-btn text-[9px] tracking-[0.2em] text-gold-500/60 uppercase font-bold">
              Connect With Us
            </span>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gold-500/10 flex items-center justify-center text-ivory/70 hover:text-[#0A0103] hover:bg-gold-500/90 hover:border-gold-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer"
                    aria-label={`Connect with us on ${social.name}`}
                  >
                    <SocialIcon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links column */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-btn text-xs tracking-wider">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ivory/60 hover:text-gold-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Lower copyright/credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] tracking-widest text-ivory/40 uppercase">
          <p className="text-center md:text-left">
            &copy; 2026 NSU Alumni Association Australia. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
