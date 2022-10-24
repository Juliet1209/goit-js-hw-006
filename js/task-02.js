const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')


let markupArr = [];
ingredients.forEach((ingridient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingridient;

  
  markupArr = [...markupArr, item]
})

list.append(...markupArr)

console.log (ingredients)