window.onload = function () {
    const checkVal = function (event) {
        const name = document.querySelector('.name');
        const mail = document.querySelector('.mail');
        const message = document.querySelector('.message');
        const nameRegexp = /^[а-яїіА-ЯЇІ\s]+$/i;
        const mailRegexp = /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/i;
        const messageRegexp = /[^<>[\]%&]+$/i;
        if (!nameRegexp.test(name.value)) {
            name.classList.add('name-error');
            name.value = '';
            name.placeholder = 'Введіть справжнє ім\'я';
            event.preventDefault();
        } else if (!mailRegexp.test(mail.value)) {
            mail.classList.add('mail-error');
            mail.value = '';
            mail.placeholder = 'Невірний емеіл';
            event.preventDefault();
        } else if (!messageRegexp.test(message.value)) {
            message.classList.add('message-error');
            message.value = '';
            message.placeholder = 'Це схоже на спам, видаліть спеціальні символи';
            event.preventDefault();
        } else if (name.value === '' || mail.value === '' || message.value === '') {
            event.preventDefault();
        } else {
            alert(`Ім'я: ${name.value}. \nЕмеіл: ${mail.value}. \nТекст повідомлення: ${message.value}.`);
        }
    };
    const btn = document.querySelector('.submit');
    btn.addEventListener('click', checkVal, false);
};
