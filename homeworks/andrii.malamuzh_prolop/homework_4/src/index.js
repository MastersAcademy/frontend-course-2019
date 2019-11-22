import { isValid } from './validate.module';

const form = document.querySelector('#form');
const formGroup = document.querySelectorAll('.form-group');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const age = document.querySelector('#age');

const success = document.querySelector('.success');

function nameValidation(text, min, max) {
    return isValid.minLength(text, min) && isValid.maxLength(text, max);
}

function emailValidation(text) {
    return isValid.email(text) && isValid.minLength(text, 1);
}

function phoneValidation(text) {
    return isValid.phone(text) && isValid.minLength(text, 1);
}

function ageValidation(text, min, max) {
    return !!(text === '' || isValid.numberRange(text, min, max));
}

function errorField(isFieldValid, fieldName) {
    if (!isFieldValid) {
        fieldName.closest('.form-group').classList.add('error');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.remove('open');
    [].forEach.call(formGroup, (event) => {
        event.classList.remove('error');
    });

    const firstNameValid = nameValidation(firstName.value, 2, 20);
    const lastNameValid = nameValidation(lastName.value, 2, 20);
    const emailValid = emailValidation(email.value);
    const phoneValid = phoneValidation(phone.value);
    const ageValid = ageValidation(age.value, 18, 120);

    if (firstNameValid && lastNameValid && emailValid && phoneValid && ageValid) {
        success.classList.add('open');
    } else {
        errorField(firstNameValid, firstName);
        errorField(lastNameValid, lastName);
        errorField(emailValid, email);
        errorField(phoneValid, phone);
        errorField(ageValid, age);
    }
});
