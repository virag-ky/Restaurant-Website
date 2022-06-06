import "./styles/style.scss";

const sectionContainer = document.getElementById("content");

window.addEventListener("DOMContentLoaded", () => {
  const navBar = document.createElement("nav");
  navBar.innerHTML = `<ul>
    <li id="home">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact</li>
  </ul>`;
  document.body.insertBefore(navBar, sectionContainer);

  const navList = [...document.querySelectorAll("li")];
  navList.forEach((item) =>
    item.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "home":
          console.log("home");
          break;
        case "menu":
          console.log("menu");
          break;
        case "contact":
          console.log("contact");
          break;
        default:
          console.log("home");
          break;
      }
    })
  );
});
