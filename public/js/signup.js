const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#firstName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/parentProfile');
      } else {
        alert(response.statusText);
      }
    }
  };
document
  .querySelector('')
  .addEventListener('submit', signupFormHandler);