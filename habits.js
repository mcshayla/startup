

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
  // displayInput();
  createProgressBar();
  console.log('Explosion');
}


//Function to create a progress bar
function createProgressBar() {
  
  const inputName = localStorage.getItem('newHabit');
  
  const inputMaxValue = parseInt(localStorage.getItem('timesTrack'));

  // let public = []; //////
  // console.log(pOp)

  // const inputName = document.getElementById('inputName').value;
  // const inputMaxValue = parseInt(document.getElementById('inputMaxValue').value);
  if (inputName && !isNaN(inputMaxValue)) {
    const progressBar = document.createElement('progress');
    progressBar.setAttribute('max', inputMaxValue);
    progressBar.value = 0;

    const progressBarLabel = document.createElement('h5');
    progressBarLabel.textContent = inputName;

    const progressBarsContainer = document.getElementById('progressContainer');
    progressBarsContainer.appendChild(progressBarLabel);
    progressBarsContainer.appendChild(progressBar);

    const streak = document.createElement('p');
    streak.textContent = 0;
    progressBarsContainer.appendChild(streak);
    

    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Increase Progress';
    progressBarsContainer.appendChild(increaseButton);
    increaseButton.addEventListener('click', function () {updateProgressBar(inputName, progressBar, streak)});
  } else {
    alert('Please enter a valid input name and max value.');
  }
}
    //streak += increaseButton.addEventListener('click', updateStreak); /////

    // const resetButton = document.createElement('button');
    // resetButton.textContent = 'Reset';
    // progressBarsContainer.appendChild(resetButton);
    // resetButton.addEventListener('click', resetProgressBar);

    // const progressBarData = {name: inputName, max: inputMaxValue};
    // const storedData = JSON.parse(localStorage.getItem('progressBarsData')) || [];

    // storedData.push(progressBarData);

    // localStorage.setItem('progressBarsData', JSON.stringify(storedData));

  


function updatePublic(inputName) {
  const theName = PlayerName();
  const streakKey = `streak_${inputName}`;
  const streak = parseInt(localStorage.getItem(streakKey));
  
  if (!isNaN(streak) && theName) {
    //localStorage.clear();
    const publicData = JSON.parse(localStorage.getItem('publicData')) || [];
    
    // Search for an existing public record for the habit
    const existingRecordIndex = publicData.findIndex(record => record.habit === inputName);
    
    if (existingRecordIndex !== -1) {
      // Update the existing record with the new streak value
      publicData[existingRecordIndex].ratio = streak;
    } else {
      // Create a new public record
      const newPublic = { name: theName, habit: inputName, ratio: streak };
      publicData.push(newPublic);
    }

    localStorage.setItem('publicData', JSON.stringify(publicData));
  }
}

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




// function displayInput() {
//   const newHabit = localStorage.getItem('newHabit');
//   const toTrack = localStorage.getItem('timesTrack');
//   const pOp = localStorage.getItem('pOp');
//   const playerNameElement = document.getElementById('progress_happening');
//   playerNameElement.textContent = newHabit+ ' ' + toTrack + ' ' + pOp;
// }

function updateProgressBar(inputName, progressBar, streak) {
  const pOp = localStorage.getItem('pOp');
  if (progressBar.value < progressBar.max) {
    progressBar.value += 1;

    let currentStreak = parseInt(streak.textContent);
    currentStreak += 1;
    streak.textContent = currentStreak;
    let streakKey = `streak_${inputName}`;
    localStorage.setItem(streakKey, progressBar.value);


  
    if (pOp != 'Private') {
      updatePublic(inputName);
    }
  }
}


// function resetProgressBar() {
//   console.log("hiiiiiiiiii")
//   const progressBar = this.previousElementSibling;
//   if (progressBar.value < progressBar.max) {
//     progressBar.value += 1;
//   }
//   console.log(progressBar.value)
 
// }




