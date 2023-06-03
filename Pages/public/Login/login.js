document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Listen for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from being submitted
  
      // Get the input values
      var username = document.querySelector('input[type="text"]').value;
      var password = document.querySelector('input[type="password"]').value;
  
      // Retrieve the stored data from local storage
      var storedData = localStorage.getItem('signupData');
  
      if (storedData) {
        var data = JSON.parse(storedData);
  
        // Check if the entered username and password match the stored data
        if (data.name === username && data.password === password) {
          // Show success alert if the authentication is successful
          alert('Login Successful');
        } else {
          // Show error alert if the authentication fails
          alert('Incorrect Username or Password');
        }
      } else {
        // Show error alert if no signup data is found
        alert('No Signup Data found. Please sign up first.');
      }

      window.location.href = '/triXchange/Pages/Login/login.html';
    });
  });
  