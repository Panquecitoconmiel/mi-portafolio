// src/views/Proyectos.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaDownload, FaMobileAlt, FaGamepad, FaLeaf } from 'react-icons/fa';
import { projectsData } from '../data/proyectos';

const icons = { mobile: <FaMobileAlt />, game: <FaGamepad />, leaf: <FaLeaf /> };

const Proyectos = () => (
  <div className="projects-view">
    {projectsData.map((p, i) => (
      <article key={p.id} className="project-row">
        <div className={`project-thumb t${(i % 3) + 1}`}>{icons[p.icon]}</div>
        <div className="project-info">
          <h4>{p.title}</h4>
          <p>{p.description}</p>
          <div className="chips">
            {p.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-sage">
              <FaExternalLinkAlt size={11} /> {p.isExternal ? 'Ver sitio' : 'Demo'}
            </a>
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-sm btn-cream">
                <FaGithub size={13} /> Código
              </a>
            )}
            {p.download && (
              <a href={p.download} target="_blank" rel="noreferrer" className="btn btn-sm btn-cream">
                <FaDownload size={11} /> APK
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Proyectos;
