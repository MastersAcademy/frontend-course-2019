/* eslint-disable */

(function () {


    // GET USER INFORMATION FROM FORM AND ALERT IT
    function alertMail() {
        let nameInput = document.getElementById('name').value;
        let emailInput = document.getElementById('email').value;
        let textarea = document.getElementsByName('message')[0].value;

        alert("Name: " + nameInput + "\n" + "Email: " + emailInput + "\n" + "Message: " + textarea);
    }

    // VALIDATE CONTACT FORM
    function validateForm(event) {
        event.preventDefault();

        let form = document.forms.contact_form;
        let nameValue = form.name.value;
        let emailValue = form.email.value;
        let messageValue = form.message.value;

        if (!nameValue.match(/^[A-Za-z]+$/) || nameValue === "" || !emailValue.match(/^[A-Za-z0-9.@]+$/) || emailValue === "" || messageValue === "") {
            alert("All fields must be filled out. Check if the filling is correct.");
        } else {
            alertMail()
        }
    }

    let showAlert = document.querySelector('form button');
    showAlert.addEventListener('click', validateForm, true);

}())
