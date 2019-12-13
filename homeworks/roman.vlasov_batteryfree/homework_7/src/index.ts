import { isValid } from './validator';

const styleValidField = ['valid-error--color', 'valid-error--border'];
const styleValidText = ['valid-error--color'];

const sendForm = document.querySelector<HTMLFormElement>('.js-form');
const sendFirstName = document.querySelector<HTMLFormElement>('.js-first-name');
const sendLastName = document.querySelector<HTMLFormElement>('.js-last-name');
const sendMail = document.querySelector<HTMLFormElement>('.js-email');
const sendPhone = document.querySelector<HTMLFormElement>('.js-phone');
const sendAge = document.querySelector<HTMLFormElement>('.js-age');
const sendText = document.querySelector<HTMLFormElement>('.js-text');

function setStyleValid(element: HTMLFormElement, isDataValid: boolean, clss: string[]): void {
    clss.map((cls) => element.classList.toggle(cls, !isDataValid));
}

function nameValid(text: string, min: number, max: number): boolean {
    return isValid.minLength(text, min) && isValid.maxLength(text, max);
}

function isValidete(): boolean {
    const isValidFirstName = nameValid(sendFirstName.value, 2, 20);
    const isValidLastName = nameValid(sendLastName.value, 2, 20);
    const isValidMail = isValid.email(sendMail.value);
    const isValidPhone = isValid.phone(sendPhone.value);
    const isValidAge = isValid.numberRange(sendAge.value, 18, 120) || !sendAge.value;

    setStyleValid(sendFirstName, isValidFirstName, styleValidField);
    setStyleValid(sendLastName, isValidLastName, styleValidField);
    setStyleValid(sendMail, isValidMail, styleValidField);
    setStyleValid(sendPhone, isValidPhone, styleValidField);
    setStyleValid(sendAge, isValidAge, styleValidField);

    return isValidFirstName && isValidLastName && isValidMail && isValidPhone && isValidAge;
}

sendForm.addEventListener('submit', (element: Event) => {
    element.preventDefault();
    if (isValidete()) {
        sendText.innerHTML = 'Validation successful! <br>';
        setStyleValid(sendText, true, styleValidText);
    } else {
        sendText.innerHTML = 'Validation ERROR!!! <br>';
        setStyleValid(sendText, false, styleValidText);
    }
});
