const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ftpRoutes = require('./ftpRoute')

router.use('/users', userRoutes);
router.use('/ftp', ftpRoutes);

module.exports = router;
