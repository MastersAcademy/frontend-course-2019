import { isValid } from './validator';

const styleValidField = ['valid-error--color', 'valid-error--border'];
const styleValidText = ['valid-error--color'];

const sendForm = document.querySelector('.js-form');
const sendFirstName = document.querySelector('.js-first-name');
const sendLastName = document.querySelector('.js-last-name');
const sendMail = document.querySelector('.js-email');
const sendPhone = document.querySelector('.js-phone');
const sendAge = document.querySelector('.js-age');
const sendText = document.querySelector('.js-text');

function setStyleValid(element, isDataValid, clss) {
    clss.map((cls) => element.classList.toggle(cls, !isDataValid));
}

function nameValid(text, min, max) {
    console.log(isValid.minLength(text, min) && isValid.maxLength(text, max));
    return isValid.minLength(text, min) && isValid.maxLength(text, max);
}

function isValidete() {
    const isValidFirstName = nameValid(sendFirstName.value, 2, 20);
    const isValidLastName = nameValid(sendLastName.value, 2, 20);
    const isValidMail = isValid.email(sendMail.value);
    const isValidPhone = isValid.phone(sendPhone.value);
    const isValidAge = isValid.numberRange(sendAge.value, 18, 120) || !sendAge.value;

    setStyleValid(sendFirstName, isValidFirstName, styleValidField);
    setStyleValid(sendLastName, isValidLastName, styleValidField);
    setStyleValid(sendMail, isValidMail, styleValidField);
    setStyleValid(sendPhone, isValidPhone, styleValidField);
    setStyleValid(sendAge, isValidAge, styleValidField);

    return isValidFirstName && isValidLastName && isValidMail && isValidPhone && isValidAge;
}

sendForm.addEventListener('submit', (element) => {
    element.preventDefault();
    if (isValidete()) {
        sendText.innerHTML = 'Validation successful! <br><br>';
        setStyleValid(sendText, true, styleValidText);
    } else {
        sendText.innerHTML = 'Validation ERROR!!! <br><br>';
        setStyleValid(sendText, false, styleValidText);
    }
});
