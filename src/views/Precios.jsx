// src/views/Precios.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaClock, FaWhatsapp } from 'react-icons/fa';
import { plans, extras } from '../data/precios';
import { whatsappLink } from '../data/contacto';

const Precios = () => {
  const wa = whatsappLink('Hola Michelle, quiero cotizar una página web ✨');

  return (
    <div className="prices-view">
      <p className="view-intro">Paquetes claros, sin letras chiquitas. Elige uno o pídeme una cotización a tu medida ✿</p>

      <div className="plan-grid">
        {plans.map((plan) => (
          <article key={plan.id} className={`plan${plan.featured ? ' featured' : ''}`}>
            {plan.featured && <span className="plan-badge">más elegido</span>}
            <h4>{plan.name}</h4>
            <p className="plan-desc">{plan.description}</p>
            <p className="plan-price">
              <small>desde</small> ${plan.price} <small>MXN</small>
            </p>
            <p className="plan-note"><FaClock size={10} /> {plan.note}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}><FaCheck size={10} /> {f}</li>
              ))}
            </ul>
            <Link to={`/contacto?plan=${plan.id}`} className={`btn btn-sm ${plan.featured ? 'btn-pink' : 'btn-sage'}`}>
              Lo quiero
            </Link>
          </article>
        ))}
      </div>

      <h3 className="view-section">✿ extras</h3>
      <div className="extras">
        {extras.map((e) => (
          <div key={e.name} className="extra">
            <span>{e.name}</span>
            <strong>{e.price}</strong>
          </div>
        ))}
      </div>
      <p className="fineprint">
        * Precios en pesos mexicanos. El costo final depende del alcance de cada proyecto. Dominio y
        hosting se pagan aparte (te ayudo a contratarlos). Se trabaja con 50% de anticipo y 50% contra entrega.
      </p>

      <div className="cta-note">
        <p>¿No sabes cuál elegir? Cuéntame tu idea y te recomiendo el mejor.</p>
        <div className="home-actions">
          {wa && (
            <a href={wa} target="_blank" rel="noreferrer" className="btn btn-sm btn-wa"><FaWhatsapp size={14} /> WhatsApp</a>
          )}
          <Link to="/contacto" className="btn btn-sm btn-pink">Pedir cotización</Link>
        </div>
      </div>
    </div>
  );
};

export default Precios;
