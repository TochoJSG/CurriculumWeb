import {innerHeader} from './HeaderComponent.js';
import {innerSkills} from '/SkillsComponente.js';
import {innerFooter} from '/FooterComponente.js';
const app = ()=>{
    innerHeader();
    innerSkills();
    innerFooter();
};
document.addEventListener('DOMContentLoaded',()=>{ app });