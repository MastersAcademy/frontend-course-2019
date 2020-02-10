import { toggleFieldError, toggleSubmitMessage } from './helper';
import { regExpForName, regExpForEmail, regExpForPhone } from './regex';
import { Form } from './interface';

const successfullFormMessages: HTMLInputElement = document.querySelector('.successfullFormMessages');
const invalidFormMessages: HTMLInputElement = document.querySelector('.invalidFormMessages');

function isValidName(name: string, min: number, max: number): boolean {
    return regExpForName.test(name) && name.length >= min && name.length <= max;
}

function isValidAge(age: string, min: number, max: number): boolean {
    const numberAge = + age;
    if (numberAge === 0 || numberAge >= min && numberAge<= max) {
        return true;
    }
    return false;
}

export function isValid(form: Form): boolean {
    const isFirstNameValid = isValidName(form.firstName.value, 2, 20);
    const islastNameValid = isValidName(form.lastName.value, 2, 20);
    const isEmailValid = regExpForEmail.test(form.email.value);
    const isPhoneValid = regExpForPhone.test(form.phone.value);
    const isAgeValid = isValidAge(form.age.value, 18, 120);
    const isFormValid = isFirstNameValid && islastNameValid && isEmailValid && isPhoneValid && isAgeValid;

    toggleFieldError(form.firstName, isFirstNameValid);
    toggleFieldError(form.lastName, islastNameValid);
    toggleFieldError(form.email, isEmailValid);
    toggleFieldError(form.phone, isPhoneValid);
    toggleFieldError(form.age, isAgeValid);
    
    toggleSubmitMessage(successfullFormMessages, invalidFormMessages, isFormValid);

    return isFormValid;
}
