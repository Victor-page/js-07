const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", putCurrentValue);

function putCurrentValue(event) {
  console.log(event.currentTarget.value);
  const inputValue = event.currentTarget.value;
  output.textContent = inputValue;
  if (!output.textContent) {
    output.textContent = "незнакомец";
  }
}
