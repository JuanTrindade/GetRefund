const router = require('express').Router();

router.use('/sessions', require('./session'));
router.use('/users', require('./user'));
router.use('/solicitations', require('./solicitation'));
router.use('/dashboard', require('./dashboard'));
router.use('/acceptances', require('./acceptance'));

module.exports = router;
