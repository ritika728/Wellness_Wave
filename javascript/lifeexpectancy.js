function calculateLifeExpectancy() {
  const age = parseInt(document.getElementById('age').value);
  const sex = document.getElementById('sex').value;
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const race = document.getElementById('race').value;
  const health = document.getElementById('health').value;
  const education = document.getElementById('education').value;
  const smoke = document.getElementById('smoke').value;
  const drink = document.getElementById('drink').value;

  if (!sex || isNaN(age) || isNaN(height) || isNaN(weight)) {
      alert('Please fill in all the fields.');
      clearForm(); 
      return;
  }

  let lifeExpectancy = 80; 

  if (sex === 'male') {
      lifeExpectancy -= 5;
  } 
  else if (sex === 'female') {
      lifeExpectancy += 5;
  }

  if (height < 160) {
      lifeExpectancy -= 2;
  } 
  else if (height > 180) {
      lifeExpectancy += 2;
  }

  if (weight > 90) {
      lifeExpectancy -= 3;
  }
   else if (weight < 70) {
      lifeExpectancy += 3;
  }

  if (race === 'asian') {
      lifeExpectancy -= 5;
  }
  if (race === 'white') {
    lifeExpectancy += 5;
}
 if (race === 'black') {
  lifeExpectancy -= 2;
}
  if (health === 'poor') {
      lifeExpectancy -= 10;
  } 
  else if (health === 'excellent') {
      lifeExpectancy += 5;
  }

  if (education === 'graduate') {
      lifeExpectancy += 2;
  }

  if (smoke === 'yes') {
      lifeExpectancy -= 7;
  }

  if (drink === 'regularly') {
      lifeExpectancy -= 5;
  } 
  else if (drink === 'occasionally') {
      lifeExpectancy -= 2;
  }
  
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p>Your Estimated Life Expectancy is: ${lifeExpectancy}</p>
    <p>That's an estimated ${lifeExpectancy - age} years of additional life.</p>
    <p>This life expectancy estimate is provided as an approximation based on a variety of important lifestyle choices.</p>
  `;
}

function clearForm() {

  document.getElementById('sex').value = '';
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = '';
}
