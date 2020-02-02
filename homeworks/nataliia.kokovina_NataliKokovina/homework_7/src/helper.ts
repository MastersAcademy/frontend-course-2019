export function toggleFieldError(item: HTMLInputElement, isValid: boolean): void {
    if (item.classList.contains('invalid') && isValid || !isValid && !item.classList.contains('invalid')) {
        item.classList.toggle('invalid');
    }
}

export function toggleSubmitMes(itemAdd: HTMLInputElement, itemClean: HTMLInputElement): void {
    if (!itemAdd.classList.contains('submitForm')) {
        itemAdd.classList.toggle('submitForm');

        if (itemClean.classList.contains('submitForm')) {
            itemClean.classList.toggle('submitForm');
        }
    }
}
