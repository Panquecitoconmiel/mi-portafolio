// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container not-found">
      <h1 style={{ fontSize: '5rem', fontWeight: '800' }}>
        4<span className="gradient-text">0</span>4
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#43302E', opacity: 0.8 }}>
        Ups, esta página no existe.
      </p>
      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
