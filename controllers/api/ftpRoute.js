const router = require('express').Router();
const { Dog } = require('../../models');
const { withAuth, apiAuth } = require('../../utils/auth');
//user_id



router.get('/dogimage/:id', apiAuth, async (req,res) => {
    try {
        const Dogs = await Dog.findByPk(req.params.id);
        //TODO: call a function to put that dogs picture in a temp folder
    } catch (err) {
        res.status(400).json(err);
      }
});


router.post('/dogimage', apiAuth, async (req, res) => {
    try {
        //TODO: get a dog image from a form, post it to the ftp.
        res.status(200).json();
    } catch (err) {
      console.log("create dog profile FAILED"),
      res.status(400).json(err);
    }
  });