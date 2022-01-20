const router = require('express').Router();
const DateController = require('../controllers/date');

router.get('/:date?', DateController.parseDate);

module.exports = router;
