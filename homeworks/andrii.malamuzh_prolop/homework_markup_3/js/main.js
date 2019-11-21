(function () {
    const headerBurger = document.querySelector('.btn-menu');
    const headerNav = document.querySelector('.header-nav');
    const darkBg = document.querySelector('.dark-bg');
    const mainBody = document.body;
    const about = document.querySelector('#about');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('close');
        headerNav.classList.toggle('open');
        darkBg.classList.toggle('open');
        mainBody.classList.toggle('no-scroll');
    });

    document.querySelector('#scroll-to-about').addEventListener('click', () => {
        about.scrollIntoView({ behavior: 'smooth' });
    });
}());
