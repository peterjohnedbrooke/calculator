// 1. We need our calculator to calculate!
// 2. We need to assign values to each button
// 3. We need that value to input into the input box onclick
// 4. We need to make the sum happen on click of the equals button.

const equalsButton = document.querySelector(".button--equals");
const clearAllButton = document.querySelector(".button--clearall");
const clearLastButton = document.querySelector(".button--clearlast");
const numberButtons = document.querySelectorAll(".button--number");
const displayTwo = document.getElementById("display-two");
const displayOne = document.getElementById("display-one");
const operatorButtons = document.querySelectorAll(".button--operator");

let displayOneNum = "";
let displayTwoNum = "";
let lastOperation = "";
let result = null; 
// let haveDot = false; 


numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      //onlclick add the numberButton innertext to displayTwoNum and update the displayMain value to equal displayTwoNum value// 
      displayTwoNum += event.target.innerText;
      displayTwo.innerHTML = displayTwoNum;
    })
});

//onlclick of clear button, clear all the text within the display box.
clearAllButton.addEventListener("click", (event) => {
  displayTwo.innerText = "0";
  displayOne.innerText = "0";
  displayTwoNum = "";
  displayOneNum = "";
  result = "";
});

clearLastButton.addEventListener("click", (event) => {
  displayTwo.innerText = "";
  displayTwoNum = "";
})

//onlick of operator button perform math operation ....  if 
//the variables of displayOneNum and displayTwoNum and last operation have values
//else return displayTwoNum
//use parseFloat to convert innerText to a string 

operatorButtons.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    if (!displayTwoNum) return;  
    const operationName = event.target.innerText;   
    if (displayOneNum && displayTwoNum && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayTwoNum);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  })
})

function clearVar(name = "") {
  displayOneNum += displayTwoNum + "" + name + "";
  displayOne.innerText = displayOneNum;
  displayTwo.innerText = "";
  displayTwoNum = "";
}


//create mathOperation to assign "X", "+", "-", "/"
//if last operation is equal to 
//X then times etc etc  

function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(displayTwoNum);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(displayTwoNum);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(displayTwoNum);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(displayTwoNum);
  }
}


// onclick of equals button return the result

equalsButton.addEventListener("click", (event) => {
  if (!displayTwoNum || !displayOneNum) return;
  mathOperation();
  clearVar();
  displayTwo.innerText = result;
  displayTwoNum = result;
  displayOneNum = "";
});





