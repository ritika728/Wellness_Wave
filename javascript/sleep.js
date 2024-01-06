function calculateSleepDuration() {
    var age = parseInt(document.getElementById('age').value);

    if (isNaN(age) || age < 0) {
        alert('Please enter a valid age.');
        return;
    }

    var sleepDuration = calculateRecommendedSleepDuration(age);

    document.getElementById('result').innerHTML = `Recommended sleep duration for a ${age}-year-old: ${sleepDuration} hours.`;
}

function calculateRecommendedSleepDuration(age) {
    if (age >= 18 && age <= 64) {
        return '7-9';
    } else if (age >= 65) {
        return '7-8';
    } else {
        return 'Varies based on age group. Check guidelines for specific recommendations.';
    }
}