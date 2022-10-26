const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fruit = document.querySelector('#ingredients');
const source = (items) => {
  return items.map((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('item');
    liElement.textContent = item;
    return liElement
  })
};

fruit.append(...source(ingredients));

    console.log(fruit);