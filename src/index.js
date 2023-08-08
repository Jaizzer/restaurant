import { renderHome } from './renderHome.js';
import { renderMenu } from './renderMenu.js';
import './style.css';


// Make home page link access home-page content when clicked.
const home = document.querySelector(".home");
home.addEventListener("click", renderHome);

const menu = document.querySelector(".menu");
menu.addEventListener("click", renderMenu)