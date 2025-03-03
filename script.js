// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 10;

// Function to show confetti using canvas-confetti library
function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Function to start the countdown and check counter value
function startCountdown() {
    const countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0'; // Ensure the display shows 0

            // Check if counter value is 10 or greater
            if (counterValue >= 10) {
                showConfetti();
            }
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

    // Check if counter value is 10 or greater within 10 seconds
    if (counterValue >= 10 && timerValue > 0) {
        showConfetti();
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
