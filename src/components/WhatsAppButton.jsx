// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/contacto';

// Botón flotante; solo aparece si hay un número configurado en src/data/contacto.js
const WhatsAppButton = () => {
  const wa = whatsappLink();
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Escríbeme por WhatsApp"
      title="Escríbeme por WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
