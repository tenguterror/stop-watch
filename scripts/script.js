let secondCount = 0;

let stopWatch;

const displayPara = document.querySelector('.clock');

const displayCount = () => {
    let hours = Math.floor(secondCount / 3600);
    let minutes = Math.floor((secondCount % 3600) / 60);
    let seconds = Math.floor(secondCount % 60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    secondCount++;
}

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

startBtn.onclick = () => {
    stopWatch = setInterval(displayCount, 1000);
    startBtn.disabled = true;
};

stopBtn.onclick = () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
};

resetBtn.onclick = () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayCount();
};

displayCount();