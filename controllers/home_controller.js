const Task = require('../models/task');

module.exports.home = async function(req,res){
    try{
        let tasks = await Task.find({})
        .sort('-createdAt');

        return res.render('home',{
            title: 'To-do List',
            task_list: tasks
        });
    }catch(err){
        console.log(err);
        return;
    }
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

module.exports.delete = async function(req,res){
    try{
        let task = await Task.findById(req.params.id);
        task.remove();

        if(req.xhr){
            return res.status(200).json({
                data:{
                    task_id: req.params.id
                },
                message: "Task Deleted"
            });
        }
        return res.redirect('back');
    }catch(err){
        return res.redirect('back');
    }
}

module.exports.complete = async function(req,res){
    try{
        var Id = req.body.checkbox;
        let task = await Task.findById(Id);
        task.remove();

        if(req.xhr){
            return res.status(200).json({
                data:{
                    task_id: Id
                },
                message: "Task Completed"
            });
        }

        return res.redirect('/');
    }catch(err){
        console.log('task could not be removed');
        return res.redirect('/');
    }
}