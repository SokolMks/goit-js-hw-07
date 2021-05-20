const categories = document.querySelector('#categories');
const navEl = document.querySelectorAll('.item');

navEl.forEach(item => 
  console.log(`
    Категория: ${item.querySelector('h2').textContent}
    Количество элементов: ${item.querySelectorAll('li').length}`)
  );