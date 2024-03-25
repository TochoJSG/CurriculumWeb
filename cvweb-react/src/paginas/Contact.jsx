import React from "react";
//import '../estilos/estilo_contacto.css';
const Contact=()=>{
    return(
      <>
    <header id="main-header">
    <a id="logo-header" href="index.html">
    <img className="logo" src="main.jpg"  />
      <span className="site-name">JorgeSG</span><br/>
      <span className="site-desc">Fullstack</span>
    </a> 
    <nav>
      <ul>
        <li><a className="activeH" href="index.html">Main</a></li>
        <li>
          <a href="https://www.google.com/maps/dir//materias+primas+tocha/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x85ce03c248d73bdb:0xef38793f1e73fa6e?sa=X&ved=2ahUKEwj5rJbYlNvuAhUCJKwKHYXhD1wQ9RcwFXoECB0QBA">Google
            </a></li>
        <li><a href="nosotros_tocha.html">More about me</a></li>
        <li><a href="#"><ion-icon name="logo-github" style="font-size:2.1em;">Github</ion-icon></a></li>
      </ul>
    </nav>
  </header>
  <a href="https://api.whatsapp.com/send/?phone=525535143631&text=Gracias%20por%20escribir%20a%20materias%20primas%20tocha,%20%C2%BFcomo%20te%20podemos%20ayudar?"
  className="btn-wsp" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
  <div id="fb-root"></div>
  <div id="fb-customer-chat" className="fb-customerchat"></div>
  <div className="contactUs">
    <div className="title">	
    <button className="collapsible">Knowledges</button>
    <div className="content  content__">
      <ul className="menu">
        <li className="lista">Languages, Frameworks and librarys 
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
    <button className="btn btn-dm-dark">Ve nuestra tienda en Mercado Libre</button>
    </div>
    </div>
    <div className="contactBox">
      <div className="contact form">
        <h3>Send a Message</h3>
      <form className="contactoGMAIL">
        <div className="formBox">
          <div className="row50">
          <div className="inputBox">
            <span>Who are you?</span>
            <input className="name" type="text" placeholder="Whats your name?" required/>
          </div>
          <div className="inputBox">
            <span>Lastname</span>
            <input className="lname" type="text" placeholder="Hows your lastname(Optional)"/>
          </div>
          </div>
          
          <div className="row50">
          <div className="inputBox">
            <span>Mail</span>
            <input className="mail" type="email" placeholder="you@anything.com" required/>
          </div>
          <div className="inputBox">
            <span>Phonenumber</span>
            <input className="tel" type="number" placeholder="Give a number to contact later, whatsapp is better (optional)"/>
          </div>
          </div>
          <div className="row100">
          <div className="inputBox">
            <span>Message</span>
            <textarea className="msg" placeholder="Hello, thanks for watching, how can i help you?" required></textarea>
          </div>
          </div>
          <div className="row100">
          <div className="inputBox">
            <input type="submit" value="Send"/>
          </div>
          </div>
        </div>
      </form>
      </div>
      <div className="contact info">
        <h3>Contact Info</h3>
        <div className="infoBox">
        <div>
        <span><ion-icon name="location-outline"></ion-icon></span>
        <p>Mexico City, Iztapalapa, <br/><strong>CDMX</strong>
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
        <ul className="socialesContact">
          <li><a href="https://www.facebook.com/jorge.salgadogarcia.334"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="https://github.com/TochoJSG?tab=repositories"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://www.instagram.com/salgadogarciajorge/"><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
        </div>
      </div>
      <div className="contact map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.788628418763!2d-99.06939878578389!3d19.29155605017614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce03c248d73bdb%3A0xef38793f1e73fa6e!2sMateriasPrimas%20Tocha!5e0!3m2!1ses-419!2smx!4v1636081671822!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
  <footer>
    <div className="waves">
      <div className="wave" id="wave1"></div>
    </div>
    <ul className="social_icon">
      <li><a href="https://www.facebook.com/Tocha-106771524802265"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
    </ul>
    <ul className="menu_f">
      <li><a href="index.html">Main Page</a></li>
      <li><a href="me.html">About me</a></li>
      <li><a href="contacto.html">Contact</a></li>
    </ul>
    <div className="fb-comments" data-href="https://tochamateriasprimas.com/" data-width="100%" data-numposts="5"></div>
  </footer>
  <div className="copyrightText">
    <div className="grid-container">
    <div>
    <a href="http://tochamateriasprimas.com/"><img className="logo" src="COORP (2).jpg" />
      </a>
    </div>
    <div>
    <a href="www.admingtutoriales.com"><p>Adming Dev</p></a>
    <marquee width="60%" direction="left" scrollamount="6">
      WebSites develop under requeriments; back and front develoment; desktop apps; Software with frameworks using the most modern librarys and standards</marquee>
    </div>
    <div>
    <a href="http://admingtutoriales.com/"><img className="logo" src="adming.jpg" align="right"/>
      </a>
    </div>
    </div>
  </div>
  </>
  );
  };
export default Contact;