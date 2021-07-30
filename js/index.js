// Lilya Clock
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}

setInterval(updateClock, 1000);

// Lilya Burger

function showBurger() {
  document.body.classList.toggle('lock');
  menu.classList.toggle('active');
}
const menu = document.querySelector('.mobile-header');

const menuButton = document.querySelector('.burger-button');
menuButton.addEventListener('click', showBurger);

const menuLinks = document.querySelectorAll('.mobile-header .burger-menu-content');
menuLinks.forEach((link) => link.addEventListener('click', onMenuClick));

function onMenuClick() {
  if (menu.classList.contains('active')) {
    document.body.classList.remove('lock');
    menu.classList.remove('active');
  }
}