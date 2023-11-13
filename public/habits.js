

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

  createProgressBar();
  console.log('Explosion');
}


//Function to create a progress bar
function createProgressBar() {
  
  const inputName = localStorage.getItem('newHabit');
  
  const inputMaxValue = parseInt(localStorage.getItem('timesTrack'));


 
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
 


async function updatePublic(inputName) {
  const theName = PlayerName();
  const streakKey = `streak_${inputName}`;
  const streakValue = parseInt(localStorage.getItem(streakKey));

  // if (!isNaN(streak) && theName) {
  //   //localStorage.clear();
  //   const publicData = JSON.parse(localStorage.getItem('publicData')) || [];
    
  //   // Search for an existing public record for the habit
  //   const existingRecordIndex = publicData.findIndex(record => record.habit === inputName);
    
  //   if (existingRecordIndex !== -1) {
  //     // Update the existing record with the new streak value
  //     publicData[existingRecordIndex].ratio = streak;
  //   } else {
  //     // Create a new public record
  //     const newPublic = { name: theName, habit: inputName, ratio: streak };
  //     publicData.push(newPublic);
  //   }

  //   localStorage.setItem('publicData', JSON.stringify(publicData));
  // }
  if (theName && !isNaN(streakValue)) {
    try {
      const response = await fetch('/api/public', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: theName,
          habit: inputName,
          ratio: streakValue,
        }),
      });
      const updatedPublicData = await response.json();
      localStorage.setItem('publicData', JSON.stringify(updatedPublicData))
      console.log('Updated public data:', updatedPublicData);
    } catch (error) {
      console.error('Error updating public data:', error);
    }
  }
}

// Function to load progress bars from local storage on page load
async function loadProgressBarsFromServer() {
  // const storedData = JSON.parse(localStorage.getItem('progressBarsData') || '[]');
  // const progressBarsContainer = document.getElementById('progressContainer');

  // for (const data of storedData) {
  //   const progressBar = document.createElement('progress');
  //   progressBar.setAttribute('max', data.max);
  //   progressBar.value = 0;

  //   const progressBarLabel = document.createElement('div');
  //   progressBarLabel.textContent = data.name;

  //   progressBarsContainer.appendChild(progressBarLabel);
  //   progressBarsContainer.appendChild(progressBar);
  try{
    const response = await fetch('/api/public')
    const publicData = await response.json();

    const progressBarsContainer = document.getElementById('progressContainer');
    progressBarsContainer.innerHTML = '';

    for (const entry of publicData) {
      const progressBar = document.createElement('progress');
      progressBar.setAttribute('max', entry.max);
      progressBar.value = entry.value;

      const progressBarLabel = document.createElement('div');
      progressBarLabel.textContent = entry.name;

      progressBarsContainer.appendChild(progressBarLabel);
      progressBarsContainer.appendChild(progressBar);
    }
  } catch (error) {
    console.error('Error loading progress bars from server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  // }
}

// // Load progress bars on page load
//window.addEventListener('load', loadProgressBarsFromLocalStorage);

window.addEventListener('load', () => {
  loadProgressBarsFromServer;
});


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






