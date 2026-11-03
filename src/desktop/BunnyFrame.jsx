// src/desktop/BunnyFrame.jsx
// Foto en forma de corazón rodeada de conejitos que brincan (dibujo original en SVG).
import React from 'react';

const LINE = '#5a3b44';

// Conejito acostado, de lado, estilo doodle
const Bunny = () => (
  <svg viewBox="0 0 130 92" className="bunny-svg" aria-hidden="true">
    {/* Contorno: se dibujan las formas con trazo grueso y luego se rellenan encima */}
    <g fill={LINE} stroke={LINE} strokeWidth="7" strokeLinejoin="round">
      <circle cx="114" cy="58" r="8" />
      <ellipse cx="72" cy="60" rx="46" ry="26" />
      <ellipse cx="50" cy="22" rx="9" ry="21" transform="rotate(-62 50 22)" />
      <ellipse cx="58" cy="30" rx="8" ry="18" transform="rotate(-48 58 30)" />
      <ellipse cx="36" cy="50" rx="25" ry="22" />
      <ellipse cx="34" cy="79" rx="9" ry="6" />
      <ellipse cx="96" cy="81" rx="10" ry="6" />
    </g>
    <g fill="#fff">
      <circle cx="114" cy="58" r="8" />
      <ellipse cx="72" cy="60" rx="46" ry="26" />
      <ellipse cx="58" cy="30" rx="8" ry="18" transform="rotate(-48 58 30)" />
      <g className="bunny-ear">
        <ellipse cx="50" cy="22" rx="9" ry="21" transform="rotate(-62 50 22)" />
      </g>
      <ellipse cx="36" cy="50" rx="25" ry="22" />
      <ellipse cx="34" cy="79" rx="9" ry="6" />
      <ellipse cx="96" cy="81" rx="10" ry="6" />
    </g>
    <g fill="none" stroke={LINE} strokeWidth="2.6" strokeLinecap="round">
      <path d="M22 50 q5 4 10 0" />
      <path d="M48 26 q10 -4 18 -1" opacity="0.6" />
      <path d="M86 46 q8 -2 14 4" opacity="0.5" />
      <path d="M40 84 q-6 -2 -10 0" opacity="0.5" />
    </g>
    <ellipse cx="22" cy="59" rx="5" ry="3" fill="#f5aab6" opacity="0.8" />
  </svg>
);

const Star = ({ className }) => (
  <svg viewBox="-20 -20 40 40" className={className} aria-hidden="true">
    <path d="M0,-17 Q2.5,-2.5 17,0 Q2.5,2.5 0,17 Q-2.5,2.5 -17,0 Q-2.5,-2.5 0,-17Z" fill="#fffbec" stroke={LINE} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// Posición de cada conejito alrededor del corazón (ángulo en grados)
const bunnies = [-150, -90, -30, 30, 90, 150];

const BunnyFrame = ({ src, alt }) => (
  <div className="bunny-frame">
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.22 C0.5,0.04 0.28,-0.04 0.12,0.08 C-0.04,0.2 0,0.46 0.14,0.6 L0.5,0.97 L0.86,0.6 C1,0.46 1.04,0.2 0.88,0.08 C0.72,-0.04 0.5,0.04 0.5,0.22 Z" />
        </clipPath>
      </defs>
    </svg>

    <svg viewBox="0 0 60 60" className="bf-moon" aria-hidden="true">
      <path d="M38 8 A24 24 0 1 0 52 40 A19 19 0 1 1 38 8 Z" fill="#fdf0b5" stroke={LINE} strokeWidth="3" strokeLinejoin="round" />
    </svg>
    <Star className="bf-star s1" />
    <Star className="bf-star s2" />
    <Star className="bf-star s3" />
    <Star className="bf-star s4" />

    <div className="bf-heart">
      <div className="bf-heart-line" />
      <img src={src} alt={alt} />
    </div>

    {bunnies.map((deg, i) => (
      <div
        key={deg}
        className="bf-bunny"
        style={{ '--a': `${deg}deg`, '--d': `${i * 0.35}s`, '--flip': deg > 90 || deg < -90 ? -1 : 1 }}
      >
        <div className="bf-bunny-hop">
          <Bunny />
        </div>
      </div>
    ))}
  </div>
);

export default BunnyFrame;
