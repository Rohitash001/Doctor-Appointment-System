const express = require('express')
const { loginController, registerController, authController, applyDoctorController,getAllNotificationController,deleteAllNotificationController, getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController  } = require('../controllers/userCtrl')
const authMiddlewares = require('../middlewares/authmiddlewares')


//router object

const router = express.Router()


//routes

//LOGIN || POST

router.post('/login', loginController)

//REGISTER || POST

router.post('/register', registerController)

//Auth || POST
router.post('/getUserData', authMiddlewares, authController)

//apply Doctor || POST
router.post('/apply-doctor', authMiddlewares, applyDoctorController)

//Notification Doctor || POST
router.post('/get-all-notification', authMiddlewares, getAllNotificationController);

//Notification Doctor || POST
router.post('/delete-all-notification', authMiddlewares, deleteAllNotificationController);


//Get All Doc

router.get('/getAllDoctors', authMiddlewares , getAllDoctorsController)

// BOOK APPOINTMENT
router.post('/book-appointment',authMiddlewares,bookAppointmentController);


//BOOKING AVAILABLITY
router.post('/booking-availbility',authMiddlewares,bookingAvailabilityController);

// Appointment List
router.get('/user-appointments',authMiddlewares,userAppointmentsController);


module.exports = router;
