import { isValid } from './validation-module';

(function () {
    const form: HTMLFormElement = document.querySelector('#main_form');
    const firstNameInput: HTMLInputElement = document.querySelector('#first_name');
    const lastNameInput: HTMLInputElement = document.querySelector('#last_name');
    const emailInput: HTMLInputElement = document.querySelector('#email');
    const phoneInput: HTMLInputElement = document.querySelector('#phone');
    const ageInput: HTMLInputElement = document.querySelector('#age');
    const success: HTMLElement = document.querySelector('.success-message');

    function nameValidation(text: String, min: Number, max: Number): boolean {
        return isValid.minLength(text, min) && isValid.maxLength(text, max);
    }

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const firstNameIsValid = nameValidation(firstNameInput.value, 2, 20);
        const lastNameIsValid = nameValidation(lastNameInput.value, 2, 20);
        const emailIsValid = isValid.email(emailInput.value);
        const phoneIsValid = isValid.phone(phoneInput.value);
        const ageIsValid = isValid.numberRange(ageInput.value, 18, 120);

        function validateInput(validate: boolean, inputName: HTMLInputElement) {
            inputName.classList.toggle('invalid', !validate);
        }

        validateInput(firstNameIsValid, firstNameInput);
        validateInput(lastNameIsValid, lastNameInput);
        validateInput(emailIsValid, emailInput);
        validateInput(phoneIsValid, phoneInput);
        validateInput(ageIsValid, ageInput);

        const validate = firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid && ageIsValid;

        if (validate) {
            success.style.display = 'block';
        }
    });
}());
