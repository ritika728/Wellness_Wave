function calculateBMR(weight, height, age, gender) {
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
        'lightlyActive': 1.375,
        'moderatelyActive': 1.55,
        'veryActive': 1.725,
        'extraActive': 1.9
    };

    if (!(activityLevel.toLowerCase() in activityMultipliers)) {
        throw new Error("Invalid activity level. Choose from: sedentary, lightlyActive, moderatelyActive, veryActive, extraActive.");
    }

    return bmr * activityMultipliers[activityLevel.toLowerCase()];
}

function calculateDRI() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activityLevel').value;

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
