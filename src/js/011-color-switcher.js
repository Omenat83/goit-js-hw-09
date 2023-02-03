const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColorized = document.querySelector("body");
let intervalId = null;
let isActive = false;

startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval (() => {
        bodyColorized.style.backgroundColor = getRandomHexColor();
        console.log("new color");
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    isActive = false;
    clearInterval(intervalId);
    console.log("stop changes");
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

