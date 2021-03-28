const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');
const ftpRoutes = require('./ftpRoute')

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/ftp', ftpRoutes);

module.exports = router;
