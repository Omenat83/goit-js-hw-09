import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
let endOfTimer;
let intervalId;

const settingsDate = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      endOfTimer = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

startBtn.disabled = true;
flatpickr('#datetime-picker', settingsDate);
startBtn.addEventListener('click', startBackTimer);

function startBackTimer() {
  startBtn.disabled = true;
  intervalId = setInterval(backTimer, 1000);
}

function backTimer() {
  const nowTime = Date.now();
  const diffTime = endOfTimer - nowTime;
  if (diffTime <= 0) {
    clearInterval(intervalId);
    console.log('stop');
  } else {
    let timeObject = convertMs(diffTime);
    console.log(timeObject);
    const { days, hours, minutes, seconds } = timeObject;
    daysTimer.textContent = addLeadingZero(days);
    hoursTimer.textContent = addLeadingZero(hours);
    minutesTimer.textContent = addLeadingZero(minutes);
    secondsTimer.textContent = addLeadingZero(seconds);
  };
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}