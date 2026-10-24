// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaGem, FaShoppingBag, FaCode, FaMobileAlt, FaGamepad, FaLeaf,
  FaExternalLinkAlt, FaGithub, FaDownload, FaArrowRight, FaClock,
} from 'react-icons/fa';
import Hero from '../components/Hero';
import { Flower, Heart } from '../components/Decor';
import { plans } from '../data/precios';
import { projectsData } from '../data/proyectos';

const planIcons = {
  rocket: <FaRocket size={30} />,
  gem: <FaGem size={30} />,
  cart: <FaShoppingBag size={30} />,
  code: <FaCode size={30} />,
};

const projectIcons = {
  mobile: <FaMobileAlt size={30} />,
  game: <FaGamepad size={30} />,
  leaf: <FaLeaf size={30} />,
};

const tiles = [
  { value: '9.7', label: 'Promedio' },
  { value: '15+', label: 'Tecnologías' },
  { value: '4', label: 'Paquetes' },
  { value: '24h', label: 'Respuesta' },
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* Agenda abierta */}
      <section className="pink-section wavy" style={{ '--wave-color': 'var(--pink-100)' }}>
        <div className="container center-head" data-aos="fade-up">
          <h2 className="title-xl">Agenda abierta</h2>
          <p className="section-lead" style={{ color: 'var(--sage-700)', fontWeight: 800 }}>
            Estoy tomando nuevos proyectos este mes ✿
          </p>
          <div className="tiles">
            {tiles.map((t, i) => (
              <React.Fragment key={t.label}>
                {i > 0 && <span className="tile-sep" aria-hidden="true">:</span>}
                <div className="tile">
                  <div className="tile-box">{t.value}</div>
                  <span>{t.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <Link to="/contacto" className="btn-primary">Agenda tu proyecto</Link>
        </div>
      </section>

      {/* Paquetes tipo "productos" */}
      <section className="wavy" style={{ '--wave-color': 'var(--cream)' }}>
        <div className="container">
          <div className="center-head" data-aos="fade-up">
            <span className="eyebrow">Servicios</span>
            <h2 className="title-xl">Mis paquetes</h2>
            <p className="section-lead">Páginas web a tu medida, con precios claros y sin sorpresas.</p>
          </div>

          <div className="package-grid">
            {plans.map((plan, i) => (
              <Link
                key={plan.id}
                to={`/contacto?plan=${plan.id}`}
                className={`package-card${plan.featured ? ' featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {plan.featured && <span className="package-badge">Más elegido</span>}
                <div className={`package-media c${(i % 4) + 1}`}>
                  <span className="package-icon">{planIcons[plan.icon]}</span>
                </div>
                <div className="package-body">
                  <h3>{plan.name}</h3>
                  <p className="package-desc">{plan.description}</p>
                  <p className="package-note"><FaClock size={11} /> {plan.note}</p>
                  <div className="package-foot">
                    <div className="package-price">
                      <small>Desde</small>
                      <strong>${plan.price}</strong>
                      <small>MXN</small>
                    </div>
                    <span className="package-go" aria-hidden="true"><FaArrowRight size={14} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.6rem' }}>
            <Link to="/precios" className="btn-secondary btn-sm">Ver todo</Link>
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="sage-section wavy" style={{ '--wave-color': 'var(--sage-400)' }}>
        <Flower size={110} color="#f9d0d7" center="#fffbec" className="deco spin hide-mobile" style={{ left: '-30px', bottom: '70px' }} />
        <div className="container">
          <div className="center-head" data-aos="fade-up">
            <span className="eyebrow">Portafolio</span>
            <h2 className="title-xl">Proyectos destacados</h2>
            <p className="section-lead">Algunas cosas que he construido con mucho cariño.</p>
          </div>

          <div className="package-grid three">
            {projectsData.map((p, i) => (
              <article key={p.id} className="package-card on-sage" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={`package-media c${((i + 1) % 4) + 1}`}>
                  <span className="package-icon">{projectIcons[p.icon]}</span>
                </div>
                <div className="package-body">
                  <h3>{p.title}</h3>
                  <p className="package-desc">{p.short}</p>
                  <div className="package-tags">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                  <div className="package-foot links">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={11} /> {p.isExternal ? 'Ver sitio' : 'Demo'}
                    </a>
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        <FaGithub size={13} /> Código
                      </a>
                    )}
                    {p.download && (
                      <a href={p.download} target="_blank" rel="noreferrer">
                        <FaDownload size={11} /> APK
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.6rem' }}>
            <Link to="/proyectos" className="btn-light btn-sm">
              Ver más <Heart size={14} color="#ec8598" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
