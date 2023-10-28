function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    if (nameEl.value != '') {
        window.location.href = "habits.html";
    }
    //window.location.href = "public_habits.html";
  }

 

  