// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flower } from './Decor';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-hello">¡Hola!</h1>
          <h2 className="hero-name">Soy Michelle Mora</h2>
          <p className="hero-role">Ingeniera de software · Desarrolladora web</p>
          <p className="hero-desc">
            Diseño y desarrollo páginas web y sistemas que se ven bonitos y funcionan todavía
            mejor. Trabajo con <strong>React, Laravel, Ionic, Angular, Firebase y JWT</strong> para
            convertir tus ideas en experiencias digitales profesionales.
          </p>
          <div className="hero-actions">
            <Link to="/precios" className="btn-primary">Ver precios</Link>
            <Link to="/contacto" className="btn-secondary">Cotiza tu página</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-arch-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-arch">
            <img src="/assets/yo.jpeg" alt="Michelle Mora" />
          </div>
          <Flower size={86} className="deco spin" style={{ top: '-18px', right: '-22px' }} />
          <Flower size={64} className="deco spin" style={{ bottom: '-20px', right: '30px' }} />
          <span className="hero-badge">Disponible para proyectos</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
