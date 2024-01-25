function calculateLeanMass() {
    document.getElementById('result').style.display = "block";
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numerical values for age, height, and weight.");
        return;
    }

    let boerMass, jamesMass, humeMass;

    if (gender === 'male') {
        boerMass = (0.407 * weight) + (0.267 * height) - (19.2 * age) + 701;
        jamesMass = (1.1 * weight) - (128 * (weight / height) * (weight / height));
        humeMass = (0.32810 * weight) + (0.33929 * height) - (0.029 * age) + 295.69;
    } else {
        boerMass = (0.252 * weight) + (0.473 * height) - (48.3 * age) + 447.6;
        jamesMass = (1.07 * weight) - (148 * (weight / height) * (weight / height));
        humeMass = (0.29569 * weight) + (0.41813 * height) - (0.028 * age) + 432.77;
    }

    document.getElementById('boerResult').children[1].innerText = boerMass.toFixed(2);
    document.getElementById('jamesResult').children[1].innerText = jamesMass.toFixed(2);
    document.getElementById('humeResult').children[1].innerText = humeMass.toFixed(2);
}