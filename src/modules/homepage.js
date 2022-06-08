const createHomePage = () => {
  const homePage = document.createElement("section");
  homePage.classList.add("hide");
  homePage.setAttribute("id", "home-page");
  homePage.innerHTML = `<h1>Fresh Cuisine</h1>
  <p id="welcome">Discover our delicious menu made with fresh ingredients.</p>
  `;
  document.getElementById("content").appendChild(homePage);
};

export default createHomePage;
