const firstValue = document.getElementById("first-value");
const secondValue = document.getElementById("second-value");
const getResult = document.getElementById("calculate-result");

const firstEnteredValue=()=>{
    return parseFloat(firstValue.value);
}

const secondEnteredValue=()=>{
    return parseFloat(secondValue.value);
}
const printResult = (operator) => {
  switch (operator) {
    case "+":
      getResult.innerHTML =
        "Result:" +
        (firstEnteredValue() + secondEnteredValue()).toFixed(2);
      break;
    case "-":
      getResult.innerHTML =
        "Result:" +
        (firstEnteredValue() - secondEnteredValue()).toFixed(2);
      break;
    case "*":
      getResult.innerHTML =
        "Result:" +
        (firstEnteredValue() * secondEnteredValue()).toFixed(2);
      break;
    case "/":
      getResult.innerHTML =
        "Result:" +
        (firstEnteredValue() / secondEnteredValue()).toFixed(2);
      break;
  }
};

const add = () => {
  printResult("+");
};
const subtraction = () => {
  printResult("-");
};
const multiplication = () => {
  printResult("*");
};
const division = () => {
  printResult("/");
};
