let email = '';
let name = '';
let message = '';
const NAME_FORMAT = /^[A-Za-z\s]+$/;
const MAIL_FORMAT = /\S+@\S+\.\S+/;

function showResultMessage() {
    alert(`User ${name}\n(${email})
Your message: ${message} was sended to Jhon Smith`);
}

function validateName() {
    if (!NAME_FORMAT.test(name)) {
        return 'Your name is not correct';
    }
    return '';
}

function validateEmail() {
    if (!email.match((MAIL_FORMAT))) {
        return 'You have problem with email';
    }
    return '';
}

function onSubmit() {
    email = document.querySelector('#email').value;
    name = document.querySelector('#name').value;
    message = document.querySelector('#message').value;
    const validationError = validateEmail() || validateName();
    if (validationError) {
        alert(validationError);
    }
    return showResultMessage();
}
document.querySelector('#submit').addEventListener('click', onSubmit);
