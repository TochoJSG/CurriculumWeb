import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import Inicio from './paginas/Inicio';
//import Inicio from './paginas/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
<BrowserRouter><Inicio /></BrowserRouter>);*/
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);