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

      document.body.style.backgroundColor = getRandomHexColor();
    //   console.log('))');
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
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

