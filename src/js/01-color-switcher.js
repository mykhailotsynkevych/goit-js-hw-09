const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const colorShow = {
  timerId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.timerId = setInterval(() => {
      this.isActive = true;
      startBtn.style.opacity = "0.5";
      startBtn.style.transition = "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
      stopBtn.style.opacity = "1"

      document.body.style.backgroundColor = getRandomHexColor();
    //   console.log('))');
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    startBtn.style.opacity = "1"
    stopBtn.style.transition = "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
    stopBtn.style.opacity = "0.5"
  },
};

startBtn.addEventListener('click', () => {
  colorShow.start();
});

stopBtn.addEventListener('click', () => {
  colorShow.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

