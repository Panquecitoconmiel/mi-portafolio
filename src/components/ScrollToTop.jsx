// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

// Cada vez que cambia la ruta:
// 1. Sube la página al inicio (si no, se mantendría el scroll de la página anterior).
// 2. Refresca AOS, ya que los elementos [data-aos] de la nueva página son
//    nodos nuevos en el DOM y necesitan ser re-detectados para animarse.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    const timer = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
