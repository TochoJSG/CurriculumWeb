import React from "react";
import '../estilos/Carousel.css';
function Carousel(){
  function carouselInner(){
  const IMAGENES=['../img/main.jpg','../img/second.jpg','../img/third.jpg'];
  const TIEMPO_INTERVALO_MILESIMAS_SEG=5000;
  let posicionActual=0;
  let $imagen=document.querySelector('#imagen');
  let intervalo;intervalo=setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
  function pasarFoto(){
    if(posicionActual>=IMAGENES.length-1){
      posicionActual=0;}else{posicionActual++;}
      renderizarImagen();
    }
  function renderizarImagen(){
    $imagen.style.backgroundImage=`url(${IMAGENES[posicionActual]})`;
    $imagen.style.backgroundImage.objectFit({type:'cover',hideOverflow: true});
  }
  renderizarImagen();
}
  return(
  <div className="carousel-contendor" onLoad={ carouselInner }>
	  <div id="imagen"></div>
  </div>
  );
} 
export default Carousel;