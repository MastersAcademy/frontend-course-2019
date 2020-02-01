import { isValid } from './validation-module';

const formEl: HTMLFormElement = document.querySelector('.js-registration-form');
const firstNameInputEl: HTMLInputElement = document.querySelector('.js-registration-first-name');
const lastNameInputEl: HTMLInputElement = document.querySelector('.js-registration-last-name');
const emailInputEl: HTMLInputElement = document.querySelector('.js-registration-email');
const phoneInputEl: HTMLInputElement = document.querySelector('.js-registration-phone');
const ageInputEl: HTMLInputElement = document.querySelector('.js-registration-age');
const validationTextSpanEl: HTMLSpanElement = document.querySelector('.js-registration-validation');

function setInputFieldStyle(isInputValid: boolean, element: HTMLInputElement) {
    isInputValid ?
    element.classList.remove('form__input--invalid') :
    element.classList.add('form__input--invalid');
}

function showValidationText() {
    validationTextSpanEl.classList.remove('hidden');
}

function isNameValid(name: string, min: number, max: number): boolean {
    return isValid.minLength(name, min) && isValid.maxLength(name, max);
}

formEl.addEventListener('submit', (event: Event) => {
    const isFirstNameValid: boolean = isNameValid(firstNameInputEl.value, 2, 20);
    const isLastNameValid: boolean = isNameValid(lastNameInputEl.value, 2, 20);
    const isEmailValid: boolean = isValid.email(emailInputEl.value);
    const isPhoneValid: boolean = isValid.phone(phoneInputEl.value);
    const isAgeValid: boolean = isValid.numberRange(ageInputEl.value, 18, 120);

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
