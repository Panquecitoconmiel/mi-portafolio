// src/components/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaRocket, FaGem, FaShoppingBag, FaCode, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { plans, extras } from '../data/precios';
import { whatsappLink } from '../data/contacto';
import { Flower } from './Decor';

const icons = {
  rocket: <FaRocket size={30} />,
  gem: <FaGem size={30} />,
  cart: <FaShoppingBag size={30} />,
  code: <FaCode size={30} />,
};

// Tarjetas de precios. `compact` muestra solo los planes (para el Home).
const Pricing = ({ compact = false }) => {
  const wa = whatsappLink('Hola Michelle, quiero cotizar una página web ✨');

  return (
    <section>

      <div className="container">
        <div className="center-head" data-aos="fade-up">
          <span className="eyebrow">Servicios & precios</span>
          <h2 className="title-xl">
            Tu página web, <span className="gradient-text">hecha a tu medida</span>
          </h2>
          <p className="section-lead">
            Paquetes claros, sin letras chiquitas. Elige el que mejor se adapte a tu negocio
            o escríbeme y armamos una propuesta personalizada.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <article
              key={plan.id}
              className={`price-card${plan.featured ? ' featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {plan.featured && <span className="price-badge">Más elegido</span>}
              <div className={`product-arch c${(i % 4) + 1}`}>
                <span className="big-icon" style={{ width: 70, height: 70 }}>{icons[plan.icon]}</span>
              </div>
              <div className="price-body">
              <h3>{plan.name}</h3>
              <p className="price-desc">{plan.description}</p>
              <p className="price-amount">
                <small>desde</small>${plan.price}
              </p>
              <p className="price-note">MXN · {plan.note}</p>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <FaCheck size={12} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/contacto?plan=${plan.id}`}
                className={plan.featured ? 'btn-secondary' : 'btn-primary'}
              >
                Lo quiero
              </Link>
              </div>
            </article>
          ))}
        </div>

        {!compact && (
          <>
            <div className="center-head" style={{ marginTop: '4.5rem' }} data-aos="fade-up">
              <span className="eyebrow">Extras</span>
              <h3 style={{ fontSize: '2rem', color: 'var(--pink-400)' }}>
                Complementa tu <span className="gradient-text">proyecto</span>
              </h3>
            </div>
            <div className="pricing-extras">
              {extras.map((e, i) => (
                <div key={e.name} className="extra-item" data-aos="fade-up" data-aos-delay={i * 80}>
                  <span>{e.name}</span>
                  <span>{e.price}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', opacity: 0.75 }}>
              * Precios en pesos mexicanos. El costo final depende del alcance de cada proyecto.
              Dominio y hosting se pagan aparte (te ayudo a contratarlos). Se trabaja con 50% de
              anticipo y 50% contra entrega.
            </p>
          </>
        )}

        <div className="cta-band" data-aos="zoom-in">
          <Flower size={120} className="cta-flower spin" style={{ top: '-40px', right: '-30px' }} />
          <Flower size={70} color="#ffffff" center="#f5aab6" className="cta-flower spin" style={{ bottom: '-24px', left: '42%' }} />
          <div style={{ maxWidth: '560px' }}>
            <h2>¿Lista tu idea? Hagámosla realidad.</h2>
            <p>Cuéntame de tu proyecto y te respondo con una cotización sin compromiso en menos de 24 horas.</p>
          </div>
          <div className="cta-actions">
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            )}
            <Link to="/contacto" className="btn-secondary">
              <FaPaperPlane size={15} /> Pedir cotización
            </Link>
            {compact && (
              <Link to="/precios" className="btn-light">
                Ver detalles
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
