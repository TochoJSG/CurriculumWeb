import React from 'react';
import MyCarousel from './MyCarousel';
import '../estilos/Header.css';

function Header(props){
const menuToggle=()=>{
	menuToggle.classList.toggle('active');
	//navigation.classList.toggle('active');
	};
const toggleMenu=()=>{
	menuToggle.classList.remove('active');
	//navigation.classList.remove('active');
	};
const toggle=()=>{
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
};
return(
<div className="sectionFS">
<section className="banner parallax" id="sec">
	<header>
		<a href={ props.linkYT } ><img className="logo" src={ require(`../img/${ props.logo }.jpg`) } /></a>
		<div id="toggle" onClick={ toggle }></div>
	</header>
	<div className="content">
	   <MyCarousel im1='main' fH5='Hello, I am Jorge' text1='I am Fullstack Developer' 
	   im2='second' sH5='My full name is Jorge Salgado Garcia' text2='My first job was a DB jr ' 
	   im3='third' tH5='Actually i am freelance and Seller' text3='I really enjoy programming but i like bussiness too' />
	<div className="contBtnLuz">
		<a id="contacto" target="_blank" href="contacto.html"><span>contactar</span></a>
	</div>
	</div>
	<ul className="sci">
		<li><a href={ props.linkGit }><img src={ require(`../img/${ props.img1 }.png`) } /></a></li>
		<li><a href={ props.linkYT }><img src={ require(`../img/${ props.img2 }.png`) } /></a></li>
	</ul>
</section>
<div id="navigation">
<ul>
	<li data-text="Home"><a target="_blank" href={props.linkGit} onClick={ toggleMenu }>Principal
		</a></li>
	<li data-text="About"><a id="buttonUs" href="#about" onClick={ toggleMenu }>Nosotros
		</a></li>
	<li data-text="Contact"><a id="buttonContact" href="contacto.html" onClick={ toggleMenu }>Contact
		</a></li>
</ul>
</div>
</div>
);
} 
export default Header;