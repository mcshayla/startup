

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


function PlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}


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
  createProgressBar();
  console.log('Explosion');
}


// Function to create a progress bar
function createProgressBar() {
  console.log("everything is fine.........");
  
  const inputName = localStorage.getItem('newHabit');
  
  const inputMaxValue = parseInt(localStorage.getItem('timesTrack'));
  //const pOp = localStorage.getItem('pOp');
  // let public = []; //////
  // console.log(pOp)

  // const inputName = document.getElementById('inputName').value;
  // const inputMaxValue = parseInt(document.getElementById('inputMaxValue').value);

  if (inputName && !isNaN(inputMaxValue)) {
    const progressBar = document.createElement('progress');
    progressBar.setAttribute('max', inputMaxValue);
    progressBar.value = 0;

    const progressBarLabel = document.createElement('div');
    progressBarLabel.textContent = inputName;

    const progressBarsContainer = document.getElementById('progressContainer');
    progressBarsContainer.appendChild(progressBarLabel);
    progressBarsContainer.appendChild(progressBar);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Increase Progress';
    progressBarsContainer.appendChild(increaseButton);
    increaseButton.addEventListener('click', updateProgressBar);

    // const resetButton = document.createElement('button');
    // increaseButton.textContent = 'Reset';
    // progressBarsContainer.appendChild(resetButton);
    // increaseButton.addEventListener('click', resetProgressBar);


    // if (pOp != 'Private') {
    //   updatePublic(inputName, inputMaxValue);
    // }
  } else {
    alert('Please enter a valid input name and max value.');
  }
}

// function updatePublic(inputName, inputMaxValue) {
//     const theName = this.PlayerName();
//     const newPublic = { name: theName, habit: inputName } 
    

// }

// Function to load progress bars from local storage on page load
function loadProgressBarsFromLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem('progressBarsData') || '[]');
  const progressBarsContainer = document.getElementById('progressContainer');

  for (const data of storedData) {
    const progressBar = document.createElement('progress');
    progressBar.setAttribute('max', data.max);
    progressBar.value = 0;

    const progressBarLabel = document.createElement('div');
    progressBarLabel.textContent = data.name;

    progressBarsContainer.appendChild(progressBarLabel);
    progressBarsContainer.appendChild(progressBar);
  }
}

// // Load progress bars on page load
window.addEventListener('load', loadProgressBarsFromLocalStorage);




function displayInput() {
  const newHabit = localStorage.getItem('newHabit');
  const toTrack = localStorage.getItem('timesTrack');
  const pOp = localStorage.getItem('pOp');
  const playerNameElement = document.getElementById('progress_happening');
  playerNameElement.textContent = newHabit+ ' ' + toTrack + ' ' + pOp;
}

function updateProgressBar() {
  const progressBar = this.previousElementSibling;
  if (progressBar.value < progressBar.max) {
    progressBar.value += 1;
  }
}
// function resetProgressBar() {
//   const progressBar = this.previousElementSibling;
//   if (progressBar.value < progressBar.max) {
//     progressBar.value -= 1;
//   }
// }


// function updateProgressBar() {
//   const progressBar = document.getElementById('progressBar');
//   if (progressBar.value < progressBar.max) {
//     progressBar.value += 10; // Increase the value by 10 (adjust as needed)
//   }
// }

// Attach a click event listener to the button
// const increaseButton = document.getElementById('increaseButton');
// increaseButton.addEventListener('click', updateProgressBar);


