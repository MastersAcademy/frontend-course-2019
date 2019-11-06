function validate(value, validator) {
  let isFieldValid = true;

  const regexValidators = {
    name: /^[a-zA-Z\s]*$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  switch(validator) {
    case "name":
    case "email":
      isFieldValid = regexValidators[validator].test(value);
      break;
    case "required":
      isFieldValid = value.length > 0 ? true : false;
    default:
      break;
  }
  return isFieldValid;
}

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".js-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      let isFormValid = true;
      event.preventDefault();

      const fieldsToBeValidated = form.querySelectorAll("[data-validators]");
      
      fieldsToBeValidated.forEach((field) => {
        const value = field.value;
        const validators = field.dataset.validators;
        
        [...validators.split(",")].forEach((validator) => {
          const isValid = validate(value, validator.trim());

          if (!isValid) {
            isFormValid = false;
          }
        });
      });


      if (isFormValid) {
        alert("Form is valid, message received!");
      } else {
        alert("Warning: form is invalid");
      }
    });
  });
});