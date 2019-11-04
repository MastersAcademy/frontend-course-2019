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
    email = getMessageValue()
    name = getNameValue()
    message = getMessageValue()
    if (email != '' && name != '' && message != '') {
        validationOfEmail()
    } else {
        alert('It won\'t work that way.\nWrite information in all inputs')
    }
}

function validationOfEmail() {
    var mailformat = /\S+@\S+\.\S+/
    if (getEmailValue.match(mailformat)) {
        return validationName(name)
    } else {
        alert("Your e-mail is not correct")
    }
}


function validationName() {
    if (/^[A-Za-z\s]+$/.test(getNameValue)) {
        return true
    } else {
        alert("Your name is not correct written.\nRemove numbers and special symbols from input")
    }
}
