const express = require('express');
const authmiddleware = require('../middlewares/authmiddleware');
const { bloodGroupDetailsContoller } = require('../controllers/analyticsController');
const router = express.Router();

// get BLOOD DATA
router.get('/bloodGroups-data',authmiddleware,bloodGroupDetailsContoller );

module.exports = router;