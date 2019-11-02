const formInputs = document.querySelectorAll('.form__input');
const messagesTextarea = document.querySelector('.form__messages-textarea');
const sendMessageButton = document.querySelector('.form__send-messages-btn');

sendMessageButton.addEventListener('click', (event) => {
    // this pattern matches cases when only name or name + surname is inputed
    const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const emailPattern = /^\S+@\S+\.\S+$/;

    const isInputNameValid = formInputs[0].value.match(namePattern);
    const isInputEmailValid = formInputs[1].value.match(emailPattern);

    if (isInputNameValid && isInputEmailValid && messagesTextarea.value) {
        alert(`Name:  ${formInputs[0].value}
Email: ${formInputs[1].value}
Messages: ${messagesTextarea.value}`);
    }

    event.preventDefault();
});
