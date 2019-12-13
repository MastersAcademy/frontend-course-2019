import './style.css';
import { isValid } from './form-validate';

// ALL FORM QUERY SELECTOR
const form = document.querySelector('.form');
const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputAge = document.querySelector('#age');

// INPUTS FUNCTION VALIDATION
function nameValidation(text, min, max) {
    const isName = isValid.minLength(text, min) && isValid.maxLength(text, max);
    return isName;
}
function emailValidation(text, min) {
    const isEmail = isValid.email(text) && isValid.minLength(text, min);
    return isEmail;
}
function phoneValidation(text, min) {
    const isPhone = isValid.phone(text) && isValid.minLength(text, min);
    return isPhone;
}
function ageValidation(text, min, max) {
    const isAgeValidation = isValid.numberRange(text, min, max);
    return isAgeValidation;
}

// ERROR FIELDS
const formLabels = document.querySelectorAll('.form__label');
const status = document.querySelector('.form__status');

function renderErrorField(isFieldValid, fieldName) {
    if (!isFieldValid) {
        fieldName.closest('label').classList.add('form__label_error');
    }
}

// SEND & CHECK FORM
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameValue = nameValidation(inputFirstName.value, 1, 25);
    const lastNameValue = nameValidation(inputLastName.value, 1, 25);
    const emailValue = emailValidation(inputEmail.value, 1);
    const phoneValue = phoneValidation(inputPhone.value, 1);
    const ageValue = ageValidation(inputAge.value, 16, 80);

    status.setAttribute('hidden', true);

    formLabels.forEach((labelItem) => {
        labelItem.classList.remove('form__label_error');
    });

    if (firstNameValue && lastNameValue && emailValue && phoneValue && ageValue) {
        status.removeAttribute('hidden');
    } else {
        renderErrorField(firstNameValue, inputFirstName);
        renderErrorField(lastNameValue, inputLastName);
        renderErrorField(emailValue, inputEmail);
        renderErrorField(phoneValue, inputPhone);
        renderErrorField(ageValue, inputAge);
    }
});
