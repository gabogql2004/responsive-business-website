const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
