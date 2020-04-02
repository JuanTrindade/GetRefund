const router = require('express').Router();

const DashboardController = require('../controllers/DashboardController');

router.get('/', DashboardController.index);
router.get('/:id', DashboardController.show);

module.exports = router;
