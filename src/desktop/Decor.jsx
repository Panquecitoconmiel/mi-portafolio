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

// Arbolito de Navidad con esferas y estrella
export const XmasTree = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 170" aria-hidden="true">
    <g stroke="#2d3c5a" strokeWidth="3" strokeLinejoin="round">
      <rect x="51" y="140" width="18" height="18" rx="3" fill="#a0785a" />
      <path d="M60 30 L100 82 H78 L108 120 H82 L114 146 H6 L38 120 H12 L42 82 H20 Z" fill="#5f8f5a" />
      <rect x="38" y="152" width="44" height="14" rx="4" fill="#c23b35" />
    </g>
    <path d="M28 104 Q60 118 94 98 M22 136 Q62 148 102 128" stroke="#f5eedb" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="1 7" />
    {[
      [48, 74, '#c23b35'], [74, 70, '#8fb0d3'], [36, 110, '#8fb0d3'], [62, 100, '#f3c95a'],
      [88, 112, '#c23b35'], [30, 140, '#f3c95a'], [58, 134, '#c23b35'], [90, 140, '#8fb0d3'],
    ].map(([x, y, c]) => (
      <circle key={`${x}-${y}`} className="tree-ball" cx={x} cy={y} r="5.5" fill={c} stroke="#2d3c5a" strokeWidth="1.6" />
    ))}
    <path className="tree-star" d="M60 6 L66 20 L81 21 L69 31 L73 46 L60 37 L47 46 L51 31 L39 21 L54 20 Z" fill="#f3c95a" stroke="#2d3c5a" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// Regalos envueltos
export const Gifts = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 150 80" aria-hidden="true">
    <g stroke="#2d3c5a" strokeWidth="2.6" strokeLinejoin="round">
      <rect x="6" y="30" width="56" height="46" rx="4" fill="#c23b35" />
      <rect x="29" y="30" width="10" height="46" fill="#f5eedb" />
      <rect x="70" y="44" width="40" height="32" rx="4" fill="#8fb0d3" />
      <rect x="85" y="44" width="10" height="32" fill="#c23b35" />
      <rect x="114" y="54" width="30" height="22" rx="3" fill="#f5eedb" />
      <rect x="125" y="54" width="8" height="22" fill="#8fb0d3" />
      <path d="M34 30 C22 14 12 26 34 30 C46 14 56 26 34 30 Z" fill="#f5eedb" />
      <path d="M90 44 C80 32 72 42 90 44 C100 32 108 42 90 44 Z" fill="#c23b35" />
    </g>
  </svg>
);
