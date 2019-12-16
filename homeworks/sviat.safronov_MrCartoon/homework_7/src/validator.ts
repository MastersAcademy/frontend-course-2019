import { EMAIL_REGEX, PHONE_REGEX } from './regex';

export const isValid = {
    minLength(text: string, length: number): boolean {
        return text.length >= length;
    },
    maxLength(text: string, length: number): boolean {
        return text.length <= length;
    },
    pattern(text: string, pattern: string): boolean {
        return text.includes(pattern);
    },
    email(text: string): boolean {
        return EMAIL_REGEX.test(text);
    },
    phone(text: string): boolean {
        return text.length >= 6 && PHONE_REGEX.test(text);
    },
    numberRange(text: string | number, min: number, max: number): boolean {
        return Number(text) >= min && Number(text) <= max;
    },
};
