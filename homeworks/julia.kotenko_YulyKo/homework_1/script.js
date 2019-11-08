function getEmailValue() {
    const email = document.querySelector('#email');
    return email.value;
}

function getNameValue() {
    const name = document.querySelector('#name');
    return name.value;
}

function getMessageValue() {
    const message = document.querySelector('#message');
    return message.value;
}

function showResultMessage() {
    const email = getEmailValue();
    const name = getNameValue();
    const message = getMessageValue();
    alert(`User ${name}(${email})
Your message: ${message} was sended to Jhon Smith`);
}

function validationName() {
    const name = getNameValue();
    if (/^[A-Za-z\s]+$/.test(name)) {
        showResultMessage();
    }
    alert('Your name is not correct written.\nRemove numbers and special symbols from input');
}

function validationOfEmail() {
    const mailFormat = /\S+@\S+\.\S+/;
    const email = getEmailValue();
    const name = getNameValue();
    if (email.match(mailFormat)) {
        validationName(name);
    }
    alert('Your e-mail is not correct');
}

function onSubmit() {
    const email = getMessageValue();
    const name = getNameValue();
    const message = getMessageValue();
    if (!!email && !!name && !!message) {
        validationOfEmail();
    } else {
        alert('It won\'t work that way.\nWrite information in all inputs');
    }
}
document.querySelector('#submit').addEventListener('click', onSubmit);
