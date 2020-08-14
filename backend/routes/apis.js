var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function (req, res, next) {
    res.status(200);
    res.json({ 'text': 'hello' });
});


/* GET users listing. */
router.get('/error', function (req, res, next) {
    res.status(500);
    res.json({ 'error': 'Sample error' });
});
module.exports = router;
