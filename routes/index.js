var express = require('express');
var router = express.Router();

router.get('/get-data', function(req, res, next) {
  res.status(200).send('Test');
});

module.exports = router;
