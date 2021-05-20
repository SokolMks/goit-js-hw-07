const refs ={
  input: document.querySelector('#validation-input'),
};

console.log(refs.input.dataset.length);

refs.input.addEventListener('blur', onBlur);

function onBlur(event) {
  const requiredLength = parseInt(refs.input.dataset.length);
  if(event.currentTarget.value.length === requiredLength) {
    refs.input.classList.replace('invalid', 'valid');
  } else {
    refs.input.classList.add('invalid');
  }

}