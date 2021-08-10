const Task = require('../models/task');

module.exports.home = function(req,res){
        Task.find({},function(err,tasks){
            return res.render('home',{
            title: 'To-do List',
            task_list: tasks
        });
    });
}

module.exports.create = async function(req,res){
    try{
        let task = await Task.create({
            task : req.body.task,
            lastDate : req.body.Last_Date
        });

        if(req.xhr){
            return res.status(200).json({
                data:{
                    task: task
                },
                message: "TASK IS CREATED!"
            });
        }

        return res.redirect('back');
    }catch(err){
        console.log('error in creating the task');
        return res.redirect('back');
    }
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