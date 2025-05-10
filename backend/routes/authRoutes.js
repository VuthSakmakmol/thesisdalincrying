const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);  // only customer
router.post('/login', login);        // all roles

module.exports = router;
