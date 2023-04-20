import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  let delayValue = Number(event.target.elements.delay.value);
  const stepValue = Number(event.target.elements.step.value);
  const amountValue = Number(event.target.elements.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }

  event.target.reset();
}