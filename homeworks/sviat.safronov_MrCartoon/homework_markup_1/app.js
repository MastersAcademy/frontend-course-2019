const callback = (event) => {
    event.preventDefault();

    const name = document.querySelector('[name=name]').value;
    const email = document.querySelector('[name=email]').value;
    const message = document.querySelector('[name=message]').value;
    const validator = new RegExp(/^([a-zA-Z ]*)$/i);
    if (validator.test(name)) alert(`Sender first name: ${name}\n Sender email: ${email}\n Message: ${message}`);
};
document.querySelector('#contact-form').addEventListener('submit', callback);
