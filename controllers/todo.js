const passport = require('passport');
const mongoose = require("mongoose");
const User = require('./../models/user');
const Todo = require('./../models/todo');

module.exports = {
    getTodo: (req,res)=>{
        res.render('todo.ejs',{ user: req.user});
    },
    postTodo: async (req, res, next)=>{
        const todo = new Todo({
            todo: req.body.todo,
            urgency: req.body.urgency,
            author: req.user._id,
          });
          const result = await todo.save();
          res.redirect("/dashboard");
    },

}