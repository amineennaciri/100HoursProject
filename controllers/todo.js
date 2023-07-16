const passport = require('passport');
const mongoose = require("mongoose");
const User = require('./../models/user');
const Todo = require('./../models/todo');

module.exports = {
    getTodo: (req,res)=>{
        res.render('todo.ejs',{ user: req.user});
    },
    postTodo: async (req, res, next)=>{
        try {
            console.log(req.user._id);
            const todo = new Todo({
                todo: req.body.todo,
                urgency: req.body.urgency,
                author: req.user._id,
              });
              const result = await todo.save();
              res.redirect("/dashboard");    
        } catch (error) {
            console.log(err);
        }
    },
    deleteTodo: async (req, res, next)=>{
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    updateTodo: async (req, res, next)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                todo: req.body.todoInputFromJSFile,
                urgency:req.body.todoUrgencyFromJSFile
            })
            console.log('Update Todo')
            res.json('Updated It')
        }catch(err){
            console.log(err)
        }
    },
}