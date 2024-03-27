import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";import * as ReactDOM from 'react-dom/client';
import Inicio from './paginas/Inicio';
import Contact from './paginas/Contact';
import NoExiste from './paginas/NoExiste';

import { useEffect } from"react";
//Importamos de esta manera para evitar problemas de compatibilidad con webpack>=5
import Web3 from"web3";
const App=()=>{
  return(
    <Router>
      <Route exact path="/" component={ <Inicio /> } />
      <Route exact path="/contacto" component={ <Contact /> } />
      <Route path="*" component={ <NoExiste /> } />
    </Router>
  );
};
export default App;
