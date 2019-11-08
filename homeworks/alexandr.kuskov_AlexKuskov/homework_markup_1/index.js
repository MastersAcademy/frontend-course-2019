const nameInputEl = document.querySelectorAll('.form__input')[0];
const emailInputEl = document.querySelectorAll('.form__input')[1];
const messagesTextareaEl = document.querySelector('.form__messages-textarea');
const sendMessageButton = document.querySelector('.form__send-messages-btn');

const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
const emailPattern = /^\S+@\S+\.\S+$/;

sendMessageButton.addEventListener('click', (event) => {
    const isInputNameValid = nameInputEl.value.match(namePattern);
    const isInputEmailValid = emailInputEl.value.match(emailPattern);

    if (isInputNameValid && isInputEmailValid && messagesTextareaEl.value) {
        alert(`Name:  ${nameInputEl.value}
Email: ${emailInputEl.value}
Messages: ${messagesTextareaEl.value}`);
    }

    event.preventDefault();
});
