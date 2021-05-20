const increase = document.querySelector('button[data-action="increment"]');
const decrease = document.querySelector('button[data-action="decrement"]');
const sum = document.querySelector('#value');

increase.addEventListener("click", ()=> {
  const number = parseInt(sum.textContent);
  sum.textContent = number + 1;
});

decrease.addEventListener("click", ()=> {
  const number = parseInt(sum.textContent);
  sum.textContent = number - 1;
});