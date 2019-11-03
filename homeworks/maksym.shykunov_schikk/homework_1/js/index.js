(function () {
    
	const form = document.querySelector('#main_form');
	const formInputs = document.querySelectorAll('input, textarea');
	const nameInput = document.querySelector('#user_name');
	const emailInput = document.querySelector('#user_email');
	const mssgInput = document.querySelector('#user_mssg');
	const formObj = {};

    function validateName(name) {
        var nameReg = /^[a-zA-Zа-яА-Я ]{2,3000}$/;
        return nameReg.test( name );
    }
    function validateEmail(email) {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test( email );
    }  

	form.addEventListener("submit" , function() {
		event.preventDefault();
		// Get form values
	    for (let i = 0; i < formInputs.length; i++) {
			let item = formInputs.item(i);
			formObj[item.name] = item.value;
	    }
	    // Validate form and send form values
	    if (validateName(nameInput.value) && validateEmail(emailInput.value) && mssgInput.value.length > 0 ) {
	    	alert(JSON.stringify(formObj));
	    	console.log(formObj);
	    } else {
            if ( validateName(nameInput.value) == false ){
				nameInput.classList.add("invalid");
				setTimeout(function(){
					nameInput.classList.remove("invalid");
				}, 1000);
            }
            if ( validateEmail(emailInput.value) == false ){
				emailInput.classList.add("invalid");
				setTimeout(function(){
					emailInput.classList.remove("invalid");
				}, 1000);
            }
            if (mssgInput.value.length <= 0) {
            	mssgInput.classList.add("invalid");
            	setTimeout(function(){
					mssgInput.classList.remove("invalid");
				}, 1000);
            }
	    }
	});

}());