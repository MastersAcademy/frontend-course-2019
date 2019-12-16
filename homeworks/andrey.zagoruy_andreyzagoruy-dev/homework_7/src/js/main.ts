import IsValid from './validator';

function setFieldState(field: HTMLInputElement, isValid: boolean): void {
    field.classList.toggle('c-form__field--invalid', !isValid);
}

function setFormState(form: HTMLFormElement, isValid: boolean): void {
    form.classList.toggle('c-form--valid', isValid);
}

const contactForm = document.querySelector<HTMLFormElement>('.js-form');
const firstNameField = contactForm.querySelector<HTMLInputElement>('.js-form__firstname');
const lastNameField = contactForm.querySelector<HTMLInputElement>('.js-form__lastname');
const emailField = contactForm.querySelector<HTMLInputElement>('.js-form__email');
const phoneField = contactForm.querySelector<HTMLInputElement>('.js-form__phone');
const ageField = contactForm.querySelector<HTMLInputElement>('.js-form__age');

contactForm.addEventListener('submit', (event: Event) => {
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
        !ageField.value
        || IsValid.numberRange(ageField.value, 18, 120)
    );

    setFieldState(lastNameField, isLastNameValid);
    setFieldState(firstNameField, isFirstNameValid);
    setFieldState(emailField, isEmailValid);
    setFieldState(phoneField, isPhoneValid);
    setFieldState(ageField, isAgeValid);

    const isFormValid = (
        isFirstNameValid
        && isLastNameValid
        && isEmailValid
        && isPhoneValid
        && isAgeValid
    );

    setFormState(contactForm, isFormValid);
});
