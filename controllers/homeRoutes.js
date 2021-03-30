const router = require("express").Router();
const { User, Dog, Friends } = require("../models");
const { withAuth } = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // console.log(res);
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets and renders sign-in page for userprofile
router.get("/userprofile", async (req, res) => {
  try {
    // console.log(res);
    res.render("userprofile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets and renders signin page for dogprofile
router.get("/dogprofile", async (req, res) => {
  try {
    // console.log(res);
    res.render("dogprofile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets login page, redirects to dashboard upon log-in
router.get("/login", (req, res) => {
  console.log("@@logged in at /login homeroute?@@", req.session.logged_in);
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    //change this to userprofile?
    return;
  }
  res.render("login");
});

//get and render dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dogData = await Dog.findAll({
      // include: [{model: User}]
      //how to exclude user password from this get?
    });
    
    const dogs = dogData.map((profile) => profile.get({ plain: true }));
   
    res.render("dashboard", {
      dogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get and render mypack page
router.get("/mypack", withAuth, async (req, res) => {
  try {
    const userData = await User.findbyPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Dog,
        },
        {
          model: Friends,
        },
      ],
    });

    const user = userData.get({ plain: true });
    res.render("mypack", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get and render myprofile page
router.get("/myprofile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },

      include: [{ model: Dog }],
    });

    const user = userData.get({ plain: true });
    console.log("@@hit myprofile route data looks like this ", user);

    const dogs = user.dogs;
    console.log(dogs);

    res.render("myprofile", {
     
      dogs,
      logged_in: req.session.logged_in,
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

//get and render chat landing page
router.get("/chat", withAuth, async (req, res) => {
  try {
    res.render("chat", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get and render chatroom
router.get("/chatroom/:room", withAuth, async (req, res) => {
  console.log(req.params);
  try {
    res.render("chatroom", {
      name: req.params.room,
      logged_in: req.session.logged_in,

      //add in key value pair for messages from the room
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
