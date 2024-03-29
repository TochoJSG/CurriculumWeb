import React from "react";
import '../estilos/Skills.css';
const Skills = props =>(
    <div className="pc_card">
		<div className="PcImgBx" data-text={ props.texto }>
			<img src={ require(`../img/${ props.img1 }.png`) } />
			<img src={ require(`../img/${ props.img2 }.png`) } />
		</div>
		<div className="PcContent">
			<div>
				<h3>{ props.title }</h3>
				<p>{ props.desc }</p>
				<a href="contacto.html">Contactar</a>	
			</div>
		</div>
	</div>
); 
export default Skills;