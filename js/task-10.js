function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const userInputRef = document.querySelector('#controls').firstElementChild;
const boxesRef = document.querySelector('#boxes');


createButtonRef.addEventListener('click', () => {
  createBoxes(Number(userInputRef.value));
})

destroyButtonRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
})

function createBoxes(quantity) {
  const elementsArray = [];
  for (let i = 0; i < quantity; i++) {
    const newDiv = document.createElement('div');
    const randomColor = getRandomHexColor()
    newDiv.style.backgroundColor = randomColor;
    newDiv.style.width = 30 + 10 * i + 'px';
    newDiv.style.height = 30 + 10 * i + 'px';
    elementsArray.push(newDiv);
  }
  boxesRef.append(...elementsArray);
}