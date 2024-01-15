function calculateBodyFat() {
  // Get input values
  const bmi = parseFloat(document.getElementById("bmi").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('select[name="gender"]').value;

  // Validate input
  if (isNaN(bmi) || isNaN(age) || age <= 0 || bmi <= 0) {
    alert("Please enter valid values for BMI, Age");
    return;
  }

  // Calculate bodyfatresult
  var bodyfatresult = 0;

  // BMI method to calculate body fat percentage
  if (gender === "adult male") {
    bodyfatresult = 1.2 * bmi + 0.23 * age - 16.2;
  } else if (gender === "adult female") {
    bodyfatresult = 1.2 * bmi + 0.23 * age - 5.4;
  }

  // get the category
  var message = getBodyfatcategory(bodyfatresult);
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Body Fat Percentage: ${bodyfatresult.toFixed(2)}% - ${message}`;
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
        message = "Obese (25% or higher)";
      }
    }
    return message;
}


