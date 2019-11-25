import { isValid } from './validation';

function submitForm(event) {
    event.preventDefault();
    const formValue = {};

    const form = {
        firstName: document.querySelector('#firstName'),
        lastName: document.querySelector('#lastName'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        age: document.querySelector('#age'),
    };

    if (isValid(form)) {
        Object.keys(form).forEach((key) => {
            formValue[key] = form[key].value;
        });
        console.log(formValue);
        document.querySelector('.form').reset();
    }
}

document.querySelector('.form_button').addEventListener('click', submitForm);
