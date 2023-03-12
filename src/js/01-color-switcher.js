const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
}


refs.start.addEventListener('click', onSwitcherStart);
refs.stop.addEventListener('click', onSwitcherStop);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onSwitcherStart() {
    intervalId = setInterval(() => {
    window.document.body.style.background = getRandomHexColor();
    }, 1000);
    refs.start.disabled = true;
    refs.stop.disabled = false;
}

function onSwitcherStop() {
    clearInterval(intervalId);
    refs.stop.disabled = true;
    refs.start.disabled = false;
 }