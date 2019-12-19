import { emailPattern, phonePattern } from './regex-patterns';
import { Validation } from './validation';

export const isValid: Validation = {
    minLength(text: string, length: number): boolean {
        return text.length >= length;
    },
    maxLength(text: string, length: number): boolean {
        return text.length <= length;
    },
    pattern(text: string, pattern: RegExp): RegExpMatchArray {
        return text.match(pattern);
    },
    email(text: string): boolean {
        return this.pattern(text, emailPattern);
    },
    phone(text: string): boolean {
        return this.pattern(text, phonePattern);
    },
    numberRange(text: string, min: number, max: number): boolean {
        if (text === '') return true;
        return +text >= min && +text <= max;
    },
};
