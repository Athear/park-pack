const userSignupFormHandler = async (event) => {
  event.preventDefault();
  console.log("user submit button clicked");

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  // const genderPref = document.getElementById("genderPref").value;

  const password = document.querySelector("#password").value.trim();
  const zipcode = document.querySelector("#zip").value.trim();
  // const userName = document.querySelector("#userName").value();

  // const distance = document.querySelector('#distanceRange').value.trim();

  if (firstName && lastName && email && password && zipcode) {
    const response = await fetch("/api/users/ownerprofile", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password, zipcode, gender }),

      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dogprofile");
    } else {
      sweetAlert.fire( {
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

//gender pref modal vanilla javascript

//   const friendModalActive = () => {
//     const friendInfo = document.querySelector(".infoAlert");
//     friendInfo.classList.add("is-active");
//     console.log("modal active");
//   }
//     document
//     .querySelector('#friendPrefInfo')
//     .addEventListener('click', friendModalActive)

// const friendModalInActive = () => {
//   const friendInfoClose = document.querySelector(".infoAlert");
//   friendInfoClose.classList.removeClass("is-active");
//   console.log("modal inactive");
// }
//   document
//     .querySelector('.modal-close')
//     .addEventListener('click', friendModalInActive)

//gender pref modal jquery
// $(document).on("click", "#friendPrefInfo", function () {
//   $(".infoAlert").modal("hide");

//   $(".modal-close").click(function () {
//     $(".infoAlert").modal("hide");
//   });
// });

document.querySelector("#friendPrefInfo").addEventListener("click", function () {
  sweetAlert.fire ({
    title: "Gender Preference",
    text: "We will try to match you with human friends of this gender",
  })
})
