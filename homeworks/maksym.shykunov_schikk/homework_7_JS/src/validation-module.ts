export const isValid = {
    minLength(text: String, length: Number): boolean {
        return text.length >= length;
    },
    maxLength(text: String, length: Number): boolean {
        return text.length <= length;
    },
    pattern(text: String, pattern: RegExp): RegExpMatchArray {
        return text.match(pattern);
    },
    email(text: String): boolean {
        return this.pattern(text, /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
    },
    phone(text: String): boolean {
        return this.pattern(text, /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/);
    },
    numberRange(text: String, min: Number, max: Number): boolean {
        if (text === '') return true;
        return +text >= min && +text <= max;
    },
};
