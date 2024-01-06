function subscribeNewsletter() {
    var emailInput = document.getElementById('emailInput').value;

    // Validate the email format (you can add more sophisticated validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate subscribing by logging the email to the console
    console.log('Subscribed email:', emailInput);

    // Show notification
    showNotification('You are subscribed!');

    // You can send the email to your server for processing here

    // Optionally, clear the input field after subscribing
    document.getElementById('emailInput').value = '';
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';

    // Hide the notification after 3 seconds (adjust as needed)
    setTimeout(function () {
        notification.style.display = 'none';
    }, 3000);
}