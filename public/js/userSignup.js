const userSignupFormHandler = async (event) => {
    event.preventDefault();
    console.log("user submit button clicked");
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
 // const gender = document.getElementById("gender").value;
    // const genderPref = document.getElementById("genderPref").value;

    const password = document.querySelector('#password').value.trim();
    const zipcode = document.querySelector('#zip').value.trim();
    // const distance = document.querySelector('#distanceRange').value.trim();

    if (firstName && lastName && email && password && zipcode) {
      const response = await fetch('/api/users/userprofile', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, zipcode }),

        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dogprofile');
      } else {

        alert(response.statusText);
        console.log("UserSignup JS failing");
      }
    }
  };
document
  .querySelector('#userSubmit')
  .addEventListener('click', userSignupFormHandler);