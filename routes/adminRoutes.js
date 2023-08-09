const express = require('express')

const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminCtrl')
const authMiddlewares = require('../middlewares/authmiddlewares')
const router = express.Router()



router.get('/getAllUsers', authMiddlewares, getAllUsersController )


router.get('/getAllDoctors', authMiddlewares, getAllDoctorsController)


// POST METHODE || STATUS
router.post('/changeAccountStatus', authMiddlewares, changeAccountStatusController)
module.exports = router;
