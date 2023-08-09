const express =  require('express')
const authmiddlewares = require('../middlewares/authmiddlewares')
const router = express.Router()
const {getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController} = require("../controllers/doctorCtrl")


//POST SINGLR DOC INFO
router.post('/getDoctorInfo', authmiddlewares, getDoctorInfoController)

//POST UPDATE PROFILE
router.post('/updateProfile', authmiddlewares, updateProfileController)

//POST GET SINGLE DOC INFO
router.post('/getDoctorById', authmiddlewares, getDoctorByIdController)

//GET appointments



//GET Appointments
router.get(
    "/doctor-appointments",
    authmiddlewares,
    doctorAppointmentsController
);

//POST UPDATE STATUS
router.post('/update-status',authmiddlewares,updateStatusController)



module.exports = router