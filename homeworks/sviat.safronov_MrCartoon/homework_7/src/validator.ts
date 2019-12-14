import { emailRegex, phoneRegex } from './regex';

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
        return emailRegex.test(text);
    },
    phone(text: string): boolean {
        return text.length >= 6 && phoneRegex.test(text);
    },
    numberRange(text: string | number, min: number, max: number): boolean {
        return Number(text) >= min && Number(text) <= max;
    },
};
