// src/data/precios.js
// Paquetes y precios de páginas web (MXN). Ajusta montos y textos a tu gusto.

export const plans = [
  {
    id: 'landing',
    name: 'Landing Page',
    icon: 'rocket',
    description: 'Una página única y elegante para presentar tu negocio o servicio.',
    price: '3,500',
    note: 'Entrega en 5 a 7 días',
    features: [
      '1 página con hasta 5 secciones',
      'Diseño 100% responsivo (celular y PC)',
      'Botón de WhatsApp y formulario de contacto',
      'Enlaces a redes sociales',
      'SEO básico para aparecer en Google',
      '1 ronda de cambios incluida',
    ],
  },
  {
    id: 'profesional',
    name: 'Sitio Profesional',
    icon: 'gem',
    description: 'Ideal para negocios, consultorios y marcas que quieren verse serias.',
    price: '7,500',
    note: 'Entrega en 2 a 3 semanas',
    featured: true,
    features: [
      'Hasta 5 páginas (Inicio, Nosotros, Servicios…)',
      'Diseño a medida con tu identidad de marca',
      'Galería, Google Maps y testimonios',
      'Formulario conectado a tu correo',
      'Configuración de dominio y hosting',
      'SEO on-page y velocidad optimizada',
      '2 rondas de cambios + 1 mes de soporte',
    ],
  },
  {
    id: 'tienda',
    name: 'Tienda en Línea',
    icon: 'cart',
    description: 'Vende tus productos 24/7 con carrito y pagos en línea.',
    price: '14,000',
    note: 'Entrega en 3 a 5 semanas',
    features: [
      'Catálogo de hasta 50 productos',
      'Carrito de compras y pagos (Mercado Pago / Stripe)',
      'Panel para administrar productos y pedidos',
      'Diseño responsivo y optimizado',
      'Capacitación para que la administres tú',
      '1 mes de soporte incluido',
    ],
  },
  {
    id: 'sistema',
    name: 'Sistema Web a Medida',
    icon: 'code',
    description: 'Plataformas con usuarios, roles y base de datos (React + Laravel).',
    price: '22,000',
    note: 'Cotización según alcance',
    features: [
      'Inicio de sesión seguro (JWT) y roles',
      'Base de datos y panel administrativo',
      'Reportes, inventarios o agenda de citas',
      'Integración con APIs externas',
      'Documentación técnica del proyecto',
      'Soporte post-entrega',
    ],
  },
];

export const extras = [
  { name: 'Mantenimiento mensual', price: '$600 / mes' },
  { name: 'Página o sección adicional', price: '$900' },
  { name: 'Diseño de logotipo', price: '$1,200' },
  { name: 'Correos corporativos', price: '$500' },
];

export const planById = (id) => plans.find((p) => p.id === id);
