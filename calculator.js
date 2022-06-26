export class Calculator {
  constructor(output, history) {
    this.output = output;
    this.history = history;
    this.operation = "";
    this.prevOpearnd = "";
    this.currentOperand = "";
  }

  display() {
    if (this.currentOperand === "") {
      this.output.value = this.prevOpearnd;
    } else {
      this.output.value = this.currentOperand;
    }
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
    this.output.value = "";
    this.history.value = "";
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
  calculate() {
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
    this.prevOpearnd = this.currentOperand;
    this.currentOperand = "";
    this.display();
  }

  operationClicked(e) {
    if (this.prevOpearnd !== "") {
      this.calculate();
    } else {
      this.prevOpearnd = this.currentOperand;
      this.currentOperand = "";
    }
    this.operation = e.target.innerText;
    this.history.value = this.prevOpearnd + this.operation;
  }
  equalsClicked(e) {
    let x = this.prevOpearnd;
    let y = this.currentOperand;
    this.calculate();
    this.history.value = x + this.operation + y + "=";
  }
}
