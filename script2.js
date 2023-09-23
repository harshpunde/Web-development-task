let timer;
let isRunning = false;
let seconds = 0;
let laps = [];
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById('startStop').innerText = 'Pause';
  }
  isRunning = !isRunning;
}

function updateTime() {
  seconds++;
  const display = document.getElementById('display');
  display.innerText = formatTime(seconds);
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  laps = [];
  lapCounter = 1;
  const display = document.getElementById('display');
  display.innerText = formatTime(seconds);
  document.getElementById('laps').innerHTML = '';
  document.getElementById('startStop').innerText = 'Start';
  isRunning = false;
}

function lap() {
  if (isRunning) {
    const lapTime = formatTime(seconds);
    laps.push({ lap: lapCounter, time: lapTime });
    lapCounter++;
    displayLaps();
  }
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function displayLaps() {
  const lapList = document.getElementById('laps');
  lapList.innerHTML = '';

  laps.forEach(lap => {
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lap.lap}: ${lap.time}`;
    lapList.appendChild(lapItem);
  });
}
