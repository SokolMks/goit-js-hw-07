const refs = {
  scroll: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.scroll.addEventListener('input', fontChange);

function fontChange(event) {
  text.style.fontSize = `${refs.scroll.value}px`;
}