const btnSubmit = document.getElementById('btn-submit-messages');

// Validate field.
function validateInputName(field) {
    if ((field.value === '') || (!field.value.replace(/\s/g, '').length) || (!field.value.match(/^[a-zA-Z\s]*$/))) {
        if (document.querySelectorAll('.user-name-wrapper > p').length <= 0) {
            // Create an error message.
            const errorMessage = document.createElement('p');
            const errorText = document.createTextNode('The field can contain only letters and spaces.');
            errorMessage.id = 'user-name-error-message';
            errorMessage.appendChild(errorText);
            document.getElementsByClassName('user-name-wrapper')['0'].appendChild(errorMessage);
        }

        // Add class to style input if value not valid.
        field.classList.add('error');
    }
}

// Validate field.
function validateInputEmail(field) {
    // eslint-disable-next-line no-useless-escape
    if ((field.value === '') || (!field.value.replace(/\s/g, '').length) || (!field.value.match(/^(([^<>()/\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
        if (document.querySelectorAll('.user-email-wrapper > p').length <= 0) {
            // Create an error message.
            const errorMessage = document.createElement('p');
            const errorText = document.createTextNode('The field can\'t be empty.');

            errorMessage.id = 'user-email-error-message';
            errorMessage.appendChild(errorText);
            document.getElementsByClassName('user-email-wrapper')['0'].appendChild(errorMessage);
        }

        // Add class to style input if value not valid.
        field.classList.add('error');
    }
}

// Validate field.
function validateMessage(field) {
    if ((field.value === '') || (!field.value.replace(/\s/g, '').length)) {
        if (document.querySelectorAll('.message-wrapper > p').length <= 0) {
            // Create an error message.
            const errorMessage = document.createElement('p');
            const errorText = document.createTextNode('The field can\'t be empty');
            errorMessage.id = 'message-error-message';
            errorMessage.appendChild(errorText);
            document.getElementsByClassName('message-wrapper')['0'].appendChild(errorMessage);
        }

        // Add class to style input if value not valid.
        field.classList.add('error');
    }
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    // Validate fields.
    validateInputName(document.getElementById('field-user-name'));
    validateInputEmail(document.getElementById('field-user-email'));
    validateMessage(document.getElementById('filed-message'));

    // If fields are valid show user data.
    if ((!document.getElementById('field-user-name').classList.contains('error')) && (!document.getElementById('field-user-email').classList.contains('error')) && (!document.getElementById('filed-message').classList.contains('error'))) {
        // Clear fields.
        document.getElementById('field-user-name').value = '';
        document.getElementById('field-user-email').value = '';
        document.getElementById('field-subject').value = '';
        document.getElementById('filed-message').value = '';
    }
});

document.getElementById('field-user-name').addEventListener('focus', function () {
    // Remove error class and error message.
    if (this.classList.contains('error')) {
        this.classList.remove('error');
        document.getElementById('user-name-error-message').parentNode.removeChild(document.getElementById('user-name-error-message'));
    }
});


document.getElementById('field-user-name').addEventListener('focusout', function () {
    validateInputName(this);
});

document.getElementById('field-user-email').addEventListener('focus', function () {
    // Remove error class and error message.
    if (this.classList.contains('error')) {
        this.classList.remove('error');
        document.getElementById('user-email-error-message').parentNode.removeChild(document.getElementById('user-email-error-message'));
    }
});

document.getElementById('field-user-email').addEventListener('focusout', function () {
    validateInputEmail(this);
});

document.getElementById('filed-message').addEventListener('focus', function () {
    // Remove error class and error message.
    if (this.classList.contains('error')) {
        this.classList.remove('error');
        document.getElementById('message-error-message').parentNode.removeChild(document.getElementById('message-error-message'));
    }
});

document.getElementById('filed-message').addEventListener('focusout', function () {
    validateMessage(this);
});

const checkBox = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('menu-list');

// If the checkbox is checked, display the output text
function toogleMenu() {
    if (checkBox.checked === true) {
        mobileMenu.classList.add('opened');
    } else {
        mobileMenu.classList.remove('opened');
    }
}

toogleMenu();

checkBox.addEventListener('change', (e) => {
    e.preventDefault();
    toogleMenu();
});
