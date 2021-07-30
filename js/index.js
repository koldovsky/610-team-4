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

//Counter
const discountEndDate = new Date(1668583980000);

const counterDays = document.getElementById('counter-days');
const counterHours = document.getElementById('counter-hours');
const counterMinutes = document.getElementById('counter-minutes');
const counterSeconds = document.getElementById('counter-seconds');

function discoutCounter() {
  const now = new Date();
  const difference = discountEndDate - now;
  const seconds = difference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  const days = Math.floor(hours / 24);
  const hoursLeft = Math.floor(hours - days * 24);
  const minutesLeft = Math.floor(minutes - hoursLeft * 60 - days * 24 * 60);
  const secondsLeft = Math.floor(seconds - minutesLeft * 60 - hoursLeft * 3600 - days * 24 * 3600);

  counterDays.innerText = days;
  counterHours.innerText = hoursLeft;
  counterMinutes.innerText = minutesLeft;
  counterSeconds.innerText = secondsLeft;
}
discoutCounter();

setInterval(discoutCounter, 1000);



