const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home');
const userController = require('./../controllers/user');

router.get('/', homeController.getIndex);
router.get('/signup', userController.getSignUp);
router.post('/postUser', userController.postSignUp);
module.exports = router;