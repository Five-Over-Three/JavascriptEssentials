// JavaScript source code
let count = 0; //initialise count to 0

function increaseCount() {
    count++; // increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; // display the count in the html
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}