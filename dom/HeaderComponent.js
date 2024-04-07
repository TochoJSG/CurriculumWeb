//import carousel from "./corousel";
//import {youtube,gitHub} from './constantes';
const youtube = 'https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A';
const gitHub = 'https://github.com/TochoJSG?tab=repositories';
const habilidades = [
    {
        classAdicional:'izquierda',
        im1:'./img/c.png',
        im2:'./img/java.png',
        encabezado:'Lenguajes',
        titulo:'Dev Lenguajes',
        contenido:'Java, C/C++/C#, javascript, python'
    },
    {
        classAdicional:'izquierda',
        im1:'./img/ser.png',
        im2:'./img/sql.png',
        encabezado:'Data Bases',
        titulo:'Data Bases',
        contenido:'Sql with experience in SQL Server and MySql'
    },
    {
        classAdicional:'derecha',
        im1:'./img/web.png',
        im2:'./img/php.png',
        encabezado:'Frameworks',
        titulo:'Frameworks & Librarys',
        contenido:'Nodejs applied to react and express'
    },
    {
        classAdicional:'derecha',
        im1:'./img/desarrollo.png',
        im2:'./img/git.png',
        encabezado:'Repositories',
        titulo:'Repositories & Dev methologies',
        contenido:'GIT with GitHub all under Scrum Methologie'
    }
];

const misDatos = {
    pictureOne: '../img/main.jpg',
    pictureTwo: '../img/main.jpg',
    pictureThree: '../img/main.jpg',
    fullName: 'Salgado Garcia Jorge Arturo,',
    mainName: 'Jorge',
    devBranch: 'Fullstack DEV',
    institute:'UPIICSA',
    university: 'IPN',
    carrera:'Lic. en Ciencias de la Informatica',
    languages: 'Java, JavaScript applied to Node for React and Express devs, SQL, also C++/C# and a little PHP & Python',
    aboutMe:'knowledge in Java with Maven and Spring, SQL also JavaScript applied to Node for React and Express devs, in addition C++/C#, PHP and a little Python'
};

const carousel = `
<div id="carouselExampleDark" class="carousel carousel-dark slide">
	  <div class="carousel-indicators">
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
	  </div>
	  <div class="carousel-inner">
		<div class="carousel-item active" data-bs-interval="10000">
		  <img src="./img/main.jpg" class="d-block w-100" alt="Loading my Presentation picture...">
		  <div class="carousel-caption d-none d-md-block">
			<h2>${misDatos.fullName}, <span>${misDatos.devBranch}</span></h2>
			<p>${misDatos.carrera}</p>
		  </div>
		</div>
		<div class="carousel-item" data-bs-interval="2000">
		  <img src="${misDatos.pictureTwo}" class="d-block w-100" alt="Loading my Presentation picture...">
		  <div class="carousel-caption d-none d-md-block">
			<h2>${misDatos.devBranch}, <span>${misDatos.fullName}</span></h2>
			<p>${misDatos.university}, <span>${misDatos.institute}</span></p>
		  </div>
		</div>
		<div class="carousel-item">
		  <img src="${misDatos.pictureThree}" class="d-block w-100" alt="Loading my Presentation picture...">
		  <div class="carousel-caption d-none d-md-block">
			<h2>${misDatos.fullName}, <span>${misDatos.devBranch}</span></h2>
			<p>${misDatos.languages}</p>
		  </div>
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>`;

const header = document.getElementById('header');
const componenteHeader = '';
const myCarousel = '';
const fragmento = document.createDocumentFragment();
const containerSkills = document.querySelector('.container_pc');
const skill = '';
const footer = document.querySelector('.cuerpoBody');

const innerHeader = () =>{
    header.innerHTML = `
    <section class="banner parallax cover" id="sec">
        <header>
            <a href="${ youtube }"><img class="logo" src="${misDatos.pictureOne}"/></a>
            <div id="toggle" onclick="toggle()"></div>
        </header>
        <div class="content">
            ${ myCarousel.innerHTML = carousel }
        <div class="contBtnLuz">
            <a id="contacto" target="_self" href="contacto.php"><span>Contactar</span></a>
        </div>
        
        </div>
        <ul class="sci">
            <li><a href="${ gitHub }"><img src="./img/git.png"/></a></li>
            <li><a href="${ youtube }"><img src="./img/yt.png"/></a></li><!--img-->
        </ul>
    </section>
    <div id="navigation">
        <ul>
            <li data-text="Home"><a target="_blank" href="${ gitHub } " onclick="toggleMenu();">Main
                </a></li>
            <li data-text="About Me"><a id="buttonUs" href="#about" onclick="toggleMenu();">More About Me
                </a></li>
            <li data-text="Contact Me"><a id="buttonContact" href="contacto.php" onclick="toggleMenu();">Contact
                </a></li>
        </ul>
    </div>`;
    //header.innerHTML = componenteHeader;
};
//export default innerHeader;

const innerSkills = ()=>{
    habilidades.forEach(habilidad=>{
        containerSkills.innerHTML += `
        <div class="pc_card ${habilidad.classAdicional}">
            <div class="PcImgBx" data-text="${habilidad.encabezado}">
                <img src="${habilidad.im1}"/>
                <img src="${habilidad.im2}"/>
            </div>
            <div class="PcContent">
                <div>
                    <h3>${habilidad.titulo}</h3>
                    <p>${habilidad.contenido}</p>
                    <a target="_self" href="contacto.php">Contacto</a>	
                </div>
            </div>
        </div>`;
    });
};

const innerFooter = ()=>{
	footer.innerHTML = `
    <div class='cuerpoBody'>
    <footer>
      <div class="container_foo">
		<div class="sec aboutus">
			<h2>About Me</h2>
			<p>I have some experiences as developer, i started as DBA jr, that was my first job, i have ${misDatos.aboutMe}, i ve developed modules under requeriments in Scrum, i ve gave support and another experiences...
				</p>
			<ul class="sci_">
				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
			 </ul>
		</div>
        <div class="flechaFooter">
            <div class="sec quickLinks">
                <h2>Links</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="contacto.php">Contact</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h2>Contact Info</h2>
                <ul>
                    <li>
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span>Ciudad de Mexico  <strong>CDMX</strong></span>
                        </li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <p><a href="tel:5610936170">+52 5610936170</a></p>
                        </li>
                    <li>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <p><a href="mailto:jjorgess081@gmail.com">jjorgess081@gmail.com</a></p>
                        </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
    <div class="copyrightText">
        <p>Copyright 2021 Adming Desarrollos. All Right Reserved.</p>
    </div>
</div>`;
};
const app = ()=>{
    innerHeader();
    innerSkills();
    innerFooter();
};
document.addEventListener('DOMContentLoaded',()=>{ app() });