"use strict";
console.log("Navigation Script Loaded");
let currentSection = 0;
const sections = document.querySelectorAll('.form-section');
function navigateSection(direction) {
    sections[currentSection].style.display = 'none';
    if (direction === 'next' && currentSection < sections.length - 1) {
        currentSection++;
    }
    else if (direction === 'prev' && currentSection > 0) {
        currentSection--;
    }
    sections[currentSection].style.display = 'block';
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === sections.length - 1;
}
sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
});
const prevBtn = document.getElementById('prevBtn');
prevBtn.disabled = true;
const numberButtons = document.querySelectorAll('.number-nav');
function goToSection(index) {
    sections[currentSection].style.display = 'none';
    currentSection = index;
    sections[currentSection].style.display = 'block';
    updateButtonStates();
}
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === sections.length - 1;
    numberButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentSection);
    });
}
sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
});
numberButtons.forEach((button, index) => {
    button.addEventListener('click', () => goToSection(index));
});
updateButtonStates();
