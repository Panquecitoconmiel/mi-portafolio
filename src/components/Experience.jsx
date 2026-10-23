// src/components/Experience.jsx
import React from 'react';
import { FaCode, FaCalendarAlt, FaBuilding, FaBriefcase } from 'react-icons/fa';

// Experiencia enfocada en desarrollo / tecnología — se muestra destacada
const devExperiences = [
  {
    id: 1,
    title: 'Desarrolladora Web Jr. / Practicante de Desarrollo',
    company: 'IOMPAR',
    date: 'Enero 2026 – Abril 2026',
    description: `• Elaboré informes técnicos sobre el estado de los servicios, bases de datos e integraciones del sistema.
- Configuré y administré autenticación de usuarios (JWT) y diseño de roles y permisos para el control de acceso a los sistemas.
- Di soporte técnico a la plataforma web de gestión y monitoreo de operaciones, verificando su correcto funcionamiento.
- Consumí e integré APIs REST para conectar servicios de backend y frontend, documentando cada proceso.`,
    tech: ['React', 'Laravel', 'JWT', 'SQL', 'Git'],
  },
  {
    id: 2,
    title: 'Desarrolladora Web y Móvil Jr.',
    company: 'Colegio Agustín de Hipona',
    date: 'Mayo 2023',
    description: `• Digitalicé y di seguimiento a procesos académicos (planeaciones, asistencias, permisos y proyectos), asegurando la actualización constante de la información.
- Brindé soporte y capacitación a personal administrativo y usuarios finales para el uso de los sistemas implementados.
- Implementé autenticación de usuarios y gestión de roles con Ionic, Angular y Firebase.`,
    tech: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Diseñadora y Desarrolladora Web Freelance',
    company: 'Mendoza Alcuadrado Consultoría Ambiental — Cliente directo',
    date: 'Mayo 2026 – Julio 2026',
    description: `• Desarrollé el sitio web completo en Wix para una consultoría ambiental, desde cero hasta su publicación.
- Diseñé la identidad visual de la marca: logo y tarjetas de presentación.
- Trabajé de forma directa y presencial con el cliente para levantar requerimientos, iterar sobre el diseño y entregar un producto final funcional.
- Gestioné el proyecto de manera autónoma, cubriendo diseño, desarrollo y atención al cliente.`,
    tech: ['Wix', 'Diseño de marca', 'Figma', 'Branding'],
  },
  {
    id: 4,
    title: 'Freelancer Independiente',
    company: 'Desarrollo Web / Documentación Técnica',
    date: 'Julio 2022 – Actualidad',
    description: `• Desarrollo web freelance para la construcción y mantenimiento de páginas web.
- Documentación técnica de proyectos y desarrollo de software.
- Atención a clientes y gestión de proyectos autónomos.`,
    tech: ['React', 'Laravel', 'Firebase', 'Git'],
  },
];

// Otra experiencia profesional (atención a clientes, ventas, administración)
const otherExperiences = [
  {
    id: 1,
    title: 'Encargada',
    company: 'La Condesa',
    date: 'Marzo 2024 – Abril 2026',
    description: 'Gestión de caja registradora, cortes de caja y recargas electrónicas, verificando la exactitud de los registros diariamente. Control y actualización periódica de inventarios y mercancía. Atención y soporte directo a clientes en mostrador.',
  },
  {
    id: 2,
    title: 'Vendedora',
    company: 'Zuky el Kamikaze',
    date: 'Enero 2025 – Diciembre 2025',
    description: 'Atención a clientes y venta de ropa. Gestión de cobros, control de inventario de mercancía y organización del punto de venta.',
  },
  {
    id: 3,
    title: 'Vendedora',
    company: 'Esquites Miele',
    date: 'Enero 2013 – Marzo 2026',
    description: 'Atención a clientes y gestión de efectivo, cobros y cortes de caja. Control de inventarios e insumos, coordinación con proveedores y supervisión de actividades operativas del negocio.',
  },
];

const cardStyle = {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap',
  padding: '2rem 2.5rem',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  alignItems: 'flex-start',
};

const DevCard = ({ exp, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="patch"
    style={cardStyle}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px', gap: '0.5rem' }}>
      <div className="exp-icon" style={{
        color: 'var(--blush)',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        boxShadow: '0 8px 20px rgba(214, 51, 108, 0.2)',
      }}>
        <FaCode />
      </div>
      <div className="tag-chip" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
        <FaCalendarAlt style={{ marginRight: '6px', fontSize: '0.7rem' }} />
        {exp.date}
      </div>
    </div>

    <div style={{ flex: 1 }}>
      <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--berry)', marginBottom: '0.2rem' }}>
        {exp.title}
      </h3>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--berry)', opacity: 0.7, marginBottom: '0.8rem', fontWeight: '500' }}>
        <FaBuilding /> {exp.company}
      </p>
      <p style={{ color: 'var(--berry)', opacity: 0.85, marginBottom: '1rem', whiteSpace: 'pre-line', lineHeight: '1.7' }}>
        {exp.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {exp.tech.map((tech, idx) => (
          <span key={idx} className="tag-chip">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const OtherCard = ({ exp, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="patch-soft"
    style={{
      display: 'flex',
      gap: '1.5rem',
      padding: '1.5rem 2rem',
      alignItems: 'flex-start',
    }}
  >
    <div style={{
      background: 'var(--red)',
      color: '#fff',
      boxShadow: '0 3px 0 var(--red-deep)',
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      flexShrink: 0,
    }}>
      <FaBriefcase />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'baseline', marginBottom: '0.3rem' }}>
        <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--berry)' }}>{exp.title}</h4>
        <span style={{ color: 'var(--berry)', opacity: 0.6, fontSize: '0.9rem' }}>· {exp.company}</span>
      </div>
      <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--berry)', opacity: 0.55, marginBottom: '0.5rem' }}>
        {exp.date}
      </p>
      <p style={{ color: 'var(--berry)', opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
        {exp.description}
      </p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0',
      background: 'var(--section-bg)',
    }}>
      <div style={{
        position: 'absolute', width: '350px', height: '350px',
        background: 'radial-gradient(circle, var(--pink-soft), transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', top: '-100px', left: '-100px',
        opacity: 0.4, pointerEvents: 'none', zIndex: 0,
      }}></div>
      <div style={{
        position: 'absolute', width: '300px', height: '300px',
        background: 'radial-gradient(circle, var(--berry), transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', bottom: '-50px', right: '-50px',
        opacity: 0.1, pointerEvents: 'none', zIndex: 0,
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="eyebrow" data-aos="fade-up">Trayectoria profesional</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">01</span>
          <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>
            Experiencia en <span className="gradient-text">Desarrollo</span>
          </h2>
        </div>
        <p style={{ color: 'var(--berry)', opacity: 0.8, marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '650px' }} data-aos="fade-up" data-aos-delay="100">
          El área donde más me he enfocado: construcción de plataformas web, autenticación segura, integración de APIs y soporte técnico.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {devExperiences.map((exp, index) => (
            <DevCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        <hr className="dotted-divider" />

        <div className="eyebrow" data-aos="fade-up">También he trabajado en</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">02</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700' }}>
            Otra <span className="gradient-text">Experiencia</span> Profesional
          </h2>
        </div>
        <p style={{ color: 'var(--berry)', opacity: 0.8, marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: '650px' }} data-aos="fade-up" data-aos-delay="100">
          Roles en atención a clientes, manejo de caja y control de inventarios que reforzaron mi organización, responsabilidad y trato con las personas.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {otherExperiences.map((exp, index) => (
            <OtherCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
