import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}
  

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const amount = Number(refs.form.elements.amount.value);
  const step = Number(refs.form.elements.step.value);
  let delay = Number(refs.form.elements.delay.value);

  for (let position = 1; position <= amount; position += 1) {
    delay += step;
  function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
  resolve ({ position, delay });
  } else { 
  reject ({ position, delay });
  }
    }, delay )
  })
}
  

  createPromise(position, delay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }
})
