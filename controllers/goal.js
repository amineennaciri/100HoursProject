const passport = require('passport');
const mongoose = require("mongoose");
const User = require('./../models/user');
const Goal = require('./../models/goal');

module.exports = {
    getGoal: (req,res)=>{
        res.render('goal.ejs',{ user: req.user});
    },
}