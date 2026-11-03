// src/views/Habilidades.jsx
import React from 'react';
import { skillCategories } from '../data/habilidades';

const Habilidades = () => (
  <div className="skills-view">
    <p className="view-intro">Tecnologías y herramientas con las que trabajo todos los días.</p>
    {skillCategories.map((cat) => (
      <section key={cat.title} className="skill-group">
        <h3 className="view-section">{cat.title.toLowerCase()}</h3>
        <div className="skill-grid">
          {cat.skills.map((s) => (
            <div key={s.name} className="skill-item">
              <span className="skill-icon">{s.icon}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default Habilidades;
