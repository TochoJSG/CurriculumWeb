import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Inicio from './paginas/Inicio';
import Contact from './paginas/Contact';
import NoExiste from './paginas/NoExiste';
const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="contacto" element={ <Contact /> } />
        <Route path="*" element={ <NoExiste /> } />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
