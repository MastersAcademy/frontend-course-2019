import {EMAIL_REG, PHONE_REG} from './regex.module'

export const isValid = {
    minLength(text: string, length: number): boolean {
        return text.length >= length;
    },
    maxLength(text: string, length: number): boolean {
        return text.length <= length;
    },
    pattern(text: string, pattern: RegExp): boolean {
        return pattern.test(text);
    },
    email(text: string): boolean {
        return this.pattern(text, EMAIL_REG);
    },
    phone(text: string): boolean {
        return this.pattern(text, PHONE_REG);
    },
    numberRange(text: string, min: number, max: number): boolean {
        return +text >= min && +text <= max;
    },
};
