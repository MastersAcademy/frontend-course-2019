const formEl = document.querySelector('.js-form');
const nameInputEl = document.querySelector('.js-name');
const emailInputEl = document.querySelector('.js-email');
const messagesTextareaEl = document.querySelector('.js-messages');

const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
const emailPattern = /^\S+@\S+\.\S+$/;

formEl.addEventListener('submit', (event) => {
    const isInputNameValid = nameInputEl.value.match(namePattern);
    const isInputEmailValid = emailInputEl.value.match(emailPattern);

    if (isInputNameValid && isInputEmailValid && messagesTextareaEl.value) {
        alert(`Name:  ${nameInputEl.value}
Email: ${emailInputEl.value}
Messages: ${messagesTextareaEl.value}`);
    }

    event.preventDefault();
});
