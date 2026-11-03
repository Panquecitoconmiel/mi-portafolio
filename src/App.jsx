// src/App.jsx
// Todas las rutas muestran el escritorio; la ruta decide qué ventana está abierta.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Desktop from './desktop/Desktop';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Desktop />} />
    </Routes>
  );
}

export default App;
