import { minLength, maxLength, isEmail, isPhone, numberRange, pattern} from './validate';

const email = (document.getElementById('user-email') as HTMLInputElement);
const firstName = (document.getElementById('first-name') as HTMLInputElement);
const secondName = (document.getElementById('last-name') as HTMLInputElement);
const phone = (document.getElementById('user-phone') as HTMLInputElement);
const age = (document.getElementById('user-age') as HTMLInputElement);
const submit = (document.getElementById('btn-submit') as HTMLInputElement);
const successMessage = (document.getElementById('success-message') as HTMLInputElement);

function isValidFirstName(): void {

    if ((minLength({text: firstName.value, length: 2})) && (maxLength({text: firstName.value, length: 20})) && !(firstName.value === '')) {
        firstName.classList.remove('error');
    } else {
        firstName.classList.add('error');
    }
}

function isValidSecondName(): void {

    if ((minLength({text: secondName.value, length: 2})) && (maxLength({text: secondName.value,  length: 20})) && !(secondName.value === '')) {
        secondName.classList.remove('error');
    } else {
        secondName.classList.add('error');
    }
}

function isValidEmail(): void {
    // eslint-disable-next-line no-useless-escape

    const regexEmail = '^(([^<>()/\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    if ((isEmail({text: email.value})) && (pattern({text: email.value, pattern: regexEmail}))) {
        email.classList.remove('error');
    } else {
        email.classList.add('error');
    }
}

function isValidPhone(): void {

    // eslint-disable-next-line no-useless-escape

    const regexPhone = '^\\+38\\([0-9]{3}\\)[0-9]{3}[-][0-9]{2}[-][0-9]{2}$';
    if ((isPhone({text : phone.value})) && (pattern({text : phone.value, pattern: regexPhone}))) {
        phone.classList.remove('error');
    } else {
        phone.classList.add('error');
    }
}

function isValidAge() {
    if ((numberRange({text: age.value, min: 18, max: 120})) || (age.value === '')) {
        age.classList.remove('error');
    } else {
        age.classList.add('error');
    }
}

firstName.addEventListener('change', () => {
    isValidFirstName();
});

secondName.addEventListener('change', () => {
    isValidSecondName();
});

email.addEventListener('change', () => {
    isValidEmail();
});

phone.addEventListener('change', () => {
    isValidPhone();
});

age.addEventListener('change', () => {
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
    } else {
        successMessage.classList.remove('hide');
    }
});
