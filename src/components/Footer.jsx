// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/contacto';

const socials = [
  { href: 'https://www.instagram.com/lolosdev.xyz', label: 'Instagram', icon: <FaInstagram size={19} /> },
  { href: 'https://www.facebook.com/mijwi.tsx/', label: 'Facebook', icon: <FaFacebook size={19} /> },
  { href: 'https://www.linkedin.com/in/adriana-mora-6316a341b', label: 'LinkedIn', icon: <FaLinkedin size={19} /> },
  { href: 'https://mx.pinterest.com/panquecitoconmiel1949/', label: 'Pinterest', icon: <FaPinterest size={19} /> },
  { href: 'https://github.com/Panquecitoconmiel', label: 'GitHub', icon: <FaGithub size={19} /> },
];

const Footer = () => {
  const wa = whatsappLink();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>
              Michelle <em style={{ fontWeight: 600 }}>Mora</em>
            </h3>
            <p style={{ maxWidth: '380px' }}>
              Diseño y desarrollo páginas web profesionales para negocios y marcas que quieren
              destacar en internet.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
              {wa && (
                <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
                  <FaWhatsapp size={19} />
                </a>
              )}
            </div>
            <Link to="/contacto" className="btn-light" style={{ padding: '0.7rem 1.6rem', fontSize: '0.9rem' }}>
              Cotiza tu página web
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Michelle Mora · Todos los derechos reservados.</p>
          <p>Hecho con React y mucho café con leche ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
