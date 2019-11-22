(function () {
    const form = document.querySelector('#main_form');
    const fields = document.querySelectorAll('.validate');
    const formObj = {};
    const validate = {
        name: {
            regExp: /^[a-zA-Zа-яА-Я ]{2,3000}$/,
            errorMessage: 'Minimum 2 characters',
        },
        email: {
            regExp: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
            errorMessage: 'Email is not valid',
        },
        mssg: {
            regExp: /./,
            errorMessage: 'Require field',
        },
    };
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        for (let i = 0; i < fields.length; i++) {
            const nameAttr = fields[i].getAttribute('name');
            const valueInputs = fields[i].value;
            const parent = fields[i].parentNode;
            const errorText = parent.querySelector('.error-mssg');
            if (errorText) {
                errorText.remove();
            }
            if (!validate[nameAttr].regExp.test(valueInputs)) {
                valid = false;
                const errorContainer = document.createElement('span');
                errorContainer.classList.add('error-mssg');
                errorContainer.textContent = validate[nameAttr].errorMessage;
                parent.appendChild(errorContainer);
            } else {
                formObj[nameAttr] = valueInputs;
            }
        }
        if (valid) {
            alert(JSON.stringify(formObj));
            console.log(formObj);
        }
    });
}());
