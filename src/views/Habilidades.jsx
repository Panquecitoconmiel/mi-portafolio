// src/views/Habilidades.jsx
import React from 'react';
import { FaCode, FaDatabase, FaPalette, FaBriefcase, FaMousePointer } from 'react-icons/fa';
import { skillCategories } from '../data/habilidades';

// Ícono para el encabezado de cada categoría
const categoryIcons = {
  'Desarrollo': <FaCode />,
  'Base de Datos': <FaDatabase />,
  'Diseño & Organización': <FaPalette />,
  'Administración & Ofimática': <FaBriefcase />,
  'Páginas Web sin Programar': <FaMousePointer />,
};

const Habilidades = () => (
  <div className="skills-view">
    <p className="view-intro">Tecnologías y herramientas con las que trabajo todos los días.</p>

    <div className="skill-panels">
      {skillCategories.map((cat, i) => (
        <section key={cat.title} className={`skill-panel${i === 0 ? ' wide' : ''}`}>
          <header className="skill-panel-head">
            <span className="skill-panel-icon">{categoryIcons[cat.title]}</span>
            <h3>{cat.title}</h3>
            <span className="skill-count">{cat.skills.length}</span>
          </header>
          <div className="skill-grid">
            {cat.skills.map((s) => (
              <div key={s.name} className="skill-item">
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default Habilidades;
