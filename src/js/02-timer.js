import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerBoard = {
     days: document.querySelector('span[data-days]'),
     hours: document.querySelector('span[data-hours]'),
     minutes: document.querySelector('span[data-minutes]'),
     seconds: document.querySelector('span[data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
};

const dataInput = document.querySelector('#datetime-picker');
const fp = flatpickr(dataInput, options);


const startBtn = document.querySelector('button[data-start]');

startBtn.addEventListener('click', ontimer);


function ontimer() {
    const inputTime = new Date(dataInput.value).getTime();
    
    if (inputTime < Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
    } else {
    const inetvalId = setInterval(() => {
        const currentTime = Date.now();
        const timeLeft = inputTime - currentTime;
        const timeComponents = convertMs(timeLeft);
        markupTimer(timeComponents);
        if (timeLeft <= 0) {
            clearInterval(inetvalId);
            
        }
   }, 1000);
    }
}

function markupTimer({ days, hours, minutes, seconds }) {
    timerBoard.days.textContent = `${days}`;
    timerBoard.hours.textContent = `${hours}`;
    timerBoard.minutes.textContent = `${minutes}`;
    timerBoard.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) { 
    // Додає знак 0 спереду значення, якщо днів/годин/хвилин/секунд менше 10: 
    // { days: 0, hours: 0, minutes: 0, seconds: 2 } => { days: 00, hours: 00, minutes: 00, seconds: 02 }
    return String(value).padStart(2, '0');
}




