const form = document.getElementsByClassName('article__form')[0];
const name = document.getElementsByClassName('article__input-name')[0];
const email = document.getElementsByClassName('article__input-email')[0];
const text = document.getElementsByClassName('article__textarea')[0];

form.onsubmit = (event) => {
    event.preventDefault();

    window.alert(`Hi "${name.value}". Your email "${email.value}". \n Your text "${text.value}"`);
};
