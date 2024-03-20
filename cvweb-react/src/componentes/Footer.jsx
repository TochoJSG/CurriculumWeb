import React from 'react';
import '../estilos/Footer.css';
const Footer = ()=>(
    <div className='cuerpoBody'>
    <footer>
	<div className="container_foo">
		<div className="sec aboutus">
			<h2>About Us</h2>
			<p>bla bla bla bla bla bla bla bla bla bla bla bla bla
			 bla bla bla bla bla bla bla bla bla bla bla bla bla 
			 bla bla bla bla bla bla bla bla bla bla bla bla bla 
			 bla bla bla bla bla bla bla bla bla bla bla bla</p>
			 <ul className="sci_">
				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-twiter" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
			 </ul>
		</div>
		<div className="sec quickLinks">
			<h2>Quick Links
				</h2>
			<ul>
				<li><a href="#">About</a></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Help</a></li>
				<li><a href="#">Terms & Consitions</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<div className="sec contact">
			<h2>Contact Info
				</h2>
			<ul className="info">
				<li>
					<span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
					<span>Ciudad de Mexico<br/><strong>CDMX</strong></span>
					</li>
				<li>
					<span><i className="fa fa-phone" aria-hidden="true"></i></span>
					<p><a href="tel: 5610936170">+52 5610936170</a><br/></p>
					</li>
				<li>
					<span><i className="fa fa-envelope" aria-hidden="true"></i></span>
					<p><a href="mailto:jjorgess081@gmail.com">jjorgess081@gmail.com</a></p>
					</li>
			</ul>
		</div>
	</div>
</footer>
<div className="copyrightText">
	<p>Copyright 2021 Adming Desarrollos. All Right Reserved.</p>
</div>
</div>
);
export default Footer;