class SendMessage {
    constructor(el) {
        this.formEl = el;
        this.initElements();
        this.listenEvents();
        this.isValid = false;
    }

    initElements() {
        this.elements = {
            messageEl: this.formEl.querySelector('.js-contact-message'),
            nameEl: this.formEl.querySelector('.js-contact-name'),
            emailEl: this.formEl.querySelector('.js-contact-email'),
        };
    }

    listenEvents() {
        this.formEl.addEventListener('submit', (element) => {
            element.preventDefault();
            this.validate();
            if (this.isValid) this.sendMessage();
        });
    }
/* eslint-disable */
    isEmptyField(text) {
        return !text.trim();
    }

    isPattern(text, pattern) {
        return !pattern.test(text);
    }

    validateName() {
        const NAME_PATTERN = /^([a-zA-Z])+\s{1}([a-zA-Z])+$/;
        if (this.isEmptyField(this.elements.nameEl.value)) return '\'Name\' fiels is required.\n';
        if (this.isPattern(this.elements.nameEl.value, NAME_PATTERN)) return '\'Name\' has not valid format.\n';
    }

    validateEmail() {
        const EMAIL_PATTERN = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (this.isEmptyField(this.elements.emailEl.value)) return '\'Email\' fiels is required.\n';
        if (this.isPattern(this.elements.emailEl.value, EMAIL_PATTERN)) return '\'Email\' has not valid format.\n';
    }

    validateMessage() {
        if (this.isEmptyField(this.elements.messageEl.value)) return '\'Messages\' fiels is required.\n';
    }

    validate() {
        let validationError = '';
        const vErrorName = this.validateName();
        const vErrorEmail = this.validateEmail();
        const vErrorMessage = this.validateMessage();

        this.setValidStyle(this.elements.nameEl, !vErrorName);
        this.setValidStyle(this.elements.emailEl, !vErrorEmail);
        this.setValidStyle(this.elements.messageEl, !vErrorMessage);

        if (vErrorName) validationError = vErrorName;
        if (vErrorEmail) validationError += vErrorEmail;
        if (vErrorMessage) validationError += vErrorMessage;

        this.isValid = !validationError;

        if (!this.isValid) alert(validationError);
    }

    sendMessage() {
        alert('Message send');
    }

    setValidStyle(input, swKey) {
        input.classList.toggle('contact__invalid', !swKey);
    }
}

const sendMessage = new SendMessage(document.querySelector('.js-contact-form'));
console.dir(sendMessage);
