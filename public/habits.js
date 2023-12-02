

function getPlayerName() {
  const userName = localStorage.getItem('userName') ?? 'Mystery player';
  const playerNameElement = document.getElementById('player-name');
  if (userName) {
    playerNameElement.textContent = userName;
  } else {
    playerNameElement.textContent = "Unknown User";
  }

  return userName

}

playerN = getPlayerName()

  //return new Promise((resolve, reject) => {
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
let socket = new WebSocket(`${protocol}://${window.location.host}`);

socket.onopen = (event) => {
  //displayMsg('system', '', '');
  console.log("cool");
  socket.send("yay!")
  
};
socket.onclose = (event) => {
  //displayMsg('system', '', '');
  socket.send("bye!")
};
socket.onmessage = async (event) => {
  console.log("onmessage")
  const msg = await event.data.text();
 if (msg == "New Habit") {
    displayMsg('player', playerN, 'is working on their habits! YAY!')
 }
};

// socket.onmessage = async (event) => {
//   console.log("onmessage");
//   const msg = await event.data.text();

//   // Assuming msg has a 'from' property that identifies the sender
//   //console.log(msg.from)
//   if (msg.from !== playerN && msg.text === "New Habit") {
//     displayMsg('player', msg.from, 'is working on their habits! YAY!');
//   }
// };







function PlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}


function habitInput() {
  console.log('I went to habit Input')

  const newHabitEl = document.querySelector("#newHabit");
  const timesTrackEl = document.querySelector("#timesTrack");
  const publicEl = document.querySelector("#public");
  const privateEl = document.querySelector("#private");
  localStorage.setItem("newHabit", newHabitEl.value);
  localStorage.setItem("timesTrack", timesTrackEl.value)
  localStorage.setItem("pOp", publicEl.checked ? "Public" : "Private");

  console.log(socket);
  socket.send("New Habit");
  createProgressBar();

  // ws.send("uykfyufuu");
  //broadcastEvent(getPlayerName(), {habit: newHabitEl.value});
  // console.log('Explosion');
}


//Function to create a progress bar
function createProgressBar() {


  console.log('I went to createProgressBar')
  
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

  if (theName && !isNaN(streakValue)) {
    const publicData = JSON.parse(localStorage.getItem('publicData')) || [];
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

    data = await response.json()
    console.log(data)
    const existingRecordIndex = publicData.findIndex(record => record.habit === inputName);
  
    if (existingRecordIndex !== -1) {

      publicData[existingRecordIndex] = data;
    
    } else {
      // Create a new public record
      const newPublic = { name: theName, habit: inputName, ratio: streakValue };
      publicData.push(newPublic);
    }

    localStorage.setItem('publicData', JSON.stringify(publicData))

    } catch (error) {
       console.error('Error updating public data:', error);
    }
  }
}

// Function to load progress bars from local storage on page load
// async function loadProgressBarsFromServer() {
//   try{
//     const response = await fetch('/api/public')
//     const publicData = await response.json();
//     console.log(publicData);
//     const progressBarsContainer = document.getElementById('progressContainer');
//     progressBarsContainer.innerHTML = '';

//     for (const entry of publicData) {
//       const progressBar = document.createElement('progress');
//       progressBar.setAttribute('max', 100);
//       console.log(entry.ratio);
//       progressBar.value = entry.ratio;

//       const progressBarLabel = document.createElement('div');
//       progressBarLabel.textContent = entry.name;

//       progressBarsContainer.appendChild(progressBarLabel);
//       progressBarsContainer.appendChild(progressBar);
//     }
//   } catch (error) {
//     console.error('Error loading progress bars from server:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }

//   // }
// }

// // Load progress bars on page load
//window.addEventListener('load', loadProgressBarsFromLocalStorage);

// window.addEventListener('load', () => {
//   loadProgressBarsFromServer(); ///changed
// });


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



function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}



// function displayMsg(from, msg) {
//   const chatText = document.querySelector('#player-messages');
//   chatText.innerHTML = `<div>${msg} </div>`+ chatText.innerHTML;

// }


function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}




