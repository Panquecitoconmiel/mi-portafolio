// src/desktop/apps.js
// Íconos del escritorio. Cada uno abre una ventana (ruta) con su título.

export const apps = [
  { id: 'sobre-mi', path: '/sobre-mi', label: 'sobre mí', title: 'sobre mí.', icon: '/assets/melody/sobre-mi.jpg' },
  { id: 'experiencia', path: '/experiencia', label: 'experiencia', title: 'experiencia.', icon: '/assets/melody/experiencia.jpg' },
  { id: 'habilidades', path: '/habilidades', label: 'habilidades', title: 'habilidades.', icon: '/assets/melody/habilidades.jpg' },
  { id: 'proyectos', path: '/proyectos', label: 'proyectos', title: 'proyectos.', icon: '/assets/melody/proyectos.jpg' },
  { id: 'precios', path: '/precios', label: 'precios', title: 'precios.', icon: '/assets/melody/precios.jpg' },
  { id: 'cv', path: '/cv', label: 'mi cv', title: 'cv.', icon: '/assets/melody/cv.jpg' },
  { id: 'contacto', path: '/contacto', label: 'contacto', title: 'contacto.', icon: '/assets/melody/contacto.jpg' },
];

export const appByPath = (path) => apps.find((a) => a.path === path);
