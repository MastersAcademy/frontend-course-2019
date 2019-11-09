const formEl = document.querySelector('.js-feedback-form');
const nameInputEl = document.querySelector('.js-feedback-name');
const emailInputEl = document.querySelector('.js-feedback-email');
const messagesTextareaEl = document.querySelector('.js-feedback-messages');

const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
const emailPattern = /^\S+@\S+\.\S+$/;

function isInputValid(elem, pattern) {
    return elem.value.match(pattern);
}

function removeExtraWhitespaces(text) {
    return text.replace(/ {2,}/g, '');
}

function getOutputText(name, email, messages) {
    const alertOutput = `Name: ${name}
                         Email: ${email}
                         Messages: ${messages}`;

    return removeExtraWhitespaces(alertOutput);
}

formEl.addEventListener('submit', (event) => {
    const isInputNameValid = isInputValid(nameInputEl, namePattern);
    const isInputEmailValid = isInputValid(emailInputEl, emailPattern);

    if (isInputNameValid && isInputEmailValid && messagesTextareaEl.value) {
        const [name, email, messages] = [
            nameInputEl.value,
            emailInputEl.value,
            messagesTextareaEl.value,
        ];

        alert(getOutputText(name, email, messages));
    }

    event.preventDefault();
});
