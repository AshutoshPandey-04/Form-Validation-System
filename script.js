document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const output = document.getElementById('output');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const firstName = document.getElementById('firstName').value.trim();
      const middleName = document.getElementById('middleName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
      const dob = document.getElementById('dob').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
    
      if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === '' ||
        dob === '' ||
        phone === '' ||
        phone === '1234567890' ||
        password === 'password' ||
        password.length < 8 ||
        password === firstName ||
        password === lastName
      ) {
        showError('Please enter correct information.');
      } else if (password !== confirmPassword) {
        showError('Passwords do not match.');
      } else {

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('middleName', middleName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('dob', dob);
        localStorage.setItem('phone', phone);
        showSuccess('Form submitted successfully!');
        form.reset();
      }
    });
  
    function showError(message) {
      output.innerHTML = `<p id="error">${message}</p>`;
    }
  
    function showSuccess(message) {
      output.innerHTML = `<p>${message}</p>`;
    }
  });
  