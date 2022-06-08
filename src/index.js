import './styles/style.scss';
import createHomePage from './modules/homepage.js';
import createNavBar from './modules/navBar.js';
import { createMenuSection, getMenu } from './modules/menuSection.js';

window.addEventListener('DOMContentLoaded', () => {
  createNavBar();
  createHomePage();
  createMenuSection();
  getMenu('Vegan');

  const homePage = document.getElementById('home-page');
  homePage.classList.remove('hide');

  const menuSection = document.getElementById('menu-section');
  const navBar = document.querySelector('nav');
  const exitBtn = document.querySelector('.fa-times');
  const hamburgerMenu = document.querySelector('.fa-bars');

  const navList = [...document.querySelectorAll('li')];
  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        menuSection.classList.add('hide');
        navBar.classList.add('hide');
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        break;
      case 'menu':
        menuSection.classList.remove('hide');
        homePage.classList.add('hide');
        navBar.classList.add('hide');
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        break;
      case 'contact':
        break;
      default:
        homePage.classList.remove('hide');
        break;
    }
  }));
});
