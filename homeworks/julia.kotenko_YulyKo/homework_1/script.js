const NAME_FORMAT = /^[A-Za-z\s]+$/;
const MAIL_FORMAT = /\S+@\S+\.\S+/;

class ContactMeForm {
    constructor() {
        this.form = document.querySelector('form');
        this.email = this.form.querySelector('#email');
        this.name = this.form.querySelector('#name');
        this.message = this.form.querySelector('#message');
        this.form.querySelector('#submit').addEventListener('click', () => this.onSubmit());
    }

    getEmailValue() {
        return this.email.value;
    }

    getNameValue() {
        return this.name.value;
    }

    getMessageValue() {
        return this.message.value;
    }

    showResultMessage() {
        const name = this.getNameValue();
        const email = this.getEmailValue();
        const message = this.getMessageValue();
        alert(`User ${name}\n(${email})\nYour message: ${message} was sanded to John Smith`);
    }

    validateName() {
        const name = this.getNameValue();
        if (!NAME_FORMAT.test(name)) {
            return 'Your name is not correct';
        }
        return '';
    }

    validateEmail() {
        const email = this.getEmailValue();
        if (!email.match((MAIL_FORMAT))) {
            return 'You have problem with email';
        }
        return '';
    }

    onSubmit() {
        const validationEmailError = this.validateEmail();
        const validationNameError = this.validateName();
        if (validationEmailError === '' || validationNameError === '') {
            return '';
        }
        return this.showResultMessage();
    }
}

new ContactMeForm();