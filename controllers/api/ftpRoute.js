const router = require('express').Router();
const ftp = require('../../config/ftp')
const { Dog } = require('../../models');
const { withAuth, apiAuth } = require('../../utils/auth');
var multiparty = require('multiparty');


router.get('/dogimage/:id', apiAuth, async (req,res) => {
    try {
        const dog = await Dog.findByPk(req.params.id);
        //dog.pic
        //dog.user_id
        //TODO: call a function to put that dogs picture in a temp folder
        const location = dog.pic
        const remoteFile = dog.user_id

        const client = await ftp.initialize();
        const incoming = await client.readOne(location,remoteFile);
        client.end();

        res.status(200).json(incoming);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


router.post('/dogimage',apiAuth, async (req, res) => {
    try {
      const data = new multiparty.Form();
      data.parse(req, async function(err, fields, files) {
        if(err) throw err;

        const incomingIMG = files.dogImage[0].path
        const incomingFileName = files.dogImage[0].originalFilename
        const location = req.session.user_id;

        const sourceFile = incomingIMG;
        const targetFile = incomingFileName;
        
        const client = await ftp.initialize();
        await client.chdir(location);
        await client.write(sourceFile,targetFile);
        client.end();
        
        res.status(200).json("Dog uploaded");

      });
    } catch (err) {
      console.log("Dog upload FAILED ",err),
      res.status(400).json(err);
    }
  });


  module.exports = router;
