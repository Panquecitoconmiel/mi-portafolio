// src/desktop/apps.js
// Íconos del escritorio. Cada uno abre una ventana (ruta) con su título.

export const apps = [
  { id: 'sobre-mi', path: '/sobre-mi', label: 'sobre mí', title: 'sobre mí.', icon: '/assets/melody/sobre-mi.webp' },
  { id: 'experiencia', path: '/experiencia', label: 'experiencia', title: 'experiencia.', icon: '/assets/melody/experiencia.webp' },
  { id: 'habilidades', path: '/habilidades', label: 'habilidades', title: 'habilidades.', icon: '/assets/melody/habilidades.webp' },
  { id: 'proyectos', path: '/proyectos', label: 'proyectos', title: 'proyectos.', icon: '/assets/melody/proyectos.webp' },
  { id: 'precios', path: '/precios', label: 'precios', title: 'precios.', icon: '/assets/melody/precios.webp' },
  { id: 'cv', path: '/cv', label: 'mi cv', title: 'cv.', icon: '/assets/melody/cv.webp' },
  { id: 'contacto', path: '/contacto', label: 'contacto', title: 'contacto.', icon: '/assets/melody/contacto.webp' },
];

export const appByPath = (path) => apps.find((a) => a.path === path);
