const router = require('express').Router();
const { Dog } = require('../../models');
const { withAuth, apiAuth } = require('../../utils/auth');
//user_id



router.get('/dogimage/:id', apiAuth, async (req,res) => {
    try {
        const Dogs = await Dog.findByPk(req.params.id);
        //TODO: call a function to put that dogs picture in a temp folder
        res.status(400);
    } catch (err) {
        res.status(400).json(err);
      }
});


router.post('/dogimage', apiAuth, async (req, res) => {
    try {
      //TODO: this needs testing outside of authorization.
        const incomingIMG = req.body.dogImage //TODO: How do we get this.
        const incomingFileName = incomingIMG.split(/.*[\/|\\]/)[1]; //get just filename from path

        const location = req.session.user_id;
        const sourceFile = incomingIMG;
        const targetFile = incomingFileName?incomingFileName:incomingIMG;
    
        const client = await ftp.initialize();
        await client.chdir(location);
        client.write(sourceFile,targetFile);
        client.end();
        res.status(200).json();
    } catch (err) {
      console.log("Dog upload FAILED ",err),
      res.status(400).json(err);
    }
  });