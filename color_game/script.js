let quantity = 6;
let h1 = document.querySelector("h1");
let colors = generateRandomColors(quantity);
let resetBtn = document.querySelector("#reset");
let message = document.querySelector("#message");
let rgb = document.querySelector("#colorDisplay");
let squares = document.querySelectorAll('.square');
let hardBtn = document.querySelector("#hardButton");
let easyBtn = document.querySelector("#easyButton");
let pickedColor = pickColor();
rgb.textContent = pickedColor;


for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correcto!"
            message.style.visibility = "visible"
            message.style.color = "#63C306"
            resetBtn.textContent = "Jugar de nuevo?"
            changeColors(clickedColor)
            rgb.style.color = clickedColor
        } else {
            this.style.backgroundColor = "#0a1f44"
            message.textContent = "Volve a intentar!"
            message.style.visibility = "visible"
            message.style.color = "#ff062e"
        }
    });
}

resetBtn.addEventListener("click", function () {
    reset();
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    quantity = 6;
    reset();
});

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    quantity = 3;
    reset();
});

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correcto!"
            message.style.visibility = "visible"
            message.style.color = "#63C306"
            reset.textContent = "Jugar de nuevo!"
            changeColors(clickedColor)
            rgb.style.color = clickedColor
        } else {
            this.style.backgroundColor = "#0a1f44"
            message.textContent = "Volve a intentar!"
            message.style.visibility = "visible"
            message.style.color = "#ff062e"
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let pickedColor = colors[getRandomInt(quantity)]
    return pickedColor;
}

function randomColor() {
    let red = getRandomInt(256);
    let green = getRandomInt(256);
    let blue = getRandomInt(256);
    return `rgb(${red}, ${green}, ${blue})`
}

function generateRandomColors(quantity) {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
        arr[i] = randomColor()
    }
    return arr
}

function reset() {
    colors = generateRandomColors(quantity);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    resetBtn.textContent = "Nuevos Colores";
    message.textContent = "reset"; // escribo texto
    message.style.visibility = "hidden" // lo oculto para que no se mueva cuando se muestre el mensaje
    rgb.style.color = "white";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}