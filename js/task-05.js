const refs = {
  input: document.querySelector('#name-input'),
  display: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if(event.currentTarget.value.trim() === '') {
    refs.display.textContent = "незнакомец";
  } else {
    refs.display.textContent = event.currentTarget.value;
  }
};