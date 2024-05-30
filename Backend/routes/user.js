const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/authController'); // Importer le contrôleur de connexion
const router = express.Router();

router.post('/register', registerUser);
router.post('/login22', loginUser); // Changer la route de connexion

module.exports = router;
