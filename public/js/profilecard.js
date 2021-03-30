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
      console.log("youve added to your pack!");
    } else {
      alert(response.statusText);
      console.log("oops, theres a bug!");
    }
  }
};
document.querySelectorAll(".addpack").forEach(function (element) {
  element.addEventListener("click", addpack);
});

// $(document).on("click", "#addpack", function (e) {
//     e.preventDefault;
//     recallOMDB($(this).attr("data-recent"));
//   });
