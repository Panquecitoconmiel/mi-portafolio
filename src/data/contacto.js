// src/data/contacto.js
// Datos de contacto centralizados. Cambia aquí y se actualiza en todo el sitio.

// Número de WhatsApp con código de país y sin espacios ni signos (México = 52).
// Ejemplo: '5215512345678'. Si lo dejas vacío, el botón de WhatsApp no se muestra.
export const WHATSAPP_NUMBER = '';

// Correo público para que los clientes te escriban directo.
// Si lo dejas vacío, solo se muestra el formulario de contacto.
export const EMAIL = '';

export const whatsappLink = (mensaje = 'Hola Michelle, me interesa una página web ✨') =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
    : null;
