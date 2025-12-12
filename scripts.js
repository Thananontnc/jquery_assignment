$(document).ready(function() {
    
    $("#myForm").on('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        
        function clearErrors() {
            $("#username, #email, #password, #confirmPassword, #gender").removeClass('is-invalid');
            $("#usernameError, #emailError, #passwordError, #confirmPasswordError, #topicsError, #genderError").text('');
        }
        
        clearErrors();

        const fields = ["#username", "#email", "#password"];
        const fieldIds = ["username", "email", "password"];
        const emptyMessage = "this field must not be empty";

        fields.forEach((selector, index) => {
            if ($(selector).val().trim() === "") {
                $(selector).addClass('is-invalid');
                $(`#${fieldIds[index]}Error`).text(emptyMessage);
                isValid = false;
            }
        });

        if ($("#confirmPassword").val().trim() === "") {
            $("#confirmPassword").addClass('is-invalid');
            $("#confirmPasswordError").text("this field must not be empty");
            isValid = false;
        }

        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        
        if (!$("#confirmPassword").hasClass('is-invalid') && password !== confirmPassword) {
            $("#confirmPassword").addClass('is-invalid');
            $("#confirmPasswordError").text("confirmed password mismatched the password");
            isValid = false;
        }
        
        const topicsError = $("#topicsError");
        if ($(".topic:checked").length === 0) {
            topicsError.text("At least one topic must be selected");
            isValid = false;
        }

        const genderSelect = $("#gender");
        const genderError = $("#genderError");
        
        if (genderSelect.val() === "") { 
            genderSelect.addClass('is-invalid');
            genderError.text("please choose your gender");
            isValid = false;
        }

        if (isValid) {
            alert("Form is valid!");
        }
    });
});