var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /api/service-1:
 *   get:
 *     tags: [service-1]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 *         examples:
 *           application/json: { data: 'GET result' }
 */
router.get('/service-1', function(req, res, next) {
  res.status(200).send({ data: 'GET result' });
});

/**
 * @swagger
 * /api/service-1:
 *   post:
 *     tags: [service-1]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.post('/service-1', function(req, res, next) {
  res.status(200).send('POST result');
});

/**
 * @swagger
 * /api/service-1:
 *   put:
 *     tags: [service-1]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.put('/service-1', function(req, res, next) {
  res.status(200).send('PUT result');
});

/**
 * @swagger
 * /api/service-1:
 *   delete:
 *     tags: [service-1]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.delete('/service-1', function(req, res, next) {
  res.status(200).send('DELETE result');
});

module.exports = router;
