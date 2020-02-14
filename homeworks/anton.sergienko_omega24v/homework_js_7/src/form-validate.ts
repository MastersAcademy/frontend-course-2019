export const isValid = {
    minLength(text: string, length: number) {
        return text.length >= length;
    },
    maxLength(text: string, length: number) {
        return text.length <= length;
    },
    pattern(text: string, pattern: any) {
        return text.match(pattern);
    },
    email(text: string) {
        return this.pattern(text, /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
    },
    phone(text: string) {
        return this.pattern(text, /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/);
    },
    numberRange(text: string, min: number, max: number) {
        if (this.pattern(text, /^([0-9])+$/)) {
            return +text >= min && +text <= max;
        }
        return false;
    },
};
