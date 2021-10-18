var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /api/service-2:
 *   get:
 *     tags: [service-2]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 *         examples:
 *           application/json: { data: 'GET result' }
 */
router.get('/service-2', function(req, res, next) {
  res.status(200).send({ data: 'GET result' });
});

/**
 * @swagger
 * /api/service-2:
 *   post:
 *     tags: [service-2]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.post('/service-2', function(req, res, next) {
  res.status(200).send('POST result');
});

/**
 * @swagger
 * /api/service-2:
 *   put:
 *     tags: [service-2]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.put('/service-2', function(req, res, next) {
  res.status(200).send('PUT result');
});

/**
 * @swagger
 * /api/service-2:
 *   delete:
 *     tags: [service-2]
 *     description: The endpoint description.
 *     responses:
 *       200:
 *         description: The status code description.
 */
router.delete('/service-2', function(req, res, next) {
  res.status(200).send('DELETE result');
});

module.exports = router;
