// Select elements for work and education
const workSelector = document.querySelector('.workselector');
const educationSelector = document.querySelector('.educationselector');
const workCard = document.querySelector('.work-card');
const educationCard = document.querySelector('.education.card');

// Function to set the default active selection
function setDefaultSelection() {
    workSelector.classList.add('selected');  
    educationSelector.classList.remove('selected');  
    workCard.style.display = 'block';  
    educationCard.style.display = 'none';  
}

// Set default selection when page loads
document.addEventListener('DOMContentLoaded', setDefaultSelection);

// Event listener to show work content when work is clicked
workSelector.addEventListener('click', function() {
    workSelector.classList.add('selected');  
    educationSelector.classList.remove('selected');  
    workCard.style.display = 'block';  
    educationCard.style.display = 'none'; 
});

// Event listener to show education content when education is clicked
educationSelector.addEventListener('click', function() {
    educationSelector.classList.add('selected'); 
    workSelector.classList.remove('selected'); 
    educationCard.style.display = 'block';  
    workCard.style.display = 'none';  
});
