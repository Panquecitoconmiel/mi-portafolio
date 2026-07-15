// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaDownload } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Totomo',
    description: `Aplicación móvil para gestión de notas personales desarrollada en Android Studio con Java y Firebase. 
    Permite registro con verificación por correo, inicio de sesión seguro, y administración completa de notas 
    (crear, editar, eliminar) con almacenamiento en la nube mediante Firebase Firestore.`,
    tech: ['Java', 'Android Studio', 'Firebase Auth', 'Firestore', 'XML'],
    demo: 'https://github.com/Panquecitoconmiel/Totomo.git',
    repo: 'https://github.com/Panquecitoconmiel/Totomo.git',
    download: 'https://appdistribution.firebase.dev/i/bb81d10689b05e9e' // Enlace de Firebase App Distribution
  },
  {
    id: 2,
    title: 'Control Escolar',
    description: 'Sistema web y móvil para administración académica. Digitalización de planeaciones, asistencias, permisos y proyectos. Implementación de autenticación y gestión de roles con Firebase.',
    tech: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
    demo: '#', 
    repo: 'https://github.com/Panquecitoconmiel'
  }
];

const Projects = () => {
  return (
    <section id="proyectos" style={{ 
      position: 'relative',
      background: 'linear-gradient(135deg, #FFF1B5 0%, #C1DBE8 100%)',
    }}>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
      
      <div className="container">
        <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }} data-aos="fade-up">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#43302E', marginBottom: '0.8rem' }}>
                {project.title}
              </h3>
              <p style={{ color: '#43302E', opacity: 0.8, marginBottom: '1.2rem', whiteSpace: 'pre-line' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.8rem' }}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} style={{ 
                    background: 'rgba(193, 219, 232, 0.5)', 
                    backdropFilter: 'blur(5px)',
                    color: '#43302E', 
                    padding: '0.3rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.8rem', 
                    fontWeight: '600',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ 
                  color: '#43302E', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  transition: '0.3s',
                  borderBottom: '2px solid transparent'
                }} 
                onMouseEnter={e => e.target.style.borderBottom = '2px solid #C1DBE8'} 
                onMouseLeave={e => e.target.style.borderBottom = '2px solid transparent'}>
                  <FaExternalLinkAlt size={14} /> Demo
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" style={{ 
                  color: '#43302E', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  transition: '0.3s',
                  borderBottom: '2px solid transparent'
                }}
                onMouseEnter={e => e.target.style.borderBottom = '2px solid #C1DBE8'} 
                onMouseLeave={e => e.target.style.borderBottom = '2px solid transparent'}>
                  <FaGithub size={14} /> Código
                </a>
                {project.download && (
                  <a href={project.download} target="_blank" rel="noreferrer" style={{ 
                    color: '#43302E', 
                    fontWeight: '600', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    transition: '0.3s',
                    borderBottom: '2px solid transparent'
                  }}
                  onMouseEnter={e => e.target.style.borderBottom = '2px solid #C1DBE8'} 
                  onMouseLeave={e => e.target.style.borderBottom = '2px solid transparent'}>
                    <FaDownload size={14} /> APK
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;