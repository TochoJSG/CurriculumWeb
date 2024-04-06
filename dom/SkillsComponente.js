const habilidades = [
    {
        classAdicional:'izquierda',
        im1:'img/c.png',
        im2:'img/java.png',
        encabezado:'Lenguajes',
        titulo:'Dev Lenguajes',
        contenido:'Java, C/C++/C#, javascript, python'
    },
    {
        classAdicional:'izquierda',
        im1:'img/ser.png',
        im2:'img/sql.png',
        encabezado:'Data Bases',
        titulo:'Data Bases',
        contenido:'Sql with experience in SQL Server and MySql'
    },
    {
        classAdicional:'derecha',
        im1:'img/web.png',
        im2:'img/php.png',
        encabezado:'Frameworks',
        titulo:'Frameworks & Librarys',
        contenido:'Nodejs applied to react and express'
    },
    {
        classAdicional:'derecha',
        im1:'img/desarrollo.png',
        im2:'img/git.png',
        encabezado:'Repositories',
        titulo:'Repositories & Dev methologies',
        contenido:'GIT with GitHub all under Scrum Methologie'
    }
];
const containerSkills = document.querySelector('.container_pc');
const skill = '';

const innerSkills = ()=>{
    habilidades.forEach(habilidad=>{
        skill = `
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
containerSkills.innerHTML = skill;
};
//export default innerSkills; 

/*
const habilidades = [
    {
        classAdicional:'izquierda',
        im1:'img/c.png',
        im2:'img/java.png',
        encabezado:'Lenguajes',
        titulo:'Dev Lenguajes',
        contenido:'Java, C/C++/C#, javascript, python'
    },
    {
        classAdicional:'izquierda',
        im1:'img/ser.png',
        im2:'img/sql.png',
        encabezado:'Data Bases',
        titulo:'Data Bases',
        contenido:'Sql with experience in SQL Server and MySql'
    },
    {
        classAdicional:'derecha',
        im1:'img/web.png',
        im2:'img/php.png',
        encabezado:'Frameworks',
        titulo:'Frameworks & Librarys',
        contenido:'Nodejs applied to react and express'
    },
    {
        classAdicional:'derecha',
        im1:'img/desarrollo.png',
        im2:'img/git.png',
        encabezado:'Repositories',
        titulo:'Repositories & Dev methologies',
        contenido:'GIT with GitHub all under Scrum Methologie'
    }
];
const containerSkills = document.querySelector('.container_pc');
let skill = '';
const fragmentSkill = document.createDocumentFragment();
const innerSkills = ()=>{
habilidades.forEach(habilidad=>{
    skill = `
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
const cloneSkill = skill.cloneNode(true);
fragmentSkill.appendChild(cloneSkill);
});
containerSkills.appendChild(fragmentSkill);
};
module.export = { innerSkills,habilidades }; 
*/