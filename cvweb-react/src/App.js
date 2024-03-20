import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <div className='sectionFS'>
        <Header />
      </div>
      <div className='sectionFS'>
        <div className='container_pc'>
          <Skills texto='Lenguajes' 
          img1='img/c.png' img2='img/java.png'
          title='Dev Lenguajes' desc='Java, C,C++,C#' />
          <Skills texto='Base de Datos' 
          img1='img/ser.png' img2='img/sql.png'
          title='Data Bases' desc='Sql with experience in SQL Server, MySql' />
          <Skills texto='Frameworks' 
          img1='img/web.png' img2='img/php.png'
          title='Frameworks & Librarys' desc='Nodejs applied to react and express' />
          <Skills texto='Repositories' 
          img1='img/desarrollo.png' img2='img/git.png'
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
