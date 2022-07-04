import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const date = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    nowDate: date,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        console.log(selectedDates[0]);
    },
};

flatpickr("#datetime-picker", options);

console.log(date);
