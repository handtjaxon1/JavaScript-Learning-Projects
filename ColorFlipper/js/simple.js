const simpleColors = ["green", "red", "rgba(133,122,200)", "#f1f1f1"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // Get a random number between 0 and the length of our simpleColors array to use to pick a random color
    const randomNumber = getRandomNumber();
    console.log("Random Number: %s", randomNumber);

    document.body.style.backgroundColor = simpleColors[randomNumber];
    color.textContent = simpleColors[randomNumber]; // Displays the chosen color
})

function getRandomNumber() {
    return Math.floor(Math.random() * simpleColors.length);
}