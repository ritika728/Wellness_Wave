const gender = document.getElementById("gender");
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const beer = document.getElementById("beer");
const wine = document.getElementById("wine");
const shot = document.getElementById("shot");
const time = document.getElementById("time");
const bpCategory = document.getElementById("outputTarget");

document.getElementById("btnCalc").addEventListener("click", calculateBAC);
document.getElementById("btnClear").addEventListener("click", clear);

function calculateBAC() {
  const genderValue = gender.value;
  const ageValue = age.value;
  const weightValue = weight.value;
  const beerValue = beer.value;
  const wineValue = wine.value;
  const shotValue = shot.value;
  const timeValue = time.value;

  if (!ageValue || !weightValue || !beerValue || !wineValue || !shotValue || !timeValue) {
    alert("Please enter valid values for all fields.");
    return;
  }
  console.log("Inputs:", genderValue, ageValue, weightValue, beerValue, wineValue, shotValue, timeValue);
  const totalDrinks = parseInt(beerValue) + parseInt(wineValue) + parseInt(shotValue);
  const bac = calculateBACS(totalDrinks, timeValue);

  console.log("Calculated BAC:", bac);

  displayBACS(bac);
}

function calculateBACS(totalDrinks, time) {
 
  const alcoholContent = 0.05; 
  const genderConstant = (gender.value === "male") ? 0.68 : 0.55; 

  const bac = (totalDrinks * alcoholContent * 5.14) / (weight.value * genderConstant) - (0.015 * time);
  return bac;
}

function displayBACS(bac) {
    paint('#FFFFFF', '#000000'); 
  
    bpCategory.innerHTML = `<p class="output-text text-dark">
        Your Blood Alcohol Content (BAC) is: ${bac.toFixed(4)}%
      </p>`;
  }
  

function paint(bgColor, textColor) {
  bpCategory.style.backgroundColor = `${bgColor}`;
  bpCategory.style.color = `${textColor}`;
}

function clear() {
    bpCategory.innerHTML = "";
    gender.value = "male";
    age.value = "";
    weight.value = "";
    beer.value = "";
    wine.value = "";
    shot.value = "";
    time.value = "";
  }
  
