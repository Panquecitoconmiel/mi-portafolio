// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      background: 'linear-gradient(135deg, #f5f5f4 0%, #a1a1aa 100%)',
    }}>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        <motion.div 
          style={{ flex: '1', minWidth: '300px' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-right"
        >
          <div className="eyebrow">{'</> '}Hola, soy Michelle</div>
          <h1 style={{ fontSize: '4.2rem', fontWeight: '800', margin: '0.5rem 0', color: '#1a1a1a', lineHeight: '1.1' }}>
            Michelle <span className="gradient-text">Mora</span>
            <span className="blink-cursor" aria-hidden="true">_</span>
          </h1>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '500', color: '#1a1a1a', opacity: 0.85, marginBottom: '1.5rem', fontFamily: "'Space Mono', monospace", lineHeight: '1.8' }}>
            <span style={{ opacity: 0.5 }}>const</span> rol <span style={{ opacity: 0.5 }}>=</span>{' '}
            <span style={{ fontWeight: '700' }}>'Desarrolladora Frontend React'</span>;
            <br />
            <span style={{ opacity: 0.5 }}>{'// '}Ingeniera en Desarrollo de Software</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#1a1a1a', opacity: 0.8, marginBottom: '2.5rem' }}>
            Apasionada por crear interfaces intuitivas y experiencias web memorables. 
            Con experiencia en <strong>React, Laravel, Ionic, Angular, Firebase y JWT</strong>. 
            Transformo ideas en código limpio, funcional y visualmente atractivo.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link to="/proyectos" className="btn-primary">Ver proyectos</Link>
            <Link to="/contacto" className="btn-secondary">Contáctame</Link>
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '0 0 auto', position: 'relative' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-left"
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            padding: '8px',
            boxShadow: '0 30px 60px rgba(26, 26, 26, 0.2)',
            border: '3px dashed rgba(26, 26, 26, 0.25)',
            position: 'relative',
          }}>
            <img
              src="/assets/yo.jpg"
              alt="Michelle Mora"
              className="hero-photo"
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <motion.span
            className="sticker-badge"
            style={{ bottom: '-4px', left: '-40px', transform: 'rotate(-8deg)' }}
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ✦ Disponible para proyectos
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
