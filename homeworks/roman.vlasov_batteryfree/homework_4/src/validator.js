// eslint-disable-next-line no-useless-escape
const MAILVALID = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
const PHONEVALID = /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/;
const NUMVALID = /^([0-9])+$/;

export const isValid = {
    minLength(text, length) {
        return text.length >= length;
    },
    maxLength(text, length) {
        return length >= text.length;
    },
    pattern(text, pattern) {
        return pattern.test(text);
    },
    email(text) {
        return this.pattern(text, MAILVALID);
    },
    phone(text) {
        return this.pattern(text, PHONEVALID);
    },
    numberRange(text, min, max) {
        if (this.pattern(text, NUMVALID)) {
            return text >= min && text <= max;
        }
        return false;
    },
};
