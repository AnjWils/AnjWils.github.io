document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var gender = document.getElementById('gender');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var error = document.getElementById('error');
    var strengthMeter = document.getElementById('strengthMeter').firstElementChild;
  
    password.addEventListener('input', function() {
      var strength = calculatePasswordStrength(password.value);
      updateStrengthMeter(strength);
    });
  
    form.addEventListener('submit', function(event) {
      error.style.display = 'none';
      nameError.style.display = 'none';
      
      if (!validateForm()) {
        error.style.display = 'block';
        event.preventDefault();
      }
    });
  
    function validateForm() {
      if (name.value.length < 4){nameError.style.display = 'block'; return false;}
      if (!email.validity.valid) return false;
      if (!validatePassword(password.value)) {
        return false;}
      if (password.value !== confirmPassword.value) return false;
      if (gender.value === "") return false;
      if (address.value.trim() === "") return false;
      if (!phone.validity.valid) return false;
      
      return true;
    }
  
    function validatePassword(password) {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    }
  
    function calculatePasswordStrength(password) {
      var strength = 0;
      if (password.length >= 8) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/\d/.test(password)) strength++;
      if (/[!@#\$%\^&\*]/.test(password)) strength++;
      return strength;
    }
  
    function updateStrengthMeter(strength) {
      var colors = ["red", "orange", "yellow", "lightgreen", "green"];
      strengthMeter.style.width = (strength * 20) + "%";
      strengthMeter.style.backgroundColor = colors[strength - 1] || "red";
    }
  });
  