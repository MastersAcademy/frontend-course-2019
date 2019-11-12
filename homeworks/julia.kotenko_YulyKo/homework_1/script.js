let email = '';
let name = '';
let message = '';

function showResultMessage() {
    alert(`User ${name}\n(${email})
Your message: ${message} was sended to Jhon Smith`);
}

function validateName() {
    const nameFormat = /^[A-Za-z\s]+$/;
    if (!nameFormat.test(name)) {
        showResultMessage();
        alert('Your name is not correct written.\nRemove numbers and special symbols from input');
        return false;
    }
    return true;
}

function validateEmail() {
    const mailFormat = /\S+@\S+\.\S+/;
    if (!email.match(mailFormat)) {
        alert('Your e-mail is not correct');
        return false;
    }
    return true;
}

function showValidationError(validationError) {
    console.log(validationError);
}

function onSubmit() {
    email = document.querySelector('#email').value;
    name = document.querySelector('#name').value;
    message = document.querySelector('#message').value;
    console.log(email);
    const validationError = validateEmail() || validateName();
    if (validationError) {
        showValidationError(validationError);
        showResultMessage();
    }
}
document.querySelector('#submit').addEventListener('click', onSubmit);
