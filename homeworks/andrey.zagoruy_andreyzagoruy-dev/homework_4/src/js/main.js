import IsValid from './validator';

function setFieldState(field, isValid) {
    field.classList.toggle('c-form__field--invalid', !isValid);
}

function setFormState(form, invalidFields) {
    form.classList.toggle('c-form--valid', invalidFields === 0);
}

const formToValidate = document.querySelector('.js-form');
const firstNameField = formToValidate.querySelector('.js-form__firstname');
const lastNameField = formToValidate.querySelector('.js-form__lastname');
const emailField = formToValidate.querySelector('.js-form__email');
const phoneField = formToValidate.querySelector('.js-form__phone');
const ageField = formToValidate.querySelector('.js-form__age');

formToValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFirstNameValid = (
        IsValid.minLength(firstNameField.value, 2)
        && IsValid.maxLength(firstNameField.value, 20)
    );
    const isLastNameValid = (
        IsValid.minLength(lastNameField.value, 2)
        && IsValid.maxLength(lastNameField.value, 20)
    );
    const isEmailValid = IsValid.email(emailField.value);
    const isPhoneValid = IsValid.phone(phoneField.value);
    const isAgeValid = (
        IsValid.numberRange(ageField.value, 18, 120)
        || !ageField.value
    );

    setFieldState(lastNameField, isLastNameValid);
    setFieldState(firstNameField, isFirstNameValid);
    setFieldState(emailField, isEmailValid);
    setFieldState(phoneField, isPhoneValid);
    setFieldState(ageField, isAgeValid);

    const numberOfInvalidFields = formToValidate.querySelectorAll('.c-form__field--invalid').length;

    setFormState(formToValidate, numberOfInvalidFields);
});
