import './styles/style.scss';
import createHomePage from './modules/homepage.js';

const sectionContainer = document.getElementById('content');

window.addEventListener('DOMContentLoaded', () => {
  createHomePage();
  const homePage = document.getElementById('home-page');
  homePage.classList.remove('hide');

  const mobileMenu = document.createElement('i');
  mobileMenu.setAttribute('class', 'fas fa-bars');
  document.body.insertBefore(mobileMenu, sectionContainer);

  const navBar = document.createElement('nav');
  navBar.innerHTML = `<ul>
    <li id="home">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact</li>
  </ul>`;
  navBar.classList.add('hide');
  document.body.insertBefore(navBar, sectionContainer);

  const navList = [...document.querySelectorAll('li')];
  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        break;
      case 'menu':
        break;
      case 'contact':
        break;
      default:
        homePage.classList.remove('hide');
        break;
    }
  }));
});
