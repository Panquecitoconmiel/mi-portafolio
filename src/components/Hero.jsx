// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkle, Daisy, Flower, Cassette, FlipPhone, Bow, C } from './Decor';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-decor" aria-hidden="true">
        <Flower size={130} className="deco spin" style={{ top: '7%', left: '3%' }} />
        <Daisy size={70} className="deco float" style={{ bottom: '12%', left: '6%' }} />
        <Cassette size={150} className="deco float-slow hide-mobile" style={{ bottom: '5%', left: '47%', rotate: '-12deg' }} />
        <FlipPhone size={120} className="deco float hide-mobile" style={{ top: '10%', right: '4%', rotate: '18deg' }} />
        <Flower size={90} className="deco spin hide-mobile" style={{ bottom: '8%', right: '3%' }} />
        <Sparkle size={28} className="deco twinkle" style={{ top: '18%', left: '30%' }} />
        <Sparkle size={18} color={C.sky} className="deco twinkle" style={{ top: '62%', left: '48%' }} />
        <Sparkle size={22} color={C.lime} className="deco twinkle hide-mobile" style={{ top: '30%', right: '28%' }} />
      </div>
      
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
            <span className="title-sparkles" aria-hidden="true">
              <Sparkle size={34} />
              <Sparkle size={20} />
            </span>
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
          <Bow className="photo-bow" />
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
