const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    // const gender = document.querySelector('#email').value.trim();
    // const gender= $("input[name='gender']:checked").val();
    const password = document.querySelector('#password').value.trim();
    const zipcode = document.querySelector('#zip').value.trim();
    const distance = document.querySelector('#distanceRange').value.trim();

    if (firstName && lastName && email && password && zipcode && distance) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, zipcode, distance }),
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