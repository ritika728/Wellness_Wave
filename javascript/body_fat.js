function calculateBodyFat() {
  // Get input values
  // const bmi = parseFloat(document.getElementById("bmi").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('select[name="gender"]').value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const neck = parseFloat(document.getElementById("neck").value);
  const waist = parseFloat(document.getElementById("waist").value);
  var hip = parseFloat(document.getElementById("hip").value);

  // Validate input
  if (
    isNaN(age) ||
    isNaN(weight) ||
    isNaN(height) ||
    isNaN(neck) ||
    isNaN(waist) ||
    isNaN(hip) ||
    age <= 0 ||
    weight <= 0 ||
    height <= 0 ||
    neck <= 0 ||
    waist <= 0 ||
    hip <= 0 ||
    waist <= neck
  ) {
    alert(
      "Please enter valid values for Age, Weight, Height, Neck/Waist/Hip size"
    );
    return;
  }

  // Calculate bodyfatresult
  var bodyfatresult = 0;
  var numerator = 495;
  var denominator;

  // BMI method to calculate body fat percentage
  if (gender === "adult male") {
    hip = 0;
    denominator =
      1.0324 -
      0.19077 * Math.log10(waist + hip - neck) +
      0.15456 * Math.log10(height);
  } else if (gender === "adult female") {
    denominator =
      1.29579 -
      0.35004 * Math.log10(waist + hip - neck) +
      0.221 * Math.log10(height);
  }
  bodyfatresult = numerator / denominator - 450;

  // get the category
  var message = getBodyfatcategory(bodyfatresult);
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Body Fat Percentage: ${bodyfatresult.toFixed(
    2
  )}% - ${message}`;
}

// getting the category from body fat percentage
function getBodyfatcategory(bodyfatresult) {
  var message;
  if (gender === "adult male") {
    if (bodyfatresult < 2) {
      message = "Low on fat (<2%)";
    } else if (bodyfatresult <= 5) {
      message = "Essential  (2-5)%";
    } else if (bodyfatresult <= 13) {
      message = "Athletic (6-13)%";
    } else if (bodyfatresult <= 17) {
      message = "Fitness (14-17)%";
    } else if (bodyfatresult <= 24) {
      message = "Normal (18-24)%";
    } else {
      message = "Obese (25% or higher)";
    }
  } else {
    if (bodyfatresult < 10) {
      message = "Low on fat (<10%)";
    } else if (bodyfatresult <= 13) {
      message = "Essential  (10-13)%";
    } else if (bodyfatresult <= 20) {
      message = "Athletic (13-20)%";
    } else if (bodyfatresult <= 24) {
      message = "Fitness (20-24)%";
    } else if (bodyfatresult <= 31) {
      message = "Normal (24-31)%";
    } else {
      message = "Obese (31% or higher)";
    }
  }
  return message;
}
