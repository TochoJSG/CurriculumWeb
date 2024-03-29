import React, { useState, useEffect } from 'react';
import '../App.css';
import Skills from "../componentes/Skills";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

const Inicio = () => {
  const [linkYT, setLinkYT] = useState(''); // State for YouTube link
  const [linkGit, setLinkGit] = useState(''); // State for GitHub link
  const [logo, setLogo] = useState('main'); // State for logo
  const [skillsData, setSkillsData] = useState([]); // State for skills data

  useEffect(() => {// fetching data
    fetchSkillsData()// fetch request
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills data:', error));
  },[]); // Empty dependency array to run only once on component mount

  const fetchSkillsData = async () => { // fetch skills data
    return [
      {
        texto: 'Lenguajes',
        img1: 'c',
        img2: 'java',
        title: 'Dev Lenguajes',
        desc: 'Java, C/C++/C#, javascript, python'
      },
      {
        texto: 'Base de Datos',
        img1: 'ser',
        img2: 'sql',
        title: 'Data Bases',
        desc: 'Sql with experience in SQL Server and MySql'
      },
      {
        texto: 'Frameworks',
        img1: 'web',
        img2: 'php',
        title: 'Frameworks & Librarys',
        desc: 'Nodejs applied to react and express'
      },
      {
        texto: 'Repositories',
        img1: 'desarrollo',
        img2: 'git',
        title: 'Repositoryes & Dev methologies',
        desc: 'GIT with GitHub all under Scrum Methologie'
      }
    ];
  };//cierra objeto

  return (
    <>
      <div className="App">
        <div className='sectionFS'>
          <Header linkYT={linkYT} linkGit={linkGit} logo={logo} img1='git' img2='yt' />
        </div>
        <div className='sectionFS'>
          <div className='container_pc'>
            {skillsData.map((skill, index) => (
              <Skills
                key={index}
                texto={skill.texto}
                img1={skill.img1}
                img2={skill.img2}
                title={skill.title}
                desc={skill.desc}
              />
            ))}
          </div>
        </div>
        <div className='sectionFS'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Inicio;