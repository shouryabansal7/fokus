const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    lastDate:{
        type: Date
    }
},{
    timestamp: true
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;