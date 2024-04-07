<?php require 'dom/constantes.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8"> 
		<title>Jorge Salgado Garcia - Dev</title>
	<link href="estilos/estiloCurriculum.css" rel="stylesheet" type="text/css"/>
	<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&amp;version=v15.0" nonce="jfx8ZnYd"></script>
	<link href="<?php echo $bootstrap_version;?>" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div id="fb-root"></div><!-- Messenger plugin de chat Code -->
<div id="fb-customer-chat" class="fb-customerchat"></div>
<a href="<?php echo $whatsapp;?>" class="btn-wsp" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
<div class="containerFS">
	<div id="header" class="sectionFS"></div>
	<div class="sectionFS">
		<section class="services">
			<div class="container_pc aletarga"></div>
		</section>
	</div>
	<div class="sectionFS">
		<div class="cuerpoBody"></div>
	</div>
</div>	
</body>
<script src="dom/manejaHeader.js"></script>
<script src="dom/toggleHeader.js"></script>
<script src="dom/aletargaCont.js"></script>
<script src="dom/header.js"></script>
<script src="dom/HeaderComponent.js"></script>
</html>











