const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
  const ingredientsItem = ingredients.map(elem => {
    const elemName = document.createElement('li');
    elemName.textContent = elem;
    return elemName;
});

ingredientsList.append(...ingredientsItem);