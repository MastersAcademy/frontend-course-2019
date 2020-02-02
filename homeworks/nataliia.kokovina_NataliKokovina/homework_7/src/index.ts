import { isValid } from './validation';
import { Form, FormValue } from './interface';

function submitForm(event: Event): void {
    event.preventDefault();

    let formValue: FormValue = {};

    const form: Form = {
        firstName: document.querySelector('#firstName'),
        lastName: document.querySelector('#lastName'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        age: document.querySelector('#age'),
    };

    if (isValid(form)) {
        Object.keys(form).forEach(key => {
            formValue[key] = form[key].value;
        });

        console.log(formValue);
    }
}

document.querySelector('.form_button').addEventListener('click', submitForm);
