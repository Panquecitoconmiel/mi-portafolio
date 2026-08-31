// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/cv', label: 'CV' },
  { to: '/contacto', label: 'Contacto' },
];

const linkBaseStyle = {
  fontWeight: '600',
  color: '#a61e4d',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '0.6rem 1.8rem',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 4px 15px rgba(166, 30, 77, 0.08)',
  transition: 'all 0.3s ease',
  display: 'inline-block',
};

const linkActiveStyle = {
  background: '#a61e4d',
  color: '#fff0f6',
  boxShadow: '0 8px 25px rgba(166, 30, 77, 0.35)',
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil automáticamente al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        padding: '0',
        backgroundImage: 'url(/assets/kawaii-header-strip.jpg)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'top left',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: 'rgba(255, 240, 246, 0.88)',
          padding: '1.2rem 0 1rem 0',
          borderBottom: '2px solid rgba(166, 30, 77, 0.15)',
          width: '100%',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '40px' }} className="header-spacer" />

            {/* Logo compacto, sin tarjeta ni efectos llamativos, para una
                presentación más sobria sobre el header */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                borderRadius: '14px',
                padding: '0.3rem 0.7rem',
                boxShadow: '0 4px 14px rgba(166, 30, 77, 0.12)',
                border: '1px solid rgba(166, 30, 77, 0.1)',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(166, 30, 77, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(166, 30, 77, 0.12)';
              }}
              aria-label="Ir al inicio"
            >
              <img
                src="/assets/lolosdev.svg"
                alt="Logo Lolos Dev"
                style={{
                  height: '52px',
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Link>

            {/* Botón hamburguesa (visible solo en móvil vía CSS) */}
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
          </div>

          {/* Navegación real con React Router */}
          <nav
            className={`nav-links${menuOpen ? ' open' : ''}`}
            style={{
              gap: '1.2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                style={({ isActive }) =>
                  isActive ? { ...linkBaseStyle, ...linkActiveStyle } : linkBaseStyle
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
