//addition
function add(a, b) {
    return a + b;
  }

  
  //subtraction
  function subtract(a, b) {
    return a - b;
  }

  
  //multiplication

  function multiply(a, b) {
    return a * b;
  }

  
  //Division

  function divide(a, b) {
    if (b === 0) {
      console.error("Error: Division by zero");
      return;
    }
    return a / b;
  }

  

  console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 7)); // Output: 3
console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5
console.log(divide(8, 0)); // Output: Error: Division by zero



// Variable for the first number
let firstNumber = 3;

// Variable for the operator
let operator = "+";

// Variable for the second number
let secondNumber = 5;



function operate(operator, num, num2) {
switch (operator){
    case "+":
        return add (num,num2);
    case "-":
     return subtract (num,num2);
     case '*':
        return multiply(num, num2);
      case '/':
        return divide(num, num2);

    default:
    console.error("operator not found")
    return null;


}

}

console.log(operate('+', 3, 5)); // Output: 8 (3 + 5)
console.log(operate('-', 10, 7)); // Output: 3 (10 - 7)



window.onload = function () {
  let screen  = document.getElementById('screen'),
      keypad  = document.getElementById('functions-one'),
      buttons = keypad.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
          screen.value = screen.value + this.innerHTML;
          return false;
      };
  }
};