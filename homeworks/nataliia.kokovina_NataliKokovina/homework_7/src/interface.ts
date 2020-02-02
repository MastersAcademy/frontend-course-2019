export interface Form {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    age: HTMLInputElement;
    [key: string]: HTMLInputElement;
}

export interface FormValue {
    [key: string]: string;
}
