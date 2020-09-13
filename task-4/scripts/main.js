"use strict";
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// - Создай переменную counterValue в которой будет хранится текущее значение счетчика.

// - Создай функции increment и decrement для увеличения и уменьшения значения счетчика

// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

let valueSpan = document.querySelector("#value");
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

function decrement(event) {
  console.log(event.currentTarget); //button
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}
function increment(event) {
  console.log(event.currentTarget); //button
  counterValue += 1;
  valueSpan.textContent = counterValue;
}
