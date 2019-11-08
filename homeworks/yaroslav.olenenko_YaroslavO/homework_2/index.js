const getElement = selector => document.querySelector(selector);
const form = getElement('.article__form');
const name = getElement('.article__input-name');
const email = getElement('.article__input-email');
const text = getElement('.article__textarea');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    window.alert(`Hi "${name.value}". Your email "${email.value}". \n Your text "${text.value}"`);
});
