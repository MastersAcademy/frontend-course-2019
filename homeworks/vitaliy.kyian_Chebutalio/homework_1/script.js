'use strict'

// let form = document.querySelector('.form');
// let email = document.querySelector('.mail');
// let message = document.querySelector('.message');



// email.addEventListener('input', function (event) {
//   if (email.validity.valid) {
//     error.className = 'error';
//   }
// }, false);

// form.addEventListener ('submit', function (event) {
//   if (!email.validity.valid) {
//     error.className = "error active";
//     event.preventDefault();
//   }

// }, false);

window.onload = function () {
  let checkVal = function (event) {
    let name = document.querySelector('.name');
    let mail = document.querySelector('.mail');
    let message = document.querySelector('.message');
    let nameRegexp = /^[а-яїіА-ЯЇІ\s]+$/i;
    let mailRegexp = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/i;
    let messageRegexp = /[^\<\>\[\]%\&]+$/i;
    if (!nameRegexp.test(name.value)) {
      name.classList.add('name-error');
      name.value = '';
      name.placeholder = "Введіть справжнє ім'я";
      event.preventDefault();
    } else if (!mailRegexp.test(mail.value)) {
      mail.classList.add('mail-error');
      mail.value = '';
      mail.placeholder = "Невірний емеіл";
      event.preventDefault();
    } else if (!messageRegexp.test(message.value)) {
      message.classList.add('message-error');
      message.value = '';
      message.placeholder = "Це схоже на спам, видаліть спеціальні символи";
      event.preventDefault();
    } else {
      alert(`Ім'я: ${name.value}. \nЕмеіл: ${mail.value}. \nТекст повідомлення: ${message.value}.`);
    }
  }
  
  let btn = document.querySelector('.submit');
  btn.addEventListener('click', checkVal, false);
}

