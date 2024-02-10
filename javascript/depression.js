
function calculateTotalScore() {
    
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7").value;
    var q8 = document.getElementById("q8").value;
    var q9 = document.getElementById("q9").value;
    var q10 = document.getElementById("q10").value;
    var q11 = document.getElementById("q11").value;
    var q12 = document.getElementById("q12").value;
    var q13 = document.getElementById("q13").value;
    var q14 = document.getElementById("q14").value;
    var q15 = document.getElementById("q15").value;
    
    var score = 0;
     score += (q1 === "Agree") ? 1 : 0;
     score += (q2 === "Agree") ? 1 : 0;
     score += (q3 === "Agree") ? 1 : 0;
     score += (q4 === "Agree") ? 1 : 0;
     score += (q5 === "Agree") ? 1 : 0;
     score += (q6 === "Agree") ? 1 : 0;
     score += (q7 === "Agree") ? 1 : 0;
     score += (q8 === "Agree") ? 1 : 0;
     score += (q9 === "Agree") ? 1 : 0;
     score += (q10 === "Agree") ? 1 : 0;
     score += (q11 === "Agree") ? 1 : 0;
     score += (q12 === "Agree") ? 1 : 0;
     score += (q13 === "Agree") ? 1 : 0;
     score += (q14 === "Agree") ? 1 : 0;
     score += (q15 === "Agree") ? 1 : 0;
    
    return score;
}

function displayResult(score) {
    var severity = getSeverity(score);
    var resultText = "Calculated Risk: " + score + "<br>Severity: " + severity;
    document.getElementById("outputTarget").innerHTML = resultText;
}
function getSeverity(score) {
    if (score >= 0 && score <= 3) {
        return "Low Depression";
    } else if (score > 3 && score <= 6) {
        return "Mild Depression";
    } else if (score > 6 && score <= 9) {
        return "Moderate Depression";
    } else if (score > 9 && score <= 12) {
        return "Moderately Severe Depression";
    } else {
        return "Severe Depression";
    }
}
function calculateRisk() {
    var age = document.getElementById("age").value;
    
    if (age === "") {
        alert("Please enter your age before calculating the risk.");
        return;
    }
    var totalScore = calculateTotalScore();
    displayResult(totalScore);
}

function clearForm() {
    
    document.getElementById("gender").value = "male";
    document.getElementById("age").value = "";
    document.getElementById("q1").value = "Agree";
    document.getElementById("q2").value = "Agree";
    document.getElementById("q3").value = "Agree";
    document.getElementById("q4").value = "Agree";
    document.getElementById("q5").value = "Agree";
    document.getElementById("q6").value = "Agree";
    document.getElementById("q7").value = "Agree";
    document.getElementById("q8").value = "Agree";
    document.getElementById("q9").value = "Agree";
    document.getElementById("q10").value = "Agree";
    document.getElementById("q11").value = "Agree";
    document.getElementById("q12").value = "Agree";
    document.getElementById("q13").value = "Agree";
    document.getElementById("q14").value = "Agree";
    document.getElementById("q15").value = "Agree";
    
   
    document.getElementById("outputTarget").innerHTML = "";
}

document.getElementById("calculateButton").addEventListener("click", calculateRisk);
document.getElementById("clearButton").addEventListener("click", clearForm);
