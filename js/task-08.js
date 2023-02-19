const formRef = document.querySelector('.login-form');
const fieldsRefs = formRef.querySelectorAll('input');

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const isCompleted = iaFormCompleted();

  if (isCompleted) {
    const theCompletedForm = {};
    theCompletedForm.email = formRef.firstElementChild.firstElementChild.value;
    theCompletedForm.password = formRef.firstElementChild.nextElementSibling.firstElementChild.value;
    console.log(theCompletedForm);
    formRef.reset();
  } else {
    alert('All form fields must be completed!');  
  }
  
  
});

function iaFormCompleted() {
  return fieldsRefs[0].value && fieldsRefs[1].value;
}