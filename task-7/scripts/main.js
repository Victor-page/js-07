const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", increaseFontSize);
function increaseFontSize(event) {
  const inputValue = event.currentTarget.value;
  span.style.fontSize = `${inputValue}px`;
  console.log(span.style.fontSize);
}
