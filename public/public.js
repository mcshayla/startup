// function loadPublic() {
//     let public = [];
//     const publicData = localStorage.getItem('publicData');
//     if (publicData) {
//       public = JSON.parse(publicData);
//     }

async function loadPublic() {
  let public = [];
  try {
    const response = await fetch('/api/public');
    public = await response.json();
  
    localStorage.setItem('public', JSON.stringify(public));
  } catch {
    const publicdata = localStorage.getItem('public')
    if (publicdata) {
      public = JSON.parse(publicdata);
    }
  }

  displayPublic(public);
}

function displayPublic(public) {
    const tableBodyEl = document.querySelector('#public_table');
  
    if (public.length) {
      for (const [i, pub] of public.entries()) {
        const numberEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const habitEl = document.createElement('td');
        const progressEl = document.createElement('td');
  
        numberEl.textContent = i + 1;
        nameTdEl.textContent = pub.name;
        habitEl.textContent = pub.habit;
        progressEl.textContent = pub.ratio;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(numberEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(habitEl);
        rowEl.appendChild(progressEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Share with others! Become Together!</td></tr>';
    }
}
  
loadPublic();
  