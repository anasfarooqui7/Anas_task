const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  validateRegister,
  validateLogin,
} = require('../middleware/validateMiddleware');
const authController = require('../controllers/authController');

router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/profile', auth, authController.getProfile);
router.put('/profile', auth, authController.updateProfile);
router.delete('/profile', auth, authController.deleteProfile);

module.exports = router;
