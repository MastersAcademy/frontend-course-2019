class IsValid {
    minLength(text, length) {
        return text.length >= parseInt(length, 10);
    }

    maxLength(text, length) {
        return text.length <= parseInt(length, 10);
    }

    pattern(text, pattern) {
        return pattern.test(text);
    }

    email(text) {
        return this.pattern(text, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }

    phone(text) {
        return this.pattern(text, /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/);
    }

    numberRange(text, min, max) {
        const numericalValue = Number(text);
        return numericalValue >= min && numericalValue <= max;
    }
}

export default Object.freeze(new IsValid());
