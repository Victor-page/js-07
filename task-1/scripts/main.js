const items = document.querySelectorAll(".item");
console.log(`В списке ${items.length} категории.`);

items.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.children[1].children.length}`);
});
