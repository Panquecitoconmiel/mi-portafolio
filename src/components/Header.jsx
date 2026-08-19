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
  color: '#43302E',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '0.6rem 1.8rem',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 4px 15px rgba(67, 48, 46, 0.08)',
  transition: 'all 0.3s ease',
  display: 'inline-block',
};

const linkActiveStyle = {
  background: '#43302E',
  color: '#FFF1B5',
  boxShadow: '0 8px 25px rgba(67, 48, 46, 0.25)',
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
        backgroundImage: 'url(/assets/header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: 'rgba(255, 250, 227, 0.92)',
          padding: '1.2rem 0 1rem 0',
          borderBottom: '1px solid rgba(193, 219, 232, 0.4)',
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

            {/* Logo grande y centrado, sobre una base blanca para que resalte
                sobre el fondo de cuadros del header */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFDF6',
                borderRadius: '28px',
                padding: '0.6rem 1.4rem',
                boxShadow: '0 10px 30px rgba(67, 48, 46, 0.18)',
                border: '2px solid rgba(67, 48, 46, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) rotate(-1deg)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(67, 48, 46, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(67, 48, 46, 0.18)';
              }}
              aria-label="Ir al inicio"
            >
              <img
                src="/assets/lolosdev.svg"
                alt="Logo Lolos Dev"
                style={{
                  height: '92px',
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
