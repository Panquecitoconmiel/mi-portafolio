// src/desktop/Window.jsx
// Marco de ventana con barra de título, botones de colores y "Regresar".
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Window = ({ title, isHome, wide, children }) => {
  const navigate = useNavigate();
  const body = useRef(null);
  const close = () => navigate('/');

  // Al abrir una ventana, su contenido empieza arriba
  useEffect(() => {
    body.current?.scrollTo(0, 0);
    if (!isHome && window.innerWidth < 900) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isHome]);

  return (
    <motion.section
      className={`window${wide ? ' wide' : ''}${isHome ? ' home' : ''}`}
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 10 }}
      transition={{ duration: 0.28, ease: [0.3, 0.7, 0.4, 1] }}
      aria-label={title}
    >
      <div className="titlebar">
        <div className="dots">
          <button className="dot red" onClick={close} aria-label="Cerrar ventana" disabled={isHome} />
          <button className="dot yellow" onClick={close} aria-label="Minimizar ventana" disabled={isHome} />
          <span className="dot green" />
        </div>
        {!isHome && (
          <button className="back-btn" onClick={close}>
            <FaArrowLeft size={11} /> regresar
          </button>
        )}
        <span className="win-title">{title}</span>
      </div>
      <div className="window-body" ref={body}>
        {children}
      </div>
    </motion.section>
  );
};

export default Window;
