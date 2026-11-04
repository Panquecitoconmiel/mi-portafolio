// src/views/Plantillas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaCheck, FaWhatsapp, FaStore, FaBirthdayCake } from 'react-icons/fa';
import { templates } from '../data/plantillas';
import { whatsappLink } from '../data/contacto';

// Vista previa en vivo del sitio dentro de una mini ventana de navegador
const LivePreview = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer" className="live-preview" aria-label={`Abrir demo de ${title}`}>
    <div className="lp-bar">
      <span className="lp-dots"><i /><i /><i /></span>
      <span className="lp-url">{url.replace('https://', '')}</span>
    </div>
    <div className="lp-screen">
      <div className="lp-fallback" aria-hidden="true">
        <FaBirthdayCake />
        <strong>{title}</strong>
        <span>toca para ver la demo</span>
      </div>
      <iframe src={url} title={`Vista previa de ${title}`} loading="lazy" tabIndex={-1} />
      <span className="lp-cta"><FaExternalLinkAlt size={11} /> abrir demo</span>
    </div>
  </a>
);

const Plantillas = () => (
  <div className="templates-view">
    <p className="view-intro">
      Plantillas de tienda en línea listas para tu negocio: las personalizo con tu logo, colores y productos.
    </p>

    {templates.map((t) => {
      const wa = whatsappLink(`Hola Michelle, me interesa la plantilla "${t.name}" para mi negocio`);
      return (
        <article key={t.id} className="template-card">
          <LivePreview url={t.url} title={t.name} />
          <div className="template-info">
            <span className="project-status"><FaStore size={10} /> {t.category}</span>
            <h4>{t.name}</h4>
            <p className="template-tagline">“{t.tagline}”</p>
            <p>{t.description}</p>
            <ul className="project-highlights">
              {t.features.map((f) => (
                <li key={f}><FaCheck size={10} /> {f}</li>
              ))}
            </ul>
            <p className="template-ideal">Ideal para:</p>
            <div className="chips">
              {t.ideal.map((x) => (
                <span key={x} className="chip">{x}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={t.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-sage">
                <FaExternalLinkAlt size={11} /> Ver demo
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noreferrer" className="btn btn-sm btn-wa">
                  <FaWhatsapp size={13} /> La quiero
                </a>
              )}
              <Link to="/contacto?plan=tienda" className="btn btn-sm btn-cream">Cotizar</Link>
            </div>
          </div>
        </article>
      );
    })}

    <div className="cta-note">
      <p>¿Tienes otro tipo de negocio? Hago plantillas para ropa, accesorios, cafeterías y más.</p>
      <div className="home-actions">
        <Link to="/contacto" className="btn btn-sm btn-pink">Pídeme una a tu medida</Link>
      </div>
    </div>
  </div>
);

export default Plantillas;
