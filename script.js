const datetimeInput = document.getElementById('datetime-input');
const startBtn = document.getElementById('start-btn');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let countdownInterval;

startBtn.addEventListener('click', () => {
  const targetDate = new Date(datetimeInput.value);
  if (isNaN(targetDate.getTime())) {
    alert('Please enter a valid date in the format dd/mm/yyyy');
    return;
  }

  clearInterval(countdownInterval);
  startCountdown(targetDate);
});

function startCountdown(targetDate) {
  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      displayTimeRemaining(0, 0, 0, 0);
      alert('GAME OVER');
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    displayTimeRemaining(days, hours, minutes, seconds);
  }, 1000);
}

function displayTimeRemaining(days, hours, minutes, seconds) {
  daysDisplay.textContent = days;
  hoursDisplay.textContent = hours;
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
}
