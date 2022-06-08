const createMenuSection = () => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("hide");
  menuSection.setAttribute("id", "menu-section");
  menuSection.innerHTML = `<h2>Menu</h2>
  `;
  document.getElementById("content").appendChild(menuSection);
};

export default createMenuSection;
