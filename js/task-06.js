const validationInputRef = document.querySelector('#validation-input');

const dataLengthValue = validationInputRef.getAttribute('data-length');

validationInputRef.addEventListener('blur', () => {
  if (validationInputRef.value.length >= dataLengthValue) {
    validationInputRef.classList.add('valid');

  } else {
    validationInputRef.classList.add('invalid');
  }
})

validationInputRef.addEventListener('focus', () => {
  validationInputRef.classList.remove('valid', 'invalid');
})