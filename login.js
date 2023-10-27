function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    if (nameEl.value != '') {
        window.location.href = "habits.html";
    }
    //window.location.href = "public_habits.html";
  }

  function habitInput() {
    const newHabitEl = document.querySelector("#newHabit");
    const timesTrackEl = document.querySelector("#timesTrack");
    //const publicEl = document.querySelector("#public");
    //const privateEl = document.querySelector("#private");
    localStorage.setItem("newHabit", newHabitEl.value);
    localStorage.setItem("timesTrack", timesTrackEl.value)
    //localStorage.setItem("pOp", publicEl.value);
    //localStorage.setItem("pOp", privateEl.value);
    displayInput();
  }

  