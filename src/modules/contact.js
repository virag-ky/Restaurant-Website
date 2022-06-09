const createContactPage = () => {
  const contactPage = document.createElement("section");
  contactPage.setAttribute("id", "contact-page");
  contactPage.innerHTML = `<h2>Fresh Cuisine</h2>
  <p></p>
  
  `;
  document.getElementById("content").appendChild(contactPage);
};

export default createContactPage;
