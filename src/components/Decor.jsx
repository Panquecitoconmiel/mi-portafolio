// src/components/Decor.jsx
// Ilustraciones decorativas en la paleta pastel (rosa, azul, lima, crema).
import React from 'react';

export const C = {
  pink: '#ffb6c1',
  pinkDeep: '#ff8fab',
  sky: '#b0e0e6',
  lime: '#dde874',
  lemon: '#f4f6b9',
  ink: '#4a2338',
  white: '#ffffff',
};

// Estrellita de 4 puntas
export const Sparkle = ({ size = 24, color = C.white, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="-20 -20 40 40" aria-hidden="true">
    <path d="M0,-20 Q3,-3 20,0 Q3,3 0,20 Q-3,3 -20,0 Q-3,-3 0,-20Z" fill={color} />
  </svg>
);

// Margarita blanca
export const Daisy = ({ size = 60, center = C.pinkDeep, petal = C.white, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
    {Array.from({ length: 8 }).map((_, i) => (
      <ellipse key={i} cx="0" cy="-26" rx="11" ry="22" fill={petal} transform={`rotate(${i * 45})`} />
    ))}
    <circle r="11" fill={center} />
    <circle r="5" fill={C.white} opacity="0.6" />
  </svg>
);

// Flor de pétalos de colores
export const Flower = ({ size = 110, className = '', style }) => {
  const colors = [C.pink, C.sky, C.lime, C.white];
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <rect
          key={i}
          x="-6"
          y="-47"
          width="12"
          height="26"
          rx="6"
          fill={colors[i % colors.length]}
          transform={`rotate(${i * 22.5})`}
        />
      ))}
      <circle r="22" fill={C.lemon} />
    </svg>
  );
};

// Cassette
export const Cassette = ({ size = 150, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size * 0.68} viewBox="0 0 150 102" aria-hidden="true">
    <rect x="3" y="3" width="144" height="96" rx="12" fill={C.lemon} stroke={C.ink} strokeWidth="2.5" strokeOpacity="0.25" />
    <rect x="16" y="14" width="118" height="46" rx="8" fill={C.pink} />
    <rect x="34" y="26" width="82" height="22" rx="11" fill={C.white} />
    <circle cx="50" cy="37" r="8" fill={C.sky} />
    <circle cx="100" cy="37" r="8" fill={C.sky} />
    <circle cx="50" cy="37" r="3" fill={C.white} />
    <circle cx="100" cy="37" r="3" fill={C.white} />
    <rect x="62" y="31" width="26" height="12" rx="3" fill={C.lime} />
    <path d="M36 99 L44 74 H106 L114 99 Z" fill={C.lime} />
    <circle cx="58" cy="86" r="4" fill={C.lemon} />
    <circle cx="92" cy="86" r="4" fill={C.lemon} />
    <rect x="22" y="64" width="40" height="3" rx="1.5" fill={C.sky} />
  </svg>
);

// Celular de tapa
export const FlipPhone = ({ size = 120, className = '', style }) => (
  <svg className={className} style={style} width={size * 0.62} height={size} viewBox="0 0 74 120" aria-hidden="true">
    <rect x="6" y="2" width="62" height="54" rx="14" fill={C.pinkDeep} />
    <rect x="14" y="10" width="46" height="36" rx="8" fill={C.pink} />
    <rect x="18" y="14" width="38" height="28" rx="5" fill={C.white} opacity="0.75" />
    <rect x="4" y="54" width="66" height="8" rx="4" fill={C.pink} />
    <rect x="6" y="60" width="62" height="58" rx="14" fill={C.pinkDeep} />
    <circle cx="37" cy="74" r="7" fill={C.lime} />
    <circle cx="37" cy="74" r="3" fill={C.white} />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect key={`${r}-${c}`} x={17 + c * 15} y={86 + r * 9} width="10" height="6" rx="3" fill={(r + c) % 2 ? C.sky : C.white} />
      ))
    )}
  </svg>
);

// Moño de cuadritos rosa/lima
export const Bow = ({ className = '', style }) => (
  <svg className={className} style={style} viewBox="0 0 120 70" aria-hidden="true">
    <defs>
      <pattern id="bow-check" width="12" height="12" patternUnits="userSpaceOnUse">
        <rect width="12" height="12" fill={C.pink} />
        <rect width="6" height="6" fill={C.lime} />
        <rect x="6" y="6" width="6" height="6" fill={C.lime} />
      </pattern>
    </defs>
    <path d="M54 34 L22 50 L30 68 L50 44 Z" fill={C.sky} stroke={C.ink} strokeOpacity="0.35" strokeWidth="2" strokeLinejoin="round" />
    <path d="M66 34 L98 50 L90 68 L70 44 Z" fill={C.sky} stroke={C.ink} strokeOpacity="0.35" strokeWidth="2" strokeLinejoin="round" />
    <path d="M58 32 C40 4 6 4 8 26 C10 46 40 44 58 36 Z" fill="url(#bow-check)" stroke={C.ink} strokeOpacity="0.35" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M62 32 C80 4 114 4 112 26 C110 46 80 44 62 36 Z" fill="url(#bow-check)" stroke={C.ink} strokeOpacity="0.35" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="50" y="24" width="20" height="20" rx="7" fill={C.pinkDeep} stroke={C.ink} strokeOpacity="0.35" strokeWidth="2.5" />
  </svg>
);
