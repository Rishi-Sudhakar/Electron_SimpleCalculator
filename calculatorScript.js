document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.number, .operator');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            animateButtonClick(button);
            displayValue += button.textContent;
            display.textContent = displayValue;
        });
    });

    document.getElementById('clear').addEventListener('click', () => {
        animateButtonClick(document.getElementById('clear'));
        displayValue = '';
        display.textContent = '0';
    });

    document.getElementById('equals').addEventListener('click', () => {
        animateButtonClick(document.getElementById('equals'));
        try {
            displayValue = eval(displayValue);
            display.textContent = displayValue;
        } catch (error) {
            display.textContent = 'Error';
        }
    });

    // Function to animate button click
    function animateButtonClick(button) {
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Apply stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Redirect to welcome page
const backToWelcomeButton = document.getElementById('back-to-welcome');
backToWelcomeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});
