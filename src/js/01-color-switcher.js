const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timer = null;

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

buttonStart.addEventListener('click', function() {
    this.disabled = true;
    buttonStop.disabled = false;
    changeBackgroundColor();
    timer = setInterval(changeBackgroundColor, 1000);
});

buttonStop.addEventListener('click', function() {
    this.disabled = true;
    buttonStart.disabled = false;
    clearInterval(timer);
}); 