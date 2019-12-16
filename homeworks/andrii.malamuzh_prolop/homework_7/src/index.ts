import { isValid } from './validate.module';

const form = document.querySelector<HTMLFormElement>('#form');
const formGroup = document.querySelectorAll<HTMLElement>('.form-group');

const firstName = document.querySelector<HTMLInputElement>('#first-name');
const lastName = document.querySelector<HTMLInputElement>('#last-name');
const email = document.querySelector<HTMLInputElement>('#email');
const phone = document.querySelector<HTMLInputElement>('#phone');
const age = document.querySelector<HTMLInputElement>('#age');

const success = document.querySelector<HTMLElement>('.success');

function nameValidation(text: string, min: number, max: number):boolean {
    return isValid.minLength(text, min) && isValid.maxLength(text, max);
}

function emailValidation(text: string): boolean {
    return isValid.email(text) && isValid.minLength(text, 1);
}

function phoneValidation(text: string): boolean {
    return isValid.phone(text) && isValid.minLength(text, 1);
}

function ageValidation(text: string, min: number, max: number): boolean {
    return !!(text === '' || isValid.numberRange(text, min, max));
}

function errorField(isFieldValid: boolean, fieldName: HTMLInputElement) {
    if (!isFieldValid) {
        fieldName.closest('.form-group').classList.add('error');
    }
}

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    success.classList.remove('open');
    [].forEach.call(formGroup, (el: HTMLElement) => {
        el.classList.remove('error');
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
