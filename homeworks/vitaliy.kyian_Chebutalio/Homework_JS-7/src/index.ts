import { isValid } from './module';

const name = <HTMLInputElement>document.querySelector('.name');
const lastName = <HTMLInputElement>document.querySelector('.lastName');
const email = <HTMLInputElement>document.querySelector('.email');
const phone = <HTMLInputElement>document.querySelector('.phone');
const age = <HTMLInputElement>document.querySelector('.age');
const form = <HTMLInputElement>document.querySelector('.form');
const errorElement = <HTMLInputElement>document.querySelector('.error-msg');
const succesElement = <HTMLInputElement>document.querySelector('.succes');

type SubmitEvent = Event & { target: HTMLElement}

form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const messages: string[] = [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
        name.classList.add('error');
    } else if (!isValid.minLength({ text: name.value, length: 2 })) {
        messages.push('To short name');
        name.classList.add('error');
    } else if (!isValid.maxLength({ text: name.value, length: 20 })) {
        messages.push('To long name');
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    if (lastName.value === '' || lastName.value == null) {
        messages.push('Last name is required');
        lastName.classList.add('error');
    } else if (!isValid.minLength({ text: lastName.value, length: 2 })) {
        messages.push('To short Last name');
        lastName.classList.add('error');
    } else if (!isValid.maxLength({ text: lastName.value, length: 20 })) {
        messages.push('To long Last name');
        lastName.classList.add('error');
    } else {
        lastName.classList.remove('error');
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
        email.classList.add('error');
    } else if (!isValid.email({ text: email.value })) {
        messages.push('Email is not valid');
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (phone.value === '' || phone.value == null) {
        messages.push('Phone number is required');
        phone.classList.add('error');
    } else if (!isValid.phone({ text: phone.value })) {
        messages.push('Phone number is not valid');
        phone.classList.add('error');
    } else {
        phone.classList.remove('error');
    }

    if ((age.value)) {
        if (!isValid.numberRange({ text: age.value, min: 18, max: 120 })) {
            messages.push('Age is not valid');
            age.classList.add('error');
        } else {
            age.classList.remove('error');
        }
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        succesElement.innerText = '';
    } else {
        succesElement.innerText = 'Validation successful!';
        errorElement.innerText = '';
    }
});
