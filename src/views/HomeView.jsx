// src/views/HomeView.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaWhatsapp, FaStar, FaBolt, FaMobileAlt } from 'react-icons/fa';
import { Sparkle } from '../desktop/Decor';
import { cvPdf } from '../data/perfil';
import { whatsappLink } from '../data/contacto';

// Palabras que van cambiando en el título
const words = ['páginas web', 'tiendas en línea', 'sistemas a medida', 'landing pages'];

const proof = [
  { icon: <FaStar />, value: '9.7', label: 'promedio ingeniería' },
  { icon: <FaBolt />, value: '24 h', label: 'respuesta' },
  { icon: <FaMobileAlt />, value: '100%', label: 'responsivo' },
];

const HomeView = () => {
  const [i, setI] = useState(0);
  const wa = whatsappLink('Hola Michelle, quiero cotizar una página web');

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero">
      <span className="status-pill"><i /> agenda abierta · noviembre</span>

      <h1 className="hero-headline">
        Creo <span className="rotator" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[i]}
              className="rotator-word"
              initial={{ y: '70%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-70%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.3, 0.7, 0.4, 1] }}
            >
              {words[i]}
            </motion.span>
          </AnimatePresence>
        </span>
        <br />
        que <mark>venden por ti</mark> <Sparkle className="title-sparkle" />
      </h1>

      <p className="hero-sub">
        Soy <strong>Michelle</strong>, ingeniera de software. Diseño y programo sitios bonitos,
        rápidos y fáciles de usar para que tu negocio se vea profesional desde el primer clic.
      </p>

      <div className="hero-ctas">
        <Link to="/precios" className="btn btn-pink btn-lg">
          Cotiza tu página <FaArrowRight size={13} />
        </Link>
        {wa && (
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg">
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        )}
        <a href={cvPdf} download="CV_Michelle_Mora.pdf" className="btn-link">
          <FaDownload size={11} /> Descargar CV
        </a>
      </div>

      <ul className="hero-proof">
        {proof.map((p) => (
          <li key={p.label}>
            <span className="proof-icon">{p.icon}</span>
            <strong>{p.value}</strong>
            <span>{p.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeView;
