import {
    addInvalid, cleared, addSubmitFormMes, clearedSubmitMes,
} from './helper';
import {
    reName, reEmail, rePhone, reAge,
} from './regex';

interface InputString {
    value?: string;
}

interface Form {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    age: HTMLInputElement;
}

function isValidName(name: InputString, min: number, max: number): boolean {
    return reName.test(name.value) && name.value.length >= min && name.value.length <= max;
}

function isValidAge(numberRange: InputString, min: number, max: number): boolean {
    if (numberRange.value.length !== 0) {
        return reAge.test(numberRange.value)
        && Number(numberRange.value) >= min
        && Number(numberRange.value) <= max;
    }

    return true;
}

export function isValid(form: Form): boolean {
    if (!isValidName(form.firstName, 2, 20)) {
        addInvalid(form.firstName);
    } else {
        cleared(form.firstName);
    }

    if (!isValidName(form.lastName, 2, 20)) {
        addInvalid(form.lastName);
    } else {
        cleared(form.lastName);
    }

    if (!reEmail.test(form.email.value)) {
        addInvalid(form.email);
    } else {
        cleared(form.email);
    }

    if (!rePhone.test(form.phone.value)) {
        addInvalid(form.phone);
    } else {
        cleared(form.phone);
    }

    if (!isValidAge(form.age, 18, 120)) {
        addInvalid(form.age);
    } else {
        cleared(form.age);
    }

    if (isValidName(form.firstName, 2, 20)
    && isValidName(form.lastName, 2, 20)
    && reEmail.test(form.email.value)
    && rePhone.test(form.phone.value)
    && isValidAge(form.age, 18, 120)) {
        clearedSubmitMes(document.querySelector('.invalidFormMessages'));
        addSubmitFormMes(document.querySelector('.successfullFormMessages'));
        return true;
    }

    clearedSubmitMes(document.querySelector('.successfullFormMessages'));
    addSubmitFormMes(document.querySelector('.invalidFormMessages'));
    return false;
}
