// src/views/HomeView.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaPaperPlane, FaTag } from 'react-icons/fa';
import { cvPdf } from '../data/perfil';

const HomeView = () => (
  <div className="home-view">
    <span className="status-pill"><i /> disponible para proyectos</span>
    <h1 className="home-title">
      hola, soy <span>Michelle</span> <span className="wave" aria-hidden="true">🎀</span>
    </h1>
    <p className="home-role">ingeniera de software y desarrolladora web</p>
    <p className="home-text">
      Diseño y desarrollo páginas web bonitas, rápidas y profesionales para tu negocio o marca.
    </p>
    <div className="home-actions">
      <a href={cvPdf} download="CV_Michelle_Mora.pdf" className="btn btn-sage">
        <FaDownload size={13} /> Descargar CV
      </a>
      <Link to="/contacto" className="btn btn-pink">
        <FaPaperPlane size={13} /> Contáctame
      </Link>
      <Link to="/precios" className="btn btn-cream">
        <FaTag size={12} /> Ver precios
      </Link>
    </div>
    <p className="home-hint">✿ abre cualquier ícono del escritorio para conocerme</p>
  </div>
);

export default HomeView;
