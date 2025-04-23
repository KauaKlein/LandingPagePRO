import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar.jsx';
import Home from './pages/Home';   
import Sobre from './pages/Sobre';
import Projeto from './components/projeto/Projeto.jsx';
import Contato from './pages/Contato.jsx';
import './App.css'; 

function App() {
  return (
   
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
     
  );
}

export default App;
