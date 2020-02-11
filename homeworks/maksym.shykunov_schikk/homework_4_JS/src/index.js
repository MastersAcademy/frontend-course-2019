import { isValid } from './validation-module';

(function () {
    const form = document.querySelector('#main_form');
    const inputs = document.querySelectorAll('.validate');
    const firstNameInput = document.querySelector('#first_name');
    const lastNameInput = document.querySelector('#last_name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const ageInput = document.querySelector('#age');
    const success = document.querySelector('.success-message');

    function nameValidation(text, min, max) {
        return isValid.minLength(text, min) && isValid.maxLength(text, max);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstNameValid = nameValidation(firstNameInput.value, 2, 20);
        const lastNameValid = nameValidation(lastNameInput.value, 2, 20);
        const emailValid = isValid.email(emailInput.value);
        const phoneValid = isValid.phone(phoneInput.value);
        const ageValid = isValid.numberRange(ageInput.value, 18, 120);

        function validInput(validate, inputName) {
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
