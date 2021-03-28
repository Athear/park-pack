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
    res.render("userProfile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets and renders signin page for dogprofile
router.get("/dogprofile", async (req, res) => {
  try {
    // console.log(res);
    res.render("dogProfile");
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets login page, renders dashboard upon log-in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard"); //change this to userprofile?
    return;
  }

  res.render("login");
});

//get and render dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try{
    const dogData = await Dog.findAll({
      // include: [{model: User}]
      //how to exclude user password from this get?
    });
    console.log("@@you hit dashboard route!@@")
    const dogProfiles = dogData.map((profile)=> profile.get({plain: true}));
    console.log("@@here's the dog data@@", dogProfiles)
  
  }catch(err){res.status(500).json(err);}
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
router.get("/chat",withAuth, async (req, res) => {
  try {
    console.log(res);
    res.render("chat");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chatroom",withAuth, async (req, res) => {
  try {
    console.log(res);
    res.render("chatroom");
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
