export interface Form {
    [firstName: string]: HTMLInputElement;
    lastName: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    age: HTMLInputElement;
}

export interface FormValue {
    [key: string]: string;
}
