import "./styles/style.scss";
import createHomePage from "./modules/homepage.js";
import createNavBar from "./modules/navBar.js";

const sectionContainer = document.getElementById("content");

window.addEventListener("DOMContentLoaded", () => {
  createNavBar();
  createHomePage();

  const homePage = document.getElementById("home-page");
  homePage.classList.remove("hide");

  const navList = [...document.querySelectorAll("li")];
  navList.forEach((item) =>
    item.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "home":
          homePage.classList.remove("hide");
          break;
        case "menu":
          break;
        case "contact":
          break;
        default:
          homePage.classList.remove("hide");
          break;
      }
    })
  );
});
