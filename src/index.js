import { renderAboutUs } from './renderAboutUs.js';
import { renderContactUs } from './renderContactUs.js';
import { renderGallery } from './renderGallery.js';
import { renderHome } from './renderHome.js';
import { renderMenu } from './renderMenu.js';
import './style.css';


// Make home page link access home-page content when clicked.
const home = document.querySelector(".home");
home.addEventListener("click", renderHome);

const menu = document.querySelector(".menu");
menu.addEventListener("click", renderMenu)

const aboutUs = document.querySelector(".about-us");
aboutUs.addEventListener("click", renderAboutUs)

const contact = document.querySelector(".contact");
contact.addEventListener("click", renderContactUs)

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", renderGallery)