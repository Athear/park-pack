const dogSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#dogName').value.trim();
    const age = document.querySelector('#age').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    

    const gender= document.getElementsByName('dogGender').val();

    const fixed= document.getElementsByName('fixed').val();
    
    const energy = document.querySelector('#energyRange').value.trim();

    if (name && age && breed && weight && gender && fixed && energy) {
      const response = await fetch('/api/users/dogProfile', {
        method: 'POST',
        body: JSON.stringify({ name, age, breed, weight, fixed, energy}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
document
  .querySelector('#dogSubmit')
  .addEventListener('click', dogSignupFormHandler);