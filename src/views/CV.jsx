// src/views/CV.jsx
import React from 'react';
import { FaDownload, FaEye, FaGraduationCap } from 'react-icons/fa';
import { cvPdf, stats, education } from '../data/perfil';

const CV = () => (
  <div className="cv-view">
    <div className="cv-file">
      <div className="cv-doc" aria-hidden="true">
        <span>PDF</span>
      </div>
      <div>
        <h4>CV_Michelle_Mora.pdf</h4>
        <p>Mi currículum actualizado con experiencia, estudios y habilidades.</p>
        <div className="home-actions">
          <a href={cvPdf} download="CV_Michelle_Mora.pdf" className="btn btn-sm btn-sage"><FaDownload size={12} /> Descargar</a>
          <a href={cvPdf} target="_blank" rel="noreferrer" className="btn btn-sm btn-cream"><FaEye size={12} /> Ver en el navegador</a>
        </div>
      </div>
    </div>

    <div className="mini-stats">
      {stats.map((s) => (
        <div key={s.label} className="mini-stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>

    <h3 className="view-section"><FaGraduationCap /> formación académica</h3>
    <div className="other-list">
      {education.map((edu) => (
        <div key={edu.title} className="other-item">
          <div className="other-head">
            <strong>{edu.title}</strong>
            <em>{edu.date}</em>
          </div>
          <p>{edu.school}</p>
          {edu.detail && <p className="muted">{edu.detail}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default CV;
