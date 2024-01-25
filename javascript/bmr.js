function calculateBMR() {
    var gender = document.getElementById('gender').value;
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var resultElement = document.getElementById('result');

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        resultElement.innerHTML = 'Please enter valid values for age, height, and weight.';
        return;
    }

    var bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    resultElement.innerHTML = 'Your estimated BMR is: ' + bmr.toFixed(2) + ' calories per day.';
}
