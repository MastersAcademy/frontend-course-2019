import { isValid } from './validate';

const nameForm = document.querySelector('#first-name');
const lastForm = document.querySelector('#last-name');
const mailForm = document.querySelector('#mail');
const phoneForm = document.querySelector('#phone');
const ageForm = document.querySelector('#age');
const submitForm = document.querySelector('#submit-form');

// eslint-disable-next-line no-useless-escape
const patternMail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
const patternPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

function error(element) {
    element.classList.add('error-border');
}

function delError(element) {
    element.classList.remove('error-border');
}

function checker() {
    let nameChek;
    if (isValid.minLength(nameForm.value, 2) && isValid.maxLength(nameForm.value, 20)) {
        nameChek = true;
        delError(nameForm);
    } else {
        error(nameForm);
    }
    let lastChek;
    if (isValid.minLength(lastForm.value, 2) && isValid.maxLength(lastForm.value, 20)) {
        lastChek = true;
        delError(lastForm);
    } else {
        error(lastForm);
    }
    let emailCheck;
    if (isValid.pattern(mailForm.value, patternMail)) {
        emailCheck = true;
        delError(mailForm);
    } else {
        error(mailForm);
    }
    let phoneCheck;
    if (isValid.pattern(phoneForm.value, patternPhone)) {
        delError(phoneForm);
    } else {
        error(phoneForm);
    }
    let ageCheck;
    if (ageForm.value) {
        if (isValid.numberRange(+ageForm.value, 18, 120)) {
            delError(ageForm);
            ageCheck = true;
        } else {
            error(ageForm);
        }
    } else {
        ageCheck = true;
    }

    if (nameChek && lastChek && emailCheck && phoneCheck && ageCheck) {
        console.log('valid');

        const validResult = document.getElementById('success');
        validResult.innerHTML = 'Validation successful!';
    } else {
        console.log('invalid');
    }
}

submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    checker();
});
