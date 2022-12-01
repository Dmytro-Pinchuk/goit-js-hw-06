const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.classList.add("item");
//   liEl.textContent = ingredient;

//   return liEl;
// });

// console.log(elements);
// // ingredientsEl.append(...elements);

const createIngredientsList = options => {
  return options.map(option => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = option;

    return liEl;
  })
};

const elements = createIngredientsList(ingredients);
console.log(elements);
ingredientsEl.append(...elements);