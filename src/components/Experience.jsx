// src/components/Experience.jsx
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: 'Desarrolladora Web Jr. / Practicante',
    company: 'IOMPAR',
    date: 'Enero 2026 – Abril 2026',
    description: `• Desarrollé plataformas web para gestión y monitoreo de operaciones.
• Implementé autenticación segura con JWT y diseño de roles y permisos para control de acceso.
• Consumí e integré APIs REST para conectar servicios de backend y frontend.
• Construí servicios y consultas de backend orientados a la generación de reportes.
• Realicé modelado de datos, tipado de interfaces, documentación técnica y mejora continua de procesos.`,
    tech: ['React', 'Laravel', 'JWT', 'SQL', 'Git']
  },
  {
    id: 2,
    title: 'Desarrolladora Web y Móvil Jr.',
    company: 'Colegio Agustín de Hipona',
    date: 'Mayo 2023',
    description: `• Desarrollé sistemas web y móviles para la administración escolar.
• Digitalicé procesos académicos: planeaciones, asistencias, permisos y proyectos.
• Implementé autenticación de usuarios y gestión de roles con Ionic, Angular y Firebase.
• Desplegué aplicaciones web y móviles para uso institucional.`,
    tech: ['Ionic', 'Angular', 'Firebase', 'TypeScript']
  },
  {
    id: 3,
    title: 'Encargada',
    company: 'La Condesa',
    date: 'Marzo 2024 – Abril 2026',
    description: `• Gestioné caja registradora, cortes de caja y recargas electrónicas.
• Atendí al cliente y controlé inventarios y mercancía.`,
    tech: ['Gestión', 'Atención al Cliente', 'Inventarios']
  },
  {
    id: 4,
    title: 'Freelancer Independiente',
    company: 'Papantla de Olarte',
    date: 'Julio 2013 – Enero 2026',
    description: `• Atendí clientes y gestioné efectivo, cobros y cortes de caja.
• Controlé inventarios e insumos, y coordiné con proveedores.
• Organicé y supervisé actividades operativas del negocio, resolviendo problemas de forma autónoma.`,
    tech: ['Gestión', 'Coordinación', 'Resolución de Problemas']
  }
];

const Experience = () => {
  return (
    <section id="experiencia" style={{ 
      position: 'relative',
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #FFF1B5 0%, #C1DBE8 100%)',
    }}>
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, #C1DBE8, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        top: '-100px',
        left: '-100px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, #43302E, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        bottom: '-50px',
        right: '-50px',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.5rem' }} data-aos="fade-up">
          Mi <span className="gradient-text">Trayectoria</span>
        </h2>
        <p style={{ textAlign: 'center', color: '#43302E', opacity: 0.8, marginBottom: '3rem', fontSize: '1.1rem' }} data-aos="fade-up" data-aos-delay="100">
          Experiencia profesional y prácticas que respaldan mi pasión por el desarrollo
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                padding: '2rem 2.5rem',
                borderRadius: '28px',
                boxShadow: '0 15px 40px rgba(67, 48, 46, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                transition: 'all 0.4s ease',
                alignItems: 'flex-start'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(12px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(67, 48, 46, 0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(67, 48, 46, 0.08)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: '100px',
                gap: '0.5rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #43302E, #5a4542)',
                  color: '#FFF1B5',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: '0 8px 20px rgba(67, 48, 46, 0.2)'
                }}>
                  <FaBriefcase />
                </div>
                <div style={{
                  background: 'rgba(193, 219, 232, 0.5)',
                  padding: '0.3rem 1.2rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#43302E',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(5px)',
                  textAlign: 'center'
                }}>
                  <FaCalendarAlt style={{ marginRight: '6px', fontSize: '0.7rem' }} />
                  {exp.date}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#43302E', marginBottom: '0.2rem' }}>
                  {exp.title}
                </h3>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#43302E', opacity: 0.7, marginBottom: '0.8rem', fontWeight: '500' }}>
                  <FaBuilding /> {exp.company}
                </p>
                <p style={{ 
                  color: '#43302E', 
                  opacity: 0.85, 
                  marginBottom: '1rem', 
                  whiteSpace: 'pre-line',
                  lineHeight: '1.7'
                }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(193, 219, 232, 0.4)',
                      backdropFilter: 'blur(5px)',
                      color: '#43302E',
                      padding: '0.2rem 1.2rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;