const express = require('express');
const trackingController = require('../controllers/trackingController');
const router = express.Router();

router.post('/send', trackingController.sendTracking);
router.post('/receive', trackingController.reveiceTracking)


module.exports = router;