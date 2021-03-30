var addpack = async (event) => {
  console.log(event.srcElement.dataset.user);
  event.preventDefault();

  const friend_id = event.srcElement.dataset.user;
  console.log(friend_id);
  // const friend_id = event.dataset.user;
  // const user_id =  req.session.user_id;

  if (friend_id) {
    const response = await fetch("/api/dogs/profilecard", {
      method: "POST",
      body: JSON.stringify({ friend_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
      console.log("you've added to your pack!");
    } else {
      sweetAlert.fire( {
        title: "Doggo not added to your pack",
        text: response.statusText,
        icon: "warning"
      });
      console.log("oops, theres a bug!");
    }
  }
};

var viewProfile = async (event) => {
  var user_id = event.srcElement.dataset.user
  
  if (user_id) {
    const response = await fetch("api/dogs/:id", {
      method: "POST",
      body: JSON.stringify({ user_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard/" + user_id);
    } else {
      sweetAlert.fire( {
        title: "Cannot see doggo's profile",
        text: response.statusText,
        icon: "warning"
      });
      console.log("oops, theres a bug!");
    }

  }
};


document.querySelectorAll(".addpack").forEach(function (element) {
  element.addEventListener("click", addpack);
});
document.querySelectorAll(".viewProfile").forEach(function (element) {
  element.addEventListener("click", viewProfile);
});
// $(document).on("click", "#addpack", function (e) {
//     e.preventDefault;
//     recallOMDB($(this).attr("data-recent"));
//   });
