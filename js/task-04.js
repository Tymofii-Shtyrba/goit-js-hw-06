
const counter = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


let counterValue = 0


decrementButton.addEventListener('click', () => {
  counterValue --;
  counter.textContent = String(counterValue);
});
incrementButton.addEventListener('click', () => {
  counterValue ++;
  counter.textContent = String(counterValue);
});