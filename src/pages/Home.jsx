// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaGem, FaShoppingBag, FaCode, FaMobileAlt, FaGamepad, FaLeaf,
  FaExternalLinkAlt, FaGithub, FaDownload,
} from 'react-icons/fa';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { Flower, Heart } from '../components/Decor';
import { plans } from '../data/precios';
import { projectsData } from '../data/proyectos';

const planIcons = {
  rocket: <FaRocket size={38} />,
  gem: <FaGem size={38} />,
  cart: <FaShoppingBag size={38} />,
  code: <FaCode size={38} />,
};

const projectIcons = {
  mobile: <FaMobileAlt size={38} />,
  game: <FaGamepad size={38} />,
  leaf: <FaLeaf size={38} />,
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

          <Carousel label="Paquetes de páginas web">
            {plans.map((plan, i) => (
              <Link key={plan.id} to={`/contacto?plan=${plan.id}`} className="product-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={`product-arch c${(i % 4) + 1}`}>
                  <span className="big-icon">{planIcons[plan.icon]}</span>
                </div>
                <div className="product-label">
                  <strong>{plan.name}</strong>
                  <span className="price">desde ${plan.price}</span>
                </div>
              </Link>
            ))}
          </Carousel>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
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

          <Carousel light label="Proyectos destacados">
            {projectsData.map((p, i) => (
              <article key={p.id} className="review-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={`product-arch c${((i + 1) % 4) + 1}`}>
                  <span className="big-icon">{projectIcons[p.icon]}</span>
                </div>
                <div className="review-body">
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <div className="review-links">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={11} /> {p.isExternal ? 'Ver sitio' : 'Demo'}
                    </a>
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        <FaGithub size={12} /> Código
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
          </Carousel>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
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
