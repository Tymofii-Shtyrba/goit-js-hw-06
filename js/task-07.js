const fontSizeControlRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', () => {
  spanRef.style.fontSize = fontSizeControlRef.value + 'px';
})