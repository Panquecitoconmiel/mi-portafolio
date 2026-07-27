// src/components/Resume.jsx
import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  const [flipped, setFlipped] = useState(false);

  const cvImage = '/assets/cv-preview.jpg';
  const cvPdf = '/assets/Michelle_Mora_CV.pdf';

  const stats = [
    { label: 'Años de experiencia', value: '4+' },
    { label: 'Proyectos completados', value: '6+' },
    { label: 'Tecnologías', value: '20+' },
    { label: 'Clientes freelance', value: '2' },
  ];

  const highlights = [
    'React + Laravel full stack',
    'Diseño UI/UX en Figma',
    'Trato directo con clientes',
    'SQL y MongoDB'
  ];

  return (
    <section 
      id="cv" 
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #FFF1B5 0%, #C1DBE8 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: '0.5rem' 
          }}>
            Mi <span className="gradient-text">Currículum</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#43302E', 
            opacity: 0.8, 
            marginBottom: '3rem', 
            fontSize: '1.1rem' 
          }}>
            Un vistazo rápido antes de descargar el PDF completo
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto 2.5rem'
        }}>
          {/* Card grande: flip card con vista previa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              gridColumn: 'span 2',
              minHeight: '340px',
              perspective: '1500px',
              cursor: 'pointer'
            }}
            onClick={() => setFlipped(!flipped)}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: '340px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Cara frontal: imagen del CV */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(15px)',
                borderRadius: '24px',
                padding: '1rem',
                boxShadow: '0 20px 50px rgba(67, 48, 46, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                overflow: 'hidden'
              }}>
                <img 
                  src={cvImage} 
                  alt="Vista previa del CV de Michelle Mora" 
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '16px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(67, 48, 46, 0.85)',
                  color: '#FFF1B5',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <FaSync size={12} /> Ver highlights
                </div>
              </div>

              {/* Cara trasera: highlights */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #43302E, #5a4542)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 20px 50px rgba(67, 48, 46, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <h3 style={{ color: '#FFF1B5', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Lo esencial
                </h3>
                {highlights.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#C1DBE8',
                      flexShrink: 0
                    }}></div>
                    <span style={{ color: '#FFF1B5', fontSize: '1rem', opacity: 0.9 }}>{item}</span>
                  </div>
                ))}
                <div style={{
                  marginTop: '0.5rem',
                  color: '#C1DBE8',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <FaSync size={11} /> Clic para volver
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mini cards de stats */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(67, 48, 46, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '150px'
              }}
            >
              <span style={{ fontSize: '2.2rem', fontWeight: '700', color: '#43302E' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#43302E', opacity: 0.7, fontWeight: '500' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Botones de descarga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.2rem'
          }}
        >
          <a 
            href={cvPdf} 
            download 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.9rem 2.5rem',
              background: 'linear-gradient(135deg, #43302E, #5a4542)',
              color: '#FFF1B5',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: '0.3s',
              boxShadow: '0 8px 25px rgba(67, 48, 46, 0.25)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(67, 48, 46, 0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(67, 48, 46, 0.25)';
            }}
          >
            <FaDownload /> Descargar PDF
          </a>
          
          <a 
            href={cvImage} 
            download="CV_Michelle_Mora.jpg"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.9rem 2.5rem',
              background: 'transparent',
              color: '#43302E',
              borderRadius: '50px',
              fontWeight: '600',
              border: '2px solid #43302E',
              textDecoration: 'none',
              transition: '0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#43302E';
              e.currentTarget.style.color = '#FFF1B5';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#43302E';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaFilePdf /> Ver imagen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;