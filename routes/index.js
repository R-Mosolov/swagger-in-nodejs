var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /get-data:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/get-data', function(req, res, next) {
  res.status(200).send('Test');
});

module.exports = router;
