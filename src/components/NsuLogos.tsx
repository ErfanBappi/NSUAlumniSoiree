import React from 'react';

export default function NsuLogos() {
  return (
    <div className="flex items-center justify-center gap-6 py-4 select-none">
      {/* Logos SVG container */}
      <svg
        width="220"
        height="76"
        viewBox="0 0 220 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-56 md:w-64 h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Gold gradients for NSUAAA */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA5A" />
            <stop offset="50%" stopColor="#F5E4A3" />
            <stop offset="100%" stopColor="#B38A2A" />
          </linearGradient>
          <linearGradient id="textGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6C66D" />
            <stop offset="100%" stopColor="#B8902B" />
          </linearGradient>
          {/* Divider gradient */}
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
            <stop offset="50%" stopColor="rgba(212, 175, 55, 0.75)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
          </linearGradient>
          {/* Blue gradient for NSU Crest */}
          <linearGradient id="nsuBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#005691" />
            <stop offset="100%" stopColor="#002D62" />
          </linearGradient>
        </defs>

        {/* ==================== LEFT: NSU CREST ==================== */}
        <g transform="translate(42, 38)">
          {/* White outer circle background */}
          <circle r="33" fill="#FFFFFF" />
          {/* Gold outer border */}
          <circle r="33" fill="none" stroke="#D4AF37" strokeWidth="1" />
          {/* Inner blue ring guide */}
          <circle r="30.5" fill="none" stroke="#002D62" strokeWidth="0.5" />
          <circle r="23" fill="none" stroke="#002D62" strokeWidth="0.5" />

          {/* Text: SEEK KNOWLEDGE (Top) */}
          <path id="pathSeek" d="M -26.5,-5 A 27 27 0 0 1 26.5,-5" fill="none" />
          <text fill="#002D62" fontSize="4.2" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.6">
            <textPath href="#pathSeek" startOffset="50%" textAnchor="middle">
              SEEK KNOWLEDGE
            </textPath>
          </text>

          {/* Text: NORTH SOUTH UNIVERSITY (Bottom) */}
          <path id="pathNsu" d="M -27.5,5 A 28 28 0 0 0 27.5,5" fill="none" />
          <text fill="#002D62" fontSize="3.6" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.2">
            <textPath href="#pathNsu" startOffset="50%" textAnchor="middle">
              NORTH SOUTH UNIVERSITY
            </textPath>
          </text>

          {/* Center elements */}
          {/* Open Book */}
          <g transform="translate(0, -11) scale(0.6)">
            {/* Spine */}
            <path d="M 0,-4 L 0,6" stroke="#002D62" strokeWidth="1.2" strokeLinecap="round" />
            {/* Left page */}
            <path d="M 0,-4 C -4,-6 -10,-5 -12,-3 L -12,5 C -10,3 -4,2 0,4" fill="none" stroke="#002D62" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Right page */}
            <path d="M 0,-4 C 4,-6 10,-5 12,-3 L 12,5 C 10,3 4,2 0,4" fill="none" stroke="#002D62" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Small book lines */}
            <line x1="-8" y1="-1" x2="-3" y2="0.5" stroke="#002D62" strokeWidth="0.6" />
            <line x1="-8" y1="2" x2="-3" y2="3.5" stroke="#002D62" strokeWidth="0.6" />
            <line x1="3" y1="0.5" x2="8" y2="-1" stroke="#002D62" strokeWidth="0.6" />
            <line x1="3" y1="3.5" x2="8" y2="2" stroke="#002D62" strokeWidth="0.6" />
          </g>

          {/* Shield / Globe Outline */}
          <g transform="translate(0, 4) scale(0.9)">
            {/* Outer U shape */}
            <path
              d="M -11,-10 C -11,5 -5,11 0,11 C 5,11 11,5 11,-10"
              fill="none"
              stroke="#002D62"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Inner Globe representation */}
            <circle r="7.5" fill="url(#nsuBlueGrad)" stroke="#002D62" strokeWidth="0.5" />
            {/* Globe latitude lines */}
            <path d="M -7.5,0 H 7.5 M -6.5,-3.5 H 6.5 M -6.5,3.5 H 6.5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            {/* Globe longitude oval */}
            <ellipse rx="3.5" ry="7.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            {/* Big "N" and "S" letter in center */}
            <text x="0" y="2.5" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="serif" textAnchor="middle" letterSpacing="0.2">
              N S
            </text>
          </g>
        </g>

        {/* ==================== MIDDLE: VERTICAL DIVIDER ==================== */}
        <line x1="94" y1="12" x2="94" y2="64" stroke="url(#dividerGrad)" strokeWidth="1.2" />

        {/* ==================== RIGHT: NSUAAA CREST ==================== */}
        <g transform="translate(152, 36)">
          {/* Background tilted square (gives 3D depth) */}
          <rect
            x="-21"
            y="-25"
            width="42"
            height="34"
            rx="2.5"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.8"
            opacity="0.65"
            transform="rotate(-3, 0, -8)"
          />
          {/* Main Solid Gold Square */}
          <rect
            x="-22"
            y="-24"
            width="44"
            height="33"
            rx="2"
            fill="url(#goldGrad)"
            stroke="#FFFFFF"
            strokeWidth="0.5"
          />

          {/* NSU Text */}
          <text
            x="0"
            y="-12"
            fill="#0F0305"
            fontSize="10"
            fontWeight="900"
            fontFamily="'Inter', 'Space Grotesk', sans-serif"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            NSU
          </text>

          {/* AAA Stylized Text with geometric triangles representing the unique logo style */}
          <g transform="translate(0, 3) scale(0.95)">
            {/* Combined custom AAA rendering with metallic gradients */}
            <text
              x="0"
              y="4"
              fill="#0F0305"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="'Space Grotesk', 'Inter', sans-serif"
              textAnchor="middle"
              letterSpacing="0.5"
            >
              AAA
            </text>
          </g>

          {/* Subtext under gold box */}
          {/* "NORTH SOUTH UNIVERSITY" */}
          <text
            x="0"
            y="17"
            fill="url(#textGoldGrad)"
            fontSize="3.2"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            textAnchor="middle"
            letterSpacing="0.4"
          >
            NORTH SOUTH UNIVERSITY
          </text>

          {/* "ALUMNI ASSOCIATION OF" */}
          <text
            x="0"
            y="22"
            fill="url(#textGoldGrad)"
            fontSize="3.4"
            fontWeight="800"
            fontFamily="'Inter', sans-serif"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            ALUMNI ASSOCIATION OF
          </text>

          {/* "AUSTRALIA" (bold & prominent) */}
          <text
            x="0"
            y="30"
            fill="#FFFFFF"
            fontSize="7.2"
            fontWeight="900"
            fontFamily="'Inter', 'Space Grotesk', sans-serif"
            textAnchor="middle"
            letterSpacing="2.2"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            AUSTRALIA
          </text>
        </g>
      </svg>
    </div>
  );
}
