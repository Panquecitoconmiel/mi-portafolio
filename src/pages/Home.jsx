// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCode, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Pricing from '../components/Pricing';

const marqueeItems = [
  'React', 'Laravel', 'JWT & Roles', 'Angular', 'Ionic', 'Firebase',
  'APIs REST', 'Landing Pages', 'Tiendas en línea', 'Diseño UI', 'Figma', 'Git',
];

const quickLinks = [
  {
    to: '/experiencia',
    icon: <FaBriefcase size={22} />,
    title: 'Experiencia',
    text: 'Mi trayectoria en desarrollo y otros roles profesionales.',
  },
  {
    to: '/habilidades',
    icon: <FaCode size={22} />,
    title: 'Habilidades',
    text: 'Tecnologías y herramientas que domino.',
  },
  {
    to: '/proyectos',
    icon: <FaFolderOpen size={22} />,
    title: 'Proyectos',
    text: 'Aplicaciones y sitios que he desarrollado.',
  },
  {
    to: '/cv',
    icon: <FaFileAlt size={22} />,
    title: 'CV',
    text: 'Descarga mi currículum actualizado en PDF.',
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <div className="star-band" aria-hidden="true" />
      <Marquee items={marqueeItems} />
      <section style={{ padding: '4rem 0 5rem' }}>
        <div className="container">
          <div className="eyebrow" data-aos="fade-up">Un vistazo rápido</div>
          <div className="section-head" data-aos="fade-up">
            <span className="index-num">00</span>
            <h2>
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
                <span className="quick-link-icon">{item.icon}</span>
                <h3 style={{ fontSize: '1.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Pricing compact index="01" />
    </>
  );
};

export default Home;
