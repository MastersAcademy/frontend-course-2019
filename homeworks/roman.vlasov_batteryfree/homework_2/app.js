class SendMessage {
    constructor(el) {
        this.el = el;
        this.findElements();
        this.listenEvents();
        this.isValid = false;
    }

    findElements() {
        this.elements = {
            message: this.el.querySelector('.js-contact-message'),
            name: this.el.querySelector('.js-contact-name'),
            email: this.el.querySelector('.js-contact-email'),
            form: this.el,
        };
    }

    listenEvents() {
        this.form.addEventListener('submit', (element) => {
            element.preventDefault();
            this.validate();
            if (this.isValid) this.sendMessage();
        });
    }

    isEmptyField(text) {
        return !text.trim();
    }

    isEmail(text) {
        const EMAIL_PATTERN = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        return !EMAIL_PATTERN.test(text);
    }

    isName(text) {
        const NAME_PATTERN = /^([a-zA-Z])+\s{1}([a-zA-Z])+$/;
        return !NAME_PATTERN.test(text);
    }

    validateName() {
        if (this.isEmptyField(this.elements.name.value)) return '\'Name\' fiels is required.\n';
        if (this.isName(this.elements.name.value)) return '\'Name\' has not valid format.\n';
    }

    validateEmail() {
        if (this.isEmptyField(this.elements.email.value)) return '\'Email\' fiels is required.\n';
        if (this.isEmail(this.elements.email.value)) return '\'Email\' has not valid format.\n';
    }

    validateMessage() {
        if (this.isEmptyField(this.elements.message.value)) return '\'Messages\' fiels is required.\n';
    }

    validate() {
        let validationError = '';
        const validationErrorName = this.validateName();
        const validationErrorEmail = this.validateEmail();
        const validationErrorMessage = this.validateMessage();

        this.renderValidationState(this.elements.name, !validationErrorName);
        this.renderValidationState(this.elements.email, !validationErrorEmail);
        this.renderValidationState(this.elements.message, !validationErrorMessage);

        if (vErrorName) validationError = validationErrorName;
        if (vErrorEmail) validationError += validationErrorEmail;
        if (vErrorMessage) validationError += validationErrorMessage;

        this.isValid = !validationError;

        if (!this.isValid) alert(validationError);
    }

    sendMessage() {
        alert('Message send');
    }

    renderValidationState(input, toggle) {
        input.classList.toggle('contact__invalid', !toggle);
    }
}

const sendMessage = new SendMessage(document.querySelector('.js-contact-form'));
console.dir(sendMessage);
