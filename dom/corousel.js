const misDatos = [{
    pictureOne: './img/main.jpg',
    pictureTwo: './img/main.jpg',
    pictureThree: './img/main.jpg',
    fullName: 'Salgado Garcia Jorge Arturo,',
    mainName: 'Jorge',
    devBranch: 'Fullstack DEV',
    institute:'UPIICSA',
    university: 'IPN',
    carrera:'Lic. en Ciencias de la Informatica',
    languages: 'Java, JavaScript applied to Node for React and Express devs, SQL, also C++/C# and a little PHP & Python',
    aboutMe:'knowledge in Java with Maven and Spring, SQL also JavaScript applied to Node for React and Express devs, in addition C++/C#, PHP and a little Python'
}];
const carousel = `
<div id="carouselExampleDark" class="carousel carousel-dark slide">
	  <div class="carousel-indicators">
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
	  </div>
	  <div class="carousel-inner">
		<div class="carousel-item active" data-bs-interval="10000">
		  <img src="${misDatos.pictureOne}" class="d-block w-100" alt="Loading my Presentation picture...">
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
    //module.export ={carousel,misDatos};