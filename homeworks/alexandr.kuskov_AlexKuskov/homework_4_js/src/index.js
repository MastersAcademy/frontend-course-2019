import { isValid } from './validation-module';

const formEl = document.querySelector('.js-registration-form');
const firstNameInputEl = document.querySelector('.js-registration-first-name');
const lastNameInputEl = document.querySelector('.js-registration-last-name');
const emailInputEl = document.querySelector('.js-registration-email');
const phoneInputEl = document.querySelector('.js-registration-phone');
const ageInputEl = document.querySelector('.js-registration-age');
const validationTextSpanEl = document.querySelector('.js-registration-validation');

function setInvalidInputStyle(element) {
    element.setAttribute('style', 'border-color: rgb(255, 0, 0); color: rgb(255, 0, 0);');
}

function setValidInputStyle(element) {
    element.setAttribute('style', 'border-color: rgb(0, 0, 0); color: rgb(0, 0, 0);');
}

function setInputFieldStyle(isInputValid, element) {
    if (isInputValid) {
        setValidInputStyle(element);
    } else {
        setInvalidInputStyle(element);
    }
}

function showValidationText() {
    validationTextSpanEl.setAttribute('style', 'visibility: visible;');
}

function isNameValid(name, min, max) {
    return isValid.minLength(name, min) && isValid.maxLength(name, max);
}

formEl.addEventListener('submit', (event) => {
    const isFirstNameValid = isNameValid(firstNameInputEl.value, 2, 20);
    const isLastNameValid = isNameValid(lastNameInputEl.value, 2, 20);
    const isEmailValid = isValid.email(emailInputEl.value);
    const isPhoneValid = isValid.phone(phoneInputEl.value);
    const isAgeValid = isValid.numberRange(ageInputEl.value, 18, 120);

    setInputFieldStyle(isFirstNameValid, firstNameInputEl);
    setInputFieldStyle(isLastNameValid, lastNameInputEl);
    setInputFieldStyle(isEmailValid, emailInputEl);
    setInputFieldStyle(isPhoneValid, phoneInputEl);
    setInputFieldStyle(isAgeValid, ageInputEl);

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isAgeValid) {
        showValidationText();
    }

    event.preventDefault();
});
