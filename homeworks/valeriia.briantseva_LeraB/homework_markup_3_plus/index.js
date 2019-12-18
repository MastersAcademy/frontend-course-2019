const checkBox = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('menu-list');

// If the checkbox is checked, display the output text
function toogleMenu() {
    if (checkBox.checked === true) {
        mobileMenu.classList.add('opened');
    } else {
        mobileMenu.classList.remove('opened');
    }
}

toogleMenu();

checkBox.addEventListener('change', () => {
    toogleMenu();
});
