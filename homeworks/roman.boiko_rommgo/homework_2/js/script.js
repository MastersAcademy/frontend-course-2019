const nameForm = document.querySelector('#contact-name');
const emailForm = document.querySelector('#contact-mail');
const messageForm = document.querySelector('#contact-message');

// eslint-disable-next-line no-useless-escape
const patternMail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
const patternName = /^[a-z]+$/i;

const nameError = 'Only letters';
const emailError = 'Example: example@mail.com';
const emptyText = 'Field can not be empty';

const submitForm = document.querySelector('#submit-form');


function buildError(element, text) {
    element.classList.add('error-border');
    const node = document.createElement('div');
    node.setAttribute('class', 'error-text');
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    element.closest('label').appendChild(node);
}
function validate(element, pattern, text) {
    if (element.value.length < 1) {
        buildError(element, emptyText);
        return false;
    }
    if (pattern) {
        if (!pattern.test(element.value)) {
            buildError(element, text);
            return false;
        }
    }
    element.classList.remove('error-border');
    return true;
}

function checker() {
    const nameChek = validate(nameForm, patternName, nameError);
    const emailCheck = validate(emailForm, patternMail, emailError);
    const messageCheck = validate(messageForm);

    if (nameChek && emailCheck && messageCheck) {
        alert(`Name: ${nameForm.value}\nFrom: ${emailForm.value}\nMessage: ${messageForm.value}`);
    }
}

submitForm.addEventListener('click', (e) => {
    document.querySelectorAll('.error-text').forEach((a) => a.remove());
    e.preventDefault();
    checker();
});
