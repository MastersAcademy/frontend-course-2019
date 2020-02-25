const root = document.documentElement;
const themeSelector = document.querySelector('.js-themes');

function handleThemeUpdate(e) {
    const selectEl = e.target;

    switch (selectEl.value) {
        case 'original':
            root.style.setProperty('--global--color--primary', '#666');
            root.style.setProperty('--global--color--secondary', '#FE7E11');
            root.style.setProperty('--global--color--theme-primary', '#FFF');
            root.style.setProperty('--global--color--theme-secondary', '#F0F0F0');
            break;
        case 'dark':
            root.style.setProperty('--global--color--primary', '#FFF');
            root.style.setProperty('--global--color--secondary', '#00F');
            root.style.setProperty('--global--color--theme-primary', '#000');
            root.style.setProperty('--global--color--theme-secondary', '#545454');
            break;
        case 'turquoise':
            root.style.setProperty('--global--color--primary', '#000');
            root.style.setProperty('--global--color--secondary', '#3baf00');
            root.style.setProperty('--global--color--theme-primary', '#c9eae9');
            root.style.setProperty('--global--color--theme-secondary', '#98ded7');
            break;
        default:
    }
}

themeSelector.addEventListener('change', handleThemeUpdate);
