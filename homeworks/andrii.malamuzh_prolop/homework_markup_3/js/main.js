(function () {
    const headerBurger = document.querySelector('.header-burger');
    const headerNav = document.querySelector('.header-nav');
    const darkBg = document.querySelector('.dark-bg');
    const mainBody = document.body;

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('close');
        headerNav.classList.toggle('open');
        darkBg.classList.toggle('open');
        mainBody.classList.toggle('no-scroll');
    });
}());
