// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCode, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';

const marqueeItems = [
  'React', 'Laravel', 'JWT & Roles', 'Angular', 'Ionic', 'Firebase',
  'APIs REST', 'Excel Avanzado', 'SQL', 'Figma', 'Git',
];

const quickLinks = [
  {
    to: '/experiencia',
    icon: <FaBriefcase size={28} color="#1a1a1a" />,
    title: 'Experiencia',
    text: 'Mi trayectoria en desarrollo y otros roles profesionales.',
  },
  {
    to: '/habilidades',
    icon: <FaCode size={28} color="#1a1a1a" />,
    title: 'Habilidades',
    text: 'Tecnologías y herramientas que domino.',
  },
  {
    to: '/proyectos',
    icon: <FaFolderOpen size={28} color="#1a1a1a" />,
    title: 'Proyectos',
    text: 'Aplicaciones y sitios que he desarrollado.',
  },
  {
    to: '/cv',
    icon: <FaFileAlt size={28} color="#1a1a1a" />,
    title: 'CV',
    text: 'Descarga mi currículum actualizado en PDF.',
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <section style={{ padding: '4rem 0 5rem' }}>
        <div className="container">
          <div className="eyebrow" data-aos="fade-up">Un vistazo rápido</div>
          <div className="section-head" data-aos="fade-up">
            <span className="index-num">00</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '700' }}>
              Explora mi <span className="gradient-text">portafolio</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.8rem',
              marginTop: '2.5rem',
            }}
          >
            {quickLinks.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="quick-link-card sticker-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item.icon}
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1a1a1a' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#1a1a1a', opacity: 0.75, fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
