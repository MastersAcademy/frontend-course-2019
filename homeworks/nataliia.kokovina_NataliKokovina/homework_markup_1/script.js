const message = {};

function validateName(name) {
    const reName = /^[a-zA-Zа-яА-Я ]/;
    return reName.test(name);
}

function validateEmail(email) {
    const reEmail = /^[a-zA-Z0-9.!#$%&*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reEmail.test(email);
}

function validated(name, email, text) {
    if (!validateName(name)) {
        document.querySelector('.invalidFormName').classList.add('error');
    }

    if (!validateEmail(email)) {
        document.querySelector('.invalidFormEmail').classList.add('error');
    }

    if (!text) {
        document.querySelector('.invalidFormMessages').classList.add('empty');
    }

    if (validateName(name) && validateEmail(email) && text) {
        return true;
    }

    document.querySelector('.invalidForm').classList.add('empty');
    return false;
}

function infFromForm() {
    const nameFromForm = document.querySelector('.form-name').value;
    const emailFromForm = document.querySelector('.form-email').value;
    const textFromForm = document.querySelector('.form-messages').value;

    if (validated(nameFromForm, emailFromForm, textFromForm)) {
        message.name = nameFromForm;
        message.email = emailFromForm;
        message.text = textFromForm;
        alert(`${message.name} send messages "${message.text}" from ${message.email}`);
    }

    document.querySelector('.sectionContactMe__form').reset();

    return message;
}

document.querySelector('.form_button').addEventListener('click', infFromForm);
