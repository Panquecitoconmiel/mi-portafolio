// src/data/plantillas.js
// Plantillas de e-commerce. Agrega más objetos a la lista para mostrar más plantillas.

export const templates = [
  {
    id: 'mafer-bake',
    name: 'Mafer Bake',
    category: 'Pastelería y repostería',
    tagline: 'Pequeños antojos, grandes momentos',
    url: 'https://mafer-bake.pages.dev',
    description:
      'Plantilla de sitio para pastelerías y negocios de postres, con un diseño dulce en tonos rosa pensado para antojar a tus clientes.',
    // Revisa que estas funciones coincidan con tu plantilla
    features: [
      'Cupcakes, pasteles, galletas y postres personalizados',
      'Se ve bien en celular y computadora',
      'Personalizada con tu logo, colores y productos',
      'Lista para publicar con tu propio dominio',
    ],
    ideal: ['Pastelerías', 'Repostería casera', 'Cafeterías', 'Postres por pedido'],
    icon: 'cake',
    colors: { accent: '#f08c8c', soft: '#fde3e3' },
  },
  {
    id: 'mafer-velas',
    name: 'Mafer Velas',
    category: 'Velas artesanales',
    url: 'https://mafvelas.pages.dev',
    description:
      'Plantilla de sitio para negocios de velas artesanales, con un diseño cálido en tonos café para mostrar recuerdos de eventos, velas de temporada y aromáticas.',
    // Revisa que estas funciones coincidan con tu plantilla
    features: [
      'Recuerdos para bautizo, baby shower, bodas y XV años',
      'Velas de temporada y aromáticas',
      'Se ve bien en celular y computadora',
      'Personalizada con tu logo, colores y productos',
    ],
    ideal: ['Velas artesanales', 'Recuerdos para eventos', 'Regalos', 'Aromaterapia'],
    icon: 'candle',
    colors: { accent: '#86644f', soft: '#f3e9e1' },
  },
];
