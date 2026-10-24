// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/contacto';
import { Clover } from './Decor';

const socials = [
  { href: 'https://www.facebook.com/mijwi.tsx/', label: 'Facebook', icon: <FaFacebook size={22} /> },
  { href: 'https://www.instagram.com/lolosdev.xyz', label: 'Instagram', icon: <FaInstagram size={22} /> },
  { href: 'https://www.linkedin.com/in/adriana-mora-6316a341b', label: 'LinkedIn', icon: <FaLinkedin size={22} /> },
  { href: 'https://mx.pinterest.com/panquecitoconmiel1949/', label: 'Pinterest', icon: <FaPinterest size={22} /> },
  { href: 'https://github.com/Panquecitoconmiel', label: 'GitHub', icon: <FaGithub size={22} /> },
];

const Footer = () => {
  const wa = whatsappLink();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer wavy" style={{ '--wave-color': 'var(--pink-100)' }}>
      <div className="footer-clip" aria-hidden="true">
        <Clover size={150} color="#f5aab6" className="footer-clover" style={{ left: '-40px', bottom: '-30px' }} />
        <Clover size={110} color="#c3cd97" className="footer-clover" style={{ right: '4%', bottom: '-34px' }} />
      </div>
      <div className="container">
        <h2>¡Conectemos!</h2>
        <p className="footer-sub">
          ¿Tienes una idea? Escríbeme o sígueme en redes. Me encantará ayudarte con tu página web.
        </p>
        <div className="footer-social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              {s.icon}
            </a>
          ))}
          {wa && (
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <FaWhatsapp size={22} />
            </a>
          )}
        </div>
        <Link to="/contacto" className="btn-secondary">Cotiza tu página web</Link>
        <div className="footer-bottom">
          <p>© {year} Michelle Mora · Todos los derechos reservados.</p>
          <p>Hecho con React y mucho café con leche ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
