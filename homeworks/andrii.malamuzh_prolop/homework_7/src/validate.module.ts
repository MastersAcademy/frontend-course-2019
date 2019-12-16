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
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(text);
    },
    phone(text: string): boolean {
        const phoneReg = /^\+[0-9]{2}\([0-9]{3}\)[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
        return phoneReg.test(text);
    },
    numberRange(text: string, min: number, max: number): boolean {
        return +text >= min && +text <= max;
    },
};
