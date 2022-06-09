const createContactPage = () => {
  const contactPage = document.createElement("section");
  contactPage.setAttribute("id", "contact-page");
  contactPage.innerHTML = `<div id="slogan"><h2>Fresh Cuisine</h2>
  <p>Fresh food. Fresh ideas.</p></div>
  <div id="opening-hours">
    <h2>Open Hours</h2>
    <ul>
      <li>Mon-Fri: 9 AM - 6 PM</li>
      <li>Saturday: 9 AM - 4 PM</li>
      <li>Sunday: 9 AM - 2 PM</li>
    </ul>
  </div>
  <div id="contact-us">
    <h2>Contact Us</h2>
    <ul>
      <li>123 Sample street, New York, 10014</li>
      <li>Email: <span>sample@example.com</span></li>
      <li>Telephone: <span>+1(500)123-456</span></li>
    </ul>
  </div>
  <div id="subscribe">
    <h2>Subscribe Newsletter</h2>
    <input type="email" placeholder="Email">
    <button id="submit">Subscribe</button>
  </div>
  <footer>
    <p>2022 <i class="far fa-copyright"></i> Fresh Cuisine | Powered by Fresh Life</p>
    <ul id="social-icons">
      <i><i class="fa fa-facebook"></i></i>
      <i><i class="fa fa-twitter"></i></i>
      <i><i class="fa fa-linkedin"></i></i>
      <i><i class="fa fa-instagram"></i></i>
    </ul>
  </footer>
  `;
  document.getElementById("content").appendChild(contactPage);
};

export default createContactPage;
