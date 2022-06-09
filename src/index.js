import './styles/style.scss';
import createHomePage from './modules/homepage.js';
import createNavBar from './modules/navBar.js';
import { createMenuSection, getMenu } from './modules/menuSection.js';
import createContactPage from './modules/contact.js';

window.addEventListener('DOMContentLoaded', () => {
  createNavBar();
  createHomePage();

  const homePage = document.getElementById('home-page');
  const navBar = document.querySelector('nav');
  const exitBtn = document.querySelector('.fa-times');
  const hamburgerMenu = document.querySelector('.fa-bars');

  const navList = [...document.querySelectorAll('li')];
  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        } else if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      case 'menu':
        createMenuSection();
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        getMenu('Vegan');
        homePage.classList.add('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      case 'contact':
        createContactPage();
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        homePage.classList.add('hide');
        if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      default:
        break;
    }
  }));
});
