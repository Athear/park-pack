


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
  const gender = document.querySelector('input[name="dogGender"]:checked').value;
  const fixed = document.querySelector('input[name="fixed"]:checked').value;
  const picture = document.querySelector('#dogPic').files[0];
  const pictureName = picture.name


  var formData = new FormData();

  formData.append('dogImage',picture);

  //Store the actual dog picture
  if(picture){
    await fetch('/api/ftp/dogimage',{
      method: 'POST',
      body: formData    
    })
  }

  if (name && age && breed && weight && energy) {
    const response = await fetch('/api/dogs/dogprofile', {
      method: 'POST',
      body: JSON.stringify({ name, age, breed, weight, energy, gender, fixed, pictureName }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("dog profile created!" + response);
    } else {
      sweetAlert.fire( {
        title: "Doggo profile not created",
        // text: response.statusText,
        icon: "warning"
      })
      console.log("OOPS, dog profile NOT created");
    }
  }
};

var loadFile = function(event) {
    var image = document.getElementById('dogPicImg');
    console.log(event.target.files[0])
    image.src = URL.createObjectURL(event.target.files[0]);
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


