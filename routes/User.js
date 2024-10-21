const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/UserController');

// Route to register a new user
router.post('/register', createUser);

// Route to log in a user
router.post('/login', loginUser);

module.exports = router;