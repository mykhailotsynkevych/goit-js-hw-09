import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
// const inputEl = document.querySelector('#datetime-picker');
// console.log(startBtn);
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
// console.log(nowTime);

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
    }

    startBtn.addEventListener('click', e => {
      e.preventDefault();
      startBtn.disabled = true;

      // console.log(convertedDiffereceTime)

      this.timerId = setInterval(() => {
        const convertedDiffereceTime = convertMs(
          nowTime - selectedDates[0].getTime()
        );
        daysEl.textContent = convertedDiffereceTime.days;
        hoursEl.textContent = convertedDiffereceTime.hours;
        minutesEl.textContent = convertedDiffereceTime.minutes;
        secondsEl.textContent = convertedDiffereceTime.seconds;
        // console.log(convertedDiffereceTime.seconds);
        console.log(convertedDiffereceTime);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
