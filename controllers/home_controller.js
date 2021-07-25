const Task = require('../models/task');

module.exports.home = function(req,res){
        Task.find({},function(err,tasks){
            return res.render('home',{
            title: 'To-do List',
            task_list: tasks
        });
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