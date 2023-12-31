import React, { useState, useEffect } from 'react';
import './habits.css';



const MyComponent = (props) => {
  const userName = props.userName;
  const [habit, setNewHabit] = useState('');
  const [timesToTrack, setTimesToTrack] = useState('');
  const [publicOrPrivate, setPublicOrPrivate] = useState('Public');
  
  // const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  // const socket = new WebSocket(`${protocol}://${window.location.host}`);

  const handleHabitChange = (e) => {
    setNewHabit(e.target.value);
  };

  const handleTimesToTrackChange = (e) => {
    setTimesToTrack(e.target.value);
  };

  const handlePublicOrPrivateChange = (e) => {
    setPublicOrPrivate(e.target.value);
  };


  // useEffect(() => {
  //   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  //   const socket = new WebSocket(`${protocol}://${window.location.host}`);

  //   socket.onopen = (event) => {
  //     console.log('WebSocket connection opened');
  //     // Wait for a short time to ensure the connection is fully open
  //     setTimeout(() => {
  //       socket.send('yay!');
  //     }, 1000); // Adjust the delay based on your needs
  //   };

  //   socket.onclose = (event) => {
  //     console.log('WebSocket connection closed');
  //     socket.send('bye!');
  //   };

  //   socket.onmessage = async (event) => {
  //     console.log('onmessage');
  //     const msg = await event.data.text();
  //     if (msg === 'New Habit') {
  //       displayMsg('player', playerN, 'is working on their habits! YAY!');
  //     }
  //   };

  //   // Event listeners
  //   socket.addEventListener('open', socket.onopen);
  //   socket.addEventListener('close', socket.onclose);
  //   socket.addEventListener('message', socket.onmessage);

  //   // Clean up the WebSocket connection when the component unmounts
  //   return () => {
  //     console.log('WebSocket connection closed on component unmount');
  //     socket.close();
  //   };
  // }, [userName]);

  // socket.onopen = (event) => {
  //   //displayMsg('system', '', '');
  //   console.log("cool");
  //   socket.send("yay!")
    
  // };
  // socket.onclose = (event) => {
  //   //displayMsg('system', '', '');
  //   socket.send("bye!")
  // };
  // socket.onmessage = async (event) => {
  //   console.log("onmessage")
  //   const msg = await event.data.text();
  //  if (msg == "New Habit") {
  //     displayMsg('player', playerN, 'is working on their habits! YAY!')
  //  }
  // };


  // const handleOpen = (event) => {
  //   console.log('WebSocket connection opened');
  //   socket.send('yay!');
  // };
  
  // //socket.addEventListener('open', handleOpen);
  // socket.onopen = handleOpen;

  // const handleClose = (event) => {
  //   console.log('WebSocket connection closed');
  //   socket.send('bye!');
  // };

  // const handleMessage = async (event) => {
  //   console.log('WebSocket message received');
  //   const msg = await event.data.text();
  //   if (msg === 'New Habit') {
  //     // Assuming displayMsg is a function to display messages
  //     displayMsg('player', userName, 'is working on their habits! YAY!');
  //   }
  // };

    // Event listeners
  
  // socket.addEventListener('close', handleClose);
  // socket.addEventListener('message', handleMessage);

  // useEffect(() => {
  //   return () => {
  //     console.log('WebSocket connection closed on component unmount');
  //     socket.close();
  //   };
  // }, [socket]);
  

  // function displayMsg(cls, from, msg) {
  //   const chatText = document.querySelector('#player-messages');
  //   chatText.innerHTML =
  //     `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  // }

  const habitInput = (e) => {
    e.preventDefault();
    console.log('I went to habit Input')
        
    const newHabitEl = document.querySelector("#newHabit");
    const timesTrackEl = document.querySelector("#timesTrack");
    const publicEl = document.querySelector("#public");
    const privateEl = document.querySelector("#private");
    localStorage.setItem("newHabit", newHabitEl.value);
    localStorage.setItem("timesTrack", timesTrackEl.value)
    localStorage.setItem("pOp", publicEl.checked ? "Public" : "Private");
    
    //console.log(socket);
    //socket.send("New Habit");
    createProgressBar();
    console.log(localStorage.getItem("newHabit"))
    console.log(localStorage.getItem("timesTrack"))
    console.log(localStorage.getItem("pOp"))
    console.log('Form submitted:', habit, timesToTrack, publicOrPrivate);
  };


  function createProgressBar() {
      
      
    console.log('I went to createProgressBar')
    
    const inputName = localStorage.getItem('newHabit');
    
    const inputMaxValue = parseInt(localStorage.getItem('timesTrack'));
  
  
   
    if (inputName && !isNaN(inputMaxValue)) {
      // setAllowPlayer(true);
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
    //   return (
    //     <div>
    //       <progress max={inputMaxValue} value={0}></progress>
    //       <h5>{inputName}</h5>
    //       <p>0</p>
    //       <button onClick={() => updateProgressBar(inputName)}>Increase Progress</button>
    //     </div>
    //   );
    } else {
      alert('Please enter a valid input name and max value.');
    }
  }

  function updateProgressBar(inputName, progressBar, streak) {
    console.log("updateProgBar");
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

  async function updatePublic(inputName) {
    console.log("i went to updatePublic");
    //const theName = PlayerName();
    const theName = {userName};
    const streakKey = `streak_${inputName}`;
    const streakValue = parseInt(localStorage.getItem(streakKey));
  
    if (theName && !isNaN(streakValue)) {
  
      const publicData = JSON.parse(localStorage.getItem('publicData')) || [];
      let data;
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
      console.log(publicData)
      const existingRecordIndex = publicData.findIndex(record => record.habit === inputName);
    
      if (existingRecordIndex !== -1) {
  
        publicData[existingRecordIndex] = data;
        console.log(publicData);
      } else {
        // Create a new public record
        const newPublic = { name: theName, habit: inputName, ratio: streakValue };
        publicData.push(newPublic);
        console.log(publicData);
      }
      console.log(publicData);
      localStorage.setItem('publicData', JSON.stringify(publicData))
  
      } catch (error) {
         console.error('Error updating public data:', error);
      }
    }
  }
  



    return (
       <div>
            
            <div className="players">
              
                <span className="user" id="player-name">UserName: {userName}</span>
                <div>
                    <h3 className="tit-description">Develop A Habit:</h3>
                    <p>This is where you can create a new habit to be tracked! You can share and support others, or keep to yourself. You got this!!</p>
                </div>
            </div>
            <form className="inputbox" onSubmit={habitInput}>
                <div>
                    <label htmlFor="text">New Habit: </label>
                    <input type="text" id="newHabit" name="varText" placeholder="type your habit" required pattern="[A-Za-z\s]*" />
                </div>
                <div>
                    <label htmlFor="text">How many times to track this habit? </label>
                    <input type="text" id="timesTrack" name="varText" placeholder="type a number" required pattern="[0-9]*" />
                </div>
                <div>
                    <fieldset>
                        <legend>Public or Private?</legend>
                        <label htmlFor="public">Public</label>
                        <input type="radio" id="public" name="PP" value="Public" checked={publicOrPrivate === 'Public'} onChange={handlePublicOrPrivateChange} />
                        <label htmlFor="private">Private</label>
                        <input type="radio" id="private" name="PP" value="Private" checked={publicOrPrivate === 'Private'} onChange={handlePublicOrPrivateChange}/>
                    </fieldset>
                </div>
                <button type="submit" className="btn btn-secondary btn-sm">I'm Ready</button>
            </form>
            <div>
                <h3 className="tit-description">Your Progress:</h3>
                <div>
                    <span id="progress_happening"></span>
                </div>
                <div id="progressContainer"></div>
            </div>
            {/* <div>
                <p>YAY FOR OTHERS!!</p>
                <span className="player"></span>
                <p id="player-messages"></p>
            </div> */}
        </div>
    );
}

export default MyComponent;