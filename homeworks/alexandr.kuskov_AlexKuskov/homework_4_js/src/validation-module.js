import { emailPattern, phonePattern } from './regex-patterns';

export const isValid = {
    minLength(text, length) {
        return text.length >= length;
    },
    maxLength(text, length) {
        return text.length <= length;
    },
    pattern(text, pattern) {
        return text.match(pattern);
    },
    email(text) {
        return this.pattern(text, emailPattern);
    },
    phone(text) {
        return this.pattern(text, phonePattern);
    },
    numberRange(text, min, max) {
        if (text === '') return true;
        return text >= min && text <= max;
    },
};
