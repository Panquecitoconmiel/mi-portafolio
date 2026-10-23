// src/components/Resume.jsx
import React from 'react';
import { FaDownload, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cvPdf = '/assets/Michelle_Mora_CV.pdf';

const stats = [
  { label: 'Promedio de egreso', value: '9.7' },
  { label: 'Año como desarrolladora', value: '1' },
  { label: 'Años en otros roles profesionales', value: '3' },
  { label: 'Idiomas', value: '2' },
  { label: 'Tecnologías y herramientas', value: '15+' },
];

const highlights = [
  'React + Laravel full stack',
  'JWT, roles y control de acceso',
  'Excel avanzado y bases de datos',
  'Atención al cliente y manejo de caja',
];

const education = [
  {
    title: 'Ingeniería en Desarrollo y Gestión de Software',
    school: 'Universidad Tecnológica de Gutiérrez Zamora',
    date: 'Sep 2024 – Abr 2026',
    detail: 'Egresada · promedio general 9.7. Estudios concluidos; trámite de título en proceso.',
  },
  {
    title: 'Técnico Superior Universitario',
    school: 'Universidad Tecnológica de Gutiérrez Zamora',
    date: 'Ago 2022 – Jul 2024',
    detail: 'Educación Profesional Técnica.',
  },
  {
    title: 'Bachillerato Tecnológico',
    school: 'Colegio de Estudios Científicos y Tecnológicos del Estado de Veracruz',
    date: 'Ago 2019 – Jul 2022',
    detail: null,
  },
];

const Resume = () => {
  return (
    <section
      style={{
        padding: '5rem 0',
        background: 'var(--section-bg)',
        position: 'relative',
        overflow: 'hidden',
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
          <div className="eyebrow">Descarga mi CV</div>
          <div className="section-head">
            <span className="index-num">04</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '700' }}>
              Mi <span className="gradient-text">Currículum</span>
            </h2>
          </div>
          <p style={{ color: 'var(--berry)', opacity: 0.85, marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: '650px', lineHeight: '1.7' }}>
            Egresada de Ingeniería en Desarrollo y Gestión de Software (promedio 9.7) y Técnica en Programación,
            con experiencia práctica en desarrollo web, captura y administración de información, control de
            inventarios y atención directa a clientes. Me adapto con rapidez a nuevos sistemas y tecnologías.
          </p>
        </motion.div>

        {/* Botón de descarga destacado */}
        <motion.a
          href={cvPdf}
          download="CV_Michelle_Mora.pdf"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cv-banner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            color: 'var(--blush)',
            padding: '1.8rem 2.5rem',
            borderRadius: '32px 10px 32px 10px',
            textDecoration: 'none',
            boxShadow: '0 20px 45px rgba(214, 51, 108, 0.3)',
            marginBottom: '3rem',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 26px 55px rgba(214, 51, 108, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 45px rgba(214, 51, 108, 0.3)';
          }}
        >
          <div>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: '600', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
              PDF · ACTUALIZADO
            </p>
            <p style={{ fontSize: '1.4rem', fontWeight: '700' }}>Descargar CV completo</p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--blush)',
            color: 'var(--berry)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}>
            <FaDownload />
          </div>
        </motion.a>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="patch"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '130px',
              }}
            >
              <span style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--red)', fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--berry)', opacity: 0.7, fontWeight: '500' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '3.5rem',
          }}
        >
          {highlights.map((item, i) => (
            <span key={i} className="tag-chip" style={{ fontSize: '0.9rem', padding: '0.5rem 1.3rem' }}>
              {item}
            </span>
          ))}
        </div>

        <hr className="dotted-divider" />

        {/* Educación */}
        <div className="eyebrow">Educación</div>
        <div className="section-head">
          <span className="index-num">
            <FaGraduationCap />
          </span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Formación académica</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="patch-soft"
              style={{ padding: '1.5rem 2rem' }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--berry)' }}>{edu.title}</h4>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--berry)', opacity: 0.55 }}>{edu.date}</span>
              </div>
              <p style={{ color: 'var(--berry)', opacity: 0.75, fontSize: '0.95rem', marginBottom: edu.detail ? '0.3rem' : 0 }}>
                {edu.school}
              </p>
              {edu.detail && (
                <p style={{ color: 'var(--berry)', opacity: 0.65, fontSize: '0.9rem' }}>{edu.detail}</p>
              )}
            </motion.div>
          ))}
        </div>

        <p style={{
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          color: 'var(--berry)',
          opacity: 0.7,
          fontSize: '0.95rem',
        }}>
          <FaMapMarkerAlt /> Iztapalapa, Ciudad de México · Disponibilidad de tiempo completo, presencial
        </p>
      </div>
    </section>
  );
};

export default Resume;
