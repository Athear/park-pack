const userSignupFormHandler = async (event) => {
  event.preventDefault();
  console.log("user submit button clicked");

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const genPref = document.querySelector('input[name="genderPref"]:checked').value;


  const password = document.querySelector("#password").value.trim();
  const zipcode = document.querySelector("#zip").value.trim();


  if (firstName && lastName && email && password && zipcode && gender && genPref) {
    const response = await fetch("/api/users/ownerprofile", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password, zipcode, gender, genPref }),

      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dogprofile");
    } else {
      sweetAlert.fire({
        title: "User profile not created",
        text: response.statusText,
        icon: "warning"
      })

      console.log("UserSignup JS failing");
    }
  }
};

document
  .querySelector("#userSubmit")
  .addEventListener("click", userSignupFormHandler);

//email set to username

$(function () {
  var emailAdd = $("#email");
  emailAdd.change(function () {
    $("#userName").val(emailAdd.val());
  });
});

// ? icon on user profile
document.querySelector("#friendPrefInfo").addEventListener("click", function () {
  sweetAlert.fire({
    title: "Gender Preference",
    text: "We will try to match you with human friends of this gender",
  })
})
