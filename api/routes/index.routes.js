const router = require('express').Router();

router.get('/', (req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.json({ 'api endpoint': `${fullUrl}api/{date}` });
});

module.exports = router;
