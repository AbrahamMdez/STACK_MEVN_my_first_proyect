'use strict'

const express = require('express');
const morgan = require('morgan');

//Settings
require('./database');
const app = express();
app.set('port', process.env.PORT || 8080);

//Routes


//Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Static files
app.use(express.static(__dirname + '/public'));

//Port listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});