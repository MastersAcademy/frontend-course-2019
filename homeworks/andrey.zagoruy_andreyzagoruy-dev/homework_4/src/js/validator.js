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
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    }

    phone(text) {
        return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(text);
    }

    numberRange(text, min, max) {
        const numericalValue = Number(text);
        return numericalValue >= parseInt(min, 10) && numericalValue <= parseInt(max, 10);
    }
}

export default Object.freeze(new IsValid());
