const  mongoose = require('mongoose');

//connecting to the mongodb database
//establishing the connection wiht mongob server
mongoose.connect('mongodb://localhost:27017/fokus_development',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error coonecting to mongodb"));

db.once('open', function(){
    console.log('connected to database :: MongoDB')
});

module.exports = db;