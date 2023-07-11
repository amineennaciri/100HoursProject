const Todo = require('./../models/todo');
const Goal = require('./../models/goal');

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs');
    },
    getDashBoard: async (req,res)=>{
        try{
            //console.log(req.user._id);
            //console.log(req.user.id);
            const usersTodo = await Todo.find({author:req.user.id});
            const usersGoal = await Goal.find({author:req.user.id});
            res.render('dashboard.ejs',{user: req.user, todos: usersTodo, goals: usersGoal});
        } catch (err) {
            console.log(err);
        }
    },
}