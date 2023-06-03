let operator = '';
let previousvalue ='';
let currentvalue = '';
//these are three global variables we are going to try to maniuplate it





document.addEventListener("DOMContentLoaded", function(){
  //store all components on html in our js

let clear = document.querySelector(".data-del");
let equal = document.querySelector(".span-equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".data-number");
let operators = this.querySelectorAll(".data-operation");

let previousscreen = document.querySelector( ".previous-operand");
let currentscreen =  document.querySelector(".current-operand");

 numbers.forEach((number)=> number.addEventListener("click",function(e) { 
  handlenumber(e.target.textContent)
currentscreen.textContent = currentvalue


 



 }   )    )



 operators.forEach((op)=> op.addEventListener("click",function(e) {
  handleoperator(e.target.textContent)

  previousscreen.textContent = previousvalue + " " + operator;
  currentscreen.textContent = currentvalue;




}   )    )

clear.addEventListener("click",function(){
  previousvalue = '';
  currentvalue = '';
  operator = '';
  previousscreen.textContent = currentvalue;
  currentscreen.textContent = currentvalue;
}
)

equal.addEventListener("click", function(){

 if (currentvalue !='' && previousvalue != ''){
  
  calculate()
previousscreen.textContent = '';
currentscreen.textContent = previousvalue;
 }


})

decimal.addEventListener("click", function(){
  adddecimal();
})



})



function handlenumber(num){


if (currentvalue.length <= 6){
 currentvalue += num;
}


}


function handleoperator(op){
  operator = op;
  previousvalue = currentvalue;
  currentvalue = '';
}



function calculate(){
  previousvalue = Number(previousvalue);
  currentvalue = Number(currentvalue);

  if (operator=== "+"){
    previousvalue += currentvalue;
  
  } else if (operator=== "-"){
    previousvalue -= currentvalue;
  
  } else if (operator=== "÷"){
    if (currentvalue === 0) {
      return "Error: Cannot divide by zero";
    } else {
      previousvalue /= currentvalue;
    }
  
  } else if (operator=== "*"){
    previousvalue *= currentvalue;
  
  } else {
    return "Error: Invalid operator";
  }
previousvalue = roundnumber(previousvalue);
previousvalue = previousvalue.toString();
currentvalue = previousvalue.toString();


}



function roundnumber(num){
  return Math.round(num * 1000) / 1000;
}



function adddecimal(){
  if (!currentvalue.includes(".")){
    currentvalue += '.';
  }
}