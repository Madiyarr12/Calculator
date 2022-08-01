const calcInput = document.querySelector("#calc-input");
const btnEqual = document.querySelector("button");

function addInput(event) {
  console.log(event.textContent);
  calcInput.value += event.textContent;
  if (event.textContent === "C") {
    calcInput.value = "";
  }
}
btnEqual.addEventListener("click", function () {
  calcInput.value = eval(calcInput.value);
});
