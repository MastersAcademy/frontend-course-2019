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
        return this.pattern(text, /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
    },
    phone(text) {
        return this.pattern(text, /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/);
    },
    numberRange(text, min, max) {
        if (this.pattern(text, /^([0-9])+$/)) {
            return text >= min && text <= max;
        }
        return false;
    },
};
