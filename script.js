// JavaScript code in script.js

// Function to toggle the mobile navigation menu
function toggleMenu() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('active');
}

// Add a click event listener to the menu icon
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', toggleMenu);
