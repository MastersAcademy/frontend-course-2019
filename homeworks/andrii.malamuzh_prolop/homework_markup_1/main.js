(function () {
    const form = document.querySelector('.contacts__form');
    const yourName = document.querySelector('#your-name');
    const yourEmail = document.querySelector('#your-email');
    const yourMessage = document.querySelector('#your-message');

    function nameValidation(name) {
        const nameReg = /^[a-zA-Zа-яА-Я\s]+$/;
        return nameReg.test(name);
    }

    function emailValidation(email) {
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(email);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (
            nameValidation(yourName.value)
            && emailValidation(yourEmail.value)
            && yourMessage.value.length > 0
        ) {
            alert(`Name: ${yourName.value}; \r\nEmail: ${yourEmail.value}; \r\nMessage: ${yourMessage.value};`);
        } else {
            document.querySelector('#form-group__name').classList.remove('error');
            document.querySelector('#form-group__email').classList.remove('error');
            document.querySelector('#form-group__message').classList.remove('error');

            if (yourName.value === '') {
                document.querySelector('#form-group__name .form-group__error').innerHTML = 'Required field';
                document.querySelector('#form-group__name').classList.add('error');
            } else if (nameValidation(yourName.value) === false) {
                document.querySelector('#form-group__name .form-group__error').innerHTML = 'Name can only contain letters';
                document.querySelector('#form-group__name').classList.add('error');
            }

            if (yourEmail.value === '') {
                document.querySelector('#form-group__email .form-group__error').innerHTML = 'Required field';
                document.querySelector('#form-group__email').classList.add('error');
            } else if (emailValidation(yourEmail.value) === false) {
                document.querySelector('#form-group__email .form-group__error').innerHTML = 'Invalid email';
                document.querySelector('#form-group__email').classList.add('error');
            }

            if (yourMessage.value === '') {
                document.querySelector('#form-group__message').classList.add('error');
            }
        }
    });
}());
