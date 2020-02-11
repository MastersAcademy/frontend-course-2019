export function toggleFieldError(item: HTMLInputElement, isValid: boolean): void {
    item.classList.toggle('invalid', !isValid);
}

export function toggleSubmitMessage(successfullFormMessages: HTMLInputElement, invalidFormMessages: HTMLInputElement, isFormValid: boolean): void {
    successfullFormMessages.classList.toggle('submitForm', isFormValid);
    invalidFormMessages.classList.toggle('submitForm', !isFormValid);
}
