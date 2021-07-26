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
        task : req.body.task,
        lastDate : req.body.Last_Date
    },
    function(err,newTask){
        if(err){
            console.log('error in creating the task');
            return;
        }

        return res.redirect('back');
    });
}

module.exports.delete = function(req,res){
    Task.findById(req.params.id,function(err,task){
        task.remove();
        return res.redirect('back');
    });
}

module.exports.complete = function(req,res){
    var Id = req.body.checkbox;
    Task.findById(Id,function(err,task){
        if(err){
            console.log('task could not be removed');                   
            return res.redirect('/');
        }
        task.remove();
        return res.redirect('/');
    });
}