const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
  output: document.querySelector('#boxes')
}

refs.createBtn.addEventListener('click', createBoxes);
refs.clearBtn.addEventListener('click', onClearOutput);

let amout = 0;
let width = 30;
let height = 30;


function createBoxes(amount) {
  amount = refs.input.value;
  
  for(let i = 0; i < amount; i +=1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = width + "px";
    createDiv.style.height = height + "px";
    createDiv.classList.add('created-box');
    refs.output.appendChild(createDiv);
    height +=10;
    width +=10;
  }
}


function onClearOutput() {
  refs.output.textContent = '';
  width = 30;
  height = 30;
}