const getElement = (selector) => document.querySelector(selector);
const form = getElement('.js__form');
const name = getElement('.js__name');
const email = getElement('.js__email');
const text = getElement('.js__textarea');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    window.alert(`Hi "${name.value}". Your email "${email.value}". \n Your text "${text.value}"`);
});
