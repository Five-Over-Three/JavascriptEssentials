// JavaScript source code
function performOperation() {
    //Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    //check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //perform the operation
        let result = multiply(num1, num2);

        //display the result
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

function multiply(a, b) {
    //pause execution
    debugger;

    //multiply the numbers
    return a * b;
}

function displayResult(result) {
    //display the result in the appropriate place
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}