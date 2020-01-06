const MAIL_VALID: RegExp = /^([a-z0-9_.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
const PHONE_VALID: RegExp = /^\+{1}\d{1,2}\({1}\d{3}\){1}\d{3}([-]{1}\d{2}){2}/;
const NUM_VALID: RegExp = /^([0-9])+$/;

export const isValid = {
    minLength(text: string, length: number): boolean {
        return text.length >= length;
    },
    maxLength(text: string, length: number): boolean {
        return length >= text.length;
    },
    pattern(text: string, pattern: RegExp): boolean {
        return pattern.test(text);
    },
    email(text: string): boolean {
        return this.pattern(text, MAIL_VALID);
    },
    phone(text: string): boolean {
        return this.pattern(text, PHONE_VALID);
    },
    numberRange(text: string, min: number, max: number): boolean {
        if (this.pattern(text, NUM_VALID)) {
            return Number(text) >= min && Number(text) <= max;
        }
        return false;
    },
};
