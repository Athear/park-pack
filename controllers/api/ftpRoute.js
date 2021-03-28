const router = require('express').Router();
const ftp = require('../../config/ftp')
const { Dog } = require('../../models');
const { withAuth, apiAuth } = require('../../utils/auth');



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
        const incomingIMG = req.body.dogImage //TODO: How do we get this.
        const incomingFileName = incomingIMG.split(/.*[\/|\\]/)[1]; //get just filename from path
        
        const location = req.session.user_id;
        // const location = 'test2' //testing
        const sourceFile = incomingIMG;
        const targetFile = incomingFileName?incomingFileName:incomingIMG; //handles if just a file name was supplied in the first place
        
        const client = await ftp.initialize();
        await client.chdir(location);
        await client.write(sourceFile,targetFile);
        client.end();
        res.status(200).json("Dog uploaded");
    } catch (err) {
      console.log("Dog upload FAILED ",err),
      res.status(400).json(err);
    }
  });


  module.exports = router;