const formEl = document.querySelector('.js-form');
const nameInputEl = document.querySelector('.js-name');
const emailInputEl = document.querySelector('.js-email');
const messagesTextareaEl = document.querySelector('.js-messages');

const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
const emailPattern = /^\S+@\S+\.\S+$/;

function isInputValid(elem, pattern) {
    return elem.value.match(pattern);
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
        const alertOutput = `Name:  ${name}
                             Email: ${email}
                             Messages: ${messages}`;

        alert(alertOutput);
    }

    event.preventDefault();
});
