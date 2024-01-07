function calculateCalories() {
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('select[name="gender"]').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);

    // Validate input
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please enter valid values for Age, Weight, and Height.");
        return;
    }

    // Calculate BMR (Basal Metabolic Rate)
    let bmr = 0;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate Total Daily Calories
    const tdee = bmr * activityLevel;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your Total Daily Calories: ${Math.round(tdee)} calories per day`;
}

// Event listener for the button click
document.getElementById('calorieForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    calculateCalories();
});
