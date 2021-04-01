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
      // document.location.replace("/dashboard");
      // console.log("you've added to your pack!");
      sweetAlert.fire({
        title: "This Doggo has been added to your pack!!",
        // text: response.statusText,
        showConfirmButton: true,
        icon: "success",
      });
      // document.location.replace("/dashboard");
    } else {
      sweetAlert.fire({
        title: "This Doggo is already in  your pack!!",
        // text: response.statusText,
        icon: "warning",
        showConfirmButton: true,
      });
      // console.log("oops, theres a bug!");
    }
  }
};

var viewProfile = async (event) => {
  var dog_id = event.target.value;
  console.log(event);
  if (dog_id) {
    const response = await fetch("api/dogs/" + dog_id);

    if (response.ok) {
      console.log(response);
      document.location.replace("/individualprofile/" + dog_id);
    } else {
      sweetAlert.fire({
        title: "Cannot see doggo's profile",
        text: response.statusText,
        icon: "warning",
      });
      console.log("oops, theres a bug!");
    }
  }
};

document.querySelectorAll(".addpack").forEach(function (element) {
  element.addEventListener("click", addpack);
});
document.querySelectorAll(".viewprofile").forEach(function (element) {
  element.addEventListener("click", viewProfile);
});

//scroll handling using intersection observer api
const header = document.querySelector(".header");
const spot = document.querySelector(".spot");

const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  spotIsVisible
    ? header.classList.remove("fixed-top")
    : header.classList.add("fixed-top");
};

const options = {
  root: null,
  rootMargin: "0px",
  threshhod: 0,
};

const observer = new IntersectionObserver(handleScroll, options);

observer.observe(spot);
