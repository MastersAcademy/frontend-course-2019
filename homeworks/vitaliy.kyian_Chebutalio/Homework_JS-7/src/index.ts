import { isValid } from './module';

const firstName = <HTMLInputElement>document.querySelector('.firstName');
const lastName = <HTMLInputElement>document.querySelector('.lastName');
const email = <HTMLInputElement>document.querySelector('.email');
const phone = <HTMLInputElement>document.querySelector('.phone');
const age = <HTMLInputElement>document.querySelector('.age');
const form = <HTMLInputElement>document.querySelector('.form');
const validationMessageElement = <HTMLInputElement>document.querySelector('.validation-msg');

type SubmitEvent = Event & { target: HTMLElement}

function validateNameField(): string | false {
    if (!firstName.value) return 'Name is required';
    if (!isValid.minLength({ text: firstName.value, length: 2 })) return 'To short name';
    if (!isValid.maxLength({ text: firstName.value, length: 20 })) return 'To long name';
    return false;
}

function validatelastNameField(): string | false {
    if (!lastName.value) return 'Last name is required';
    if (!isValid.minLength({ text: lastName.value, length: 2 })) return 'To short Last name';
    if (!isValid.maxLength({ text: lastName.value, length: 20 })) return 'To long Last name';
    return false;
}

function validateEmailField(): string | false {
    if(!email.value) return 'Email is required';
    if (!isValid.email({ text: email.value })) return 'Email is not valid';
    return false;
}

function validatePhoneField(): string | false {
    if (!phone.value) return 'Phone number is required';
    if (!isValid.phone({ text: phone.value })) return 'Phone number is not valid';
    return false;
}

function validateAgeField(): string | false {
    if (age.value && !isValid.numberRange({ text: age.value, min: 18, max: 120 })) return 'Age is not valid';
    return false;
}

form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const messages: string[] = [];

    const firstNameMessage = validateNameField();
    firstName.classList.toggle('error', !!firstNameMessage);
    if (firstNameMessage) messages.push(firstNameMessage);

    const lastNameMessage = validatelastNameField();
    lastName.classList.toggle('error', !!lastNameMessage);
    if (lastNameMessage) messages.push(lastNameMessage);

    const emailMessage = validateEmailField();
    email.classList.toggle('error', !!emailMessage);
    if (emailMessage) messages.push(emailMessage);

    const phoneMessage = validatePhoneField();
    phone.classList.toggle('error', !!phoneMessage);
    if (phoneMessage) messages.push(phoneMessage);

    const ageMessage = validateAgeField();
    age.classList.toggle('error', !!ageMessage);
    if (ageMessage) messages.push(ageMessage);

    if (messages.length > 0) {
        validationMessageElement.innerText = messages.join(', ');
        validationMessageElement.classList.add('error-msg');
    } else {
        validationMessageElement.innerText = 'Validation successful!';
        validationMessageElement.classList.add('success');
        validationMessageElement.classList.remove('error-msg');

    }
});
