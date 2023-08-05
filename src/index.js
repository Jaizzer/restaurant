import { renderHome } from './renderHome';
import './style.css';

// Make home page link access home-page content when clicked.
const home = document.querySelector(".home");
home.addEventListener("click", renderHome);