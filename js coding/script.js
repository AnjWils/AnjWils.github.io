document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var error = document.getElementById('error');
  
    form.addEventListener('submit', function(event) {
      // Reset the error message
      error.style.display = 'none';
  
      // Check if both email and password are entered
      if (!email.value || !password.value) {
        // If either field is empty, show the error message and prevent form submission
        error.style.display = 'block';
        event.preventDefault();
      }
    });
  });
  