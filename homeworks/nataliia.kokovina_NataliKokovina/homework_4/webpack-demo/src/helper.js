export function addInvalid(item) {
    return item.classList.add('invalid');
}

export function addSubmitFormMes(item) {
    return item.classList.add('submitForm');
}

export function cleared(item) {
    if (item.classList.contains('invalid')) {
        item.classList.remove('invalid');
    }
}

export function clearedSubmitMes(item) {
    if (item.classList.contains('submitForm')) {
        item.classList.remove('submitForm');
    }
}
