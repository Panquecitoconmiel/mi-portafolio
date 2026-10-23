// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/contacto';
import { Flower, Daisy } from './Decor';

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
    <footer className="site-footer" style={{ overflow: 'hidden' }}>
      <Flower size={120} className="footer-flower spin" style={{ right: '-30px', bottom: '-30px', opacity: 0.9 }} />
      <Daisy size={60} className="footer-flower float" style={{ left: '46%', top: '48px' }} />
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
            <Link to="/contacto" className="btn-light" style={{ fontSize: '0.92rem' }}>
              Cotiza tu página web
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Michelle Mora · Todos los derechos reservados.</p>
          <p className="footer-slogan">too cute to compute ✦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
