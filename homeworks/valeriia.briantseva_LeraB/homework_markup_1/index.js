var userName = document.getElementById("field-user-name").value,
    userEmail = document.getElementById("field-user-email").value,
    userMessage = document.getElementById("filed-message").value,
    btnSubmit = document.getElementById("btn-submit-messages");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  // Validate fields.
  validateInputName(document.getElementById("field-user-name"));
  validateInputEmail(document.getElementById("field-user-email"));
  validateMessage(document.getElementById("filed-message"));

  // If fields are valid show user data.
  if ((!document.getElementById("field-user-name").classList.contains("error")) && (!document.getElementById("field-user-email").classList.contains("error")) && (!document.getElementById("filed-message").classList.contains("error"))) {
    var person = {
      name: userName,
      email: userEmail,
      message: userMessage
    };

    alert("Check the information you entered. If it's ok, just close this message. \n Name: " + userName + "\n Email: " + person.email + "\n Message: " + person.message);

    // Clear fields.
    userName = '';
    userEmail = '';
    userMessage = '';
  }
});

document.getElementById("field-user-name").addEventListener("focus", function () {
  // Remove error class and error message.
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    document.getElementById("user-name-error-message").parentNode.removeChild(document.getElementById("user-name-error-message"));
  }
});


document.getElementById("field-user-name").addEventListener("focusout", function () {
  validateInputName(this);
});

document.getElementById("field-user-email").addEventListener("focus", function () {
  // Remove error class and error message.
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    document.getElementById("user-email-error-message").parentNode.removeChild(document.getElementById("user-email-error-message"));
  }
});

document.getElementById("field-user-email").addEventListener("focusout", function () {
  validateInputEmail(this);
});

document.getElementById("filed-message").addEventListener("focus", function () {
  // Remove error class and error message.
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    document.getElementById("message-error-message").parentNode.removeChild(document.getElementById("message-error-message"));
  }
});

document.getElementById("filed-message").addEventListener("focusout", function () {
  validateMessage(this);
});

// Validate field.
function validateInputName(field) {
  if ((field.value === '') || (!field.value.replace(/\s/g, '').length) || (!field.value.match(/^[a-zA-Z\s]*$/))) {
    if (document.querySelectorAll(".user-name-wrapper > p").length <= 0) {

      // Create an error message.
      var errorMessage = document.createElement("p"),
          errorText = document.createTextNode("The field can contain only letters and spaces.");
      errorMessage.id = "user-name-error-message";
      errorMessage.appendChild(errorText);
      document.getElementsByClassName("user-name-wrapper")["0"].appendChild(errorMessage);
    }

    // Add class to style input if value not valid.
    field.classList.add("error");
  }
}

// Validate field.
function validateInputEmail(field) {
  if ((field.value === '') || (!field.value.replace(/\s/g, '').length) || (!field.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
    if (document.querySelectorAll(".user-email-wrapper > p").length <= 0) {

      // Create an error message.
      var errorMessage = document.createElement("p"),
          errorText = document.createTextNode("The field can't be empty.");

      errorMessage.id = "user-email-error-message";
      errorMessage.appendChild(errorText);
      document.getElementsByClassName("user-email-wrapper")["0"].appendChild(errorMessage);
    }

    // Add class to style input if value not valid.
    field.classList.add("error");
  }
}

// Validate field.
function validateMessage(field) {
  if ((field.value === '') || (!field.value.replace(/\s/g, '').length)) {
    if (document.querySelectorAll(".message-wrapper > p").length <= 0) {

      // Create an error message.
      var errorMessage = document.createElement("p"),
          errorText = document.createTextNode("The field can't be empty");
      errorMessage.id = "message-error-message";
      errorMessage.appendChild(errorText);
      document.getElementsByClassName("message-wrapper")["0"].appendChild(errorMessage);
    }

    // Add class to style input if value not valid.
    field.classList.add("error");
  }
}
