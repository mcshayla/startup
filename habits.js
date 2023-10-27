

function getPlayerName() {
    const userName = localStorage.getItem('userName') ?? 'Mystery player';
    const playerNameElement = document.getElementById('player-name');
    if (userName) {
      playerNameElement.textContent = userName;
    } else {
      playerNameElement.textContent = "Unknown User";
    }
  }

getPlayerName()


function habitInput() {
  const newHabitEl = document.querySelector("#newHabit");
  const timesTrackEl = document.querySelector("#timesTrack");
  const publicEl = document.querySelector("#public");
  const privateEl = document.querySelector("#private");
  localStorage.setItem("newHabit", newHabitEl.value);
  localStorage.setItem("timesTrack", timesTrackEl.value)
  localStorage.setItem("pOp", publicEl.checked ? "Public" : "Private");
  //localStorage.setItem("pOp", privateEl.value);
  //localStorage.setItem("pOp", publicEl.value);
  displayInput();
}


function displayInput() {
  const newHabit = localStorage.getItem('newHabit');
  const toTrack = localStorage.getItem('timesTrack');
  const pOp = localStorage.getItem('pOp');
  const playerNameElement = document.getElementById('progress_happening');
  playerNameElement.textContent = newHabit+ ' ' + toTrack + ' ' + pOp;
}


function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (progressBar.value < progressBar.max) {
    progressBar.value += 10; // Increase the value by 10 (adjust as needed)
  }
}

// Attach a click event listener to the button
const increaseButton = document.getElementById('increaseButton');
increaseButton.addEventListener('click', updateProgressBar);


