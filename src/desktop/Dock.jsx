// src/desktop/Dock.jsx
// Dock inferior con redes sociales y WhatsApp.
import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaPinterest } from 'react-icons/fa';
import { whatsappLink } from '../data/contacto';

const links = [
  { href: whatsappLink(), label: 'WhatsApp', icon: <FaWhatsapp />, cls: 'wa' },
  { href: 'https://www.instagram.com/lolosdev.xyz', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://www.linkedin.com/in/adriana-mora-6316a341b', label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: 'https://github.com/Panquecitoconmiel', label: 'GitHub', icon: <FaGithub /> },
  { href: 'https://www.facebook.com/mijwi.tsx/', label: 'Facebook', icon: <FaFacebook /> },
  { href: 'https://mx.pinterest.com/panquecitoconmiel1949/', label: 'Pinterest', icon: <FaPinterest /> },
].filter((l) => l.href);

const Dock = () => (
  <footer className="dock-wrap">
    <nav className="dock" aria-label="Redes sociales">
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={`dock-item ${l.cls || ''}`} aria-label={l.label}>
          {l.icon}
          <span className="dock-tip">{l.label}</span>
        </a>
      ))}
    </nav>
    <p className="copyright">© {new Date().getFullYear()} Michelle Mora · hecho con React y mucho café con leche</p>
  </footer>
);

export default Dock;
