// Declare global variables
let operator = '';
let previousvalue ='';
let currentvalue = '';

// Wait for the DOM content to load before executing the code
document.addEventListener("DOMContentLoaded", function(){
  
  // Store references to HTML elements
  let clear = document.querySelector(".data-del");
  let equal = document.querySelector(".span-equal");
  let decimal = document.querySelector(".decimal");
  
  let numbers = document.querySelectorAll(".data-number");
  let operators = this.querySelectorAll(".data-operation");
  
  let previousscreen = document.querySelector(".previous-operand");
  let currentscreen =  document.querySelector(".current-operand");
  
  // Add event listeners to number buttons
  numbers.forEach((number) => number.addEventListener("click", function(e) {
    handlenumber(e.target.textContent);
    currentscreen.textContent = currentvalue;
  }));
  
  // Add event listeners to operator buttons
  operators.forEach((op) => op.addEventListener("click", function(e) {
    handleoperator(e.target.textContent);
    previousscreen.textContent = previousvalue + " " + operator;
    currentscreen.textContent = currentvalue;
  }));
  
  // Add event listener to clear button
  clear.addEventListener("click", function(){
    previousvalue = '';
    currentvalue = '';
    operator = '';
    previousscreen.textContent = currentvalue;
    currentscreen.textContent = currentvalue;
  });
  
  // Add event listener to equal button
  equal.addEventListener("click", function(){
    if (currentvalue != '' && previousvalue != ''){
      calculate();
      previousscreen.textContent = '';
      currentscreen.textContent = previousvalue;
    }
  });
  
  // Add event listener to decimal button
  decimal.addEventListener("click", function(){
    adddecimal();
  });
});

// Function to handle number button clicks
function handlenumber(num){
  if (currentvalue.length <= 6){
    currentvalue += num;
  }
}

// Function to handle operator button clicks
function handleoperator(op){
  operator = op;
  previousvalue = currentvalue;
  currentvalue = '';
}

// Function to perform calculation
function calculate(){
  previousvalue = Number(previousvalue);
  currentvalue = Number(currentvalue);
  
  if (operator === "+"){
    previousvalue += currentvalue;
  } else if (operator === "-"){
    previousvalue -= currentvalue;
  } else if (operator === "÷"){
    if (currentvalue === 0) {
      return "Error: Cannot divide by zero";
    } else {
      previousvalue /= currentvalue;
    }
  } else if (operator === "*"){
    previousvalue *= currentvalue;
  } else {
    return "Error: Invalid operator";
  }
  
  previousvalue = roundnumber(previousvalue);
  previousvalue = previousvalue.toString();
  currentvalue = previousvalue.toString();
}

// Function to round a number to three decimal places
function roundnumber(num){
  return Math.round(num * 1000) / 1000;
}

// Function to add decimal point to current value
function adddecimal(){
  if (!currentvalue.includes(".")){
    currentvalue += '.';
  }
}
