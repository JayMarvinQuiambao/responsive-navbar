const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const bigScreen = window.matchMedia('(min-width: 600px)');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

bigScreen.addEventListener('change', () => {
    navbarLinks.classList.remove('active');
})