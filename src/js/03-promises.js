const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form')



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    resolve({position, delay});
  } else {
     reject({position, delay});
  }
  })

}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });



// console.log(submit);

delay.addEventListener('input', (e) => {
  return e.target.value;

})

// console.log(one);
step.addEventListener('input', (e) => {
  console.log(e.target.value);
})

amount.addEventListener('input', (e) => {
  console.log(e.target.value);
})

submit.addEventListener('click', (e) => {
  e.preventDefault()
});





