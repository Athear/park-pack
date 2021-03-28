
const dogSignupFormHandler = async (event) => {
  event.preventDefault();
  

  // const fixed= document.getElementsByName('fixed').val();
  const gender = document.getElementsByName('gender');
  const isFixed = document.getElementsByName('fixed');

  getGender(gender);
  getFixed(isFixed);

  const name = document.querySelector('#dogName').value.trim();
  const age = document.querySelector('#age').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const weight = document.querySelector('#weight').value.trim();
  // const energy = document.querySelector('#energyRange').value;

  if (name && age && breed && weight) {
  const response = await fetch('/api/dogs/dogProfile', {
    method: 'POST',
    body: JSON.stringify({ name, age, breed, weight, gender, isFixed }),
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


  
getGender = (gender) => {

  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked)
      gender.val() = gender[i].value;
      }
};

getFixed = (isFixed) => {

  for (i = 0; i < isFixed.length; i++) {
    if (isFixed[i].checked)
      isFixed[i].value;
  }
};


