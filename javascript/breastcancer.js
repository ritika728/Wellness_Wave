function calculateRisk() {
    var age = parseInt(document.getElementById("age").value);
    var menarcheAge = parseInt(document.getElementById("menarche").value);
    var irregularCycles = document.getElementById("irregularCycles").value;
    var breastfeeding = document.getElementById("breastfeeding").value;
    var relatives = document.getElementById("relatives").value;
    var biopsy = document.getElementById("biopsy").value;
    var firstChildAge = document.getElementById("firstChildAge").value;
  
   
    if (!age || !menarcheAge || !irregularCycles || !breastfeeding || !relatives || !biopsy || !firstChildAge) {
      alert("Please fill all the details.");
      return;
    }
  
   
    var riskScore = calculateRiskScore(age, menarcheAge, irregularCycles, breastfeeding, relatives, biopsy, firstChildAge);
  
    var riskCategory;
    if (riskScore < 0.2) {
      riskCategory = "Low Risk";
    } else if (riskScore < 0.4) {
      riskCategory = "Normal Risk";
    } else {
      riskCategory = "High Risk";
    }
  
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "Your Risk Score: " + riskScore.toFixed(2) +
      "<br>Your Risk Category: " + riskCategory +
      "<br>Advice: Your risk score suggests that you are at " + riskCategory.toLowerCase() +
      " for breast cancer. While this is reassuring, it’s still important to be aware of the signs and symptoms of breast cancer and to have regular screenings as recommended by your healthcare provider. Maintaining a healthy lifestyle, including regular exercise and a balanced diet, can also help to reduce your risk. Remember, early detection is key in the successful treatment of breast cancer.";
  }
  
  function calculateRiskScore(age, menarcheAge, irregularCycles, breastfeeding, relatives, biopsy, firstChildAge) {
    var riskScore = 0;
  
    if (age >= 40) {
      riskScore += 0.1;
    }
  
    if (irregularCycles === 'Yes') {
      riskScore += 0.1;
    }
  
    if (breastfeeding === 'Yes') {
      riskScore -= 0.1;
    }
  
    if (relatives === 'Yes') {
      riskScore += 0.2;
    }
  
    if (biopsy === 'Yes') {
      riskScore += 0.1;
    }
  
    if (firstChildAge === 'Nullipara') {
      riskScore += 0.1;
    } else if (firstChildAge === 'Before25') {
      riskScore -= 0.1;
    }
  
    riskScore = Math.max(0, Math.min(1, riskScore));
  
    return riskScore;
  }
  
  function clearForm() {
    document.getElementById("age").value = "";
    document.getElementById("menarche").value = "";
    document.getElementById("irregularCycles").value = "";
    document.getElementById("breastfeeding").value = "";
    document.getElementById("relatives").value = "";
    document.getElementById("biopsy").value = "";
    document.getElementById("firstChildAge").value = "";
  
    document.getElementById("resultContainer").innerHTML = "";
  }
  
