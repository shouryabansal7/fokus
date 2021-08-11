{
    let createTask = function(){
        let newTaskForm = $("#new-task-form");
    
        newTaskForm.submit(function(e) {
            e.preventDefault();
    
            $.ajax({
                type: 'task',
                url: '/task-create',
                data: newTaskForm.serialize(),
                success: function(data){
                    let newTask = createNewTaskDom(data.data.task);
                    $('#tasks-list-container>ul').prepend(newTask);
                    deleteTask($(' .delete-task-button',newTask));
                    completeTask($(' .checkbox-complete',newTask));
                },error: function(error) {
                    console.log(error.responseText);
                }
            });
        });
    }

    let createNewTaskDom = function(task){
        return $(`<li id="task-${ i._id }">
                        <form action="/task-complete" method="POST">
                            <input type="checkbox" name="checkbox" onChange="this.form.submit()" value="${ i._id }" id="check">
                            <label class="container">
                                ${ i.task }
                                <small>
                                    <a href="/task-delete/${ i.id }" class="delete delete-task-button"><i class="fas fa-times-circle"></i></a>
                                </small> 
                                <small>
                                    <p>Last Date - ${ i.lastDate }</p>
                                </small>
                                <small>
                                    <a href="/task-delete/${ i.id }" class="delete">Delete Task</a>
                                </small>
                            </label>
                        </form>
                    </li>`);
    }

    //method to delete a post from DOM
    let deleteTask = function(deletelink){
        $(deletelink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deletelink).prop('href'),
                success: function(data){
                    $(`task-${ data.data.task_id }`).remove();
                },error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }

    let completeTask = function(completedlink){
        $(completedlink).click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: '/task-complete',
                success: function(data){
                    $(`task-${data.data.task_id}`).remove();
                },error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }

    createTask();
}