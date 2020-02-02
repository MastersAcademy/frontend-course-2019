import { toggleFieldError, toggleSubmitMes } from './helper';
import { reName, reEmail, rePhone, reAge } from './regex';
import { Form } from './interface';

function isValidName(name: string, min: number, max: number): boolean {
    return reName.test(name) && name.length >= min && name.length <= max;
}

function isValidAge(numberRange: string, min: number, max: number): boolean {
    if (numberRange.length) {
        return reAge.test(numberRange)
        && Number(numberRange) >= min
        && Number(numberRange) <= max;
    }

    return true;
}

export function isValid(form: Form): boolean {
    const isFirstNameValid = isValidName(form.firstName.value, 2, 20);
    const islastNameValid = isValidName(form.lastName.value, 2, 20);
    const isEmailValid = reEmail.test(form.email.value);
    const isPhoneValid = rePhone.test(form.phone.value);
    const isAgeValid = isValidAge(form.age.value, 18, 120);

    toggleFieldError(form.firstName, isFirstNameValid);
    toggleFieldError(form.lastName, islastNameValid);
    toggleFieldError(form.email, isEmailValid);
    toggleFieldError(form.phone, isPhoneValid);
    toggleFieldError(form.age, isAgeValid);

    if (isFirstNameValid && islastNameValid && isEmailValid && isPhoneValid && isAgeValid) {
        toggleSubmitMes(document.querySelector('.successfullFormMessages'), document.querySelector('.invalidFormMessages'));
        return true;
    }

    toggleSubmitMes(document.querySelector('.invalidFormMessages'), document.querySelector('.successfullFormMessages'));
    return false;
}
