export const isValid = {
    minLength(text, length) {
        return text.length >= length;
    },
    maxLength(text, length) {
        return text.length <= length;
    },
    pattern(text, pattern) {
        return pattern.test(text);
    },
    email(text) {
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(text);
    },
    phone(text) {
        const phoneReg = /^\+[0-9]{2}\([0-9]{3}\)[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
        return phoneReg.test(text);
    },
    numberRange(text, min, max) {
        return text >= min && text <= max;
    },
};
