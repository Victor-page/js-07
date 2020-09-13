import ingredients from "./ingredients.js";

const ul = document.querySelector("#ingredients");
const items = [];

createIngredientsItem(ingredients);

function createIngredientsItem(ingredients) {
  ingredients.map(function (ingredient) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    console.log(li);
    items.push(li);
    return items;
  });
}

ul.append(...items);
console.log(items);
