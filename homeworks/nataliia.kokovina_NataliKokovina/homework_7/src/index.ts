import { isValid } from './validation';

interface FormValue {
    [key: string]: string;
}

interface Form {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    age: HTMLInputElement;
    [key: string]: HTMLInputElement;
}

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
