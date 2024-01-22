const stolic = document.getElementById("stolic");
const diastolic = document.getElementById("diastolic");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const bpCategory = document.getElementById("outputTarget");

document.getElementById("btnCalc").addEventListener("click", calculateBP);
document.getElementById("btnClear").addEventListener("click", clear);

function calculateBP() {
  const genderValue = gender.value;
  const ageValue = age.value;

  if (stolic.value > 180 || diastolic.value > 120) {
    paint('#BC0000', '#FFFFFF')
    bpCategory.innerHTML = `<p class="output-text text-light">
        You are in HYPERTENSIVE CRISIS. SEEK EMERGENCY CARE NOW!
      </p>`;
  } 
  else if (stolic.value >= 140 || diastolic.value >= 90) {
    paint('#BC7100', '#FFFFFF')
    bpCategory.innerHTML = `<p class="output-text text-light">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 2)!
      </p>`;
  }
   else if (stolic.value < 120 && diastolic.value < 80) {
    paint('#169D00', '#FFFFFF')
    bpCategory.innerHTML = `<p class="output-text text-light">Your blood pressure is NORMAL.</p>`;
  }
   else if (stolic.value < 129 && diastolic.value < 80) {
    paint("#00CF91", "#000000");
    bpCategory.innerHTML = `<p class="output-text text-dark">Your blood pressure is ELEVATED.</p>`;
  } 
  else {
    paint("#DBD200", "#000000");
    bpCategory.innerHTML = `<p class="output-text text-dark">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 1)!
      </p>`;
  }
}

function paint(bgColor, textColor) {
  bpCategory.style.backgroundColor = `${bgColor}`;
  bpCategory.style.color = `${textColor}`;
}

function clear() {
  bpCategory.innerHTML = "";
  bpCategory.style.backgroundColor = "#6f6f6f";
  stolic.value = "";
  diastolic.value = "";
  gender.value = "male"; 
  age.value = ""; 
}
