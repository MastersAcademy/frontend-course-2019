import IsValid from './validator';

function validateField(fieldValue, validatorType, validatorValue) {
    let isFieldValid = true;
    if (fieldValue || validatorType === 'required') {
        switch (validatorType) {
            case 'minLength':
            case 'maxLength':
            case 'phone':
            case 'email':
                isFieldValid = IsValid[validatorType](fieldValue, validatorValue);
                break;
            case 'range': {
                const [from, to] = validatorValue.split('-');
                isFieldValid = IsValid.numberRange(fieldValue, from, to);
                break;
            }
            case 'required':
                isFieldValid = fieldValue.length > 0;
                break;
            default:
                break;
        }
    }
    return isFieldValid;
}

function onFormSubmit(event) {
    const form = event.target;
    let isFormValid = true;
    event.preventDefault();

    form.classList.remove('c-form--valid');

    const fieldsToBeValidated = form.querySelectorAll('[data-validators]');

    fieldsToBeValidated.forEach((field) => {
        const { value, dataset: { validators } } = field;
        const fieldValidators = validators.split(',');

        field.classList.remove('c-form__field--invalid');

        for (let i = 0; i < fieldValidators.length; i++) {
            const [validatorType, validatorValue = ''] = fieldValidators[i].split(':');
            const isFieldValid = validateField(value.trim(),
                validatorType.trim(),
                validatorValue.trim());

            if (!isFieldValid) {
                field.classList.add('c-form__field--invalid');
                isFormValid = isFieldValid;
                break;
            }
        }
    });

    if (isFormValid) {
        form.classList.add('c-form--valid');
    }
}

function onDocumentReady() {
    const forms = document.querySelectorAll('.js-form');

    forms.forEach((form) => {
        form.addEventListener('submit', onFormSubmit);
    });
}

document.addEventListener('DOMContentLoaded', onDocumentReady);
