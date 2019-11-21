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
        this.elements.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validate();
            if (this.isValid) alert('Message send');
        });
    }

    static isEmptyField(input) {
        return !input.value.trim();
    }

    static isEmail(input) {
        const EMAIL_PATTERN = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        return !EMAIL_PATTERN.test(input.value);
    }

    static isName(input) {
        const NAME_PATTERN = /^([a-zA-Z])+\s{1}([a-zA-Z])+$/;
        return !NAME_PATTERN.test(input.value);
    }

    validateName() {
        if (SendMessage.isEmptyField(this.elements.name)) return '\'Name\' fiels is required.\n';
        if (SendMessage.isName(this.elements.name)) return '\'Name\' has not valid format.\n';
        return '';
    }

    validateEmail() {
        if (SendMessage.isEmptyField(this.elements.email)) return '\'Email\' fiels is required.\n';
        if (SendMessage.isEmail(this.elements.email)) return '\'Email\' has not valid format.\n';
        return '';
    }

    validateMessage() {
        if (SendMessage.isEmptyField(this.elements.message)) {
            return '\'Messages\' fiels is required.\n';
        }
        return '';
    }

    validate() {
        let validationError = '';
        const validationErrorName = this.validateName();
        const validationErrorEmail = this.validateEmail();
        const validationErrorMessage = this.validateMessage();

        SendMessage.renderValidationState(this.elements.name, !validationErrorName);
        SendMessage.renderValidationState(this.elements.email, !validationErrorEmail);
        SendMessage.renderValidationState(this.elements.message, !validationErrorMessage);

        if (validationErrorName) validationError = validationErrorName;
        if (validationErrorEmail) validationError += validationErrorEmail;
        if (validationErrorMessage) validationError += validationErrorMessage;

        this.isValid = !validationError;

        if (!this.isValid) alert(validationError);
    }

    static renderValidationState(input, toggle) {
        input.classList.toggle('contact__invalid', !toggle);
    }
}

const sendMessage = new SendMessage(document.querySelector('.js-contact-form'));
console.dir(sendMessage);
