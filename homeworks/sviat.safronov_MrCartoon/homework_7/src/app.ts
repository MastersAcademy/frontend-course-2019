import { isValid } from './validator';
import {SubmitEvent} from './types'

const callback = (event: SubmitEvent) => {
    event.preventDefault();

    const firstName = event.target.querySelector<HTMLInputElement>('#first-name');
    const lastName = event.target.querySelector<HTMLInputElement>('#last-name');
    const email = event.target.querySelector<HTMLInputElement>('#email');
    const phone = event.target.querySelector<HTMLInputElement>('#phone');
    const age = event.target.querySelector<HTMLInputElement>('#age');


    const allFields = [firstName, lastName, email, phone, age];
    allFields.forEach((dom) => dom.classList.remove('error'));

    console.log(allFields);

    if (!firstName.value
        || !isValid.minLength(firstName.value, 2)
        || !isValid.maxLength(firstName.value, 20)) firstName.classList.add('error');

    if (!lastName.value
        || !isValid.minLength(lastName.value, 2)
        || !isValid.maxLength(lastName.value, 20)) lastName.classList.add('error');

    if (!email.value || !isValid.email(email.value)) email.classList.add('error');
    if (!phone.value || !isValid.phone(phone.value)) phone.classList.add('error');
    if ((age.value || age.value === '0')
        && !isValid.numberRange(age.value, 18, 120)) age.classList.add('error');

    const result = event.target.querySelector('#result');
    if (allFields.map((dom) => dom.classList.contains('error')).includes(true)) {
        console.log('errors');
        result.classList.add('no-display');
    } else {
        console.log('no-error');
        result.classList.remove('no-display');
    }
};
document.querySelector('[data-validate-form]').addEventListener('submit', callback);
