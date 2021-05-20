const refs = {
  input: document.querySelector('#name-input'),
  display: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if(event.currentTarget.value === '') {
    refs.display.textContent = "незнакомец";
  } else {
    refs.display.textContent = event.currentTarget.value;
  }
};