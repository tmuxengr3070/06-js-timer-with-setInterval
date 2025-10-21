// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 10;

// Variable to track if confetti has been shown
let confettiShown = false;

// Function to start the countdown
function startCountdown() {
    // Reset timer and counter for each start
    timerValue = 20;
    counterValue = 0;
    confettiShown = false;
    timerDisplay.textContent = timerValue;
    counterDisplay.textContent = counterValue;

    // Store the start time
    const startTime = Date.now();

    const countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Check if 10 seconds have passed
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

        // If counter is 10 or more and within 10 seconds, show confetti once
        if (!confettiShown && counterValue >= 10 && elapsedSeconds <= 10) {
            // Show confetti using the canvas-confetti library
            confetti();
            confettiShown = true;
        }

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0'; // Ensure the display shows 0
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to increase the counter
function increaseCounter() {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;

    // Check if timer is running and within 10 seconds
    // (Optional: can also check here for confetti, but main logic is in countdown)
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
