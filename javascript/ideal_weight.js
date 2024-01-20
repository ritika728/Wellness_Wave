const $ = id => document.getElementById(id);

const msystem = () => {
  if ($('msw').value === 'metric') {
    $('thw').innerHTML = ' (Cms)';
  } else {
    $('thw').innerHTML = ' (inches)';
  }
};

const bweight = () => {
  const ms = $('msw').value;
  const sex = $('sw').value;
  let height = $('hw').value;

  // Validate height input
  if (!height || height.length === 0) {
    $('ibw').value = 'Pl. enter data.';
    return;
  }

  // Convert height to a number and ensure it's positive
  height = Number(height);
  if (height <= 0) {
    $('ibw').value = 'Height must be a positive number.';
    return;
  }

  // Calculate ideal body weight
  let ibwValue = '';
  if (ms === 'metric') {
    if (sex === 'm') {
      ibwValue = Math.round(56.2 * 1 + (height * 0.39 - 152.4 * 0.39) * 1.41) * 1 + ' Kgs';
    } else if (sex === 'f') {
      ibwValue = Math.round(53.1 * 1 + (height * 0.39 - 152.4 * 0.39) * 1.36) * 1 + ' Kgs';
    }
  } else if (ms === 'us') {
    if (sex === 'm') {
      ibwValue = Math.round(56.2 * 2.20462 + (height - 60) * 1.41 * 2.20462) * 1 + ' lbs';
    } else if (sex === 'f') {
      ibwValue = Math.round(53.1 * 2.20462 + (height - 60) * 1.36 * 2.20462) * 1 + ' lbs';
    }
  }

  // Set the value of the ibw input
  $('ibw').value = ibwValue;

  // Calculate ideal body weight range
  let ibw1Value = '';
  if (ms === 'metric') {
    ibw1Value = Math.round(18.5 * (height * height / 10000)) + ' Kgs - ' + Math.round(25 * (height * height / 10000)) + ' Kgs';
  } else if (ms === 'us') {
    ibw1Value = Math.round(18.5 * (height * height) / 703) + ' lbs - ' + Math.round(25 * (height * height) / 703) + ' lbs';
  }

  // Set the value of the ibw1 input
  $('ibw1').value = ibw1Value;
};

