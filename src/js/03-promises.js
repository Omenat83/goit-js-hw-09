import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout (() => {
      if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
  }}, delay);
});
};

const formCreate = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const promiseAmount = document.querySelector('input[name="amount"]');

formCreate.addEventListener('submit', test);

function test(evt) {
  evt.preventDefault();
  if (firstDelay.value <= 0 || delayStep.value <= 0 || promiseAmount.value <= 0) {
    Notify.failure("Введіть дані більші ніж 0");
    return;
  }
  let delayCreate = Number(firstDelay.value);

for (let i = 1; i <= promiseAmount.value; i += 1) {
  createPromise(i, delayCreate)
  .then(({position, delay}) => 
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({position, delay}) => 
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  delayCreate = delayCreate + Number(delayStep.value); 
  console.log(delayCreate);
};
}
