const operations = document.querySelectorAll("[data-operation]");
const numbers = document.querySelectorAll("[data-number]");
const del = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
let output = document.getElementById("res");
const equals = document.querySelector("[data-equals]");
const sign = document.querySelector("[data-sign]");

class Calculator {
  constructor() {
    this.Operand = "";
    this.prevOpearnd = "";
    this.currentOperand = "";
  }

  display() {
    output.value = this.currentOperand;
  }
  appendNumber(number) {
    if (number === "0" && this.currentOperand === "") return;
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand += number;
    this.display();
  }
  clear() {
    this.currentOperand = "";
    this.prevOpearnd = "";
    this.operation = "";
    output.value = "";
  }
  sign() {
    if (this.currentOperand.includes("-")) {
      this.currentOperand = this.currentOperand.slice(1);
    } else {
      this.currentOperand = "-" + this.currentOperand;
    }
    this.display();
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.display();
  }
  doOper() {
    switch (this.operation) {
      case "+":
        this.currentOperand =
          Number(this.currentOperand) + Number(this.prevOpearnd);
        break;
      case "-":
        this.currentOperand =
          Number(this.currentOperand) - Number(this.prevOpearnd);
        break;
      case "*":
        this.currentOperand =
          Number(this.currentOperand) * Number(this.prevOpearnd);
        break;
      case "/":
        this.currentOperand =
          Number(this.currentOperand) / Number(this.prevOpearnd);
        break;
    }
    this.display();
  }
}

let calculator = new Calculator();

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(e.target.innerText);
  })
);
operations.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    calculator.prevOpearnd = calculator.currentOperand;
    calculator.operation = e.target.innerText;
    calculator.currentOperand = "";
    
  })
);

equals.addEventListener("click", (e) => {
  calculator.doOper();
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
