import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onSearch);

let array = [];
let delay = null;
let step = null;
let position = 0;


function onSearch(e) {
  e.preventDefault();

  const input = e.currentTarget.elements;
  delay = Number(input.delay.value);
  step = Number(input.step.value);

  const inputValue = Number(input.amount.value);

  for (let i = 1; i <= inputValue; i += 1) {
  array.push(i)
  }
  
  array.map(number => {
    position = number;
    if (position !== 1) {
      delay += step;
    }  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  .finally(() => {
    refs.form.reset();
  });
  })
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);

});
}