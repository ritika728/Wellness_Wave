var distanceInput = document.getElementById("distance"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    secondsInput = document.getElementById("seconds"),
    calculateBtn = document.getElementById("calculate_btn"),
    paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function() {
    var miles = parseFloat(distanceInput.value),
        hours = parseFloat(hoursInput.value),
        minutes = parseFloat(minutesInput.value),
        seconds = parseFloat(secondsInput.value);

    if (isNaN(miles)) {
        distanceInput.style.borderColor = "red";
        return;
    } else {
        distanceInput.style.borderColor = "initial";
    }
    if (isNaN(hours)) {
        hoursInput.style.borderColor = "red";
        return;
    } else {
        hoursInput.style.borderColor = "initial";
    }
    if (isNaN(minutes)) {
        minutesInput.style.borderColor = "red";
        return;
    } else {
        minutesInput.style.borderColor = "initial";
    }
    if (isNaN(seconds)) {
        secondsInput.style.borderColor = "red";
        return;
    } else {
        secondsInput.style.borderColor = "initial";
    }

    var totalMinutes = hours * 60 + minutes + seconds / 60,
        pace = totalMinutes / miles,
        paceMinutes = Math.floor(pace),
        paceSeconds = Math.round((pace - paceMinutes) * 60);

    if (paceSeconds < 10) {
        paceSeconds = "0" + paceSeconds;
    }

    paceText.textContent = "You need to run " + paceMinutes + ":" + (paceSeconds < 10 ? "0" : "") + paceSeconds + " minutes per mile.";
});
