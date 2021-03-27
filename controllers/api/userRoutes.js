const router = require("express").Router();
const { User } = require("../../models");

//test in postman with POST http://localhost:3001/api/users/userprofile

router.post("/userprofile", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res.status(400).json({ message: "Email already exists in our system" });
      return;
    } else if (!userData) {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        zip: req.body.zip,
        password: hash,
        // continue adding user values to save
      });
      user.save().then((result) => {
        console.log(result);
        res.status(200).json({
          message: "User created",
        });
      });
    }
  } catch (err) {
    console.log("create user FAILED"), res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/user_data", (req, res) => {
  console.log(req.session);
  if (!req.session) {
    // The user is not logged in, send back an empty object
    res.json(null);
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      id: req.session.user_id,
      name: req.session.name,
    });
  }
});

module.exports = router;
