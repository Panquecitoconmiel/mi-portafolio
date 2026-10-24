// src/components/Carousel.jsx
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Carrusel horizontal con flechas (desliza una tarjeta a la vez).
const Carousel = ({ children, light = false, label = 'Carrusel' }) => {
  const track = useRef(null);

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="carousel" role="region" aria-label={label}>
      <button className={`carousel-btn prev${light ? ' light' : ''}`} onClick={() => move(-1)} aria-label="Anterior">
        <FaChevronLeft />
      </button>
      <div className="carousel-track" ref={track}>
        {children}
      </div>
      <button className={`carousel-btn next${light ? ' light' : ''}`} onClick={() => move(1)} aria-label="Siguiente">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
