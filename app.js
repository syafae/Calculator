import { Calculator } from "./calculator.js";

const operations = document.querySelectorAll("[data-operation]");
const numbers = document.querySelectorAll("[data-number]");
const del = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const output = document.querySelector("[data-output]");
const history = document.querySelector("[data-history]");
const equals = document.querySelector("[data-equals]");
const sign = document.querySelector("[data-sign]");
const calculator = new Calculator(output, history);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(e.target.innerText);
  })
);

operations.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculator.operationClicked(e);
  })
);

equals.addEventListener("click", (e) => {
  calculator.equalsClicked(e);
});

clear.addEventListener("click", (e) => {
  calculator.clear();
});

del.addEventListener("click", (e) => {
  calculator.delete();
});

sign.addEventListener("click", (e) => {
  calculator.sign();
});