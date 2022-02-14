const simpleColors = ["green", "red", "rgba(133,122,200)", "#c5c5c5"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // Get a random number between 0 and the length of our simpleColors array to use to pick a random color
    const randomNumber = getRandomNumber();
    console.log("Random Number: %s", randomNumber);

    updateThemeColor(simpleColors[randomNumber]);
    color.textContent = simpleColors[randomNumber]; // Displays the chosen color
})

function getRandomNumber() {
    return Math.floor(Math.random() * simpleColors.length);
}

function updateThemeColor(color) {
    document.documentElement.style.setProperty("--clr-primary", "var(--clr-dark)");
    document.documentElement.style.setProperty("--clr-secondary", color);
    document.documentElement.style.setProperty("--clr-neutral", color);
}