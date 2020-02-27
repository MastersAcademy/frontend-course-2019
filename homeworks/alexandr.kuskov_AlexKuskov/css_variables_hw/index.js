const root = document.documentElement;
const themeSelector = document.querySelector('.js-themes');

function handleThemeUpdate(e) {
    const selectedTheme = e.target.value;

    root.classList.toggle('app-theme--default', selectedTheme === 'default');
    root.classList.toggle('app-theme--dark', selectedTheme === 'dark');
    root.classList.toggle('app-theme--turquoise', selectedTheme === 'turquoise');
}

themeSelector.addEventListener('change', handleThemeUpdate);
