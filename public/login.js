function login() {
    const nameEl = document.querySelector("#name");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passwordEl.value);
    if (nameEl.value != '') {
        window.location.href = "habits.html";
    }
    //window.location.href = "public_habits.html";
  }

 

  