// src/views/Proyectos.jsx
import React from 'react';
import {
  FaExternalLinkAlt, FaGithub, FaDownload, FaMobileAlt, FaGamepad, FaLeaf, FaStore, FaCheck, FaPencilRuler,
} from 'react-icons/fa';
import { projectsData } from '../data/proyectos';
import Gallery from '../desktop/Gallery';

const icons = { mobile: <FaMobileAlt />, game: <FaGamepad />, leaf: <FaLeaf />, store: <FaStore />, paper: <FaPencilRuler /> };

const Links = ({ p }) => {
  if (!p.demo && !p.repo && !p.download) return null;
  return (
    <div className="project-links">
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-sage">
          <FaExternalLinkAlt size={11} /> {p.isExternal ? 'Ver sitio' : 'Demo'}
        </a>
      )}
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
  );
};

const Proyectos = () => (
  <div className="projects-view">
    {projectsData.map((p, i) =>
      p.featured ? (
        <article key={p.id} className="project-featured">
          <Gallery images={p.images} title={p.title} />
          <div className="project-info">
            {p.status && <span className="project-status"><i /> {p.status}</span>}
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            {p.highlights && (
              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}><FaCheck size={10} /> {h}</li>
                ))}
              </ul>
            )}
            <div className="chips">
              {p.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <Links p={p} />
          </div>
        </article>
      ) : (
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
            <Links p={p} />
          </div>
        </article>
      )
    )}
  </div>
);

export default Proyectos;
