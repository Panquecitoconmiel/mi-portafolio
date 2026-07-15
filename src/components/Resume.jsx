// src/components/Resume.jsx
import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  // Ruta a la imagen de tu CV en la carpeta public
  const cvImage = '/assets/cv-preview.jpg'; // Cambia por el nombre de tu archivo
  const cvPdf = '/assets/Michelle_Mora_CV.pdf'; 

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
      {/* Formas decorativas */}
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
            Conoce mi trayectoria profesional y descarga mi CV completo
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem'
        }}>
          {/* Vista previa del CV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              maxWidth: '700px',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(15px)',
              borderRadius: '28px',
              padding: '1.5rem',
              boxShadow: '0 20px 50px rgba(67, 48, 46, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: '0.3s'
            }}
            whileHover={{
              boxShadow: '0 30px 60px rgba(67, 48, 46, 0.18)',
              y: -5
            }}
          >
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(67, 48, 46, 0.1)'
            }}>
              <img 
                src={cvImage} 
                alt="Vista previa del CV de Michelle Mora" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  aspectRatio: '1 / 1.4',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>

          {/* Botones de descarga */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
              className="btn-primary"
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
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(67, 48, 46, 0.35)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(67, 48, 46, 0.25)';
              }}
            >
              <FaDownload /> Descargar PDF
            </a>
            
            <a 
              href={cvImage} 
              download="CV_Michelle_Mora.jpg"
              className="btn-secondary"
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
                e.target.style.background = '#43302E';
                e.target.style.color = '#FFF1B5';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(67, 48, 46, 0.2)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#43302E';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <FaFilePdf /> Ver imagen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;