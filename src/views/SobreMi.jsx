// src/views/SobreMi.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaDownload, FaPaperPlane, FaRoute } from 'react-icons/fa';
import { about, stats, highlights, cvPdf, story } from '../data/perfil';

const SobreMi = () => (
  <>
  <div className="about-view">
    <div className="about-photo">
      <img src={about.photo} alt={about.name} />
      <span className="about-tag">LolosDev</span>
    </div>

    <div className="about-info">
      <h2 className="view-name">{about.name}</h2>
      <p className="view-role">{about.role}</p>
      <p className="chip-line"><FaMapMarkerAlt size={11} /> {about.location}</p>

      <div className="about-bio">
        {about.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mini-stats">
        {stats.map((s) => (
          <div key={s.label} className="mini-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="chips">
        {highlights.map((h) => (
          <span key={h} className="chip">{h}</span>
        ))}
      </div>

      <div className="home-actions">
        <a href={cvPdf} download="CV_Michelle_Mora.pdf" className="btn btn-sage"><FaDownload size={13} /> Descargar CV</a>
        <Link to="/contacto" className="btn btn-pink"><FaPaperPlane size={13} /> Contáctame</Link>
      </div>
    </div>
  </div>

  <section className="story">
    <h3 className="view-section"><FaRoute /> mi historia</h3>
    <ol className="story-line">
      {story.map((st) => (
        <li key={st.year} className="story-step">
          <span className="story-year">{st.year}</span>
          <h4>{st.title}</h4>
          <p>{st.text}</p>
        </li>
      ))}
    </ol>
  </section>
  </>
);

export default SobreMi;
