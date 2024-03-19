import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Skills from './componentes/Skills';
function App() {
  return (
    <div className="App">
      <div className='sectionFS'>
        <Header />
      </div>
      <div className='sectionFS'>
        <div className='container_pc'>
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
      </div>
      <div className='sectionFS'>

      </div>
    </div>
  );
}

export default App;
