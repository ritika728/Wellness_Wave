// function for calculate drink
const calcResults = () => {
    const weight = document.getElementById('weight').value;
    const exercise = document.getElementById('exercise-mins').value;
    const res = Math.round(((weight * (2 / 3)) + (12 * (exercise / 30))) / 8);
    document.getElementById('result').innerHTML = 'You should drink ' + res.toString() + ' cups of water per day.'
    return false;
  }
  
// function for clear form
  function resetForm() {
    document.getElementById("personal_info").reset();
  }