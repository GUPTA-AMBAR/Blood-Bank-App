const express = require('express');
const { getDonarListController, getHospitalListController, getOrganisationListController,deleteUserController } = require('../controllers/adminController');
const adminmiddleware = require('../middlewares/adminmiddleware');
const authmiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

// get donar DATA
router.get('/donar-list',adminmiddleware,authmiddleware,getDonarListController );

// get hospital DATA
router.get('/hospital-list',adminmiddleware,authmiddleware,getHospitalListController );

// get organisation DATA
router.get('/organisation-list',adminmiddleware,authmiddleware,getOrganisationListController );

//delete user
router.delete('/delete-user/:id',adminmiddleware,authmiddleware,deleteUserController );

module.exports = router;