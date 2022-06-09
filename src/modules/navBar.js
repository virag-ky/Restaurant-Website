const createNavBar = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `<ul>
  <li id="home">Home</li>
  <li id="menu">Menu</li>
  <li id="contact">Contact</li>
</ul>`;

  document.body.insertBefore(nav, document.getElementById('content'));

  const mobileMenu = document.createElement('i');
  mobileMenu.setAttribute('class', 'fas fa-bars');
  document.body.insertBefore(mobileMenu, document.getElementById('content'));

  const exitBtn = document.createElement('i');
  exitBtn.setAttribute('class', 'fas fa-times');
  exitBtn.classList.add('hide');
  document.body.insertBefore(exitBtn, document.getElementById('content'));

  exitBtn.addEventListener('click', () => {
    nav.style.visibility = 'hidden';
    mobileMenu.classList.remove('hide');
    exitBtn.classList.add('hide');
  });

  mobileMenu.addEventListener('click', () => {
    nav.style.visibility = 'visible';
    mobileMenu.classList.add('hide');
    exitBtn.classList.remove('hide');
  });
};

export default createNavBar;
