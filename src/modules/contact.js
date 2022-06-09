const createContactPage = () => {
  const contactPage = document.createElement("section");
  contactPage.setAttribute("id", "contact-page");
  contactPage.innerHTML = `<h1>Fresh Cuisine</h1>
  <p id="welcome">Discover our delicious menu made with fresh ingredients.</p>
  `;
  document.getElementById("content").appendChild(contactPage);
};

export default createContactPage;
