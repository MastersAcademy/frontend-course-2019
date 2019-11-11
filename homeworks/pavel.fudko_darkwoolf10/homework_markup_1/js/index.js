const name = document.getElementsByClassName('form-name')[0];
const email = document.getElementsByClassName('form-email')[0];
const message = document.getElementsByClassName('form-message')[0];
const btn = document.getElementsByClassName('about-btn')[0];
let error = false;
const data = [name, email, message];

function isEmpty(field) {
    if (field.value === '') {
        field.setAttribute('style', 'border: 1px solid red');
        error = true;
        return;
    }

    field.setAttribute('style', 'border: 1px solid green');
}

function checkPattern(field, pattern = '') {
    if (field.value.match(pattern) !== null) {
        field.setAttribute('style', 'border: 1px solid green');
        return;
    }

    field.setAttribute('style', 'border: 1px solid red');
    error = true;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    error = false;

    data.forEach((item) => {
        isEmpty(item);
    });

    checkPattern(name, /^[A-Za-z]+$/);
    checkPattern(email, /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

    if (error === true) return false;

    alert(`Name: ${name.value} \n Email: ${email.value} \n Message: ${message.value}`);

    return null;
});
