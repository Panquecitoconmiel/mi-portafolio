// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #43302E, #5a4542)',
      color: '#FFF1B5', 
      padding: '2.5rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        {/* Redes sociales */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <a href="https://www.instagram.com/strawb.js" target="_blank" rel="noreferrer" style={{ 
            color: '#FFF1B5', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            opacity: 0.8, 
            transition: '0.3s',
            fontSize: '1rem'
          }} 
          onMouseEnter={e => e.target.style.opacity = '1'} 
          onMouseLeave={e => e.target.style.opacity = '0.8'}>
            <FaInstagram size={24} /> Instagram
          </a>
          <a href="https://www.facebook.com/share/184oC9Kwp7/" target="_blank" rel="noreferrer" style={{ 
            color: '#FFF1B5', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            opacity: 0.8, 
            transition: '0.3s',
            fontSize: '1rem'
          }}
          onMouseEnter={e => e.target.style.opacity = '1'} 
          onMouseLeave={e => e.target.style.opacity = '0.8'}>
            <FaFacebook size={24} /> Facebook
          </a>
          <a href="https://github.com/Panquecitoconmiel" target="_blank" rel="noreferrer" style={{ 
            color: '#FFF1B5', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            opacity: 0.8, 
            transition: '0.3s',
            fontSize: '1rem'
          }}
          onMouseEnter={e => e.target.style.opacity = '1'} 
          onMouseLeave={e => e.target.style.opacity = '0.8'}>
            <FaGithub size={24} /> GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" style={{ 
            color: '#FFF1B5', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            opacity: 0.8, 
            transition: '0.3s',
            fontSize: '1rem'
          }}
          onMouseEnter={e => e.target.style.opacity = '1'} 
          onMouseLeave={e => e.target.style.opacity = '0.8'}>
            <FaLinkedin size={24} /> LinkedIn
          </a>
        </div>

        <p style={{ fontSize: '0.95rem', opacity: 0.6, letterSpacing: '0.5px' }}>
          © 2025 Michelle Mora · Hecho con React y mucha creatividad
        </p>
      </div>
    </footer>
  );
};

export default Footer;