import "./styles/global.css";
import "./styles/nav.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import "./styles/queries.css";
import renderProjects from "./modules/projects";

const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const mobileMenuLinks = document.querySelectorAll(".side-nav-list-item");

console.log(mobileMenuLinks);

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.toggle("close");
    menu.classList.toggle("overlay");
  });
});

renderProjects();
