import { renderHome } from './renderHome';
import { renderMenu } from './renderMenu';
import './style.css';

// Make home page link access home-page content when clicked.
const home = document.querySelector(".home");
home.addEventListener("click", renderHome);

const menu = document.querySelector(".menu");
menu.addEventListener("click", renderMenu)