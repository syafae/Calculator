import { Calculator } from "./calculator.js";

const operations = document.querySelectorAll("[data-operation]");
const numbers = document.querySelectorAll("[data-number]");
const del = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const output = document.getElementById("res");
const equals = document.querySelector("[data-equals]");
const sign = document.querySelector("[data-sign]");
const calculator = new Calculator(output);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(e.target.innerText);
  })
);
operations.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (calculator.prevOpearnd !== "") {
      calculator.calculate();
      calculator.operation = e.target.innerText;
    } else {
      calculator.prevOpearnd = calculator.currentOperand;
      calculator.operation = e.target.innerText;
      calculator.currentOperand = "";
    }
  })
);

equals.addEventListener("click", (e) => {
  calculator.calculate();
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
