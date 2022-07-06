const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const submit = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return 12
  } else {
    return 14
  }

  
}


// console.log(submit);

delay.addEventListener('input', (e) => {
const delayNumber = e.target.value;
console.log(delayNumber);
})


step.addEventListener('input', (e) => {
  console.log(e.target.value);
})

amount.addEventListener('input', (e) => {
  console.log(e.target.value);
})

submit.addEventListener('click', (e) => {
  e.preventDefault();

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  console.log(234);
})


