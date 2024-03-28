import React from 'react';
import ReactDOM from'react-dom';
import {createRoot} from 'react-dom/client';
//import { BrowserRouter as Router } from 'react-router-dom';  Importa BrowserRouter para el enrutamiento
import './index.css';
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
ReactDOM.root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
); 
/* */

//ReactDOM.createRoot.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
/*ReactDOM.createRoot.render(
  <StrictMode>
    <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </HashRouter>
  </StrictMode>,document.getElementById('root')
  );
  
  <React.StrictMode>
  */
/*root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);*/