import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
// console.log(startBtn);
startBtn.disabled = true;

const date = new Date();
const nowTime = date.getTime();
// console.log(nowTime);

const options = {
  isActive: false,
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

  },
};


flatpickr('#datetime-picker', options);

// console.log(date);
