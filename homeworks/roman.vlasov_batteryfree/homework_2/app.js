class SendMessage {
    constructor(el) {
        this.el = el;
        this.validation = true;
        this.alertMessageError = '';
        this.initElements();
        this.listenEvents();
    }

    initElements() {
        this.elements = {
            send: this.el.querySelector('.contact__btn'),
            message: this.el.querySelector('.contact__txtarea'),
            editsText: this.el.querySelectorAll('.contact__edit'),
        };
    }

    listenEvents() {
        this.elements.send.addEventListener('click', () => {
            this.alertMessageError = '';
            this.validationData();
            this.messageAlert();
        });

        this.elements.editsText.forEach((element) => {
            const elem = element;
            element.addEventListener('focus', () => {
                if (element.value === 'Your Name........' || element.value === 'Email Address.....') {
                    elem.value = '';
                }
                this.validation = true;
                this.changeStyleInput(element);
            });
            element.addEventListener('blur', () => {
                if (!element.value.replace(/\s+/g, '').length) {
                    if (element.type.toLowerCase() === 'text') {
                        elem.value = 'Your Name........';
                    }
                    if (element.type.toLowerCase() === 'email') {
                        elem.value = 'Email Address.....';
                    }
                }
            });
        });

        this.elements.message.addEventListener('focus', () => {
            if (this.elements.message.value === 'Your Messages.....') {
                this.elements.message.value = '';
            }
            this.validation = true;
            this.changeStyleInput(this.elements.message);
        });

        this.elements.message.addEventListener('blur', () => {
            if (!this.elements.message.value.replace(/\s+/g, '').length) {
                this.elements.message.value = 'Your Messages.....';
            }
        });
    }

    validationData() {
        const VALID_MAIL = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        const VALID_NAME = /^([a-zA-Z])+\s{1}([a-zA-Z])+$/i;

        this.elements.editsText.forEach((element) => {
            if (element.value === 'Your Name........' || element.value === 'Email Address.....') {
                this.validation = false;
                this.changeStyleInput(element);
                this.alertMessageError = 'Fields \'Your name\' and \'Email\' must be filled.';
            }

            if (element.type.toLowerCase() === 'text') {
                if (!VALID_NAME.test(element.value)) {
                    this.validation = false;
                    this.changeStyleInput(element);
                    if (this.alertMessageError.length) {
                        this.alertMessageError = `${this.alertMessageError}\n The field 'Your name' should contain the surname and first name, the filling should be separated by a space.`;
                    } else {
                        this.alertMessageError = 'The field \'Your name\' should contain the surname and first name, the filling should be separated by a space.';
                    }
                }
            }

            if (element.type.toLowerCase() === 'email') {
                if (!VALID_MAIL.test(element.value)) {
                    this.validation = false;
                    this.changeStyleInput(element);
                    if (this.alertMessageError.length) {
                        this.alertMessageError = `${this.alertMessageError}\n Invalid 'Email' address format`;
                    } else {
                        this.alertMessageError = 'Invalid \'Email\' address format.';
                    }
                }
            }
        });

        if (this.elements.message.value === 'Your Messages.....') {
            this.validation = false;
            this.changeStyleInput(this.elements.message);
            if (this.alertMessageError.length) {
                this.alertMessageError = `${this.alertMessageError}\n Field 'Messages' must be filled.`;
            } else {
                this.alertMessageError = 'Field \'Messages\' must be filled.';
            }
        }
    }

    changeStyleInput(element) {
        const elem = element;
        if (!this.validation) {
            elem.style.border = '3px solid #F00';
        } else {
            elem.style.border = '1px solid #a9a9a9';
        }
    }

    messageAlert() {
        let alertMessage;
        if (this.validation) {
            this.elements.editsText.forEach((element) => {
                alertMessage = `${alertMessage + element.value}\n`;
            });
            alertMessage += this.elements.message.value;
            alert(alertMessage);
        } else {
            alert(this.alertMessageError);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const sendMessage = new SendMessage(document.querySelector('.contact__message'));
    console.dir(sendMessage);
});
