function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    var bmi = calculateBMIValue(weight, height);
    var category = getBMICategory(bmi);

    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} - ${category}.`;
}

function calculateBMIValue(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / ((height / 100) ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}