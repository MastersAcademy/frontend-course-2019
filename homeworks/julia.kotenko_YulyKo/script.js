let element = document.querySelector("#submit");

function onSubmit() {
    checkEmptyInputs()
}

function getEmailValue() {
    let email = document.querySelector('#email')
    return email.value
}

function getNameValue() {
    let name = document.querySelector('#name')
    return name.value
}

function getMessageValue() {
    let message = document.querySelector('#message')
    return message.value
}

function checkEmptyInputs() {
    let email = getMessageValue()
    let name = getNameValue()
    let message = getMessageValue()
    if (email != '' && name != '' && message != '') {
        validationOfEmail()
    } else {
        alert('It won\'t work that way.\nWrite information in all inputs')
    }
}

function validationOfEmail() {
    let mailformat = /\S+@\S+\.\S+/
    let email = getEmailValue()
    if (email.match(mailformat)) {
        return validationName(name)
    } else {
        alert("Your e-mail is not correct")
    }
}

function validationName() {
    let name = getNameValue()
    if (/^[A-Za-z\s]+$/.test(name)) {
        return showResultMessage()
    } else {
        alert("Your name is not correct written.\nRemove numbers and special symbols from input")
    }
}


function showResultMessage() {
    let email = getEmailValue()
    let name = getNameValue()
    let message = getMessageValue()
    alert('User ' + name + '(' + email + ')\nYour message: ' + message + ' was sended to Jhon Smith')
}
let
