// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="sobre-mi" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      background: 'linear-gradient(135deg, #FFF1B5 0%, #C1DBE8 100%)',
    }}>
      {/* Formas decorativas con blur */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        {/* Texto */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ color: '#43302E', fontWeight: '600', fontSize: '1.2rem', opacity: 0.8 }}>
            Hola, soy
          </p>
          <h1 style={{ fontSize: '4.2rem', fontWeight: '800', margin: '0.5rem 0', color: '#43302E', lineHeight: '1.1' }}>
            Michelle <span className="gradient-text">Mora</span>
          </h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '500', color: '#43302E', opacity: 0.8, marginBottom: '1.5rem' }}>
            Desarrolladora Frontend React <span style={{ fontWeight: '300' }}>|</span> Ingeniera en Desarrollo de Software
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#43302E', opacity: 0.8, marginBottom: '2.5rem' }}>
            Apasionada por crear interfaces intuitivas y experiencias web memorables. 
            Con experiencia en <strong>React, Laravel, Ionic, Angular, Firebase y JWT</strong>. 
            Transformo ideas en código limpio, funcional y visualmente atractivo.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="#proyectos" className="btn-primary">Ver proyectos</a>
            <a href="#contacto" className="btn-secondary">Contáctame</a>
          </div>
        </div>

        {/* Foto con efecto de vidrio y sombra */}
        <div style={{ flex: '0 0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            padding: '8px',
            boxShadow: '0 30px 60px rgba(67, 48, 46, 0.2)'
          }}>
            <img 
              src="/assets/yo.svg" 
              alt="Michelle Mora" 
              style={{ 
                width: '280px', 
                height: '280px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;