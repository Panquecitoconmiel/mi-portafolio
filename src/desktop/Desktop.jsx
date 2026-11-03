// src/desktop/Desktop.jsx
// Escritorio tipo computadora: barra superior, íconos, cuarto con My Melody,
// ventana abierta según la ruta y un dock con redes sociales.
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaMoon, FaSun, FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa';
import { apps, appByPath } from './apps';
import Window from './Window';
import Dock from './Dock';
import { Plant, Sparkle } from './Decor';

import HomeView from '../views/HomeView';
import SobreMi from '../views/SobreMi';
import Experiencia from '../views/Experiencia';
import Habilidades from '../views/Habilidades';
import Proyectos from '../views/Proyectos';
import Precios from '../views/Precios';
import CV from '../views/CV';
import Contacto from '../views/Contacto';
import NotFound from '../views/NotFound';

const views = {
  '/sobre-mi': SobreMi,
  '/experiencia': Experiencia,
  '/habilidades': Habilidades,
  '/proyectos': Proyectos,
  '/precios': Precios,
  '/cv': CV,
  '/contacto': Contacto,
};

// Tema claro / oscuro, recordado en el navegador
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
  } catch {
    /* sin acceso a localStorage */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Clock = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const day = now.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' });
  const time = now.toLocaleTimeString('es-MX', { hour: 'numeric', minute: '2-digit' });
  return <span className="mb-clock">{day} · {time}</span>;
};

const Desktop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* sin acceso a localStorage */
    }
  }, [theme]);

  const path = location.pathname.replace(/\/+$/, '') || '/';
  const app = appByPath(path);
  const isHome = path === '/';
  const View = isHome ? HomeView : views[path] || NotFound;
  const title = isHome ? 'inicio.' : app?.title || 'ups.';

  // Escape cierra la ventana y regresa al inicio
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && !isHome) navigate('/');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isHome, navigate]);

  return (
    <div className={`desktop${isHome ? ' is-home' : ' has-window'}`}>
      {/* Barra superior */}
      <header className="menubar">
        <Link to="/" className="mb-brand" aria-label="Ir al inicio">
          <img src="/assets/lolosdev.svg" alt="" />
          <span>michelle<b>.os</b></span>
        </Link>
        <div className="mb-right">
          <span className="mb-status hide-sm" aria-hidden="true">
            <FaWifi /> <FaBatteryThreeQuarters />
          </span>
          <Clock />
          <button
            className="mb-theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* Cuarto: pared, piso y decoración */}
      <div className="room" aria-hidden="true">
        <div className="wall" />
        <div className="floor" />
        <Sparkle className="wall-sparkle s1" />
        <Sparkle className="wall-sparkle s2" />
        <Sparkle className="wall-sparkle s3" />
        <Plant className="room-plant" />
        <div className="melody-spot">
          <div className="rug" />
          <img className="melody" src="/assets/melody/melody-sentada.png" alt="" />
        </div>
      </div>

      {/* Íconos del escritorio */}
      <nav className="icons" aria-label="Secciones">
        {apps.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.35 }}
          >
            <Link to={a.path} className={`app-icon${path === a.path ? ' active' : ''}`}>
              <span className="app-tile">
                <img src={a.icon} alt="" loading="lazy" />
              </span>
              <span className="app-label">{a.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Ventana activa */}
      <main className="window-area">
        <AnimatePresence mode="wait">
          <Window key={path} title={title} isHome={isHome} wide={path === '/precios' || path === '/contacto'}>
            <View />
          </Window>
        </AnimatePresence>
      </main>

      <Dock />
    </div>
  );
};

export default Desktop;
