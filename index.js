const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));
//setting views and view engine
app.set('view engine','ejs');
app.set('views','./view');
app.use(express.static('./assets'));
app.use(expressLayouts);
//extracting styles and scripts from code
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//route
app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('Error:${err}');
    }
});