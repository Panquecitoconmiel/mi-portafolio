// src/components/Marquee.jsx
import React from 'react';

// Franja de texto en movimiento continuo. Duplica los items para que
// el loop de la animación (definida en index.css) sea perfecto y sin cortes.
const Marquee = ({ items = [] }) => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
