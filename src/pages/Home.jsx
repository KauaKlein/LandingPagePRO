import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Transformando ideias em interfaces reais</h1>
        <p>Criação de experiências digitais modernas com foco em performance, usabilidade e design responsivo.</p>
        <Link to="/projeto" className="btn">Ver Projetos</Link>
      </div>

      <div className="home-img">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Tecnologia e código" />
      </div>
    </div>
  );
}
