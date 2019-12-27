import {FieldPattern} from './models/FieldPattern';
import {FieldText} from './models/FieldText';
import {FieldTextLength} from './models/FieldTextLength';
import {FieldValueRange} from './models/FieldValueRange';

export function minLength(field: FieldTextLength): boolean {
    return field.text.length >= field.length;
}

export function maxLength(field: FieldTextLength): boolean {
    return field.text.length <= field.length;
}

export function isEmail(field: FieldText): boolean {
    return field.text !== '' && field.text.replace(/\s/g, '').length > 0;
}

export function isPhone(field: FieldText): boolean {
    return field.text !== '' && field.text.replace(/\s/g, '').length > 0;
}

export function numberRange(field: FieldValueRange): boolean {
    return field.text >= field.min && field.text <= field.max;
}

export function pattern(field: FieldPattern): boolean {
    return field.patterns.test(field.text);
}
