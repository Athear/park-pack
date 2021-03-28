const dogSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#dogName').value.trim();
    const age = document.querySelector('#age').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    // const gender= document.getElementsByName('gender').val();
    // const fixed= document.getElementsByName('fixed').val();
    const energy = document.querySelector('#energyRange').value;

    // console.log("gender is " + gender + "and fixed is " + fixed)

    if (name && age && breed && weight && energy) {
      const response = await fetch('/api/users/dogProfile', {
        method: 'POST',
        body: JSON.stringify({ name, age, breed, weight, energy}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        console.log("dog profile created!");
      } else {
        alert(response.statusText);
        console.log("OOPS, dog profile NOT created");
      }
    }
  };
document
  .querySelector('#dogSubmit')
  .addEventListener('click', dogSignupFormHandler);