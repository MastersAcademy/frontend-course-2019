function validationTemplates() {
    let templateName = /^[a-zA-Zа-яА-Я ]/;
    let templateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
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

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let { templateName, templateEmail } = validationTemplates();
    
    validateFields(templateName, name, templateEmail, email, message);
};

document.getElementById('form__btn').addEventListener('click', showAlert);
