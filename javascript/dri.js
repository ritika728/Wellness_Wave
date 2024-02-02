function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function calculateBMR(weight, height, age, gender) {
    if (!isNumeric(weight) || !isNumeric(height) || !isNumeric(age)) {
        throw new Error("Please enter valid numeric values for weight, height, and age.");
    }

    if (gender.toLowerCase() === 'male') {
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender.toLowerCase() === 'female') {
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        throw new Error("Invalid gender. Please enter 'male' or 'female'.");
    }
}

function calculateTDEE(bmr, activityLevel) {
    const activityMultipliers = {
        'sedentary': 1.2,
        'lightlyactive': 1.375,
        'moderatelyactive': 1.55,
        'veryactive': 1.725,
        'extraactive': 1.9
    };

    const normalizedActivityLevel = activityLevel.toLowerCase();

    if (!(normalizedActivityLevel in activityMultipliers)) {
        throw new Error("Invalid activity level. Choose from: sedentary, lightlyActive, moderatelyActive, veryActive, extraActive.");
    }

    return bmr * activityMultipliers[activityLevel];
}

function calculateDRI() {
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const genderSelect = document.getElementById('gender');
    const activityLevelSelect = document.getElementById('activityLevel');

    const age = parseInt(ageInput.value);
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const gender = genderSelect.value;
    const activityLevel = activityLevelSelect.value;

    if (!isNumeric(age) || !isNumeric(weight) || !isNumeric(height) || gender.trim() === '' || activityLevel.trim() === '') {
        alert("Please enter valid values for all fields.");
        return;
    }

    try {
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = calculateTDEE(bmr, activityLevel);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Results</h2>
            <p>Age: ${age} years</p>
            <p>Weight: ${weight} kg</p>
            <p>Height: ${height} cm</p>
            <p>Gender: ${gender}</p>
            <p>Activity Level: ${activityLevel}</p>
            <p>BMR (Basal Metabolic Rate): ${bmr.toFixed(2)} calories per day</p>
            <p>TDEE (Total Daily Energy Expenditure): ${tdee.toFixed(2)} calories per day</p>
            <p>Caloric Needs for Weight Loss (20% deficit): ${(0.8 * tdee).toFixed(2)} calories per day</p>
            <p>Caloric Needs for Weight Gain (20% surplus): ${(1.2 * tdee).toFixed(2)} calories per day</p>
        `;
    } catch (error) {
        alert(error.message);
    }
}
