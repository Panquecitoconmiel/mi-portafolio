// src/views/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="home-view">
    <h1 className="home-title">4<span>0</span>4</h1>
    <p className="home-text">Ups, esta ventana no existe.</p>
    <div className="home-actions center">
      <Link to="/" className="btn btn-pink">Volver al escritorio</Link>
    </div>
  </div>
);

export default NotFound;
