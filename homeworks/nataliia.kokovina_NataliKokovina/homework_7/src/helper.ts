export function addInvalid(item: HTMLInputElement): void {
    return item.classList.add('invalid');
}

export function addSubmitFormMes(item: HTMLInputElement): void {
    return item.classList.add('submitForm');
}

export function cleared(item: HTMLInputElement): void {
    if (item.classList.contains('invalid')) {
        item.classList.remove('invalid');
    }
}

export function clearedSubmitMes(item: HTMLInputElement): void {
    if (item.classList.contains('submitForm')) {
        item.classList.remove('submitForm');
    }
}
