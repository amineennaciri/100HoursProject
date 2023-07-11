const passport = require('passport');
const mongoose = require("mongoose");
const User = require('./../models/user');
const Goal = require('./../models/goal');

module.exports = {
    getGoal: (req,res)=>{
        res.render('goal.ejs',{ user: req.user});
    },
    postGoal: async (req, res, next)=>{
        const goal = new Goal({
            goal: req.body.goal,
            schedule: req.body.schedule,
            author: req.user._id,
          });
          const result = await goal.save();
          res.redirect("/dashboard");
    },
    deleteGoal: async (req, res, next)=>{
        try{
            await Goal.findOneAndDelete({_id:req.body.goalIdFromJSFile})
            console.log('Deleted Goal')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    updateGoal: async (req, res, next)=>{
        try{
            await Goal.findOneAndUpdate({_id:req.body.goalIdFromJSFile},{
                goal: req.body.goalInputFromJSFile,
                schedule:req.body.goalScheduleFromJSFile
            })
            console.log('Update Goal')
            res.json('Updated It')
        }catch(err){
            console.log(err)
        }
    },
}