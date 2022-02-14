const hexColorValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    
    const hexColor = getRandomHexColor();
    console.log("Random Hex: %s", hexColor);

    //document.body.style.backgroundColor = randomHex;
    updateThemeColor(hexColor)
    color.textContent = hexColor; // Displays the chosen color
})

function getRandomHexColor() {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hexColorValues[Math.floor(Math.random() * hexColorValues.length)];
    }
    return hexColor;
}

function updateThemeColor(color) {
    document.documentElement.style.setProperty("--clr-primary", "var(--clr-dark)");
    document.documentElement.style.setProperty("--clr-secondary", color);
    document.documentElement.style.setProperty("--clr-neutral", color);
}