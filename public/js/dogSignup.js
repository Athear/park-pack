const dogSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#dogName').value.trim();
    const age = document.querySelector('#age').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    // const gender = document.querySelector('#email').value.trim();
    // const gender= $("input[name='gender']:checked").val();
    // const fixed = document.querySelector('').value.trim();
    const energy = document.querySelector('#energyRange').value.trim();

    if (name && age && breed && weight && energy 
      // && gender && fixed
      ) {
      const response = await fetch('/api/users/dogProfile', {
        method: 'POST',
        body: JSON.stringify({ name, age, breed, weight, energy}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/e');
      } else {
        alert(response.statusText);
      }
    }
  };
document
  .querySelector('#dogSubmit')
  .addEventListener('click', dogSignupFormHandler);