// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaDownload, FaMobileAlt, FaGamepad, FaLeaf } from 'react-icons/fa';
import { projectsData } from '../data/proyectos';

const icons = {
  mobile: <FaMobileAlt size={34} />,
  game: <FaGamepad size={34} />,
  leaf: <FaLeaf size={34} />,
};

const Projects = () => {
  return (
    <section>
      <div className="container">
        <div className="center-head" data-aos="fade-up">
          <span className="eyebrow">Lo que he construido</span>
          <h2 className="title-xl">
            Mis <span className="gradient-text">proyectos</span>
          </h2>
          <p className="section-lead">Apps, sitios y juegos hechos con mucho cariño (y mucho código).</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}
        >
          {projectsData.map((project, index) => (
            <article key={project.id} className="review-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`product-arch c${((index + 1) % 4) + 1}`} style={{ aspectRatio: '16 / 11' }}>
                <span className="big-icon">{icons[project.icon]}</span>
              </div>
              <div className="patch" style={{ padding: '1.6rem 1.7rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--pink-400)', marginBottom: '0.6rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--ink-soft)', marginBottom: '1.1rem', fontSize: '0.95rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.3rem' }}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-chip">{tech}</span>
                  ))}
                </div>
                <div className="review-links" style={{ justifyContent: 'flex-start' }}>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt size={12} /> {project.isExternal ? 'Ver sitio publicado' : 'Demo'}
                  </a>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <FaGithub size={13} /> Código
                    </a>
                  )}
                  {project.download && (
                    <a href={project.download} target="_blank" rel="noreferrer">
                      <FaDownload size={12} /> APK
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
