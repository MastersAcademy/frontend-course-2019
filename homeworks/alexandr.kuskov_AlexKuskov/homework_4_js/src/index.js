// import { isValid } from './validation-module';

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

function setInputFieldStyle(isValid, element) {
    if (isValid) {
        setValidInputStyle(element);
    } else {
        setInvalidInputStyle(element);
    }
}

function showValidationText() {
    validationTextSpanEl.setAttribute('style', 'visibility: visible;');
}

formEl.addEventListener('submit', (event) => {
    const isFirstNameValid = !!firstNameInputEl.value;
    const isLastNameValid = !!lastNameInputEl.value;
    const isEmailValid = !!emailInputEl.value;
    const isPhoneValid = !!phoneInputEl.value;
    const isAgeValid = !!ageInputEl.value;

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
