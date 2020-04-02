const router = require('express').Router();

const AcceptanceController = require('../controllers/AcceptanceController');

router.post('/:id', AcceptanceController.store);

module.exports = router;
