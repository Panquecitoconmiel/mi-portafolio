// src/components/Decor.jsx
// Formas decorativas: florecita salvia, flor rosa tipo trébol y corazón.

const SAGE = '#a7b46f';
const CREAM = '#fffbec';
const PINK = '#f5aab6';

// Florecita de 4 pétalos (verde salvia con centro crema)
export const Flower = ({ size = 60, color = SAGE, center = CREAM, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
    {[0, 90, 180, 270].map((r) => (
      <ellipse key={r} cx="0" cy="-24" rx="20" ry="26" fill={color} transform={`rotate(${r})`} />
    ))}
    {[45, 135, 225, 315].map((r) => (
      <ellipse key={r} cx="0" cy="-20" rx="13" ry="18" fill={color} transform={`rotate(${r})`} />
    ))}
    <circle r="12" fill={center} />
  </svg>
);

// Flor rosa grande de 4 círculos (trébol)
export const Clover = ({ size = 140, color = PINK, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="27" r="24" fill={color} />
    <circle cx="50" cy="73" r="24" fill={color} />
    <circle cx="27" cy="50" r="24" fill={color} />
    <circle cx="73" cy="50" r="24" fill={color} />
  </svg>
);

// Corazón
export const Heart = ({ size = 22, color = PINK, className = '', style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3.1 1.7-1.9 3.2-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill={color} />
  </svg>
);
