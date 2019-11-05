let form = document.querySelector('.post-form');
let userName = form.querySelector('#contact-name');
let userEmail = form.querySelector('#contact-email');
let userMessage = form.querySelector('#contact-message');

let validateElement = function(element, regExp, errorMessage) {
    if (!element.value.match(regExp)) {
        alert(errorMessage);
        element.focus();
        return false;
    }
    return true;
};

let checkUserName = function() {
    let nameRegEx = /^[A-Za-z ]+$/;
    return validateElement(userName, nameRegEx, 'Name must have alphabet characters only');
};

let checkUserEmail = function() {
    let emailRegEx = /^[^@]+@[^@]+\.[^@]+$/;
    return validateElement(userEmail, emailRegEx, 'Email not valid');
};

let validateForm = function() {
    return checkUserName() && checkUserEmail();
};

form.addEventListener('submit', showData);

function showData() {
    if (!validateForm()) {
        return;
    }

    const contactInformation = {
        Name: userName.value,
        Email: userEmail.value,
        Message: userMessage.value,
    };

    alert('Name: ' + contactInformation.Name + '\n' + 'Email: ' + contactInformation.Email + '\n' + 'Message: ' +
        contactInformation.Message);
}
