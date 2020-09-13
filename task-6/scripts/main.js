const input = document.querySelector("[data-length]");

// console.log(input.dataset.length);

input.addEventListener("change", compare);
function compare(event) {
  const inputedValueLength = event.currentTarget.value.length;
  console.log(inputedValueLength);
  if (input.dataset.length >= inputedValueLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
