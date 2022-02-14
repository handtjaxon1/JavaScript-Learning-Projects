const colorValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    
    const randomHex = getRandomHex();
    console.log("Random Hex: %s", randomHex);

    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex; // Displays the chosen color
})

function getRandomHex() {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += colorValues[Math.floor(Math.random() * colorValues.length)];
    }
    return hexColor;
}