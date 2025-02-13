const express = require('express');
const { createInventoryController, getinventoryController, getDonarsController, getHospitalsController, getOrganisationsController, getOrganisationsForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');
const authmiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

// Require routes
router.post('/create-inventory', createInventoryController);
router.get('/get-inventory', authmiddleware, getinventoryController);
router.get('/get-recent-inventory', authmiddleware, getRecentInventoryController);
router.post('/get-inventory-hospital', authmiddleware, getInventoryHospitalController);
router.get('/get-donars', authmiddleware, getDonarsController);
router.get('/get-hospitals', authmiddleware, getHospitalsController);
router.get('/get-organisation', authmiddleware, getOrganisationsController);
router.get('/get-organisation-for-hospital', authmiddleware, getOrganisationsForHospitalController);

module.exports = router;