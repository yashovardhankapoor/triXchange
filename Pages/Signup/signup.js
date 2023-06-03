document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  var form = document.querySelector('form');

  // Listen for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get the input values
    var name = document.querySelector('input[type="name"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;

    // Retrieve signup data from local storage
    var signupData = localStorage.getItem('signupData');
    
    if (signupData) {
      // Check if the entered email matches an existing user
      var existingData = JSON.parse(signupData);
      if (existingData.email === email) {
        alert('User already exists');
        return;
      }
    }

    // Create an object to hold the data
    var data = {
      name: name,
      email: email,
      password: password
    };

    // Save the data to local storage
    localStorage.setItem('signupData', JSON.stringify(data));

    // Display success message
    alert('Signup successful');

    // Redirect the user to a success page or perform other actions
    window.location.href = '/triXchange/Pages/Login/login.html';
  });
});
