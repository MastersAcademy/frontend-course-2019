import {minLength, maxLength, isEmail, isPhone, numberRange, pattern} from './validate';

const email = (document.getElementById('user-email') as HTMLInputElement);
const firstName = (document.getElementById('first-name') as HTMLInputElement);
const secondName = (document.getElementById('last-name') as HTMLInputElement);
const phone = (document.getElementById('user-phone') as HTMLInputElement);
const age = (document.getElementById('user-age') as HTMLInputElement);
const submit = (document.getElementById('btn-submit') as HTMLInputElement);
const successMessage = (document.getElementById('success-message') as HTMLInputElement);

const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const regexPhone = /^\\+38\\([0-9]{3}\\)[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;

function isValidFirstName(): boolean {

    const isFirstNameMinLengthValid = minLength({text: firstName.value, length: 2});
    const isFirstNameMaxLengthValid = maxLength({text: firstName.value, length: 20});

    if (isFirstNameMinLengthValid && isFirstNameMaxLengthValid && firstName.value !== '') {
        firstName.classList.remove('error');
        return true;
    } else {
        firstName.classList.add('error');
        return false;
    }
}

function isValidSecondName(): boolean {

    const isSecondNameMinLengthValid = minLength({text: secondName.value, length: 2});
    const isSecondNameMaxLengthValid = maxLength({text: secondName.value, length: 20});

    if (isSecondNameMinLengthValid && isSecondNameMaxLengthValid && secondName.value !== '') {
        secondName.classList.remove('error');
        return true;
    } else {
        secondName.classList.add('error');
        return false;
    }
}

function isValidEmail(): boolean {

    const isEmailValid = isEmail({text: email.value});
    const isEmailFormatValid = pattern({text: email.value, patterns: regexEmail});

    if (isEmailValid && isEmailFormatValid) {
        email.classList.remove('error');
        return true;
    } else {
        email.classList.add('error');
        return false;
    }
}

function isValidPhone(): boolean {

    const isPhoneValid = isPhone({text: phone.value});
    const isPhoneFormatValid = pattern({text: phone.value, patterns: regexPhone});

    if (isPhoneValid && isPhoneFormatValid) {
        phone.classList.remove('error');
        return true;
    } else {
        phone.classList.add('error');
        return false;
    }
}

function isValidAge(): boolean {
    if ((numberRange({text: Number(age.value), min: 18, max: 120})) || (age.value === '')) {
        age.classList.remove('error');
        return true;
    } else {
        age.classList.add('error');
        return false;
    }
}

firstName.addEventListener('change', isValidFirstName);
secondName.addEventListener('change', isValidSecondName);
email.addEventListener('change', isValidEmail);
phone.addEventListener('change', isValidPhone);
age.addEventListener('change', isValidAge);

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const isFirstName = isValidFirstName();
    const isSecondName = isValidSecondName();
    const isEmail = isValidEmail();
    const isPhone = isValidPhone();
    const isAge = isValidAge();

    if (isFirstName && isSecondName && isEmail && isPhone && isAge) {
        successMessage.classList.remove('hide');
    } else {
        successMessage.classList.add('hide');
    }
});
