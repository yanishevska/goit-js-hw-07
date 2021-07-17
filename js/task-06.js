const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', checkInput);

function checkInput(event) {
      if (Number(event.currentTarget.getAttribute('data-length')) === event.currentTarget.value.length) {
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid')
      }
      else {
    event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
  }
};