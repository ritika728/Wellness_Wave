function calculateWater() {
  // Get input values
  const gender = document.querySelector('select[name="gender"]').value;
  const weight = parseFloat(document.getElementById("weight").value);
  const activityLevel = document.querySelector(
    'select[name="activityLevel"]'
  ).value;
  const climate = document.querySelector('select[name="climate"]').value;

  // Validate input
  if (isNaN(weight) || weight <= 0) {
    alert("Please enter valid values for Weight");
    return;
  }

  // Calculate water Requirement
  let waterReq = weight * 0.033;

  if (gender === "male") {
    waterReq += 0.25;
  } else if (gender === "female") {
    waterReq += 0.15;
  }
  // activity factor
  if (activityLevel === "sedentary") {
    waterReq += 0.1;
  } else if (activityLevel === "lightlyActive") {
    waterReq += 0.2;
  } else if (activityLevel === "moderatelyActive") {
    waterReq += 0.3;
  } else if (activityLevel === "veryActive") {
    waterReq += 0.6;
  }
  // climate factor
  if (climate === "veryCold") {
    waterReq += 0.1;
  } else if (climate === "cold") {
    waterReq += 0.2;
  } else if (climate === "hot") {
    waterReq += 0.4;
  } else if (climate === "veryHot") {
    waterReq += 0.6;
  }

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Total Water Requirement is: ${waterReq.toFixed(
    2
  )} litres per day`;
}

// Event listener for the button click
document
  .getElementById("waterform")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    calculateWater();
  });
