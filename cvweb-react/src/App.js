import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import Contact from './paginas/Contact';
import NoExiste from './paginas/NoExiste';
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/contacto" element={ <Contact /> } />
        <Route path="*" element={ <NoExiste /> } />
      </Routes>
    </Router>
  );
};
export default App;