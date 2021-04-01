const router = require("express").Router();
const { User, Dog, Friends } = require("../models");
const { withAuth } = require("../utils/auth");
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets and renders sign-in page for userprofile
router.get("/ownerprofile", async (req, res) => {
  try {
    res.render("ownerprofile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets and renders signin page for dogprofile
router.get("/dogprofile", async (req, res) => {
  try {
    res.render("doggyprofile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets login page, redirects to dashboard upon log-in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");

    return;
  }
  res.render("login");
});

//get and render dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dogData = await Dog.findAll({
      include: [{ model: User }],
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

router.get("/individualprofile/:id", withAuth, async (req, res) => {
  try {
    const dogData = await Dog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    const dog = dogData.get({ plain: true });

    res.render("individualprofile", {
      ...dog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get and render mypack page
router.get("/mypack", withAuth, async (req, res) => {
  try {
    const userData = await sequelize.query(
      `select d.*
      from user u
      inner join friend f on u.id = f.user_id
      inner join dog d on d.user_id = f.friend_id 
      where u.id = $userId`,
      {
        bind: { userId: req.session.user_id },
        type: QueryTypes.SELECT,
      }
    );

    res.render("mypack", {
      userData,
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

    const dogs = user.dogs;

    res.render("myprofile", {
      dogs,
      logged_in: req.session.logged_in,
    });
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
