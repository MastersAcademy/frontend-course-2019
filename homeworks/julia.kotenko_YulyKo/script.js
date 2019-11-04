let element = document.querySelector("#submit");

function onSubmit() {
    checkEmptyInputs()
}


function checkEmptyInputs() {
    let email = document.querySelector('#email')
    let name = document.querySelector('#name')
    let message = document.querySelector('#message')

    if (email.value != '' && name.value != '' && message.value != '') {
        validationOfEmail(email.value, name.value)
        return true;
    } else {
        alert('Seriously? XD\nIt won\'t work that way.\nWrite information in all inputs')
        return false;
    }
}

function validationOfEmail(email, name) {
    var mailformat = /\S+@\S+\.\S+/
    if (email.match(mailformat)) {
        return validationName(name)
    } else {
        alert("Your e-mail is not correct")
        return false
    }
}


function validationName(name) {
    if (/^[A-Za-z\s]+$/.test(name)) {
        return true
    } else {
        alert("Your name is not correct written.\nRemove numbers and special symbols from input")
        return false
    }
}
