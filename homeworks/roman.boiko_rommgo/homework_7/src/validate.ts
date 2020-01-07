export const isValid = {
    minLength(text: string, length: number) {
        return text.length >= length;
    },
    maxLength(text: string, length: number) {
        return text.length <= length;
    },
    pattern(text: string, pattern: any) {
        return pattern.test(text);
    },
    email(text: string) {
        return text;
    },
    phone(text: string) {
        return text;
    },
    numberRange(text: number, min: number, max: number) {
        return text >= min && text <= max;
    },
};
