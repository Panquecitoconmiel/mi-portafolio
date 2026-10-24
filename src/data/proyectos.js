// src/data/proyectos.js
// Proyectos del portafolio (se usan en el Inicio y en la página de Proyectos).

export const projectsData = [
  {
    id: 1,
    title: 'Totomo',
    short: 'App móvil de notas con Firebase.',
    description: `Aplicación móvil para gestión de notas personales desarrollada en Android Studio con Java y Firebase. Permite registro con verificación por correo, inicio de sesión seguro y administración completa de notas (crear, editar, eliminar) con almacenamiento en la nube mediante Firebase Firestore.`,
    tech: ['Java', 'Android Studio', 'Firebase Auth', 'Firestore', 'XML'],
    demo: 'https://github.com/Panquecitoconmiel/Totomo.git',
    repo: 'https://github.com/Panquecitoconmiel/Totomo.git',
    download: 'https://appdistribution.firebase.dev/i/bb81d10689b05e9e',
    icon: 'mobile',
  },
  {
    id: 2,
    title: 'Lolos Arcade',
    short: 'Videojuegos clásicos con estilo pastel.',
    description: 'Videojuegos clásicos en HTML, CSS y JS con estilo pastel y enfoque MVC.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://lolos-arcade.vercel.app/',
    repo: 'https://github.com/Panquecitoconmiel/lolos-arcade.git',
    icon: 'game',
  },
  {
    id: 3,
    title: 'Mendoza Alcuadrado',
    short: 'Sitio web y marca para consultoría ambiental.',
    description: `Proyecto freelance para un cliente real: desarrollo completo de sitio web en Wix para una consultoría ambiental. Incluyó diseño de identidad visual (logo y tarjetas de presentación) y trabajo directo con el cliente, desde la propuesta de diseño hasta la publicación final.`,
    tech: ['Wix', 'Diseño de marca', 'Figma', 'Branding', 'Trato con cliente'],
    demo: 'https://www.mendozaalcuadradoconsulambiental.com/',
    isExternal: true,
    icon: 'leaf',
  },
];
