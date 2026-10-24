// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/precios', label: 'Precios' },
  { to: '/cv', label: 'CV' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil automáticamente al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-logo">
            <img src="/assets/lolosdev.svg" alt="Logo Lolos Dev" />
          </span>
          <span className="brand-name">
            Michelle Mora
            <small>Software Engineer</small>
          </span>
        </Link>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="btn-secondary nav-cta">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
