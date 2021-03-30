"use strict";

// 1. We need our calculator to calculate!
// 2. We need to assign values to each button
// 3. We need that value to input into the input box onclick
// 4. We need to make the sum happen on click of the equals button.
var equalsButton = document.querySelector(".button--equals");
var clearAllButton = document.querySelector(".button--clearall");
var clearLastButton = document.querySelector(".button--clearlast");
var numberButtons = document.querySelectorAll(".button--number");
var displayMain = document.getElementById("display-main"); // const displayTwo = document.getElementById("display-two");

var operatorButtons = document.querySelectorAll(".button--operator");
var displayOneNum = "";
var displayTwoNum = "";
var lastOperation = "";
var result = null; // let haveDot = false; 

numberButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    //onlclick add the numberButton innertext to displayTwoNum and update the displayMain value to equal displayTwoNum value// 
    displayTwoNum += event.target.innerText;
    displayMain.innerHTML = displayTwoNum;
  });
}); //onlclick of clear button, clear all the text within the display box.

clearAllButton.addEventListener("click", function (event) {
  displayMain.innerText = "0"; // displayTwo.innerText= "0";
}); //onlick of operator button perform math operation ....  if 
//the variables of displayOneNum and displayTwoNum and last operation have values
//else return displayTwoNum
//use parseFloat to convert innerText to a string 

operatorButtons.forEach(function (operation) {
  operation.addEventListener("click", function (event) {
    var operationName = event.target.innerText;

    if (displayOneNum && displayTwoNum && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayTwoNum);
    }

    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  displayOneNum += displayTwoNum + "" + name + "";
  displayMain.innerText = displayOneNum; // displayTwo.innerText = "";

  displayTwoNum = "";
} //create mathOperation to assign "X", "+", "-", "/"
//if last operation is equal to 
//X then times etc etc  


function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(displayTwoNum);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(displayTwoNum);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(displayTwoNum);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(displayTwoNum);
  }
} // onclick of equals button return the result


equalsButton.addEventListener("click", function (event) {
  if (!displayTwoNum || !displayOneNum) return;
  mathOperation();
  clearVar();
  displayMain.innerText = result; // displayTwoNum = result;

  displayOneNum = "";
});