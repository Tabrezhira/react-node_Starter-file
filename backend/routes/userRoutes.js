const express = require('express')
const {protect} = require('./../middleware/authMiddleware')
const { register, login, profile } = require('../controllers/User.controller')

const router = express.Router()


//@route POST /api/users/register
//@desc Register a new user
//@access Public

router.post('/register',register)

//@route Post /api/users/login
//@desc Authenticate user
//@access Public

router.post('/login',login)

//@route get /api/users/profile
//@desc Get logged-in user's profile (Protect Route)
//@access Private
router.get('/profile', protect ,profile)


module.exports = router