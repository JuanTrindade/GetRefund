const router = require('express').Router();
const multer = require('multer');

const multerConfig = require('../config/upload');
const upload = multer(multerConfig);

const SolicitationController = require('../controllers/SolicitationController');

router.get('/', SolicitationController.index);
router.post('/', upload.single('picture'), SolicitationController.store);
router.get('/:id', SolicitationController.show);

module.exports = router;
