import { isValid } from './validate.module';

const form = document.querySelector<HTMLFormElement>('#form');
const formGroups = document.querySelectorAll<HTMLElement>('.form-group');

const firstName = document.querySelector<HTMLInputElement>('#first-name');
const lastName = document.querySelector<HTMLInputElement>('#last-name');
const email = document.querySelector<HTMLInputElement>('#email');
const phone = document.querySelector<HTMLInputElement>('#phone');
const age = document.querySelector<HTMLInputElement>('#age');

const success = document.querySelector<HTMLElement>('.success');

function nameValidation(text: string, min: number, max: number): boolean {
    return isValid.minLength(text, min) && isValid.maxLength(text, max);
}

function emailValidation(text: string): boolean {
    return isValid.email(text) && isValid.minLength(text, 1);
}

function phoneValidation(text: string): boolean {
    return isValid.phone(text) && isValid.minLength(text, 1);
}

function ageValidation(text: string, min: number, max: number): boolean {
    return text === '' || isValid.numberRange(text, min, max);
}

function renderErrorField(isFieldValid: boolean, field: HTMLInputElement) {
    if (!isFieldValid) {
        field.closest('.form-group').classList.add('error');
    }
}

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    success.classList.remove('open');
    formGroups.forEach((el: HTMLElement) => {
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
        renderErrorField(firstNameValid, firstName);
        renderErrorField(lastNameValid, lastName);
        renderErrorField(emailValid, email);
        renderErrorField(phoneValid, phone);
        renderErrorField(ageValid, age);
    }
});
