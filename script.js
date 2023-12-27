function validateForm(event){
            event.preventDefault();
            // Get form values
            const name = document.getElementById('name').value;
            const dateOfBirth = document.getElementById('dob').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass1').value;
            const confirmPassword = document.getElementById('pass2').value;

            // Validate form
            if (!name || !dateOfBirth || !email || !password || !confirmPassword) {
                alert('Please fill out all the fields.');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return false;
            }

            // Display success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) { // Check if the element exists
                successMessage.textContent = 'Registration successful!';
            }
            
            setTimeout(function(){
                location.reload();
            }, 5000);

            return true;
            
        
}