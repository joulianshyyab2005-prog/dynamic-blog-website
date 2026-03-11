// 1. Mouse Events
const mouseBtn = document.getElementById('mouse-btn');
const mouseMsg = document.getElementById('mouse-msg');

mouseBtn.addEventListener('mouseenter', () => {
    mouseMsg.textContent = 'The mouse is hovering!';
});

mouseBtn.addEventListener('mouseleave', () => {
    mouseMsg.textContent = 'The mouse has left!';
});

// 2. Keyboard Events
const keyInput = document.getElementById('key-input');
const keyMsg = document.getElementById('key-msg');

keyInput.addEventListener('keydown', (event) => {
    keyMsg.textContent = 'Last key pressed: ' + event.key;
});

// 4. Focus and Blur
const focusInput = document.getElementById('focus-input');
const focusMsg = document.getElementById('focus-msg');

focusInput.addEventListener('focus', () => {
    focusMsg.textContent = 'Input is focused (active)!';
});

focusInput.addEventListener('blur', () => {
    focusMsg.textContent = 'Input lost focus.';
});

// 5. Event Delegation
const container = document.getElementById('btn-container');
const delegMsg = document.getElementById('delegation-msg');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegMsg.textContent = 'You clicked: ' + event.target.textContent;
    }
});