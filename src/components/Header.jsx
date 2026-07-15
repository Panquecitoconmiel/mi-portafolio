// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      padding: '0', 
      backgroundImage: 'url(/assets/header-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',  // <--- Cambiado de 'sticky' a 'relative'
      zIndex: 100
    }}>
      {/* Overlay sin blur */}
      <div style={{
        background: 'rgba(255, 250, 227, 0.15)', // <--- Más transparente para ver mejor la imagen
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
          {/* Logo grande y centrado */}
          <a href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem'
          }}>
            <img 
              src="/assets/lolosdev.svg" 
              alt="Logo Lolos Dev" 
              style={{ 
                height: '160px',
                width: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(67, 48, 46, 0.15))'
              }}
            />
          </a>

          {/* Navegación con botones de fondo blanco */}
          <nav style={{ 
            display: 'flex', 
            gap: '1.2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a 
              href="#sobre-mi" 
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
            >
              Sobre mí
            </a>
            
            <a 
              href="#proyectos" 
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
            >
              Proyectos
            </a>
            
            <a 
              href="#contacto" 
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
            >
              Contacto
            </a>

            {/* Botón de Experiencia */}
            <a 
              href="#experiencia" 
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
            >
              Experiencia
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;