export interface Validation {
    minLength(text: string, length: number): boolean;
    maxLength(text: string, length: number): boolean;
    pattern(text: string, pattern: RegExp): RegExpMatchArray;
    email(text: string): boolean;
    phone(text: string): boolean;
    numberRange(text: string, min: number, max: number): boolean;
}
