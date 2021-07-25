function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}

setInterval(updateClock, 1000);