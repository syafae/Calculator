export class Calculator {
  constructor(output) {
    this.output = output;
    this.Operand = "";
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
}
