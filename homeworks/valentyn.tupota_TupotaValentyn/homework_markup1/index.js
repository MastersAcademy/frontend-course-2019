const form = document.querySelector('#form');

const firstName = form.querySelector('#firstName');
const email = form.querySelector('#email');
const text = form.querySelector('#formText');
const submitButton = form.querySelector('#submit');

const firstNamePattern = /\b[^\d\W]+\b/g;
const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validator = (element, pattern = '') => {
    const val = element.value;

    const showError = (textError) => {
        element.setAttribute('value', textError);
        element.classList.add('error-color', 'error-border');
        setTimeout(() => {
            element.setAttribute('value', val);
            element.classList.remove('error-color', 'error-border');
        }, 1000);
    };

    if (!val.match(pattern)) {
        const errorMessage = 'only letters';
        showError(errorMessage);
        return false;
    }

    if (val === '') {
        const errorMessage = 'required';
        showError(errorMessage);
        return false;
    }

    return { val };
};


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameVale = validator(firstName, firstNamePattern);
    const emailValue = validator(email, emailPattern);
    const textValue = validator(text);

    const isValid = nameVale.val && emailValue.val && textValue.val;

    if (isValid) {
        alert(`
           name: ${nameVale.val} \n
           email: ${emailValue.val} \n
           text: ${textValue.val}
    `);
    }
});
