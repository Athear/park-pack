const router = require('express').Router();
const { Dog, Activity, User, Join_Dog_Activity } = require('../../models');
const { withAuth, apiAuth } = require('../../utils/auth');


router.get('/', apiAuth, async (req,res) => {
    try {
        const Dogs = await Dog.findAll({
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              {
                  model: Activity,
                  through: Join_Dog_Activity,
              },
            ],
        });
        
    } catch (err) {
        res.status(400).json(err);
      }
});

router.get('/:id', apiAuth, async (req,res) => {
    try {
        const Dogs = await Dog.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              {
                  model: Activity,
                  through: Join_Dog_Activity,
              },
            ],
        });
        
    } catch (err) {
        res.status(400).json(err);
      }
});
router.post('/dogprofile', apiAuth, async (req, res) => {
  try {
    const newDog = await Dog.create({
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      weight: req.body.weight,
      energy: req.body.energy,
      user_id: req.session.user_id,
    });
    res.status(200).json(newDog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', apiAuth, async (req, res) => {
  try {
    const dogData = await Dog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!dogData) {
      res.status(404).json({ message: 'No Dog found with this id!' });
      return;
    }

    res.status(200).json(dogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;