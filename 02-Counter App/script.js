let count = 0;

let countDisplay = document.querySelector(".count");
let increaseButton = document.querySelector(".increase");
let decreaseButton = document.querySelector(".decrease");
let resetButton = document.querySelector(".reset");
let reloadButton = document.querySelector(".reload");

increaseButton.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

decreaseButton.addEventListener("click", function () {
    count = count - 1;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

reloadButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});
