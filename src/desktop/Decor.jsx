// src/desktop/Decor.jsx
// Decoración original del cuarto (dibujada en SVG).

export const Sparkle = ({ className = '' }) => (
  <svg className={className} viewBox="-20 -20 40 40" aria-hidden="true">
    <path d="M0,-20 Q3,-3 20,0 Q3,3 0,20 Q-3,3 -20,0 Q-3,-3 0,-20Z" fill="currentColor" />
  </svg>
);

// Maceta con florecitas
export const Plant = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 170" aria-hidden="true">
    <g stroke="#7d8f4e" strokeWidth="4" strokeLinecap="round" fill="none">
      <path d="M60 110 C58 80 40 60 30 40" />
      <path d="M60 110 C62 75 78 55 92 32" />
      <path d="M60 110 V20" />
    </g>
    <g fill="#a7b46f">
      <ellipse cx="40" cy="78" rx="14" ry="7" transform="rotate(-30 40 78)" />
      <ellipse cx="80" cy="72" rx="14" ry="7" transform="rotate(30 80 72)" />
    </g>
    {[
      [30, 40, '#f5aab6'],
      [92, 32, '#fdf0b5'],
      [60, 20, '#ffffff'],
    ].map(([x, y, c]) => (
      <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="0" cy="-8" rx="6" ry="9" fill={c} stroke="#5a3b44" strokeWidth="1.5" transform={`rotate(${r})`} />
        ))}
        <circle r="4.5" fill="#f2c14e" stroke="#5a3b44" strokeWidth="1.5" />
      </g>
    ))}
    <path d="M30 108 H90 L82 164 H38 Z" fill="#f5aab6" stroke="#5a3b44" strokeWidth="3" strokeLinejoin="round" />
    <rect x="25" y="102" width="70" height="14" rx="6" fill="#f9d0d7" stroke="#5a3b44" strokeWidth="3" />
  </svg>
);

// Guirnalda navideña: tramos con esferas rojas y azules que se repiten a lo ancho
const GarlandPiece = ({ first }) => (
  <svg viewBox="0 0 160 70" width="160" height="70" aria-hidden="true">
    <path d="M0,6 Q80,58 160,6" fill="none" stroke="#5f8f5a" strokeWidth="5" strokeLinecap="round" />
    {[
      [42, 22, first],
      [118, 22, !first],
    ].map(([x, y, red]) => (
      <g key={x} transform={`translate(${x} ${y})`}>
        <g className="bulb">
          <rect x="-3" y="0" width="6" height="5" rx="1" fill="#e9d9a6" stroke="#2d3c5a" strokeWidth="1.2" />
          <ellipse cx="0" cy="13" rx="7.5" ry="9" fill={red ? '#c23b35' : '#8fb0d3'} stroke="#2d3c5a" strokeWidth="1.6" />
          <ellipse cx="-2.5" cy="10" rx="2" ry="3" fill="#fff" opacity="0.7" />
        </g>
      </g>
    ))}
    <g transform="translate(160 6)">
      <path d="M0,0 L-11,-6 L-11,6 Z M0,0 L11,-6 L11,6 Z" fill="#c23b35" stroke="#2d3c5a" strokeWidth="1.4" strokeLinejoin="round" />
      <circle r="3.2" fill="#c23b35" stroke="#2d3c5a" strokeWidth="1.4" />
    </g>
  </svg>
);

export const Garland = ({ className = '' }) => (
  <div className={className} aria-hidden="true">
    {Array.from({ length: 18 }, (_, i) => (
      <GarlandPiece key={i} first={i % 2 === 0} />
    ))}
  </div>
);
