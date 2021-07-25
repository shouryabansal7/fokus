const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./view');
app.use(expressLayouts);

app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('Error:${err}');
    }
});