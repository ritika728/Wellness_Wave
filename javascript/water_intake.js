// function for calculate drink
const calcResults = () => {
    const weight = document.getElementById('weight').value;
    const exercise = document.getElementById('exercise-mins').value;
    const res = Math.round(((weight * (2 / 3)) + (12 * (exercise / 30))) / 8);
    if (isNaN(weight) || isNaN(exercise)) {
      alert("Please enter only numeric values.");
    }
    else if (weight === "") {
      alert("Please enter your weight.");
    }
    else if (exercise === "") {
      alert("Please enter your exercise time. If you have not been active, please enter 5.");
    }
    else {
      
      const resultElement = document.getElementById('result_show');
      resultElement.innerHTML ='You should drink ' + res.toString() + ' bottle of water per day.'
    }

   return false;
  }
  
