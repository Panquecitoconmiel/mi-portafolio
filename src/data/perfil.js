// src/data/perfil.js
// Información de la ventana "Sobre mí", "Experiencia" y "CV". Edita aquí tus datos.

export const cvPdf = '/assets/Michelle_Mora_CV.pdf';

export const about = {
  name: 'Michelle Mora',
  role: 'Ingeniera de software · Desarrolladora web',
  photo: '/assets/michelle.jpg',
  location: 'CDMX · Trabajo remoto en todo México',
  bio: [
    'Hola, soy Michelle. Diseño y desarrollo páginas web y sistemas que se ven bonitos y funcionan todavía mejor.',
    'Soy egresada de Ingeniería en Desarrollo y Gestión de Software (promedio 9.7). Trabajo con React, Laravel, Ionic, Angular y Firebase, y me encanta convertir ideas en experiencias digitales claras y profesionales.',
  ],
};

export const devExperiences = [
  {
    id: 1,
    title: 'Desarrolladora Web Jr. / Practicante de Desarrollo',
    company: 'IOMPAR',
    date: 'Enero 2026 – Abril 2026',
    description: `• Elaboré informes técnicos sobre el estado de los servicios, bases de datos e integraciones del sistema.
- Configuré y administré autenticación de usuarios (JWT) y diseño de roles y permisos para el control de acceso a los sistemas.
- Di soporte técnico a la plataforma web de gestión y monitoreo de operaciones, verificando su correcto funcionamiento.
- Consumí e integré APIs REST para conectar servicios de backend y frontend, documentando cada proceso.`,
    tech: ['React', 'Laravel', 'JWT', 'SQL', 'Git'],
  },
  {
    id: 2,
    title: 'Desarrolladora Web y Móvil Jr.',
    company: 'Colegio Agustín de Hipona',
    date: 'Mayo 2023',
    description: `• Digitalicé y di seguimiento a procesos académicos (planeaciones, asistencias, permisos y proyectos), asegurando la actualización constante de la información.
- Brindé soporte y capacitación a personal administrativo y usuarios finales para el uso de los sistemas implementados.
- Implementé autenticación de usuarios y gestión de roles con Ionic, Angular y Firebase.`,
    tech: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Diseñadora y Desarrolladora Web Freelance',
    company: 'Mendoza Alcuadrado Consultoría Ambiental — Cliente directo',
    date: 'Mayo 2026 – Julio 2026',
    description: `• Desarrollé el sitio web completo en Wix para una consultoría ambiental, desde cero hasta su publicación.
- Diseñé la identidad visual de la marca: logo y tarjetas de presentación.
- Trabajé de forma directa y presencial con el cliente para levantar requerimientos, iterar sobre el diseño y entregar un producto final funcional.
- Gestioné el proyecto de manera autónoma, cubriendo diseño, desarrollo y atención al cliente.`,
    tech: ['Wix', 'Diseño de marca', 'Figma', 'Branding'],
  },
  {
    id: 4,
    title: 'Freelancer Independiente',
    company: 'Desarrollo Web / Documentación Técnica',
    date: 'Julio 2022 – Actualidad',
    description: `• Desarrollo web freelance para la construcción y mantenimiento de páginas web.
- Documentación técnica de proyectos y desarrollo de software.
- Atención a clientes y gestión de proyectos autónomos.`,
    tech: ['React', 'Laravel', 'Firebase', 'Git'],
  },
];

export const otherExperiences = [
  {
    id: 1,
    title: 'Encargada',
    company: 'La Condesa',
    date: 'Marzo 2024 – Abril 2026',
    description: 'Gestión de caja registradora, cortes de caja y recargas electrónicas, verificando la exactitud de los registros diariamente. Control y actualización periódica de inventarios y mercancía. Atención y soporte directo a clientes en mostrador.',
  },
  {
    id: 2,
    title: 'Vendedora',
    company: 'Zuky el Kamikaze',
    date: 'Enero 2025 – Diciembre 2025',
    description: 'Atención a clientes y venta de ropa. Gestión de cobros, control de inventario de mercancía y organización del punto de venta.',
  },
  {
    id: 3,
    title: 'Vendedora',
    company: 'Esquites Miele',
    date: 'Enero 2013 – Marzo 2026',
    description: 'Atención a clientes y gestión de efectivo, cobros y cortes de caja. Control de inventarios e insumos, coordinación con proveedores y supervisión de actividades operativas del negocio.',
  },
];

export const stats = [
  { label: 'Promedio de egreso', value: '9.7' },
  { label: 'Año como desarrolladora', value: '1' },
  { label: 'Años en otros roles profesionales', value: '3' },
  { label: 'Idiomas', value: '2' },
  { label: 'Tecnologías y herramientas', value: '15+' },
];

export const highlights = [
  'React + Laravel full stack',
  'JWT, roles y control de acceso',
  'Excel avanzado y bases de datos',
  'Atención al cliente y manejo de caja',
];

export const education = [
  {
    title: 'Ingeniería en Desarrollo y Gestión de Software',
    school: 'Universidad Tecnológica de Gutiérrez Zamora',
    date: 'Sep 2024 – Abr 2026',
    detail: 'Egresada · promedio general 9.7. Estudios concluidos; trámite de título en proceso.',
  },
  {
    title: 'Técnico Superior Universitario',
    school: 'Universidad Tecnológica de Gutiérrez Zamora',
    date: 'Ago 2022 – Jul 2024',
    detail: 'Educación Profesional Técnica.',
  },
  {
    title: 'Bachillerato Tecnológico',
    school: 'Colegio de Estudios Científicos y Tecnológicos del Estado de Veracruz',
    date: 'Ago 2019 – Jul 2022',
    detail: null,
  },
];
