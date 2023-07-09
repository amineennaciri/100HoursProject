const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home');
const todoController = require('./../controllers/todo');
const { ensureAuth } = require('./../middleware/auth');
// ensureAuth: means we are checking if the user is logged in. once logged in we can get the Todos. check the middleware file
//before dashboard can be run, we must run ensureAuth

router.get('/', ensureAuth, homeController.getDashBoard);
router.get('/todo', todoController.getTodo);
router.post('/posttodo', todoController.postTodo);


module.exports = router;