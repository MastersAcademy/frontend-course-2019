interface FieldTextLength {
    text: string,
    length: number
}

interface FieldText {
    text: string
}

interface FieldValueRange {
    text: string,
    min: number,
    max: number
}

interface FieldPattern {
    text: string,
    pattern: string
}


export function minLength(field: FieldTextLength): boolean {
    return field.text.length >= field.length;
}

export function maxLength(field: FieldTextLength): boolean {
    return field.text.length <= field.length;
}

export function isEmail(field: FieldText): boolean {
    // eslint-disable-next-line no-useless-escape
    return !((field.text === '') || (!field.text.replace(/\s/g, '').length));
}

export function isPhone(field: FieldText): boolean {
    return !((field.text === '') || (!field.text.replace(/\s/g, '').length));
}

export function numberRange(field: FieldValueRange): boolean {
    return (field.text.length >= field.min) && (field.text.length <= field.max);
}

export function pattern(field: FieldPattern): boolean {
    return field.text.match(field.pattern) !== null;
}
