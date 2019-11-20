export const patterns = {
    first_name: {
        regExp: /^[a-zA-Zа-яА-Я ]{2,3000}$/,
    },
    last_name: {
        regExp: /^[a-zA-Zа-яА-Я ]{2,3000}$/,
    },
    email: {
        regExp: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
    },
    phone: {
        regExp: /^[\s()+-]*([0-9][\s()+-]*){9}$/,
    },
    age: {
        regExp: /^([1-9]?\d|100)$/,
    },
};
