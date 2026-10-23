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
      background: 'var(--section-bg)',
    }}>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      <div className="container hero-grid">
        <div className="hero-eyebrow-area">
          <div className="eyebrow">{'</> '}Hola, soy Michelle</div>
        </div>

        <motion.div
          className="hero-name-area"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Michelle <span className="gradient-text">Mora</span>
            <span className="blink-cursor" aria-hidden="true">_</span>
          </h1>
        </motion.div>

        <div className="hero-role-area">
          <h2 className="hero-role-code" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--berry)', opacity: 0.85, marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', lineHeight: '1.8' }}>
            <span style={{ opacity: 0.5 }}>const</span> rol <span style={{ opacity: 0.5 }}>=</span>{' '}
            <span style={{ fontWeight: '700' }}>'Desarrolladora Frontend React'</span>;
            <br />
            <span style={{ opacity: 0.5 }}>{'// '}Ingeniera en Desarrollo de Software</span>
          </h2>
          <p className="hero-role-plain" style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--berry)', opacity: 0.85, marginBottom: '1.5rem' }}>
            Desarrolladora Frontend React · Ingeniera en Desarrollo de Software
          </p>
        </div>

        <div className="hero-desc-area">
          <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '560px' }}>
            Diseño y desarrollo páginas web y sistemas que se ven increíbles y funcionan
            todavía mejor. Con experiencia en <strong>React, Laravel, Ionic, Angular, Firebase y JWT</strong>,
            transformo ideas en experiencias digitales elegantes y profesionales.
          </p>
        </div>

        <div className="hero-actions-area" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <Link to="/precios" className="btn-primary">Ver precios</Link>
          <Link to="/proyectos" className="btn-secondary">Ver proyectos</Link>
        </div>

        <motion.div
          className="hero-photo-area"
          style={{ position: 'relative' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <svg className="photo-bow" viewBox="0 0 120 70" aria-hidden="true">
            <defs>
              <pattern id="bow-gingham" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="#fff" />
                <rect width="5" height="10" fill="#e11d48" opacity="0.6" />
                <rect width="10" height="5" fill="#e11d48" opacity="0.6" />
              </pattern>
            </defs>
            <path d="M54 34 L22 50 L30 68 L50 44 Z" fill="#e11d48" stroke="#9f1239" strokeWidth="2" strokeLinejoin="round" />
            <path d="M66 34 L98 50 L90 68 L70 44 Z" fill="#e11d48" stroke="#9f1239" strokeWidth="2" strokeLinejoin="round" />
            <path d="M58 32 C40 4 6 4 8 26 C10 46 40 44 58 36 Z" fill="url(#bow-gingham)" stroke="#9f1239" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M62 32 C80 4 114 4 112 26 C110 46 80 44 62 36 Z" fill="url(#bow-gingham)" stroke="#9f1239" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="50" y="24" width="20" height="20" rx="7" fill="#e11d48" stroke="#9f1239" strokeWidth="2.5" />
          </svg>
          <div className="photo-frame">
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
