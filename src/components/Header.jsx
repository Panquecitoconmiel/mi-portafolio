// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header style={{ 
      padding: '0', 
      backgroundImage: 'url(/assets/header-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      zIndex: 100
    }}>
      <div style={{
        background: 'rgba(255, 250, 227, 0.15)',
        padding: '1.5rem 0 1rem 0',
        borderBottom: '1px solid rgba(193, 219, 232, 0.18)',
        width: '100%'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          {/* --- LOGO GRANDE Y CENTRADO --- */}
          <a href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem'
          }}>
            <img 
              src="/assets/lolosdev.svg" 
              alt="Logo Michelle Mora" 
              style={{ 
                height: '160px',
                width: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(67, 48, 46, 0.15))'
              }}
            />
          </a>

          {/* --- NAVEGACIÓN: BOTONES EN UNA FILA --- */}
          <nav style={{ 
            display: 'flex', 
            gap: '1.2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                style={{ 
                  fontWeight: '600', 
                  color: '#43302E',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.6rem 1.8rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 4px 15px rgba(67, 48, 46, 0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(67, 48, 46, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.boxShadow = '0 4px 15px rgba(67, 48, 46, 0.08)';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* --- BOTÓN HAMBURGUESA (solo visible en móvil) --- */}
          <button 
            onClick={toggleMenu}
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#43302E',
              boxShadow: '0 4px 15px rgba(67,48,46,0.1)',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '1.5rem',
              right: '2rem'
            }}
            className="menu-toggle"
            aria-label="Menú"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255, 250, 227, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem 2rem',
                borderTop: '1px solid rgba(193, 219, 232, 0.3)',
                display: 'none',
                flexDirection: 'column',
                gap: '1rem'
              }}
              className="menu-mobile"
            >
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  style={{
                    fontWeight: '600',
                    color: '#43302E',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.7)',
                    textAlign: 'center',
                    transition: '0.3s'
                  }}
                  onClick={closeMenu}
                  onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,1)'}
                  onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.7)'}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- ESTILOS RESPONSIVE --- */}
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex !important;
          }
          .menu-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .menu-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;