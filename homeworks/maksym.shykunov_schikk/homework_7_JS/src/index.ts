import { isValid } from './validation-module';

(function () {
    const form: HTMLFormElement = document.querySelector('#main_form');
    const inputs: NodeListOf<Element> = document.querySelectorAll('.validate');
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

        const firstNameValid = nameValidation(firstNameInput.value, 2, 20);
        const lastNameValid = nameValidation(lastNameInput.value, 2, 20);
        const emailValid = isValid.email(emailInput.value);
        const phoneValid = isValid.phone(phoneInput.value);
        const ageValid = isValid.numberRange(ageInput.value, 18, 120);

        function validInput(validate: boolean, inputName: HTMLInputElement) {
            if (!validate) {
                inputName.classList.add('invalid');
            } else {
                inputName.classList.remove('invalid');
            }
        }

        validInput(firstNameValid, firstNameInput);
        validInput(lastNameValid, lastNameInput);
        validInput(emailValid, emailInput);
        validInput(phoneValid, phoneInput);
        validInput(ageValid, ageInput);

        const valid = firstNameValid && lastNameValid && emailValid && phoneValid && ageValid;

        for (let i = 0; i < inputs.length; i++) {
            if (valid) {
                success.style.display = 'block';
                inputs[i].classList.remove('invalid');
            }
        }
    });
}());
