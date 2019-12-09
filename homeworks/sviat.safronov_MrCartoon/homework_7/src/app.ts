import { isValid } from './validator';

type SubmitEvent = Event & {
    target: HTMLElement;
}

const callback = (event: SubmitEvent) => {
    event.preventDefault();

    const firstName = (event.target.querySelector('#first-name') as HTMLInputElement);
    const lastName = (event.target.querySelector('#last-name') as HTMLInputElement);
    const email = (event.target.querySelector('#email') as HTMLInputElement);
    const phone = (event.target.querySelector('#phone') as HTMLInputElement);
    const age = (event.target.querySelector('#age') as HTMLInputElement);


    const allFields = [firstName, lastName, email, phone, age];
    allFields.forEach((dom) => dom.classList.remove('error'));

    console.log(allFields);

    if (!firstName.value
        || !isValid.minLength({ text: firstName.value, length: 2 })
        || !isValid.maxLength({ text: firstName.value, length: 20 })) firstName.classList.add('error');

    if (!lastName.value
        || !isValid.minLength({ text: lastName.value, length: 2 })
        || !isValid.maxLength({ text: lastName.value, length: 20 })) lastName.classList.add('error');

    if (!email.value || !isValid.email({ text: email.value })) email.classList.add('error');
    if (!phone.value || !isValid.phone({ text: phone.value })) phone.classList.add('error');
    if ((age.value || age.value === '0')
        && !isValid.numberRange({ text: age.value, min: 18, max: 120 })) age.classList.add('error');

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
