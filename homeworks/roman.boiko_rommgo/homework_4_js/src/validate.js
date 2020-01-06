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
        return text;
    },
    phone(text) {
        return text;
    },
    numberRange(text, min, max) {
        return text >= min && text <= max;
    },
};
