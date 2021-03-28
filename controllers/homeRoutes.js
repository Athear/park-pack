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

router.get("/userprofile", async (req, res) => {
  try {
    // console.log(res);
    res.render("userProfile");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dogprofile", async (req, res) => {
  try {
    // console.log(res);
    res.render("dogProfile");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("dogProfile");
    return;
  }

  res.render("login");
});

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
router.get("/chat",withAuth, async (req, res) => {
  try {
    res.render("chat");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chatroom/:room",withAuth, async (req, res) => {
  console.log(req.params);
  try {
    res.render("chatroom", {
      name: req.params.room,

      //add in key value pair for messages from the room
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//boiler template below

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
