class SendMessage {
    constructor(el) {
        this.el = el;
        this.initElements();
        this.listenEvents();
    }

    initElements() {
        this.elements = {
            contactMessage: this.el.querySelector('.js-contact-message'),
            contactName: this.el.querySelector('.js-contact-name'),
            contactEmail: this.el.querySelector('.js-contact-email'),
            contactForm: this.el.querySelector('.js-contact__form'),
        };
    }

    listenEvents() {
        const VALID_NAME = /^([a-zA-Z])+\s{1}([a-zA-Z])+$/;
        const VALID_MAIL = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        const VALID_MESS = /^/i;

        this.elements.contactName.addEventListener('input', () => {
            this.getValidateData(this.elements.contactName, VALID_NAME);
        });

        this.elements.contactEmail.addEventListener('input', () => {
            this.getValidateData(this.elements.contactEmail, VALID_MAIL);
        });

        this.elements.contactMessage.addEventListener('input', () => {
            this.getValidateData(this.elements.contactMessage, VALID_MESS);
        });

        this.elements.contactForm.addEventListener('submit', (element) => {
            let isValid = this.getValidateData(this.elements.contactName, VALID_NAME);
            isValid = this.getValidateData(this.elements.contactEmail, VALID_MAIL) && isValid;
            isValid = this.getValidateData(this.elements.contactMessage, VALID_MESS) && isValid;

            if (isValid) {
                alert(`${this.elements.contactName.value} ${this.elements.contactEmail.value} ${this.elements.contactMessage.value}`);
            } else {
                alert('Verify data entry.\nNo data sent.');
            }

            element.preventDefault();
        });
    }

    getValidateData(element, pattern) {
        if (!element.value.replace(/\s+/g, '').length) {
            // eslint-disable-next-line no-param-reassign
            element.value = '';
        }

        if (!pattern.test(element.value) || element.value === '') {
            this.setStyleInValid(element, true);
            return false;
        }
        this.setStyleInValid(element, false);
        return true;
    }

    // eslint-disable-next-line class-methods-use-this
    setStyleInValid(element, toggle) {
        element.classList.toggle('contact__invalid', toggle);
    }
}

    const sendMessage = new SendMessage(document.querySelector('.js-contact__form'));
    console.dir(sendMessage);
