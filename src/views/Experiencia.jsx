// src/views/Experiencia.jsx
import React from 'react';
import { devExperiences, otherExperiences } from '../data/perfil';

// Convierte la descripción (con viñetas "•" o "-") en una lista
const toBullets = (text) =>
  text
    .split('\n')
    .map((l) => l.replace(/^\s*[•-]\s*/, '').trim())
    .filter(Boolean);

const Experiencia = () => (
  <div className="exp-view">
    <h3 className="view-section">💻 desarrollo</h3>
    <ol className="timeline">
      {devExperiences.map((exp) => (
        <li key={exp.id} className="tl-item">
          <span className="tl-date">{exp.date}</span>
          <h4>{exp.title}</h4>
          <p className="tl-company">{exp.company}</p>
          <ul className="tl-bullets">
            {toBullets(exp.description).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="chips">
            {exp.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </li>
      ))}
    </ol>

    <h3 className="view-section">🛍️ otra experiencia</h3>
    <div className="other-list">
      {otherExperiences.map((exp) => (
        <div key={exp.id} className="other-item">
          <div className="other-head">
            <strong>{exp.title}</strong> <span>· {exp.company}</span>
            <em>{exp.date}</em>
          </div>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experiencia;
