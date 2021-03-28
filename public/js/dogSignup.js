


const dogSignupFormHandler = async (event) => {
  event.preventDefault();
  

  // const fixed= document.getElementsByName('fixed').val();
  
  // getGender();
  // getFixed();

  const name = document.querySelector('#dogName').value.trim();
  const age = document.querySelector('#age').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const weight = document.querySelector('#weight').value.trim();
  const energy = document.querySelector('#energyLevel').value;

  if (name && age && breed && weight && energy) {
  const response = await fetch('/api/dogs/dogprofile', {
    method: 'POST',
    body: JSON.stringify({ name, age, breed, weight, energy }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
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


  
// getGender = () => {
//   const gender = document.getElementsByName('gender');
//   for (i = 0; i < gender.length; i++) {
//     if (gender[i].checked)
//       gender.val() = gender[i].value;
//       }
// };

// getFixed = () => {
//   const isFixed = document.getElementsByName('fixed');
//   for (i = 0; i < isFixed.length; i++) {
//     if (isFixed[i].checked)
//       isFixed[i].value;
//   }
// };


