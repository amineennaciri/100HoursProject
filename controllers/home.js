const Todo = require('./../models/todo');

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs');
    },
    getDashBoard: async (req,res)=>{
        try{
            //console.log(req.user._id);
            //console.log(req.user.id);
            const usersTodo = await Todo.find({author:req.user.id});
            res.render('dashboard.ejs',{user: req.user, todos: usersTodo});
        } catch (err) {
            console.log(err);
        }
    },
}