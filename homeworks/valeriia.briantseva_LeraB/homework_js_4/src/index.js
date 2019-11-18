import {isValid} from './validate';

const email = document.getElementById('user-email');
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('last-name');
const phone = document.getElementById('user-phone');
const age = document.getElementById('user-age');
const submit = document.getElementById('btn-submit');
const successMessage = document.getElementById('success-message');

function isValidFirstName() {
    if ((isValid.minLength(firstName.value, 2)) && (isValid.maxLength(firstName.value, 20)) && !(firstName.value === '')) {
        firstName.classList.remove('error');
    }
    else {
        firstName.classList.add('error');
    }
}

function isValidSecondName() {
    if ((isValid.minLength(secondName.value, 2)) && (isValid.maxLength(secondName.value, 20)) && !(secondName.value === '')) {
        secondName.classList.remove('error');
    }
    else {
        secondName.classList.add('error');
    }
}

function isValidEmail() {
    // eslint-disable-next-line no-useless-escape
    let regexEmail = "^(([^<>()/\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
    if ((isValid.email(email.value)) && (isValid.pattern(email.value, regexEmail))) {
        email.classList.remove('error');
    }
    else {
        email.classList.add('error');
    }
}

function isValidPhone() {
    // eslint-disable-next-line no-useless-escape
    let regexPhone = "^\\+38\\([0-9]{3}\\)[0-9]{3}[-][0-9]{2}[-][0-9]{2}$";
    if ((isValid.phone(phone.value)) && (isValid.pattern(phone.value, regexPhone))) {
        phone.classList.remove('error');
    }
    else {
        phone.classList.add('error');
    }
}

function isValidAge() {

    if ((isValid.numberRange(age.value, 18, 120)) || (age.value === '')) {
        age.classList.remove('error');
    }
    else {
        age.classList.add('error');
    }
}

firstName.addEventListener('change', (event) => {
    isValidFirstName();
});

secondName.addEventListener('change', (event) => {
    isValidSecondName()
});

email.addEventListener('change', (event) => {
    isValidEmail();
});

phone.addEventListener('change', (event) => {
    isValidPhone();
});

age.addEventListener('change', (event) => {
    isValidAge();
});

submit.addEventListener('click', (event) => {
    event.preventDefault();

    isValidFirstName();
    isValidSecondName();
    isValidEmail();
    isValidPhone();
    isValidAge();

    if (firstName.classList.contains('error') || secondName.classList.contains('error') || email.classList.contains('error') || phone.classList.contains('error') || age.classList.contains('error')) {
        successMessage.classList.add('hide');
    }
    else {
        console.log('true');
        successMessage.classList.remove('hide');
    }
});
