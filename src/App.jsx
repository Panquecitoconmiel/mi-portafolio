// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ExperienciaPage from './pages/ExperienciaPage';
import HabilidadesPage from './pages/HabilidadesPage';
import ProyectosPage from './pages/ProyectosPage';
import CVPage from './pages/CVPage';
import ContactoPage from './pages/ContactoPage';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/experiencia" element={<ExperienciaPage />} />
              <Route path="/habilidades" element={<HabilidadesPage />} />
              <Route path="/proyectos" element={<ProyectosPage />} />
              <Route path="/cv" element={<CVPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
