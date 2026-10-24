// src/components/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaRocket, FaGem, FaShoppingBag, FaCode, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { plans, extras } from '../data/precios';
import { whatsappLink } from '../data/contacto';
import { Daisy, Sparkle } from './Decor';

const icons = {
  rocket: <FaRocket size={20} />,
  gem: <FaGem size={20} />,
  cart: <FaShoppingBag size={20} />,
  code: <FaCode size={20} />,
};

// Tarjetas de precios. `compact` muestra solo los planes (para el Home).
const Pricing = ({ compact = false, index = '06' }) => {
  const wa = whatsappLink('Hola Michelle, quiero cotizar una página web ✨');

  return (
    <section style={{ background: 'var(--section-bg)', overflow: 'hidden' }}>
      <div className="shape shape-1"></div>
      <div className="shape shape-3"></div>

      <div className="container">
        <div className="eyebrow" data-aos="fade-up">Servicios & precios</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">{index}</span>
          <h2>
            Tu página web, <span className="gradient-text">hecha a tu medida</span>
          </h2>
        </div>
        <p className="section-lead" data-aos="fade-up" data-aos-delay="100">
          Paquetes claros, sin letras chiquitas. Elige el que mejor se adapte a tu negocio
          o escríbeme y armamos una propuesta personalizada.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <article
              key={plan.id}
              className={`price-card${plan.featured ? ' featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {plan.featured && <span className="price-badge">✦ Más elegido</span>}
              <div className="price-icon">{icons[plan.icon]}</div>
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
                className={plan.featured ? 'btn-light' : 'btn-primary'}
              >
                Lo quiero
              </Link>
            </article>
          ))}
        </div>

        {!compact && (
          <>
            <div className="eyebrow" style={{ marginTop: '4rem' }} data-aos="fade-up">
              Extras
            </div>
            <h3 style={{ fontSize: '1.8rem' }} data-aos="fade-up">
              Complementa tu <span className="gradient-text">proyecto</span>
            </h3>
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
          <Daisy size={74} className="cta-daisy spin" style={{ top: '-20px', right: '22%' }} />
          <Daisy size={46} center="#dde874" className="cta-daisy spin" style={{ bottom: '-14px', left: '40%' }} />
          <Sparkle size={26} className="cta-daisy twinkle" style={{ top: '18px', left: '46%' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
            <h2>¿Lista tu idea? Hagámosla realidad.</h2>
            <p>Cuéntame de tu proyecto y te respondo con una cotización sin compromiso en menos de 24 horas.</p>
          </div>
          <div className="cta-actions">
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="btn-light">
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            )}
            <Link to="/contacto" className={wa ? 'btn-outline-light' : 'btn-light'}>
              <FaPaperPlane size={15} /> Pedir cotización
            </Link>
            {compact && (
              <Link to="/precios" className="btn-outline-light">
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
