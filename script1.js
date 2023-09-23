// JavaScript for changing menu styles on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#333'; // Change the background color on scroll
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

// JavaScript for hover effect on menu items
const menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#e74c3c'; // Change text color on hover
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '#333'; // Restore original text color
    });
});
