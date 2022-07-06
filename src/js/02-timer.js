import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const date = new Date();
const nowTime = date.getTime();

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
  return String(value).padStart(2, '0');
}

const options = {
  timerId: null,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (nowTime > selectedDates[0].getTime()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      console.log(selectedDates[0]);
      startBtn.disabled = false;

      startBtn.addEventListener('click', e => {
        e.preventDefault();

        startBtn.disabled = true;

        this.timerId = setInterval(() => {
          const dateNow = Date.now();
          // console.log(dateNow);

          const convertedDiffereceTime = convertMs(
            selectedDates[0].getTime() - dateNow);
          daysEl.textContent = addLeadingZero(convertedDiffereceTime.days);
          hoursEl.textContent = addLeadingZero(convertedDiffereceTime.hours);
          minutesEl.textContent = addLeadingZero(convertedDiffereceTime.minutes);
          secondsEl.textContent = addLeadingZero(convertedDiffereceTime.seconds);

          if (
            convertedDiffereceTime.days === 0 &&
            convertedDiffereceTime.hours === 0 &&
            convertedDiffereceTime.minutes === 0 &&
            convertedDiffereceTime.seconds === 0)
          {
            return clearTimeout(this.timerId);
          }
        }, 1000);
      });
    }
  },
};

flatpickr('#datetime-picker', options);
