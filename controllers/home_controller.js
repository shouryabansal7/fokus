const Task = require('../models/task');

module.exports.home = function(req,res){
    return res.render('home',{
        title : "To-do List"
    });
}

module.exports.create = function(req,res){
    Task.create({
        task : req.body.task
    },
    function(err,newTask){
        if(err){
            console.log('error in creating the task');
            return;
        }

        return res.redirect('back');
    });
}