'use strict'

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mevnDB';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then( () => console.log(`Database conected to ${uri}`))
    .catch( err => console.log(err));

module.exports = mongoose;

