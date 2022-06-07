const createNavBar = () => {
  const nav = document.createElement("nav");
  nav.innerHTML = `<ul>
  <li id="home">Home</li>
  <li id="menu">Menu</li>
  <li id="contact">Contact</li>
</ul>`;
  nav.classList.add("hide");
  document.body.insertBefore(nav, document.getElementById("content"));

  const mobileMenu = document.createElement("i");
  mobileMenu.setAttribute("class", "fas fa-bars");
  document.body.insertBefore(mobileMenu, document.getElementById("content"));
};

export default createNavBar;
