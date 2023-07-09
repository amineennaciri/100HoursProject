module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs');
    },
    getDashBoard: (req,res)=>{
        res.render('dashboard.ejs',{user: req.user});
    },
}