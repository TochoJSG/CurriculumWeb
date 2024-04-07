<?php require 'dom/constantes.php'; ?>
<!doctype html>
<html lang="es">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZ3SZHVK3W"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-PZ3SZHVK3W');
    </script>
	<meta charset="UTF-8"> 
		<title>JorgeSG - Dev</title>
	<link rel="shortcut icon|apple-touch-icon|apple-touch-icon-precomposed" href="/favicon.ico" sizes="HeightxWidth|any" type="image/x-icon"/>
	<script src="push.min.js"></script>
	<link href="estilos/estilo_contacto.css"  rel="stylesheet" type="text/css"/>
	<link href="<?php echo $bootstrap_version;?>" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<script>
	document.addEventListener('DOMContentLoaded', function(){
		Push.create('Bienvenido',{
		body:'Hi, i am interested to hear about any proyect  ',
		icon:'img/main.jpg',
		timeout:6666,
		onClick: function(){
			window.location='https://github.com/TochoJSG?tab=repositories';
			this.close();
			}
		});
	});
</script>
<header id="main-header">
	<a id="logo-header" href="index.php">
	<img class="logo" src="img/main.jpg" align="left" width=90px height=90px/></a>
	<a id="logo-header" href="index.php">
		<span class="site-name">JorgeSG</span></br>
		<span class="site-desc" style="color:#fff;">Fullstack</span>
	</a> <!-- / #logo-header -->
	<nav>
		<ul>
			<li><a class="activeH" href="index.php">Main</a></li>
			<li><a href="<?php echo $google;?>">My Office</a></li>
			<li><a href="nosotros_tocha.html">More about me</a></li>
			<li><a href="#"><ion-icon name="logo-github" style="font-size:2.1em;">Github</ion-icon></a></li>
		</ul>
	</nav>
</header>
<a href="<?php echo $whatsapp;?>"
class="btn-wsp" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
<div id="fb-root"></div><!-- Messenger plugin de chat Code -->
<div id="fb-customer-chat" class="fb-customerchat"></div>
<script src="facebookJs.js"></script>
<div class="contactUs">
	<div class="title">	
	<button class="collapsible">Knowledges</button><!--Codigo 2-->
	<div class="content  content__">
		<ul class="menu">
			<li class="lista">Languages, Frameworks and librarys 
				</li>
			<li>JavaScript Backend node.js, Express
				</li>
			<li>JavaScript Frontend Reactjs with Boostrap 
				</li>
			<li>DOM handle HTML, CSS, Javascript, PHP
				</li>
			<li>SQL with experience in MySql and SQLserver 
				</li>
			<li>Basic knowledge in python
				</li>
			<li>C++, C#, JAVA
				</li>
		</ul>	
	<button class="btn btn-dm-dark">Ve nuestra tienda en Mercado Libre</button>
	</div>
	</div>
	<div class="contactBox">
		<div class="contact form">
			<h3>Send a Message</h3>
		<form class="contactoGMAIL">
			<div class="formBox">
				<div class="row50">
				<div class="inputBox">
					<span>Who are you?</span>
					<input class="name" type="text" placeholder="Whats your name?" required/>
				</div>
				<div class="inputBox">
					<span>Lastname</span>
					<input class="lname" type="text" placeholder="Hows your lastname(Optional)"/>
				</div>
				</div>
				
				<div class="row50">
				<div class="inputBox">
					<span>Mail</span>
					<input class="mail" type="email" placeholder="you@anything.com" required/>
				</div>
				<div class="inputBox">
					<span>Phonenumber</span>
					<input class="tel" type="number" placeholder="Give a number to contact later, whatsapp is better (optional)"/>
				</div>
				</div>
				<div class="row100">
				<div class="inputBox">
					<span>Message</span>
					<textarea class="msg" placeholder="Hello, thanks for watching, how can i help you?" required></textarea>
				</div>
				</div>
				<div class="row100">
				<div class="inputBox">
					<input type="submit" value="Send"/>
				</div>
				</div>
			</div>
		</form>
<script src="https://smtpjs.com/v3/smtp.js"></script>	
<script src="mailTocha.js"></script>
		</div>
		<div class="contact info">
			<h3>Contact Info</h3>
			<div class="infoBox">
			<div>
			<span><ion-icon name="location-outline"></ion-icon></span>
			<p>Mexico City, <br><strong>CDMX</strong>
				</p>
			</div>
			<div>
			<span><ion-icon name="mail-outline"></ion-icon></span>
			<a href="mailto:jjorgess081@gmail.com">jjorgess081@gmail.com
				</a>
			</div>
			<div>
			<span><ion-icon name="call-outline"></ion-icon></span>
			<a href="tel:+525517971706">+52 55 17 97 17 06
				</a>
			</div>
			<ul class="socialesContact">
				<li><a href="<?php echo $miFacebook;?>"><ion-icon name="logo-facebook"></ion-icon></a></li>
				<li><a href="https://github.com/TochoJSG?tab=repositories"><ion-icon name="logo-github"></ion-icon></a></li>
				<li><a href="https://www.instagram.com/salgadogarciajorge/"><ion-icon name="logo-instagram"></ion-icon></a></li>
				</ul>
			</div>
		</div>
		<div class="contact map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.788628418763!2d-99.06939878578389!3d19.29155605017614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce03c248d73bdb%3A0xef38793f1e73fa6e!2sMateriasPrimas%20Tocha!5e0!3m2!1ses-419!2smx!4v1636081671822!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
		</div>
	</div>
</div>
<footer>
	<div class="waves">
		<div class="wave" id="wave1"></div>
	</div>
	<ul class="social_icon">
		<li><a href="<?php echo $facebook;?>"><ion-icon name="logo-facebook"></ion-icon></a></li>
		<li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
		<li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
	</ul>
	<ul class="menu_f">
		<li><a target="_self" href="index.php">Main Page</a></li>
		<li><a href="me.html">About me</a></li>
		<li><a target="_self" href="contacto.php">Contact</a></li>
	</ul>
	<div class="fb-comments" data-href="https://tochamateriasprimas.com/" data-width="100%" data-numposts="5"></div>
</footer>
<div class="copyrightText">
	<div class="grid-container">
	<div>
	<a href="http://tochamateriasprimas.com/"><img class="logo" src="img/adming.jpg" align="left"/>
		</a>
	</div>
	<div>
	<a href="www.admingtutoriales.com"><p>Adming Dev</p></a>
	<marquee width="60%" direction="left" scrollamount="6">
		WebSites develop under requeriments; back and front develoment; desktop apps; Software with frameworks using the most modern librarys and standards</marquee>
	</div>
	<div>
	<a href="http://admingtutoriales.com/"><img class="logo" src="img/main.jpg" align="right"/>
		</a>
	</div>
	</div>
</div>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src="dom/colaContact.js"></script>
</body>
</html>
