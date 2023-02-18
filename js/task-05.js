const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const deafaultValue = 'Anonymous'

inputRef.addEventListener('input', () => {
  if (inputRef.value.length !== 0) {
    spanRef.textContent = inputRef.value;
  } else {
    spanRef.textContent = deafaultValue;

  }
})