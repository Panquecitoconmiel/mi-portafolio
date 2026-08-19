# Mi Portafolio — Michelle Mora

Portafolio personal construido con **React + Vite**, con navegación real entre páginas mediante **React Router** (no es un link page de una sola sección: cada apartado vive en su propia ruta, con URL propia, botón atrás/adelante del navegador funcional y estado de carga independiente).

🔗 Demo: https://mi-portafolio.vercel.app

## Rutas / Páginas

| Ruta            | Página                                   |
|-----------------|-------------------------------------------|
| `/`             | Inicio (Hero + accesos rápidos)           |
| `/experiencia`  | Trayectoria profesional                   |
| `/habilidades`  | Tecnologías y herramientas                |
| `/proyectos`    | Proyectos desarrollados                   |
| `/cv`           | Currículum descargable                    |
| `/contacto`     | Formulario de contacto (EmailJS)          |
| `*`             | Página 404                                |

## Estructura del proyecto

```
src/
├── components/       # Piezas reutilizables (Header, Footer, secciones, etc.)
│   ├── Header.jsx         # Nav con React Router + menú hamburguesa en móvil
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   ├── ScrollToTop.jsx    # Sube el scroll y refresca AOS al cambiar de ruta
│   └── PageTransition.jsx # Animación de entrada/salida entre páginas
├── pages/             # Una página por ruta, arma los componentes de arriba
│   ├── Home.jsx
│   ├── ExperienciaPage.jsx
│   ├── HabilidadesPage.jsx
│   ├── ProyectosPage.jsx
│   ├── CVPage.jsx
│   ├── ContactoPage.jsx
│   └── NotFound.jsx
├── App.jsx            # Define las rutas (React Router)
├── main.jsx           # Punto de entrada, envuelve la app en BrowserRouter
└── index.css          # Estilos globales
```

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue

El proyecto incluye `vercel.json` con un rewrite a `index.html` para que las rutas de React Router (como `/proyectos` o `/contacto`) funcionen correctamente al recargar la página o entrar directo por URL — necesario en cualquier Single Page Application con rutas del lado del cliente.

## Stack

- React 19 + Vite
- React Router (navegación entre páginas)
- Framer Motion (transiciones y animaciones)
- AOS (animaciones al hacer scroll)
- EmailJS (formulario de contacto)
- React Icons
