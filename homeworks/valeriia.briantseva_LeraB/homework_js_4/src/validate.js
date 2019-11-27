export const isValid = {
    minLength(text, length) {
        return text.length >= length;
    },
    maxLength(text, length) {
        return text.length <= length;
    },
    pattern(text, pattern) {
        return text.match(pattern) !== null;
    },
    email(text) {
        // eslint-disable-next-line no-useless-escape
        if ((text === '') || (!text.replace(/\s/g, '').length)) {
            return false;
        }
        return true;
    },
    phone(text) {
        if ((text === '') || (!text.replace(/\s/g, '').length)) {
            return false;
        }
        return true;
    },
    numberRange(text, min, max) {
        if ((text >= min) && (text <= max)) {
            return true;
        }

        return false;
    },
};
