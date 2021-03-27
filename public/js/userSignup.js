const userSignupFormHandler = async (event) => {
    event.preventDefault();
    console.log("user submit button clicked");
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    // const gender = document.querySelector('#gender').value;
    // const genderpref = document.getElementById("genderPref").value;
    // const gender = document.querySelector('#email').value.trim();
    // const gender= $("input[name='gender']:checked").val();
    const password = document.querySelector('#password').value.trim();
    const zipcode = document.querySelector('#zip').value.trim();
    // const distance = document.querySelector('#distanceRange').value.trim();

    if (firstName && lastName && email 
      // && gender && genderpref 
      && password && zipcode 
      // && distance
      ) 
      {
      const response = await fetch('/api/users/userprofile', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, zipcode}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dogprofile');
      } else {
        alert("USER SIGNUP JS FAILED");
      }
    }
  };
document
  .querySelector('#userSubmit')
  .addEventListener('click', userSignupFormHandler);