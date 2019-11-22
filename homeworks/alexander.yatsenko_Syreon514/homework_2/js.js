function validationTemplates() {
    const templateName = /^[a-zA-Zа-яА-Я ]/;
    const templateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return { templateName, templateEmail };
}

function validateFields(templateName, name, templateEmail, email, message) {
    if (!templateName.test(name)) {
        document.getElementById('name').classList.add('error');
    } else if (!templateEmail.test(email)) {
        document.getElementById('email').classList.add('error');
    } else if (message === '') {
        document.getElementById('message').classList.add('error');
    } else {
        document.getElementById('form').reset();
        alert(`User name: ${name}\nUser e-mail: ${email}\nMessage: ${message}`);
    }
}

function showAlert(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const { templateName, templateEmail } = validationTemplates();

    validateFields(templateName, name, templateEmail, email, message);
}

document.getElementById('form__btn').addEventListener('click', showAlert);
