import React from 'react';
import ReactDOM from'react-dom/client';
import {HashRouter} from'react-router-dom';
import {ChakraProvider} from"@chakra-ui/react";
import {StrictMode} from'react';
import {createRoot} from'react-dom/client';
import './index.css';
import App from './App';
import Inicio from './paginas/Inicio';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Inicio />); 
/*ReactDOM.createRoot.render(
  <StrictMode>
    <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </HashRouter>
  </StrictMode>,document.getElementById('root')
  );*/
/*root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);*/