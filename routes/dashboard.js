const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home');
const todoController = require('./../controllers/todo');
const goalController = require('./../controllers/goal');
const { ensureAuth } = require('./../middleware/auth');
// ensureAuth: means we are checking if the user is logged in. once logged in we can get the Todos. check the middleware file
//before dashboard can be run, we must run ensureAuth

router.get('/', ensureAuth, homeController.getDashBoard);
// todo's routes
router.get('/todo',ensureAuth, todoController.getTodo);
router.post('/posttodo', todoController.postTodo);
router.delete('/deleteTodo', todoController.deleteTodo);
router.put('/updateTodo', todoController.updateTodo);
// goal's routes
router.get('/growth',ensureAuth, goalController.getGoal);
//router.post('/posttodo', todoController.postTodo);

module.exports = router;