import React from "react";
import bootstrap from 'bootstrap' ;
import '../estilos/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const MyCarousel=props=>{
return(
  <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ require(`../img/${ props.im1 }.jpg`) } className="img-main d-block w-100" alt="loading..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{ props.fH5 }</h5>
        <h6>{ props.text1 }</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ require(`../img/${ props.im2 }.jpg`) } className="img-main d-block w-100" alt="loading..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{ props.sH5 }</h5>
        <h6>{ props.text2 }</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ require(`../img/${ props.im3 }.jpg`) } className="img-main d-block w-100" alt="loading..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{ props.tH5 }</h5>
        <h6>{ props.text3 }</h6>
      </div>
    </div>
  </div>
 </div>
  );
};
export default MyCarousel;