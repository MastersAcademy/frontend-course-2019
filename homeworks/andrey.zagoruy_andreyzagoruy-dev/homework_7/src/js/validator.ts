class IsValid {
    minLength(text: string, length: number): boolean {
        return text.length >= length;
    }

    maxLength(text: string, length: number): boolean {
        return text.length <= length;
    }

    pattern(text: string, pattern: RegExp): boolean {
        return pattern.test(text);
    }

    email(text: string): boolean {
        return this.pattern(text, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }

    phone(text: string): boolean {
        return this.pattern(text, /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/);
    }

    numberRange(text: string, min: number, max: number): boolean {
        const numericalValue = Number(text);
        return numericalValue >= min && numericalValue <= max;
    }
}

export default Object.freeze(new IsValid());
