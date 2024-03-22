import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <div className='sectionFS'>
        <Header linkYT='gfghj' linkGit='jhgghj' logo='main' img1='git' img2='yt' /> 
      </div>
      <div className='sectionFS'>
        <div className='container_pc'>
          <Skills texto='Lenguajes' 
          img1='c' img2='java'
          title='Dev Lenguajes' desc='Java, C,C++,C#' />
          <Skills texto='Base de Datos' 
          img1='ser' img2='sql'
          title='Data Bases' desc='Sql with experience in SQL Server, MySql' />
          <Skills texto='Frameworks' 
          img1='web' img2='php'
          title='Frameworks & Librarys' desc='Nodejs applied to react and express' />
          <Skills texto='Repositories' 
          img1='desarrollo' img2='git'
          title='Repositoryes & Dev methologies' desc='Scrum Development ' />
        </div>
      </div>
      <div className='sectionFS'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
